/* ============================================================
   IDE FEATURES v3
   Estrategia correcta: el textarea (.big-editor, z-index:1) recibe
   TODOS los eventos de mouse porque está encima del highlight div.
   Hacemos hit-testing por posición de texto, no por span.closest().
   - Hover/tooltip:  mousemove en el textarea → calcular línea/col → buscar palabra
   - Occurrence:     keyup/click en textarea → word bajo cursor → overlays
   - Ctrl+Click:     click con e.ctrlKey en textarea → goToDef
   - Active line:    scroll → recalcular top (fix del bug de scroll)
============================================================ */
(function() {
'use strict';

const TT = document.getElementById('ideTooltip');

// ── Helpers ───────────────────────────────────────────────────

function escH(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/** Extrae medidas de layout del textarea (cacheadas). */
function layout(ta) {
    if (ta._layoutCache) return ta._layoutCache;
    const cs = window.getComputedStyle(ta);
    let lh = parseFloat(cs.lineHeight);
    if (isNaN(lh)) lh = parseFloat(cs.fontSize) * 1.6;
    const padTop  = parseFloat(cs.paddingTop)  || 0;
    const padLeft = parseFloat(cs.paddingLeft) || 0;
    const cv = document.createElement('canvas');
    const cx = cv.getContext('2d');
    cx.font = cs.font || (cs.fontSize + ' monospace');
    const charW = cx.measureText('M').width;
    ta._layoutCache = { lh, padTop, padLeft, charW };
    return ta._layoutCache;
}

/** Línea (1-based) y col (0-based) del cursor en el textarea. */
function cursorPos(ta) {
    const before = ta.value.substring(0, ta.selectionStart);
    const arr = before.split('\n');
    return { line: arr.length, col: arr[arr.length - 1].length };
}

/** Línea (1-based) y col (0-based) a partir de coordenadas de mouse. */
function mousePosToLineCol(ta, clientX, clientY) {
    const { lh, padTop, padLeft, charW } = layout(ta);
    const rect = ta.getBoundingClientRect();
    const relX = clientX - rect.left - padLeft  + ta.scrollLeft;
    const relY = clientY - rect.top  - padTop   + ta.scrollTop;
    const lineIdx = Math.max(0, Math.floor(relY / lh));
    const col     = Math.max(0, Math.round(relX / charW));
    return { line: lineIdx + 1, col };
}

/** Palabra de usuario en line/col (line 1-based, col 0-based). */
function wordAt(code, line, col) {
    const lines = code.split('\n');
    if (line < 1 || line > lines.length) return null;
    const ln = lines[line - 1];
    const re = /[a-zA-ZáéíóúÁÉÍÓÚñÑ_\w]/;
    let s = col, e = col;
    while (s > 0 && re.test(ln[s-1])) s--;
    while (e < ln.length && re.test(ln[e])) e++;
    if (s === e) return null;
    return { word: ln.slice(s, e), lineIdx: line - 1, start: s, end: e };
}

/** ¿Es una variable de usuario declarada? */
// Palabras reservadas del lenguaje PSeInt. Aunque el usuario las "declare"
// como variables, NO deben aparecer como user-vars para el resaltado de
// ocurrencias ni el Ctrl+Click — son nombres prohibidos.
const _RESERVED_LANG_FOR_OCC = new Set([
    'proceso','finproceso','algoritmo','finalgoritmo',
    'subproceso','finsubproceso','funcion','función','finfuncion','finfunción',
    'procedimiento','finprocedimiento',
    'si','entonces','sino','finsi','mientras','hacer','finmientras',
    'para','hasta','con','paso','finpara','repetir','que',
    'segun','según','finsegun','finsegún','de','otro','modo',
    'definir','como','dimension','arreglo','leer','escribir','sin','saltar',
    'y','o','no','and','or','not','mod','div',
    'entero','real','texto','cadena','caracter','char','logico','lógico','numerico','numérico',
    'verdadero','falso','true','false','pi','e',
    'var','ref','por','referencia','valor','byref',
    'retornar','devolver','salir','salirpara','interrumpir',
    'borrar','limpiar','pantalla','esperar','tecla','segundos',
    // Built-ins comunes (no se resaltan como ocurrencia de "variable")
    'raiz','rc','sqrt','abs','trunc','redon','round','sen','sin','cos','tan',
    'asen','acos','atan','log','ln','exp','log10','piso','floor','techo','ceil',
    'potencia','pow','signo','sign','aleatorio','random','azar','max','min',
    'maximo','minimo','longitud','largo','subcadena','trozo','substr',
    'mayusculas','minusculas','tomayusculas','tominusculas','amayusculas',
    'aminusculas','convertiratexto','textonumero','numerotexto','convertirencadena',
    'numeroatexto','concatenar','recortar','trim','contiene','reemplazar','replace',
    'posicioncaracter','posicion','indice','caracterenposicion',
    'invertir','reverse','asc','chr','convertiranumero','textoanumero'
]);
function isUserVar(word) {
    if (!word) return false;
    // No tratar palabras reservadas como variables de usuario, ni siquiera
    // si el usuario las "declaró" — el análisis sintáctico marca eso como error.
    if (_RESERVED_LANG_FOR_OCC.has(String(word).toLowerCase())) return false;
    const vm = window._varTypeMap;
    return vm && Object.prototype.hasOwnProperty.call(vm, word);
}

/** ¿Está declarada O es no-declarada conocida? */
function isKnownIdent(word) {
    if (isUserVar(word)) return true;
    if (!window._undeclaredVars) return false;
    for (const [, s] of window._undeclaredVars) { if (s.has(word)) return true; }
    return false;
}

/** Tipo legible de la variable. */
function varType(word) {
    const vm = window._varTypeMap;
    if (!vm || !vm[word]) return null;
    const c = vm[word];
    if (c.includes('kw-type-entero')) return 'Entero';
    if (c.includes('kw-type-real'))   return 'Real';
    if (c.includes('kw-type-texto'))  return 'Texto / Cadena';
    if (c.includes('kw-type-logico')) return 'Lógico';
    return 'Sin tipo explícito';
}

/** Todas las ocurrencias de `word` (case-sensitivo). */
function allOcc(code, word) {
    const res = [];
    const wE  = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re  = new RegExp('(?<![\\wáéíóúÁÉÍÓÚñÑ])' + wE + '(?![\\wáéíóúÁÉÍÓÚñÑ])', 'g');
    const lines = code.split('\n');
    for (let i = 0; i < lines.length; i++) {
        // Strip strings y comentarios para no matchear dentro de ellos
        let ln = lines[i];
        const ci = (() => {
            let inS = false;
            for (let j = 0; j < ln.length - 1; j++) {
                if (ln[j] === '"') inS = !inS;
                if (!inS && ln[j] === '/' && ln[j+1] === '/') return j;
            }
            return -1;
        })();
        let clean = (ci >= 0 ? ln.slice(0, ci) : ln).replace(/"[^"]*"/g, m => ' '.repeat(m.length));
        re.lastIndex = 0;
        let m;
        while ((m = re.exec(clean)) !== null) res.push({ lineIdx: i, start: m.index, end: m.index + m[0].length });
    }
    return res;
}

/** Definición/declaración de `word` en el código. */
function findDef(code, word) {
    const lines = code.split('\n');
    const wE    = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    for (let i = 0; i < lines.length; i++) {
        const ln = lines[i];
        // Definir
        const dm = ln.match(/^\s*Definir\s+(.+?)\s+Como\s+\w+/i);
        if (dm && dm[1].split(',').map(v=>v.trim()).includes(word)) {
            const idx = ln.indexOf(word); return { lineIdx:i, start:idx, end:idx+word.length, kind:'Definir' };
        }
        // Asignación directa (primera)
        const am = ln.match(new RegExp('^\\s*(' + wE + ')\\s*<-'));
        if (am && am[1] === word) {
            const idx = ln.indexOf(word); return { lineIdx:i, start:idx, end:idx+word.length, kind:'Asignación' };
        }
        // Leer
        const lm = ln.match(/^\s*Leer\s+(.+)$/i);
        if (lm && lm[1].split(',').map(v=>v.trim().replace(/\[.*$/,'')).includes(word)) {
            const idx = ln.indexOf(word, ln.toLowerCase().indexOf('leer'));
            return { lineIdx:i, start:idx, end:idx+word.length, kind:'Leer' };
        }
        // Para i <-
        const pm = ln.match(/^\s*Para\s+(\w+)\s*<-/i);
        if (pm && pm[1] === word) {
            const idx = ln.indexOf(word, ln.toLowerCase().indexOf('para'));
            return { lineIdx:i, start:idx, end:idx+word.length, kind:'Para (iteración)' };
        }
        // Parámetro de SubProceso/Funcion
        const fm = ln.match(/^\s*(?:SubProceso|Funcion|Función|Procedimiento)\s+(?:\w+\s*<-\s*)?(\w+)\s*\(([^)]*)\)/i);
        if (fm && fm[2]) {
            const params = fm[2].split(',').map(p => p.replace(/^\s*(var|ref)\s+/i,'').trim());
            if (params.includes(word)) {
                const idx = ln.indexOf(word, (ln.indexOf('(') || 0));
                return { lineIdx:i, start:idx, end:idx+word.length, kind:'Parámetro' };
            }
        }
    }
    return null;
}

// ── FEATURE 1: Occurrence Highlight ──────────────────────────

let _occWord   = null;
let _occEls    = [];
let _occTimer  = null;

function clearOcc() { _occEls.forEach(el => el.remove()); _occEls = []; _occWord = null; }

function paintOcc(ta, word, originLineIdx, originStart) {
    clearOcc(); _occWord = word;
    // FIX uniformidad: aceptar AMBOS contenedores (playground usa big-editor-container,
    // lecciones usan editor-container). Sin esto, en lecciones se caía a parentElement
    // que tenía positioning distinto y los recuadros aparecían offset.
    const cont = ta.closest('.big-editor-container, .editor-container') || ta.parentElement;
    if (!cont) return;
    // Asegurar position: relative en el contenedor para que los hijos absolute
    // se posicionen relativo a él (no al viewport).
    if (cont && getComputedStyle(cont).position === 'static') {
        cont.style.position = 'relative';
    }
    const { lh, padTop, padLeft, charW } = layout(ta);
    const taRect   = ta.getBoundingClientRect();
    const contRect = cont.getBoundingClientRect();
    const offTop   = taRect.top  - contRect.top;
    const offLeft  = taRect.left - contRect.left;
    const occs = allOcc(ta.value, word);
    const allLines = ta.value.split('\n');
    for (const o of occs) {
        // Calcular columna visual (tabs = 4 espacios)
        let visStart = 0;
        const ln = allLines[o.lineIdx] || '';
        for (let i = 0; i < o.start; i++) visStart += (ln[i] === '\t') ? (4 - visStart % 4) : 1;
        const top  = offTop  + padTop  + o.lineIdx * lh - ta.scrollTop;
        const left = offLeft + padLeft + visStart * charW - ta.scrollLeft;
        const w    = (o.end - o.start) * charW;
        if (top < offTop - lh || top > offTop + ta.clientHeight + lh) continue;
        const el = document.createElement('div');
        el.style.cssText = `position:absolute;top:${top}px;left:${left}px;width:${w}px;height:${lh}px;pointer-events:none;z-index:2;border-radius:2px;`;
        const isOrigin = o.lineIdx === originLineIdx && o.start === originStart;
        el.className = isOrigin ? 'occurrence-origin' : 'occurrence-highlight';
        cont.appendChild(el);
        _occEls.push(el);
    }
}

function scheduleOcc(ta) {
    clearTimeout(_occTimer);
    _occTimer = setTimeout(() => {
        const { line, col } = cursorPos(ta);
        const info = wordAt(ta.value, line, col);
        if (!info || !isUserVar(info.word)) { clearOcc(); return; }
        // FIX perf: si la palabra-bajo-cursor no cambió y el texto tampoco,
        // no recalcular las ocurrencias — solo recolocar la origin si hace falta.
        if (_occWord === info.word && ta._occLastValueLen === ta.value.length) {
            return;
        }
        _occWord = info.word;
        ta._occLastValueLen = ta.value.length;
        paintOcc(ta, info.word, info.lineIdx, info.start);
    }, 180);
}

// ── FEATURE 2: Hover Tooltip ──────────────────────────────────

let _ttTimer   = null;
let _ttVisible = false;
let _ctrlDown  = false;

document.addEventListener('keydown', e => { if (e.key === 'Control' || e.key === 'Meta') _ctrlDown = true; });
document.addEventListener('keyup',   e => { if (e.key === 'Control' || e.key === 'Meta') _ctrlDown = false; });

function showTT(word, clientX, clientY, sourceTa) {
    if (!TT) return;
    const type = varType(word);
    const isUndecl = (() => {
        if (!window._undeclaredVars) return false;
        for (const [, s] of window._undeclaredVars) if (s.has(word)) return true;
        return false;
    })();
    // Usar el editor que disparó el hover (no hardcodear playground)
    let ta = sourceTa;
    if (!ta && document.activeElement && document.activeElement.tagName === 'TEXTAREA') {
        ta = document.activeElement;
    }
    if (!ta) ta = document.getElementById('playgroundEditor');
    const def = ta ? findDef(ta.value, word) : null;
    if (!type && !def && !isUndecl) return;

    let html = `<span class="tt-header">${escH(word)}</span>`;
    if (isUndecl) {
        html += `<span class="tt-type" style="color:var(--color-error)"> ⚠ Variable no declarada</span>`;
    } else if (type) {
        html += `<span class="tt-type">: ${escH(type)}</span>`;
    }
    if (def && ta) {
        const defText = (ta.value.split('\n')[def.lineIdx] || '').trim();
        html += `<br><code style="color:#94a3b8;font-size:0.73rem">${escH(defText.length > 55 ? defText.slice(0,55)+'…' : defText)}</code>`;
        html += `<span class="tt-line">Definida en línea ${def.lineIdx + 1} · ${escH(def.kind)}</span>`;
    }
    if (!isUndecl) html += `<span class="tt-hint">Ctrl+Click → ir a definición</span>`;

    TT.innerHTML = html;
    TT.style.display = 'block';
    _ttVisible = true;

    const tw = TT.offsetWidth || 300, th = TT.offsetHeight || 110;
    const vw = window.innerWidth,     vh = window.innerHeight;
    let tx = clientX + 16, ty = clientY - th - 10;
    if (tx + tw > vw - 8) tx = clientX - tw - 10;
    if (ty < 8) ty = clientY + 24;
    TT.style.left = tx + 'px';
    TT.style.top  = ty + 'px';
}

function hideTT() { if (TT) { TT.style.display = 'none'; _ttVisible = false; } }

// ── FEATURE 3: Go To Definition ───────────────────────────────

function goToDef(word, sourceTa) {
    // Usar el textarea que disparó el Ctrl+Click; fallback al playground
    const ta = sourceTa || document.getElementById('playgroundEditor');
    if (!ta) return;
    const def = findDef(ta.value, word);
    if (!def) {
        window.showToast && window.showToast('⚠ No se encontró definición de "' + word + '"', 2200);
        return;
    }
    const lines = ta.value.split('\n');
    let pos = 0;
    for (let i = 0; i < def.lineIdx; i++) pos += lines[i].length + 1;
    pos += def.start;

    // FIX: limpiar el highlight anterior ANTES de mover el cursor
    // para evitar que la línea de origen quede pintada. Tanto el div
    // absoluto .active-line-highlight como TODOS los .ln-row.current
    // del gutter del editor de destino.
    const cont = ta.closest('.big-editor-container, .playground-editor-panel, .editor-container');
    if (cont) {
        cont.querySelectorAll('.ln-row.current').forEach(n => n.classList.remove('current'));
        const oldHl = cont.querySelector('.active-line-highlight');
        if (oldHl) oldHl.style.display = 'none';
    }

    // Enfocar y mover cursor
    ta.focus();
    ta.setSelectionRange(pos, pos + word.length);

    // Scroll centrado
    const { lh, padTop } = layout(ta);
    const targetY = padTop + def.lineIdx * lh - ta.clientHeight / 2 + lh / 2;
    ta.scrollTop = Math.max(0, targetY);

    // Forzar reseteo del cache interno y re-aplicar SOLO sobre la línea destino
    if (window._invalidateActiveRowRef)    window._invalidateActiveRowRef();
    // Esperar al siguiente frame para que selectionchange / scroll terminen
    // antes de repintar — evita que un listener tardío reaplique la línea vieja.
    requestAnimationFrame(() => {
        if (window._updateActiveLineHighlight) window._updateActiveLineHighlight(ta, def.lineIdx + 1);
        if (window._reapplyCurrentRow)         window._reapplyCurrentRow(ta);
    });
    // Repintar ocurrencias en la nueva posición
    setTimeout(() => paintOcc(ta, word, def.lineIdx, def.start), 50);

    window.showToast && window.showToast('↗ Línea ' + (def.lineIdx + 1) + ' · ' + def.kind, 2000);
}

// ── Adjuntar eventos ──────────────────────────────────────────

function attachIDE(ta) {
    if (!ta || ta._ideV3) return;
    ta._ideV3 = true;

    // FIX uniformidad: contenedor + highlight para ambos formatos (playground + lecciones)
    const cont = ta.closest('.big-editor-container, .editor-container') || ta.parentElement;
    const hlDiv = cont ? cont.querySelector('.big-editor-highlight, .editor-highlight') : null;

    // --- Occurrence: cursor move ---
    ta.addEventListener('keyup',   () => scheduleOcc(ta));
    ta.addEventListener('click',   () => scheduleOcc(ta));
    ta.addEventListener('mouseup', () => scheduleOcc(ta));
    ta.addEventListener('input',   () => clearOcc());

    // --- Occurrence: scroll repaint ---
    ta.addEventListener('scroll', () => {
        // Sync highlight div scroll
        if (hlDiv) { hlDiv.scrollTop = ta.scrollTop; hlDiv.scrollLeft = ta.scrollLeft; }
        // Repintar ocurrencias
        if (_occWord) {
            const { line, col } = cursorPos(ta);
            const info = wordAt(ta.value, line, col);
            paintOcc(ta, _occWord, info ? info.lineIdx : -1, info ? info.start : -1);
        }
    });

    // Hover tooltip y Ctrl+Click → goToDef: DESACTIVADOS por preferencia del usuario.
    // El usuario prefiere solo el resaltado de ocurrencias (sin popup ni navegación).
    // Los errores/advertencias se comunican vía el subrayado sierra y los paneles
    // colapsables, que es suficiente. Si en el futuro se desea reactivar, basta
    // con descomentar este bloque.

    window.addEventListener('resize', () => { ta._layoutCache = null; clearOcc(); });
}

// ── Init ──────────────────────────────────────────────────────

function ideInit() {
    const ta = document.getElementById('playgroundEditor');
    if (ta) attachIDE(ta);
}

// Exponer attachIDE globalmente para que openLesson() lo pueda llamar
// sobre exampleEditor / challengeEditor cuando se crean dinámicamente.
window.attachIDEToEditor = function(id) {
    const el = (typeof id === 'string') ? document.getElementById(id) : id;
    if (el && typeof attachIDE === 'function') attachIDE(el);
    // Asegurar que los hide-listeners del autocompletado funcionen también
    // en exampleEditor / challengeEditor (antes solo estaban en playground).
    if (el && !el.dataset.acHideAttached) {
        el.dataset.acHideAttached = '1';
        const hide = () => { if (typeof hideAutocomplete === 'function') hideAutocomplete(); };
        el.addEventListener('scroll',    hide);
        el.addEventListener('wheel',     hide, { passive: true });
        el.addEventListener('blur',      () => setTimeout(hide, 50));
        el.addEventListener('mousedown', hide);
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ideInit);
} else {
    setTimeout(ideInit, 0);
}

// ── FEATURE: Find / Replace (Ctrl+F / Ctrl+H) ──────────────────
// Widget flotante minimalista que opera sobre el textarea con foco
// (o el playground si no hay foco en un editor). Soporta:
//   • Buscar (next / prev), contador de matches, ignorar mayúsculas
//   • Reemplazar uno / reemplazar todo
//   • Highlighting visual mediante selección nativa (no DOM extra)
let _findWidget = null;
let _findState  = { matches: [], idx: -1, ta: null, query: '', ci: true };

function _findActiveEditor() {
    const ae = document.activeElement;
    if (ae && ae.tagName === 'TEXTAREA' &&
        (ae.id === 'playgroundEditor' || ae.id === 'exampleEditor' || ae.id === 'challengeEditor')) {
        return ae;
    }
    if (_findState.ta && document.body.contains(_findState.ta)) return _findState.ta;
    return document.getElementById('playgroundEditor');
}

function _findBuildWidget() {
    if (_findWidget) return _findWidget;
    const w = document.createElement('div');
    w.id = 'findReplaceWidget';
    w.setAttribute('role', 'search');
    w.setAttribute('aria-label', 'Buscar y reemplazar');
    w.style.cssText = 'position:fixed;top:80px;right:24px;z-index:2147483600;'
        + 'background:#1a2236;border:1px solid #2c3a5a;border-radius:8px;'
        + 'padding:10px;display:none;flex-direction:column;gap:6px;'
        + 'min-width:300px;font-family:inherit;box-shadow:0 8px 24px rgba(0,0,0,0.5);';
    w.innerHTML = `
        <div style="display:flex;align-items:center;gap:6px">
            <input type="text" id="findInput" placeholder="Buscar..." style="flex:1;background:#0e1525;color:#e3e8f4;border:1px solid #2c3a5a;border-radius:4px;padding:4px 8px;font:inherit"/>
            <span id="findCount" style="font-size:0.78rem;color:#94a3b8;min-width:64px;text-align:right">0 / 0</span>
            <button id="findPrev" title="Anterior (Shift+Enter)" style="background:#2c3a5a;color:#e3e8f4;border:0;padding:4px 8px;border-radius:4px;cursor:pointer">↑</button>
            <button id="findNext" title="Siguiente (Enter)" style="background:#2c3a5a;color:#e3e8f4;border:0;padding:4px 8px;border-radius:4px;cursor:pointer">↓</button>
            <button id="findClose" title="Cerrar (Esc)" aria-label="Cerrar" style="background:transparent;color:#94a3b8;border:0;padding:4px 8px;cursor:pointer;font-size:1.1rem">✕</button>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
            <input type="text" id="replaceInput" placeholder="Reemplazar con..." style="flex:1;background:#0e1525;color:#e3e8f4;border:1px solid #2c3a5a;border-radius:4px;padding:4px 8px;font:inherit"/>
            <button id="replaceOne" title="Reemplazar uno" style="background:#2c3a5a;color:#e3e8f4;border:0;padding:4px 8px;border-radius:4px;cursor:pointer">Uno</button>
            <button id="replaceAll" title="Reemplazar todo" style="background:#2c3a5a;color:#e3e8f4;border:0;padding:4px 8px;border-radius:4px;cursor:pointer">Todo</button>
        </div>
        <label style="font-size:0.78rem;color:#94a3b8;display:flex;align-items:center;gap:4px;cursor:pointer">
            <input type="checkbox" id="findCaseInsensitive" checked/> Ignorar mayúsculas/minúsculas
        </label>
    `;
    document.body.appendChild(w);
    _findWidget = w;

    const $ = (id) => document.getElementById(id);
    $('findInput').addEventListener('input', () => _findRecompute());
    $('findCaseInsensitive').addEventListener('change', () => _findRecompute());
    $('findInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); _findStep(e.shiftKey ? -1 : 1); }
        else if (e.key === 'Escape') { e.preventDefault(); _findClose(); }
    });
    $('replaceInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); _findReplaceOne(); }
        else if (e.key === 'Escape') { e.preventDefault(); _findClose(); }
    });
    $('findPrev').addEventListener('click', () => _findStep(-1));
    $('findNext').addEventListener('click', () => _findStep(1));
    $('findClose').addEventListener('click', () => _findClose());
    $('replaceOne').addEventListener('click', () => _findReplaceOne());
    $('replaceAll').addEventListener('click', () => _findReplaceAll());

    return w;
}

function _findRecompute() {
    const w = _findWidget;
    if (!w) return;
    const q = document.getElementById('findInput').value;
    const ci = document.getElementById('findCaseInsensitive').checked;
    _findState.query = q;
    _findState.ci = ci;
    const ta = _findState.ta || _findActiveEditor();
    if (!ta || !q) {
        _findState.matches = []; _findState.idx = -1;
        document.getElementById('findCount').textContent = '0 / 0';
        return;
    }
    const text = ta.value;
    const matches = [];
    if (q.length) {
        const haystack = ci ? text.toLowerCase() : text;
        const needle   = ci ? q.toLowerCase()    : q;
        let i = 0;
        while (true) {
            const idx = haystack.indexOf(needle, i);
            if (idx < 0) break;
            matches.push({ start: idx, end: idx + needle.length });
            i = idx + Math.max(1, needle.length);
        }
    }
    _findState.matches = matches;
    _findState.idx = matches.length ? 0 : -1;
    document.getElementById('findCount').textContent = matches.length ? `1 / ${matches.length}` : '0 / 0';
    if (matches.length) _findApplySelection(ta, matches[0]);
}

function _findStep(dir) {
    const ta = _findState.ta || _findActiveEditor();
    const m = _findState.matches;
    if (!ta || !m.length) return;
    _findState.idx = (_findState.idx + dir + m.length) % m.length;
    document.getElementById('findCount').textContent = `${_findState.idx + 1} / ${m.length}`;
    _findApplySelection(ta, m[_findState.idx]);
}

function _findApplySelection(ta, match) {
    ta.focus();
    ta.setSelectionRange(match.start, match.end);
    // Scroll a la match: aproximamos la posición vertical
    const before = ta.value.substring(0, match.start);
    const lineNum = before.split('\n').length;
    const cs = window.getComputedStyle(ta);
    const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.6;
    ta.scrollTop = Math.max(0, (lineNum - 3) * lh);
    // Devolver el foco al find input para que el usuario pueda seguir tecleando
    setTimeout(() => {
        const fi = document.getElementById('findInput');
        if (fi) fi.focus();
    }, 0);
}

function _findReplaceOne() {
    const ta = _findState.ta || _findActiveEditor();
    const m = _findState.matches;
    if (!ta || !m.length || _findState.idx < 0) return;
    const cur = m[_findState.idx];
    const rep = document.getElementById('replaceInput').value;
    ta.focus();
    if (typeof ta.setRangeText === 'function') {
        ta.setRangeText(rep, cur.start, cur.end, 'end');
    } else {
        ta.setSelectionRange(cur.start, cur.end);
        document.execCommand('insertText', false, rep);
    }
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    setTimeout(_findRecompute, 0);
}

function _findReplaceAll() {
    const ta = _findState.ta || _findActiveEditor();
    if (!ta || !_findState.matches.length) return;
    const rep = document.getElementById('replaceInput').value;
    const q = _findState.query;
    if (!q) return;
    // Construir el resultado completo en una sola operación → un solo undo entry
    const text = ta.value;
    const ci = _findState.ci;
    let result = '';
    let last = 0;
    const haystack = ci ? text.toLowerCase() : text;
    const needle   = ci ? q.toLowerCase()    : q;
    let i = 0, count = 0;
    while (true) {
        const idx = haystack.indexOf(needle, i);
        if (idx < 0) break;
        result += text.substring(last, idx) + rep;
        last = idx + needle.length;
        i = idx + Math.max(1, needle.length);
        count++;
    }
    result += text.substring(last);
    ta.focus();
    ta.setSelectionRange(0, ta.value.length);
    if (!document.execCommand('insertText', false, result)) ta.value = result;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    if (typeof showToast === 'function') showToast(`✓ ${count} reemplazo(s) realizados`);
    setTimeout(_findRecompute, 0);
}

window.openFindReplace = function() {
    const ta = _findActiveEditor();
    if (!ta) return;
    _findState.ta = ta;
    _findBuildWidget();
    _findWidget.style.display = 'flex';
    const fi = document.getElementById('findInput');
    // Pre-rellenar con la selección actual (si hay)
    const sel = ta.value.substring(ta.selectionStart, ta.selectionEnd);
    if (sel && sel.length < 200 && !sel.includes('\n')) fi.value = sel;
    fi.focus();
    fi.select();
    _findRecompute();
};

function _findClose() {
    if (_findWidget) _findWidget.style.display = 'none';
    const ta = _findState.ta;
    if (ta) ta.focus();
}
window.closeFindReplace = _findClose;

document.addEventListener('keydown', (e) => {
    // Ctrl+F: abrir Find (en editores)
    if (e.key === 'f' && e.ctrlKey && !e.shiftKey && !e.altKey) {
        const ae = document.activeElement;
        const inEditor = ae && ae.tagName === 'TEXTAREA' &&
            (ae.id === 'playgroundEditor' || ae.id === 'exampleEditor' || ae.id === 'challengeEditor');
        if (inEditor) {
            e.preventDefault();
            window.openFindReplace();
        }
    }
    // Ctrl+H: abrir Find con foco en Reemplazar
    if (e.key === 'h' && e.ctrlKey && !e.shiftKey && !e.altKey) {
        const ae = document.activeElement;
        const inEditor = ae && ae.tagName === 'TEXTAREA' &&
            (ae.id === 'playgroundEditor' || ae.id === 'exampleEditor' || ae.id === 'challengeEditor');
        if (inEditor) {
            e.preventDefault();
            window.openFindReplace();
            setTimeout(() => {
                const ri = document.getElementById('replaceInput');
                if (ri) ri.focus();
            }, 0);
        }
    }
});

})(); // fin IIFE IDE v3

/* ════════════════════════════════════════════════════════════════════
   FLOW GUIDES — Indent guides + Arrows de control de flujo
   ════════════════════════════════════════════════════════════════════
   Dos modos visuales que se pueden alternar por el usuario:
   - INDENT (default, estilo VS Code): líneas verticales sutiles en cada
     nivel de tab para visualizar la jerarquía.
   - ARROWS: para cada bloque de control (Si/Mientras/Para/Repetir/
     SubProceso/Funcion/Proceso) dibuja una línea coloreada vertical
     con cabezas de flecha en la apertura y el cierre, ayudando al
     usuario a visualizar el flujo del programa.
   Funciona en todos los editores: playground, ejemplo, reto y
   pantalla completa.
   ════════════════════════════════════════════════════════════════════ */
(function FlowGuides() {
    const TAB_SIZE = 4;
    const STORAGE_KEY = 'pseinc_flow_mode'; // 'indent' | 'arrows' | 'off'
    const OPACITY_KEY = 'pseinc_flow_opacity'; // 0..1
    const ATTACHED = new WeakSet();
    let currentMode = 'indent';
    let currentOpacity = 0.5;
    try { currentMode = localStorage.getItem(STORAGE_KEY) || 'indent'; } catch(_) {}
    try {
        const op = parseFloat(localStorage.getItem(OPACITY_KEY));
        if (!isNaN(op) && op >= 0.1 && op <= 1) currentOpacity = op;
    } catch(_) {}

    // Colores por TIPO de bloque (más intuitivo que por orden de aparición).
    // Así Proceso siempre es gris, Repetir siempre rosado, Segun siempre naranja, etc.
    // Variables del usuario tienen su propio espacio coloreado en el margen izquierdo.
    const BLOCK_COLORS = {
        proceso:      '#9ca3af', // gris (contenedor del programa)
        algoritmo:    '#9ca3af',
        sub:          '#fbbf24', // ámbar (subrutina)
        funcion:      '#fbbf24',
        procedim:     '#fbbf24',
        si:           '#10b981', // verde (cuando hay SiNo se divide en verde+naranja)
        mientras:     '#22d3ee', // cyan (loop con condición previa)
        para:         '#a78bfa', // violeta (loop con contador)
        repetir:      '#f472b6', // rosado (loop con condición posterior)
        segun:        '#fb923c', // naranja (multi-case)
    };
    // Fallback si aparece un tipo no listado
    const COLORS = ['#38bdf8', '#a78bfa', '#34d399', '#fbbf24', '#f472b6', '#fb923c', '#22d3ee', '#c084fc'];

    function _measure(ta) {
        // Tamaño del char y altura de línea reales basados en computed style
        const cs = window.getComputedStyle(ta);
        const fontSize = parseFloat(cs.fontSize) || 13;
        let lh = parseFloat(cs.lineHeight);
        if (isNaN(lh)) lh = fontSize * 1.6;
        // Char width vía canvas (monospace)
        let charW = ta._fg_charW;
        if (!charW) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            ctx.font = cs.font || (cs.fontSize + ' ' + cs.fontFamily);
            charW = ctx.measureText('0').width || (fontSize * 0.6);
            ta._fg_charW = charW;
        }
        const padTop = parseFloat(cs.paddingTop) || 0;
        const padLeft = parseFloat(cs.paddingLeft) || 0;
        return { lh, charW, padTop, padLeft };
    }

    function _getOrCreateLayer(ta) {
        if (ta._fg_layer && ta._fg_layer.isConnected) return ta._fg_layer;
        const container = ta.parentElement;
        if (!container) return null;
        const cs = window.getComputedStyle(container);
        if (cs.position === 'static') container.style.position = 'relative';
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('aria-hidden', 'true');
        // FIX: z-index 2 — encima del highlight overlay para que el fondo
        // opaco de la zona reservada tape el código cuando hay scroll
        // horizontal. Las líneas/emojis fuera de la zona reservada quedan
        // visibles porque tienen transparencia/opacidad parcial. Lo crítico
        // es que el rectángulo de fondo opaco SÍ tape.
        svg.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2';
        svg.classList.add('fg-layer');
        container.insertBefore(svg, container.firstChild);
        ta._fg_layer = svg;

        // ResizeObserver: re-render cuando el textarea cambia de tamaño
        // (fullscreen toggle, resize de ventana, lección abre/cierra, etc.)
        if (typeof ResizeObserver !== 'undefined' && !ta._fg_resizeObserver) {
            const ro = new ResizeObserver(() => _scheduleRender(ta));
            ro.observe(ta);
            ta._fg_resizeObserver = ro;
        }
        return svg;
    }

    // Parser simple: identifica bloques de control y su rango de líneas
    function _parseBlocks(text) {
        const lines = text.split('\n');
        const openers = [];
        const blocks = [];
        const RE_OPEN = {
            si:        /^si\s+.+\s+entonces\s*$/i,
            mientras:  /^mientras\s+.+\s+hacer\s*$/i,
            para:      /^para\s+\w+\s*<-\s*.+\s+hasta\s+.+\s+hacer\s*$/i,
            repetir:   /^repetir\s*$/i,
            segun:     /^segun\s+.+(?:\s+hacer)?\s*$/i,
            proceso:   /^(?:proceso|algoritmo)\s+\S+/i,
            sub:       /^subproceso\s+/i,
            funcion:   /^(?:funcion|función)\s+/i,
            procedim:  /^procedimiento\s+/i,
        };
        const RE_CLOSE = {
            si:        /^finsi\s*$/i,
            mientras:  /^finmientras\s*$/i,
            para:      /^finpara\s*$/i,
            repetir:   /^hasta\s+que\s+/i,
            segun:     /^(?:finsegun|finsegún)\s*$/i,
            proceso:   /^(?:finproceso|finalgoritmo)\s*$/i,
            sub:       /^finsubproceso\s*$/i,
            funcion:   /^(?:finfuncion|finfunción)\s*$/i,
            procedim:  /^finprocedimiento\s*$/i,
        };
        for (let i = 0; i < lines.length; i++) {
            const raw = lines[i];
            // Quitar comentario
            let ci = -1, inStr = false;
            for (let j = 0; j < raw.length - 1; j++) {
                if (raw[j] === '"') inStr = !inStr;
                if (!inStr && raw[j] === '/' && raw[j+1] === '/') { ci = j; break; }
            }
            const t = (ci >= 0 ? raw.slice(0, ci) : raw).trim();
            if (!t) continue;
            // Indent en chars visuales
            let indent = 0;
            for (let k = 0; k < raw.length; k++) {
                if (raw[k] === '\t') indent = Math.floor(indent / TAB_SIZE) * TAB_SIZE + TAB_SIZE;
                else if (raw[k] === ' ') indent++;
                else break;
            }
            // Detectar SiNo dentro del Si más reciente — divide en rama Verdadera/Falsa
            if (/^sino\s*$/i.test(t) || /^sino\s+si\s+/i.test(t)) {
                for (let j = openers.length - 1; j >= 0; j--) {
                    if (openers[j].kind === 'si') {
                        if (!openers[j].sinoLine) openers[j].sinoLine = i;
                        break;
                    }
                }
                continue;
            }
            // ¿Apertura?
            let opened = null;
            for (const k of Object.keys(RE_OPEN)) {
                if (RE_OPEN[k].test(t)) { opened = k; break; }
            }
            if (opened) {
                openers.push({ kind: opened, startLine: i, indent, sinoLine: null });
                continue;
            }
            // ¿Cierre?
            for (const k of Object.keys(RE_CLOSE)) {
                if (RE_CLOSE[k].test(t)) {
                    for (let j = openers.length - 1; j >= 0; j--) {
                        if (openers[j].kind === k) {
                            const o = openers.splice(j, 1)[0];
                            blocks.push({
                                kind: o.kind,
                                startLine: o.startLine,
                                endLine: i,
                                indent: o.indent,
                                sinoLine: o.sinoLine
                            });
                            break;
                        }
                    }
                    break;
                }
            }
        }
        // Bloques no cerrados: extender hasta el final
        for (const o of openers) {
            blocks.push({ kind: o.kind, startLine: o.startLine, endLine: lines.length - 1, indent: o.indent });
        }
        return blocks;
    }

    function _renderIndentGuides(ta, svg) {
        const { lh, charW, padTop, padLeft } = _measure(ta);
        const lines = ta.value.split('\n');
        const scrollTop = ta.scrollTop;
        const scrollLeft = ta.scrollLeft;
        const viewH = ta.clientHeight;
        const viewW = ta.clientWidth;
        // FIX: calcular indent EFECTIVO por línea, considerando que líneas vacías
        // "heredan" el indent mínimo de líneas con contenido alrededor.
        // Así las guías se ven CONTINUAS y no cortadas/intermitentes.
        const N = lines.length;
        const realIndent = new Array(N);
        for (let i = 0; i < N; i++) {
            const raw = lines[i];
            if (!raw.trim()) { realIndent[i] = -1; continue; } // vacía marcada
            let indent = 0;
            for (let k = 0; k < raw.length; k++) {
                if (raw[k] === '\t') indent = Math.floor(indent / TAB_SIZE) * TAB_SIZE + TAB_SIZE;
                else if (raw[k] === ' ') indent++;
                else break;
            }
            realIndent[i] = indent;
        }
        // Indent efectivo: para líneas vacías, usar min(prev no-vacía, next no-vacía)
        const effIndent = new Array(N);
        for (let i = 0; i < N; i++) {
            if (realIndent[i] >= 0) { effIndent[i] = realIndent[i]; continue; }
            // Línea vacía → buscar prev y next no-vacía
            let prev = -1, next = -1;
            for (let j = i - 1; j >= 0; j--) if (realIndent[j] >= 0) { prev = realIndent[j]; break; }
            for (let j = i + 1; j < N; j++) if (realIndent[j] >= 0) { next = realIndent[j]; break; }
            if (prev < 0 && next < 0) effIndent[i] = 0;
            else if (prev < 0) effIndent[i] = next;
            else if (next < 0) effIndent[i] = prev;
            else effIndent[i] = Math.min(prev, next);
        }
        // Render: para cada línea, dibujar verticales en cada nivel < effIndent[i]
        // Usamos rangos consecutivos para emitir UNA línea por rango (menos DOM y suave).
        let out = '';
        // Por cada nivel L (1..maxIndent / TAB_SIZE), buscar runs consecutivos
        let maxLvls = 0;
        for (let i = 0; i < N; i++) maxLvls = Math.max(maxLvls, Math.floor(effIndent[i] / TAB_SIZE));
        for (let l = 0; l < maxLvls; l++) {
            const minIndentNeeded = (l + 1) * TAB_SIZE;
            let runStart = -1;
            for (let i = 0; i <= N; i++) {
                const active = (i < N && effIndent[i] >= minIndentNeeded);
                if (active && runStart < 0) runStart = i;
                else if (!active && runStart >= 0) {
                    // Coordenadas relativas al viewport del textarea (restando scroll)
                    const y1 = padTop + runStart * lh - scrollTop;
                    const y2 = padTop + i * lh - scrollTop;
                    const x = padLeft + (l * TAB_SIZE + 0.5) * charW - scrollLeft;
                    // Cull: si toda la línea está fuera del viewport, skip
                    if (y2 < 0 || y1 > viewH || x < 0 || x > viewW) { runStart = -1; continue; }
                    // Clamp para no dibujar fuera del área visible (defensivo)
                    const cy1 = Math.max(0, y1);
                    const cy2 = Math.min(viewH, y2);
                    if (cy2 <= cy1) { runStart = -1; continue; }
                    out += '<line x1="' + x.toFixed(1) + '" y1="' + cy1.toFixed(1) +
                           '" x2="' + x.toFixed(1) + '" y2="' + cy2.toFixed(1) +
                           '" stroke="currentColor" stroke-width="1" opacity="' + (currentOpacity * 0.6) + '"/>';
                    runStart = -1;
                }
            }
        }
        svg.innerHTML = out;
        svg.style.color = 'rgba(127,127,127,0.6)';
    }

    // Hash determinístico de string → color (consistente entre renders)
    const VAR_COLORS = ['#38bdf8', '#a78bfa', '#f472b6', '#fbbf24', '#34d399', '#fb923c', '#22d3ee', '#c084fc', '#f87171', '#86efac'];
    function _colorForVar(name) {
        let h = 0;
        for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
        return VAR_COLORS[Math.abs(h) % VAR_COLORS.length];
    }

    // Reservadas del lenguaje (NO son variables del usuario)
    const _FG_RESERVED = new Set([
        'proceso','finproceso','algoritmo','finalgoritmo','subproceso','finsubproceso',
        'funcion','función','finfuncion','finfunción','procedimiento','finprocedimiento',
        'definir','como','dimension','arreglo','leer','escribir','sin','saltar',
        'si','entonces','sino','finsi','segun','según','hacer','finsegun','finsegún',
        'mientras','finmientras','repetir','hasta','que','para','finpara','con','paso',
        'de','otro','modo','retornar','devolver','salir','salirpara','interrumpir',
        'borrar','limpiar','pantalla','esperar','tecla','segundos',
        'y','o','no','and','or','not','mod','div',
        'entero','real','texto','cadena','caracter','char','logico','numerico',
        'verdadero','falso','true','false','pi','e','var','ref','por','referencia','byref'
    ]);

    // Identificar variables usadas en bloques de control y sus apariciones
    function _findControlFlowVars(text) {
        const lines = text.split('\n');
        const result = []; // { name, useLines: [], assignLines: [] }
        const byName = new Map();
        function getEntry(name) {
            let e = byName.get(name);
            if (!e) { e = { name, useLines: [], assignLines: [] }; byName.set(name, e); result.push(e); }
            return e;
        }
        function extractVars(expr) {
            if (!expr) return [];
            const masked = expr.replace(/"[^"]*"/g, '""');
            const toks = masked.match(/\b[a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-ZáéíóúÁÉÍÓÚñÑ_0-9]*\b/g) || [];
            const out = [];
            for (const t of toks) {
                if (_FG_RESERVED.has(t.toLowerCase())) continue;
                if (/^\d+$/.test(t)) continue;
                out.push(t);
            }
            return out;
        }
        for (let i = 0; i < lines.length; i++) {
            const raw = lines[i];
            // Quitar comentario
            let ci = -1, inStr = false;
            for (let j = 0; j < raw.length - 1; j++) {
                if (raw[j] === '"') inStr = !inStr;
                if (!inStr && raw[j] === '/' && raw[j+1] === '/') { ci = j; break; }
            }
            const t = (ci >= 0 ? raw.slice(0, ci) : raw).trim();
            if (!t) continue;
            // Detectar uso en CONTROL FLOW
            let controlExpr = null;
            const mSi = t.match(/^(?:Si|SiNo\s+Si)\s+(.+?)\s+Entonces$/i);
            const mMien = t.match(/^Mientras\s+(.+?)\s+Hacer$/i);
            const mHasta = t.match(/^Hasta\s+Que\s+(.+)$/i);
            const mSegun = t.match(/^Segun\s+(.+?)(?:\s+Hacer)?$/i);
            const mPara = t.match(/^Para\s+\w+\s*<-\s*(.+?)\s+Hasta\s+(.+?)(?:\s+Con\s+Paso\s+(.+?))?\s+Hacer$/i);
            if (mSi) controlExpr = mSi[1];
            else if (mMien) controlExpr = mMien[1];
            else if (mHasta) controlExpr = mHasta[1];
            else if (mSegun) controlExpr = mSegun[1];
            else if (mPara) controlExpr = (mPara[1] || '') + ' ' + (mPara[2] || '') + ' ' + (mPara[3] || '');
            if (controlExpr) {
                const vars = extractVars(controlExpr);
                for (const v of vars) getEntry(v).useLines.push(i);
                continue;
            }
            // Detectar asignación: x <- ... | Leer x, y, z
            const mLeer = t.match(/^Leer\s+(.+)$/i);
            if (mLeer) {
                mLeer[1].split(',').forEach(a => {
                    const n = a.trim().replace(/\[.*$/, '');
                    if (n && !_FG_RESERVED.has(n.toLowerCase()) && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ_]/.test(n)) {
                        getEntry(n).assignLines.push(i);
                    }
                });
                continue;
            }
            const mAsg = t.match(/^(\w+)\s*(?:\[[^\]]*\])?\s*<-/);
            if (mAsg) {
                const n = mAsg[1];
                if (n && !_FG_RESERVED.has(n.toLowerCase())) {
                    getEntry(n).assignLines.push(i);
                }
                // También: la RHS puede tener variables que son lecturas
            }
        }
        // Filtrar solo las que se USAN en control flow Y tienen al menos una asignación
        return result.filter(v => v.useLines.length > 0 && v.assignLines.length > 0);
    }

    function _renderArrows(ta, svg) {
        const { lh, charW, padTop, padLeft } = _measure(ta);
        const blocks = _parseBlocks(ta.value);
        const lines = ta.value.split('\n');
        const scrollTop = ta.scrollTop;
        const scrollLeft = ta.scrollLeft;
        const viewH = ta.clientHeight;
        const viewW = ta.clientWidth;
        let out = '';
        // FIX: detectar si hay un gutter (números de línea) que ocupa el lado
        // izquierdo. En playground existe .big-line-nums (40px ancho, z-index:3,
        // fondo sólido) que TAPA los carriles dibujados desde x=0. Skip esa zona.
        let gutterWidth = 0;
        const gutter = ta.parentElement && ta.parentElement.querySelector('.big-line-nums, .line-nums');
        if (gutter) gutterWidth = gutter.offsetWidth || 0;
        const inView = (y) => (y >= -lh && y <= viewH + lh);

        // ── CAPA DE VARIABLES: conexiones de variables usadas en control flow ──
        // Cada variable (usada en Si/Mientras/Para/Segun/Hasta Que) recibe
        // un CARRIL vertical sólido con su color único, que cubre desde la
        // PRIMERA aparición hasta la ÚLTIMA. Sin círculos — solo barras
        // continuas que destacan visualmente.
        // FIX: aseguramos espacio suficiente añadiendo padding extra al
        // textarea cuando hay variables, para que el contenido NO se choque
        // con los carriles ni con las verticales de bloques.
        const cfVars = _findControlFlowVars(ta.value);
        const RAIL_WIDTH = 4;
        const RAIL_GAP = 2;
        const RAIL_EDGE = gutterWidth + 4;
        const EMOJI_RESERVE = 14;
        const railsNeeded = Math.min(cfVars.length, 6);
        const railsSpace = railsNeeded > 0 ? (railsNeeded * (RAIL_WIDTH + RAIL_GAP)) : 0;
        const neededLeft = gutterWidth + 4 + railsSpace + EMOJI_RESERVE + 4;
        // ── FONDO OPACO RESERVADO ──
        // Igual que el gutter, los carriles necesitan un fondo opaco que
        // TAPE el código cuando se hace scroll horizontal. Sin este fondo,
        // los emojis/líneas se ven superpuestos al texto que aparece
        // tras desplazarse.
        // Se calcula el ancho total de la zona reservada y se pinta como
        // primer elemento del SVG (queda debajo de los carriles/emojis).
        if (cfVars.length > 0) {
            // Resolver el bg-color del editor leyendo computed style del padre
            let bgColor = 'var(--bg-dark)';
            try {
                const parentBg = window.getComputedStyle(ta.parentElement).backgroundColor;
                if (parentBg && parentBg !== 'rgba(0, 0, 0, 0)' && parentBg !== 'transparent') {
                    bgColor = parentBg;
                }
            } catch(_) {}
            const reservedW = Math.max(railsSpace + 4, neededLeft - gutterWidth);
            const reservedX = gutterWidth;
            out += '<rect x="' + reservedX.toFixed(1) + '" y="0" ' +
                   'width="' + reservedW.toFixed(1) + '" height="' + viewH + '" ' +
                   'fill="' + bgColor + '" opacity="1"/>';
        }
        // Si el padLeft del editor es menor que lo necesario, lo ampliamos
        // dinámicamente (solo si está activo el modo Guías y hay variables).
        if (cfVars.length > 0 && padLeft < neededLeft) {
            const newPad = neededLeft + 'px';
            if (ta._fg_origPadLeft === undefined) ta._fg_origPadLeft = ta.style.paddingLeft || '';
            ta.style.paddingLeft = newPad;
            // El highlight overlay también debe ajustarse
            const highlightId = (ta.id === 'playgroundEditor') ? 'playgroundHighlight'
                              : (ta.id === 'exampleEditor') ? 'exampleHighlight'
                              : (ta.id === 'challengeEditor') ? 'challengeHighlight' : null;
            if (highlightId) {
                const hl = document.getElementById(highlightId);
                if (hl) hl.style.paddingLeft = newPad;
            }
        } else if (cfVars.length === 0 && ta._fg_origPadLeft !== undefined) {
            // Restaurar padding original si ya no hay variables
            ta.style.paddingLeft = ta._fg_origPadLeft;
            const highlightId = (ta.id === 'playgroundEditor') ? 'playgroundHighlight'
                              : (ta.id === 'exampleEditor') ? 'exampleHighlight'
                              : (ta.id === 'challengeEditor') ? 'challengeHighlight' : null;
            if (highlightId) {
                const hl = document.getElementById(highlightId);
                if (hl) hl.style.paddingLeft = ta._fg_origPadLeft;
            }
            ta._fg_origPadLeft = undefined;
        }

        for (let v = 0; v < cfVars.length; v++) {
            const variable = cfVars[v];
            const color = _colorForVar(variable.name);
            const railX = RAIL_EDGE + v * (RAIL_WIDTH + RAIL_GAP);
            if (railX + RAIL_WIDTH > padLeft - EMOJI_RESERVE - 2) continue;

            // Encontrar la línea más temprana y más tardía
            const allLines = [
                ...variable.assignLines.map(l => ({ line: l, kind: 'a' })),
                ...variable.useLines.map(l => ({ line: l, kind: 'u' }))
            ].sort((a, b) => a.line - b.line);
            if (allLines.length === 0) continue;

            // Carril CONTINUO desde la primera hasta la última aparición
            const firstLine = allLines[0].line;
            const lastLine = allLines[allLines.length - 1].line;
            const yTop = padTop + firstLine * lh + lh * 0.3 - scrollTop;
            const yBot = padTop + lastLine * lh + lh * 0.7 - scrollTop;
            if (yBot >= 0 && yTop <= viewH) {
                const cyTop = Math.max(0, yTop);
                const cyBot = Math.min(viewH, yBot);
                if (cyBot > cyTop) {
                    out += '<rect x="' + railX.toFixed(1) + '" y="' + cyTop.toFixed(1) +
                           '" width="' + RAIL_WIDTH + '" height="' + (cyBot - cyTop).toFixed(1) +
                           '" fill="' + color + '" opacity="' + (currentOpacity * 0.85) +
                           '" rx="' + (RAIL_WIDTH/2) + '">' +
                           '<title>Variable "' + variable.name + '" (' + allLines.length + ' aparicione(s))</title></rect>';
                }
            }

            // Pequeñas marcas perpendiculares en cada aparición (sin círculos)
            for (const ln of allLines) {
                const y = padTop + ln.line * lh + lh * 0.5 - scrollTop;
                if (!inView(y)) continue;
                // Línea horizontal corta a la derecha del carril (apunta al código)
                const tickW = (ln.kind === 'a') ? 5 : 3;
                out += '<rect x="' + (railX + RAIL_WIDTH).toFixed(1) + '" y="' + (y - 1).toFixed(1) +
                       '" width="' + tickW + '" height="2" fill="' + color +
                       '" opacity="' + currentOpacity + '"/>';
            }
        }

        // Para cada bloque:
        //   1) Línea vertical desde la apertura hasta el cierre
        //   2) Codos horizontales SOLO en las líneas inmediatamente hijas (indent = bloque + 1 tab)
        //      → menos ruido visual, solo apunta a lo que sigue directamente al bloque
        //   3) Si el bloque es Si con SiNo:
        //      - Antes del SiNo: color verde (rama Verdadera)
        //      - Después: color rojo/ámbar (rama Falsa)
        //      - Marca '✓' en apertura, '✗' en SiNo
        // SIN cabezas de flecha puntiagudas; solo líneas limpias.
        const COLOR_TRUE  = '#10b981';  // verde — rama verdadera
        const COLOR_FALSE = '#f97316';  // naranja — rama falsa
        for (let b = 0; b < blocks.length; b++) {
            const block = blocks[b];
            // Color por TIPO (no por orden) — así Proceso siempre es gris, Repetir rosa, etc.
            const colorDefault = BLOCK_COLORS[block.kind] || COLORS[b % COLORS.length];
            const lvl = Math.floor(block.indent / TAB_SIZE);
            // Coordenadas relativas al viewport (restando scroll del textarea)
            const xVert = padLeft + (lvl * TAB_SIZE + 0.5) * charW - scrollLeft;
            const childIndent = (lvl + 1) * TAB_SIZE;
            // FIX: la línea vertical empieza JUSTO DESPUÉS del header (apertura)
            //       y termina JUSTO ANTES del cierre (FinX/Hasta Que/etc.) —
            //       así no se sobrepone al texto del header ni del cierre.
            const yStart = padTop + (block.startLine + 1) * lh - scrollTop;
            const yEnd = padTop + block.endLine * lh - 2 - scrollTop;
            if (yEnd <= yStart) continue;
            // Cull: si todo el bloque está fuera de la vista, skip
            if (yEnd < 0 || yStart > viewH) continue;

            const isSiWithSino = block.kind === 'si' && block.sinoLine;
            const sinoY = isSiWithSino ? padTop + block.sinoLine * lh - scrollTop : null;

            if (isSiWithSino) {
                // sinoY ahora apunta al medio de la línea del SiNo
                const sinoMidY = padTop + block.sinoLine * lh + lh * 0.5 - scrollTop;
                // Tramos clampeados al viewport (defensivo)
                const v_yStart = Math.max(0, Math.min(viewH, yStart));
                const v_sinoY  = Math.max(0, Math.min(viewH, sinoMidY - 2));
                const v_sinoEnd = Math.max(0, Math.min(viewH, sinoMidY + 2));
                const v_yEnd   = Math.max(0, Math.min(viewH, yEnd));
                if (v_sinoY > v_yStart) {
                    out += '<line x1="' + xVert.toFixed(1) + '" y1="' + v_yStart.toFixed(1) +
                           '" x2="' + xVert.toFixed(1) + '" y2="' + v_sinoY.toFixed(1) +
                           '" stroke="' + COLOR_TRUE + '" stroke-width="1.8" opacity="' + currentOpacity +
                           '" stroke-linecap="round"/>';
                }
                if (v_yEnd > v_sinoEnd) {
                    out += '<line x1="' + xVert.toFixed(1) + '" y1="' + v_sinoEnd.toFixed(1) +
                           '" x2="' + xVert.toFixed(1) + '" y2="' + v_yEnd.toFixed(1) +
                           '" stroke="' + COLOR_FALSE + '" stroke-width="1.8" opacity="' + currentOpacity +
                           '" stroke-linecap="round"/>';
                }
                // Badges ✓/✗ — colocados en el área DESPUÉS del gutter pero ANTES del texto.
                // En playground hay gutter de 40px → xBadge ≈ 44px.
                // En lecciones no hay gutter → xBadge ≈ padLeft - 10.
                const badgeR = 6;
                const xBadge = gutterWidth > 0
                    ? gutterWidth + Math.max(8, (padLeft - gutterWidth) / 2)
                    : Math.max(badgeR + 2, padLeft - badgeR - 4);
                const badgeY1 = padTop + (block.startLine + 1) * lh + lh * 0.5 - scrollTop;
                const badgeY2 = padTop + block.sinoLine * lh + lh * 0.5 - scrollTop;
                if (inView(badgeY1)) {
                    out += '<circle cx="' + xBadge.toFixed(1) + '" cy="' + badgeY1.toFixed(1) +
                           '" r="' + badgeR + '" fill="' + COLOR_TRUE + '" opacity="0.95"/>';
                    out += '<text x="' + xBadge.toFixed(1) + '" y="' + (badgeY1 + 3.5).toFixed(1) +
                           '" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">✓</text>';
                }
                if (inView(badgeY2)) {
                    out += '<circle cx="' + xBadge.toFixed(1) + '" cy="' + badgeY2.toFixed(1) +
                           '" r="' + badgeR + '" fill="' + COLOR_FALSE + '" opacity="0.95"/>';
                    out += '<text x="' + xBadge.toFixed(1) + '" y="' + (badgeY2 + 3.5).toFixed(1) +
                           '" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">✗</text>';
                }
            } else {
                // Línea vertical normal de un solo color, clampeada al viewport
                const v_y1 = Math.max(0, Math.min(viewH, yStart));
                const v_y2 = Math.max(0, Math.min(viewH, yEnd));
                if (v_y2 > v_y1) {
                    out += '<line x1="' + xVert.toFixed(1) + '" y1="' + v_y1.toFixed(1) +
                           '" x2="' + xVert.toFixed(1) + '" y2="' + v_y2.toFixed(1) +
                           '" stroke="' + colorDefault + '" stroke-width="1.5" opacity="' + currentOpacity +
                           '" stroke-linecap="round"/>';
                }
            }

            // 2) Codos horizontales SOLO en líneas hijas directas (indent == childIndent)
            for (let i = block.startLine + 1; i < block.endLine; i++) {
                const raw = lines[i];
                if (!raw) continue;
                let indent = 0;
                let firstNonWs = -1;
                for (let k = 0; k < raw.length; k++) {
                    if (raw[k] === '\t') indent = Math.floor(indent / TAB_SIZE) * TAB_SIZE + TAB_SIZE;
                    else if (raw[k] === ' ') indent++;
                    else { firstNonWs = k; break; }
                }
                if (firstNonWs < 0) continue;
                const trimmed = raw.slice(firstNonWs).trim();
                if (!trimmed || trimmed.startsWith('//')) continue;
                if (indent !== childIndent) continue;
                if (/^(sino|finsi|finmientras|finpara|finsegun|hasta\s+que|de\s+otro\s+modo)/i.test(trimmed)) continue;

                const xEndH = padLeft + indent * charW - 2 - scrollLeft;
                if (xEndH <= xVert + 2) continue;
                const yMid = padTop + i * lh + lh * 0.5 - scrollTop;
                if (!inView(yMid)) continue;

                let codoColor = colorDefault;
                let codoOpacity = currentOpacity * 0.85;
                if (isSiWithSino) {
                    codoColor = (i < block.sinoLine) ? COLOR_TRUE : COLOR_FALSE;
                    codoOpacity = currentOpacity * 0.9;
                }
                out += '<line x1="' + xVert.toFixed(1) + '" y1="' + yMid.toFixed(1) +
                       '" x2="' + xEndH.toFixed(1) + '" y2="' + yMid.toFixed(1) +
                       '" stroke="' + codoColor + '" stroke-width="1.3" opacity="' + codoOpacity +
                       '" stroke-linecap="round"/>';
            }
        }

        // Indent guides MUY sutiles de fondo (solo en líneas visibles, restando scroll)
        const firstVisible = Math.max(0, Math.floor(scrollTop / lh) - 1);
        const lastVisible = Math.min(lines.length, Math.ceil((scrollTop + viewH) / lh) + 1);
        for (let i = firstVisible; i < lastVisible; i++) {
            const raw = lines[i];
            if (!raw) continue;
            let indent = 0;
            for (let k = 0; k < raw.length; k++) {
                if (raw[k] === '\t') indent = Math.floor(indent / TAB_SIZE) * TAB_SIZE + TAB_SIZE;
                else if (raw[k] === ' ') indent++;
                else break;
            }
            const lvls = Math.floor(indent / TAB_SIZE);
            const y = padTop + i * lh - scrollTop;
            for (let l = 0; l < lvls; l++) {
                const x = padLeft + (l * TAB_SIZE + 0.5) * charW - scrollLeft;
                if (x < 0 || x > viewW) continue;
                out += '<line x1="' + x.toFixed(1) + '" y1="' + y.toFixed(1) +
                       '" x2="' + x.toFixed(1) + '" y2="' + (y + lh).toFixed(1) +
                       '" stroke="rgba(127,127,127,0.10)" stroke-width="1"/>';
            }
        }

        svg.innerHTML = out;
        svg.style.color = '';
    }

    function _restorePadding(ta) {
        // Restaurar el padding original del textarea y de su highlight overlay.
        // Necesario cuando salimos del modo "Guías" (Tabs/Off) para que el
        // editor recupere su layout normal.
        if (ta._fg_origPadLeft !== undefined) {
            ta.style.paddingLeft = ta._fg_origPadLeft;
            const highlightId = (ta.id === 'playgroundEditor') ? 'playgroundHighlight'
                              : (ta.id === 'exampleEditor') ? 'exampleHighlight'
                              : (ta.id === 'challengeEditor') ? 'challengeHighlight' : null;
            if (highlightId) {
                const hl = document.getElementById(highlightId);
                if (hl) hl.style.paddingLeft = ta._fg_origPadLeft;
            }
            ta._fg_origPadLeft = undefined;
        }
    }

    function _renderForEditor(ta) {
        if (!ta) return;
        const mode = currentMode;
        let svg = _getOrCreateLayer(ta);
        if (!svg) return;
        if (mode === 'off') {
            svg.style.display = 'none';
            _restorePadding(ta);
            return;
        }
        if (mode !== 'arrows') _restorePadding(ta);
        svg.style.display = '';
        // FIX: el SVG cubre exactamente el área visible del textarea (no se mueve).
        // Las coordenadas de los elementos SVG ya restan scrollTop/scrollLeft del
        // textarea, así no necesitamos transform. Esto resuelve el bug de
        // "guías cortadas al hacer scroll".
        const taRect = ta.getBoundingClientRect();
        const parentRect = svg.parentElement.getBoundingClientRect();
        svg.style.left = (taRect.left - parentRect.left) + 'px';
        svg.style.top = (taRect.top - parentRect.top) + 'px';
        svg.style.width = ta.clientWidth + 'px';
        svg.style.height = ta.clientHeight + 'px';
        svg.style.transform = '';
        if (mode === 'arrows') {
            _renderArrows(ta, svg);
        } else {
            _renderIndentGuides(ta, svg);
        }
    }

    function _scheduleRender(ta) {
        if (ta._fg_raf) cancelAnimationFrame(ta._fg_raf);
        ta._fg_raf = requestAnimationFrame(() => {
            ta._fg_raf = null;
            _renderForEditor(ta);
        });
    }

    function _attach(ta) {
        if (!ta || ATTACHED.has(ta)) return;
        ATTACHED.add(ta);
        _scheduleRender(ta);
        ta.addEventListener('input', () => _scheduleRender(ta));
        ta.addEventListener('scroll', () => _scheduleRender(ta), { passive: true });
        window.addEventListener('resize', () => _scheduleRender(ta));
    }

    // Re-render TODOS los editores
    function _rerenderAll() {
        document.querySelectorAll('#playgroundEditor, #exampleEditor, #challengeEditor').forEach(ta => {
            if (ta) {
                _attach(ta);
                _scheduleRender(ta);
            }
        });
    }

    // API pública
    window.flowGuides = {
        mode: () => currentMode,
        setMode: function(m) {
            if (m !== 'indent' && m !== 'arrows' && m !== 'off') return;
            currentMode = m;
            try { localStorage.setItem(STORAGE_KEY, m); } catch(_) {}
            _rerenderAll();
            // Update labels
            document.querySelectorAll('.fg-mode-label').forEach(el => {
                el.textContent = m === 'arrows' ? 'Guías' : m === 'off' ? 'Off' : 'Tabs';
            });
            if (typeof showToast === 'function') showToast('🧭 ' + (m === 'arrows' ? 'Guías de bloque activadas' : m === 'off' ? 'Sin guías visuales' : 'Líneas de tabs'));
        },
        setOpacity: function(o) {
            o = parseFloat(o);
            if (isNaN(o) || o < 0.1 || o > 1) return;
            currentOpacity = o;
            try { localStorage.setItem(OPACITY_KEY, String(o)); } catch(_) {}
            _rerenderAll();
        },
        opacity: () => currentOpacity,
        rerender: _rerenderAll,
        attach: _attach
    };

    // Auto-attach a editores existentes y nuevos
    function _autoAttach() {
        _rerenderAll();
        // Sincronizar labels de los botones toggle con el modo actual
        document.querySelectorAll('.fg-mode-label').forEach(el => {
            el.textContent = currentMode === 'arrows' ? 'Guías' : currentMode === 'off' ? 'Off' : 'Tabs';
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', _autoAttach);
    } else {
        setTimeout(_autoAttach, 100);
    }
    // FIX: REMOVIDO setInterval(1500) que causaba lag en el flowchart al
    // re-renderizar todos los editores constantemente. Reemplazado con
    // MutationObserver que solo dispara cuando aparece un nuevo editor.
    if (typeof MutationObserver !== 'undefined') {
        const mo = new MutationObserver((mutations) => {
            for (const m of mutations) {
                for (const n of m.addedNodes) {
                    if (n && n.nodeType === 1) {
                        // ¿Es un editor o contiene uno?
                        if (n.id === 'exampleEditor' || n.id === 'challengeEditor' ||
                            (n.querySelector && (n.querySelector('#exampleEditor') || n.querySelector('#challengeEditor')))) {
                            setTimeout(_autoAttach, 50);
                            return;
                        }
                    }
                }
            }
        });
        // Esperar a que body exista
        const startObserver = () => {
            if (document.body) mo.observe(document.body, { childList: true, subtree: true });
            else setTimeout(startObserver, 100);
        };
        startObserver();
    }

    // Toggle cíclico: indent → arrows → off → indent
    window.cycleFlowMode = function() {
        const next = currentMode === 'indent' ? 'arrows' :
                     currentMode === 'arrows' ? 'off' : 'indent';
        window.flowGuides.setMode(next);
    };
})();
