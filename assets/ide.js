/* ============================================================
   SYNTAX HIGHLIGHTER COMPLETO PARA PSEINT
   Cubre TODAS las palabras clave, funciones y operadores
   del lenguaje PSeInt según su especificación oficial.
============================================================ */

// ── Escapar HTML para insertar en innerHTML ──────────────────
function escHtml(s) {
    return s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// ── Tokenizador / coloreador ─────────────────────────────────
// Set global de líneas con error (1-based) para resaltado rojo
window._errorLineSet = new Set();

// Set de keywords reservadas del lenguaje (case-insensitive vía .toLowerCase())
// Usado en el Paso 1 del highlighter para NO registrar keywords como variables de usuario.
const _hlReserved = new Set([
    'proceso','finproceso','algoritmo','finalgoritmo','subproceso','finsubproceso',
    'funcion','función','finfuncion','finfunción','procedimiento','finprocedimiento',
    'definir','como','dimension','arreglo','parametros','parámetros','referencia',
    'leer','escribir','borrar','limpiar','pantalla','esperar','tecla','segundos',
    'si','entonces','sino','finsi','segun','hacer','finsegun',
    'mientras','finmientras','repetir','hasta','que','para','finpara','con','paso',
    'retornar','devolver','salir','salirpara','interrumpir',
    'y','o','no','and','or','not',
    'verdadero','falso','true','false','mod','div',
    'entero','real','texto','cadena','caracter','char','logico','numerico',
    'raiz','rc','abs','trunc','redon','sen','cos','tan','asen','acos','atan',
    'log','exp','pi','piso','techo','potencia','signo',
    'aleatorio','random','longitud','subcadena','mayusculas','minusculas',
    'convertiratexto','numerotexto','textonumero','concatenar','recortar',
    'trim','contiene','reemplazar','posicioncaracter','caracterenposicion',
    'numeroacadena','cadenaanumero',
]);

function highlightPSeInt(raw) {
    if (!raw) return '';

    // ── Paso 1: escanear declaraciones y asignaciones para construir varTypeMap ──
    // varTypeMap: nombre_exacto → clase_CSS (case-sensitivo para variables de usuario)
    const varTypeMap = {};
    const typeClass = {
        'entero':   'kw-type-entero',
        'numerico': 'kw-type-entero',
        'real':     'kw-type-real',
        'texto':    'kw-type-texto',
        'cadena':   'kw-type-texto',
        'caracter': 'kw-type-texto',
        'char':     'kw-type-texto',
        'logico':   'kw-type-logico',
    };
    for (const line of raw.split('\n')) {
        let codeLine = line;
        const ci = findCommentStart(line);
        if (ci >= 0) codeLine = line.slice(0, ci);
        // Definir x, y Como Tipo — guarda con case original del usuario
        const dm = codeLine.match(/^\s*Definir\s+(.+)\s+Como\s+(\w+)/i);
        if (dm) {
            const tp = dm[2].toLowerCase();
            const cls = typeClass[tp] || 'kw-type';
            dm[1].split(',').forEach(v => {
                const vn = v.trim(); // case original
                if (vn && !_hlReserved.has(vn.toLowerCase())) varTypeMap[vn] = cls;
            });
        }
        // Asignación directa: x <- expr → registrar como var de usuario sin tipo específico
        // Solo si no está ya en varTypeMap (Definir tiene prioridad de tipo)
        const am = codeLine.match(/^\s*([a-zA-ZáéíóúÁÉÍÓÚñÑ_][\wáéíóúÁÉÍÓÚñÑ]*)\s*<-/i);
        if (am) {
            const vn = am[1]; // case original
            if (vn && !_hlReserved.has(vn.toLowerCase()) && !varTypeMap[vn]) varTypeMap[vn] = 'kw-uservar-notype';
        }
        // Leer x, y → también define implícitamente
        const lm = codeLine.match(/^\s*Leer\s+(.+)$/i);
        if (lm) {
            lm[1].split(',').forEach(v => {
                const vn = v.trim().replace(/\[.*$/, '');
                if (vn && !_hlReserved.has(vn.toLowerCase()) && !varTypeMap[vn]) varTypeMap[vn] = 'kw-uservar-notype';
            });
        }
        // Para i <- ...
        const pm = codeLine.match(/^\s*Para\s+(\w+)\s*<-/i);
        if (pm && pm[1] && !_hlReserved.has(pm[1].toLowerCase()) && !varTypeMap[pm[1]]) varTypeMap[pm[1]] = 'kw-uservar-notype';
    }

    // ── Paso 1b: construir set global de vars no declaradas (todas las líneas) ──
    // Si una var está marcada como no declarada en CUALQUIER línea, NO la metemos
    // en varTypeMap — así no recibe color aunque aparezca en el mapa de asignaciones.
    const allUndeclared = new Set();
    if (window._undeclaredVars) {
        for (const [, nameSet] of window._undeclaredVars) {
            for (const name of nameSet) allUndeclared.add(name);
        }
    }
    // NUEVO: incluir palabras reservadas usadas como variable. El analyzer
    // las llena cuando detecta `Definir Y Como ...`, `Leer Si`, `x + Y`, etc.
    // Necesitamos pintarlas de ROJO en TODAS las apariciones (no solo donde
    // fueron declaradas), porque su mal uso es global a todo el programa.
    if (window._reservedAsVarNames) {
        for (const name of window._reservedAsVarNames) allUndeclared.add(name);
    }

    // Filtrar varTypeMap: quitar cualquier var que esté en allUndeclared
    for (const key of Object.keys(varTypeMap)) {
        if (allUndeclared.has(key)) delete varTypeMap[key];
    }

    // ── Exponer varTypeMap globalmente para las features IDE ──────────────
    window._varTypeMap = varTypeMap;
    const lines = raw.split('\n');
    const result = [];
    for (let i = 0; i < lines.length; i++) {
        const lineNum = i + 1;
        // Variables no declaradas en esta línea (para subrayado inline)
        const undeclaredSet = (window._undeclaredVars && window._undeclaredVars.get(lineNum)) || null;
        let highlighted = highlightLine(lines[i], varTypeMap, undeclaredSet);
        // Solo pintamos el FONDO plano rojo si NO tenemos un rango específico
        // para esta línea. Si lo tenemos, el subrayado sierra basta y queda más limpio.
        if (window._errorLineSet && window._errorLineSet.has(lineNum) &&
            !(window._errorLinesWithRange && window._errorLinesWithRange.has(lineNum))) {
            highlighted = `<span class="error-line-bg">${highlighted}</span>`;
        }
        result.push(highlighted);
    }
    return result.join('\n');
}

function highlightLine(line, varTypeMap, undeclaredSet) {
    // Detectar comentario: todo lo que viene después de //
    const commentIdx = findCommentStart(line);
    let codePart  = commentIdx >= 0 ? line.slice(0, commentIdx) : line;
    let commentPart = commentIdx >= 0 ? line.slice(commentIdx) : '';

    let out = tokenizeCode(codePart, varTypeMap || {}, undeclaredSet || null);
    if (commentPart) {
        out += `<span class="kw-comment">${escHtml(commentPart)}</span>`;
    }
    return out;
}

// Encontrar // fuera de strings
function findCommentStart(line) {
    let inStr = false;
    for (let i = 0; i < line.length - 1; i++) {
        if (line[i] === '"') inStr = !inStr;
        if (!inStr && line[i] === '/' && line[i+1] === '/') return i;
    }
    return -1;
}

// Tabla de tokens en orden de prioridad (mayor primero)
// Cada entrada: [regex, className]
// Los que son multi-palabra van primero para que no se partan
const TOKEN_RULES = [
    // ── Strings (más alta prioridad) ─────────────────────────
    [/"[^"]*"/g, 'kw-string'],

    // ── Palabras compuestas (deben ir ANTES que las simples) ──
    [/\bEscribir\s+Sin\s+Saltar\b/gi, 'kw-sinsaltar'],
    [/\bHasta\s+Que\b/gi,              'kw-control'],
    [/\bDe\s+Otro\s+Modo\b/gi,         'kw-control'],
    [/\bCon\s+Paso\b/gi,               'kw-control'],
    [/\bSiNo\s+Si\b/gi,               'kw-control'],  // ElseIf
    // FIX: añadidos modificadores de parámetros de PSeInt
    [/\bPor\s+Valor\b/gi,              'kw-control'],
    [/\bPor\s+Referencia\b/gi,         'kw-control'],

    // ── Proceso / SubProceso / Funcion / Algoritmo / Procedimiento ──
    // FIX: añadidos Funcion/FinFuncion, Algoritmo/FinAlgoritmo (sinónimos
    // oficiales de PSeInt v20250218), y Procedimiento/FinProcedimiento.
    [/\b(Proceso|FinProceso|Algoritmo|FinAlgoritmo|SubProceso|FinSubProceso|Funcion|Función|FinFuncion|FinFunción|Procedimiento|FinProcedimiento)\b/gi, 'kw-process'],

    // ── I/O ───────────────────────────────────────────────────
    [/\b(Leer|Escribir)\b/gi, 'kw-io'],

    // ── Declaración / Tipos ───────────────────────────────────
    [/\b(Definir|Como|Dimension|Arreglo|Parametros|Parámetros|Referencia)\b/gi, 'kw-var'],
    [/\b(Entero|Real|Numerico|Caracter|Logico|Texto|Cadena|Char)\b/gi, 'kw-type'],

    // ── Control de flujo ─────────────────────────────────────
    [/\b(Si|Entonces|SiNo|FinSi)\b/gi,                'kw-control'],
    [/\b(Segun|Hacer|FinSegun)\b/gi,                  'kw-control'],
    [/\b(Mientras|FinMientras)\b/gi,                  'kw-control'],
    [/\b(Repetir|Hasta)\b/gi,                         'kw-control'],
    [/\b(Para|FinPara)\b/gi,                          'kw-control'],
    // FIX: añadido SalirPara (break específico para Para en PSeInt actual)
    [/\b(Retornar|Devolver|Salir|SalirPara|Interrumpir)\b/gi,               'kw-control'],

    // ── Lógicos ──────────────────────────────────────────────
    [/\b(Y|O|NO|And|Or|Not)\b/g, 'kw-logic'],

    // ── Booleanos ────────────────────────────────────────────
    [/\b(Verdadero|Falso|True|False)\b/gi, 'kw-bool'],

    // ── Funciones de texto ───────────────────────────────────
    [/\b(Longitud|Subcadena|Mayusculas|Minusculas|ConvertirATexto|NumeroATexto|TextoANumero|Concatenar|Recortar|Trim|Contiene|Reemplazar|PosicionCaracter|CaracterEnPosicion)\b/gi, 'kw-func'],

    // ── Funciones matemáticas ────────────────────────────────
    [/\b(Raiz|RC|ABS|Abs|TRUNC|Trunc|REDON|Redon|SEN|Sen|COS|Cos|TAN|Tan|ASEN|ASen|ACOS|ACos|ATAN|ATan|LOG|Log|EXP|Exp|PI|Pi|Piso|Techo|Potencia|Signo)\b/g, 'kw-math'],

    // ── Función aleatoria ────────────────────────────────────
    [/\b(Aleatorio|Random)\b/gi, 'kw-func'],

    // ── MOD ──────────────────────────────────────────────────
    [/\bMOD\b/gi, 'kw-op'],

    // ── Operadores de asignación y comparación ───────────────
    [/(<-|<>|<=|>=)/g, 'kw-op'],

    // ── Operadores aritméticos (no dentro de spans) ──────────
    [/([+\-*\/^])/g, 'kw-op'],

    // ── Operadores relacionales simples ──────────────────────
    // (< y > ya están escapados por escHtml, los manejamos con &lt; &gt;)

    // ── Números ──────────────────────────────────────────────
    [/\b(\d+\.?\d*)\b/g, 'kw-number'],
];

function tokenizeCode(code, varTypeMap, undeclaredSet) {
    if (!code.trim()) return escHtml(code);
    return highlightCodeString(code, varTypeMap || {}, undeclaredSet || null);
}

function highlightCodeString(src, varTypeMap, undeclaredSet) {
    // Resultados: lista de {start, end, cls, text}
    const tokens = [];
    let i = 0;

    while (i < src.length) {
        // ── String literal ────────────────────────────────────
        if (src[i] === '"') {
            let j = i + 1;
            while (j < src.length && src[j] !== '"') j++;
            if (j < src.length) j++; // incluir la comilla de cierre
            tokens.push({start: i, end: j, cls: 'kw-string'});
            i = j;
            continue;
        }

        // ── Palabras / keywords ───────────────────────────────
        if (/[a-zA-ZáéíóúÁÉÍÓÚñÑ_]/.test(src[i])) {
            let j = i;
            while (j < src.length && /[a-zA-ZáéíóúÁÉÍÓÚñÑ_0-9]/.test(src[j])) j++;
            const word = src.slice(i, j);

            // Intentar palabras compuestas primero (mira hacia adelante)
            let matched = false;
            const compoundPhrases = [
                {phrase: 'Escribir Sin Saltar', cls: 'kw-sinsaltar'},
                {phrase: 'Borrar Pantalla',      cls: 'kw-io'},
                {phrase: 'Limpiar Pantalla',     cls: 'kw-io'},
                {phrase: 'Esperar Tecla',        cls: 'kw-io'},
                {phrase: 'Hasta Que',            cls: 'kw-control'},
                {phrase: 'De Otro Modo',         cls: 'kw-control'},
                {phrase: 'Con Paso',             cls: 'kw-control'},
                {phrase: 'SiNo Si',              cls: 'kw-control'},
                // FIX: añadidos modificadores de parámetros de PSeInt
                {phrase: 'Por Valor',            cls: 'kw-control'},
                {phrase: 'Por Referencia',       cls: 'kw-control'},
            ];
            for (const {phrase, cls} of compoundPhrases) {
                if (src.slice(i, i + phrase.length).toLowerCase() === phrase.toLowerCase()) {
                    tokens.push({start: i, end: i + phrase.length, cls});
                    i += phrase.length;
                    matched = true;
                    break;
                }
            }
            if (matched) continue;

            // Clasificar la palabra — primero verificar si es variable declarada
            const cls = classifyWord(word, varTypeMap, undeclaredSet);
            tokens.push({start: i, end: j, cls});
            i = j;
            continue;
        }

        // ── Operadores ────────────────────────────────────────
        // Multi-char primero
        const op2 = src.slice(i, i+2);
        if (['<-', '<>', '<=', '>='].includes(op2)) {
            tokens.push({start: i, end: i+2, cls: 'kw-op'});
            i += 2;
            continue;
        }
        if (['+','-','*','/','^','=','<','>'].includes(src[i])) {
            tokens.push({start: i, end: i+1, cls: 'kw-op'});
            i++;
            continue;
        }

        // ── Números ───────────────────────────────────────────
        if (/\d/.test(src[i])) {
            let j = i;
            while (j < src.length && /[\d.]/.test(src[j])) j++;
            tokens.push({start: i, end: j, cls: 'kw-number'});
            i = j;
            continue;
        }

        i++;
    }

    // Reconstruir HTML a partir de los tokens
    let out = '';
    let pos = 0;
    for (const tok of tokens) {
        if (tok.start > pos) {
            out += escHtml(src.slice(pos, tok.start));
        }
        const raw = src.slice(tok.start, tok.end);
        if (tok.cls) {
            out += `<span class="${tok.cls}">${escHtml(raw)}</span>`;
        } else {
            out += escHtml(raw);
        }
        pos = tok.end;
    }
    if (pos < src.length) out += escHtml(src.slice(pos));
    return out;
}

// Clasificar una palabra en su clase CSS
function classifyWord(w, varTypeMap, undeclaredSet) {
    const lw = w.toLowerCase();

    // ── PRIORIDAD MÁXIMA: Variable NO declarada (case-sensitivo) ─────────
    // Las variables de usuario son case-sensitive: "y" != "Y".
    // Si el token exacto está marcado como no declarado → subrayado rojo,
    // sin ningún color de sintaxis encima.
    if (undeclaredSet && undeclaredSet.has(w)) {
        return 'kw-undeclared';
    }

    // ── PRIORIDAD ALTA: Palabra reservada usada como variable ──────────
    // Si el analyzer detectó que esta palabra (case-insensitive) fue usada
    // como nombre de variable en cualquier parte del código, pintamos TODAS
    // sus apariciones de rojo (kw-undeclared) — incluso fuera de la línea
    // donde se detectó originalmente. Así, en
    //     Definir y Como Entero     ← rojo aquí (ya detectado por undeclaredSet)
    //     Escribir x + y            ← y debe también ser ROJO aquí
    // el highlighter es consistente.
    if (window._reservedAsVarNames && (window._reservedAsVarNames.has(w) || window._reservedAsVarNames.has(lw))) {
        return 'kw-undeclared';
    }

    // ── Variable declarada por el usuario: colorear según su tipo ──────────
    // Comparación case-sensitiva: el usuario declaró "miVar", no "mivar".
    // Solo va antes que keywords si el nombre coincide exactamente.
    if (varTypeMap && varTypeMap[w]) {
        return 'kw-uservar ' + varTypeMap[w];
    }

    // Proceso / SubProceso / Funcion / Algoritmo / Procedimiento
    // FIX: añadidos Funcion/FinFuncion, Algoritmo/FinAlgoritmo (sinónimos
    // oficiales de PSeInt v20250218) y Procedimiento/FinProcedimiento.
    if (['proceso','finproceso','algoritmo','finalgoritmo',
         'subproceso','finsubproceso',
         'funcion','función','finfuncion','finfunción',
         'procedimiento','finprocedimiento'].includes(lw))
        return 'kw-process';

    // I/O y comandos de pantalla
    // FIX: añadidos borrar, limpiar, pantalla, esperar, tecla, segundos
    // (parte de los comandos de PSeInt: "Borrar Pantalla", "Limpiar Pantalla",
    //  "Esperar N Segundos", "Esperar Tecla")
    if (['leer','escribir','borrar','limpiar','pantalla',
         'esperar','tecla','segundos'].includes(lw)) return 'kw-io';

    // Declaración
    // FIX: añadidas keywords de tipado estricto de PSeInt v20250218
    if (['definir','como','dimension','arreglo',
         'parametros','parámetros','referencia'].includes(lw)) return 'kw-var';

    // Tipos - cada tipo con su propio color de clase
    if (['entero','numerico'].includes(lw))    return 'kw-type kw-type-entero';
    if (['real'].includes(lw))                  return 'kw-type kw-type-real';
    if (['texto','cadena','caracter','char'].includes(lw)) return 'kw-type kw-type-texto';
    if (['logico'].includes(lw))               return 'kw-type kw-type-logico';

    // Control de flujo
    // FIX: añadido salirpara (break específico de PSeInt actual)
    if (['si','entonces','sino','finsi','segun','hacer','finsegun',
         'mientras','finmientras','repetir','hasta','para','finpara',
         'retornar','devolver','salir','salirpara','interrumpir'].includes(lw))
        return 'kw-control';

    // Lógicos
    if (['y','o','no','and','or','not'].includes(lw)) return 'kw-logic';

    // Booleanos
    if (['verdadero','falso','true','false'].includes(lw)) return 'kw-bool';

    // MOD
    if (lw === 'mod') return 'kw-op';

    // Funciones matemáticas
    if (['raiz','rc','abs','trunc','redon','sen','cos','tan','asen','acos','atan',
         'log','exp','pi','piso','techo','potencia','signo'].includes(lw))
        return 'kw-math';

    // Funciones de texto y otras
    if (['aleatorio','random','longitud','subcadena','mayusculas','minusculas',
         'convertiratexto','numerotexto','textonumero','concatenar','recortar',
         'trim','contiene','reemplazar','posicioncaracter','caracterenposicion',
         'numeroacadena','cadenaanumero'].includes(lw))
        return 'kw-func';

    return null; // sin color → texto normal
}

// ── Conectar el highlighter a un textarea ────────────────────
function attachHighlighter(textareaId, highlightDivId) {
    const ta  = document.getElementById(textareaId);
    const div = document.getElementById(highlightDivId);
    if (!ta || !div) return;

    function sync() {
        // El texto del textarea puede terminar en \n; añadimos un espacio
        // para que el div tenga la misma altura
        const code = ta.value.endsWith('\n') ? ta.value + ' ' : ta.value;
        div.innerHTML = highlightPSeInt(code);
        // Update line numbers if present
        const isBig = ta.classList.contains('big-editor');
        if (isBig) {
            const lnDiv = document.getElementById(textareaId.replace('Editor','LineNums').replace('Editor','LineNums'));
            if (lnDiv) {
                const lines = ta.value.split('\n');
                // FIX: usar <div class="ln-row"> en innerHTML para que cada
                // número quede en su propia fila. Antes se usaba textContent
                // con .join('\n'), pero los \n se colapsaban a espacios en
                // un <div> sin white-space:pre, causando "1 2", "3 4"... etc.
                lnDiv.innerHTML = lines.map((_, i) =>
                    '<div class="ln-row">' + (i + 1) + '</div>'
                ).join('');
                // FIX: invalidar la referencia al .current y re-aplicar.
                // Antes sync() (que se llama en cada input/keyup/paste)
                // regeneraba el gutter SIN re-aplicar la clase, por lo que
                // el highlight del número de línea se perdía y luego
                // _updateActiveLineHighlight no la reaplicaba porque su
                // referencia interna apuntaba a un nodo viejo.
                if (window._invalidateActiveRowRef) window._invalidateActiveRowRef();
                // Re-aplicar inmediatamente la clase a la fila correcta
                if (window._reapplyCurrentRow) window._reapplyCurrentRow(ta);
            }
        }
    }

    // Sincronizar scroll
    ta.addEventListener('scroll', () => {
        div.scrollTop  = ta.scrollTop;
        div.scrollLeft = ta.scrollLeft;
    });

    ta.addEventListener('input',  sync);
    ta.addEventListener('change', sync);
    ta.addEventListener('paste',  () => setTimeout(sync, 0));
    // FIX: NO usar keyup. keyup se disparaba con CADA tecla (incluyendo
    // flechas, Home, End, Ctrl+arrow, etc.) y regeneraba el gutter,
    // borrando el highlight de la línea actual. Es redundante con 'input'
    // que ya cubre todos los cambios de contenido.

    // Inicial
    sync();
    return sync; // devolver para llamar externamente
}

// ── Init: conectar todos los editores al cargar ──────────────
document.addEventListener('DOMContentLoaded', () => {
    // Playground — big editor con line nums
    const syncPlayground = attachHighlighter('playgroundEditor', 'playgroundHighlight');
    // Sync line numbers on scroll too
    const pedit = document.getElementById('playgroundEditor');
    if (pedit) {
        pedit.addEventListener('scroll', () => {
            let ln = document.getElementById('playgroundLineNums');
            if (ln) ln.scrollTop = pedit.scrollTop;
        });
    }
    // Los editores de lecciones (exampleEditor, challengeEditor) se crean 
    // dinámicamente, así que los conectamos en openLesson() – ver abajo.
});

// Exponer para uso externo
window.highlightPSeInt = highlightPSeInt;
window.attachHighlighter = attachHighlighter;
window.syncHighlight = function(textareaId, highlightDivId) {
    const ta  = document.getElementById(textareaId);
    const div = document.getElementById(highlightDivId);
    if (!ta || !div) return;
    const code = ta.value.endsWith('\n') ? ta.value + ' ' : ta.value;
    div.innerHTML = highlightPSeInt(code);
};
