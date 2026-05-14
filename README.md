# PSeInt Academy

> Editor, intérprete y guía interactiva de PSeInt — todo en una sola página, sin instalaciones.

**Aprende pseudocódigo en español directamente en tu navegador.** Incluye lecciones interactivas, retos con verificación automática, editor con resaltado y análisis de errores en tiempo real, diagrama de flujo, y un intérprete completo de PSeInt.

## Probarlo ya

👉 https://ldikay99.github.io/pseint-academy/

Funciona en cualquier navegador moderno (Chrome, Firefox, Edge, Safari). 100% offline después de la primera carga — no requiere servidor, no envía datos.

## Qué incluye

- ✅ **Editor con análisis estático** — detecta variables sin declarar, keywords mal usadas, bloques vacíos, malas prácticas, etc.
- ✅ **Intérprete PSeInt completo** — control de flujo, tipos, funciones, arreglos, recursión
- ✅ **Lecciones interactivas** con teoría, ejemplo ejecutable y reto evaluado automáticamente
- ✅ **5 temas seleccionables** (Dark, Light, Solarized, Monokai, Ocean)
- ✅ **Find/Replace** (Ctrl+F), formateo automático (Ctrl+S), atajos completos
- ✅ **Diagrama de flujo** generado a partir del código
- ✅ **Sidebar de símbolos y funciones** para teclados de laptop sin tecla rápida
- ✅ **Pantalla completa** estilo IDE
- ✅ **Asistente de buenas prácticas** que sugiere mejoras sin abrumar

## Para qué sirve

Diseñado para estudiantes que recién empiezan con la programación y necesitan dominar PSeInt antes de saltar a Python/Java/C. El feedback en vivo del editor + las lecciones progresivas reemplazan la necesidad de instalar PSeInt local.

## Cómo usarlo localmente

Solo abre `index.html` en tu navegador. Eso es todo.

```bash
git clone https://github.com/ldikay99/pseint-academy.git
cd pseint-academy
# Abrir index.html (doble clic, o:)
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

## Estructura del proyecto

Es un único archivo HTML autocontenido (~1 MB) con CSS y JS inline. Sin build, sin dependencias, sin CDN externo. Ver `CLAUDE.md` para detalles de la arquitectura interna.

## Ramas

- `main` — versión publicada en GitHub Pages
- `develop` — trabajo en curso

## Autor

Jonathan C. — [@ldikay99](https://github.com/ldikay99)

## Licencia

MIT — Ver [LICENSE](LICENSE)

## Atribución

Construido sobre el lenguaje **PSeInt** (PSeudocódigo Intérprete), proyecto educativo abierto creado por Pablo Novara: https://pseint.sourceforge.net/
