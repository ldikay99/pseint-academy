# PSeInt Academy

> Editor, intérprete y guía interactiva de **PSeInt** — todo en una sola página, sin instalaciones.

**Aprendé pseudocódigo en español directamente en tu navegador.** 56 lecciones interactivas, retos con verificación automática, editor con resaltado y análisis de errores en tiempo real, diagrama de flujo automático, e intérprete completo compatible con PSeInt de escritorio.

🌐 **Demo en vivo:** https://ldikay99.github.io/pseint-academy/

Funciona en cualquier navegador moderno (Chrome, Firefox, Edge, Safari). **100% offline** después de la primera carga — no requiere servidor, no envía datos, no tracking, no cuentas.

---

## 🚀 Navegación

La app está organizada como SPA con rutas independientes:

| Ruta | Contenido |
|---|---|
| `#/home` | Bienvenida + accesos rápidos a todas las secciones |
| `#/lecciones` | 56 lecciones (Básico · Intermedio · Avanzado · Experto) |
| `#/playground` | Editor libre con análisis estático y ejecución |
| `#/referencia` | Todas las palabras clave de PSeInt con ejemplos |
| `#/progreso` | Estado de avance por nivel + reset |
| `#/sobre` | Historia del proyecto y del autor |
| `#/licencia` | Texto completo MIT + créditos |

---

## ✨ Qué incluye

### Editor profesional
- ✅ **Resaltado por tipo de variable** — Entero (cyan), Real (azul), Texto (amarillo), Lógico (verde), Carácter (lila)
- ✅ **Análisis estático en vivo** — detecta variables no declaradas, casing inconsistente, redeclaraciones, tipos incompatibles, palabras reservadas mal usadas
- ✅ **Sugerencias accionables** — el error explica *qué* está mal y *cómo* arreglarlo, con ejemplos
- ✅ **Autocompletado** (Ctrl+Space) con palabras clave, funciones builtin y variables del programa
- ✅ **Highlight de ocurrencias** — al hacer click en una variable, todas sus apariciones se resaltan
- ✅ **Find/Replace** (Ctrl+F / Ctrl+H) con contador de coincidencias
- ✅ **Formato automático** (Ctrl+S) — normaliza casing de keywords sin tocar nombres del usuario
- ✅ **Auto-corrección de typos** comunes (`entonse` → `Entonces`, `mintras` → `Mientras`, etc.)
- ✅ **Atajos tipo VSCode** — Ctrl+D duplicar línea, Ctrl+K eliminar, Alt+↑↓ mover, Ctrl+/ comentar

### Intérprete PSeInt completo
- ✅ Control de flujo: `Si/SiNo/FinSi`, `Mientras/FinMientras`, `Para/FinPara`, `Repetir/Hasta Que`, `Segun/Hacer/FinSegun`
- ✅ Tipos: `Entero`, `Real`, `Numerico`, `Texto`/`Cadena`, `Caracter`/`Char`, `Logico`
- ✅ Operadores: aritméticos, comparación (`<`, `>`, `<=`, `>=`, `=`, `<>`), lógicos (`Y`, `O`, `NO`), `MOD`, `DIV`, `^`
- ✅ Arreglos uni y bidimensionales (`Dimension a[10]`, `Dimension m[3,3]`)
- ✅ SubProcesos y Funciones con paso `Por Valor` y `Por Referencia`
- ✅ Recursividad
- ✅ ~30 funciones builtin: `Raiz`, `Aleatorio`, `Longitud`, `Subcadena`, `Mayusculas`, `ConvertirANumero`, `ConvertirATexto`, etc.
- ✅ Input asíncrono inline en consola
- ✅ Guards contra loops infinitos (caps de iteraciones + tiempo de pared + yield a UI)

### Lecciones interactivas
- ✅ **56 lecciones progresivas** divididas en 4 niveles
- ✅ Cada lección tiene **3 pestañas**: 📖 Teoría · 💡 Ejemplo ejecutable · 🎯 Reto verificable
- ✅ **Validación automática** de retos vía validadores funcionales (verifica estructura, palabras clave, salida)
- ✅ **Progreso persistente** en `localStorage` (sin servidor)

### Herramientas visuales
- ✅ **Diagrama de flujo automático** (F7) generado desde el código con guías visuales por bloque
- ✅ **Pantalla completa** estilo IDE (F11) con panel inferior redimensionable
- ✅ **5 temas** seleccionables: Dark · Light · Solarized · Monokai · Ocean
- ✅ **Sidebar de símbolos y funciones** colapsable — para teclados sin `<`, `^`, `<>` rápidos
- ✅ **Reportar bug** vía Web3Forms (sin abrir GitHub) con ticket ID

### Responsive
- ✅ Tipografía fluida con `clamp()` — escala con viewport y zoom
- ✅ Breakpoints en 480px, 700px, 900px, 1100px, 1600px
- ✅ Editor + consola llenan el viewport disponible (no quedan "huecos" al hacer zoom-out)
- ✅ Soporte `env(safe-area-inset)` para notches de iPhone
- ✅ Contraste WCAG AA en los 5 temas (variables semánticas `--color-error`, `--color-warn`, etc.)

---

## 🎓 Para qué sirve

Diseñado para **estudiantes que recién empiezan con programación** y necesitan dominar PSeInt antes de saltar a Python/Java/C. El feedback en vivo del editor + las lecciones progresivas + el intérprete fiel a la sintaxis oficial reemplazan la necesidad de instalar PSeInt local.

Compatible con instituciones que enseñan PSeInt: el código que pasa el analizador acá ejecuta igual en PSeInt de escritorio.

---

## 💻 Cómo usarlo localmente

Solo abrí `index.html` en tu navegador. Eso es todo.

```bash
git clone https://github.com/ldikay99/pseint-academy.git
cd pseint-academy
# Abrir index.html:
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

No necesitás Node, ni npm, ni un servidor. Cero dependencias externas. Cero build.

---

## 🏗 Arquitectura

Es un **único archivo HTML autocontenido** (~1.2 MB) con CSS y JS inline. Sin build, sin bundler, sin CDN.

- **SPA hash router** (vanilla JS, ~50 líneas) — un solo archivo, múltiples rutas
- **Intérprete** (`class PSeIntInterpreter`) — parser de expresiones con precedencia correcta, dispatch por línea, soporte async para input
- **Analizador estático** (`analyzeSyntax`) — multipase: bloques, identificadores, tipado, casing-consistency, símbolos sueltos
- **Formatter** — normaliza solo palabras reservadas, nunca identificadores de usuario
- **Highlighter** — overlay de div sincronizado con scroll del textarea, sin contenteditable

---

## 🌳 Ramas

- `main` — versión publicada en GitHub Pages (auto-deploy)
- `develop` — trabajo en curso

---

## 👤 Autor

**Jonathan C.** — [@ldikay99](https://github.com/ldikay99) · ✉ heydikay@gmail.com

Estudiante de un técnico en programación. Construí esto porque me hubiera servido a mí cuando estaba aprendiendo algoritmos y no tenía PSeInt instalado. Lee la historia completa en `#/sobre` dentro de la app.

---

## 📜 Licencia

**MIT** — Ver [LICENSE](LICENSE).

Podés usar, copiar, modificar y distribuir el código libremente. La única obligación es incluir el aviso de copyright original. El software se distribuye "tal cual", sin garantías.

---

## 🙏 Atribución

Construido sobre el lenguaje **PSeInt** (PSeudocódigo Intérprete), proyecto educativo abierto creado por **Pablo Novara**: https://pseint.sourceforge.net/

Este proyecto es una implementación web independiente que respeta la sintaxis oficial.

---

## 🐛 Reportar bugs y sugerencias

- **Bug del analizador o intérprete**: pegá el código que falla en un issue. Incluí qué dice nuestro editor vs qué dice PSeInt de escritorio.
- **Falso positivo**: si el analizador marca algo que PSeInt acepta, decímelo con el código exacto.
- **Idea de lección nueva**: abrí un issue con la consigna y el ejemplo de solución.

👉 https://github.com/ldikay99/pseint-academy/issues
