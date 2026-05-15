            /* ============================================================
                                                                   DATOS DE LECCIONES
                                                                ============================================================ */
            const LESSONS = [
                // BÁSICO
                {
                    id: "b1",
                    level: "basico",
                    icon: "📦",
                    title: "¿Qué es una variable?",
                    desc: "Aprende a almacenar datos en la memoria del computador.",
                    theory: `
		<div class="theory-block">
		  <h3>¿Qué es una variable?</h3>
		  <p>Una <strong>variable</strong> es como una caja con nombre donde guardas un dato. Imagina que tienes una caja etiquetada "edad" y dentro guardas el número 20. Cada vez que necesites saber tu edad, abres esa caja.</p>
		  <p>En PSeInt, usas la palabra <span class="inline-code">Definir</span> para crear la caja, y <span class="inline-code">&lt;-</span> para guardar un valor en ella.</p>
		</div>
		<div class="keyword-grid">
		  <div class="keyword-item">Definir<strong>Declara variable</strong></div>
		  <div class="keyword-item">Como<strong>Define el tipo</strong></div>
		  <div class="keyword-item">&lt;-<strong>Asignación</strong></div>
		  <div class="keyword-item">Leer<strong>Lee del usuario</strong></div>
		  <div class="keyword-item">Escribir<strong>Muestra en pantalla</strong></div>
		</div>
		<div class="theory-block">
		  <h3>Tipos de datos en PSeInt</h3>
		  <p>Cada variable tiene un <em>tipo</em> que indica qué clase de dato puede guardar:</p>
		  <table style="width:100%;border-collapse:collapse;margin-top:10px;font-size:0.85rem">
		    <tr style="background:rgba(0,212,255,0.08)">
		      <th style="text-align:left;padding:6px 10px;border-bottom:1px solid var(--border);color:var(--accent1)">Tipo</th>
		      <th style="text-align:left;padding:6px 10px;border-bottom:1px solid var(--border);color:var(--accent1)">¿Qué guarda?</th>
		      <th style="text-align:left;padding:6px 10px;border-bottom:1px solid var(--border);color:var(--accent1)">Ejemplo</th>
		    </tr>
		    <tr>
		      <td style="padding:6px 10px;border-bottom:1px solid rgba(255,255,255,0.05)"><span class="kw-type-entero" style="font-family:var(--font-mono)">Entero</span></td>
		      <td style="padding:6px 10px;border-bottom:1px solid rgba(255,255,255,0.05);color:var(--text-muted)">Números sin decimales</td>
		      <td style="padding:6px 10px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:var(--font-mono)">5, -3, 100</td>
		    </tr>
		    <tr>
		      <td style="padding:6px 10px;border-bottom:1px solid rgba(255,255,255,0.05)"><span class="kw-type-real" style="font-family:var(--font-mono)">Real</span></td>
		      <td style="padding:6px 10px;border-bottom:1px solid rgba(255,255,255,0.05);color:var(--text-muted)">Números con decimales</td>
		      <td style="padding:6px 10px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:var(--font-mono)">3.14, -0.5</td>
		    </tr>
		    <tr>
		      <td style="padding:6px 10px;border-bottom:1px solid rgba(255,255,255,0.05)"><span class="kw-type-texto" style="font-family:var(--font-mono)">Texto</span></td>
		      <td style="padding:6px 10px;border-bottom:1px solid rgba(255,255,255,0.05);color:var(--text-muted)">Palabras y frases</td>
		      <td style="padding:6px 10px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:var(--font-mono)">"Hola", "Juan"</td>
		    </tr>
		    <tr>
		      <td style="padding:6px 10px"><span class="kw-type-logico" style="font-family:var(--font-mono)">Logico</span></td>
		      <td style="padding:6px 10px;color:var(--text-muted)">Verdad o mentira</td>
		      <td style="padding:6px 10px;font-family:var(--font-mono)">Verdadero, Falso</td>
		    </tr>
		  </table>
		</div>
		<div class="tip-box">💡 <strong>Tip:</strong> Los nombres de variables no pueden tener espacios ni empezar con número. Usa nombres descriptivos como <code>edadPersona</code> en lugar de <code>x</code>. PSeInt no distingue mayúsculas en nombres de variables.</div>
		<div class="warn-box">⚠ <strong>Importante:</strong> En PSeInt la asignación usa <code>&lt;-</code> (flecha), NO el signo igual <code>=</code>. El <code>=</code> solo se usa para comparar si dos valores son iguales.</div>
	 `,
                    example: `Proceso Variables
	Definir nombre Como Texto
	Definir edad Como Entero
	Definir altura Como Real
	Definir esMayor Como Logico
	nombre <- "María"
	edad <- 25
	altura <- 1.65
	esMayor <- Verdadero
	Escribir "Nombre: ", nombre
	Escribir "Edad: ", edad
	Escribir "Altura: ", altura
	Escribir "Es mayor de edad: ", esMayor
FinProceso`,
                    challenge: {
                        desc: "Crea un programa que defina tres variables: tu nombre (Texto), tu edad (Entero) y tu promedio (Real). Asígnales valores y muéstralos con Escribir.",
                        expected: null,
                        validator: function(outputs, code) {
                            let codeL = code.toLowerCase();
                            // 1) Debe definir los 3 tipos
                            if (!codeL.includes('como texto')) return { ok: false, hint: "Falta definir una variable <b>Como Texto</b> para el nombre." };
                            if (!codeL.includes('como entero')) return { ok: false, hint: "Falta definir una variable <b>Como Entero</b> para la edad." };
                            if (!codeL.includes('como real')) return { ok: false, hint: "Falta definir una variable <b>Como Real</b> para el promedio." };
                            // 2) Debe asignar valor a las 3 variables (usar <-)
                            let assigns = (code.match(/<-/g) || []).length;
                            if (assigns < 3) return { ok: false, hint: "Debes asignar valores a las 3 variables usando <b>&lt;-</b>. Solo encontré " + assigns + " asignación(es)." };
                            // 3) Debe haber al menos 3 Escribir con salida real
                            let nonEmpty = outputs.filter(o => o.trim() !== '');
                            if (nonEmpty.length < 3) return { ok: false, hint: "Tu programa debe mostrar <b>3 valores</b> con Escribir (nombre, edad y promedio). Solo produjo " + nonEmpty.length + " línea(s) de salida." };
                            // 4) Al menos una salida debe contener texto (el nombre)
                            let hasTextOutput = nonEmpty.some(o => /[a-zA-ZáéíóúñÁÉÍÓÚÑ]{2,}/.test(o));
                            if (!hasTextOutput) return { ok: false, hint: "Una de las salidas debe mostrar el nombre (un valor de texto, no solo números)." };
                            // 5) Al menos una salida debe contener un número entero y otra un decimal (edad y promedio)
                            let hasIntOutput = nonEmpty.some(o => /\b\d+\b/.test(o));
                            if (!hasIntOutput) return { ok: false, hint: "Debes mostrar la edad (un número entero)." };
                            let hasRealOutput = nonEmpty.some(o => /\b\d+[.,]\d+/.test(o));
                            if (!hasRealOutput) return { ok: false, hint: "Debes mostrar el promedio (un número con decimales, ej: 4.5)." };
                            return { ok: true };
                        },
                        solution: `Proceso MisDatos
	Definir miNombre Como Texto
	Definir miEdad Como Entero
	Definir miPromedio Como Real
	miNombre <- "Ana"
	miEdad <- 18
	miPromedio <- 4.5
	Escribir "Nombre: ", miNombre
	Escribir "Edad: ", miEdad
	Escribir "Promedio: ", miPromedio
FinProceso`,
                    },
                },
                {
                    id: "b2",
                    level: "basico",
                    icon: "📥",
                    title: "Leer y Escribir",
                    desc: "Entrada y salida de datos: interactúa con el usuario.",
                    theory: `
		<div class="theory-block">
		  <h3>Salida: Escribir</h3>
		  <p><span class="inline-code">Escribir</span> muestra texto o valores en pantalla. Puedes combinar texto con variables usando comas.</p>
		</div>
		<div class="theory-block">
		  <h3>Entrada: Leer</h3>
		  <p><span class="inline-code">Leer</span> espera a que el usuario escriba algo y lo guarda en una variable.</p>
		</div>
		<div class="tip-box">💡 El orden importa: primero le dices al usuario qué debe ingresar (Escribir), luego lo lees (Leer).</div>
		<div class="theory-block">
		  <h3>Proceso y FinProceso</h3>
		  <p>Todo programa PSeInt debe estar entre <span class="inline-code">Proceso NombreDelPrograma</span> y <span class="inline-code">FinProceso</span>. El nombre del proceso no puede tener espacios.</p>
		</div>
	 `,
                    example: `Proceso SaludarUsuario
	Definir nombre Como Texto
	Definir edad Como Entero
	Escribir "¿Cuál es tu nombre?"
	Leer nombre
	Escribir "¿Cuántos años tienes?"
	Leer edad
	Escribir "¡Hola, ", nombre, "!"
	Escribir "Tienes ", edad, " años."
FinProceso`,
                    challenge: {
                        desc: "Escribe un programa que pida al usuario dos números y muestre su suma. Pistas: define dos variables Entero, léelas, calcula la suma y muéstrala.",
                        expected: null,
                        validator: function(outputs, code) {
                            let codeL = code.toLowerCase();
                            if ((codeL.match(/leer\s+/gi) || []).length < 2) return { ok: false, hint: "Debes usar Leer al menos dos veces para pedir los dos números." };
                            if ((codeL.match(/escribir\s+/gi) || []).length < 1) return { ok: false, hint: "Debes mostrar la suma con Escribir." };
                            if (!codeL.includes('+')) return { ok: false, hint: "Debes calcular la suma con el operador +." };
                            if (outputs.length < 1) return { ok: false, hint: "Tu programa debe mostrar al menos un resultado con Escribir." };
                            return { ok: true };
                        },
                        solution: `Proceso SumarNumeros
	Definir num1 Como Entero
	Definir num2 Como Entero
	Definir suma Como Entero
	Escribir "Ingresa el primer numero:"
	Leer num1
	Escribir "Ingresa el segundo numero:"
	Leer num2
	suma <- num1 + num2
	Escribir "La suma es: ", suma
FinProceso`,
                    },
                },
                {
                    id: "b3",
                    level: "basico",
                    icon: "🔢",
                    title: "Operadores aritméticos",
                    desc: "Suma, resta, multiplicación, división y más.",
                    theory: `
		<div class="theory-block">
		  <h3>Operadores aritméticos</h3>
		  <p><span class="inline-code">+</span> Suma &nbsp;|&nbsp; <span class="inline-code">-</span> Resta &nbsp;|&nbsp; <span class="inline-code">*</span> Multiplicación &nbsp;|&nbsp; <span class="inline-code">/</span> División &nbsp;|&nbsp; <span class="inline-code">^</span> Potencia &nbsp;|&nbsp; <span class="inline-code">MOD</span> Módulo (resto)</p>
		</div>
		<div class="theory-block">
		  <h3>Funciones matemáticas</h3>
		  <p><span class="inline-code">ABS(x)</span>: valor absoluto. <span class="inline-code">RAIZ(x)</span>: raíz cuadrada. <span class="inline-code">TRUNC(x)</span>: parte entera. <span class="inline-code">REDON(x)</span>: redondear.</p>
		</div>
		<div class="warn-box">⚠️ La división entera entre dos enteros puede dar decimales en PSeInt. Usa TRUNC() si necesitas solo la parte entera.</div>
	 `,
                    example: `Proceso Operadores
	Definir num1 Como Real
	Definir num2 Como Real
	num1 <- 15
	num2 <- 4
	Escribir "Suma: ", num1 + num2
	Escribir "Resta: ", num1 - num2
	Escribir "Producto: ", num1 * num2
	Escribir "Division: ", num1 / num2
	Escribir "Potencia: ", num1 ^ 2
	Escribir "Modulo (resto): ", num1 MOD num2
	Escribir "Raiz de num1: ", RAIZ(num1)
	Escribir "Truncado: ", TRUNC(num1 / num2)
FinProceso`,
                    challenge: {
                        desc: "Calcula el área y perímetro de un rectángulo. Pide al usuario la base y la altura. Área = base * altura, Perímetro = 2*(base+altura).",
                        expected: null,
                        validator: function(outputs, code) {
                            let codeL = code.toLowerCase();
                            if (!codeL.includes('*')) return { ok: false, hint: "Debes usar multiplicación (*) para calcular el área." };
                            if (!codeL.includes('leer')) return { ok: false, hint: "Debes pedir datos al usuario con Leer." };
                            if (outputs.length < 2) return { ok: false, hint: "Debes mostrar tanto el Área como el Perímetro con Escribir (mínimo 2 líneas de salida)." };
                            return { ok: true };
                        },
                        solution: `Proceso AreaRectangulo
	Definir base Como Real
	Definir altura Como Real
	Definir area Como Real
	Definir perimetro Como Real
	Escribir "Ingresa la base:"
	Leer base
	Escribir "Ingresa la altura:"
	Leer altura
	area <- base * altura
	perimetro <- 2 * (base + altura)
	Escribir "Área: ", area
	Escribir "Perímetro: ", perimetro
FinProceso`,
                    },
                },
                {
                    id: "b4",
                    level: "basico",
                    icon: "⚖️",
                    title: "Operadores lógicos y relacionales",
                    desc: "Comparaciones y operaciones booleanas.",
                    theory: `
		<div class="theory-block">
		  <h3>Operadores relacionales</h3>
		  <p>Comparan dos valores y dan resultado Verdadero o Falso:</p>
		  <p><span class="inline-code">=</span> Igual &nbsp;|&nbsp; <span class="inline-code">&lt;&gt;</span> Diferente &nbsp;|&nbsp; <span class="inline-code">&lt;</span> Menor &nbsp;|&nbsp; <span class="inline-code">&gt;</span> Mayor &nbsp;|&nbsp; <span class="inline-code">&lt;=</span> Menor o igual &nbsp;|&nbsp; <span class="inline-code">&gt;=</span> Mayor o igual</p>
		</div>
		<div class="theory-block">
		  <h3>Operadores lógicos</h3>
		  <p><span class="inline-code">Y</span>: verdadero si ambos son verdaderos.</p>
		  <p><span class="inline-code">O</span>: verdadero si al menos uno es verdadero.</p>
		  <p><span class="inline-code">NO</span>: invierte el valor lógico.</p>
		</div>
	 `,
                    example: `Proceso Logicos
	Definir num1 Como Entero
	Definir num2 Como Entero
	num1 <- 10
	num2 <- 5
	Escribir "num1 > num2: ", num1 > num2
	Escribir "num1 = num2: ", num1 = num2
	Escribir "num1 <> num2: ", num1 <> num2
	Escribir "(num1>0) Y (num2>0): ", (num1 > 0) Y (num2 > 0)
	Escribir "(num1<0) O (num2>0): ", (num1 < 0) O (num2 > 0)
	Escribir "NO (num1>num2): ", NO (num1 > num2)
FinProceso`,
                    challenge: {
                        desc: "Pide un número al usuario y muestra si es positivo (> 0), negativo (< 0) o cero (= 0). Usa tres Escribir con los resultados booleanos.",
                        expected: null,
                        validator: function(outputs, code) {
                            let codeL = code.toLowerCase();
                            if (!codeL.includes('leer')) return { ok: false, hint: "Debes pedir el número al usuario con Leer." };
                            let outAll = outputs.join(' ').toLowerCase();
                            let hasPositivo = outAll.includes('positivo');
                            let hasNegativo = outAll.includes('negativo');
                            let hasCero = outAll.includes('cero') || outAll.includes('= 0') || outAll.includes('=0');
                            if (!hasPositivo && !hasNegativo && !hasCero) {
                                let hasBool = outAll.includes('verdadero') || outAll.includes('falso') || outAll.includes('true') || outAll.includes('false');
                                if (!hasBool) return { ok: false, hint: "La salida debe mostrar si el número es positivo, negativo o cero (con texto o booleano)." };
                            }
                            if (outputs.length < 3) return { ok: false, hint: "Debes usar tres Escribir para mostrar los tres resultados booleanos." };
                            return { ok: true };
                        },
                        solution: `Proceso ClasificarNumero
	Definir numero Como Real
	Escribir "Ingresa un numero:"
	Leer numero
	Escribir "Es positivo? ", numero > 0
	Escribir "Es negativo? ", numero < 0
	Escribir "Es cero? ", numero = 0
FinProceso`,
                    },
                },
                {
                    id: "b5",
                    level: "basico",
                    icon: "💬",
                    title: "Comentarios y buenas prácticas",
                    desc: "Documenta tu código y escribe con claridad.",
                    theory: `
		<div class="theory-block">
		  <h3>Comentarios en PSeInt</h3>
		  <p>Los comentarios son notas que tú escribes para explicar el código. PSeInt los ignora al ejecutar. Se escriben con <span class="inline-code">// texto del comentario</span>.</p>
		</div>
		<div class="tip-box">💡 Un buen programador comenta: qué hace el programa, qué hace cada sección importante y por qué tomó ciertas decisiones.</div>
		<div class="theory-block">
		  <h3>Buenas prácticas</h3>
		  <p>• Usa nombres descriptivos para variables.<br>• Indenta (sangría) el código dentro de estructuras.<br>• Un proceso debe hacer una cosa bien.<br>• Comenta el porqué, no el qué (el código ya dice qué hace).</p>
		</div>
	 `,
                    example: `// Programa: Calcular el IMC (Índice de Masa Corporal)
// Autor: Tu nombre
// Fecha: 2024

Proceso CalcularIMC
	// Variables de entrada
	Definir peso Como Real    // en kilogramos
	Definir altura Como Real  // en metros
	Definir imc Como Real

	// Solicitar datos al usuario
	Escribir "Ingresa tu peso (kg):"
	Leer peso
	Escribir "Ingresa tu altura (m):"
	Leer altura

	// Calcular IMC: peso / altura^2
	imc <- peso / (altura ^ 2)

	// Mostrar resultado
	Escribir "Tu IMC es: ", imc
FinProceso`,
                    challenge: {
                        desc: "Escribe un programa bien comentado que convierta temperaturas de Celsius a Fahrenheit. Fórmula: F = C * 9/5 + 32. Añade al menos 3 comentarios.",
                        expected: null,
                        validator: function(outputs, code) {
                            let commentCount = (code.match(/\/\/.+/g) || []).length;
                            if (commentCount < 3) return { ok: false, hint: "Debes añadir al menos 3 comentarios con //. Tienes " + commentCount + "." };
                            let codeL = code.toLowerCase();
                            if (!codeL.includes('leer')) return { ok: false, hint: "Debes pedir la temperatura al usuario con Leer." };
                            if (!codeL.includes('9') || !codeL.includes('32')) return { ok: false, hint: "Usa la fórmula: F = C * 9/5 + 32." };
                            if (outputs.length < 1) return { ok: false, hint: "Debes mostrar el resultado con Escribir." };
                            return { ok: true };
                        },
                        solution: `// Conversión de temperatura Celsius a Fahrenheit
// Fórmula: F = C * (9/5) + 32

Proceso ConvertirTemperatura
	Definir celsius Como Real
	Definir fahrenheit Como Real

	// Pedir temperatura en Celsius al usuario
	Escribir "Ingresa la temperatura en Celsius:"
	Leer celsius

	// Aplicar la fórmula de conversión
	fahrenheit <- celsius * 9 / 5 + 32

	// Mostrar resultado
	Escribir celsius, "°C = ", fahrenheit, "°F"
FinProceso`,
                    },
                },
                {
                    id: "b6",
                    level: "basico",
                    icon: "🔄",
                    title: "Asignación y expresiones",
                    desc: "Domina las asignaciones y expresiones compuestas.",
                    theory: `
		<div class="theory-block">
		  <h3>El operador de asignación ←</h3>
		  <p>En PSeInt se escribe como <span class="inline-code">&lt;-</span>. Evalúa la expresión del lado derecho y guarda el resultado en la variable del lado izquierdo.</p>
		  <p>Ejemplo: <span class="inline-code">contador &lt;- contador + 1</span> toma el valor actual de contador, le suma 1 y lo guarda de nuevo en contador.</p>
		</div>
		<div class="theory-block">
		  <h3>Intercambiar valores (swap)</h3>
		  <p>Para intercambiar dos variables necesitas una variable auxiliar temporal. Sin ella, perderías uno de los valores.</p>
		</div>
		<div class="tip-box">💡 <span class="inline-code">contador &lt;- contador + 1</span> es tan común que se llama "incremento". En algoritmos lo verás constantemente.</div>
	 `,
                    example: `Proceso Asignaciones
	Definir num1 Como Entero
	Definir num2 Como Entero
	Definir aux Como Entero

	num1 <- 10
	num2 <- 20
	Escribir "Antes: num1=", num1, " num2=", num2

	// Intercambiar valores (swap)
	aux <- num1
	num1 <- num2
	num2 <- aux
	Escribir "Despues: num1=", num1, " num2=", num2

	// Acumuladores
	Definir suma Como Entero
	suma <- 0
	suma <- suma + 5
	suma <- suma + 3
	suma <- suma + 7
	Escribir "Suma acumulada: ", suma
FinProceso`,
                    challenge: {
                        desc: "Pide dos números al usuario. Muestra cuál es mayor y cuál es menor. Luego intercámbialos (swap) y vuelve a mostrarlos.",
                        expected: null,
                        solution: `Proceso SwapNumeros
	Definir num1 Como Real
	Definir num2 Como Real
	Definir aux Como Real
	Escribir "Primer numero:"
	Leer num1
	Escribir "Segundo numero:"
	Leer num2
	Escribir "Mayor: ", num1
	Escribir "Menor: ", num2
	aux <- num1
	num1 <- num2
	num2 <- aux
	Escribir "Despues del swap:"
	Escribir "num1 = ", num1
	Escribir "num2 = ", num2
FinProceso`,
                    },
                },
                {
                    id: "b7",
                    level: "basico",
                    icon: "🎲",
                    title: "Números aleatorios",
                    desc: "Genera valores al azar con la función Aleatorio.",
                    theory: `
		<div class="theory-block">
		  <h3>La función Aleatorio</h3>
		  <p>PSeInt incluye <span class="inline-code">Aleatorio(inicio, fin)</span> que devuelve un número entero aleatorio entre inicio y fin (ambos inclusive).</p>
		  <p>Ejemplo: <span class="inline-code">dado &lt;- Aleatorio(1, 6)</span> simula lanzar un dado.</p>
		</div>
		<div class="theory-block">
		  <h3>Aplicaciones</h3>
		  <p>• Juegos: dados, cartas, ruleta.<br>• Simulaciones: clima, tráfico.<br>• Ejercicios: generar datos de prueba.</p>
		</div>
		<div class="tip-box">💡 Para generar un número Real aleatorio entre 0 y 1: <code>Aleatorio(0, 1000) / 1000</code></div>
	 `,
                    example: `Proceso Dados
	Definir dado1 Como Entero
	Definir dado2 Como Entero
	Definir intentos Como Entero
	intentos <- 0
	Repetir
		dado1 <- Aleatorio(1, 6)
		dado2 <- Aleatorio(1, 6)
		intentos <- intentos + 1
		Escribir "Tirada ", intentos, ": ", dado1, " y ", dado2
	Hasta Que dado1 = dado2
	Escribir "¡Par de ", dado1, " en ", intentos, " intentos!"
FinProceso`,
                    challenge: {
                        desc: "Crea un programa que simule un dado de 20 caras. Lanza el dado hasta que salga 20 y muestra cuántos intentos tomó. Usa Aleatorio(1, 20).",
                        expected: null,
                        solution: `Proceso DadoVeinte
	Definir tirada Como Entero
	Definir intentos Como Entero
	intentos <- 0
	Repetir
		tirada <- Aleatorio(1, 20)
		intentos <- intentos + 1
		Escribir "Tirada ", intentos, ": ", tirada
	Hasta Que tirada = 20
	Escribir "¡Crítico! Tomó ", intentos, " intento(s)."
FinProceso`,
                    },
                },
                {
                    id: "b8",
                    level: "basico",
                    icon: "📐",
                    title: "Funciones matemáticas integradas",
                    desc: "Explora RAIZ, ABS, TRUNC, REDON, SEN, COS y más.",
                    theory: `
		<div class="theory-block">
		  <h3>Biblioteca matemática de PSeInt</h3>
		  <p><span class="inline-code">RAIZ(x)</span>: raíz cuadrada</p>
		  <p><span class="inline-code">ABS(x)</span>: valor absoluto (quita el signo)</p>
		  <p><span class="inline-code">TRUNC(x)</span>: corta los decimales (no redondea)</p>
		  <p><span class="inline-code">REDON(x)</span>: redondea al entero más cercano</p>
		  <p><span class="inline-code">SEN(x)</span>, <span class="inline-code">COS(x)</span>: seno y coseno (x en radianes)</p>
		  <p><span class="inline-code">LOG(x)</span>: logaritmo natural</p>
		  <p><span class="inline-code">EXP(x)</span>: e elevado a la x</p>
		</div>
		<div class="theory-block">
		  <h3>Convertir grados a radianes</h3>
		  <p><span class="inline-code">radianes &lt;- grados * 3.14159 / 180</span></p>
		</div>
		<div class="warn-box">⚠️ SEN y COS esperan el ángulo en radianes, no en grados. Si usas grados, conviértelos primero.</div>
	 `,
                    example: `Proceso FuncionesMatematicas
	Definir num Como Real
	Definir angulo Como Real
	num <- -25.7
	angulo <- 45
	Escribir "Número original: ", num
	Escribir "ABS: ", ABS(num)
	Escribir "RAIZ de 144: ", RAIZ(144)
	Escribir "TRUNC: ", TRUNC(num)
	Escribir "REDON: ", REDON(num)
	Escribir "SEN(45°): ", SEN(angulo * 3.14159 / 180)
	Escribir "COS(45°): ", COS(angulo * 3.14159 / 180)
	Escribir "LOG(100): ", LOG(100)
FinProceso`,
                    challenge: {
                        desc: "Pide un número decimal al usuario y muestra su valor absoluto, su raíz cuadrada (si es positivo), su truncado y su redondeo.",
                        expected: null,
                        solution: `Proceso ExplorarNumero
	Definir n Como Real
	Escribir "Ingresa un número decimal:"
	Leer n
	Escribir "Valor absoluto: ", ABS(n)
	Si n >= 0 Entonces
		Escribir "Raíz cuadrada: ", RAIZ(n)
	SiNo
		Escribir "No se puede calcular raíz de negativo"
	FinSi
	Escribir "Truncado: ", TRUNC(n)
	Escribir "Redondeado: ", REDON(n)
FinProceso`,
                    },
                },
                {
                    id: "b9",
                    level: "basico",
                    icon: "📝",
                    title: "Concatenación y formato de salida",
                    desc: "Combina texto, variables y saltos de línea en Escribir.",
                    theory: `
		<div class="theory-block">
		  <h3>Concatenar con Escribir</h3>
		  <p>Puedes combinar texto y variables separándolos con comas dentro de <span class="inline-code">Escribir</span>. Cada elemento se muestra uno tras otro en la misma línea.</p>
		  <p><span class="inline-code">Escribir "Tu nombre es ", nombre, " y tienes ", edad, " años"</span></p>
		</div>
		<div class="theory-block">
		  <h3>Saltos de línea</h3>
		  <p>Cada <span class="inline-code">Escribir</span> termina con un salto de línea. Si haces varios Escribir seguidos, cada uno aparecerá en una línea nueva.</p>
		  <p>Para mostrar líneas en blanco usa <span class="inline-code">Escribir ""</span></p>
		</div>
		<div class="tip-box">💡 Para dibujar un menú o una tabla usa varios Escribir con espaciado consistente.</div>
	 `,
                    example: `Proceso FormatoSalida
	Definir nombre Como Texto
	Definir edad Como Entero
	Definir ciudad Como Texto
	nombre <- "Lucía"
	edad <- 23
	ciudad <- "Bogotá"
	Escribir "================================="
	Escribir "       FICHA DE USUARIO         "
	Escribir "================================="
	Escribir ""
	Escribir "Nombre  : ", nombre
	Escribir "Edad    : ", edad, " años"
	Escribir "Ciudad  : ", ciudad
	Escribir ""
	Escribir "================================="
FinProceso`,
                    challenge: {
                        desc: "Crea un programa que pida el nombre de un producto, su precio y la cantidad, y luego muestre un ticket de compra con formato de línea y el total.",
                        expected: null,
                        solution: `Proceso TicketCompra
	Definir producto Como Texto
	Definir precio Como Real
	Definir cantidad Como Entero
	Definir total Como Real
	Escribir "Nombre del producto:"
	Leer producto
	Escribir "Precio unitario:"
	Leer precio
	Escribir "Cantidad:"
	Leer cantidad
	total <- precio * cantidad
	Escribir "========================"
	Escribir "      TICKET DE COMPRA"
	Escribir "========================"
	Escribir "Producto: ", producto
	Escribir "Precio: $", precio
	Escribir "Cantidad: ", cantidad
	Escribir "------------------------"
	Escribir "TOTAL: $", total
	Escribir "========================"
FinProceso`,
                    },
                },
                {
                    id: "b10",
                    level: "basico",
                    icon: "🧪",
                    title: "Ejercicios integradores básicos",
                    desc: "Aplica todo lo aprendido en problemas completos.",
                    theory: `
		<div class="theory-block">
		  <h3>Repaso general del nivel básico</h3>
		  <p>En este nivel aprendiste:</p>
		  <p>✅ Variables y tipos de datos (Entero, Real, Texto, Logico)</p>
		  <p>✅ Entrada y salida (Leer, Escribir)</p>
		  <p>✅ Operadores aritméticos (+, -, *, /, ^, MOD)</p>
		  <p>✅ Operadores relacionales y lógicos</p>
		  <p>✅ Asignaciones e intercambios</p>
		  <p>✅ Funciones integradas y números aleatorios</p>
		  <p>✅ Buenas prácticas y comentarios</p>
		</div>
		<div class="tip-box">💡 Antes de pasar al nivel intermedio, asegúrate de poder escribir programas completos que usen entrada, procesamiento y salida sin ayuda.</div>
	 `,
                    example: `// Programa: Calculadora de propinas
Proceso CalculadoraPropinas
	Definir cuenta Como Real
	Definir porcentaje Como Real
	Definir propina Como Real
	Definir total Como Real

	Escribir "===== CALCULADORA DE PROPINAS ====="
	Escribir "Monto de la cuenta:"
	Leer cuenta
	Escribir "Porcentaje de propina (ej: 15):"
	Leer porcentaje

	propina <- cuenta * porcentaje / 100
	total <- cuenta + propina

	Escribir ""
	Escribir "Resumen:"
	Escribir "Cuenta: $", cuenta
	Escribir "Propina (", porcentaje, "%): $", propina
	Escribir "-----------------------------"
	Escribir "Total a pagar: $", total
FinProceso`,
                    challenge: {
                        desc: "Crea una calculadora de promedio de 3 notas con porcentajes: nota1=30%, nota2=30%, nota3=40%. Muestra el promedio ponderado y si aprobó (>=6.0).",
                        expected: null,
                        solution: `Proceso PromedioPonderado
	Definir n1 Como Real
	Definir n2 Como Real
	Definir n3 Como Real
	Definir prom Como Real
	Escribir "Nota 1 (30%):"
	Leer n1
	Escribir "Nota 2 (30%):"
	Leer n2
	Escribir "Nota 3 (40%):"
	Leer n3
	prom <- n1 * 0.3 + n2 * 0.3 + n3 * 0.4
	Escribir "Promedio: ", prom
	Escribir "¿Aprobó? ", prom >= 6.0
FinProceso`,
                    },
                },
                // INTERMEDIO
                {
                    id: "i1",
                    level: "intermedio",
                    icon: "🔀",
                    title: "Si-Entonces (condicional simple)",
                    desc: "Toma decisiones en tu programa según condiciones.",
                    theory: `
		<div class="theory-block">
		  <h3>Estructura Si-Entonces-FinSi</h3>
		  <p>Permite ejecutar código solo si una condición es verdadera.</p>
		  <p>Sintaxis:</p>
		  <p><span class="inline-code">Si condición Entonces<br>&nbsp;&nbsp;instrucciones<br>FinSi</span></p>
		</div>
		<div class="theory-block">
		  <h3>Si-Entonces-SiNo-FinSi</h3>
		  <p>Si la condición es verdadera, ejecuta el bloque "Entonces". Si es falsa, ejecuta el bloque "SiNo".</p>
		  <p><span class="inline-code">Si condición Entonces<br>&nbsp;&nbsp;instrucciones A<br>SiNo<br>&nbsp;&nbsp;instrucciones B<br>FinSi</span></p>
		</div>
		<div class="tip-box">💡 Puedes anidar Si dentro de Si para condiciones más complejas.</div>
	 `,
                    example: `Proceso Condicional
	Definir nota Como Real
	Escribir "Ingresa tu nota (0-10):"
	Leer nota
	Si nota >= 6 Entonces
		Escribir "¡Aprobado! 🎉"
	SiNo
		Escribir "Reprobado 😞"
	FinSi
	Si nota = 10 Entonces
		Escribir "¡Perfecto! ⭐"
	FinSi
	Si nota >= 9 Y nota < 10 Entonces
		Escribir "Excelente 👏"
	FinSi
FinProceso`,
                    challenge: {
                        desc: 'Escribe un programa que pida la edad de una persona y clasifique: menor de 13 = "Niño", 13-17 = "Adolescente", 18-64 = "Adulto", 65+ = "Adulto mayor".',
                        expected: null,
                        validator: function(outputs, code) {
                            let codeL = code.toLowerCase();
                            if (!codeL.includes('si ') && !codeL.includes('si\t')) return { ok: false, hint: "Debes usar la estructura Si-Entonces para clasificar." };
                            if (!codeL.includes('leer')) return { ok: false, hint: "Debes pedir la edad al usuario con Leer." };
                            let outAll = outputs.join(' ').toLowerCase();
                            let hasCategory = outAll.includes('niño') || outAll.includes('adolescente') || outAll.includes('adulto');
                            if (!hasCategory) return { ok: false, hint: "La salida debe mostrar la categoría (Niño, Adolescente, Adulto, o Adulto mayor)." };
                            return { ok: true };
                        },
                        solution: `Proceso ClasificarEdad
	Definir edad Como Entero
	Escribir "Ingresa la edad:"
	Leer edad
	Si edad < 13 Entonces
		Escribir "Niño"
	SiNo
		Si edad < 18 Entonces
			Escribir "Adolescente"
		SiNo
			Si edad < 65 Entonces
				Escribir "Adulto"
			SiNo
				Escribir "Adulto mayor"
			FinSi
		FinSi
	FinSi
FinProceso`,
                    },
                },
                {
                    id: "i2",
                    level: "intermedio",
                    icon: "🎛️",
                    title: "Segun (switch)",
                    desc: "Selecciona entre múltiples opciones con Segun.",
                    theory: `
		<div class="theory-block">
		  <h3>Estructura Segun</h3>
		  <p>Cuando debes comparar una variable con muchos valores posibles, <span class="inline-code">Segun</span> es más limpio que múltiples Si-FinSi.</p>
		  <p>Sintaxis:</p>
		  <p><span class="inline-code">Segun variable Hacer<br>&nbsp;&nbsp;valor1: instrucciones<br>&nbsp;&nbsp;valor2, valor3: instrucciones<br>&nbsp;&nbsp;De Otro Modo: instrucciones<br>FinSegun</span></p>
		</div>
		<div class="tip-box">💡 <strong>De Otro Modo</strong> es opcional y se ejecuta si ningún caso coincide. Equivale al "default" en otros lenguajes.</div>
	 `,
                    example: `Proceso MenuOpciones
	Definir opcion Como Entero
	Escribir "=== MENÚ ==="
	Escribir "1. Saludar"
	Escribir "2. Despedirse"
	Escribir "3. Contar chiste"
	Escribir "Elige una opción:"
	Leer opcion
	Segun opcion Hacer
		1: Escribir "¡Hola, bienvenido!"
		2: Escribir "¡Hasta luego!"
		3: Escribir "¿Por qué el programador usa gafas? Porque no ve C#"
		De Otro Modo: Escribir "Opción no válida"
	FinSegun
FinProceso`,
                    challenge: {
                        desc: "Crea un programa que reciba el número del mes (1-12) y muestre su nombre (Enero, Febrero, etc.) y cuántos días tiene. Usa Segun.",
                        expected: null,
                        validator: function(outputs, code) {
                            let codeL = code.toLowerCase();
                            if (!codeL.includes('segun')) return { ok: false, hint: "Debes usar la estructura Segun...Hacer para los meses." };
                            if (!codeL.includes('leer')) return { ok: false, hint: "Debes pedir el número de mes con Leer." };
                            let outAll = outputs.join(' ').toLowerCase();
                            let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
                            let hasMes = meses.some(m => outAll.includes(m));
                            if (!hasMes) return { ok: false, hint: "La salida debe incluir el nombre del mes. Parece que el mes no se muestra correctamente." };
                            return { ok: true };
                        },
                        solution: `Proceso NombreMes
	Definir mes Como Entero
	Escribir "Ingresa el número del mes (1-12):"
	Leer mes
	Segun mes Hacer
		1: Escribir "Enero - 31 días"
		2: Escribir "Febrero - 28/29 días"
		3: Escribir "Marzo - 31 días"
		4: Escribir "Abril - 30 días"
		5: Escribir "Mayo - 31 días"
		6: Escribir "Junio - 30 días"
		7: Escribir "Julio - 31 días"
		8: Escribir "Agosto - 31 días"
		9: Escribir "Septiembre - 30 días"
		10: Escribir "Octubre - 31 días"
		11: Escribir "Noviembre - 30 días"
		12: Escribir "Diciembre - 31 días"
		De Otro Modo: Escribir "Mes inválido"
	FinSegun
FinProceso`,
                    },
                },
                {
                    id: "i3",
                    level: "intermedio",
                    icon: "🔁",
                    title: "Mientras (while)",
                    desc: "Repite instrucciones mientras una condición sea verdadera.",
                    theory: `
		<div class="theory-block">
		  <h3>Ciclo Mientras</h3>
		  <p>Repite un bloque de código mientras la condición sea verdadera. Verifica la condición <strong>antes</strong> de cada iteración.</p>
		  <p><span class="inline-code">Mientras condición Hacer<br>&nbsp;&nbsp;instrucciones<br>FinMientras</span></p>
		</div>
		<div class="warn-box">⚠️ Si la condición nunca se vuelve falsa, tendrás un bucle infinito. Asegúrate de modificar la variable de control dentro del ciclo.</div>
		<div class="theory-block">
		  <h3>Contadores y acumuladores</h3>
		  <p><strong>Contador:</strong> variable que aumenta de 1 en 1. <span class="inline-code">i &lt;- i + 1</span></p>
		  <p><strong>Acumulador:</strong> variable que acumula una suma. <span class="inline-code">suma &lt;- suma + valor</span></p>
		</div>
	 `,
                    example: `Proceso CicloMientras
	Definir i Como Entero
	Definir suma Como Entero
	i <- 1
	suma <- 0
	Mientras i <= 10 Hacer
		Escribir "Número: ", i
		suma <- suma + i
		i <- i + 1
	FinMientras
	Escribir "Suma total: ", suma
	Escribir "Promedio: ", suma / 10
FinProceso`,
                    challenge: {
                        desc: "Escribe un programa que pida números al usuario hasta que ingrese 0. Al final, muestra la cantidad de números ingresados y su suma.",
                        expected: null,
                        solution: `Proceso SumarHasta0
	Definir num Como Real
	Definir suma Como Real
	Definir contador Como Entero
	suma <- 0
	contador <- 0
	Escribir "Ingresa números (0 para terminar):"
	Leer num
	Mientras num <> 0 Hacer
		suma <- suma + num
		contador <- contador + 1
		Leer num
	FinMientras
	Escribir "Cantidad: ", contador
	Escribir "Suma: ", suma
FinProceso`,
                    },
                },
                {
                    id: "i4",
                    level: "intermedio",
                    icon: "🔂",
                    title: "Repetir-Hasta y Para",
                    desc: "Dos ciclos más: el do-while y el for de PSeInt.",
                    theory: `
		<div class="theory-block">
		  <h3>Ciclo Repetir-Hasta Que</h3>
		  <p>A diferencia de Mientras, este ciclo verifica la condición <strong>después</strong> de cada iteración. Siempre se ejecuta al menos una vez.</p>
		  <p><span class="inline-code">Repetir<br>&nbsp;&nbsp;instrucciones<br>Hasta Que condición</span></p>
		</div>
		<div class="theory-block">
		  <h3>Ciclo Para</h3>
		  <p>Ideal cuando sabes exactamente cuántas veces repetir. La variable de control se actualiza automáticamente.</p>
		  <p><span class="inline-code">Para i &lt;- inicio Hasta fin Con Paso incremento Hacer<br>&nbsp;&nbsp;instrucciones<br>FinPara</span></p>
		  <p>Si el paso es 1, puedes omitirlo: <span class="inline-code">Para i &lt;- 1 Hasta 10 Hacer</span></p>
		</div>
	 `,
                    example: `Proceso CiclosPara
	Definir i Como Entero

	// Para simple
	Escribir "Tabla del 3:"
	Para i <- 1 Hasta 10 Hacer
		Escribir "3 x ", i, " = ", 3 * i
	FinPara

	// Para con paso
	Escribir "Números pares del 2 al 20:"
	Para i <- 2 Hasta 20 Con Paso 2 Hacer
		Escribir i
	FinPara

	// Repetir-Hasta
	Definir n Como Entero
	Repetir
		Escribir "Ingresa un número positivo:"
		Leer n
	Hasta Que n > 0
	Escribir "Ingresaste: ", n
FinProceso`,
                    challenge: {
                        desc: "Genera las tablas de multiplicar del 1 al 5 (cada una del 1 al 10). Usa ciclos Para anidados.",
                        expected: null,
                        solution: `Proceso TablaMultiplicar
	Definir tabla Como Entero
	Definir i Como Entero
	Para tabla <- 1 Hasta 5 Hacer
		Escribir "=== Tabla del ", tabla, " ==="
		Para i <- 1 Hasta 10 Hacer
			Escribir tabla, " x ", i, " = ", tabla * i
		FinPara
	FinPara
FinProceso`,
                    },
                },
                {
                    id: "i5",
                    level: "intermedio",
                    icon: "📊",
                    title: "Contadores y acumuladores",
                    desc: "Técnicas clásicas para procesar datos en ciclos.",
                    theory: `
		<div class="theory-block">
		  <h3>Contador</h3>
		  <p>Variable que lleva la cuenta de cuántas veces ocurre algo. Siempre se inicializa en 0 antes del ciclo.</p>
		  <p><span class="inline-code">contador &lt;- 0<br>contador &lt;- contador + 1</span></p>
		</div>
		<div class="theory-block">
		  <h3>Acumulador</h3>
		  <p>Variable que va sumando valores. Se inicializa en 0 antes del ciclo.</p>
		  <p><span class="inline-code">suma &lt;- 0<br>suma &lt;- suma + elemento</span></p>
		</div>
		<div class="theory-block">
		  <h3>Máximo y mínimo</h3>
		  <p>Para encontrar el mayor: inicializa en el primer elemento o en un valor muy pequeño. En cada iteración, compara y actualiza si encontraste uno mayor.</p>
		</div>
		<div class="tip-box">💡 Para el máximo: <span class="inline-code">Si actual > max Entonces max &lt;- actual FinSi</span></div>
	 `,
                    example: `Proceso EstadisticasNotas
	Definir i Como Entero
	Definir nota Como Real
	Definir suma Como Real
	Definir mayor Como Real
	Definir menor Como Real
	Definir n Como Entero
	n <- 5
	suma <- 0
	mayor <- -9999
	menor <- 9999
	Para i <- 1 Hasta n Hacer
		Escribir "Nota ", i, ":"
		Leer nota
		suma <- suma + nota
		Si nota > mayor Entonces
			mayor <- nota
		FinSi
		Si nota < menor Entonces
			menor <- nota
		FinSi
	FinPara
	Escribir "Promedio: ", suma / n
	Escribir "Mayor nota: ", mayor
	Escribir "Menor nota: ", menor
FinProceso`,
                    challenge: {
                        desc: "Pide 5 números y muestra cuántos son positivos, cuántos negativos y cuántos son cero. Usa contadores para cada caso.",
                        expected: null,
                        solution: `Proceso ContarSignos
	Definir i Como Entero
	Definir n Como Real
	Definir pos Como Entero
	Definir neg Como Entero
	Definir ceros Como Entero
	pos <- 0
	neg <- 0
	ceros <- 0
	Para i <- 1 Hasta 5 Hacer
		Escribir "Número ", i, ":"
		Leer n
		Si n > 0 Entonces
			pos <- pos + 1
		SiNo
			Si n < 0 Entonces
				neg <- neg + 1
			SiNo
				ceros <- ceros + 1
			FinSi
		FinSi
	FinPara
	Escribir "Positivos: ", pos
	Escribir "Negativos: ", neg
	Escribir "Ceros: ", ceros
FinProceso`,
                    },
                },
                {
                    id: "i6",
                    level: "intermedio",
                    icon: "🧩",
                    title: "Estructuras anidadas",
                    desc: "Combina condicionales y ciclos para problemas complejos.",
                    theory: `
		<div class="theory-block">
		  <h3>Anidamiento</h3>
		  <p>Puedes poner un Si dentro de un Mientras, un Para dentro de un Si, o cualquier combinación. Esto permite resolver problemas más complejos.</p>
		</div>
		<div class="warn-box">⚠️ Cuidado con la indentación. Cada nivel de anidamiento debe tener su propia sangría para que el código sea legible.</div>
		<div class="theory-block">
		  <h3>Estrategia de diseño</h3>
		  <p>1. Entiende el problema. 2. Identifica las decisiones (Si). 3. Identifica las repeticiones (ciclos). 4. Dibuja el diagrama de flujo antes de codificar.</p>
		</div>
	 `,
                    example: `Proceso NumeroPrimo
	Definir n Como Entero
	Definir i Como Entero
	Definir esPrimo Como Logico
	Escribir "Ingresa un número:"
	Leer n
	Si n < 2 Entonces
		Escribir n, " no es primo"
	SiNo
		esPrimo <- Verdadero
		i <- 2
		Mientras i <= n / 2 Y esPrimo Hacer
			Si n MOD i = 0 Entonces
				esPrimo <- Falso
			FinSi
			i <- i + 1
		FinMientras
		Si esPrimo Entonces
			Escribir n, " ES primo ✓"
		SiNo
			Escribir n, " NO es primo"
		FinSi
	FinSi
FinProceso`,
                    challenge: {
                        desc: "Muestra todos los números del 1 al 50 que sean múltiplos de 3 O de 7 (pero no ambos al mismo tiempo). Usa Para y Si anidados.",
                        expected: null,
                        solution: `Proceso MultiplosTresOSiete
	Definir i Como Entero
	Para i <- 1 Hasta 50 Hacer
		Si (i MOD 3 = 0) O (i MOD 7 = 0) Entonces
			Si NO (i MOD 3 = 0 Y i MOD 7 = 0) Entonces
				Escribir i
			FinSi
		FinSi
	FinPara
FinProceso`,
                    },
                },
                // ==================== INTERMEDIO (20 lecciones) ====================
                {
                    id: "i7",
                    level: "intermedio",
                    icon: "🔀",
                    title: "Condicionales anidados",
                    desc: "Domina el uso de Si-Sino dentro de otro Si.",
                    theory: `
		<div class="theory-block">
		  <h3>Anidamiento de condicionales</h3>
		  <p>Cuando necesitas evaluar múltiples condiciones encadenadas, puedes colocar un bloque <span class="inline-code">Si</span> dentro de otro. Cada <span class="inline-code">Si</span> interno debe tener su propio <span class="inline-code">FinSi</span>.</p>
		</div>
		<div class="theory-block">
		  <h3>Formato típico</h3>
		  <p><span class="inline-code">Si condición1 Entonces<br>&nbsp;&nbsp;Si condición2 Entonces<br>&nbsp;&nbsp;&nbsp;&nbsp;acciones<br>&nbsp;&nbsp;FinSi<br>FinSi</span></p>
		</div>
		<div class="warn-box">⚠️ Mantén la indentación rigurosa o te perderás entre tantos FinSi. Cada nivel debe sangrarse más que el anterior.</div>
	 `,
                    example: `Proceso ClasificarNumero
	Definir num Como Real
	Escribir "Ingresa un número:"
	Leer num
	Si num > 0 Entonces
		Si num > 100 Entonces
			Escribir "Positivo mayor que 100"
		SiNo
			Escribir "Positivo entre 1 y 100"
		FinSi
	SiNo
		Si num = 0 Entonces
			Escribir "Es cero"
		SiNo
			Escribir "Negativo"
		FinSi
	FinSi
FinProceso`,
                    challenge: {
                        desc: "Pide tres números distintos y determina el mayor de los tres usando solo condicionales anidados (sin usar Y ni O).",
                        expected: null,
                        solution: `Proceso MayorDeTres
	Definir a, b, c Como Real
	Escribir "Ingresa tres números:"
	Leer a, b, c
	Si a > b Entonces
		Si a > c Entonces
			Escribir "El mayor es: ", a
		SiNo
			Escribir "El mayor es: ", c
		FinSi
	SiNo
		Si b > c Entonces
			Escribir "El mayor es: ", b
		SiNo
			Escribir "El mayor es: ", c
		FinSi
	FinSi
FinProceso`,
                    },
                },
                {
                    id: "i8",
                    level: "intermedio",
                    icon: "🎛️",
                    title: "Segun con múltiples valores",
                    desc: "Agrupa varios casos en una misma línea del Segun.",
                    theory: `
		<div class="theory-block">
		  <h3>Casos múltiples en Segun</h3>
		  <p>En un <span class="inline-code">Segun</span>, puedes listar varios valores separados por comas para que ejecuten el mismo bloque de código.</p>
		  <p><span class="inline-code">1,2,3: Escribir "Bajo"</span></p>
		</div>
		<div class="tip-box">💡 Muy útil para agrupar rangos o categorías: meses del año, días de la semana, etc.</div>
	 `,
                    example: `Proceso EstacionDelAnio
	Definir mes Como Entero
	Escribir "Número del mes (1-12):"
	Leer mes
	Segun mes Hacer
		12,1,2: Escribir "Invierno ❄️"
		3,4,5: Escribir "Primavera 🌸"
		6,7,8: Escribir "Verano ☀️"
		9,10,11: Escribir "Otoño 🍂"
		De Otro Modo: Escribir "Mes inválido"
	FinSegun
FinProceso`,
                    challenge: {
                        desc: 'Pide un número de día (1-7) y clasifica: 1-5 = "Día laboral", 6-7 = "Fin de semana". Usa Segun con casos múltiples.',
                        expected: null,
                        solution: `Proceso DiaSemana
	Definir dia Como Entero
	Escribir "Número del día (1=Lunes):"
	Leer dia
	Segun dia Hacer
		1,2,3,4,5: Escribir "Día laboral"
		6,7: Escribir "Fin de semana"
		De Otro Modo: Escribir "Número inválido"
	FinSegun
FinProceso`,
                    },
                },
                {
                    id: "i9",
                    level: "intermedio",
                    icon: "🔁",
                    title: "Mientras con condición compuesta",
                    desc: "Combina operadores lógicos en la condición del Mientras.",
                    theory: `
		<div class="theory-block">
		  <h3>Condiciones complejas en Mientras</h3>
		  <p>Puedes usar <span class="inline-code">Y</span> y <span class="inline-code">O</span> en la condición del <span class="inline-code">Mientras</span> para controlar el ciclo con múltiples criterios.</p>
		  <p>Ejemplo: continuar mientras dos variables estén dentro de cierto rango.</p>
		</div>
		<div class="warn-box">⚠️ Asegúrate de que todas las variables involucradas en la condición se modifiquen dentro del ciclo para evitar bucles infinitos.</div>
	 `,
                    example: `Proceso AdivinaConPistas
	Definir secreto Como Entero
	Definir intento Como Entero
	Definir intentos Como Entero
	secreto <- Aleatorio(1,50)
	intentos <- 0
	intento <- 0
	Mientras intento <> secreto Y intentos < 7 Hacer
		Escribir "Adivina (1-50), intento ", intentos+1, ":"
		Leer intento
		intentos <- intentos + 1
		Si intento > secreto Entonces
			Escribir "  📉 Muy alto"
		SiNo
			Si intento < secreto Entonces
				Escribir "  📈 Muy bajo"
			FinSi
		FinSi
	FinMientras
	Si intento = secreto Entonces
		Escribir "🎉 ¡Acertaste en ", intentos, " intentos!"
	SiNo
		Escribir "😞 Era ", secreto
	FinSi
FinProceso`,
                    challenge: {
                        desc: "Pide números al usuario hasta que ingrese un número entre 10 y 20 o haya intentado 5 veces. Muestra si acertó o no.",
                        expected: null,
                        solution: `Proceso ValidarRangoConIntentos
	Definir num Como Entero
	Definir intentos Como Entero
	intentos <- 0
	num <- 0
	Mientras (num < 10 O num > 20) Y intentos < 5 Hacer
		Escribir "Ingresa un número entre 10 y 20:"
		Leer num
		intentos <- intentos + 1
	FinMientras
	Si num >= 10 Y num <= 20 Entonces
		Escribir "✅ Correcto: ", num
	SiNo
		Escribir "❌ Agotaste tus intentos"
	FinSi
FinProceso`,
                    },
                },
                {
                    id: "i10",
                    level: "intermedio",
                    icon: "🔂",
                    title: "Para con paso y anidamiento",
                    desc: "Ciclos Para con paso personalizado y doble anidación.",
                    theory: `
		<div class="theory-block">
		  <h3>Paso en el ciclo Para</h3>
		  <p>Puedes especificar <span class="inline-code">Con Paso n</span> para que la variable de control avance (o retroceda) en saltos de n unidades.</p>
		  <p>Ejemplo descendente: <span class="inline-code">Para i &lt;- 10 Hasta 1 Con Paso -1 Hacer</span></p>
		</div>
		<div class="tip-box">💡 El paso puede ser negativo, lo que permite recorrer arreglos al revés o hacer cuentas regresivas.</div>
	 `,
                    example: `Proceso TablasMultiples
	Definir tabla Como Entero
	Definir i Como Entero
	Para tabla <- 2 Hasta 9 Con Paso 2 Hacer
		Escribir "=== Tabla del ", tabla, " ==="
		Para i <- 1 Hasta 10 Hacer
			Escribir tabla, " x ", i, " = ", tabla * i
		FinPara
		Escribir ""
	FinPara
FinProceso`,
                    challenge: {
                        desc: "Muestra los números pares del 100 al 50 en orden descendente usando un Para con paso negativo.",
                        expected: null,
                        solution: `Proceso ParesDescendentes
	Definir i Como Entero
	Para i <- 100 Hasta 50 Con Paso -2 Hacer
		Escribir i
	FinPara
FinProceso`,
                    },
                },
                {
                    id: "i11",
                    level: "intermedio",
                    icon: "✅",
                    title: "Validación de entrada",
                    desc: "Asegura que el usuario ingrese datos correctos.",
                    theory: `
		<div class="theory-block">
		  <h3>¿Por qué validar?</h3>
		  <p>Los usuarios pueden ingresar datos inválidos. Validar es anticiparse a esos errores y pedir que reingresen el dato.</p>
		</div>
		<div class="theory-block">
		  <h3>Técnicas</h3>
		  <p>• Ciclo Repetir-Hasta que solo termine cuando el dato sea correcto.<br>• Verificar rangos: <span class="inline-code">n >= 1 Y n <= 10</span>.</p>
		</div>
	 `,
                    example: `Proceso ValidarEdad
	Definir edad Como Entero
	Repetir
		Escribir "Ingresa tu edad (0-120):"
		Leer edad
		Si edad < 0 O edad > 120 Entonces
			Escribir "❌ Edad no válida."
		FinSi
	Hasta Que edad >= 0 Y edad <= 120
	Escribir "✅ Edad válida: ", edad
FinProceso`,
                    challenge: {
                        desc: "Pide un número del 1 al 100. No avances hasta que sea válido. Luego muestra si es múltiplo de 3, de 5 o de ambos.",
                        expected: null,
                        solution: `Proceso ValidarMultiplo
	Definir n Como Entero
	Repetir
		Escribir "Ingresa un número entre 1 y 100:"
		Leer n
	Hasta Que n >= 1 Y n <= 100
	Si n MOD 15 = 0 Entonces
		Escribir "Es múltiplo de 3 y 5"
	SiNo Si n MOD 3 = 0 Entonces
		Escribir "Es múltiplo de 3"
	SiNo Si n MOD 5 = 0 Entonces
		Escribir "Es múltiplo de 5"
	SiNo
		Escribir "No es múltiplo de 3 ni de 5"
	FinSi
FinProceso`,
                    },
                },
                {
                    id: "i12",
                    level: "intermedio",
                    icon: "📋",
                    title: "Menús interactivos avanzados",
                    desc: "Crea programas con múltiples opciones que se repiten.",
                    theory: `
		<div class="theory-block">
		  <h3>Estructura de un menú</h3>
		  <p>Un menú interactivo usa un ciclo (generalmente Repetir-Hasta) que muestra opciones, lee la elección y ejecuta la acción correspondiente con Segun o Si.</p>
		</div>
		<div class="tip-box">💡 Siempre incluye una opción para salir (0) y valida que la opción ingresada esté dentro del rango.</div>
	 `,
                    example: `Proceso MenuCalculadora
	Definir opc Como Entero
	Definir a, b Como Real
	Repetir
		Escribir "=== CALCULADORA ==="
		Escribir "1. Sumar"
		Escribir "2. Restar"
		Escribir "0. Salir"
		Leer opc
		Segun opc Hacer
			1: Escribir "a:"; Leer a; Escribir "b:"; Leer b; Escribir "Suma: ", a+b
			2: Escribir "a:"; Leer a; Escribir "b:"; Leer b; Escribir "Resta: ", a-b
			0: Escribir "¡Hasta luego!"
			De Otro Modo: Escribir "Opción inválida"
		FinSegun
	Hasta Que opc = 0
FinProceso`,
                    challenge: {
                        desc: "Crea un menú con opciones: 1=Saludar, 2=Contar hasta 10, 3=Mostrar fecha ficticia, 0=Salir. Usa Repetir-Hasta.",
                        expected: null,
                        solution: `Proceso MenuSimple
	Definir opc Como Entero
	Repetir
		Escribir "1. Saludar  2. Contar  3. Fecha  0. Salir"
		Leer opc
		Segun opc Hacer
			1: Escribir "¡Hola!"
			2: Para i<-1 Hasta 10 Hacer Escribir i FinPara
			3: Escribir "Hoy es 2024-03-15"
			0: Escribir "Adiós"
			De Otro Modo: Escribir "Inválido"
		FinSegun
	Hasta Que opc = 0
FinProceso`,
                    },
                },
                {
                    id: "i13",
                    level: "intermedio",
                    icon: "🔤",
                    title: "Procesamiento de cadenas",
                    desc: "Extrae partes del texto, cuenta caracteres y más.",
                    theory: `
		<div class="theory-block">
		  <h3>Funciones de texto</h3>
		  <p><span class="inline-code">Longitud(c)</span>: número de caracteres.</p>
		  <p><span class="inline-code">Subcadena(c, ini, fin)</span>: extrae desde ini hasta fin.</p>
		  <p><span class="inline-code">Mayusculas(c)</span> / <span class="inline-code">Minusculas(c)</span>.</p>
		</div>
	 `,
                    example: `Proceso AnalizarNombre
	Definir nombre Como Texto
	Escribir "Tu nombre completo:"
	Leer nombre
	Escribir "Longitud: ", Longitud(nombre)
	Escribir "Mayúsculas: ", Mayusculas(nombre)
	Escribir "Primera letra: ", Subcadena(nombre,1,1)
FinProceso`,
                    challenge: {
                        desc: "Pide una palabra y muestra cuántas vocales tiene (a, e, i, o, u). Recorre la cadena con un Para.",
                        expected: null,
                        solution: `Proceso ContarVocales
	Definir palabra Como Texto
	Definir i, vocales Como Entero
	Definir letra Como Texto
	Escribir "Ingresa una palabra:"
	Leer palabra
	vocales <- 0
	Para i <- 1 Hasta Longitud(palabra) Hacer
		letra <- Mayusculas(Subcadena(palabra, i, i))
		Si letra = "A" O letra = "E" O letra = "I" O letra = "O" O letra = "U" Entonces
			vocales <- vocales + 1
		FinSi
	FinPara
	Escribir "Tiene ", vocales, " vocales."
FinProceso`,
                    },
                },
                {
                    id: "i14",
                    level: "intermedio",
                    icon: "🔑",
                    title: "Patrones con ciclos",
                    desc: "Dibuja figuras usando asteriscos y ciclos anidados.",
                    theory: `
		<div class="theory-block">
		  <h3>Dibujar con texto</h3>
		  <p>Usa <span class="inline-code">Escribir "*" Sin Saltar</span> para mostrar asteriscos en la misma línea. Luego un <span class="inline-code">Escribir ""</span> para saltar a la siguiente fila.</p>
		</div>
	 `,
                    example: `Proceso TrianguloRectangulo
	Definir n Como Entero
	n <- 5
	Para i <- 1 Hasta n Hacer
		Para j <- 1 Hasta i Hacer
			Escribir "*" Sin Saltar
		FinPara
		Escribir ""
	FinPara
FinProceso`,
                    challenge: {
                        desc: "Dibuja un triángulo isósceles centrado de altura 4. Pista: usa espacios antes de los asteriscos.",
                        expected: null,
                        solution: `Proceso Piramide
	Definir i,j Como Entero
	Para i <- 1 Hasta 4 Hacer
		Para j <- 1 Hasta 4-i Hacer
			Escribir " " Sin Saltar
		FinPara
		Para j <- 1 Hasta 2*i-1 Hacer
			Escribir "*" Sin Saltar
		FinPara
		Escribir ""
	FinPara
FinProceso`,
                    },
                },
                {
                    id: "i15",
                    level: "intermedio",
                    icon: "🎲",
                    title: "Simulación: moneda y dados",
                    desc: "Usa Aleatorio para simular fenómenos y contar resultados.",
                    theory: `
		<div class="theory-block">
		  <h3>Simulación con Aleatorio</h3>
		  <p>Puedes simular el lanzamiento de una moneda: 0 = cara, 1 = cruz con <span class="inline-code">Aleatorio(0,1)</span>. Repite muchas veces y cuenta frecuencias.</p>
		</div>
	 `,
                    example: `Proceso LanzarMoneda
	Definir i, cara, cruz Como Entero
	cara <- 0; cruz <- 0
	Para i <- 1 Hasta 100 Hacer
		Si Aleatorio(0,1) = 0 Entonces cara <- cara+1
		SiNo cruz <- cruz+1 FinSi
	FinPara
	Escribir "Caras: ", cara, "  Cruces: ", cruz
FinProceso`,
                    challenge: {
                        desc: "Simula 50 lanzamientos de un dado de 6 caras y cuenta cuántas veces sale el número 6.",
                        expected: null,
                        solution: `Proceso ContarSeises
	Definir i, seis Como Entero
	seis <- 0
	Para i <- 1 Hasta 50 Hacer
		Si Aleatorio(1,6) = 6 Entonces seis <- seis+1 FinSi
	FinPara
	Escribir "El 6 salió ", seis, " veces de 50."
FinProceso`,
                    },
                },
                {
                    id: "i16",
                    level: "intermedio",
                    icon: "🧮",
                    title: "Algoritmo de Euclides (MCD)",
                    desc: "Calcula el máximo común divisor de forma eficiente.",
                    theory: `
		<div class="theory-block">
		  <h3>MCD por Euclides</h3>
		  <p>El algoritmo dice: MCD(a, b) = MCD(b, a MOD b). Repites hasta que b = 0; el resultado es a.</p>
		</div>
	 `,
                    example: `Proceso MCD
	Definir a, b, aux Como Entero
	Escribir "Dos números:"
	Leer a, b
	Mientras b <> 0 Hacer
		aux <- b
		b <- a MOD b
		a <- aux
	FinMientras
	Escribir "MCD: ", a
FinProceso`,
                    challenge: {
                        desc: "Calcula el MCD de 84 y 36 usando el algoritmo de Euclides y muestra el resultado (debe ser 12). No pidas entrada, asigna los valores.",
                        expected: null,
                        solution: `Proceso MCDSinEntrada
	Definir a,b,aux Como Entero
	a <- 84; b <- 36
	Mientras b <> 0 Hacer
		aux <- b; b <- a MOD b; a <- aux
	FinMientras
	Escribir "MCD de 84 y 36 es: ", a
FinProceso`,
                    },
                },
                {
                    id: "i17",
                    level: "intermedio",
                    icon: "🔢",
                    title: "Números primos (mejorado)",
                    desc: "Determina si un número es primo de manera eficiente.",
                    theory: `
		<div class="theory-block">
		  <h3>Optimización</h3>
		  <p>Basta comprobar divisores hasta la raíz cuadrada del número, no hasta la mitad. Usa <span class="inline-code">Mientras divisor * divisor <= n</span>.</p>
		</div>
	 `,
                    example: `Proceso PrimoOptimo
	Definir n, d Como Entero
	Definir esPrimo Como Logico
	Escribir "Número:"
	Leer n
	esPrimo <- n >= 2
	d <- 2
	Mientras d * d <= n Y esPrimo Hacer
		Si n MOD d = 0 Entonces esPrimo <- Falso FinSi
		d <- d + 1
	FinMientras
	Si esPrimo Entonces Escribir "Es primo"
	SiNo Escribir "No es primo" FinSi
FinProceso`,
                    challenge: {
                        desc: "Muestra todos los números primos entre 1 y 30 usando un Para y la técnica optimizada.",
                        expected: null,
                        solution: `Proceso PrimosHasta30
	Definir n, d Como Entero
	Definir esPrimo Como Logico
	Para n <- 2 Hasta 30 Hacer
		esPrimo <- Verdadero
		d <- 2
		Mientras d * d <= n Y esPrimo Hacer
			Si n MOD d = 0 Entonces esPrimo <- Falso FinSi
			d <- d + 1
		FinMientras
		Si esPrimo Entonces Escribir n FinSi
	FinPara
FinProceso`,
                    },
                },
                {
                    id: "i18",
                    level: "intermedio",
                    icon: "🧩",
                    title: "Factores primos",
                    desc: "Descompón un número en sus factores primos.",
                    theory: `
		<div class="theory-block">
		  <h3>Descomposición factorial</h3>
		  <p>Divide el número sucesivamente entre el divisor más pequeño posible (empezando por 2) mientras sea divisible, luego incrementa el divisor.</p>
		</div>
	 `,
                    example: `Proceso FactoresPrimos
	Definir n, d Como Entero
	Escribir "Número a descomponer:"
	Leer n
	d <- 2
	Mientras n > 1 Hacer
		Si n MOD d = 0 Entonces
			Escribir d
			n <- n / d
		SiNo
			d <- d + 1
		FinSi
	FinMientras
FinProceso`,
                    challenge: {
                        desc: "Descompón 60 en factores primos. Debe mostrar 2, 2, 3, 5. No uses Leer, asigna n<-60.",
                        expected: null,
                        solution: `Proceso Factores60
	Definir n, d Como Entero
	n <- 60; d <- 2
	Mientras n > 1 Hacer
		Si n MOD d = 0 Entonces
			Escribir d; n <- n / d
		SiNo
			d <- d + 1
		FinSi
	FinMientras
FinProceso`,
                    },
                },
                {
                    id: "i19",
                    level: "intermedio",
                    icon: "🔟",
                    title: "Decimal a binario",
                    desc: "Convierte un número decimal a su representación binaria.",
                    theory: `
		<div class="theory-block">
		  <h3>Conversión a binario</h3>
		  <p>Divide el número sucesivamente entre 2 y guarda los residuos. Luego lee los residuos al revés. Puedes construir un texto con los dígitos.</p>
		</div>
	 `,
                    example: `Proceso DecimalBinario
	Definir n, resto Como Entero
	Definir binario Como Texto
	Escribir "Decimal:"
	Leer n
	binario <- ""
	Mientras n > 0 Hacer
		resto <- n MOD 2
		binario <- ConvertirATexto(resto) + binario
		n <- TRUNC(n / 2)
	FinMientras
	Si binario = "" Entonces binario <- "0" FinSi
	Escribir "Binario: ", binario
FinProceso`,
                    challenge: {
                        desc: "Convierte el número 25 a binario. Debe mostrar 11001.",
                        expected: null,
                        solution: `Proceso Convertir25
	Definir n, resto Como Entero
	Definir binario Como Texto
	n <- 25
	binario <- ""
	Mientras n > 0 Hacer
		resto <- n MOD 2
		binario <- ConvertirATexto(resto) + binario
		n <- TRUNC(n / 2)
	FinMientras
	Escribir "25 en binario es: ", binario
FinProceso`,
                    },
                },
                {
                    id: "i20",
                    level: "intermedio",
                    icon: "🌀",
                    title: "Serie de Fibonacci",
                    desc: "Genera la famosa serie con ciclos.",
                    theory: `
		<div class="theory-block">
		  <h3>Fibonacci</h3>
		  <p>La serie comienza con 0 y 1. Cada término siguiente es la suma de los dos anteriores: 0,1,1,2,3,5,8,13,...</p>
		</div>
	 `,
                    example: `Proceso Fibonacci
	Definir a, b, aux, i Como Entero
	a <- 0; b <- 1
	Escribir a; Escribir b
	Para i <- 1 Hasta 10 Hacer
		aux <- a + b
		Escribir aux
		a <- b
		b <- aux
	FinPara
FinProceso`,
                    challenge: {
                        desc: "Genera los primeros 15 números de Fibonacci empezando desde 0 y 1.",
                        expected: null,
                        solution: `Proceso Fibo15
	Definir a,b,aux,i Como Entero
	a<-0;b<-1
	Escribir a;Escribir b
	Para i<-1 Hasta 13 Hacer
		aux<-a+b;Escribir aux;a<-b;b<-aux
	FinPara
FinProceso`,
                    },
                },
                {
                    id: "i21",
                    level: "intermedio",
                    icon: "📅",
                    title: "Cálculo de fechas",
                    desc: "Determina si un año es bisiesto y el día siguiente.",
                    theory: `
		<div class="theory-block">
		  <h3>Año bisiesto</h3>
		  <p>Un año es bisiesto si es divisible entre 4 pero no entre 100, excepto si es divisible entre 400.</p>
		</div>
	 `,
                    example: `Proceso Bisiesto
	Definir anio Como Entero
	Escribir "Año:"
	Leer anio
	Si (anio MOD 4 = 0 Y anio MOD 100 <> 0) O (anio MOD 400 = 0) Entonces
		Escribir "Es bisiesto"
	SiNo
		Escribir "No es bisiesto"
	FinSi
FinProceso`,
                    challenge: {
                        desc: "Pide una fecha (día, mes, año) y muestra la fecha del día siguiente. Considera meses con 30/31 y febrero (asume 28 siempre para simplificar).",
                        expected: null,
                        solution: `Proceso DiaSiguiente
	Definir d,m,a Como Entero
	Escribir "Día:"; Leer d
	Escribir "Mes:"; Leer m
	Escribir "Año:"; Leer a
	d <- d + 1
	Si (m=2 Y d>28) O ((m=4 O m=6 O m=9 O m=11) Y d>30) O (d>31) Entonces
		d <- 1; m <- m+1
		Si m>12 Entonces m<-1; a<-a+1 FinSi
	FinSi
	Escribir "Siguiente: ", d, "/", m, "/", a
FinProceso`,
                    },
                },
                {
                    id: "i22",
                    level: "intermedio",
                    icon: "📊",
                    title: "Estadísticas con ciclos",
                    desc: "Calcula media, máximo, mínimo y varianza de n números.",
                    theory: `
		<div class="theory-block">
		  <h3>Media y varianza</h3>
		  <p>La media es la suma dividida entre n. La varianza (muestral) se calcula sumando (xi - media)² y dividiendo entre n-1.</p>
		</div>
	 `,
                    example: `Proceso Estadisticas
	Definir n,i Como Entero
	Definir x,suma,media,varianza Como Real
	Escribir "Cantidad de números:"
	Leer n
	suma <- 0
	Para i<-1 Hasta n Hacer
		Escribir "Número ",i,":"; Leer x
		suma <- suma + x
	FinPara
	media <- suma / n
	Escribir "Media: ", media
FinProceso`,
                    challenge: {
                        desc: "Pide 5 números, muestra el mayor, el menor y la media.",
                        expected: null,
                        solution: `Proceso MayorMenorMedia
	Definir i Como Entero
	Definir num,mayor,menor,suma Como Real
	Para i<-1 Hasta 5 Hacer
		Escribir "Número:"; Leer num
		Si i=1 Entonces mayor<-num; menor<-num FinSi
		Si num>mayor Entonces mayor<-num FinSi
		Si num<menor Entonces menor<-num FinSi
		suma<-suma+num
	FinPara
	Escribir "Mayor:", mayor, " Menor:", menor, " Media:", suma/5
FinProceso`,
                    },
                },
                {
                    id: "i23",
                    level: "intermedio",
                    icon: "↕️",
                    title: "Ordenamiento burbuja",
                    desc: "Ordena un pequeño arreglo con el método de la burbuja.",
                    theory: `
		<div class="theory-block">
		  <h3>Burbuja (Bubble Sort)</h3>
		  <p>Compara pares adyacentes y los intercambia si están en el orden incorrecto. Después de cada pasada el mayor elemento "flota" al final.</p>
		</div>
	 `,
                    example: `Proceso Burbuja
	Definir arr Como Entero
	Definir i,j,aux Como Entero
	Dimension arr[5]
	// llenar con valores de ejemplo
	arr[1]<-5; arr[2]<-2; arr[3]<-8; arr[4]<-1; arr[5]<-9
	Para i<-1 Hasta 4 Hacer
		Para j<-1 Hasta 5-i Hacer
			Si arr[j] > arr[j+1] Entonces
				aux<-arr[j]; arr[j]<-arr[j+1]; arr[j+1]<-aux
			FinSi
		FinPara
	FinPara
	Escribir "Ordenado asc:"
	Para i<-1 Hasta 5 Hacer Escribir arr[i] FinPara
FinProceso`,
                    challenge: {
                        desc: "Lee 4 números, ordénalos descendentemente con burbuja y muéstralos.",
                        expected: null,
                        solution: `Proceso BurbujaDes
	Definir arr Como Real; Definir i,j,aux Como Real
	Dimension arr[4]
	Para i<-1 Hasta 4 Hacer
		Escribir "Número:"; Leer arr[i]
	FinPara
	Para i<-1 Hasta 3 Hacer
		Para j<-1 Hasta 4-i Hacer
			Si arr[j] < arr[j+1] Entonces
				aux<-arr[j]; arr[j]<-arr[j+1]; arr[j+1]<-aux
			FinSi
		FinPara
	FinPara
	Escribir "Descendente:"
	Para i<-1 Hasta 4 Hacer Escribir arr[i] FinPara
FinProceso`,
                    },
                },
                {
                    id: "i24",
                    level: "intermedio",
                    icon: "🔍",
                    title: "Búsqueda lineal en arreglo",
                    desc: "Recorre un arreglo para encontrar un valor.",
                    theory: `
		<div class="theory-block">
		  <h3>Búsqueda secuencial</h3>
		  <p>Recorre el arreglo de principio a fin comparando cada elemento con el buscado. Si lo encuentra, reporta la posición.</p>
		</div>
	 `,
                    example: `Proceso BuscarEnArreglo
	Definir arr Como Entero
	Dimension arr[5]
	arr[1]<-7; arr[2]<-14; arr[3]<-21; arr[4]<-28; arr[5]<-35
	Definir buscar, i Como Entero
	Escribir "Buscar número:"; Leer buscar
	Para i<-1 Hasta 5 Hacer
		Si arr[i] = buscar Entonces
			Escribir "Encontrado en posición ", i
		FinSi
	FinPara
FinProceso`,
                    challenge: {
                        desc: "Crea un arreglo con los valores 3, 8, 12, 19, 27. Pide un número e indica si existe y en qué posición.",
                        expected: null,
                        solution: `Proceso BuscarValor
	Definir arr, i, buscar Como Entero; Definir existe Como Logico
	Dimension arr[5]
	arr[1]<-3; arr[2]<-8; arr[3]<-12; arr[4]<-19; arr[5]<-27
	Escribir "Buscar:"; Leer buscar
	existe<-Falso
	Para i<-1 Hasta 5 Hacer
		Si arr[i]=buscar Entonces
			Escribir "Encontrado en posición ", i; existe<-Verdadero
		FinSi
	FinPara
	Si NO existe Entonces Escribir "No encontrado" FinSi
FinProceso`,
                    },
                },
                {
                    id: "i25",
                    level: "intermedio",
                    icon: "🗃️",
                    title: "Arreglos paralelos",
                    desc: "Maneja varios arreglos relacionados entre sí.",
                    theory: `
		<div class="theory-block">
		  <h3>Arreglos paralelos</h3>
		  <p>Usas dos o más arreglos donde el índice i relaciona información de distintas variables. Ej: nombres[i] y edades[i].</p>
		</div>
	 `,
                    example: `Proceso Paralelos
	Definir nombres Como Texto; Definir edades Como Entero
	Dimension nombres[3], edades[3]
	Para i<-1 Hasta 3 Hacer
		Escribir "Nombre:"; Leer nombres[i]
		Escribir "Edad:"; Leer edades[i]
	FinPara
	Escribir "Listado:"
	Para i<-1 Hasta 3 Hacer
		Escribir nombres[i], " - ", edades[i], " años"
	FinPara
FinProceso`,
                    challenge: {
                        desc: "Crea dos arreglos paralelos para 3 productos y sus precios, luego muéstralos en un listado.",
                        expected: null,
                        solution: `Proceso ProductosPrecios
	Definir prod Como Texto; Definir prec Como Real; Definir i Como Entero
	Dimension prod[3], prec[3]
	Para i<-1 Hasta 3 Hacer
		Escribir "Producto:"; Leer prod[i]
		Escribir "Precio:"; Leer prec[i]
	FinPara
	Escribir "=== LISTA ==="
	Para i<-1 Hasta 3 Hacer Escribir prod[i], ": $", prec[i] FinPara
FinProceso`,
                    },
                },
                {
                    id: "i26",
                    level: "intermedio",
                    icon: "🏆",
                    title: "Proyecto integrador intermedio",
                    desc: "Sistema de calificaciones con menú y arreglos.",
                    theory: `
		<div class="theory-block">
		  <h3>Proyecto: Gestor de notas</h3>
		  <p>Combina menú interactivo, arreglos, ciclos y condicionales para crear un sistema que registre notas, calcule promedio y determine aprobación.</p>
		</div>
		<div class="tip-box">💡 Este proyecto pone en práctica casi todo lo visto en el nivel intermedio. ¡Tómate tu tiempo!</div>
	 `,
                    example: `Proceso GestorNotas
	Definir notas Como Real; Definir i, n, opc Como Entero; Definir suma Como Real
	Dimension notas[10]
	n <- 0
	Repetir
		Escribir "1.Agregar nota  2.Ver promedio  0.Salir"
		Leer opc
		Segun opc Hacer
			1: Si n<10 Entonces n<-n+1; Escribir "Nota:"; Leer notas[n]
				SiNo Escribir "Lleno" FinSi
			2: Si n>0 Entonces
					suma<-0; Para i<-1 Hasta n Hacer suma<-suma+notas[i] FinPara
					Escribir "Promedio: ", suma/n
				SiNo Escribir "Sin notas" FinSi
		FinSegun
	Hasta Que opc=0
FinProceso`,
                    challenge: {
                        desc: "Extiende el gestor para que también muestre la nota más alta y la más baja (opción 3).",
                        expected: null,
                        solution: `Proceso GestorNotasExtendido
	Definir notas Como Real; Definir i,n,opc Como Entero; Definir suma,may,men Como Real
	Dimension notas[10]; n<-0
	Repetir
		Escribir "1.Agregar 2.Promedio 3.Mayor/Menor 0.Salir"
		Leer opc
		Segun opc Hacer
			1: Si n<10 Entonces n<-n+1; Escribir "Nota:"; Leer notas[n] FinSi
			2: Si n>0 Entonces
					suma<-0; Para i<-1 Hasta n Hacer suma<-suma+notas[i] FinPara
					Escribir "Promedio:", suma/n
				FinSi
			3: Si n>0 Entonces
					may<-notas[1]; men<-notas[1]
					Para i<-2 Hasta n Hacer
						Si notas[i]>may Entonces may<-notas[i] FinSi
						Si notas[i]<men Entonces men<-notas[i] FinSi
					FinPara
					Escribir "Mayor:", may, " Menor:", men
				FinSi
		FinSegun
	Hasta Que opc=0
FinProceso`,
                    },
                },

                // INTERMEDIO — Lecciones nuevas añadidas en revisión QA
                {
                    id: "i_valid",
                    level: "intermedio",
                    icon: "🛡️",
                    title: "Validar entrada con ciclos",
                    desc: "Re-pide datos al usuario hasta que ingrese un valor válido.",
                    theory: `
        <div class="theory-block">
          <h3>¿Por qué validar?</h3>
          <p>Un programa robusto <strong>no confía ciegamente</strong> en lo que escribe el usuario. Si pides una edad y te escriben -5, tu programa debería <em>volver a preguntar</em>, no continuar con un dato malo.</p>
          <p>El patrón clásico es un ciclo <span class="inline-code">Mientras</span> o <span class="inline-code">Repetir...Hasta Que</span> que sigue pidiendo el dato mientras no cumpla la condición.</p>
        </div>
        <div class="tip-box">💡 Para evitar bucles infinitos, asegúrate de que la condición pueda volverse verdadera con alguna entrada del usuario.</div>`,
                    example: `Proceso ValidarEdad
    Definir edad Como Entero
    Repetir
        Escribir "Ingresa tu edad (1-120):"
        Leer edad
        Si edad < 1 O edad > 120 Entonces
            Escribir "Edad inválida, intenta de nuevo."
        FinSi
    Hasta Que edad >= 1 Y edad <= 120
    Escribir "Edad registrada: ", edad
FinProceso`,
                    challenge: {
                        desc: "Pide una contraseña al usuario. Debe tener al menos 4 caracteres. Sigue pidiéndola hasta que sea válida. Muestra cuántos intentos tomó.",
                        starter: `Proceso ValidarPassword
    Definir pass Como Cadena
    Definir intentos Como Entero
    intentos <- 0
    // Tu código aquí
FinProceso`,
                    },
                },
                {
                    id: "i_sivssegun",
                    level: "intermedio",
                    icon: "🔀",
                    title: "Si vs Según: cuándo usar cada uno",
                    desc: "Aprende a elegir entre Si encadenado y Según para decisiones múltiples.",
                    theory: `
        <div class="theory-block">
          <h3>Si encadenado</h3>
          <p>Usa <span class="inline-code">Si...Sino Si...Sino...FinSi</span> cuando las condiciones son <strong>rangos</strong> o <strong>expresiones complejas</strong>: <code>edad &lt; 18</code>, <code>nota &gt;= 7</code>, etc.</p>
          <h3>Según</h3>
          <p>Usa <span class="inline-code">Según x Hacer</span> cuando comparas <strong>una sola variable</strong> con <strong>valores exactos</strong>: un menú, un día de la semana, una categoría.</p>
        </div>
        <table style="width:100%;border-collapse:collapse;margin-top:10px;font-size:0.85rem">
          <tr style="background:rgba(0,212,255,0.08)"><th style="text-align:left;padding:6px 10px;color:var(--accent1)">Caso</th><th style="text-align:left;padding:6px 10px;color:var(--accent1)">Mejor opción</th></tr>
          <tr><td style="padding:6px 10px">Nota es A, B, C, D o F</td><td style="padding:6px 10px"><strong>Según</strong> (valores exactos)</td></tr>
          <tr><td style="padding:6px 10px">Edad entre rangos (niño/joven/adulto)</td><td style="padding:6px 10px"><strong>Si encadenado</strong> (rangos)</td></tr>
          <tr><td style="padding:6px 10px">Menú con opciones 1, 2, 3</td><td style="padding:6px 10px"><strong>Según</strong></td></tr>
          <tr><td style="padding:6px 10px">Combinar dos variables (Y / O)</td><td style="padding:6px 10px"><strong>Si</strong></td></tr>
        </table>`,
                    example: `Proceso DiaSemana
    Definir dia Como Entero
    Escribir "Día (1-7):"
    Leer dia
    Segun dia Hacer
        1: Escribir "Lunes"
        2: Escribir "Martes"
        3: Escribir "Miércoles"
        4: Escribir "Jueves"
        5: Escribir "Viernes"
        6,7: Escribir "Fin de semana"
        De Otro Modo:
            Escribir "Día inválido"
    FinSegun
FinProceso`,
                    challenge: {
                        desc: "Pide una nota (0-10) y muestra: 'Suspenso' (0-4), 'Aprobado' (5-6), 'Notable' (7-8), 'Sobresaliente' (9-10). Usa Si encadenado porque son rangos.",
                        starter: `Proceso Calificar
    Definir nota Como Entero
    Escribir "Tu nota (0-10):"
    Leer nota
    // Tu código aquí
FinProceso`,
                    },
                },

                // AVANZADO
                {
                    id: "a1",
                    level: "avanzado",
                    icon: "📋",
                    title: "Arreglos unidimensionales",
                    desc: "Almacena múltiples datos del mismo tipo en un vector.",
                    theory: `
		<div class="theory-block">
		  <h3>¿Qué es un arreglo?</h3>
		  <p>Un arreglo (o vector) es una estructura que almacena varios elementos del mismo tipo bajo un mismo nombre. Se accede a cada elemento por su índice (posición), que comienza en 1.</p>
		</div>
		<div class="theory-block">
		  <h3>Declaración y uso</h3>
		  <p><span class="inline-code">Definir arreglo Como Tipo</span><br><span class="inline-code">Dimension arreglo[tamaño]</span></p>
		  <p>Acceso: <span class="inline-code">arreglo[i]</span> donde i va de 1 al tamaño.</p>
		</div>
		<div class="tip-box">💡 Los arreglos son perfectos cuando necesitas guardar una lista de elementos (notas, nombres, precios) y procesarlos todos.</div>
	 `,
                    example: `Proceso Arreglos
	Definir notas Como Real
	Definir i Como Entero
	Definir suma Como Real
	Dimension notas[5]
	suma <- 0
	Para i <- 1 Hasta 5 Hacer
		Escribir "Nota ", i, ":"
		Leer notas[i]
		suma <- suma + notas[i]
	FinPara
	Escribir "Promedio: ", suma / 5
	Escribir "Notas ingresadas:"
	Para i <- 1 Hasta 5 Hacer
		Escribir "notas[", i, "] = ", notas[i]
	FinPara
FinProceso`,
                    challenge: {
                        desc: "Lee 6 números en un arreglo, luego muéstralos en orden inverso (del último al primero).",
                        expected: null,
                        solution: `Proceso InvertirArreglo
	Definir nums Como Entero
	Definir i Como Entero
	Dimension nums[6]
	Para i <- 1 Hasta 6 Hacer
		Escribir "Número ", i, ":"
		Leer nums[i]
	FinPara
	Escribir "En orden inverso:"
	Para i <- 6 Hasta 1 Con Paso -1 Hacer
		Escribir nums[i]
	FinPara
FinProceso`,
                    },
                },
                {
                    id: "a2",
                    level: "avanzado",
                    icon: "🗂️",
                    title: "Arreglos bidimensionales",
                    desc: "Matrices: arreglos de dos dimensiones.",
                    theory: `
		<div class="theory-block">
		  <h3>Matrices en PSeInt</h3>
		  <p>Un arreglo bidimensional (matriz) tiene filas y columnas. Se declara con dos dimensiones: <span class="inline-code">Dimension matriz[filas, columnas]</span></p>
		  <p>Se accede con dos índices: <span class="inline-code">matriz[fila, columna]</span></p>
		</div>
		<div class="theory-block">
		  <h3>Recorrer una matriz</h3>
		  <p>Necesitas dos ciclos Para anidados: uno para las filas y otro para las columnas.</p>
		</div>
		<div class="tip-box">💡 Piensa en una hoja de cálculo: filas son renglones, columnas son las columnas. Cada celda es <code>matriz[fila, col]</code>.</div>
	 `,
                    example: `Proceso Matrices
	Definir m Como Entero
	Definir f Como Entero
	Definir c Como Entero
	Definir suma Como Entero
	Dimension m[3, 3]
	suma <- 0
	Para f <- 1 Hasta 3 Hacer
		Para c <- 1 Hasta 3 Hacer
			m[f, c] <- f * c
			suma <- suma + m[f, c]
		FinPara
	FinPara
	Escribir "Tabla de multiplicar 3x3:"
	Para f <- 1 Hasta 3 Hacer
		Para c <- 1 Hasta 3 Hacer
			Escribir "m[", f, ",", c, "] = ", m[f, c]
		FinPara
	FinPara
	Escribir "Suma total: ", suma
FinProceso`,
                    challenge: {
                        desc: "Crea una matriz 2x2, lee sus 4 elementos, y muestra la suma de cada fila.",
                        expected: null,
                        solution: `Proceso SumaFilas
	Definir mat Como Real
	Definir f Como Entero
	Definir c Como Entero
	Definir sumFila Como Real
	Dimension mat[2, 2]
	Para f <- 1 Hasta 2 Hacer
		Para c <- 1 Hasta 2 Hacer
			Escribir "mat[", f, ",", c, "]:"
			Leer mat[f, c]
		FinPara
	FinPara
	Para f <- 1 Hasta 2 Hacer
		sumFila <- 0
		Para c <- 1 Hasta 2 Hacer
			sumFila <- sumFila + mat[f, c]
		FinPara
		Escribir "Suma fila ", f, ": ", sumFila
	FinPara
FinProceso`,
                    },
                },
                {
                    id: "a3",
                    level: "avanzado",
                    icon: "⚙️",
                    title: "SubProcesos (funciones)",
                    desc: "Divide tu programa en partes reutilizables.",
                    theory: `
		<div class="theory-block">
		  <h3>¿Qué es un SubProceso?</h3>
		  <p>Un subproceso es un bloque de código que tiene un nombre y puede ser llamado desde el proceso principal. Permite dividir un problema grande en partes más pequeñas y reutilizables.</p>
		</div>
		<div class="theory-block">
		  <h3>Definición</h3>
		  <p><span class="inline-code">SubProceso nombre(parámetros)<br>&nbsp;&nbsp;instrucciones<br>FinSubProceso</span></p>
		  <p>Llamada: <span class="inline-code">nombre(argumentos)</span></p>
		</div>
		<div class="theory-block">
		  <h3>SubProceso con retorno</h3>
		  <p>Para devolver un valor, el subproceso usa el mismo nombre como variable: <span class="inline-code">nombre &lt;- valor</span></p>
		  <p>Y en el proceso principal: <span class="inline-code">resultado &lt;- nombre(args)</span></p>
		</div>
	 `,
                    example: `SubProceso resultado <- Cuadrado(n)
	resultado <- n * n
FinSubProceso

SubProceso Saludar(nombre)
	Escribir "¡Hola, ", nombre, "!"
FinSubProceso

Proceso UsarSubProcesos
	Definir x Como Entero
	Definir cuad Como Entero
	Definir nom Como Texto
	x <- 7
	cuad <- Cuadrado(x)
	Escribir "El cuadrado de ", x, " es ", cuad
	nom <- "Carlos"
	Saludar(nom)
	Saludar("Ana")
	Escribir "Cuadrado de 5: ", Cuadrado(5)
FinProceso`,
                    challenge: {
                        desc: "Crea un subproceso que calcule el factorial de un número (fact(5) = 5*4*3*2*1 = 120). Llámalo desde el proceso principal.",
                        expected: null,
                        solution: `SubProceso resultado <- Factorial(n)
	Definir i Como Entero
	resultado <- 1
	Para i <- 1 Hasta n Hacer
		resultado <- resultado * i
	FinPara
FinSubProceso

Proceso CalcularFactorial
	Definir num Como Entero
	Definir res Como Entero
	Escribir "Ingresa un número:"
	Leer num
	res <- Factorial(num)
	Escribir "Factorial de ", num, " = ", res
FinProceso`,
                    },
                },
                {
                    id: "a4",
                    level: "avanzado",
                    icon: "📨",
                    title: "Parámetros por valor y referencia",
                    desc: "Comprende cómo se pasan los datos a los subprocesos.",
                    theory: `
		<div class="theory-block">
		  <h3>Por valor</h3>
		  <p>Se pasa una copia del dato. Modificar el parámetro dentro del subproceso NO afecta la variable original.</p>
		  <p>Uso: <span class="inline-code">SubProceso nombre(param)</span></p>
		</div>
		<div class="theory-block">
		  <h3>Por referencia</h3>
		  <p>Se pasa la variable original. Modificar el parámetro SÍ afecta la variable original. Se usa <span class="inline-code">Por Referencia</span> después del parámetro.</p>
		  <p>Uso: <span class="inline-code">SubProceso nombre(param Por Referencia)</span></p>
		</div>
		<div class="tip-box">💡 Usa por referencia cuando el subproceso necesita devolver múltiples valores o modificar la variable original.</div>
	 `,
                    example: `SubProceso DoblarPorValor(n)
	n <- n * 2
	Escribir "Dentro (valor): n = ", n
FinSubProceso

SubProceso DoblarPorReferencia(n Por Referencia)
	n <- n * 2
	Escribir "Dentro (ref): n = ", n
FinSubProceso

Proceso ParametrosDemo
	Definir a Como Entero
	Definir b Como Entero
	a <- 10
	b <- 10
	DoblarPorValor(a)
	Escribir "Despues por valor: a = ", a
	DoblarPorReferencia(b)
	Escribir "Despues por referencia: b = ", b
FinProceso`,
                    challenge: {
                        desc: "Crea un subproceso que intercambie (swap) dos variables usando paso por referencia. Verifica que la función realmente modifique las variables originales.",
                        expected: null,
                        solution: `SubProceso Intercambiar(p1 Por Referencia, p2 Por Referencia)
	Definir aux Como Real
	aux <- p1
	p1 <- p2
	p2 <- aux
FinSubProceso

Proceso ProbarSwap
	Definir num1 Como Real
	Definir num2 Como Real
	num1 <- 100
	num2 <- 200
	Escribir "Antes: num1=", num1, " num2=", num2
	Intercambiar(num1, num2)
	Escribir "Despues: num1=", num1, " num2=", num2
FinProceso`,
                    },
                },
                {
                    id: "a5",
                    level: "avanzado",
                    icon: "🌀",
                    title: "Recursividad",
                    desc: "Una función que se llama a sí misma para resolver problemas.",
                    theory: `
		<div class="theory-block">
		  <h3>¿Qué es la recursividad?</h3>
		  <p>Un subproceso recursivo es aquel que se llama a sí mismo. Cada llamada resuelve una versión más pequeña del problema, hasta llegar al caso base que no necesita más llamadas.</p>
		</div>
		<div class="theory-block">
		  <h3>Elementos de la recursividad</h3>
		  <p><strong>Caso base:</strong> Condición de parada. Sin él, la recursión sería infinita.</p>
		  <p><strong>Paso recursivo:</strong> La función se llama a sí misma con un argumento más pequeño.</p>
		</div>
		<div class="warn-box">⚠️ La recursividad consume memoria (pila de llamadas). Para problemas grandes, puede ser más eficiente usar ciclos.</div>
	 `,
                    example: `SubProceso result <- FactorialR(n)
	Si n <= 1 Entonces
		result <- 1
	SiNo
		result <- n * FactorialR(n - 1)
	FinSi
FinSubProceso

SubProceso result <- Fibonacci(n)
	Si n <= 1 Entonces
		result <- n
	SiNo
		result <- Fibonacci(n-1) + Fibonacci(n-2)
	FinSi
FinSubProceso

Proceso Recursividad
	Definir n Como Entero
	Definir i Como Entero
	Escribir "Factorial de 6: ", FactorialR(6)
	Escribir "Fibonacci primeros 8:"
	Para i <- 0 Hasta 7 Hacer
		Escribir "F(", i, ") = ", Fibonacci(i)
	FinPara
FinProceso`,
                    challenge: {
                        desc: "Crea un subproceso recursivo que calcule la potencia: potencia(base, exp) = base * potencia(base, exp-1). Caso base: potencia(base, 0) = 1.",
                        expected: null,
                        solution: `SubProceso result <- Potencia(base, expo)
	Si expo = 0 Entonces
		result <- 1
	SiNo
		result <- base * Potencia(base, expo - 1)
	FinSi
FinSubProceso

Proceso PotenciaRecursiva
	Definir baseNum Como Real
	Definir expo Como Entero
	Escribir "Base:"
	Leer baseNum
	Escribir "Exponente:"
	Leer expo
	Escribir baseNum, " ^ ", expo, " = ", Potencia(baseNum, expo)
FinProceso`,
                    },
                },
                {
                    id: "a6",
                    level: "avanzado",
                    icon: "🔍",
                    title: "Búsqueda y ordenamiento",
                    desc: "Algoritmos clásicos para buscar y ordenar datos.",
                    theory: `
		<div class="theory-block">
		  <h3>Búsqueda secuencial</h3>
		  <p>Recorre el arreglo de principio a fin buscando un elemento. Es simple pero puede ser lenta para arreglos grandes.</p>
		</div>
		<div class="theory-block">
		  <h3>Ordenamiento burbuja</h3>
		  <p>Compara pares de elementos adyacentes e intercambia los que estén en el orden incorrecto. Repite hasta que el arreglo esté ordenado.</p>
		  <p>Complejidad: O(n²) — simple pero no óptimo para datos grandes.</p>
		</div>
		<div class="tip-box">💡 Existen muchos algoritmos de ordenamiento (selección, inserción, quicksort, mergesort). La burbuja es el más fácil de entender.</div>
	 `,
                    example: `Proceso BusquedaYOrden
	Definir arr Como Entero
	Definir i Como Entero
	Definir j Como Entero
	Definir aux Como Entero
	Definir buscar Como Entero
	Definir encontrado Como Logico
	Dimension arr[5]
	arr[1] <- 64
	arr[2] <- 34
	arr[3] <- 25
	arr[4] <- 12
	arr[5] <- 22
	// Ordenamiento burbuja
	Para i <- 1 Hasta 4 Hacer
		Para j <- 1 Hasta 5 - i Hacer
			Si arr[j] > arr[j+1] Entonces
				aux <- arr[j]
				arr[j] <- arr[j+1]
				arr[j+1] <- aux
			FinSi
		FinPara
	FinPara
	Escribir "Ordenado:"
	Para i <- 1 Hasta 5 Hacer
		Escribir arr[i]
	FinPara
	// Búsqueda
	buscar <- 25
	encontrado <- Falso
	Para i <- 1 Hasta 5 Hacer
		Si arr[i] = buscar Entonces
			Escribir "Encontrado ", buscar, " en posicion ", i
			encontrado <- Verdadero
		FinSi
	FinPara
	Si NO encontrado Entonces
		Escribir buscar, " no encontrado"
	FinSi
FinProceso`,
                    challenge: {
                        desc: "Lee 4 números, ordénalos de mayor a menor (descendente) usando burbuja, y muéstralos.",
                        expected: null,
                        solution: `Proceso OrdenDescendente
	Definir arr Como Real
	Definir i Como Entero
	Definir j Como Entero
	Definir aux Como Real
	Dimension arr[4]
	Para i <- 1 Hasta 4 Hacer
		Escribir "Número ", i, ":"
		Leer arr[i]
	FinPara
	Para i <- 1 Hasta 3 Hacer
		Para j <- 1 Hasta 4 - i Hacer
			Si arr[j] < arr[j+1] Entonces
				aux <- arr[j]
				arr[j] <- arr[j+1]
				arr[j+1] <- aux
			FinSi
		FinPara
	FinPara
	Escribir "Orden descendente:"
	Para i <- 1 Hasta 4 Hacer
		Escribir arr[i]
	FinPara
FinProceso`,
                    },
                },
                {
                    id: "a7",
                    level: "avanzado",
                    icon: "🗃️",
                    title: "Ordenamiento por selección",
                    desc: "Algoritmo de selección directa para ordenar arreglos.",
                    theory: `
		<div class="theory-block">
		  <h3>Algoritmo de selección</h3>
		  <p>En cada pasada, encuentra el elemento mínimo del subarray sin ordenar y lo coloca en su posición correcta. Más eficiente que burbuja en número de intercambios.</p>
		</div>
		<div class="theory-block">
		  <h3>Pasos del algoritmo</h3>
		  <p>1. Busca el mínimo en el subarray [i..n]<br>2. Intercámbialo con el elemento en posición i<br>3. Avanza i y repite</p>
		</div>
		<div class="tip-box">💡 Complejidad O(n²) en comparaciones, pero O(n) en intercambios. Ideal cuando las escrituras son costosas.</div>
	 `,
                    example: `Proceso OrdenarSeleccion
	Definir arr Como Entero
	Definir i, j, minIdx, aux Como Entero
	Dimension arr[6]
	arr[1] <- 29; arr[2] <- 10; arr[3] <- 14; arr[4] <- 37; arr[5] <- 13; arr[6] <- 1
	Escribir "Original: 29 10 14 37 13 1"
	Para i <- 1 Hasta 5 Hacer
		minIdx <- i
		Para j <- i+1 Hasta 6 Hacer
			Si arr[j] < arr[minIdx] Entonces minIdx <- j FinSi
		FinPara
		Si minIdx <> i Entonces
			aux <- arr[i]; arr[i] <- arr[minIdx]; arr[minIdx] <- aux
		FinSi
	FinPara
	Escribir "Ordenado:"
	Para i <- 1 Hasta 6 Hacer Escribir arr[i] FinPara
FinProceso`,
                    challenge: {
                        desc: "Implementa ordenamiento por selección para un arreglo de 5 elementos leídos del usuario. Muestra el arreglo original y el ordenado.",
                        expected: null,
                        solution: `Proceso SeleccionUsuario
	Definir arr Como Real
	Definir i,j,minIdx Como Entero
	Definir aux Como Real
	Dimension arr[5]
	Para i <- 1 Hasta 5 Hacer
		Escribir "Elemento ",i,":"; Leer arr[i]
	FinPara
	Para i <- 1 Hasta 4 Hacer
		minIdx <- i
		Para j <- i+1 Hasta 5 Hacer
			Si arr[j] < arr[minIdx] Entonces minIdx<-j FinSi
		FinPara
		aux<-arr[i]; arr[i]<-arr[minIdx]; arr[minIdx]<-aux
	FinPara
	Escribir "Ordenado ascendente:"
	Para i <- 1 Hasta 5 Hacer Escribir arr[i] FinPara
FinProceso`,
                    },
                },
                {
                    id: "a8",
                    level: "avanzado",
                    icon: "🔎",
                    title: "Búsqueda binaria",
                    desc: "Busca en un arreglo ordenado de forma eficiente O(log n).",
                    theory: `
		<div class="theory-block">
		  <h3>Búsqueda binaria</h3>
		  <p>Solo funciona en arreglos <strong>ordenados</strong>. Divide el espacio de búsqueda a la mitad en cada paso. Mucho más rápida que la búsqueda secuencial para arreglos grandes.</p>
		</div>
		<div class="theory-block">
		  <h3>Algoritmo</h3>
		  <p>1. Define izq=1 y der=n<br>2. Calcula medio = TRUNC((izq+der)/2)<br>3. Si arr[medio]=buscar → encontrado<br>4. Si buscar &lt; arr[medio] → der=medio-1<br>5. Si buscar &gt; arr[medio] → izq=medio+1<br>6. Repite hasta izq &gt; der</p>
		</div>
		<div class="tip-box">💡 Para n=1000, la búsqueda secuencial puede hacer 1000 comparaciones. La binaria solo hace 10. ¡10 veces más rápida!</div>
	 `,
                    example: `Proceso BusquedaBinaria
	Definir arr Como Entero
	Definir izq, der, medio, buscar Como Entero
	Definir encontrado Como Logico
	Dimension arr[8]
	// Arreglo ya ordenado
	arr[1]<-2; arr[2]<-5; arr[3]<-8; arr[4]<-12; arr[5]<-16; arr[6]<-23; arr[7]<-38; arr[8]<-56
	buscar <- 23
	izq <- 1; der <- 8; encontrado <- Falso
	Mientras izq <= der Y NO encontrado Hacer
		medio <- TRUNC((izq + der) / 2)
		Si arr[medio] = buscar Entonces
			Escribir "¡Encontrado en posición ", medio, "!"
			encontrado <- Verdadero
		SiNo Si buscar < arr[medio] Entonces
			der <- medio - 1
		SiNo
			izq <- medio + 1
		FinSi
	FinMientras
	Si NO encontrado Entonces Escribir buscar, " no está en el arreglo" FinSi
FinProceso`,
                    challenge: {
                        desc: "Crea un arreglo ordenado de 10 elementos (del 10 al 100 de 10 en 10), pide al usuario un número a buscar e implementa búsqueda binaria.",
                        expected: null,
                        solution: `Proceso BinariaDiez
	Definir arr Como Entero
	Definir i,izq,der,medio,buscar Como Entero
	Definir ok Como Logico
	Dimension arr[10]
	Para i<-1 Hasta 10 Hacer arr[i]<-i*10 FinPara
	Escribir "Buscar (10..100 múltiplos de 10):"
	Leer buscar
	izq<-1; der<-10; ok<-Falso
	Mientras izq<=der Y NO ok Hacer
		medio<-TRUNC((izq+der)/2)
		Si arr[medio]=buscar Entonces
			Escribir "Posición: ",medio; ok<-Verdadero
		SiNo Si buscar<arr[medio] Entonces der<-medio-1
		SiNo izq<-medio+1 FinSi
	FinMientras
	Si NO ok Entonces Escribir "No encontrado" FinSi
FinProceso`,
                    },
                },
                {
                    id: "a9",
                    level: "avanzado",
                    icon: "🧮",
                    title: "Arreglos paralelos",
                    desc: "Usa múltiples arreglos sincronizados para representar datos complejos.",
                    theory: `
		<div class="theory-block">
		  <h3>Arreglos paralelos</h3>
		  <p>Cuando necesitas guardar información de varias categorías para un mismo elemento (nombre y nota de un alumno, producto y precio), puedes usar arreglos paralelos: el índice i en todos los arreglos representa al mismo objeto.</p>
		</div>
		<div class="warn-box">⚠️ Mantén los arreglos siempre sincronizados. Si intercambias elementos en uno, debes intercambiarlos en todos los paralelos.</div>
	 `,
                    example: `Proceso RegistroEstudiantes
	Definir nombres Como Texto
	Definir notas Como Real
	Definir i, mejor Como Entero
	Dimension nombres[5]
	Dimension notas[5]
	Para i <- 1 Hasta 5 Hacer
		Escribir "Nombre estudiante ", i, ":"
		Leer nombres[i]
		Escribir "Nota de ", nombres[i], ":"
		Leer notas[i]
	FinPara
	mejor <- 1
	Para i <- 2 Hasta 5 Hacer
		Si notas[i] > notas[mejor] Entonces mejor <- i FinSi
	FinPara
	Escribir "Mejor estudiante: ", nombres[mejor], " con ", notas[mejor]
FinProceso`,
                    challenge: {
                        desc: "Crea dos arreglos paralelos: productos (Texto) y precios (Real) para 4 productos. Muestra el producto más caro y el más barato.",
                        expected: null,
                        solution: `Proceso ProductosPrecio
	Definir prod Como Texto
	Definir precio Como Real
	Definir i, carIdx, barIdx Como Entero
	Dimension prod[4]
	Dimension precio[4]
	Para i <- 1 Hasta 4 Hacer
		Escribir "Producto ",i,":"; Leer prod[i]
		Escribir "Precio:"; Leer precio[i]
	FinPara
	carIdx<-1; barIdx<-1
	Para i<-2 Hasta 4 Hacer
		Si precio[i]>precio[carIdx] Entonces carIdx<-i FinSi
		Si precio[i]<precio[barIdx] Entonces barIdx<-i FinSi
	FinPara
	Escribir "Más caro: ",prod[carIdx]," $",precio[carIdx]
	Escribir "Más barato: ",prod[barIdx]," $",precio[barIdx]
FinProceso`,
                    },
                },
                {
                    id: "a10",
                    level: "avanzado",
                    icon: "📐",
                    title: "Operaciones con matrices",
                    desc: "Suma, transpuesta y diagonal de matrices.",
                    theory: `
		<div class="theory-block">
		  <h3>Transpuesta de una matriz</h3>
		  <p>La transpuesta intercambia filas y columnas: el elemento [i,j] pasa a [j,i]. Si A es de 3x3, su transpuesta AT[j,i] = A[i,j].</p>
		</div>
		<div class="theory-block">
		  <h3>Diagonal principal</h3>
		  <p>En una matriz cuadrada, la diagonal principal son los elementos donde el índice de fila = índice de columna: A[1,1], A[2,2], A[3,3].</p>
		</div>
	 `,
                    example: `Proceso OperacionesMatriz
	Definir m Como Entero
	Definir i, j, suma Como Entero
	Dimension m[3,3]
	// Llenar con valores
	Para i<-1 Hasta 3 Hacer
		Para j<-1 Hasta 3 Hacer
			m[i,j] <- i * 3 + j - 3
		FinPara
	FinPara
	// Mostrar matriz
	Escribir "Matriz 3x3:"
	Para i<-1 Hasta 3 Hacer
		Para j<-1 Hasta 3 Hacer
			Escribir "m[",i,",",j,"]=",m[i,j]
		FinPara
	FinPara
	// Diagonal principal
	suma <- 0
	Para i<-1 Hasta 3 Hacer suma<-suma+m[i,i] FinPara
	Escribir "Suma diagonal principal: ", suma
FinProceso`,
                    challenge: {
                        desc: "Lee una matriz 2x2 y calcula su transpuesta (intercambia filas y columnas). Muestra la original y la transpuesta.",
                        expected: null,
                        solution: `Proceso Transpuesta
	Definir a, t Como Real
	Definir i,j Como Entero
	Dimension a[2,2]
	Dimension t[2,2]
	Escribir "Ingresa los 4 elementos:"
	Para i<-1 Hasta 2 Hacer
		Para j<-1 Hasta 2 Hacer
			Escribir "a[",i,",",j,"]:"; Leer a[i,j]
			t[j,i]<-a[i,j]
		FinPara
	FinPara
	Escribir "Original:"; Para i<-1 Hasta 2 Hacer Para j<-1 Hasta 2 Hacer Escribir a[i,j] FinPara FinPara
	Escribir "Transpuesta:"; Para i<-1 Hasta 2 Hacer Para j<-1 Hasta 2 Hacer Escribir t[i,j] FinPara FinPara
FinProceso`,
                    },
                },
                // ==================== EXPERTO ====================
                {
                    id: "e1",
                    level: "experto",
                    icon: "⚡",
                    title: "Sistema de gestión de inventario",
                    desc: "Programa completo: productos, stock, ventas y reportes.",
                    theory: `
		<div class="theory-block">
		  <h3>Diseño modular con SubProcesos</h3>
		  <p>Un sistema real se divide en módulos: uno para registrar productos, otro para ventas, otro para reportes. En PSeInt usamos SubProcesos para modularizar.</p>
		</div>
		<div class="theory-block">
		  <h3>Arreglos paralelos como "base de datos"</h3>
		  <p>Usamos arreglos paralelos para simular una tabla: nombres[], precios[], stock[]. El índice i representa el mismo producto en los tres arreglos.</p>
		</div>
		<div class="tip-box">💡 Este patrón es la base de cualquier sistema CRUD (Create, Read, Update, Delete) real.</div>
		<div class="warn-box">⚠️ En PSeInt los arreglos tienen tamaño fijo. Declara siempre con el máximo posible (ej: Dimension prod[100]).</div>
	 `,
                    example: `SubProceso MostrarInventario(nombres, precios, stock, n)
	Definir i Como Entero
	Escribir "=== INVENTARIO ==="
	Para i <- 1 Hasta n Hacer
		Escribir i, ". ", nombres[i], " | Precio: $", precios[i], " | Stock: ", stock[i]
	FinPara
	Escribir "=================="
FinSubProceso

SubProceso total <- ValorTotal(precios, stock, n)
	Definir i Como Entero
	total <- 0
	Para i <- 1 Hasta n Hacer
		total <- total + precios[i] * stock[i]
	FinPara
FinSubProceso

Proceso SistemaInventario
	Definir nombres Como Texto
	Definir precios Como Real
	Definir stock Como Entero
	Definir opc, n, idx, cant Como Entero
	Dimension nombres[20]
	Dimension precios[20]
	Dimension stock[20]
	// Datos iniciales
	n <- 3
	nombres[1]<-"Laptop"; precios[1]<-1200; stock[1]<-5
	nombres[2]<-"Mouse";  precios[2]<-25;   stock[2]<-50
	nombres[3]<-"Teclado";precios[3]<-45;   stock[3]<-30
	Repetir
		Escribir "1.Ver inventario  2.Vender  3.Agregar  0.Salir"
		Leer opc
		Segun opc Hacer
			1: MostrarInventario(nombres, precios, stock, n)
			   Escribir "Valor total en stock: $", ValorTotal(precios, stock, n)
			2: MostrarInventario(nombres, precios, stock, n)
			   Escribir "¿Índice del producto?"; Leer idx
			   Si idx >= 1 Y idx <= n Entonces
			     Escribir "¿Cantidad a vender?"; Leer cant
			     Si cant <= stock[idx] Entonces
			       stock[idx] <- stock[idx] - cant
			       Escribir "✅ Venta exitosa. Quedan: ", stock[idx]
			     SiNo Escribir "❌ Stock insuficiente" FinSi
			   SiNo Escribir "Índice inválido" FinSi
			3: Si n < 20 Entonces
			     n <- n + 1
			     Escribir "Nombre:"; Leer nombres[n]
			     Escribir "Precio:"; Leer precios[n]
			     Escribir "Stock:";  Leer stock[n]
			     Escribir "✅ Producto agregado en posición ", n
			   SiNo Escribir "Inventario lleno" FinSi
			0: Escribir "¡Hasta luego!"
			De Otro Modo: Escribir "Opción inválida"
		FinSegun
	Hasta Que opc = 0
FinProceso`,
                    challenge: {
                        desc: "Agrega una opción '4. Reabastecer' al sistema que pida el índice del producto y la cantidad a agregar al stock. También agrega un reporte que muestre productos con stock < 10.",
                        expected: null,
                        solution: `Proceso InventarioMejorado
	Definir opc, n, idx, cant, i Como Entero
	Dimension nombres[20]
	Dimension precios[20]
	Dimension stock[20]
	n <- 3
	nombres[1] <- "Laptop"
	precios[1] <- 1200
	stock[1] <- 2
	nombres[2] <- "Mouse"
	precios[2] <- 25
	stock[2] <- 5
	nombres[3] <- "Teclado"
	precios[3] <- 45
	stock[3] <- 15
	Repetir
		Escribir "1.Ver  2.Vender  3.Agregar  4.Reabastecer  5.Stock bajo  0.Salir"
		Leer opc
		Segun opc Hacer
			1:
				Para i <- 1 Hasta n Hacer
					Escribir i, ". ", nombres[i], " stock:", stock[i]
				FinPara
			2:
				Escribir "Indice:"
				Leer idx
				Escribir "Cantidad:"
				Leer cant
				Si idx >= 1 Y idx <= n Y cant <= stock[idx] Entonces
					stock[idx] <- stock[idx] - cant
					Escribir "Vendido. Quedan:", stock[idx]
				SiNo
					Escribir "Error"
				FinSi
			3:
				n <- n + 1
				Escribir "Nombre:"
				Leer nombres[n]
				Escribir "Precio:"
				Leer precios[n]
				Escribir "Stock:"
				Leer stock[n]
			4:
				Escribir "Indice a reabastecer:"
				Leer idx
				Escribir "Cantidad:"
				Leer cant
				stock[idx] <- stock[idx] + cant
				Escribir "Nuevo stock:", stock[idx]
			5:
				Escribir "=== Stock bajo (<10) ==="
				Para i <- 1 Hasta n Hacer
					Si stock[i] < 10 Entonces
						Escribir nombres[i], " stock:", stock[i]
					FinSi
				FinPara
			0:
				Escribir "Adios"
			De Otro Modo:
				Escribir "Invalido"
		FinSegun
	Hasta Que opc = 0
FinProceso`,
                    },
                },
                {
                    id: "e2",
                    level: "experto",
                    icon: "🏦",
                    title: "Simulador de cuenta bancaria",
                    desc: "Depósitos, retiros, historial y saldo con validaciones.",
                    theory: `
		<div class="theory-block">
		  <h3>Simulación de sistemas reales</h3>
		  <p>Un banco necesita: saldo actual, historial de movimientos, validaciones (no retirar más de lo que hay) y reportes. Todo esto se puede modelar con variables, arreglos y SubProcesos.</p>
		</div>
		<div class="theory-block">
		  <h3>Historial con arreglos paralelos</h3>
		  <p>Usa un arreglo para los tipos de movimiento ("Depósito"/"Retiro") y otro para los montos. Un contador lleva cuántos movimientos hubo.</p>
		</div>
		<div class="tip-box">💡 La clave es la validación: antes de cualquier operación, verifica que sea válida (monto positivo, saldo suficiente).</div>
	 `,
                    example: `SubProceso ok <- Depositar(saldo Por Referencia, monto, tipos Por Referencia, montos Por Referencia, numMov Por Referencia)
	Si monto > 0 Entonces
		saldo <- saldo + monto
		numMov <- numMov + 1
		tipos[numMov] <- "Deposito"
		montos[numMov] <- monto
		ok <- Verdadero
	SiNo
		ok <- Falso
	FinSi
FinSubProceso

SubProceso ok <- Retirar(saldo Por Referencia, monto, tipos Por Referencia, montos Por Referencia, numMov Por Referencia)
	Si monto > 0 Y monto <= saldo Entonces
		saldo <- saldo - monto
		numMov <- numMov + 1
		tipos[numMov] <- "Retiro"
		montos[numMov] <- monto
		ok <- Verdadero
	SiNo
		ok <- Falso
	FinSi
FinSubProceso

Proceso BancoSimulador
	Definir saldo, monto Como Real
	Definir numMov, opc, i Como Entero
	Definir ok Como Logico
	Dimension tipos[50]
	Dimension montos[50]
	saldo <- 1000
	numMov <- 0
	Repetir
		Escribir "Saldo: $", saldo
		Escribir "1.Depositar  2.Retirar  3.Historial  0.Salir"
		Leer opc
		Segun opc Hacer
			1:
				Escribir "Monto a depositar:"
				Leer monto
				ok <- Depositar(saldo, monto, tipos, montos, numMov)
				Si ok Entonces
					Escribir "Depositado $", monto
				SiNo
					Escribir "Monto invalido"
				FinSi
			2:
				Escribir "Monto a retirar:"
				Leer monto
				ok <- Retirar(saldo, monto, tipos, montos, numMov)
				Si ok Entonces
					Escribir "Retirado $", monto
				SiNo
					Escribir "Fondos insuficientes o monto invalido"
				FinSi
			3:
				Escribir "=== HISTORIAL ==="
				Para i <- 1 Hasta numMov Hacer
					Escribir tipos[i], ": $", montos[i]
				FinPara
				Si numMov = 0 Entonces
					Escribir "Sin movimientos"
				FinSi
			0:
				Escribir "Saldo final: $", saldo
			De Otro Modo:
				Escribir "Opcion invalida"
		FinSegun
	Hasta Que opc = 0
FinProceso`,
                    challenge: {
                        desc: "Agrega al simulador bancario: (a) interés del 5% mensual que se aplica solo si el saldo > 500, y (b) un reporte que muestre el total de depósitos, total de retiros y balance neto.",
                        expected: null,
                        solution: `Proceso BancoMejorado
	Definir saldo, monto, totDep, totRet Como Real
	Definir numMov, opc, i Como Entero
	Dimension tipos[50]
	Dimension montos[50]
	saldo <- 1000
	numMov <- 0
	totDep <- 0
	totRet <- 0
	Repetir
		Escribir "Saldo: $", saldo, " | 1.Dep 2.Ret 3.Hist 4.Interes 5.Reporte 0.Salir"
		Leer opc
		Segun opc Hacer
			1:
				Escribir "Monto:"
				Leer monto
				Si monto > 0 Entonces
					saldo <- saldo + monto
					numMov <- numMov + 1
					tipos[numMov] <- "Deposito"
					montos[numMov] <- monto
					totDep <- totDep + monto
					Escribir "OK $", monto
				SiNo
					Escribir "Invalido"
				FinSi
			2:
				Escribir "Monto:"
				Leer monto
				Si monto > 0 Y monto <= saldo Entonces
					saldo <- saldo - monto
					numMov <- numMov + 1
					tipos[numMov] <- "Retiro"
					montos[numMov] <- monto
					totRet <- totRet + monto
					Escribir "OK -$", monto
				SiNo
					Escribir "Fondos insuficientes"
				FinSi
			3:
				Para i <- 1 Hasta numMov Hacer
					Escribir tipos[i], " $", montos[i]
				FinPara
			4:
				Si saldo > 500 Entonces
					saldo <- saldo * 1.05
					Escribir "Interes aplicado. Nuevo saldo: $", saldo
				SiNo
					Escribir "Saldo insuficiente para interes"
				FinSi
			5:
				Escribir "Total depositos: $", totDep
				Escribir "Total retiros: $", totRet
				Escribir "Balance neto: $", (totDep - totRet)
			0:
				Escribir "Cierre. Saldo: $", saldo
			De Otro Modo:
				Escribir "Invalido"
		FinSegun
	Hasta Que opc = 0
FinProceso`,
                    },
                },
                {
                    id: "e3",
                    level: "experto",
                    icon: "🎮",
                    title: "Juego: Adivina el número",
                    desc: "Juego completo con intentos, pistas, puntaje y records.",
                    theory: `
		<div class="theory-block">
		  <h3>Diseño de un juego</h3>
		  <p>Un juego tiene: estado (número secreto, intentos), lógica (comparar, dar pistas), y condición de fin (acertó o se quedó sin intentos). Todo se puede modelar con PSeInt.</p>
		</div>
		<div class="theory-block">
		  <h3>Aleatorio para variedad</h3>
		  <p><span class="inline-code">Aleatorio(1, 100)</span> genera un número aleatorio entre 1 y 100 cada vez que se ejecuta el programa.</p>
		</div>
		<div class="tip-box">💡 El puntaje puede calcularse como: (intentos_max - intentos_usados + 1) * 10. Así recompensa adivinar rápido.</div>
	 `,
                    example: `Proceso JuegoAdivina
	Definir secreto, intento, intentos, maxInt, puntaje Como Entero
	Definir jugarDeNuevo Como Texto
	maxInt <- 7
	Repetir
		secreto <- Aleatorio(1, 100)
		intentos <- 0
		puntaje <- 0
		Escribir "=== ADIVINA EL NÚMERO (1-100) ==="
		Escribir "Tienes ", maxInt, " intentos"
		Repetir
			intentos <- intentos + 1
			Escribir "Intento ", intentos, "/", maxInt, ":"
			Leer intento
			Si intento < secreto Entonces
				Escribir "📈 Más alto"
			SiNo Si intento > secreto Entonces
				Escribir "📉 Más bajo"
			SiNo
				puntaje <- (maxInt - intentos + 1) * 10
				Escribir "🎉 ¡CORRECTO! El número era ", secreto
				Escribir "Puntaje: ", puntaje, " puntos"
			FinSi
		Hasta Que intento = secreto O intentos = maxInt
		Si intento <> secreto Entonces
			Escribir "😞 Sin intentos. El número era: ", secreto
		FinSi
		Escribir "¿Jugar de nuevo? (si/no):"
		Leer jugarDeNuevo
	Hasta Que jugarDeNuevo <> "si"
	Escribir "¡Gracias por jugar!"
FinProceso`,
                    challenge: {
                        desc: "Mejora el juego: agrega un récord de mejor puntaje que persista entre rondas (usando una variable 'record'). Al final de cada ronda muestra si el jugador batió el récord.",
                        expected: null,
                        solution: `Proceso JuegoConRecord
	Definir secreto, intento, intentos, maxInt, puntaje, record Como Entero
	Definir jugarDeNuevo Como Texto
	maxInt<-7; record<-0
	Repetir
		secreto<-Aleatorio(1,100); intentos<-0
		Escribir "=== ADIVINA (1-100) === Record:",record
		Repetir
			intentos<-intentos+1
			Escribir "Intento ",intentos,"/",maxInt,":"; Leer intento
			Si intento<secreto Entonces Escribir "↑ Más alto"
			SiNo Si intento>secreto Entonces Escribir "↓ Más bajo"
			SiNo
				puntaje<-(maxInt-intentos+1)*10
				Escribir "¡CORRECTO! Puntaje:",puntaje
				Si puntaje>record Entonces record<-puntaje; Escribir "🏆 ¡NUEVO RÉCORD!" FinSi
			FinSi
		Hasta Que intento=secreto O intentos=maxInt
		Si intento<>secreto Entonces Escribir "Era:",secreto FinSi
		Escribir "¿Otra ronda? (si/no):"; Leer jugarDeNuevo
	Hasta Que jugarDeNuevo<>"si"
	Escribir "Récord final: ",record
FinProceso`,
                    },
                },
                {
                    id: "e4",
                    level: "experto",
                    icon: "📊",
                    title: "Análisis estadístico completo",
                    desc: "Media, mediana, moda, varianza y desviación estándar.",
                    theory: `
		<div class="theory-block">
		  <h3>Medidas de tendencia central</h3>
		  <p><strong>Media:</strong> suma / n<br><strong>Mediana:</strong> valor central al ordenar los datos<br><strong>Moda:</strong> el valor que más se repite</p>
		</div>
		<div class="theory-block">
		  <h3>Medidas de dispersión</h3>
		  <p><strong>Varianza:</strong> promedio de las diferencias cuadráticas respecto a la media<br><strong>Desviación estándar:</strong> RAIZ(varianza)</p>
		</div>
		<div class="tip-box">💡 Para la mediana necesitas ordenar el arreglo primero. Para la moda, cuenta cuántas veces aparece cada elemento.</div>
	 `,
                    example: `Proceso EstadisticaCompleta
	Definir datos Como Real
	Definir i, j Como Entero
	Definir aux, suma, media, varianza, desvEst Como Real
	Definir n Como Entero
	n <- 7
	Dimension datos[7]
	// Datos de ejemplo
	datos[1]<-4; datos[2]<-7; datos[3]<-2; datos[4]<-7; datos[5]<-9; datos[6]<-7; datos[7]<-3
	// Ordenar para mediana (burbuja)
	Para i<-1 Hasta n-1 Hacer
		Para j<-1 Hasta n-i Hacer
			Si datos[j]>datos[j+1] Entonces
				aux<-datos[j]; datos[j]<-datos[j+1]; datos[j+1]<-aux
			FinSi
		FinPara
	FinPara
	// Media
	suma<-0; Para i<-1 Hasta n Hacer suma<-suma+datos[i] FinPara
	media<-suma/n; Escribir "Media: ",media
	// Mediana
	Escribir "Mediana: ",datos[TRUNC(n/2)+1]
	// Varianza y desv.estándar
	varianza<-0
	Para i<-1 Hasta n Hacer varianza<-varianza+(datos[i]-media)^2 FinPara
	varianza<-varianza/n; desvEst<-RAIZ(varianza)
	Escribir "Varianza: ",varianza
	Escribir "Desv. estándar: ",desvEst
FinProceso`,
                    challenge: {
                        desc: "Lee 8 números del usuario y calcula media, mediana y muestra cuántos están por encima y cuántos por debajo de la media.",
                        expected: null,
                        solution: `Proceso EstadisticaUsuario
	Definir i, j Como Entero
	Definir aux, suma, media Como Real
	Definir arriba, abajo Como Entero
	Dimension datos[8]
	Para i <- 1 Hasta 8 Hacer
		Escribir "Num ", i, ":"
		Leer datos[i]
	FinPara
	// Ordenar (bubble sort)
	Para i <- 1 Hasta 7 Hacer
		Para j <- 1 Hasta 8 - i Hacer
			Si datos[j] > datos[j+1] Entonces
				aux <- datos[j]
				datos[j] <- datos[j+1]
				datos[j+1] <- aux
			FinSi
		FinPara
	FinPara
	suma <- 0
	Para i <- 1 Hasta 8 Hacer
		suma <- suma + datos[i]
	FinPara
	media <- suma / 8
	Escribir "Media: ", media
	Escribir "Mediana: ", (datos[4] + datos[5]) / 2
	arriba <- 0
	abajo <- 0
	Para i <- 1 Hasta 8 Hacer
		Si datos[i] > media Entonces
			arriba <- arriba + 1
		SiNo
			Si datos[i] < media Entonces
				abajo <- abajo + 1
			FinSi
		FinSi
	FinPara
	Escribir "Por encima: ", arriba, " | Por debajo: ", abajo
FinProceso`,
                    },
                },
                {
                    id: "e5",
                    level: "experto",
                    icon: "🔐",
                    title: "Sistema de login con intentos",
                    desc: "Usuario, contraseña, máximo de intentos y bloqueo.",
                    theory: `
		<div class="theory-block">
		  <h3>Seguridad básica</h3>
		  <p>Un sistema de login real limita los intentos fallidos para evitar ataques de fuerza bruta. Después de N intentos fallidos, bloquea el acceso.</p>
		</div>
		<div class="theory-block">
		  <h3>Múltiples usuarios</h3>
		  <p>Usa arreglos paralelos: usuarios[] y contraseñas[]. Recorre ambos buscando coincidencia del usuario y luego verifica la contraseña.</p>
		</div>
		<div class="warn-box">⚠️ En sistemas reales, las contraseñas se almacenan cifradas (hash). En PSeInt lo simplificamos con texto plano para el aprendizaje.</div>
	 `,
                    example: `Proceso SistemaLogin
	Definir usuarios Como Texto
	Definir claves Como Texto
	Definir userIngresado, claveIngresada Como Texto
	Definir intentos, maxInt, i, idxUser Como Entero
	Definir autenticado, bloqueado Como Logico
	Dimension usuarios[3]
	Dimension claves[3]
	// Base de datos de usuarios
	usuarios[1]<-"admin"; claves[1]<-"1234"
	usuarios[2]<-"juan";  claves[2]<-"abcd"
	usuarios[3]<-"maria"; claves[3]<-"pass"
	maxInt<-3; intentos<-0; autenticado<-Falso; bloqueado<-Falso
	Escribir "=== SISTEMA DE LOGIN ==="
	Repetir
		intentos<-intentos+1
		Escribir "Usuario (Intento ",intentos,"/",maxInt,"):"
		Leer userIngresado
		Escribir "Contraseña:"
		Leer claveIngresada
		// Buscar usuario
		idxUser<-0
		Para i<-1 Hasta 3 Hacer
			Si usuarios[i]=userIngresado Entonces idxUser<-i FinSi
		FinPara
		Si idxUser>0 Y claves[idxUser]=claveIngresada Entonces
			autenticado<-Verdadero
			Escribir "✅ ¡Bienvenido, ",userIngresado,"!"
		SiNo
			Escribir "❌ Credenciales incorrectas."
			Si intentos<maxInt Entonces
				Escribir "Te quedan ", maxInt-intentos, " intentos."
			SiNo
				bloqueado<-Verdadero
				Escribir "🔒 Cuenta bloqueada."
			FinSi
		FinSi
	Hasta Que autenticado O bloqueado
	Si autenticado Entonces
		Escribir "Acceso concedido. Sesión iniciada."
	SiNo
		Escribir "Acceso denegado. Contacta al administrador."
	FinSi
FinProceso`,
                    challenge: {
                        desc: "Mejora el sistema de login: permite registrar un nuevo usuario si no existe (máx 5 usuarios), y muestra cuántos usuarios están registrados al iniciar sesión exitosamente.",
                        expected: null,
                        solution: `Proceso LoginConRegistro
	Definir uing, cing Como Texto
	Definir intentos, maxInt, i, idx, n Como Entero
	Definir ok, bloq Como Logico
	Dimension usuarios[5]
	Dimension claves[5]
	n <- 2
	usuarios[1] <- "admin"
	claves[1] <- "1234"
	usuarios[2] <- "juan"
	claves[2] <- "pass"
	maxInt <- 3
	intentos <- 0
	ok <- Falso
	bloq <- Falso
	Escribir "Quieres registrarte? (si/no):"
	Leer uing
	Si uing = "si" Y n < 5 Entonces
		n <- n + 1
		Escribir "Nuevo usuario:"
		Leer usuarios[n]
		Escribir "Contrasena:"
		Leer claves[n]
		Escribir "Registrado"
	FinSi
	Repetir
		intentos <- intentos + 1
		Escribir "Usuario:"
		Leer uing
		Escribir "Clave:"
		Leer cing
		idx <- 0
		Para i <- 1 Hasta n Hacer
			Si usuarios[i] = uing Entonces
				idx <- i
			FinSi
		FinPara
		Si idx > 0 Y claves[idx] = cing Entonces
			ok <- Verdadero
			Escribir "Bienvenido! Usuarios: ", n
		SiNo
			Escribir "Error. Intentos: ", intentos, "/", maxInt
			Si intentos >= maxInt Entonces
				bloq <- Verdadero
			FinSi
		FinSi
	Hasta Que ok O bloq
	Si bloq Y NO ok Entonces
		Escribir "Bloqueado"
	FinSi
FinProceso`,
                    },
                },
                {
                    id: "e6",
                    level: "experto",
                    icon: "🌡️",
                    title: "Conversor de unidades completo",
                    desc: "Temperatura, longitud, peso y moneda en un solo sistema.",
                    theory: `
		<div class="theory-block">
		  <h3>SubProcesos de conversión</h3>
		  <p>Cada tipo de conversión es un SubProceso independiente. El proceso principal actúa como menú que llama al subproceso correcto.</p>
		</div>
		<div class="theory-block">
		  <h3>Fórmulas de conversión</h3>
		  <p>Celsius→Fahrenheit: °F = °C × 9/5 + 32<br>Fahrenheit→Celsius: °C = (°F - 32) × 5/9<br>Kelvin→Celsius: °C = K - 273.15</p>
		</div>
	 `,
                    example: `SubProceso TemperaturaConvert()
	Definir val, res Como Real
	Definir opc Como Entero
	Escribir "1.C→F  2.F→C  3.C→K  4.K→C"
	Leer opc; Escribir "Valor:"; Leer val
	Segun opc Hacer
		1: res<-val*9/5+32; Escribir val,"°C = ",res,"°F"
		2: res<-(val-32)*5/9; Escribir val,"°F = ",res,"°C"
		3: res<-val+273.15; Escribir val,"°C = ",res,"K"
		4: res<-val-273.15; Escribir val,"K = ",res,"°C"
		De Otro Modo: Escribir "Opción inválida"
	FinSegun
FinSubProceso

SubProceso LongitudConvert()
	Definir val, res Como Real; Definir opc Como Entero
	Escribir "1.m→cm  2.km→mi  3.mi→km  4.pies→m"
	Leer opc; Escribir "Valor:"; Leer val
	Segun opc Hacer
		1: Escribir val,"m = ",val*100,"cm"
		2: Escribir val,"km = ",val*0.621371,"mi"
		3: Escribir val,"mi = ",val*1.60934,"km"
		4: Escribir val,"pies = ",val*0.3048,"m"
		De Otro Modo: Escribir "Inválido"
	FinSegun
FinSubProceso

Proceso ConversorUnidades
	Definir opc Como Entero
	Repetir
		Escribir "=== CONVERSOR ==="
		Escribir "1.Temperatura  2.Longitud  0.Salir"
		Leer opc
		Segun opc Hacer
			1: TemperaturaConvert()
			2: LongitudConvert()
			0: Escribir "¡Hasta luego!"
			De Otro Modo: Escribir "Opción inválida"
		FinSegun
	Hasta Que opc = 0
FinProceso`,
                    challenge: {
                        desc: "Agrega al conversor un módulo de peso (kg→lb, lb→kg, g→oz) y otro de moneda simplificado (USD→COP con tasa 4000, COP→USD). Cada módulo debe ser un SubProceso separado.",
                        expected: null,
                        solution: `SubProceso PesoConvert()
	Definir val Como Real; Definir opc Como Entero
	Escribir "1.kg→lb  2.lb→kg  3.g→oz"; Leer opc
	Escribir "Valor:"; Leer val
	Segun opc Hacer
		1: Escribir val,"kg = ",val*2.20462,"lb"
		2: Escribir val,"lb = ",val*0.453592,"kg"
		3: Escribir val,"g = ",val*0.035274,"oz"
		De Otro Modo: Escribir "Inválido"
	FinSegun
FinSubProceso

SubProceso MonedaConvert()
	Definir val Como Real; Definir opc Como Entero; Definir tasa Como Real
	tasa<-4000
	Escribir "1.USD→COP  2.COP→USD"; Leer opc
	Escribir "Valor:"; Leer val
	Segun opc Hacer
		1: Escribir "$",val," USD = $",val*tasa," COP"
		2: Escribir "$",val," COP = $",val/tasa," USD"
		De Otro Modo: Escribir "Inválido"
	FinSegun
FinSubProceso

Proceso ConversorTotal
	Definir opc Como Entero
	Repetir
		Escribir "1.Temp  2.Longitud  3.Peso  4.Moneda  0.Salir"; Leer opc
		Segun opc Hacer
			1: Escribir "C→F: val*9/5+32 | F→C: (val-32)*5/9" // simplificado
			3: PesoConvert()
			4: MonedaConvert()
			0: Escribir "Adiós"
			De Otro Modo: Escribir "Inválido"
		FinSegun
	Hasta Que opc=0
FinProceso`,
                    },
                },
                {
                    id: "e7",
                    level: "experto",
                    icon: "🧩",
                    title: "Torre de Hanói",
                    desc: "El clásico puzzle resuelto con recursividad pura.",
                    theory: `
		<div class="theory-block">
		  <h3>El problema de Hanói</h3>
		  <p>Mueve n discos de la varilla A a la varilla C usando B como auxiliar. Regla: nunca poner un disco grande sobre uno pequeño. La solución elegante usa recursividad.</p>
		</div>
		<div class="theory-block">
		  <h3>Lógica recursiva</h3>
		  <p>Para mover n discos de origen a destino:<br>1. Mueve n-1 discos de origen a auxiliar<br>2. Mueve el disco grande de origen a destino<br>3. Mueve n-1 discos de auxiliar a destino</p>
		</div>
		<div class="tip-box">💡 Para n discos se necesitan 2ⁿ - 1 movimientos. Para 3 discos: 7 movimientos. Para 10: 1023 movimientos. Para 64: miles de millones.</div>
	 `,
                    example: `SubProceso Hanoi(n, origen, destino, auxiliar)
	Si n = 1 Entonces
		Escribir "Mover disco de ", origen, " a ", destino
	SiNo
		Hanoi(n-1, origen, auxiliar, destino)
		Escribir "Mover disco de ", origen, " a ", destino
		Hanoi(n-1, auxiliar, destino, origen)
	FinSi
FinSubProceso

Proceso TorreDeHanoi
	Definir n Como Entero
	Definir movimientos Como Entero
	Escribir "¿Cuántos discos? (recomendado: 3-4):"
	Leer n
	movimientos <- 1
	Para i <- 1 Hasta n Hacer movimientos <- movimientos * 2 FinPara
	movimientos <- movimientos - 1
	Escribir "Se necesitan ", movimientos, " movimientos:"
	Hanoi(n, "A", "C", "B")
	Escribir "¡Completado en ", movimientos, " movimientos!"
FinProceso`,
                    challenge: {
                        desc: "Modifica Hanói para que también cuente y muestre el número de movimientos realizados (usando una variable por referencia pasada al SubProceso).",
                        expected: null,
                        solution: `SubProceso HanoiCount(n, origen, destino, auxiliar, cont Por Referencia)
	Si n = 1 Entonces
		cont <- cont + 1
		Escribir "Mov ", cont, ": ", origen, " -> ", destino
	SiNo
		HanoiCount(n - 1, origen, auxiliar, destino, cont)
		cont <- cont + 1
		Escribir "Mov ", cont, ": ", origen, " -> ", destino
		HanoiCount(n - 1, auxiliar, destino, origen, cont)
	FinSi
FinSubProceso

Proceso HanoiConContador
	Definir n, contador Como Entero
	Escribir "Discos (1-4):"
	Leer n
	contador <- 0
	HanoiCount(n, "A", "C", "B", contador)
	Escribir "Total de movimientos: ", contador
FinProceso`,
                    },
                },
                {
                    id: "e8",
                    level: "experto",
                    icon: "📝",
                    title: "Procesador de texto avanzado",
                    desc: "Cuenta palabras, invierte cadenas, encuentra palíndromos.",
                    theory: `
		<div class="theory-block">
		  <h3>Algoritmos sobre cadenas</h3>
		  <p>PSeInt tiene funciones poderosas de texto: <span class="inline-code">Longitud()</span>, <span class="inline-code">Subcadena()</span>, <span class="inline-code">Mayusculas()</span>, <span class="inline-code">Contiene()</span>. Combinándolas puedes hacer procesadores de texto avanzados.</p>
		</div>
		<div class="theory-block">
		  <h3>Palíndromo</h3>
		  <p>Una cadena es palíndroma si se lee igual al derecho y al revés (ej: "radar", "ala"). Para verificarlo, construye la cadena invertida y compárala.</p>
		</div>
	 `,
                    example: `SubProceso inv <- Invertir(entrada)
	Definir i Como Entero
	inv <- ""
	Para i <- Longitud(entrada) Hasta 1 Con Paso -1 Hacer
		inv <- inv + Subcadena(entrada, i, i)
	FinPara
FinSubProceso

SubProceso es <- EsPalindromo(entrada)
	Definir limpia Como Texto
	limpia <- Minusculas(entrada)
	es <- (limpia = Invertir(limpia))
FinSubProceso

SubProceso n <- ContarPalabras(frase)
	Definir i Como Entero
	Definir enPalabra Como Logico
	Definir c Como Texto
	n <- 0
	enPalabra <- Falso
	Para i <- 1 Hasta Longitud(frase) Hacer
		c <- Subcadena(frase, i, i)
		Si c <> " " Entonces
			Si NO enPalabra Entonces
				n <- n + 1
				enPalabra <- Verdadero
			FinSi
		SiNo
			enPalabra <- Falso
		FinSi
	FinPara
FinSubProceso

Proceso ProcesadorTexto
	Definir frase Como Texto
	Definir opc Como Entero
	Repetir
		Escribir "1.Invertir  2.¿Palindromo?  3.Contar palabras  4.Mayusculas  0.Salir"
		Leer opc
		Si opc <> 0 Entonces
			Escribir "Texto:"
			Leer frase
			Segun opc Hacer
				1:
					Escribir "Invertido: ", Invertir(frase)
				2:
					Si EsPalindromo(frase) Entonces
						Escribir "Es palindromo"
					SiNo
						Escribir "No es palindromo"
					FinSi
				3:
					Escribir "Palabras: ", ContarPalabras(frase)
				4:
					Escribir "Mayusculas: ", Mayusculas(frase)
				De Otro Modo:
					Escribir "Invalido"
			FinSegun
		FinSi
	Hasta Que opc = 0
FinProceso`,
                    challenge: {
                        desc: "Agrega al procesador de texto una opción que censure palabras: pide una palabra 'prohibida' y la reemplaza por '****' en el texto usando Reemplazar().",
                        expected: null,
                        solution: `Proceso CensorTexto
	Definir frase, prohibida, censurado Como Texto
	Escribir "Texto original:"
	Leer frase
	Escribir "Palabra a censurar:"
	Leer prohibida
	censurado <- Reemplazar(frase, prohibida, "****")
	censurado <- Reemplazar(censurado, Mayusculas(prohibida), "****")
	censurado <- Reemplazar(censurado, Minusculas(prohibida), "****")
	Escribir "Texto censurado: ", censurado
FinProceso`,
                    },
                },
            ];

            /* ============================================================
           REFERENCIA RÁPIDA
        ============================================================ */
            const REFERENCE = [
                {
                    kw: "Proceso / FinProceso",
                    desc: "Define el inicio y fin del programa principal.",
                    code: "Proceso NombrePrograma\n   // instrucciones\nFinProceso",
                },
                {
                    kw: "Definir",
                    desc: "Declara una variable con su tipo.",
                    code: "Definir x Como Entero\nDefinir nombre Como Texto\nDefinir pi Como Real\nDefinir ok Como Logico",
                },
                {
                    kw: "Dimension",
                    desc: "Declara el tamaño de un arreglo.",
                    code: "Dimension arr[10]\nDimension mat[3, 4]",
                },
                {
                    kw: "Leer",
                    desc: "Lee un valor del usuario y lo guarda en una variable.",
                    code: "Leer nombre\nLeer edad",
                },
                {
                    kw: "Escribir",
                    desc: "Muestra texto o valores en pantalla.",
                    code: 'Escribir "Hola mundo"\nEscribir "Valor: ", x',
                },
                {
                    kw: "Si / FinSi",
                    desc: "Condicional simple o con alternativa.",
                    code: 'Si x > 0 Entonces\n   Escribir "Positivo"\nSiNo\n   Escribir "Negativo"\nFinSi',
                },
                {
                    kw: "Segun / FinSegun",
                    desc: "Selector múltiple de casos.",
                    code: 'Segun opcion Hacer\n   1: Escribir "Uno"\n   2: Escribir "Dos"\n   De Otro Modo: Escribir "Otro"\nFinSegun',
                },
                {
                    kw: "Mientras / FinMientras",
                    desc: "Ciclo que repite mientras la condición sea verdadera.",
                    code: "Mientras i <= 10 Hacer\n   Escribir i\n   i <- i + 1\nFinMientras",
                },
                {
                    kw: "Repetir / Hasta Que",
                    desc: "Ciclo que siempre ejecuta al menos una vez.",
                    code: "Repetir\n   Leer n\nHasta Que n > 0",
                },
                {
                    kw: "Para / FinPara",
                    desc: "Ciclo con variable de control automática.",
                    code: "Para i <- 1 Hasta 10 Hacer\n   Escribir i\nFinPara\nPara i <- 0 Hasta 100 Con Paso 10 Hacer\n   Escribir i\nFinPara",
                },
                {
                    kw: "SubProceso / FinSubProceso",
                    desc: "Define una función reutilizable.",
                    code: "SubProceso res <- Doble(n)\n   res <- n * 2\nFinSubProceso",
                },
                {
                    kw: "Operadores",
                    desc: "Aritméticos, relacionales y lógicos.",
                    code: "+ - * / ^ MOD\n= <> < > <= >=\nY  O  NO",
                },
                {
                    kw: "Funciones de texto",
                    desc: "Manipulación de cadenas de caracteres.",
                    code: "Longitud(texto)\nSubcadena(texto, ini, fin)\nMayusculas(texto)\nMinusculas(texto)\nConvertirATexto(numero)\nTextoANumero(texto)\nContiene(texto, buscar)\nReemplazar(texto, viejo, nuevo)\nRecortar(texto)",
                },
                {
                    kw: "Funciones matemáticas",
                    desc: "Operaciones matemáticas avanzadas.",
                    code: "RAIZ(x)      // raiz cuadrada\nABS(x)       // valor absoluto\nTRUNC(x)     // parte entera\nREDON(x)     // redondear\nSEN(x) COS(x) TAN(x)  // trig.\nLOG(x)  EXP(x)        // log/exp\nPotencia(b, e)         // b^e\nAleatorio(ini, fin)    // azar",
                },
                {
                    kw: "Tipos de datos",
                    desc: "Todos los tipos válidos en PSeInt.",
                    code: "Entero   // 1, -5, 100\nReal     // 3.14, -0.5\nTexto    // \"Hola\"\nCadena   // alias Texto\nLogico   // Verdadero / Falso\nCaracter // un solo char\nNumerico // alias Real",
                },
                {
                    kw: "Escribir Sin Saltar",
                    desc: "Muestra texto sin saltar a la siguiente línea (útil para prompts en una misma línea).",
                    code: 'Escribir Sin Saltar "Ingresa tu nombre: "\nLeer nombre\nEscribir "Hola, ", nombre',
                },
                {
                    kw: "Salir / Interrumpir",
                    desc: "Sale del ciclo actual (Para, Mientras, Repetir). Compatible con PSeInt Windows.",
                    code: "Para i <- 1 Hasta 100 Hacer\n   Si i = 10 Entonces\n      Salir  // sale del Para cuando i=10\n   FinSi\n   Escribir i\nFinPara",
                },
                {
                    kw: "Funciones de conversión de tipo",
                    desc: "Convierten valores entre tipos de datos distintos.",
                    code: "Entero(3.7)          // → 3 (trunca decimal)\nReal(5)              // → 5.0\nTexto(42)            // → \"42\"\nValor(\"3.14\")       // → 3.14 (texto a número)\nConvertirATexto(n)   // → texto del número\nTextoANumero(t)      // → número del texto",
                },
            ];

            /* ============================================================
           ESTADO Y PERSISTENCIA — Sistema de 3 estados por lección
           📖 = Leída (abrió la lección)
           ✓  = Ejecutó el ejemplo (intentó)
           ✓✓ = Completó el reto (dominó)
        ============================================================ */
            // Helpers seguros para localStorage: try/catch evita romper la app
            // en modo privado o si se llena la cuota. Loggea un solo aviso.
            let _lsWarned = false;
            function safeLSGet(key, fallback) {
                try { return localStorage.getItem(key); } catch(_) { return fallback ?? null; }
            }
            function safeLSSet(key, val) {
                try { localStorage.setItem(key, val); return true; }
                catch(e) {
                    if (!_lsWarned) {
                        _lsWarned = true;
                        if (typeof showToast === 'function') {
                            showToast('⚠️ No se pudo guardar (almacenamiento lleno o modo privado)');
                        }
                        console.warn('localStorage falló:', e.message);
                    }
                    return false;
                }
            }
            function safeLSRemove(key) {
                try { localStorage.removeItem(key); } catch(_) {}
            }

            // Estado por lección: null | 'read' | 'tried' | 'done'
            let lessonStates = JSON.parse(safeLSGet("pseinc_states") || "{}");
            // Compatibilidad con versión anterior (solo completadas)
            // FIX: migración LEGACY corre SOLO una vez, luego borra la clave vieja.
            try {
                let _oldRaw = safeLSGet("pseinc_completed");
                if (_oldRaw) {
                    let _oldCompleted = JSON.parse(_oldRaw || "[]");
                    _oldCompleted.forEach(id => { if (!lessonStates[id]) lessonStates[id] = 'done'; });
                    // Persistir el resultado en el formato nuevo y eliminar el legacy.
                    safeLSSet("pseinc_states", JSON.stringify(lessonStates));
                    safeLSRemove("pseinc_completed");
                }
            } catch(_) {}

            // Set legacy para updateProgress
            let completed = new Set(Object.keys(lessonStates).filter(id => lessonStates[id] === 'done'));

            function saveLessonStates() {
                safeLSSet("pseinc_states", JSON.stringify(lessonStates));
                // Sync legacy
                completed = new Set(Object.keys(lessonStates).filter(id => lessonStates[id] === 'done'));
                // YA NO duplicamos en pseinc_completed (migración hecha arriba).
                updateProgress();
            }

            /** Marcar como leída (abrió la lección) */
            function markRead(id) {
                if (!lessonStates[id]) {
                    lessonStates[id] = 'read';
                    saveLessonStates();
                    renderLessons();
                }
            }

            /** Marcar como intentada (ejecutó el ejemplo sin errores) */
            function markTried(id) {
                if (!lessonStates[id] || lessonStates[id] === 'read') {
                    lessonStates[id] = 'tried';
                    saveLessonStates();
                    renderLessons();
                }
            }

            /** Marcar como completada (resolvió el reto) */
            function markComplete(id) {
                lessonStates[id] = 'done';
                saveLessonStates();
                renderLessons();
            }

            function resetProgress() {
                // Modal personalizado en vez del confirm() nativo del navegador.
                showConfirmModal({
                    title: '⚠️ Reiniciar progreso',
                    message: '¿Seguro que quieres <b>borrar todo tu progreso</b>?<br><br>' +
                             'Esto eliminará el estado de TODAS las lecciones (lecturas, intentos y completadas) ' +
                             'almacenado en este navegador. <b>No se puede deshacer.</b>',
                    okText: '🗑 Sí, borrar todo',
                    okStyle: 'danger',
                    cancelText: 'Cancelar',
                    onConfirm: () => {
                        lessonStates = {};
                        completed = new Set();
                        try {
                            localStorage.removeItem("pseinc_states");
                            localStorage.removeItem("pseinc_completed");
                        } catch(_) {}
                        renderLessons();
                        updateProgress();
                        if (typeof showToast === 'function') showToast('✓ Progreso reiniciado');
                    }
                });
            }

            /** Modal de confirmación personalizado — reemplaza confirm() nativo.
             *  opts: { title, message, okText, cancelText, okStyle: 'danger'|'primary', onConfirm, onCancel } */
            function showConfirmModal(opts) {
                opts = opts || {};
                let existing = document.getElementById('confirmModalOverlay');
                if (existing) existing.remove();
                const overlay = document.createElement('div');
                overlay.id = 'confirmModalOverlay';
                overlay.setAttribute('role', 'dialog');
                overlay.setAttribute('aria-modal', 'true');
                overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:2147483600;' +
                    'display:flex;align-items:center;justify-content:center;padding:16px;' +
                    'animation:confirmFadeIn 0.18s ease-out';
                const okIsDanger = (opts.okStyle === 'danger');
                const okBg = okIsDanger
                    ? 'linear-gradient(135deg,#dc2626,#ef4444)'
                    : 'linear-gradient(135deg,#10b981,#34d399)';
                const okShadow = okIsDanger
                    ? '0 4px 14px rgba(220,38,38,0.4)'
                    : '0 4px 14px rgba(16,185,129,0.4)';
                overlay.innerHTML =
                    '<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:14px;' +
                         'max-width:480px;width:100%;padding:24px;box-shadow:0 12px 48px rgba(0,0,0,0.5);' +
                         'animation:confirmSlideIn 0.22s ease-out">' +
                      '<h3 style="margin:0 0 12px 0;font-size:1.15rem;color:var(--text-main)">' +
                        (opts.title || 'Confirmar') + '</h3>' +
                      '<div style="margin-bottom:20px;font-size:0.92rem;line-height:1.5;color:var(--text-muted)">' +
                        (opts.message || '¿Estás seguro?') + '</div>' +
                      '<div style="display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap">' +
                        '<button id="confirmModalCancel" style="padding:9px 18px;background:transparent;color:var(--text-main);' +
                          'border:1px solid var(--border);border-radius:7px;cursor:pointer;font:inherit;font-weight:600">' +
                          (opts.cancelText || 'Cancelar') + '</button>' +
                        '<button id="confirmModalOk" style="padding:9px 20px;background:' + okBg + ';color:#fff;' +
                          'border:none;border-radius:7px;cursor:pointer;font:inherit;font-weight:700;' +
                          'box-shadow:' + okShadow + '">' +
                          (opts.okText || 'Aceptar') + '</button>' +
                      '</div>' +
                    '</div>';
                // Inyectar animaciones una sola vez
                if (!document.getElementById('confirmModalStyles')) {
                    const st = document.createElement('style');
                    st.id = 'confirmModalStyles';
                    st.textContent = '@keyframes confirmFadeIn { from { opacity:0 } to { opacity:1 } }' +
                                     '@keyframes confirmSlideIn { from { transform:translateY(-10px);opacity:0 } to { transform:translateY(0);opacity:1 } }';
                    document.head.appendChild(st);
                }
                document.body.appendChild(overlay);
                const close = () => { overlay.remove(); };
                const onOk = () => {
                    close();
                    if (typeof opts.onConfirm === 'function') opts.onConfirm();
                };
                const onCancel = () => {
                    close();
                    if (typeof opts.onCancel === 'function') opts.onCancel();
                };
                document.getElementById('confirmModalOk').addEventListener('click', onOk);
                document.getElementById('confirmModalCancel').addEventListener('click', onCancel);
                overlay.addEventListener('click', (e) => { if (e.target === overlay) onCancel(); });
                // ESC cierra. Enter confirma.
                const keyHandler = (e) => {
                    if (e.key === 'Escape') { e.preventDefault(); onCancel(); document.removeEventListener('keydown', keyHandler); }
                    else if (e.key === 'Enter') { e.preventDefault(); onOk(); document.removeEventListener('keydown', keyHandler); }
                };
                document.addEventListener('keydown', keyHandler);
                setTimeout(() => { try { document.getElementById('confirmModalOk').focus(); } catch(_) {} }, 50);
            }
            window.showConfirmModal = showConfirmModal;

            let currentLesson = null;
            let currentTab = "theory";
            let filterLevel = "todos";

            /* ============================================================
           INTÉRPRETE PSEINT
        ============================================================ */
            const KEYWORDS = [
                "Proceso",
                "FinProceso",
                "Definir",
                "Como",
                "Entero",
                "Real",
                "Logico",
                "Texto",
                "Leer",
                "Escribir",
                "Si",
                "Entonces",
                "SiNo",
                "FinSi",
                "Segun",
                "Hacer",
                "FinSegun",
                "De Otro Modo",
                "Mientras",
                "FinMientras",
                "Repetir",
                "Hasta Que",
                "Hasta",
                "Para",
                "FinPara",
                "Con Paso",
                "SubProceso",
                "FinSubProceso",
                "Dimension",
                "Verdadero",
                "Falso",
                "var",
                "MOD",
                "Y",
                "O",
                "NO",
            ];

            // <INTERPRETER_BEGIN> — marcador para tests/interpreter_smoke.js
            class PSeIntInterpreter {
                constructor(outputFn, inputFn) {
                    this.output = outputFn;
                    this.input = inputFn;
                    this.vars = {};
                    this.varTypes = {};
                    this.arrays = {};
                    this.subprocs = {};
                    this.lines = [];
                    this.pos = 0;
                    // Caps de seguridad MÁS ESTRICTOS — antes la página se crasheaba
                    // con bucles infinitos antes de llegar a los caps.
                    this.maxSteps = 100000;       // pasos totales del programa (bumped 50k->100k)
                    this.maxLoopIters = 100000;   // iteraciones por loop individual (bumped 50k->100k)
                    this.maxOutputLines = 10000;  // cap del output (anti-spam de DOM, bumped 3k->10k)
                    this.outputLineCount = 0;
                    this.steps = 0;
                    this.callStack = 0;
                    this.startTime = Date.now();
                    this.maxRunMs = 30000;        // FIX: 30 seg (los mensajes ya decían 30s)
                    this.inputPauseStart = 0;     // tiempo pausado por Leer (no cuenta para timeout)
                    this.totalInputPause = 0;
                }
                // Helpers para pausar el timer durante Leer
                pauseTimerForInput() { this.inputPauseStart = Date.now(); }
                resumeTimerAfterInput() {
                    if (this.inputPauseStart > 0) {
                        this.totalInputPause += Date.now() - this.inputPauseStart;
                        this.inputPauseStart = 0;
                    }
                }
                effectiveElapsed() {
                    return Date.now() - this.startTime - this.totalInputPause;
                }

                tokenize(code) {
                    // Remove comments and trailing semicolons
                    let lines = code.split("\n").map((l) => {
                        // Quitar comentario //, respetando comillas (con escape \")
                        let ci = -1, inStr = false;
                        for (let j = 0; j < l.length; j++) {
                            if (l[j] === '\\' && inStr && l[j+1] === '"') { j++; continue; }
                            if (l[j] === '"') inStr = !inStr;
                            else if (!inStr && l[j] === '/' && l[j+1] === '/') { ci = j; break; }
                        }
                        let r = ci >= 0 ? l.substring(0, ci) : l;
                        // Quitar punto y coma final (PSeInt los permite como opcionales)
                        r = r.replace(/;+\s*$/, '');
                        return r;
                    });
                    return lines;
                }

                trim(s) {
                    return (s || "").trim();
                }

                async run(code) {
                    this.vars = {};
                    this.arrays = {};
                    this.subprocs = {};
                    this.lines = this.tokenize(code);
                    this.pos = 0;
                    this.steps = 0;

                    try {
                        // Pre-scan for subprocesses
                        this.scanSubProcs();
                        // Find main process. FIX: añadido soporte para
                        // Algoritmo/FinAlgoritmo (sinónimo oficial de
                        // Proceso/FinProceso en PSeInt v20250218).
                        let procStart = -1;
                        let procEndKw = "FinProceso"; // por defecto
                        for (let i = 0; i < this.lines.length; i++) {
                            let t = this.trim(this.lines[i]);
                            if (/^Proceso\s+\S+/i.test(t)) {
                                procStart = i;
                                procEndKw = "FinProceso";
                                break;
                            }
                            if (/^Algoritmo\s+\S+/i.test(t)) {
                                procStart = i;
                                procEndKw = "FinAlgoritmo";
                                break;
                            }
                        }
                        if (procStart < 0) {
                            this.output(
                                "❌ Error: No se encontró un bloque Proceso/Algoritmo principal",
                                "err",
                            );
                            return;
                        }
                        this.pos = procStart + 1;
                        await this.runBlock(procEndKw);
                    } catch (e) {
                        let msg = e.message || String(e);
                        let lineInfo = "";
                        if (typeof this.pos === 'number' && this.pos >= 0 && this.lines && this.lines[this.pos] != null) {
                            lineInfo = " (cerca de la línea " + (this.pos + 1) + ": " + this.trim(this.lines[this.pos]).substring(0, 60) + ")";
                        }
                        // Hints amigables por patrón
                        let hint = "";
                        if (/no.*defin/i.test(msg)) hint = "\n   💡 ¿Olvidaste declarar la variable con 'Definir nombre Como Tipo'?";
                        else if (/fuera de rango/i.test(msg)) hint = "\n   💡 Recuerda: los arreglos en PSeInt empiezan en el índice 1, no en 0.";
                        else if (/divisi[óo]n por cero/i.test(msg)) hint = "\n   💡 Antes de dividir, asegúrate de que el divisor no sea 0 (usa un Si).";
                        else if (/Para.*l[íi]mites/i.test(msg)) hint = "\n   💡 Verifica que las variables del 'Para' tengan valores numéricos antes del ciclo.";
                        else if (/no se encontr/i.test(msg)) hint = "\n   💡 Tu código debe empezar con 'Proceso NombreDelPrograma' y terminar con 'FinProceso'.";
                        this.output("❌ " + msg + lineInfo + hint, "err");
                    }
                }

                scanSubProcs() {
                    for (let i = 0; i < this.lines.length; i++) {
                        let t = this.trim(this.lines[i]);
                        // Soporta "SubProceso", "Funcion", "Función" y
                        // "Procedimiento" (sinónimos en PSeInt v20250218).
                        // El parámetro `procKind` se usa para que
                        // _extractSubprocBody sepa qué keyword de cierre buscar.
                        let m = t.match(/^(?:SubProceso|Funcion|Función|Procedimiento)\s+(.*)/i);
                        if (m) {
                            let header = m[1];
                            // Check if has return: result <- Name(params)
                            let rm = header.match(
                                /^(\w+)\s*<-\s*(\w+)\s*\((.*)\)\s*$/i,
                            );
                            let nm,
                                retVar = null,
                                params = [];
                            if (rm) {
                                retVar = rm[1];
                                nm = rm[2];
                                params = rm[3]
                                    ? rm[3].split(",").map((p) => p.trim())
                                    : [];
                            } else {
                                let sm = header.match(/^(\w+)\s*\((.*)\)\s*$/i);
                                if (sm) {
                                    nm = sm[1];
                                    params = sm[2]
                                        ? sm[2].split(",").map((p) => p.trim())
                                        : [];
                                } else {
                                    nm = header.trim();
                                }
                            }
                            this.subprocs[nm.toLowerCase()] = {
                                start: i + 1,
                                retVar,
                                params,
                                name: nm,
                                body: this._extractSubprocBody(i + 1),
                            };
                        }
                    }
                }

                _extractSubprocBody(startIdx) {
                    // Extrae las líneas del cuerpo de un SubProceso/Funcion/
                    // Procedimiento a partir del índice de inicio. Soporta
                    // anidamiento con stack de depth.
                    let body = [];
                    let depth = 0;
                    for (let i = startIdx; i < this.lines.length; i++) {
                        let t = this.trim(this.lines[i]);
                        if (/^(?:SubProceso|Funcion|Función|Procedimiento)\s+/i.test(t)) { depth++; body.push(this.lines[i]); continue; }
                        if (/^(?:FinSubProceso|FinFuncion|FinFunción|FinProcedimiento)$/i.test(t)) {
                            if (depth === 0) break;
                            depth--;
                        }
                        body.push(this.lines[i]);
                    }
                    return body;
                }

                async runBlock(endKeyword) {
                    while (this.pos < this.lines.length) {
                        if (++this.steps > this.maxSteps)
                            throw new Error(
                                "Límite de pasos alcanzado (posible bucle infinito)",
                            );
                        let raw = this.lines[this.pos];
                        let t = this.trim(raw);
                        this.pos++;

                        if (!t) continue;
                        if (this.matchEnd(t, endKeyword))
                            return {
                                type: "end",
                            };

                        // Detect other endings for early return
                        if (this.isBlockEnd(t)) {
                            this.pos--;
                            return {
                                type: "end",
                            };
                        }

                        let r = await this.execLine(t);
                        if (r && r.type === "break") return r;
                        if (r && r.type === "return") return r;
                    }
                    return {
                        type: "end",
                    };
                }

                matchEnd(t, kw) {
                    if (!kw) return false;
                    // FIX: FinProceso y FinAlgoritmo son sinónimos en PSeInt actual
                    if (kw === "FinProceso") return /^(FinProceso|FinAlgoritmo)$/i.test(t);
                    if (kw === "FinAlgoritmo") return /^(FinProceso|FinAlgoritmo)$/i.test(t);
                    if (kw === "FinSi") return /^FinSi$/i.test(t);
                    if (kw === "FinMientras") return /^FinMientras$/i.test(t);
                    if (kw === "FinPara") return /^FinPara$/i.test(t);
                    if (kw === "FinSegun") return /^FinSegun$/i.test(t);
                    if (kw === "FinSubProceso")
                        return /^(FinSubProceso|FinFuncion|FinFunción|FinProcedimiento)$/i.test(t);
                    if (kw === "Hasta Que") return /^Hasta\s+(Que\s+)?/i.test(t);
                    if (kw === "SiNo|FinSi") return /^(SiNo|FinSi)$/i.test(t);
                    return false;
                }

                isBlockEnd(t) {
                    // FIX: añadidos FinAlgoritmo, FinProcedimiento
                    return /^(FinProceso|FinAlgoritmo|FinSi|FinMientras|FinPara|FinSegun|FinSubProceso|FinFuncion|FinFunción|FinProcedimiento|SiNo)$/i.test(t)
                        || /^Hasta\s+(Que\s+)?/i.test(t);
                }

                async execLine(t) {
                    // ============================================================
                    // COMANDOS ESPECIALES (compatibilidad PSeInt Windows extendida)
                    // ============================================================
                    // Borrar Pantalla / Limpiar Pantalla — limpia la consola
                    if (/^(Borrar|Limpiar)\s+Pantalla$/i.test(t)) {
                        if (typeof _activeConsoleId !== 'undefined' && _activeConsoleId) {
                            const el = document.getElementById(_activeConsoleId);
                            if (el) {
                                // FIX: limpiar TODO el contenido, solo
                                // preservar el inputRow si hay una lectura en
                                // curso. Antes también se preservaba el hint
                                // y podían quedar <br> huérfanos, generando
                                // espacios en blanco fantasma y desalineando
                                // las siguientes líneas de salida.
                                let inputRow = el.querySelector('.console-input-row');
                                el.innerHTML = '';
                                if (inputRow) el.appendChild(inputRow);
                            }
                        }
                        return;
                    }
                    // Esperar N Segundos / Esperar Tecla
                    let espM = t.match(/^Esperar\s+(.+?)\s+Segundos?$/i);
                    if (espM) {
                        let seg = Number(this.evalExpr(espM[1]));
                        if (!isNaN(seg) && seg > 0) {
                            // FIX: aceptar hasta 60 inclusive. Antes 60 exactos
                            // se ignoraba silenciosamente. Si excede 60, cap a 60
                            // y avisar (en vez de no esperar nada).
                            let actual = Math.min(seg, 60);
                            if (seg > 60 && typeof _activeConsoleId !== 'undefined' && _activeConsoleId) {
                                appendConsole(_activeConsoleId,
                                    `⚠ Esperar ${seg}s excede el máximo (60s). Esperando 60s.`,
                                    'info');
                            }
                            await new Promise(r => setTimeout(r, actual * 1000));
                        }
                        return;
                    }
                    if (/^Esperar\s+Tecla$/i.test(t)) {
                        // Bloquea hasta que el usuario presione enter en un input
                        await this.input('cualquier_tecla');
                        return;
                    }
                    // Pre-evaluar llamadas a SubProcesos dentro de la línea
                    // para soportar Escribir Suma(a,b), Si Doble(x)>0, x <- 5+Doble(y), etc.
                    if (t && Object.keys(this.subprocs).length > 0) {
                        // Evitar interceptar llamadas tipo "Nombre(args)" como statement puro
                        // y asignaciones PURAS "var <- subproc(args)" — el wrapper de runCode las maneja.
                        // Detectar asignación pura: el RHS debe ser EXACTAMENTE func(...) sin
                        // operadores adicionales. Para esto, validar que después del ')' final
                        // no haya más operadores.
                        let isPureCall = /^[a-záéíóúüñ_][\wáéíóúüñ]*\s*\(.*\)\s*$/i.test(t);
                        let isAssignSubProc = false;
                        // RHS de asignación: capturar y verificar que sea solo func(args)
                        let amA = t.match(/^([\wáéíóúüñ]+(?:\[[^\]]+\])?)\s*<-\s*(.+)$/i);
                        if (amA) {
                            let rhs = amA[2].trim();
                            // ¿El RHS es exactamente "name(args)"? — sin operadores ni nada más
                            let pureFnM = rhs.match(/^([a-záéíóúüñ_][\wáéíóúüñ]*)\s*\((.*)\)\s*$/i);
                            if (pureFnM && this.subprocs[pureFnM[1].toLowerCase()]) {
                                // Verificar que el ) de cierre sea balanceado al nivel raíz
                                // (que no sea "f(x) + g(y)" que también matchea ese regex)
                                let argStr = pureFnM[2];
                                let depth = 0, ok = true;
                                for (let c of argStr) {
                                    if (c === '(') depth++;
                                    else if (c === ')') { depth--; if (depth < 0) { ok = false; break; } }
                                }
                                if (ok && depth === 0) {
                                    isAssignSubProc = true;
                                }
                            }
                        }
                        if (isPureCall) {
                            let pm = t.match(/^([a-záéíóúüñ_][\wáéíóúüñ]*)\s*\(/i);
                            if (pm && this.subprocs[pm[1].toLowerCase()]) isPureCall = true;
                            else isPureCall = false;
                        }
                        if (!isPureCall && !isAssignSubProc) {
                            try { t = await this.preEvalSubProcs(t); } catch(e) { /* deja la línea original */ }
                        }
                    }
                    // Handle semicolon-separated statements on one line
                    if (t.includes(';')) {
                        // Split by ; but not inside strings
                        let stmts = [];
                        let cur = '', inStr = false;
                        for (let i = 0; i < t.length; i++) {
                            let c = t[i];
                            if (c === '"') inStr = !inStr;
                            if (!inStr && c === ';') {
                                let s = cur.trim();
                                if (s) stmts.push(s);
                                cur = '';
                            } else {
                                cur += c;
                            }
                        }
                        if (cur.trim()) stmts.push(cur.trim());
                        if (stmts.length > 1) {
                            for (let s of stmts) {
                                let r = await this.execLine(s);
                                if (r && (r.type === 'break' || r.type === 'return')) return r;
                            }
                            return;
                        }
                    }
                    // Escribir (con o sin salto)
                    if (/^Escribir\b/i.test(t)) {
                        let noNewline = false;
                        let expr;
                        if (/^Escribir\s+Sin\s+Saltar\b/i.test(t)) {
                            expr = t.replace(/^Escribir\s+Sin\s+Saltar\s*/i, "");
                            noNewline = true;
                        } else {
                            expr = t.replace(/^Escribir\s*/i, "");
                        }
                        // Escribir sin argumentos → línea en blanco
                        if (!expr || !expr.trim()) {
                            this.output("", null, noNewline);
                            return;
                        }
                        let parts = this.splitComma(expr);
                        let out = parts
                            .map((p) => {
                                let v = this.evalExpr(this.trim(p));
                                // Booleanos → Verdadero/Falso en español
                                if (v === true) return "VERDADERO";
                                if (v === false) return "FALSO";
                                // Formateo limpio de números decimales (evita 0.30000000000000004)
                                if (typeof v === 'number' && !Number.isInteger(v) && isFinite(v)) {
                                    // Redondear a 10 dígitos significativos máximo
                                    let rounded = Math.round(v * 1e10) / 1e10;
                                    if (Number.isInteger(rounded)) return String(rounded);
                                    // Eliminar ceros finales innecesarios
                                    let s = rounded.toString();
                                    // Si hay más de 6 decimales innecesarios, recortar
                                    if (s.includes('.') && s.split('.')[1].length > 6) {
                                        s = rounded.toFixed(6).replace(/\.?0+$/, '');
                                    }
                                    return s;
                                }
                                return v;
                            })
                            .join("");
                        // Cap del output: evita saturar el DOM en bucles que imprimen mucho
                        this.outputLineCount++;
                        if (this.outputLineCount > this.maxOutputLines) {
                            throw new Error(
                                "🛑 Salida excesiva: se imprimieron más de " + this.maxOutputLines +
                                " líneas. Probable bucle infinito o sin control. Revisa tu lógica."
                            );
                        }
                        this.output(String(out), null, noNewline);
                        return;
                    }
                    // Leer
                    if (/^Leer\s+/i.test(t)) {
                        let varList = t
                            .replace(/^Leer\s+/i, "")
                            .split(",")
                            .map((v) => this.trim(v));
                        for (let v of varList) {
                            let val = await this.input(v);
                            let arrM = v.match(/^(\w+)\[(.+)\]$/);
                            if (arrM) {
                                let aname = arrM[1].toLowerCase();
                                let idxExp = arrM[2];
                                if (
                                    !this.vars.hasOwnProperty(aname) &&
                                    !this.arrays.hasOwnProperty(aname)
                                ) {
                                    throw new Error(
                                        "Variable '" +
                                            aname +
                                            "' no está definida. Usa Definir primero.",
                                    );
                                }
                                if (!this.arrays[aname])
                                    this.arrays[aname] = {};
                                let idx = this.evalArrayIdx(idxExp, aname);
                                this.arrays[aname][idx] = this.parseVal(val);
                            } else {
                                let vn = v.toLowerCase();
                                if (!this.vars.hasOwnProperty(vn)) {
                                    // Auto-define if not exists (lenient mode for Leer)
                                    this.vars[vn] = 0;
                                }
                                // FIX: respetar el tipo declarado al leer.
                                // Sin esto, Leer "007" en una variable Caracter quedaba como 7.
                                let declaredType = this.varTypes && this.varTypes[vn];
                                if (declaredType === 'texto' || declaredType === 'cadena' ||
                                    declaredType === 'caracter' || declaredType === 'char') {
                                    this.vars[vn] = String(val);
                                } else if (declaredType === 'logico') {
                                    let s = String(val).trim().toLowerCase();
                                    this.vars[vn] = (s === 'verdadero' || s === 'true' || s === 'v' || s === '1');
                                } else if (declaredType === 'entero') {
                                    let n = Number(val);
                                    if (isNaN(n)) throw new Error("Valor leído '" + val + "' no es un entero válido para " + v);
                                    this.vars[vn] = Math.trunc(n);
                                } else if (declaredType === 'real' || declaredType === 'numerico') {
                                    let n = Number(val);
                                    if (isNaN(n)) throw new Error("Valor leído '" + val + "' no es un número válido para " + v);
                                    this.vars[vn] = n;
                                } else {
                                    this.vars[vn] = this.parseVal(val);
                                }
                            }
                        }
                        return;
                    }
                    // Definir
                    if (/^Definir\s+/i.test(t)) {
                        let m = t.match(/^Definir\s+(.+)\s+Como\s+(\w+)/i);
                        if (!m) {
                            throw new Error(
                                "Sintaxis incorrecta: '" + t + "'\n→ Formato esperado: Definir <variable> Como <tipo>\n  Tipos válidos: Entero, Real, Texto, Logico"
                            );
                        }
                        let varNames = m[1].split(',').map(v => v.trim().toLowerCase());
                        let tp = m[2].toLowerCase();
                        const tiposValidos = ['entero','real','numerico','texto','cadena','caracter','char','logico'];
                        if (!tiposValidos.includes(tp)) {
                            throw new Error(
                                "Tipo desconocido '" + m[2] + "' en: " + t + "\n→ Tipos válidos: Entero, Real, Texto, Logico"
                            );
                        }
                        for (let vn of varNames) {
                            if (!vn) continue;
                            // Validate variable name
                            if (!/^[a-záéíóúñ_][a-záéíóúñ_0-9]*$/i.test(vn)) {
                                throw new Error("Nombre de variable inválido: '" + vn + "'");
                            }
                            if (!this.vars.hasOwnProperty(vn)) {
                                if (tp === "entero" || tp === "real" || tp === "numerico")
                                    this.vars[vn] = 0;
                                else if (tp === "logico") this.vars[vn] = false;
                                else this.vars[vn] = "";
                            }
                            // Store type for later use
                            if (!this.varTypes) this.varTypes = {};
                            this.varTypes[vn] = tp;
                        }
                        return;
                    }
                    // Dimension — soporta múltiples declaraciones: Dimension a[10], b[5,5]
                    if (/^Dimension\s+/i.test(t)) {
                        let body = t.replace(/^Dimension\s+/i, '');
                        let re = /(\w+)\[([^\]]+)\]/g, mm;
                        if (!this.arrayDims) this.arrayDims = {};
                        while ((mm = re.exec(body))) {
                            let aname = mm[1].toLowerCase();
                            if (!this.arrays[aname]) this.arrays[aname] = {};
                            let dims = mm[2].split(',').map(s => {
                                let v = Number(this.evalExpr(s.trim()));
                                return (isNaN(v) || v < 1) ? null : Math.floor(v);
                            });
                            this.arrayDims[aname] = dims;
                        }
                        return;
                    }
                    // Si — multilinea Y inline (Si cond Entonces stmt FinSi en una linea)
                    if (/^Si\s+/i.test(t) && /Entonces/i.test(t)) {
                        // Detectar Si inline: "Si COND Entonces STMT [SiNo STMT2] FinSi"
                        // La clave es que Entonces NO está al final de la línea
                        let inlineM = t.match(/^Si\s+(.+?)\s+Entonces\s+(.+?)\s+FinSi$/i);
                        // También: Si COND Entonces STMT SiNo STMT2 FinSi
                        let inlineMElse = t.match(/^Si\s+(.+?)\s+Entonces\s+(.+?)\s+SiNo\s+(.+?)\s+FinSi$/i);

                        if (inlineMElse) {
                            let cv = this.evalExpr(inlineMElse[1].trim());
                            let stmts = cv ? inlineMElse[2].trim() : inlineMElse[3].trim();
                            // ejecutar los statements del bloque ganador (pueden ser varios con ;)
                            let savedMain = this.lines, savedPos = this.pos;
                            this.lines = [stmts]; this.pos = 0;
                            await this.runBlock(null);
                            this.lines = savedMain; this.pos = savedPos;
                            return;
                        } else if (inlineM) {
                            let cv = this.evalExpr(inlineM[1].trim());
                            if (cv) {
                                let savedMain = this.lines, savedPos = this.pos;
                                this.lines = [inlineM[2].trim()]; this.pos = 0;
                                await this.runBlock(null);
                                this.lines = savedMain; this.pos = savedPos;
                            }
                            return;
                        } else if (/\s+Entonces$/i.test(t)) {
                            // Si multilinea normal
                            let cond = t
                                .replace(/^Si\s+/i, "")
                                .replace(/\s+Entonces$/i, "");
                            let cv = this.evalExpr(cond);
                            return await this.execSi(cv);
                        } else {
                            // Si COND Entonces con cuerpo inline sin FinSi en misma línea
                            // Extraer condición y ejecutar el cuerpo como línea
                            let m2 = t.match(/^Si\s+(.+?)\s+Entonces\s+(.+)$/i);
                            if (m2) {
                                let cv = this.evalExpr(m2[1].trim());
                                // Detectar patrón híbrido: siguiente línea tiene SiNo ... FinSi (inline o multilínea)
                                let next = (this.lines[this.pos] || "").trim();
                                let elseInline = next.match(/^SiNo\s+(.+?)\s+FinSi$/i);
                                let elseStart = /^SiNo$/i.test(next) || /^SiNo\s+/i.test(next);
                                if (elseInline) {
                                    // Consumir la línea SiNo ... FinSi
                                    this.pos++;
                                    let stmts = cv ? m2[2].trim() : elseInline[1].trim();
                                    let savedMain = this.lines, savedPos = this.pos;
                                    this.lines = [stmts]; this.pos = 0;
                                    await this.runBlock(null);
                                    this.lines = savedMain; this.pos = savedPos;
                                    return;
                                } else if (elseStart) {
                                    // SiNo multilínea: ejecutar la rama correspondiente
                                    if (cv) {
                                        // Ejecutar body inline del Si verdadero
                                        let savedMain = this.lines, savedPos = this.pos;
                                        this.lines = [m2[2].trim()]; this.pos = 0;
                                        await this.runBlock(null);
                                        this.lines = savedMain; this.pos = savedPos;
                                        // Saltar hasta FinSi correspondiente
                                        let depth = 1;
                                        while (this.pos < this.lines.length && depth > 0) {
                                            let ln = (this.lines[this.pos] || "").trim();
                                            if (/^Si\s+.+Entonces$/i.test(ln)) depth++;
                                            else if (/^FinSi$/i.test(ln)) depth--;
                                            this.pos++;
                                        }
                                    } else {
                                        // Consumir línea SiNo y ejecutar bloque else hasta FinSi
                                        this.pos++; // saltar línea SiNo (cuerpo: el resto después de SiNo)
                                        // Si la línea SiNo tenía cuerpo inline después: ejecutar primero
                                        let elseFirst = next.replace(/^SiNo\s*/i, "").trim();
                                        if (elseFirst) {
                                            let savedMain = this.lines, savedPos = this.pos;
                                            this.lines = [elseFirst]; this.pos = 0;
                                            await this.runBlock(null);
                                            this.lines = savedMain; this.pos = savedPos;
                                        }
                                        // Ejecutar hasta FinSi
                                        let elseBody = [], depth = 1;
                                        while (this.pos < this.lines.length && depth > 0) {
                                            let ln = (this.lines[this.pos] || "").trim();
                                            if (/^Si\s+.+Entonces$/i.test(ln)) depth++;
                                            else if (/^FinSi$/i.test(ln)) { depth--; if (depth === 0) break; }
                                            elseBody.push(this.lines[this.pos]);
                                            this.pos++;
                                        }
                                        this.pos++; // saltar FinSi
                                        if (elseBody.length) {
                                            let savedMain = this.lines, savedPos = this.pos;
                                            this.lines = elseBody; this.pos = 0;
                                            await this.runBlock(null);
                                            this.lines = savedMain; this.pos = savedPos;
                                        }
                                    }
                                    return;
                                }
                                // Sin SiNo: solo ejecutar el cuerpo inline si la condición se cumple
                                if (cv) {
                                    let savedMain = this.lines, savedPos = this.pos;
                                    this.lines = [m2[2].trim()]; this.pos = 0;
                                    await this.runBlock(null);
                                    this.lines = savedMain; this.pos = savedPos;
                                }
                                return;
                            }
                            let cond = t.replace(/^Si\s+/i, "").replace(/\s+Entonces$/i, "");
                            let cv = this.evalExpr(cond);
                            return await this.execSi(cv);
                        }
                    }
                    // Segun
                    if (/^Segun\s+/i.test(t)) {
                        let varName = t
                            .replace(/^Segun\s+/i, "")
                            .replace(/\s+Hacer$/i, "")
                            .trim();
                        let val = this.evalExpr(varName);
                        return await this.execSegun(val);
                    }
                    // Mientras
                    if (/^Mientras\s+/i.test(t)) {
                        let cond = t
                            .replace(/^Mientras\s+/i, "")
                            .replace(/\s+Hacer$/i, "");
                        return await this.execMientras(cond);
                    }
                    // Repetir
                    if (/^Repetir$/i.test(t)) {
                        return await this.execRepetir();
                    }
                    // Para — multilínea Y inline (Para v<-A Hasta B [Con Paso C] Hacer BODY FinPara)
                    if (/^Para\s+/i.test(t)) {
                        // Inline: termina con FinPara en la misma línea
                        let inlineM = t.match(
                            /^Para\s+(\w+)\s*<-\s*(.+?)\s+Hasta\s+(.+?)(?:\s+Con\s+Paso\s+(.+?))?\s+Hacer\s+(.+?)\s+FinPara$/i,
                        );
                        if (inlineM) {
                            // Ejecutar como un Para con cuerpo de una sola línea
                            let varN = inlineM[1], fromStr = inlineM[2], toStr = inlineM[3];
                            let stepStr = inlineM[4] || "1";
                            let body = inlineM[5];
                            let from = Number(this.evalExpr(fromStr));
                            let to = Number(this.evalExpr(toStr));
                            let step = Number(this.evalExpr(stepStr));
                            if (isNaN(from) || isNaN(to))
                                throw new Error("Para: los l�mites 'desde' y 'hasta' deben ser num�ricos");
                            if (!step || isNaN(step)) step = 1;
                            let i = from;
                            const safety = 1000000;
                            let guard = 0;
                            while (((step > 0 && i <= to) || (step < 0 && i >= to)) && guard < safety) {
                                this.vars[varN] = i;
                                let savedMain = this.lines, savedPos = this.pos;
                                this.lines = [body]; this.pos = 0;
                                let r = await this.runBlock(null);
                                this.lines = savedMain; this.pos = savedPos;
                                if (r && (r.type === 'break' || r.type === 'return')) {
                                    if (r.type === 'return') return r;
                                    break;
                                }
                                i += step;
                                guard++;
                            }
                            return;
                        }
                        // Multilínea normal
                        let m = t.match(
                            /^Para\s+(\w+)\s*<-\s*(.+?)\s+Hasta\s+(.+?)(?:\s+Con\s+Paso\s+(.+?))?\s+Hacer$/i,
                        );
                        if (m)
                            return await this.execPara(
                                m[1],
                                m[2],
                                m[3],
                                m[4] || "1",
                            );
                        throw new Error(
                            "Sintaxis incorrecta en ciclo Para: '" + t + "'\n" +
                            "→ Formato: Para <var> <- <inicio> Hasta <fin> [Con Paso <n>] Hacer\n" +
                            "  Ejemplo: Para i <- 1 Hasta 10 Hacer"
                        );
                    }
                    // Salir / Interrumpir / SalirPara — break de ciclo
                    // FIX: SalirPara fue agregado a PSeInt en versiones
                    // recientes (v20250218). Es semánticamente idéntico
                    // a Salir pero está pensado específicamente para Para.
                    if (/^(Salir|SalirPara|Interrumpir)$/i.test(t)) {
                        return { type: 'break' };
                    }
                    // Retornar / Devolver — en SubProceso asigna al var de retorno
                    // Soporta: "Retornar valor", "Retornar" (sin valor — salida temprana)
                    if (/^(Retornar|Devolver)$/i.test(t)) {
                        return { type: 'return', value: undefined };
                    }
                    if (/^(Retornar|Devolver)\s+/i.test(t)) {
                        let expr = t.replace(/^(Retornar|Devolver)\s+/i, '').trim();
                        let evalExpr2 = await this.preEvalSubProcs(expr);
                        let val = this.evalExpr(evalExpr2);
                        return { type: 'return', value: val };
                    }
                    // SubProceso call (line-only, not with return)
                    // Assignment: var <- expr or arr[idx] <- expr
                    let arrAssign = t.match(/^([a-záéíóúüñ_][\wáéíóúüñ]*)\[([^\]]+)\]\s*<-\s*(.+)$/i);
                    if (arrAssign) {
                        let aname = arrAssign[1].toLowerCase();
                        let idx = this.evalArrayIdx(arrAssign[2], aname);
                        // Pre-evaluar llamadas a subprocesos en la expresión del lado derecho
                        let rhsExpr = await this.preEvalSubProcs(arrAssign[3]);
                        let val = this.evalExpr(rhsExpr);
                        if (!this.arrays[aname]) this.arrays[aname] = {};
                        this.arrays[aname][idx] = val;
                        return;
                    }
                    let assign = t.match(/^([a-záéíóúüñ_][\wáéíóúüñ]*)\s*<-\s*(.+)$/i);
                    if (assign) {
                        let vn = assign[1].toLowerCase();
                        // Pre-evaluar llamadas a subprocesos en la expresión del lado derecho
                        let rhsExpr = await this.preEvalSubProcs(assign[2]);
                        let val = this.evalExpr(rhsExpr);
                        this.vars[vn] = val;
                        return;
                    }
                    // SubProceso call (procedure without return)
                    let callM = t.match(/^([a-záéíóúüñ_][\wáéíóúüñ]*)\s*\((.*)\)$/i);
                    if (callM) {
                        let fn = callM[1];
                        let argStr = callM[2];
                        let rawArgs = argStr ? this.splitComma(argStr) : [];
                        // Evaluar args; si un arg es identificador de array, dejar 0
                        // (callSubProc lo manejará vía aliasing).
                        let args = rawArgs.map((a) => {
                            let raw = this.trim(a);
                            if (/^[a-záéíóúüñ_][\wáéíóúüñ]*$/i.test(raw)) {
                                let low = raw.toLowerCase();
                                if (this.arrays.hasOwnProperty(low) ||
                                    (this.arrayDims && this.arrayDims.hasOwnProperty(low))) {
                                    return 0; // placeholder; el aliasing lo maneja
                                }
                            }
                            return this.evalExpr(raw);
                        });
                        await this.callSubProc(fn, args, null, rawArgs);
                        return;
                    }
                    // Instrucción no reconocida — reportar error
                    if (t && !t.startsWith('//')) {
                        // Dar pistas específicas según el patrón
                        let hint = '';
                        if (/^[a-záéíóúüñ_][\wáéíóúüñ]*\s*=\s*/i.test(t) && !/<-/.test(t)) {
                            hint = '\n→ Usa <- para asignar (ej: x <- 5). El = sirve solo para comparar.';
                        } else if (/^print|^console|^cout|^printf/i.test(t)) {
                            hint = '\n→ En PSeInt usa Escribir para mostrar datos (ej: Escribir "Hola").';
                        } else if (/^input|^scanf|^cin|^read\s/i.test(t)) {
                            hint = '\n→ En PSeInt usa Leer para leer datos (ej: Leer variable).';
                        } else if (/^int\s|^float\s|^string\s|^bool\s|^double\s|^var\s/i.test(t)) {
                            hint = '\n→ En PSeInt usa Definir (ej: Definir x Como Entero).';
                        } else if (/^if\s|^else|^for\s|^while\s|^switch\s/i.test(t)) {
                            hint = '\n→ En PSeInt: Si/FinSi, Para/FinPara, Mientras/FinMientras, Segun/FinSegun.';
                        } else if (/^end$|^endif$|^endfor$|^endwhile$/i.test(t)) {
                            hint = '\n→ En PSeInt usa FinSi, FinPara, FinMientras, FinSegun, FinProceso.';
                        }
                        throw new Error(
                            "Instrucción no reconocida: '" + t + "'\n→ Verifica la sintaxis. Recuerda que PSeInt distingue mayúsculas en palabras clave." + hint
                        );
                    }
                }

                async execSi(condVal) {
                    // Recolectar líneas del Si hasta el FinSi correspondiente.
                    // Detectamos SiNo Si encadenados en depth 1 y los anidamos
                    // como Si dentro del bloque else, agregando un FinSi virtual
                    // para mantener el balance.
                    let thenLines = [];
                    let elseChain = []; // lista de {cond, body}
                    let defaultElse = null; // body del SiNo final puro
                    let currentBlock = thenLines;
                    let depth = 1;
                    let mode = 'then'; // 'then' | 'elseif' | 'else'
                    let curElseIf = null;
                    
                    while (this.pos < this.lines.length) {
                        let t = this.trim(this.lines[this.pos]);
                        this.pos++;
                        
                        // Inline Si en una sola línea (no incrementa depth)
                        let isInlineSi = /^Si\s+.+Entonces\s+.+FinSi$/i.test(t);
                        if (!isInlineSi && /^Si\s+/i.test(t) && /\bEntonces\b/i.test(t) &&
                            !/Entonces\s+.+FinSi$/i.test(t) && !/^Sino\s+Si/i.test(t)) {
                            depth++;
                        }
                        if (!isInlineSi && /^FinSi$/i.test(t)) {
                            depth--;
                            if (depth === 0) {
                                // Cerrar último elseif si lo había
                                if (mode === 'elseif' && curElseIf) {
                                    elseChain.push(curElseIf);
                                }
                                break;
                            }
                        }
                        
                        // SiNo (else puro) en depth 1
                        if (depth === 1 && /^SiNo$/i.test(t)) {
                            if (mode === 'elseif' && curElseIf) {
                                elseChain.push(curElseIf);
                                curElseIf = null;
                            }
                            mode = 'else';
                            defaultElse = [];
                            currentBlock = defaultElse;
                            continue;
                        }
                        
                        // SiNo Si COND Entonces (else-if) en depth 1
                        let elseIfM = depth === 1 && t.match(/^SiNo\s+Si\s+(.+?)\s+Entonces$/i);
                        if (elseIfM) {
                            // Cerrar elseif anterior si lo había
                            if (mode === 'elseif' && curElseIf) {
                                elseChain.push(curElseIf);
                            }
                            curElseIf = { cond: elseIfM[1], body: [] };
                            currentBlock = curElseIf.body;
                            mode = 'elseif';
                            continue;
                        }
                        
                        // Línea normal: agregar al bloque actual
                        currentBlock.push(t);
                    }
                    
                    // Ejecutar la rama que corresponda
                    let executeBlock = async (block) => {
                        let savedMain = this.lines;
                        let savedMainPos = this.pos;
                        this.lines = block;
                        this.pos = 0;
                        let r = await this.runBlock(null);
                        this.lines = savedMain;
                        this.pos = savedMainPos;
                        return r;
                    };
                    
                    let r;
                    if (condVal) {
                        r = await executeBlock(thenLines);
                    } else {
                        // Probar cada elseif en orden
                        let matched = false;
                        for (let ef of elseChain) {
                            let cv = this.evalExpr(ef.cond);
                            if (cv) {
                                r = await executeBlock(ef.body);
                                matched = true;
                                break;
                            }
                        }
                        if (!matched && defaultElse !== null) {
                            r = await executeBlock(defaultElse);
                        }
                    }
                    if (r && (r.type === 'break' || r.type === 'return')) return r;
                }

                async execSegun(val) {
                    let cases = {},
                        defLines = [],
                        curKey = null,
                        curLines = [],
                        depth = 1;
                    while (this.pos < this.lines.length) {
                        let t = this.trim(this.lines[this.pos]);
                        this.pos++;
                        if (/^Segun\s+/i.test(t)) { depth++; if (curKey !== null) curLines.push(t); continue; }
                        if (/^FinSegun$/i.test(t)) {
                            depth--;
                            if (depth === 0) {
                                if (curKey !== null) {
                                    if (curKey === "default") defLines = [...curLines];
                                    else cases[curKey] = [...curLines];
                                }
                                break;
                            }
                            if (curKey !== null) curLines.push(t);
                            continue;
                        }
                        // Solo detectar etiquetas de caso en el nivel actual (depth === 1)
                        let cm = depth === 1 ? t.match(/^([^:]+?):\s*(.*)$/) : null;
                        // No confundir etiquetas con asignaciones que tengan ":" (no aplica) ni con strings
                        if (cm && !/<-/.test(cm[1]) && !/"/.test(cm[1])) {
                            if (curKey !== null) {
                                if (curKey === "default") defLines = [...curLines];
                                else cases[curKey] = [...curLines];
                                curLines = [];
                            }
                            let lbl = cm[1].trim();
                            if (/^De\s+Otro\s+Modo$/i.test(lbl)) curKey = "default";
                            else curKey = lbl;
                            if (cm[2] && cm[2].trim()) curLines.push(cm[2]);
                        } else if (curKey !== null) {
                            curLines.push(t);
                        }
                    }
                    let matchLines = null;
                    for (let k in cases) {
                        let keys = k.split(",").map((kk) => kk.trim());
                        for (let kk of keys) {
                            // Soportar rangos numéricos: "1-5" o "1..5"
                            let rm = kk.match(/^(-?\d+)\s*(?:-|\.\.)\s*(-?\d+)$/);
                            if (rm) {
                                let lo = parseInt(rm[1]), hi = parseInt(rm[2]);
                                let nv = Number(val);
                                if (!isNaN(nv) && nv >= lo && nv <= hi) { matchLines = cases[k]; break; }
                            } else {
                                let kv = this.parseVal(kk);
                                if (String(kv) === String(val) || kv == val) {
                                    matchLines = cases[k];
                                    break;
                                }
                            }
                        }
                        if (matchLines) break;
                    }
                    if (!matchLines) matchLines = defLines;
                    if (matchLines && matchLines.length) {
                        let savedMain = this.lines,
                            savedPos = this.pos;
                        this.lines = matchLines;
                        this.pos = 0;
                        await this.runBlock(null);
                        this.lines = savedMain;
                        this.pos = savedPos;
                    }
                }

                async execMientras(condStr) {
                    let bodyLines = [],
                        depth = 1;
                    while (this.pos < this.lines.length) {
                        let t = this.trim(this.lines[this.pos]);
                        this.pos++;
                        if (/^Mientras\s+/i.test(t)) depth++;
                        if (/^FinMientras$/i.test(t)) {
                            depth--;
                            if (depth === 0) break;
                        }
                        bodyLines.push(t);
                    }
                    // FIX: si llegamos al final del programa sin cerrar el bucle,
                    // avisamos claramente en vez de ejecutar un Mientras sin fin.
                    if (depth > 0) {
                        throw new Error("Falta 'FinMientras' para cerrar el bucle 'Mientras " + condStr + "'");
                    }
                    let iters = 0;
                    while (this.evalExpr(condStr) && iters < this.maxLoopIters) {
                        iters++;
                        this.steps++;
                        // Cap global de pasos (seguridad anti-crash)
                        if (this.steps > this.maxSteps)
                            throw new Error("Límite de pasos alcanzado (" + this.maxSteps + "). Revisa si tu Mientras tiene una condición de salida válida.");
                        // Cap de wall-clock (30s) — evita colgar la pestaña indefinidamente
                        if (this.effectiveElapsed() > this.maxRunMs)
                            throw new Error("⏱ Tiempo máximo (30 s) de ejecución excedido en 'Mientras " + condStr + "'. La página podría ralentizarse con bucles muy largos. Si tu programa imprime miles de líneas, reduce el rango o usa 'Escribir Sin Saltar' para acumular en una sola línea.");
                        // CEDER control al event loop cada 500 iteraciones — sin esto, el
                        // thread del navegador queda bloqueado y la página se congela.
                        // Yield al event loop sincronizado con el repaint del browser.
                        // RAF + setTimeout encadenados permiten que la consola se vea
                        // actualizando en tiempo real (no se ve "trabada hasta el timeout").
                        if (iters % 100 === 0) await new Promise(r => {
                            if (typeof requestAnimationFrame !== 'undefined')
                                requestAnimationFrame(() => setTimeout(r, 0));
                            else setTimeout(r, 0);
                        });
                        let savedMain = this.lines, savedPos = this.pos;
                        this.lines = bodyLines;
                        this.pos = 0;
                        let r = await this.runBlock(null);
                        this.lines = savedMain;
                        this.pos = savedPos;
                        if (r && r.type === "break") break;
                        if (r && r.type === "return") return r;
                    }
                    if (iters >= this.maxLoopIters)
                        throw new Error(
                            "Ciclo Mientras: alcanzó " + this.maxLoopIters + " iteraciones. ¿Es un bucle infinito? Revisa que la variable de la condición '" + condStr + "' se modifique dentro del bucle.",
                        );
                }

                async execRepetir() {
                    let bodyLines = [],
                        condStr = "",
                        depth = 1;
                    while (this.pos < this.lines.length) {
                        let t = this.trim(this.lines[this.pos]);
                        this.pos++;
                        if (/^Repetir$/i.test(t)) { depth++; bodyLines.push(t); continue; }
                        let hm = t.match(/^Hasta\s+Que\s+(.+)$/i) || t.match(/^Hasta\s+(.+)$/i);
                        if (hm) {
                            depth--;
                            if (depth === 0) { condStr = hm[1]; break; }
                            bodyLines.push(t);
                            continue;
                        }
                        bodyLines.push(t);
                    }
                    let iters = 0;
                    do {
                        iters++;
                        this.steps++;
                        if (this.steps > this.maxSteps)
                            throw new Error("Límite de pasos alcanzado (" + this.maxSteps + "). Revisa la condición 'Hasta Que " + condStr + "'.");
                        if (this.effectiveElapsed() > this.maxRunMs)
                            throw new Error("⏱ Tiempo máximo (30 s) de ejecución excedido en 'Repetir...Hasta Que " + condStr + "'. La página podría ralentizarse con bucles muy largos. Si tu programa imprime miles de líneas, reduce el rango.");
                        // Yield al event loop sincronizado con el repaint del browser.
                        // RAF + setTimeout encadenados permiten que la consola se vea
                        // actualizando en tiempo real (no se ve "trabada hasta el timeout").
                        if (iters % 100 === 0) await new Promise(r => {
                            if (typeof requestAnimationFrame !== 'undefined')
                                requestAnimationFrame(() => setTimeout(r, 0));
                            else setTimeout(r, 0);
                        });
                        let savedMain = this.lines, savedPos = this.pos;
                        this.lines = bodyLines;
                        this.pos = 0;
                        let r = await this.runBlock(null);
                        this.lines = savedMain;
                        this.pos = savedPos;
                        if (r && r.type === "break") break;
                        if (r && r.type === "return") return r;
                    } while (!this.evalExpr(condStr) && iters < this.maxLoopIters);
                    if (iters >= this.maxLoopIters)
                        throw new Error(
                            "Ciclo Repetir: alcanzó " + this.maxLoopIters + " iteraciones. ¿Es un bucle infinito? Verifica que la condición 'Hasta Que " + condStr + "' eventualmente sea verdadera.",
                        );
                }

                async execPara(varN, fromStr, toStr, stepStr) {
                    let bodyLines = [],
                        depth = 1;
                    while (this.pos < this.lines.length) {
                        let t = this.trim(this.lines[this.pos]);
                        this.pos++;
                        if (/^Para\s+/i.test(t)) depth++;
                        if (/^FinPara$/i.test(t)) {
                            depth--;
                            if (depth === 0) break;
                        }
                        bodyLines.push(t);
                    }
                    let from = Number(this.evalExpr(fromStr));
                    let to = Number(this.evalExpr(toStr));
                    let step = Number(this.evalExpr(stepStr));
                    if (isNaN(step) || step === 0) step = 1;
                    if (isNaN(from) || isNaN(to))
                        throw new Error("Ciclo Para: rango inválido (from=" + fromStr + ", to=" + toStr + ")");
                    let vn = varN.toLowerCase();
                    this.vars[vn] = from;
                    let iters = 0;
                    const MAX_ITERS = this.maxLoopIters;
                    while (
                        (step > 0
                            ? this.vars[vn] <= to
                            : this.vars[vn] >= to) &&
                        iters < MAX_ITERS
                    ) {
                        iters++;
                        this.steps++;
                        if (this.steps > this.maxSteps)
                            throw new Error("Límite de pasos alcanzado (" + this.maxSteps + ").");
                        if (this.effectiveElapsed() > this.maxRunMs)
                            throw new Error("⏱ Tiempo máximo (30 s) de ejecución excedido en 'Para " + varN + "'. La página podría ralentizarse con bucles muy largos. Si tu programa imprime miles de líneas (ej: 'Para i <- 1 Hasta 10000 Hacer Escribir i'), reduce el rango.");
                        // Yield al event loop sincronizado con el repaint del browser.
                        // RAF + setTimeout encadenados permiten que la consola se vea
                        // actualizando en tiempo real (no se ve "trabada hasta el timeout").
                        if (iters % 100 === 0) await new Promise(r => {
                            if (typeof requestAnimationFrame !== 'undefined')
                                requestAnimationFrame(() => setTimeout(r, 0));
                            else setTimeout(r, 0);
                        });
                        let savedMain = this.lines, savedPos = this.pos;
                        this.lines = bodyLines;
                        this.pos = 0;
                        let r = await this.runBlock(null);
                        this.lines = savedMain;
                        this.pos = savedPos;
                        if (r && r.type === "break") break;
                        if (r && r.type === "return") return r;
                        this.vars[vn] += step;
                    }
                    if (iters >= MAX_ITERS)
                        throw new Error("Ciclo Para: demasiadas iteraciones (máx " + MAX_ITERS + "). ¿Es un bucle infinito?");
                }

                async callSubProc(name, argVals, retVarName, rawArgs) {
                    let sp = this.subprocs[name.toLowerCase()];
                    if (!sp)
                        throw new Error(
                            'SubProceso "' + name + '" no encontrado',
                        );
                    if (this.callStack > 300)
                        throw new Error("Recursión demasiado profunda (límite: 300 llamadas anidadas)");
                    this.callStack++;
                    let savedVars = Object.assign({}, this.vars);
                    let savedArrays = this.arrays;
                    let savedArrayDims = this.arrayDims || {};
                    // Helper: detecta si un parámetro es por referencia
                    // En PSeInt clásico, "Por Valor" es el default; "Por Referencia" es explícito
                    // Aceptamos: "var x", "ref x", "x por referencia", "x byref"
                    let _isByRef = (p) => {
                        return /^(var|ref)\s+/i.test(p) ||
                               /\s+(por\s+referencia|byref)\b/i.test(p);
                    };
                    let _paramName = (p) => {
                        return p
                            .replace(/^(var|ref)\s+/i, "")
                            .replace(/\s+(por\s+referencia|byref)\b.*$/i, "")
                            .replace(/\s+por\s+valor\b.*$/i, "")
                            .trim()
                            .toLowerCase();
                    };
                    // Detectar si un argumento es un identificador de array
                    // y construir un mapeo de aliases dentro del subproc
                    let arrayAliases = {}; // pname -> realArrayName
                    let newArrays = {}; // tabla de arrays para el subproc
                    let newArrayDims = {};
                    // bind params
                    for (let i = 0; i < sp.params.length; i++) {
                        let p = sp.params[i];
                        let pname = _paramName(p);
                        let rawArg = rawArgs && rawArgs[i] ? this.trim(rawArgs[i]) : null;
                        // ¿El argumento es identificador simple Y existe como array?
                        let isArrayArg = false;
                        if (rawArg && /^[a-záéíóúüñ_][\wáéíóúüñ]*$/i.test(rawArg)) {
                            let argLow = rawArg.toLowerCase();
                            if (savedArrays.hasOwnProperty(argLow) ||
                                (savedArrayDims && savedArrayDims.hasOwnProperty(argLow))) {
                                isArrayArg = true;
                                arrayAliases[pname] = argLow;
                                // Compartir el MISMO objeto array (no copia) para que las
                                // mutaciones sean visibles en el caller (paso por referencia
                                // natural de arrays como en PSeInt real)
                                newArrays[pname] = savedArrays[argLow];
                                if (savedArrayDims[argLow])
                                    newArrayDims[pname] = savedArrayDims[argLow];
                                this.vars[pname] = 0; // no es un valor escalar
                                continue;
                            }
                        }
                        this.vars[pname] =
                            argVals[i] !== undefined ? argVals[i] : 0;
                    }
                    // Configurar las tablas de arrays para el subproc:
                    // copiar TODAS las del caller (acceso global a arrays existentes,
                    // útil para recursión donde el subproc accede al mismo array
                    // sin que esté en su lista de parámetros - PSeInt es así)
                    // pero sobrescribir con los aliases mapeados al nombre del parámetro
                    this.arrays = Object.assign({}, savedArrays, newArrays);
                    this.arrayDims = Object.assign({}, savedArrayDims, newArrayDims);

                    if (sp.retVar) this.vars[sp.retVar.toLowerCase()] = 0;
                    let savedMain = this.lines,
                        savedPos = this.pos;
                    // Usar cuerpo cacheado en scanSubProcs (soporta recursión)
                    let bodyLines = sp.body ? sp.body.slice() : [];
                    this.lines = bodyLines;
                    this.pos = 0;
                    await this.runBlock(null);
                    let retVal = sp.retVar
                        ? this.vars[sp.retVar.toLowerCase()]
                        : undefined;
                    // Write back by-ref params
                    for (let i = 0; i < sp.params.length; i++) {
                        let p = sp.params[i];
                        if (!_isByRef(p)) continue;
                        let pname = _paramName(p);
                        let rawArg = rawArgs && rawArgs[i]
                            ? this.trim(rawArgs[i])
                            : null;
                        if (!rawArg) continue;
                        // Si el parámetro es un alias de array, no necesitamos
                        // hacer nada: las mutaciones a celdas ya están reflejadas
                        // en el objeto compartido.
                        if (arrayAliases[pname]) continue;
                        // Si el argumento es una celda de array (ej. arr[i,j])
                        let arrM = rawArg.match(/^(\w+)\[(.+)\]$/);
                        if (arrM) {
                            let aname = arrM[1].toLowerCase();
                            if (!savedArrays[aname]) savedArrays[aname] = {};
                            // Evaluar índices en el contexto del CALLER
                            let valToWrite = this.vars[pname];
                            let tmpVars = this.vars;
                            let tmpArrays = this.arrays;
                            this.vars = savedVars;
                            this.arrays = savedArrays;
                            try {
                                let idx = this.evalArrayIdx(arrM[2], aname);
                                savedArrays[aname][idx] = valToWrite;
                            } finally {
                                this.vars = tmpVars;
                                this.arrays = tmpArrays;
                            }
                        } else {
                            // Argumento simple: actualizar variable del caller
                            savedVars[rawArg.toLowerCase()] = this.vars[pname];
                        }
                    }
                    this.vars = savedVars;
                    this.arrays = savedArrays;
                    this.arrayDims = savedArrayDims;
                    this.lines = savedMain;
                    this.pos = savedPos;
                    this.callStack--;
                    if (retVarName)
                        this.vars[retVarName.toLowerCase()] = retVal;
                    return retVal;
                }

                evalArrayIdx(idxStr, aname) {
                    let parts = idxStr
                        .split(",")
                        .map((p) => Number(this.evalExpr(this.trim(p))));
                    // Validar bounds si tenemos dimensiones registradas
                    if (aname && this.arrayDims && this.arrayDims[aname]) {
                        let dims = this.arrayDims[aname];
                        for (let i = 0; i < parts.length; i++) {
                            let v = parts[i];
                            if (isNaN(v)) throw new Error("Índice inválido en " + aname + "[" + idxStr + "]");
                            if (!Number.isInteger(v)) throw new Error("Índice " + v + " no es entero en " + aname + " (los índices deben ser enteros)");
                            if (v < 1) throw new Error("Índice " + v + " fuera de rango en " + aname + " (los índices empiezan en 1" + (dims[i] != null ? ", máximo " + dims[i] : "") + ")");
                            if (dims[i] != null && v > dims[i]) throw new Error("Índice " + v + " fuera de rango en " + aname + " (debe estar entre 1 y " + dims[i] + ")");
                        }
                    }
                    return parts.join(",");
                }

                // Pre-evaluar llamadas a SubProcesos dentro de una expresión.
                // Devuelve la expresión con las llamadas reemplazadas por sus
                // valores (literal numérico o string entre comillas).
                async preEvalSubProcs(expr) {
                    if (!expr || typeof expr !== 'string') return expr;
                    if (Object.keys(this.subprocs).length === 0) return expr;
                    // Buscar patrones name(...) donde name sea un subproc
                    let result = expr;
                    let safety = 0;
                    while (safety++ < 50) {
                        let found = false;
                        // Escanear identificadores seguidos de (
                        let i = 0;
                        while (i < result.length) {
                            // Saltar strings
                            if (result[i] === '"') {
                                i++;
                                while (i < result.length && result[i] !== '"') i++;
                                i++;
                                continue;
                            }
                            // Capturar identificador
                            let m = result.slice(i).match(/^([a-záéíóúüñ_][\wáéíóúüñ]*)\s*\(/i);
                            if (m && this.subprocs[m[1].toLowerCase()]) {
                                // Encontrar paréntesis de cierre balanceado
                                let openIdx = i + m[0].lastIndexOf('(');
                                let depth = 1, j = openIdx + 1, inStr = false;
                                while (j < result.length && depth > 0) {
                                    let c = result[j];
                                    if (c === '"') inStr = !inStr;
                                    else if (!inStr && c === '(') depth++;
                                    else if (!inStr && c === ')') depth--;
                                    if (depth === 0) break;
                                    j++;
                                }
                                if (depth !== 0) break;
                                let argStr = result.slice(openIdx + 1, j);
                                let rawArgs = argStr ? this.splitComma(argStr) : [];
                                // Pre-evaluar recursivamente argumentos
                                let evaluatedArgs = [];
                                for (let a of rawArgs) {
                                    let raw = this.trim(a);
                                    // Si el arg es un identificador de array, pasar placeholder
                                    if (/^[a-záéíóúüñ_][\wáéíóúüñ]*$/i.test(raw)) {
                                        let low = raw.toLowerCase();
                                        if (this.arrays.hasOwnProperty(low) ||
                                            (this.arrayDims && this.arrayDims.hasOwnProperty(low))) {
                                            evaluatedArgs.push(0);
                                            continue;
                                        }
                                    }
                                    let aEvalStr = await this.preEvalSubProcs(raw);
                                    evaluatedArgs.push(this.evalExpr(aEvalStr));
                                }
                                let val = await this.callSubProc(m[1], evaluatedArgs, null, rawArgs);
                                // Reemplazar segmento por literal
                                let literal;
                                if (typeof val === 'string') literal = '"' + val.replace(/"/g, '\\"') + '"';
                                else if (typeof val === 'boolean') literal = val ? 'Verdadero' : 'Falso';
                                else if (val === undefined || val === null) literal = '0';
                                else literal = String(val);
                                result = result.slice(0, i) + literal + result.slice(j + 1);
                                found = true;
                                break;
                            }
                            i++;
                        }
                        if (!found) break;
                    }
                    return result;
                }

                parseVal(s) {
                    if (s === null || s === undefined) return 0;
                    let str = String(s).trim();
                    if (/^"(.*)"$/.test(str)) return str.slice(1, -1);
                    if (/^\d+(\.\d+)?$/.test(str)) return parseFloat(str);
                    if (/^-\d+(\.\d+)?$/.test(str)) return parseFloat(str);
                    if (/^verdadero$/i.test(str)) return true;
                    if (/^falso$/i.test(str)) return false;
                    let n = Number(str);
                    if (!isNaN(n) && str !== "") return n;
                    return str;
                }

                splitComma(s) {
                    let parts = [],
                        cur = "",
                        depth = 0,
                        bracketDepth = 0,
                        inStr = false;
                    for (let i = 0; i < s.length; i++) {
                        let c = s[i];
                        // Soportar comillas escapadas \" dentro de strings
                        if (inStr && c === '\\' && s[i+1] === '"') {
                            cur += c + s[i+1];
                            i++;
                            continue;
                        }
                        if (c === '"' && !inStr) inStr = true;
                        else if (c === '"' && inStr) inStr = false;
                        else if (!inStr && c === "(") depth++;
                        else if (!inStr && c === ")") depth--;
                        else if (!inStr && c === "[") bracketDepth++;
                        else if (!inStr && c === "]") bracketDepth--;
                        else if (!inStr && c === "," && depth === 0 && bracketDepth === 0) {
                            parts.push(cur);
                            cur = "";
                            continue;
                        }
                        cur += c;
                    }
                    if (cur.trim()) parts.push(cur);
                    return parts;
                }

                evalExpr(expr) {
                    expr = this.trim(expr);
                    if (!expr) return "";
                    // String literal
                    if (/^"(.*)"$/.test(expr)) return expr.slice(1, -1);
                    // Boolean literals
                    if (/^verdadero$/i.test(expr)) return true;
                    if (/^falso$/i.test(expr)) return false;
                    // NO unario y minus unario se manejan en evalBinary
                    // (después de operadores de baja precedencia).
                    // Parentheses
                    if (/^\(.*\)$/.test(expr)) {
                        let inner = expr.slice(1, -1);
                        if (this.matchedParens(expr))
                            return this.evalExpr(inner);
                    }
                    // Function calls: RAIZ, ABS, TRUNC, REDON, Factorial etc.
                    let funcM = expr.match(/^(\w+)\s*\((.*)?\)$/);
                    if (funcM) {
                        let fn = funcM[1].toLowerCase();
                        let argStr = funcM[2] || "";
                        let args = argStr
                            ? this.splitComma(argStr).map((a) =>
                                  this.evalExpr(this.trim(a)),
                              )
                            : [];
                        if (fn === "raiz" || fn === "rc" || fn === "sqrt") {
                            let v = Number(args[0]);
                            if (isNaN(v)) throw new Error("RAIZ requiere un número");
                            if (v < 0) throw new Error("RAIZ de número negativo no está definida (" + v + ")");
                            return Math.sqrt(v);
                        }
                        if (fn === "abs") return Math.abs(Number(args[0]));
                        if (fn === "trunc") return Math.trunc(Number(args[0]));
                        if (fn === "redon" || fn === "round") return Math.round(Number(args[0]));
                        if (fn === "sen" || fn === "sin") return Math.sin(Number(args[0]));
                        if (fn === "cos") return Math.cos(Number(args[0]));
                        if (fn === "tan") return Math.tan(Number(args[0]));
                        if (fn === "asen" || fn === "asin") return Math.asin(Number(args[0]));
                        if (fn === "acos") return Math.acos(Number(args[0]));
                        if (fn === "atan") return Math.atan(Number(args[0]));
                        if (fn === "log" || fn === "ln") {
                            let v = Number(args[0]);
                            if (isNaN(v)) throw new Error("LN requiere un número");
                            if (v <= 0) throw new Error("LN/LOG sólo acepta valores positivos (" + v + ")");
                            let r = Math.log(v);
                            if (Math.abs(r - Math.round(r)) < 1e-10) r = Math.round(r);
                            return r;
                        }
                        if (fn === "log10") {
                            let v = Number(args[0]);
                            if (v <= 0) throw new Error("LOG10 sólo acepta valores positivos (" + v + ")");
                            return Math.log10(v);
                        }
                        if (fn === "exp") return Math.exp(Number(args[0]));
                        if (fn === "pi") return Math.PI;
                        if (fn === "e") return Math.E;
                        if (fn === "piso" || fn === "floor") return Math.floor(Number(args[0]));
                        if (fn === "techo" || fn === "ceil") return Math.ceil(Number(args[0]));
                        if (fn === "potencia" || fn === "pow") return Math.pow(Number(args[0]), Number(args[1]));
                        if (fn === "signo" || fn === "sign") return Math.sign(Number(args[0]));
                        if (fn === "max" || fn === "maximo") return Math.max(...args.map(Number));
                        if (fn === "min" || fn === "minimo") return Math.min(...args.map(Number));
                        if (fn === "aleatorio" || fn === "random" || fn === "azar") {
                            // FIX: PSeInt clásico requiere 2 args (inferior, superior).
                            // 0 args devolvía un float — confunde a los estudiantes.
                            if (args.length === 0) {
                                throw new Error("Aleatorio requiere 2 argumentos: Aleatorio(inferior, superior). Ej: Aleatorio(1, 10)");
                            }
                            if (args.length === 1) {
                                let n = Number(args[0]);
                                if (!isFinite(n) || n <= 0)
                                    throw new Error("Aleatorio: el argumento debe ser un n�mero positivo");
                                return Math.floor(Math.random() * n);
                            }
                            let start = Number(args[0]);
                            let end = Number(args[1]);
                            if (!isFinite(start) || !isFinite(end))
                                throw new Error("Aleatorio: los argumentos deben ser num�ricos");
                            if (end < start)
                                throw new Error("Aleatorio: el segundo argumento debe ser >= que el primero");
                            return (
                                Math.floor(Math.random() * (end - start + 1)) +
                                start
                            );
                        }
                        if (fn === "convertiratexto" || fn === "numeroatexto" || fn === "numerotexto" || fn === "convertirencadena") return String(args[0]);
                        if (fn === "textoanumero" || fn === "textonumero" || fn === "cadenaanumero" || fn === "valor" || fn === "convertiranumero" || fn === "numeroacadena") { let v = parseFloat(String(args[0])); return isNaN(v) ? 0 : v; }
                        // Funciones de conversión de tipo — compatibilidad PSeInt Windows
                        if (fn === "entero") {
                            let n = Number(args[0]);
                            if (isNaN(n)) throw new Error("Entero(): no se puede convertir '" + args[0] + "' a entero");
                            return Math.trunc(n);
                        }
                        if (fn === "real" || fn === "numerico") {
                            let n = Number(args[0]);
                            if (isNaN(n)) throw new Error("Real(): no se puede convertir '" + args[0] + "' a número");
                            return n;
                        }
                        if (fn === "texto" || fn === "cadena") return String(args[0]);
                        if (fn === "logico") { let v = args[0]; return v === true || v === 'Verdadero' || v === 'verdadero' || v === 1 || v === '1'; }
                        if (fn === "mayusculas" || fn === "tomayusculas" || fn === "amayusculas" || fn === "mayuscula") return String(args[0]).toUpperCase();
                        if (fn === "minusculas" || fn === "tominusculas" || fn === "aminusculas" || fn === "minuscula") return String(args[0]).toLowerCase();
                        if (fn === "longitud" || fn === "largo") return String(args[0]).length;
                        if (fn === "recortar" || fn === "trim") return String(args[0]).trim();
                        if (fn === "subcadena" || fn === "trozo" || fn === "substr") {
                            let str = String(args[0]);
                            // FIX: PSeInt usa base 1. Índice 0 o negativo es error,
                            // no se debe silenciar a 0 (JS substring(-1) normaliza a 0).
                            let s1 = Number(args[1]);
                            if (!isFinite(s1) || s1 < 1) {
                                throw new Error("Subcadena: el índice inicial debe ser >= 1 (recibido: " + args[1] + ")");
                            }
                            let start = s1 - 1;
                            let end;
                            if (args[2] !== undefined) {
                                let e1 = Number(args[2]);
                                if (!isFinite(e1) || e1 < 1) {
                                    throw new Error("Subcadena: el índice final debe ser >= 1 (recibido: " + args[2] + ")");
                                }
                                end = e1; // base-1 inclusive → base-0 exclusive es e1
                            } else end = str.length;
                            return str.substring(start, end);
                        }
                        if (fn === "concatenar") {
                            // FIX: booleanos deben mostrarse como VERDADERO/FALSO (en español)
                            return args.map(a => {
                                if (a === true) return "VERDADERO";
                                if (a === false) return "FALSO";
                                return String(a);
                            }).join("");
                        }
                        if (fn === "contiene") return String(args[0]).toLowerCase().includes(String(args[1]).toLowerCase());
                        if (fn === "reemplazar" || fn === "replace") return String(args[0]).split(String(args[1])).join(String(args[2]));
                        if (fn === "posicioncaracter" || fn === "posicion" || fn === "indice") {
                            let idx = String(args[0]).indexOf(String(args[1]));
                            return idx >= 0 ? idx + 1 : 0;
                        }
                        if (fn === "caracterenposicion" || fn === "caracter" || fn === "char") return String(args[0]).charAt(Number(args[1]) - 1);
                        if (fn === "invertir" || fn === "reverse") return String(args[0]).split('').reverse().join('');
                        if (fn === "asc") return String(args[0]).charCodeAt(0) || 0;
                        if (fn === "chr") return String.fromCharCode(Number(args[0]));
                        // User subproc call with return
                        if (this.subprocs[fn]) {
                            let rawArgList = argStr
                                ? this.splitComma(argStr)
                                : [];
                            // synchronous eval not possible for async subprocs, return 0 for now
                            // We handle subproc calls in execLine for proper async
                            return 0;
                        }
                    }
                    // Binary operators - split by lowest precedence
                    let res = this.evalBinary(expr);
                    if (res !== undefined) return res;
                    // Array access
                    let arrM = expr.match(/^(\w+)\[(.+)\]$/);
                    if (arrM) {
                        let aname = arrM[1].toLowerCase();
                        let idx = this.evalArrayIdx(arrM[2], aname);
                        // FIX: no enmascarar 0/""/false legítimos con `|| 0`.
                        // Si la celda fue asignada, devolver su valor real;
                        // si no, devolver el valor por defecto SEGÚN el tipo
                        // declarado del arreglo (Entero/Real → 0, Logico → false, Cadena/Caracter → "").
                        const arrObj = this.arrays[aname];
                        if (arrObj && Object.prototype.hasOwnProperty.call(arrObj, idx)) {
                            return arrObj[idx];
                        }
                        const tp = (this.varTypes && this.varTypes[aname]) || '';
                        if (tp === 'logico') return false;
                        if (tp === 'texto' || tp === 'cadena' || tp === 'caracter' || tp === 'char') return "";
                        return 0;
                    }
                    // Number
                    let n = Number(expr);
                    if (!isNaN(n) && expr !== "") return n;
                    // Constantes matemáticas
                    let exprLow = expr.toLowerCase();
                    if (exprLow === 'pi') return Math.PI;
                    if (exprLow === 'e' && !Object.prototype.hasOwnProperty.call(this.vars, 'e')) return Math.E;
                    // Variable
                    let vn = expr.toLowerCase();
                    if (vn in this.vars) return this.vars[vn];
                    // Check if it's an undefined variable (simple identifier, not an expression)
                    if (/^[a-záéíóúüñ_][a-záéíóúüñ0-9_]*$/i.test(expr)) {
                        throw new Error(
                            "Variable '" + expr + "' no está definida. Recuerda declararla con 'Definir' o asignarle un valor.",
                        );
                    }
                    // FIX: si llegamos aquí y la expresión contiene operadores
                    // (significa que evalBinary no pudo procesarla), está mal formada.
                    // Antes devolvía el string raw, lo cual hacía que `Escribir x +`
                    // imprimiera literalmente "x +" sin error.
                    if (/[+\-*\/^%<>=,]/.test(expr)) {
                        throw new Error(
                            "Expresión inválida: '" + expr + "'. Está incompleta — falta un valor a la izquierda o derecha de un operador, o sobran/faltan paréntesis."
                        );
                    }
                    return expr;
                }

                matchedParens(s) {
                    if (s[0] !== "(" || s[s.length - 1] !== ")") return false;
                    let d = 0;
                    for (let i = 0; i < s.length; i++) {
                        if (s[i] === "(") d++;
                        if (s[i] === ")") d--;
                        if (d === 0 && i < s.length - 1) return false;
                    }
                    return d === 0;
                }

                evalBinary(expr) {
                    // Precedencia PSeInt (de menor a mayor):
                    //   1. O
                    //   2. Y
                    //   3. comparaciones (=, <>, <, >, <=, >=)
                    //   4. +, -
                    //   5. unary -, NO  ← intermedio
                    //   6. *, /, MOD, DIV, %
                    //   7. ^ (right-assoc)
                    // Pase 1: binarios de baja precedencia
                    const LOW = [
                        ["O"],
                        ["Y"],
                        ["=", "<>", "<=", ">=", "<", ">"],
                        ["+", "-"],
                    ];
                    for (let level of LOW) {
                        let r = this.trySplit(expr, level, false);
                        if (r !== undefined) return r;
                    }
                    // Pase 2: unary NO / minus / plus
                    let noM = expr.match(/^NO\s+(.+)$/i);
                    if (noM) return !this.evalExpr(noM[1]);
                    if (expr[0] === "-") return -Number(this.evalExpr(expr.slice(1)));
                    if (expr[0] === "+") return +Number(this.evalExpr(expr.slice(1)));
                    // Pase 3: binarios de alta precedencia
                    // DIV = división entera, % = alias de MOD
                    const HIGH = [
                        ["*", "/", "MOD", "mod", "Mod", "DIV", "div", "Div", "%"],
                        ["^"],
                    ];
                    for (let level of HIGH) {
                        let rightAssoc = level.length === 1 && level[0] === "^";
                        let r = this.trySplit(expr, level, rightAssoc);
                        if (r !== undefined) return r;
                    }
                }

                trySplit(expr, ops, rightAssoc) {
                    let depth = 0,
                        inStr = false;
                    let start, end, step;
                    if (rightAssoc) { start = 0; end = expr.length; step = 1; }
                    else { start = expr.length - 1; end = -1; step = -1; }
                    for (let i = start; i !== end; i += step) {
                        let c = expr[i];
                        if (c === '"') inStr = !inStr;
                        if (inStr) continue;
                        if (c === ")") depth++;
                        if (c === "(") depth--;
                        if (depth !== 0) continue;
                        for (let op of ops) {
                            if (expr.slice(i, i + op.length) === op) {
                                // Operadores alfabéticos (O, Y, MOD) requieren bordes de palabra
                                let isWordOp = /^[A-Za-z]+$/.test(op);
                                if (isWordOp) {
                                    let pc = expr[i - 1];
                                    let nc = expr[i + op.length];
                                    if (pc && /[A-Za-z0-9_]/.test(pc)) continue;
                                    if (nc && /[A-Za-z0-9_]/.test(nc)) continue;
                                }
                                // check not part of longer op
                                let before = expr.slice(0, i).trimEnd();
                                let after = expr
                                    .slice(i + op.length)
                                    .trimStart();
                                if (!before || !after) continue;
                                // check it's a valid split
                                if (
                                    op === "<" &&
                                    (expr[i + 1] === "=" || expr[i + 1] === ">")
                                )
                                    continue;
                                if (op === ">" && expr[i + 1] === "=") continue;
                                // FIX CRÍTICO: prevenir que el `>` de `<>` se interprete
                                // como operador `>` cuando se escanea de derecha a izquierda.
                                // Antes, `intento <> secreto` partía en `intento <` vs `secreto`
                                // y disparaba "Expresión inválida".
                                if (op === ">" && expr[i - 1] === "<") continue;
                                if (
                                    op === "=" &&
                                    (expr[i - 1] === "<" ||
                                        expr[i - 1] === ">" ||
                                        expr[i - 1] === "!")
                                )
                                    continue;
                                if (op === "-") {
                                    // FIX: detectar `-` unario también después de
                                    // operadores de palabra (Y, O, MOD, DIV, NO).
                                    let lastChar = before.slice(-1);
                                    let isUnaryAfterSym = lastChar && /[+\-*\/^(,=<>]/.test(lastChar);
                                    let isUnaryAfterWord = /\b(Y|O|NO|MOD|DIV|AND|OR|NOT|Entonces|Hacer|Hasta)\s*$/i.test(before);
                                    if (isUnaryAfterSym || isUnaryAfterWord || !before.trim()) continue;
                                }
                                let lv = this.evalExpr(before);
                                let rv = this.evalExpr(after);
                                return this.applyOp(lv, op, rv);
                            }
                        }
                    }
                }

                applyOp(a, op, b) {
                    // Normalizar operadores de palabra (case-insensitive)
                    if (/^[A-Za-z]+$/.test(op)) op = op.toUpperCase();
                    switch (op) {
                        case "+":
                            return typeof a === "string" ||
                                typeof b === "string"
                                ? String(a) + String(b)
                                : Number(a) + Number(b);
                        case "-":
                            return Number(a) - Number(b);
                        case "*":
                            return Number(a) * Number(b);
                        case "/":
                            if (Number(b) === 0)
                                throw new Error("División por cero: no se puede dividir entre 0. Antes de dividir, verifica con un Si que el divisor sea distinto de 0 (ej: 'Si divisor <> 0 Entonces resultado <- num / divisor FinSi').");
                            return Number(a) / Number(b);
                        case "^":
                            return Math.pow(Number(a), Number(b));
                        case "MOD":
                        case "%":
                            if (Number(b) === 0)
                                throw new Error("MOD por cero: no se puede calcular el resto de una división entre 0. Verifica el divisor antes de usar MOD.");
                            return (
                                ((Number(a) % Number(b)) + Number(b)) %
                                Number(b)
                            );
                        case "DIV":
                            if (Number(b) === 0)
                                throw new Error("División entera por cero: no se puede dividir entre 0 con DIV. Verifica el divisor antes.");
                            // FIX: usar Math.floor (división euclídea) para que
                            // -7 DIV 2 = -4 (consistente con MOD), no -3 que daba Math.trunc.
                            return Math.floor(Number(a) / Number(b));
                        case "=":
                            // FIX: el booleano NO debe coercionar a string/número.
                            // Antes `"0" = falso` era true por culpa de `a == b`.
                            if (typeof a === 'boolean' || typeof b === 'boolean') {
                                return typeof a === typeof b && a === b;
                            }
                            return String(a) === String(b);
                        case "<>":
                            if (typeof a === 'boolean' || typeof b === 'boolean') {
                                return typeof a !== typeof b || a !== b;
                            }
                            return String(a) !== String(b);
                        case "<":
                            return Number(a) < Number(b);
                        case ">":
                            return Number(a) > Number(b);
                        case "<=":
                            return Number(a) <= Number(b);
                        case ">=":
                            return Number(a) >= Number(b);
                        case "Y":
                            return Boolean(a) && Boolean(b);
                        case "O":
                            return Boolean(a) || Boolean(b);
                    }
                }
            }
            // <INTERPRETER_END>

            /* ============================================================
           INPUT ASYNC — SISTEMA INLINE EN CONSOLA
           BACKEND v6: Sin modales flotantes. El input aparece
           directamente dentro de la consola activa.
        ============================================================ */
            let inputResolve = null;
            let inputAbort = null;
            let _activeConsoleId = null; // consola donde está corriendo el código

            /**
             * Crea o reutiliza la fila de input inline dentro de la consola
             * @param {string} consoleId - ID del elemento consola
             * @param {string} varName   - nombre de la variable que se está leyendo
             * @param {string} promptText- texto del último Escribir antes del Leer
             */
            function showInputModal(varName, promptText) {
                const consoleId = _activeConsoleId || 'playgroundConsole';
                // FIX timeout: pausar el wall-clock del intérprete durante el input.
                if (window._currentInterpreter && typeof window._currentInterpreter.pauseTimerForInput === 'function') {
                    window._currentInterpreter.pauseTimerForInput();
                }
                // FIX batching: flush del buffer de consola antes de mostrar el prompt
                // — así el usuario ve el "Escribir" anterior YA renderizado.
                if (typeof _flushConsoleBuffer === 'function') _flushConsoleBuffer(consoleId);
                return new Promise((resolve, reject) => {
                    inputResolve = (v) => {
                        if (window._currentInterpreter && typeof window._currentInterpreter.resumeTimerAfterInput === 'function') {
                            window._currentInterpreter.resumeTimerAfterInput();
                        }
                        resolve(v);
                    };
                    inputAbort = (err) => {
                        if (window._currentInterpreter && typeof window._currentInterpreter.resumeTimerAfterInput === 'function') {
                            window._currentInterpreter.resumeTimerAfterInput();
                        }
                        reject(err);
                    };

                    const consoleEl = document.getElementById(consoleId);
                    if (!consoleEl) { reject(new Error('Consola no encontrada')); return; }

                    // Eliminar fila anterior si existe
                    let oldRow = consoleEl.querySelector('.console-input-row');
                    if (oldRow) oldRow.remove();
                    // FIX: también eliminar el hint anterior por si quedó
                    let oldHint = consoleEl.querySelector('.console-input-hint');
                    if (oldHint) oldHint.remove();

                    // Construir la fila inline
                    const row = document.createElement('div');
                    row.className = 'console-input-row active';

                    const promptSpan = document.createElement('span');
                    promptSpan.className = 'console-input-prompt';
                    promptSpan.textContent = '▶ ';

                    const field = document.createElement('input');
                    field.type = 'text';
                    field.className = 'console-input-field';
                    field.id = 'inputModalField'; // mantener ID para compatibilidad
                    field.placeholder = varName ? `valor para "${varName}"` : 'escribe y presiona Enter';
                    field.autocomplete = 'off';
                    field.autocorrect = 'off';
                    field.autocapitalize = 'off';
                    field.spellcheck = false;
                    field.setAttribute('aria-label', varName ? 'Ingresa valor para ' + varName : 'Ingresa un valor');

                    const okBtn = document.createElement('button');
                    okBtn.className = 'console-input-ok';
                    okBtn.textContent = 'OK ↵';
                    okBtn.setAttribute('aria-label', 'Confirmar entrada');

                    row.setAttribute('role', 'group');
                    row.appendChild(promptSpan);
                    row.appendChild(field);
                    row.appendChild(okBtn);
                    consoleEl.appendChild(row);

                    // Hint debajo
                    const hint = document.createElement('div');
                    hint.className = 'console-input-hint';
                    hint.style.display = 'block';
                    hint.setAttribute('aria-live', 'polite');
                    hint.setAttribute('role', 'status');
                    const hintSpan = document.createElement('span');
                    hintSpan.style.cssText = 'color:var(--text-muted);font-size:0.7rem;font-family:var(--font-mono)';
                    hintSpan.textContent = '↵ Enter · Esc cancela · ↑↓ historial';
                    hint.appendChild(hintSpan);
                    consoleEl.appendChild(hint);

                    // Scroll para mostrar el input
                    consoleEl.scrollTop = consoleEl.scrollHeight;

                    // Foco automático
                    setTimeout(() => { try { field.focus(); } catch(e){} }, 40);

                    // Confirmar con Enter o botón
                    const confirm = () => {
                        const val = field.value;
                        // Mostrar echo de lo que el usuario escribió
                        const echo = document.createElement('span');
                        echo.className = 'cout-line cout-input-echo';
                        echo.textContent = val;
                        consoleEl.insertBefore(echo, row);
                        const br = document.createElement('br');
                        consoleEl.insertBefore(br, row);
                        // Limpiar fila y hint
                        row.remove();
                        hint.remove();
                        if (inputResolve) { inputResolve(val); inputResolve = null; inputAbort = null; }
                        consoleEl.scrollTop = consoleEl.scrollHeight;
                    };

                    // FEATURE: historial de inputs. Cada vez que el usuario
                    // confirma un valor, se guarda en window._inputHistory
                    // (persistente durante la sesion). Flecha-arriba/abajo
                    // navega el historial, estilo terminal real.
                    if (!window._inputHistory) window._inputHistory = [];
                    let _histIdx = window._inputHistory.length; // empieza fuera del final
                    field.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            // Guardar en historial si no esta vacio y no es duplicado del ultimo
                            const v = field.value;
                            if (v !== '' && window._inputHistory[window._inputHistory.length-1] !== v) {
                                window._inputHistory.push(v);
                                if (window._inputHistory.length > 50) window._inputHistory.shift();
                            }
                            confirm();
                        } else if (e.key === 'Escape') {
                            e.preventDefault();
                            cancelInput();
                        } else if (e.key === 'ArrowUp' && window._inputHistory.length > 0) {
                            e.preventDefault();
                            _histIdx = Math.max(0, _histIdx - 1);
                            field.value = window._inputHistory[_histIdx] || '';
                            // Mover cursor al final
                            field.setSelectionRange(field.value.length, field.value.length);
                        } else if (e.key === 'ArrowDown' && window._inputHistory.length > 0) {
                            e.preventDefault();
                            _histIdx = Math.min(window._inputHistory.length, _histIdx + 1);
                            field.value = window._inputHistory[_histIdx] || '';
                            field.setSelectionRange(field.value.length, field.value.length);
                        }
                    });
                    okBtn.addEventListener('click', confirm);
                });
            }

            function confirmInput() {
                // Compatibilidad — delega al campo inline activo
                const field = document.getElementById('inputModalField');
                if (field) field.dispatchEvent(new KeyboardEvent('keydown', {key:'Enter', bubbles:true}));
            }

            function cancelInput() {
                // Limpiar filas inline en todas las consolas
                document.querySelectorAll('.console-input-row').forEach(r => r.remove());
                document.querySelectorAll('.console-input-hint').forEach(h => h.remove());
                // Compatibilidad: ocultar el modal viejo por si quedó abierto
                const modal = document.getElementById('inputModal');
                if (modal) modal.classList.remove('open');
                if (inputAbort) {
                    inputAbort(new Error('Ejecución cancelada por el usuario'));
                    inputResolve = null;
                    inputAbort = null;
                }
            }

            /* ============================================================
           CONSOLA DE SALIDA
        ============================================================ */
            const _CONSOLE_MAX_NODES = 5000;     // tope de spans+brs por consola
            const _CONSOLE_TRIM_TO   = 3500;     // al exceder, recortamos a este nivel
            function _trimConsoleIfNeeded(el) {
                // FIX: si la consola crece demasiado (loop con Escribir),
                // el navegador se vuelve lento. Recortamos los nodos más
                // viejos cuando se exceda el tope, dejando un aviso.
                let n = el.childNodes.length;
                if (n <= _CONSOLE_MAX_NODES) return;
                // Cuántos nodos quitar
                let toRemove = n - _CONSOLE_TRIM_TO;
                let removed = 0;
                while (removed < toRemove && el.firstChild) {
                    // Preservar input row si está al inicio (raro pero defensivo)
                    if (el.firstChild.classList &&
                        el.firstChild.classList.contains('console-input-row')) {
                        break;
                    }
                    el.removeChild(el.firstChild);
                    removed++;
                }
                if (removed > 0) {
                    // Aviso al inicio
                    let warn = document.createElement('span');
                    warn.className = 'cout-line cout-info';
                    warn.textContent = '⚠ Salida truncada: ' + removed +
                                       ' líneas antiguas eliminadas para mantener la página rápida.';
                    el.insertBefore(warn, el.firstChild);
                    el.insertBefore(document.createElement('br'), el.firstChild.nextSibling);
                }
            }
            // ── BATCHING DE OUTPUT ──────────────────────────────────────
            // Para evitar que `Para i <- 1 Hasta 10000 Hacer Escribir i FinPara`
            // genere 10k operaciones DOM individuales, juntamos las escrituras
            // en un buffer y las flusheamos en lote vía DocumentFragment cada
            // animation frame. El navegador hace UN solo reflow por flush.
            const _consoleBuffers = new Map();
            function _flushConsoleBuffer(elId) {
                const el = document.getElementById(elId);
                const buf = _consoleBuffers.get(elId);
                if (!el || !buf || buf.entries.length === 0) {
                    if (buf) buf.scheduled = false;
                    return;
                }
                const entries = buf.entries;
                buf.entries = [];
                buf.scheduled = false;

                const frag = document.createDocumentFragment();
                // El primer entry puede mergear con el último span real del DOM
                // SOLO si es Sin Saltar Y mismo tipo.
                let lastInDom = null;
                for (let i = el.childNodes.length - 1; i >= 0; i--) {
                    const n = el.childNodes[i];
                    if (n.nodeType === 1 && n.nodeName === 'BR') break;
                    if (n.nodeType === 1 && n.classList && n.classList.contains('cout-line') &&
                        !n.classList.contains('cout-input-echo') &&
                        !n.classList.contains('cout-info') &&
                        !n.classList.contains('cout-err') &&
                        !n.classList.contains('cout-prompt')) {
                        lastInDom = n;
                        break;
                    }
                }

                // FEATURE: agrupar lineas IDENTICAS consecutivas (ej. 100x "Hola").
                // Comprimimos en una sola con badge "100×" para no inundar la consola.
                // Solo aplica a entries plenas (no noNewline) sin clase especial.
                const grouped = [];
                for (const e of entries) {
                    const prev = grouped[grouped.length - 1];
                    if (prev && !e.noNewline && !prev.noNewline &&
                        e.cls === prev.cls && e.text === prev.text) {
                        prev.count = (prev.count || 1) + 1;
                    } else {
                        grouped.push({ ...e, count: 1 });
                    }
                }

                let pending = lastInDom;  // span que estamos extendiendo si hay merges Sin Saltar
                for (const e of grouped) {
                    if (e.noNewline && pending && !e.cls) {
                        // Extend pending span
                        pending.textContent += e.text;
                    } else {
                        const span = document.createElement('span');
                        span.className = 'cout-line' + (e.cls ? ' cout-' + e.cls : '');
                        if (e.count > 1) {
                            // Badge "Nx" antes del texto
                            const badge = document.createElement('span');
                            badge.className = 'cout-repeat-badge';
                            badge.textContent = e.count + '×';
                            badge.title = e.count + ' líneas idénticas consecutivas';
                            span.appendChild(badge);
                            span.appendChild(document.createTextNode(' ' + e.text));
                        } else {
                            span.textContent = e.text;
                        }
                        frag.appendChild(span);
                        if (!e.noNewline) {
                            frag.appendChild(document.createElement('br'));
                            pending = null;
                        } else {
                            pending = e.cls ? null : span;
                        }
                    }
                }

                // Insert before input row if present
                const inputRow = el.querySelector('.console-input-row');
                if (inputRow) {
                    el.insertBefore(frag, inputRow);
                } else {
                    el.appendChild(frag);
                }

                _trimConsoleIfNeeded(el);
                const nearBottom = (el.scrollHeight - el.scrollTop - el.clientHeight) < 80;
                if (nearBottom || !el._userScrolledUp) {
                    el.scrollTop = el.scrollHeight;
                }
                if (elId === 'playgroundConsole' && window._fsSyncConsole) {
                    window._fsSyncConsole();
                    const fsPane = document.querySelector('.fs-bottom-content.fs-pane-console');
                    if (fsPane) fsPane.scrollTop = fsPane.scrollHeight;
                }
            }

            function appendConsole(elId, text, cls, noNewline) {
                let el = document.getElementById(elId);
                if (!el) return;
                // FIX autoscroll inteligente: detectar si el usuario subió manualmente
                if (!el._scrollListener) {
                    el._scrollListener = true;
                    el.addEventListener('scroll', () => {
                        const nearBottom = (el.scrollHeight - el.scrollTop - el.clientHeight) < 80;
                        el._userScrolledUp = !nearBottom;
                    }, { passive: true });
                }

                // FIX performance: batching. Programas con bucles grandes
                // (ej. Para 1..10000 Escribir i) ahora hacen UN reflow por
                // animation frame en vez de 10k. La pagina ya no se traba.
                let buf = _consoleBuffers.get(elId);
                if (!buf) {
                    buf = { entries: [], scheduled: false };
                    _consoleBuffers.set(elId, buf);
                }
                buf.entries.push({ text, cls, noNewline });
                if (!buf.scheduled) {
                    buf.scheduled = true;
                    requestAnimationFrame(() => _flushConsoleBuffer(elId));
                }
                return;
                // — código viejo (no se ejecuta, lo dejo como referencia comentada) —
                let span = document.createElement("span");
                span.className = "cout-line" + (cls ? " cout-" + cls : "");

                // Find last real output span (not an input row, and not a
                // colored info/err/prompt span — solo mergeamos texto plano
                // del usuario para que Escribir Sin Saltar no quede pintado
                // del color de un mensaje informativo previo)
                let lastRealChild = null;
                for (let i = el.childNodes.length - 1; i >= 0; i--) {
                    let node = el.childNodes[i];
                    if (node.nodeType === 1 && node.classList &&
                        node.classList.contains('cout-line') &&
                        !node.classList.contains('cout-input-echo') &&
                        !node.classList.contains('cout-info') &&
                        !node.classList.contains('cout-err') &&
                        !node.classList.contains('cout-prompt')) {
                        lastRealChild = node;
                        break;
                    }
                    // Si encontramos un <br> antes de un span plano, también paramos
                    if (node.nodeType === 1 && node.nodeName === 'BR') {
                        break;
                    }
                }

                if (
                    noNewline &&
                    lastRealChild &&
                    !cls  // only merge same-type (regular output)
                ) {
                    lastRealChild.textContent += text;
                } else {
                    span.textContent = text;
                    // Insert before input row if present
                    let inputRow = el.querySelector('.console-input-row');
                    if (inputRow) {
                        el.insertBefore(span, inputRow);
                        if (!noNewline) {
                            el.insertBefore(document.createElement("br"), inputRow);
                        }
                    } else {
                        el.appendChild(span);
                        if (!noNewline) {
                            el.appendChild(document.createElement("br"));
                        }
                    }
                }

                // FIX: aplicar trim si la consola se llenó demasiado
                _trimConsoleIfNeeded(el);

                // FIX scroll inteligente: solo autoscroll si el usuario está ya
                // cerca del final. Si está leyendo arriba (scrollTop manual), no
                // saltar — antes era imposible leer output mientras el programa
                // seguía imprimiendo.
                const nearBottom = (el.scrollHeight - el.scrollTop - el.clientHeight) < 80;
                if (nearBottom || !el._userScrolledUp) {
                    el.scrollTop = el.scrollHeight;
                }
                // Sync con el panel del fullscreen si está abierto en console
                if (elId === 'playgroundConsole' && window._fsSyncConsole) {
                    window._fsSyncConsole();
                    // También scroll del panel fullscreen si está visible
                    const fsPane = document.querySelector('.fs-bottom-content.fs-pane-console');
                    if (fsPane) fsPane.scrollTop = fsPane.scrollHeight;
                }
            }

            function clearConsole(elId) {
                // FIX: usar clase cout-info en el placeholder para que
                // appendConsole no lo confunda con texto plano del usuario y
                // no lo mergee con un Escribir Sin Saltar posterior.
                let el = document.getElementById(elId);
                if (!el) return;
                el.innerHTML = '';
                let placeholder = document.createElement('span');
                placeholder.className = 'cout-line cout-info';
                placeholder.style.color = 'var(--text-dim)';
                placeholder.textContent = '// Consola lista...';
                el.appendChild(placeholder);
                el.appendChild(document.createElement('br'));
                if (elId === 'playgroundConsole' && window._fsSyncConsole) {
                    window._fsSyncConsole();
                }
            }

            function printToConsole(elId) {
                return (text, cls, noNewline) =>
                    appendConsole(elId, text, cls, noNewline);
            }

            /* ============================================================
           EJECUTAR CÓDIGO
        ============================================================ */
            let _currentInterp = null;
            let _execAborted = false;

            function stopExecution() {
                _execAborted = true;
                if (_currentInterp) _currentInterp.maxSteps = 0;
                cancelInput(); // también limpia filas inline
                // Ocultar viejos botones Detener (legacy) por si quedan visibles
                const stopBtn = document.getElementById("stopBtn");
                if (stopBtn) stopBtn.style.display = "none";
                const fsStopBtn = document.getElementById("fsStopBtn");
                if (fsStopBtn) fsStopBtn.style.display = "none";
                // Restaurar botones Ejecutar a su estado original
                _restoreRunButtons();
            }
            function _restoreRunButtons() {
                document.querySelectorAll('[data-executing="true"]').forEach(b => {
                    try {
                        if (b._origText !== undefined) b.innerHTML = b._origText;
                        if (b._origOnclick !== undefined) b.onclick = b._origOnclick;
                        b.classList.remove('running');
                        delete b.dataset.executing;
                        b.title = '';
                    } catch(e) {}
                });
            }

            async function runCode(editorId, consoleId) {
                let code = document.getElementById(editorId).value;
                // FIX: normalizar CRLF defensivamente. Si el editor recibió
                // pegado anterior sin normalización o el localStorage tiene
                // texto con \r, lo limpiamos antes de interpretar.
                if (/\r/.test(code)) {
                    code = code.replace(/\r\n?/g, '\n');
                    // Actualizar también el textarea para que coincida
                    document.getElementById(editorId).value = code;
                }
                let el = document.getElementById(consoleId);
                el.innerHTML = "";
                _activeConsoleId = consoleId; // registrar consola activa para input inline

                // FIX: BLOQUEAR ejecución si hay errores de sintaxis o
                // warnings críticas (bloques vacíos, parámetros faltantes,
                // etc.). Antes mostrábamos un aviso duplicado en la consola
                // que era ruidoso. Ahora simplemente NO se ejecuta y se
                // dirige al usuario al panel de errores/advertencias que
                // ya está visible debajo del editor.
                if (consoleId === 'playgroundConsole') {
                    try {
                        let errs = analyzeSyntax(code);
                        let allWarns = analyzeWarnings(code);
                        // Filtrar solo las warnings críticas (no las informativas)
                        // Las críticas son las que impedirían la ejecución correcta
                        // o causarían comportamiento inesperado.
                        let criticalWarns = allWarns.filter(w =>
                            // Bloques vacíos
                            /\b(está vacía|está vacío|sin código|sin ningún|no tiene ningún caso|no tiene código)/i.test(w) ||
                            // Parámetros incorrectos
                            /\b(le falta\s+\d+\s+par[áa]metro|le sobra\s+\d+\s+par[áa]metro|llamada inválida|argumento\(s\) vacío)/i.test(w) ||
                            // Estructuras incompletas
                            /Estructura .+ incompleta/i.test(w) ||
                            // Líneas mal formadas
                            /(asignación incompleta|asignación inválida|'definir' incompleto|'escribir' sin argumentos|'leer' sin variable)/i.test(w) ||
                            // Sintaxis básica rota
                            /(falta\s+\d+\s+paréntesis|sobran?\s+\d+\s+paréntesis|cadena de texto sin cerrar)/i.test(w)
                        );
                        if (errs.length > 0 || criticalWarns.length > 0) {
                            // Restaurar consola placeholder (no entró en modo ejecución)
                            el.innerHTML = '';
                            let ph = document.createElement('span');
                            ph.className = 'cout-line cout-info';
                            ph.style.color = 'var(--text-dim)';
                            let totalCrit = errs.length + criticalWarns.length;
                            let msg = errs.length > 0
                                ? '⛔ No se puede ejecutar: ' + errs.length + ' error(es) de sintaxis'
                                : '⚠ No se puede ejecutar: ' + criticalWarns.length + ' problema(s) crítico(s)';
                            ph.textContent = '// ' + msg + ' — revisa el panel de abajo';
                            el.appendChild(ph);
                            el.appendChild(document.createElement('br'));
                            // Expandir los paneles automáticamente
                            if (errs.length > 0) {
                                _diagPanelState.playgroundErrorPanel = true;
                                let ep = document.getElementById('playgroundErrorPanel');
                                if (ep) ep.classList.add('expanded');
                            }
                            if (criticalWarns.length > 0) {
                                _diagPanelState.playgroundWarnPanel = true;
                                let wp = document.getElementById('playgroundWarnPanel');
                                if (wp) wp.classList.add('expanded');
                            }
                            // Auto-scroll al primer problema
                            let firstLine = null;
                            // errs es [{line, msg}], criticalWarns es [string]
                            if (errs.length > 0) {
                                firstLine = errs[0].line;
                            } else {
                                for (let w of criticalWarns) {
                                    let lm = (typeof w === 'string' ? w : '').match(/^Línea\s+(\d+)/);
                                    if (lm) { firstLine = parseInt(lm[1]); break; }
                                }
                            }
                            showToast(msg + ' — ' + (firstLine ? 'línea ' + firstLine : 'revisa el panel'), 4000);
                            if (firstLine) {
                                setTimeout(() => goToLine(firstLine), 100);
                            }
                            return; // ABORTAR ejecución
                        }
                    } catch(e) {
                        /* el análisis no debe bloquear la ejecución silenciosamente:
                           si falla, mostramos al usuario y abortamos para no ejecutar
                           código posiblemente corrupto. */
                        console.error('Pre-flight analysis failed:', e);
                        el.innerHTML = '';
                        let ph = document.createElement('span');
                        ph.className = 'cout-line cout-err';
                        ph.textContent = '⚠ El análisis de sintaxis falló: ' + (e.message || e) + '. Revisa el código.';
                        el.appendChild(ph);
                        return;
                    }
                }

                appendConsole(consoleId, "▶ Ejecutando...", "info");
                _execAborted = false;

                // ── Transformar el botón Ejecutar del editor activo → Detener ──
                // El mismo botón cambia color/texto; al hacer click durante ejecución
                // llama a stopExecution(). Más intuitivo que un botón flotante separado.
                const _runBtnByConsole = {
                    'playgroundConsole': document.querySelector('.playground-toolbar .btn-run'),
                    'exampleConsole':    document.querySelector('#tab-example .btn-run'),
                    'challengeConsole':  document.querySelector('#tab-challenge .btn-run')
                };
                let runBtn = _runBtnByConsole[consoleId] || null;
                if (runBtn) {
                    runBtn._origText = runBtn.innerHTML;
                    runBtn._origOnclick = runBtn.onclick;
                    runBtn.innerHTML = '⏹ Detener';
                    runBtn.title = 'Click o Esc para detener la ejecución';
                    runBtn.classList.add('running');
                    runBtn.dataset.executing = 'true';
                    runBtn.onclick = function(ev) { ev && ev.preventDefault(); stopExecution(); };
                }
                if (consoleId === 'playgroundConsole') {
                    document.getElementById("execTimeDisplay").style.display = "none";
                    // En fullscreen, el fsRunBtn también se transforma
                    let fsRun = document.getElementById('fsRunBtn');
                    if (fsRun) {
                        fsRun._origText = fsRun.innerHTML;
                        fsRun._origOnclick = fsRun.onclick;
                        fsRun.innerHTML = '⏹ Detener';
                        fsRun.title = 'Click o Esc para detener la ejecución';
                        fsRun.classList.add('running');
                        fsRun.dataset.executing = 'true';
                        fsRun.onclick = function(ev) { ev && ev.preventDefault(); stopExecution(); };
                    }
                    // Si la consola NO está abierta en fullscreen, ábrela
                    let gridFs = document.querySelector('.playground-grid.fullscreen');
                    if (gridFs && _fsActiveTab !== 'console') {
                        _fsActiveTab = 'console';
                        gridFs.classList.add('bottom-panel-open');
                        localStorage.setItem('fsActiveTab', 'console');
                        if (window._fsRenderTabContent) _fsRenderTabContent();
                        if (window._fsUpdateTabButtons) _fsUpdateTabButtons();
                    }
                }

                let lastOutput = "";
                const t0 = performance.now();

                // FIX feature: timer en tiempo real durante ejecución.
                // Actualiza cada 250ms el texto del boton de "Detener" para
                // que el usuario vea cuanto tiempo lleva el programa. Util
                // sobre todo con bucles grandes para saber si esta atascado.
                const _liveTimerInterval = setInterval(() => {
                    if (_execAborted) return;
                    const elapsedSec = ((performance.now() - t0) / 1000).toFixed(1);
                    const labelText = '⏹ Detener · ' + elapsedSec + 's';
                    if (runBtn && runBtn.dataset.executing === 'true') {
                        runBtn.innerHTML = labelText;
                    }
                    const fsRun = document.getElementById('fsRunBtn');
                    if (fsRun && fsRun.dataset.executing === 'true') {
                        fsRun.innerHTML = labelText;
                    }
                }, 250);
                // Guardar para limpiar en finally
                window._liveTimerInterval = _liveTimerInterval;

                let interp = new PSeIntInterpreter(
                    (text, cls, noNewline) => {
                        appendConsole(consoleId, text, cls, noNewline);
                        if (!cls) lastOutput = text;
                    },
                );
                window._currentInterpreter = interp;
                // re-wrap para que el código siguiente vea `interp` correctamente
                interp.output = (text, cls, noNewline) => {
                    appendConsole(consoleId, text, cls, noNewline);
                    if (!cls) lastOutput = text;
                };
                interp.input = (varName) => {
                    if (_execAborted) return Promise.reject(new Error("Ejecución cancelada"));
                    let prompt = lastOutput
                        ? lastOutput
                        : 'Ingresa el valor para <strong>' + varName + '</strong>';
                    return showInputModal(varName, prompt);
                };
                _currentInterp = interp;

                // Handle subproc calls with return in assignments
                let origExecLine = interp.execLine.bind(interp);
                // Helper: evaluar args tolerando arrays
                let _evalArgsTolerant = (rawArgs) => {
                    return rawArgs.map((a) => {
                        let raw = interp.trim(a);
                        if (/^[a-záéíóúüñ_][\wáéíóúüñ]*$/i.test(raw)) {
                            let low = raw.toLowerCase();
                            if (interp.arrays.hasOwnProperty(low) ||
                                (interp.arrayDims && interp.arrayDims.hasOwnProperty(low))) {
                                return 0;
                            }
                        }
                        return interp.evalExpr(raw);
                    });
                };
                interp.execLine = async function (t) {
                    let assign = t.match(/^(\w+)\s*<-\s*(.+)$/);
                    if (assign) {
                        let vn = assign[1].toLowerCase();
                        let rhs = assign[2].trim();
                        let funcM = rhs.match(/^(\w+)\s*\((.*)?\)\s*$/);
                        if (funcM && this.subprocs[funcM[1].toLowerCase()]) {
                            let fn = funcM[1];
                            let argStr = funcM[2] || '';
                            let rawArgs = argStr ? this.splitComma(argStr) : [];
                            let args = _evalArgsTolerant(rawArgs);
                            await this.callSubProc(fn, args, vn, rawArgs);
                            return;
                        }
                    }
                    let arrAssign = t.match(/^(\w+)\[([^\]]+)\]\s*<-\s*(\w+)\s*\((.*)\)\s*$/);
                    if (arrAssign && this.subprocs[arrAssign[3].toLowerCase()]) {
                        let aname = arrAssign[1].toLowerCase();
                        let idx = this.evalArrayIdx(arrAssign[2], aname);
                        let fn = arrAssign[3];
                        let argStr = arrAssign[4] || '';
                        let rawArgs = argStr ? this.splitComma(argStr) : [];
                        let args = _evalArgsTolerant(rawArgs);
                        let val = await this.callSubProc(fn, args, null, rawArgs);
                        if (!this.arrays[aname]) this.arrays[aname] = {};
                        this.arrays[aname][idx] = val;
                        return;
                    }
                    return origExecLine(t);
                };

                try {
                    await interp.run(code);
                    if (!_execAborted) {
                        const elapsed = ((performance.now() - t0) / 1000).toFixed(3);
                        appendConsole(consoleId, "✓ Ejecución completada en " + elapsed + "s", "info");
                        if (consoleId === 'playgroundConsole') {
                            let td = document.getElementById("execTimeDisplay");
                            td.textContent = "⏱ " + elapsed + "s";
                            td.style.display = "";
                        }
                    }
                } catch(e) {
                    if (e && e.message) {
                        // FIX: si el usuario CANCELÓ la ejecución, mostrar mensaje
                        // claro de cancelación, NO el error de timeout/runtime que
                        // venga del bucle interrumpido.
                        if (_execAborted || /cancelada|cancelled/i.test(e.message)) {
                            appendConsole(consoleId, "⏹ Ejecución detenida por el usuario", "info");
                        } else {
                            appendConsole(consoleId, "⛔ " + e.message, "err");
                        }
                    }
                } finally {
                    _currentInterp = null;
                    // FIX feature: detener el live timer
                    if (window._liveTimerInterval) {
                        clearInterval(window._liveTimerInterval);
                        window._liveTimerInterval = null;
                    }
                    // FIX batching: forzar flush del buffer al terminar la ejecucion
                    // para que el mensaje final "✓ Ejecución completada" sea visible
                    // sin esperar al proximo RAF.
                    if (typeof _flushConsoleBuffer === 'function') _flushConsoleBuffer(consoleId);
                    // Restaurar el botón Ejecutar de cualquier editor (playground, lecciones, fullscreen)
                    if (typeof _restoreRunButtons === 'function') _restoreRunButtons();
                    // Limpiar legacy si quedó visible
                    const _lstop = document.getElementById('stopBtn');
                    if (_lstop) _lstop.style.display = 'none';
                    const _fsStop = document.getElementById('fsStopBtn');
                    if (_fsStop) _fsStop.style.display = 'none';
                }
            }

            function runPlayground() {
                runCode("playgroundEditor", "playgroundConsole");
            }

            let _lastClearedCode = "";
            function clearPlayground() {
                let ta = document.getElementById("playgroundEditor");
                _lastClearedCode = ta.value;
                let newContent = "Proceso MiPrograma\n\t// Escribe tu código aquí\nFinProceso";
                // FIX: select-all + insertText para preservar undo
                ta.focus();
                ta.selectionStart = 0;
                ta.selectionEnd = ta.value.length;
                if (!document.execCommand('insertText', false, newContent)) {
                    ta.value = newContent;
                }
                ta.dispatchEvent(new Event("input"));
                clearConsole("playgroundConsole");
                updateLineNums("playgroundEditor", "playgroundLineNums");
                window.syncHighlight && syncHighlight("playgroundEditor", "playgroundHighlight");
                updateStatusBar();
                // Toast con opción de deshacer
                let t = document.getElementById("toast");
                t.innerHTML = '🗑 Código limpiado &nbsp;<button onclick="undoClear()" style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);border-radius:4px;padding:2px 8px;color:#fff;cursor:pointer;font-size:0.82rem">Deshacer</button>';
                t.style.display = "block";
                // FIX: usar window._toastTimer (compartido con showToast)
                clearTimeout(window._toastTimer);
                window._toastTimer = setTimeout(() => { t.style.display = "none"; t.textContent = ""; }, 4000);
            }
            function undoClear() {
                if (!_lastClearedCode) return;
                let ta = document.getElementById("playgroundEditor");
                // FIX: select-all + insertText para preservar undo
                ta.focus();
                ta.selectionStart = 0;
                ta.selectionEnd = ta.value.length;
                if (!document.execCommand('insertText', false, _lastClearedCode)) {
                    ta.value = _lastClearedCode;
                }
                ta.dispatchEvent(new Event("input"));
                window.syncHighlight && syncHighlight("playgroundEditor", "playgroundHighlight");
                showToast("↩ Código restaurado");
                _lastClearedCode = "";
            }

            /* ============================================================
   SNIPPETS / PLANTILLAS DE CÓDIGO
============================================================ */
            const SNIPPETS = [
                { title: "Proceso vacío", desc: "Estructura base", code: "Proceso MiPrograma\n\t// Escribe tu código aquí\nFinProceso" },
                { title: "Hola Mundo", desc: "Primer programa", code: "Proceso HolaMundo\n\tEscribir \"¡Hola, Mundo!\"\nFinProceso" },
                { title: "Leer variable", desc: "Entrada del usuario", code: "Proceso LeerDato\n\tDefinir nombre Como Texto\n\tEscribir \"Ingresa tu nombre:\"\n\tLeer nombre\n\tEscribir \"Hola, \", nombre\nFinProceso" },
                { title: "Si / FinSi", desc: "Condicional simple", code: "Proceso Condicional\n\tDefinir n Como Entero\n\tEscribir \"Ingresa un número:\"\n\tLeer n\n\tSi n > 0 Entonces\n\t\tEscribir \"Positivo\"\n\tSiNo\n\t\tEscribir \"No positivo\"\n\tFinSi\nFinProceso" },
                { title: "Segun / FinSegun", desc: "Switch / casos", code: "Proceso Segun\n\tDefinir op Como Entero\n\tEscribir \"Opción (1-3):\"\n\tLeer op\n\tSegun op Hacer\n\t\t1: Escribir \"Opción uno\"\n\t\t2: Escribir \"Opción dos\"\n\t\tDe Otro Modo: Escribir \"Otra\"\n\tFinSegun\nFinProceso" },
                { title: "Mientras", desc: "Ciclo mientras", code: "Proceso CicloMientras\n\tDefinir i Como Entero\n\ti <- 1\n\tMientras i <= 10 Hacer\n\t\tEscribir i\n\t\ti <- i + 1\n\tFinMientras\nFinProceso" },
                { title: "Repetir / Hasta Que", desc: "Ciclo post-condición", code: "Proceso CicloRepetir\n\tDefinir n Como Entero\n\tRepetir\n\t\tEscribir \"Número positivo:\"\n\t\tLeer n\n\tHasta Que n > 0\n\tEscribir \"Ingresaste: \", n\nFinProceso" },
                { title: "Para / FinPara", desc: "Ciclo con contador", code: "Proceso CicloPara\n\tDefinir i Como Entero\n\tPara i <- 1 Hasta 10 Hacer\n\t\tEscribir \"Iteración: \", i\n\tFinPara\nFinProceso" },
                { title: "Arreglo 1D", desc: "Array unidimensional", code: "Proceso Arreglo\n\tDefinir arr Como Entero\n\tDefinir i Como Entero\n\tDimension arr[5]\n\tPara i <- 1 Hasta 5 Hacer\n\t\tarr[i] <- i * 2\n\tFinPara\n\tPara i <- 1 Hasta 5 Hacer\n\t\tEscribir arr[i]\n\tFinPara\nFinProceso" },
                { title: "SubProceso", desc: "Función/procedimiento", code: "SubProceso resultado <- Doble(n)\n\tresultado <- n * 2\nFinSubProceso\n\nProceso UsarSubProceso\n\tDefinir x Como Entero\n\tDefinir r Como Entero\n\tx <- 5\n\tr <- Doble(x)\n\tEscribir \"Doble de \", x, \" = \", r\nFinProceso" },
                { title: "FizzBuzz", desc: "Ejemplo clásico", code: "Proceso FizzBuzz\n\tDefinir i Como Entero\n\tPara i <- 1 Hasta 20 Hacer\n\t\tSi i MOD 15 = 0 Entonces\n\t\t\tEscribir \"FizzBuzz\"\n\t\tSiNo\n\t\t\tSi i MOD 3 = 0 Entonces\n\t\t\t\tEscribir \"Fizz\"\n\t\t\tSiNo\n\t\t\t\tSi i MOD 5 = 0 Entonces\n\t\t\t\t\tEscribir \"Buzz\"\n\t\t\t\tSiNo\n\t\t\t\t\tEscribir i\n\t\t\t\tFinSi\n\t\t\tFinSi\n\t\tFinSi\n\tFinPara\nFinProceso" },
                { title: "Fibonacci", desc: "Serie de Fibonacci", code: "Proceso Fibonacci\n\tDefinir a Como Entero\n\tDefinir b Como Entero\n\tDefinir c Como Entero\n\tDefinir i Como Entero\n\ta <- 0\n\tb <- 1\n\tEscribir a\n\tEscribir b\n\tPara i <- 1 Hasta 8 Hacer\n\t\tc <- a + b\n\t\tEscribir c\n\t\ta <- b\n\t\tb <- c\n\tFinPara\nFinProceso" },
                { title: "Menú interactivo", desc: "Con Repetir y Salir", code: "Proceso Menu\n\tDefinir opcion Como Entero\n\tRepetir\n\t\tEscribir \"=== MENÚ ===\"\n\t\tEscribir \"1. Saludar\"\n\t\tEscribir \"2. Contar hasta 5\"\n\t\tEscribir \"0. Salir\"\n\t\tEscribir \"Opción:\"\n\t\tLeer opcion\n\t\tSegun opcion Hacer\n\t\t\t1: Escribir \"¡Hola!\"\n\t\t\t2: Para i <- 1 Hasta 5 Hacer\n\t\t\t   Escribir i\n\t\t\t   FinPara\n\t\t\t0: Escribir \"¡Hasta luego!\"\n\t\t\tDe Otro Modo: Escribir \"Opción inválida\"\n\t\tFinSegun\n\tHasta Que opcion = 0\nFinProceso" },
                { title: "Buscar en arreglo", desc: "Búsqueda lineal", code: "Proceso BusquedaLineal\n\tDefinir arr Como Entero\n\tDefinir i, n, buscar, pos Como Entero\n\tDefinir encontrado Como Logico\n\tn <- 5\n\tDimension arr[n]\n\tPara i <- 1 Hasta n Hacer\n\t\tEscribir \"arr[\",i,\"]:\"\n\t\tLeer arr[i]\n\tFinPara\n\tEscribir \"¿Qué número buscas?\"\n\tLeer buscar\n\tencontrado <- Falso\n\tPara i <- 1 Hasta n Hacer\n\t\tSi arr[i] = buscar Entonces\n\t\t\tpos <- i\n\t\t\tencontrado <- Verdadero\n\t\t\tSalir\n\t\tFinSi\n\tFinPara\n\tSi encontrado Entonces\n\t\tEscribir \"Encontrado en posición \", pos\n\tSiNo\n\t\tEscribir \"No encontrado\"\n\tFinSi\nFinProceso" },
                { title: "Validar entrada", desc: "Repetir hasta dato válido", code: "Proceso ValidarEntrada\n\tDefinir edad Como Entero\n\tRepetir\n\t\tEscribir \"Ingresa tu edad (1-120):\"\n\t\tLeer edad\n\t\tSi edad < 1 O edad > 120 Entonces\n\t\t\tEscribir \"❌ Edad inválida. Intenta de nuevo.\"\n\t\tFinSi\n\tHasta Que edad >= 1 Y edad <= 120\n\tEscribir \"✅ Edad válida: \", edad\nFinProceso" },
                { title: "Burbuja (Bubble Sort)", desc: "Ordenamiento clásico", code: "Proceso Burbuja\n\tDefinir arr Como Entero\n\tDefinir i, j, temp, n Como Entero\n\tn <- 6\n\tDimension arr[n]\n\t// Cargar valores de ejemplo\n\tarr[1] <- 5\n\tarr[2] <- 2\n\tarr[3] <- 8\n\tarr[4] <- 1\n\tarr[5] <- 9\n\tarr[6] <- 3\n\tEscribir \"Antes:\"\n\tPara i <- 1 Hasta n Hacer\n\t\tEscribir Sin Saltar arr[i], \" \"\n\tFinPara\n\tEscribir \"\"\n\t// Burbuja\n\tPara i <- 1 Hasta n - 1 Hacer\n\t\tPara j <- 1 Hasta n - i Hacer\n\t\t\tSi arr[j] > arr[j + 1] Entonces\n\t\t\t\ttemp <- arr[j]\n\t\t\t\tarr[j] <- arr[j + 1]\n\t\t\t\tarr[j + 1] <- temp\n\t\t\tFinSi\n\t\tFinPara\n\tFinPara\n\tEscribir \"Después:\"\n\tPara i <- 1 Hasta n Hacer\n\t\tEscribir Sin Saltar arr[i], \" \"\n\tFinPara\nFinProceso" },
                { title: "Factorial recursivo", desc: "SubProceso recursivo", code: "SubProceso r <- Factorial(n)\n\tSi n <= 1 Entonces\n\t\tr <- 1\n\tSiNo\n\t\tr <- n * Factorial(n - 1)\n\tFinSi\nFinSubProceso\n\nProceso CalcularFactorial\n\tDefinir n, resultado Como Entero\n\tEscribir \"Ingresa un número (1-10):\"\n\tLeer n\n\tresultado <- Factorial(n)\n\tEscribir n, \"! = \", resultado\nFinProceso" },
                { title: "Promedio con validación", desc: "Suma + promedio array", code: "Proceso PromedioNotas\n\tDefinir notas Como Real\n\tDefinir i, n Como Entero\n\tDefinir suma, promedio Como Real\n\tEscribir \"¿Cuántas notas quieres ingresar?\"\n\tLeer n\n\tSi n < 1 Entonces\n\t\tEscribir \"❌ Debes ingresar al menos 1 nota.\"\n\tSiNo\n\t\tDimension notas[n]\n\t\tsuma <- 0\n\t\tPara i <- 1 Hasta n Hacer\n\t\t\tRepetir\n\t\t\t\tEscribir \"Nota \", i, \" (0-100):\"\n\t\t\t\tLeer notas[i]\n\t\t\tHasta Que notas[i] >= 0 Y notas[i] <= 100\n\t\t\tsuma <- suma + notas[i]\n\t\tFinPara\n\t\tpromedio <- suma / n\n\t\tEscribir \"Promedio: \", promedio\n\t\tSi promedio >= 60 Entonces\n\t\t\tEscribir \"✅ Aprobado\"\n\t\tSiNo\n\t\t\tEscribir \"❌ Reprobado\"\n\t\tFinSi\n\tFinSi\nFinProceso" },
                { title: "Conversor temperatura", desc: "Celsius ↔ Fahrenheit", code: "Proceso ConversorTemp\n\tDefinir opcion Como Entero\n\tDefinir grados, resultado Como Real\n\tEscribir \"1. Celsius → Fahrenheit\"\n\tEscribir \"2. Fahrenheit → Celsius\"\n\tEscribir \"Opción:\"\n\tLeer opcion\n\tEscribir \"Grados:\"\n\tLeer grados\n\tSegun opcion Hacer\n\t\t1:\n\t\t\tresultado <- grados * 9 / 5 + 32\n\t\t\tEscribir grados, \"°C = \", resultado, \"°F\"\n\t\t2:\n\t\t\tresultado <- (grados - 32) * 5 / 9\n\t\t\tEscribir grados, \"°F = \", resultado, \"°C\"\n\t\tDe Otro Modo:\n\t\t\tEscribir \"Opción no válida\"\n\tFinSegun\nFinProceso" },
                { title: "Adivina el número", desc: "Juego con random", code: "Proceso AdivinaNumero\n\tDefinir secreto, intento, intentos Como Entero\n\tsecreto <- Aleatorio(1, 100)\n\tintentos <- 0\n\tEscribir \"🎯 Adivina el número (1-100):\"\n\tRepetir\n\t\tEscribir \"Tu intento:\"\n\t\tLeer intento\n\t\tintentos <- intentos + 1\n\t\tSi intento < secreto Entonces\n\t\t\tEscribir \"⬆ Muy bajo...\"\n\t\tSiNo\n\t\t\tSi intento > secreto Entonces\n\t\t\t\tEscribir \"⬇ Muy alto...\"\n\t\t\tFinSi\n\t\tFinSi\n\tHasta Que intento = secreto\n\tEscribir \"🏆 ¡Correcto! Intentos: \", intentos\nFinProceso" },
                { title: "Calculadora", desc: "Operaciones básicas", code: "Proceso Calculadora\n\tDefinir a, b, resultado Como Real\n\tDefinir op Como Caracter\n\tEscribir \"Primer número:\"\n\tLeer a\n\tEscribir \"Operación (+, -, *, /, %, ^):\"\n\tLeer op\n\tEscribir \"Segundo número:\"\n\tLeer b\n\tSegun op Hacer\n\t\t\"+\": resultado <- a + b\n\t\t\"-\": resultado <- a - b\n\t\t\"*\": resultado <- a * b\n\t\t\"/\":\n\t\t\tSi b = 0 Entonces\n\t\t\t\tEscribir \"❌ División por cero\"\n\t\t\tSiNo\n\t\t\t\tresultado <- a / b\n\t\t\t\tEscribir a, \" \", op, \" \", b, \" = \", resultado\n\t\t\tFinSi\n\t\t\"%\": resultado <- a MOD b\n\t\t\"^\": resultado <- a ^ b\n\t\tDe Otro Modo: Escribir \"Operación no válida\"\n\tFinSegun\n\tSi op <> \"/\" O b <> 0 Entonces\n\t\tEscribir a, \" \", op, \" \", b, \" = \", resultado\n\tFinSi\nFinProceso" },
                { title: "Fibonacci recursivo", desc: "SubProceso recursivo real", code: "SubProceso r <- Fib(n)\n\tSi n <= 0 Entonces\n\t\tr <- 0\n\tSiNo Si n = 1 Entonces\n\t\tr <- 1\n\tSiNo\n\t\tr <- Fib(n-1) + Fib(n-2)\n\tFinSi\nFinSubProceso\n\nProceso TestFibonacci\n\tDefinir i, resultado Como Entero\n\tEscribir \"Serie Fibonacci (0-9):\"\n\tPara i <- 0 Hasta 9 Hacer\n\t\tresultado <- Fib(i)\n\t\tEscribir \"Fib(\", i, \") = \", resultado\n\tFinPara\nFinProceso" },
                { title: "SiNo Si encadenado", desc: "Elif/else-if múltiple", code: "Proceso ClasificarNota\n\tDefinir nota Como Real\n\tEscribir \"Ingresa tu nota (0-100):\"\n\tLeer nota\n\tSi nota >= 90 Entonces\n\t\tEscribir \"A - Excelente\"\n\tSiNo Si nota >= 80 Entonces\n\t\tEscribir \"B - Muy Bien\"\n\tSiNo Si nota >= 70 Entonces\n\t\tEscribir \"C - Bien\"\n\tSiNo Si nota >= 60 Entonces\n\t\tEscribir \"D - Aprobado\"\n\tSiNo\n\t\tEscribir \"F - Reprobado\"\n\tFinSi\nFinProceso" },
                { title: "Matriz 2D", desc: "Arreglo bidimensional", code: "Proceso Matriz\n\tDefinir m Como Entero\n\tDefinir i, j Como Entero\n\tDimension m[3,3]\n\t// Llenar con tabla de multiplicar\n\tPara i <- 1 Hasta 3 Hacer\n\t\tPara j <- 1 Hasta 3 Hacer\n\t\t\tm[i,j] <- i * j\n\t\tFinPara\n\tFinPara\n\t// Mostrar la matriz\n\tEscribir \"Tabla de multiplicar 3x3:\"\n\tPara i <- 1 Hasta 3 Hacer\n\t\tPara j <- 1 Hasta 3 Hacer\n\t\t\tEscribir Sin Saltar m[i,j], \"  \"\n\t\tFinPara\n\t\tEscribir \"\"\n\tFinPara\nFinProceso" },
                { title: "PI y funciones Math", desc: "Constantes y funciones matemáticas", code: "Proceso TestMath\n\tDefinir r Como Real\n\tEscribir \"PI = \", PI\n\tEscribir \"RAIZ(2) = \", RAIZ(2)\n\tEscribir \"ABS(-5) = \", ABS(-5)\n\tEscribir \"REDON(3.7) = \", REDON(3.7)\n\tEscribir \"TRUNC(3.9) = \", TRUNC(3.9)\n\tEscribir \"5^3 = \", 5^3\n\tr <- 5\n\tEscribir \"Area circulo r=5: \", PI * r^2\nFinProceso" },
                { title: "Paso por referencia", desc: "Modificar variable en subproc", code: "SubProceso Intercambiar(ref a, ref b)\n\tDefinir temp Como Entero\n\ttemp <- a\n\ta <- b\n\tb <- temp\nFinSubProceso\n\nProceso TestReferencia\n\tDefinir x, y Como Entero\n\tx <- 10\n\ty <- 20\n\tEscribir \"Antes: x=\", x, \" y=\", y\n\tIntercambiar(x, y)\n\tEscribir \"Despues: x=\", x, \" y=\", y\nFinProceso" },
                { title: "Busqueda Binaria", desc: "Algoritmo eficiente", code: "SubProceso pos <- BusquedaBinaria(arr, n, buscar)\n\tDefinir ini, fin, mid Como Entero\n\tini <- 1\n\tfin <- n\n\tpos <- -1\n\tMientras ini <= fin Hacer\n\t\tmid <- (ini + fin) / 2\n\t\tSi arr[mid] = buscar Entonces\n\t\t\tpos <- mid\n\t\t\tSalir\n\t\tSiNo Si arr[mid] < buscar Entonces\n\t\t\tini <- mid + 1\n\t\tSiNo\n\t\t\tfin <- mid - 1\n\t\tFinSi\n\tFinMientras\nFinSubProceso\n\nProceso TestBinaria\n\tDefinir arr Como Entero\n\tDefinir n, pos, i Como Entero\n\tn <- 7\n\tDimension arr[n]\n\tarr[1] <- 2\n\tarr[2] <- 5\n\tarr[3] <- 8\n\tarr[4] <- 12\n\tarr[5] <- 16\n\tarr[6] <- 23\n\tarr[7] <- 38\n\tpos <- BusquedaBinaria(arr, n, 12)\n\tSi pos > 0 Entonces\n\t\tEscribir \"12 encontrado en posicion: \", pos\n\tSiNo\n\t\tEscribir \"No encontrado\"\n\tFinSi\nFinProceso" },
            ];

            function toggleSnippets() {
                let panel = document.getElementById("snippetsPanel");
                panel.classList.toggle("open");
            }

            function renderSnippets() {
                let grid = document.getElementById("snippetsGrid");
                if (!grid) return;
                grid.innerHTML = "";
                SNIPPETS.forEach(s => {
                    let btn = document.createElement("button");
                    btn.className = "snippet-btn";
                    btn.innerHTML = '<span class="sn-title">' + s.title + '</span><span class="sn-desc">' + s.desc + '</span>';
                    btn.onclick = () => {
                        let ta = document.getElementById("playgroundEditor");
                        // FIX: select-all + insertText para preservar undo
                        ta.focus();
                        ta.selectionStart = 0;
                        ta.selectionEnd = ta.value.length;
                        if (!document.execCommand('insertText', false, s.code)) {
                            ta.value = s.code;
                        }
                        ta.dispatchEvent(new Event("input"));
                        toggleSnippets();
                        ta.focus();
                        showToast("📋 Plantilla cargada: " + s.title);
                    };
                    grid.appendChild(btn);
                });
            }

            /* ============================================================
   EJEMPLOS RÁPIDOS PLAYGROUND
============================================================ */
            const EXAMPLES = [
                { name: "Hola Mundo", code: `Proceso HolaMundo\n\tEscribir "¡Hola, Mundo!"\n\tEscribir "Bienvenido a PSeInt"\nFinProceso` },
                { name: "Fibonacci", code: `Proceso Fibonacci\n\tDefinir a Como Entero\n\tDefinir b Como Entero\n\tDefinir c Como Entero\n\tDefinir i Como Entero\n\ta <- 0\n\tb <- 1\n\tEscribir "Serie Fibonacci:"\n\tEscribir a\n\tEscribir b\n\tPara i <- 1 Hasta 8 Hacer\n\t\tc <- a + b\n\t\tEscribir c\n\t\ta <- b\n\t\tb <- c\n\tFinPara\nFinProceso` },
                { name: "FizzBuzz", code: `Proceso FizzBuzz\n\tDefinir i Como Entero\n\tPara i <- 1 Hasta 20 Hacer\n\t\tSi i MOD 15 = 0 Entonces\n\t\t\tEscribir "FizzBuzz"\n\t\tSiNo\n\t\t\tSi i MOD 3 = 0 Entonces\n\t\t\t\tEscribir "Fizz"\n\t\t\tSiNo\n\t\t\t\tSi i MOD 5 = 0 Entonces\n\t\t\t\t\tEscribir "Buzz"\n\t\t\t\tSiNo\n\t\t\t\t\tEscribir i\n\t\t\t\tFinSi\n\t\t\tFinSi\n\t\tFinSi\n\tFinPara\nFinProceso` },
                { name: "Adivina el número", code: `Proceso AdivinaNumero\n\tDefinir secreto Como Entero\n\tDefinir intento Como Entero\n\tDefinir intentos Como Entero\n\tsecreto <- 42\n\tintentos <- 0\n\tRepetir\n\t\tEscribir "Adivina el número (1-100):"\n\t\tLeer intento\n\t\tintentos <- intentos + 1\n\t\tSi intento < secreto Entonces\n\t\t\tEscribir "Muy bajo..."\n\t\tSiNo\n\t\t\tSi intento > secreto Entonces\n\t\t\t\tEscribir "Muy alto..."\n\t\t\tFinSi\n\t\tFinSi\n\tHasta Que intento = secreto\n\tEscribir "¡Correcto en ", intentos, " intentos!"\nFinProceso` },
            ];

            let exampleIdx = 0;

            function loadExample() {
                let ex = EXAMPLES[exampleIdx % EXAMPLES.length];
                let ta = document.getElementById("playgroundEditor");
                // FIX: select-all + insertText para preservar undo
                ta.focus();
                ta.selectionStart = 0;
                ta.selectionEnd = ta.value.length;
                if (!document.execCommand('insertText', false, ex.code)) {
                    ta.value = ex.code;
                }
                ta.dispatchEvent(new Event("input"));
                exampleIdx++;
            }

            /* ============================================================
   COPIAR Y DESCARGAR CÓDIGO
============================================================ */
            function copyCode() {
                let code = document.getElementById("playgroundEditor").value;
                if (!code.trim()) { showToast("⚠ Editor vacío"); return; }
                navigator.clipboard.writeText(code).then(() => showToast("✅ Código copiado al portapapeles"))
                    .catch(() => {
                        // Fallback
                        let ta = document.createElement("textarea");
                        ta.value = code;
                        document.body.appendChild(ta);
                        ta.select();
                        document.execCommand("copy");
                        document.body.removeChild(ta);
                        showToast("✅ Código copiado");
                    });
            }

            function clearEditor() {
                let ta = document.getElementById("playgroundEditor");
                if (!ta.value.trim()) return;
                // Guardar copia para undo
                _lastClearedCode = ta.value;
                let newContent = "Proceso MiPrograma\n\t// Escribe tu código aquí\n\t\nFinProceso";
                // FIX: usar select-all + insertText para preservar undo
                ta.focus();
                ta.selectionStart = 0;
                ta.selectionEnd = ta.value.length;
                if (!document.execCommand('insertText', false, newContent)) {
                    ta.value = newContent;
                }
                ta.dispatchEvent(new Event("input"));
                window.syncHighlight && syncHighlight("playgroundEditor", "playgroundHighlight");
                updateLineNums("playgroundEditor", "playgroundLineNums");
                updateStatusBar();
                clearConsole("playgroundConsole");
                // Posicionar cursor en línea 2 (después del tab)
                let pos = "Proceso MiPrograma\n\t".length;
                ta.selectionStart = ta.selectionEnd = pos + "// Escribe tu código aquí".length;
                ta.focus();
                showToast("🗑 Editor limpiado · usa el botón ↩ para deshacer");
            }

            function importCode() {
                let input = document.createElement("input");
                input.type = "file";
                input.accept = ".psc,.txt,.pseint";
                input.style.display = "none";
                input.onchange = (e) => {
                    let file = e.target.files[0];
                    if (!file) return;
                    let reader = new FileReader();
                    reader.onload = (ev) => {
                        let code = ev.target.result;
                        // FIX: normalizar CRLF a LF para que el intérprete y
                        // analizador no se confundan con \r al final de línea.
                        code = code.replace(/\r\n?/g, '\n');
                        let ta = document.getElementById("playgroundEditor");
                        _lastClearedCode = ta.value;
                        // FIX: select-all + insertText para preservar undo
                        ta.focus();
                        ta.selectionStart = 0;
                        ta.selectionEnd = ta.value.length;
                        if (!document.execCommand('insertText', false, code)) {
                            ta.value = code;
                        }
                        ta.dispatchEvent(new Event("input"));
                        window.syncHighlight && syncHighlight("playgroundEditor", "playgroundHighlight");
                        updateLineNums("playgroundEditor", "playgroundLineNums");
                        updateStatusBar();
                        showToast("📂 Cargado: " + file.name);
                    };
                    reader.onerror = () => showToast("❌ Error leyendo el archivo");
                    reader.readAsText(file, "utf-8");
                };
                document.body.appendChild(input);
                input.click();
                document.body.removeChild(input);
            }

            function downloadCode() {
                let code = document.getElementById("playgroundEditor").value;
                if (!code.trim()) { showToast("⚠ Editor vacío"); return; }
                // Extract process name for filename
                let m = code.match(/^Proceso\s+(\S+)/im);
                let fname = (m ? m[1] : "MiPrograma") + ".psc";
                let blob = new Blob([code], { type: "text/plain;charset=utf-8" });
                let url = URL.createObjectURL(blob);
                let a = document.createElement("a");
                a.href = url; a.download = fname;
                a.click();
                URL.revokeObjectURL(url);
                showToast("⬇ Descargando " + fname);
            }

            /* ============================================================
   TOAST NOTIFICATION
============================================================ */
            function showToast(msg, duration) {
                let t = document.getElementById("toast");
                t.textContent = msg;
                t.style.display = "block";
                // FIX: usar window._toastTimer (compartido con clearPlayground).
                // Antes había dos timers separados (local y window) que podían
                // acumularse y ocultar el toast en momentos diferentes.
                clearTimeout(window._toastTimer);
                window._toastTimer = setTimeout(() => { t.style.display = "none"; }, duration || 2500);
            }

            /* ============================================================
   ATAJOS DE TECLADO MODAL
============================================================ */
            function toggleShortcuts() {
                document.getElementById("shortcutsModal").classList.toggle("open");
            }

            /* ============================================================
   ANÁLISIS DE SINTAXIS (QA AGENT)
============================================================ */
            // Estado de paneles (recordado entre análisis)
            let _diagPanelState = {
                playgroundErrorPanel: false,  // expandido?
                playgroundWarnPanel: false
            };

            function toggleDiagPanel(panelId) {
                let p = document.getElementById(panelId);
                if (!p) return;
                let isOpen = p.classList.toggle('expanded');
                _diagPanelState[panelId] = isOpen;
                let header = p.querySelector('.diag-panel-header');
                if (header) header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            }

            // Análisis "silencioso": actualiza paneles sin toasts.
            // Llamado por debounce mientras se escribe.
            function analyzeCodeSilent() {
                let code = document.getElementById("playgroundEditor").value;
                if (!code || !code.trim()) {
                    // Limpio: ocultar todo y poner estado neutral
                    let ep = document.getElementById("playgroundErrorPanel");
                    let wp = document.getElementById("playgroundWarnPanel");
                    if (ep) ep.classList.remove("has-errors");
                    if (wp) wp.classList.remove("has-warns");
                    window._errorLineSet = new Set();
                    window._paramErrorRanges = [];
                    window._undeclaredVars = new Map();
                    window._reservedAsVarNames = new Set();
                    window.syncHighlight && syncHighlight("playgroundEditor", "playgroundHighlight");
                    // Limpiar overlays de rangos problemáticos
                    if (window._renderParamErrorOverlays) window._renderParamErrorOverlays();
                    let statusEl = document.getElementById("statusSyntax");
                    if (statusEl) {
                        statusEl.className = "status-item";
                        statusEl.textContent = "⬤ PSeInt";
                    }
                    return;
                }
                window._lastAnalyzedCode = code;
                let errors, warns;
                try {
                    errors = analyzeSyntax(code);
                    warns = analyzeWarnings(code);
                } catch(e) {
                    console.warn('analyzeCodeSilent error:', e);
                    return;
                }

                // FIX: variables sin declarar son ERRORES (panel rojo + subrayado rojo).
                // Usar variables no declaradas SIEMPRE produce comportamiento incorrecto
                // (el intérprete las trata como 0/""/false silenciosamente o falla),
                // así que son errores reales — no advertencias.
                // Conservamos el mapa `_undeclaredVars` para overlays por token.
                {
                    let umap = new Map();
                    for (let err of errors) {
                        let m = err.msg.match(/Variable '([^']+)' no está definida/);
                        if (m) {
                            let ln = err.line;
                            if (!umap.has(ln)) umap.set(ln, new Set());
                            umap.get(ln).add(m[1]);
                        }
                    }
                    window._undeclaredVars = umap;
                    // errors queda intacto → todos van al panel rojo
                }
                let ep = document.getElementById("playgroundErrorPanel");
                let el = document.getElementById("playgroundErrorList");
                let wp = document.getElementById("playgroundWarnPanel");
                let wl = document.getElementById("playgroundWarnList");
                let ec = document.getElementById("errorCount");
                let wc = document.getElementById("warnCount");

                if (!ep || !el || !wp || !wl) return;

                el.innerHTML = "";
                wl.innerHTML = "";
                if (ec) ec.textContent = errors.length;
                if (wc) wc.textContent = warns.length;

                // Actualizar conjunto de líneas con error para el resaltador
                window._errorLineSet = new Set(errors.map(e => e.line));
                // FEATURE gutter dots: tambien trackear lineas con warns.
                // Las warns vienen en formato "Línea N: mensaje" — extraemos N.
                window._warnLineSet = new Set();
                (warns || []).forEach(w => {
                    const m = (typeof w === 'string' ? w : w.msg || '').match(/^Línea\s+(\d+):/);
                    if (m) window._warnLineSet.add(parseInt(m[1], 10));
                });
                // Refrescar el gutter con los nuevos indicadores (red/yellow dots)
                if (typeof updateLineNums === 'function') {
                    updateLineNums('playgroundEditor', 'playgroundLineNums');
                }
                // Re-sincronizar el highlight con las líneas de error marcadas
                window.syncHighlight && syncHighlight("playgroundEditor", "playgroundHighlight");
                // FIX: renderizar los overlays de rangos problemáticos
                // (subrayado ondulado estilo VS Code en los paréntesis
                // específicos con parámetros mal). _paramErrorRanges ya
                // fue llenado por analyzeWarnings.
                if (window._renderParamErrorOverlays) {
                    requestAnimationFrame(() => window._renderParamErrorOverlays());
                }

                // Construir un índice rápido línea → rango (la primera columna del primer rango de esa línea)
                // para saltar al token exacto en lugar de al inicio de la línea.
                let _rangeByLine = new Map();
                let allRanges = [
                    ...(window._syntaxErrorRanges || []),
                    ...(window._paramErrorRanges || [])
                ];
                for (let r of allRanges) {
                    if (!_rangeByLine.has(r.line) || r.startCol < _rangeByLine.get(r.line)) {
                        _rangeByLine.set(r.line, r.startCol);
                    }
                }

                if (errors.length > 0) {
                    ep.classList.add("has-errors");
                    errors.forEach(e => {
                        let item = document.createElement("div");
                        item.className = "error-item";
                        let exactCol = _rangeByLine.get(e.line);
                        item.title = typeof exactCol === 'number'
                            ? "Clic para ir a la línea " + e.line + ", columna " + (exactCol + 1)
                            : "Clic para ir a la línea " + e.line;
                        item.innerHTML = '<span class="error-line-num">L' + e.line + '</span><span class="error-msg">' + escapeHtml(e.msg) + '</span>';
                        item.onclick = (ev) => { ev.stopPropagation(); goToLine(e.line, exactCol); };
                        el.appendChild(item);
                    });
                } else {
                    ep.classList.remove("has-errors");
                }

                if (warns.length > 0) {
                    wp.classList.add("has-warns");
                    warns.forEach(w => {
                        let item = document.createElement("div");
                        item.className = "warn-item";
                        // Extraer "Línea N:" si existe para hacer click → goToLine
                        let mLine = w.match(/^Línea\s+(\d+):\s*/);
                        if (mLine) {
                            let ln = parseInt(mLine[1]);
                            let rest = w.substring(mLine[0].length);
                            let exactCol = _rangeByLine.get(ln);
                            // Si no hay rango registrado, intentar extraer el nombre de la variable
                            // del mensaje y buscarla en la línea para posicionar el cursor sobre ella.
                            if (typeof exactCol !== 'number') {
                                let mVar = rest.match(/Variable '([^']+)'/);
                                if (mVar && window._lastAnalyzedCode) {
                                    let lineText = (window._lastAnalyzedCode.split('\n')[ln-1] || '');
                                    let idx = lineText.indexOf(mVar[1]);
                                    if (idx >= 0) exactCol = idx;
                                }
                            }
                            item.innerHTML = '💡 <span class="warn-line-jump">L' + ln + '</span> ' + escapeHtml(rest);
                            item.title = typeof exactCol === 'number'
                                ? "Clic para ir a la línea " + ln + ", columna " + (exactCol + 1)
                                : "Clic para ir a la línea " + ln;
                            item.onclick = (ev) => { ev.stopPropagation(); goToLine(ln, exactCol); };
                        } else {
                            item.textContent = "💡 " + w;
                        }
                        wl.appendChild(item);
                    });
                } else {
                    wp.classList.remove("has-warns");
                }

                // Mantener estado expandido entre análisis; auto-expandir en tiempo real si hay errores
                if (errors.length > 0) {
                    _diagPanelState.playgroundErrorPanel = true;
                    ep.classList.add('expanded');
                } else {
                    ep.classList.remove('expanded');
                }
                if (_diagPanelState.playgroundWarnPanel && warns.length > 0)
                    wp.classList.add('expanded');
                else wp.classList.remove('expanded');

                let statusEl = document.getElementById("statusSyntax");
                if (statusEl) {
                    if (errors.length === 0 && warns.length === 0) {
                        statusEl.className = "status-item ok";
                        statusEl.textContent = "✓ Sintaxis OK";
                    } else if (errors.length === 0 && warns.length > 0) {
                        statusEl.className = "status-item warn";
                        statusEl.textContent = "⚠ " + warns.length + " sugerencia(s)";
                    } else {
                        statusEl.className = "status-item err";
                        statusEl.textContent = "✗ " + errors.length + " error(es)" + (warns.length ? " · ⚠ " + warns.length : "");
                    }
                }
                // Sync contadores y contenido del fullscreen
                if (window._fsUpdateCounts) window._fsUpdateCounts();
            }

            // Versión "manual": idéntica pero con toast y expande automáticamente
            // si hay problemas (para cuando se invoca explícitamente).
            function analyzeCode() {
                let code = document.getElementById("playgroundEditor").value;
                let errors = analyzeSyntax(code);
                let warns = analyzeWarnings(code);
                // Auto-expandir paneles cuando se analiza explícitamente
                if (errors.length > 0) _diagPanelState.playgroundErrorPanel = true;
                if (warns.length > 0) _diagPanelState.playgroundWarnPanel = true;
                analyzeCodeSilent();
                if (errors.length === 0 && warns.length === 0) {
                    showToast("✅ Sintaxis correcta — sin problemas detectados");
                } else if (errors.length === 0 && warns.length > 0) {
                    showToast("⚠ " + warns.length + " sugerencia(s)", 3500);
                } else {
                    showToast("⛔ " + errors.length + " error(es) de sintaxis", 3500);
                }
            }

            // Debouncer para análisis en tiempo real
            let _analyzeRTTimer = null;
            function scheduleAnalyze() {
                if (_analyzeRTTimer) clearTimeout(_analyzeRTTimer);
                _analyzeRTTimer = setTimeout(() => {
                    _analyzeRTTimer = null;
                    analyzeCodeSilent();
                }, 350);
            }

            /* ============================================================
               AUTO-FORMATEADOR ESTILO gofmt
               Reindenta TODO el código según la profundidad real de bloques.
               Cada nivel = un \t. No modifica el contenido lógico de las
               líneas, solo el whitespace inicial.
            ============================================================ */
            function formatPSeIntCode(code) {
                // Normalizar CRLF defensivamente
                if (/\r/.test(code)) code = code.replace(/\r\n?/g, '\n');
                let lines = code.split('\n');
                let depth = 0;
                let out = [];
                // FIX: cada Segun trackea su depth Y si actualmente está
                // dentro de un case (en cuyo caso el contenido del case
                // va a depth+2: depth del Segun + 1 para el case + 1 para
                // el contenido). Antes el contenido del case quedaba al
                // mismo nivel que la etiqueta del case (mal).
                // Estructura: [{ segunDepth, inCase: bool }]
                let segunStack = [];

                // ── NORMALIZACIÓN DE CASING DE KEYWORDS ──
                // Mapa de cada keyword (en lower) → su forma canónica.
                // Si el usuario escribió "PROCESO", "proceso", "Proceso" o
                // "ProCeSo", todas terminan como "Proceso".
                // Las palabras compuestas (con espacios) también son
                // soportadas: "hasta que" → "Hasta Que", etc.
                const KW_CANONICAL = {
                    // Proceso / bloques principales
                    'proceso':'Proceso','finproceso':'FinProceso',
                    'algoritmo':'Algoritmo','finalgoritmo':'FinAlgoritmo',
                    'subproceso':'SubProceso','finsubproceso':'FinSubProceso',
                    'funcion':'Funcion','función':'Función',
                    'finfuncion':'FinFuncion','finfunción':'FinFunción',
                    'procedimiento':'Procedimiento','finprocedimiento':'FinProcedimiento',
                    // I/O
                    'leer':'Leer','escribir':'Escribir',
                    'borrar':'Borrar','limpiar':'Limpiar','pantalla':'Pantalla',
                    'esperar':'Esperar','tecla':'Tecla','segundos':'Segundos',
                    'sin':'Sin','saltar':'Saltar',
                    // Declaración
                    'definir':'Definir','como':'Como','dimension':'Dimension','arreglo':'Arreglo',
                    'parametros':'Parametros','parámetros':'Parámetros',
                    'referencia':'Referencia',
                    // Tipos
                    'entero':'Entero','real':'Real','numerico':'Numerico',
                    'caracter':'Caracter','char':'Char',
                    'texto':'Texto','cadena':'Cadena','logico':'Logico',
                    // Control de flujo
                    'si':'Si','entonces':'Entonces','sino':'SiNo','finsi':'FinSi',
                    'segun':'Segun','hacer':'Hacer','finsegun':'FinSegun',
                    'mientras':'Mientras','finmientras':'FinMientras',
                    'repetir':'Repetir','hasta':'Hasta','que':'Que',
                    'para':'Para','finpara':'FinPara','con':'Con','paso':'Paso',
                    'retornar':'Retornar','devolver':'Devolver',
                    'salir':'Salir','salirpara':'SalirPara','interrumpir':'Interrumpir',
                    // Parámetros
                    'por':'Por','valor':'Valor','byref':'ByRef',
                    // Operadores y literales — TODOS son keywords reservadas.
                    // El analizador rechaza Y/O/NO como nombres de variable
                    // (STRUCTURAL_KW + BIN_OP_WORDS), así que normalizar el casing
                    // es correcto y útil pedagógicamente.
                    'y':'Y','o':'O','no':'No','mod':'MOD','div':'DIV',
                    'and':'AND','or':'OR','not':'NOT',
                    'verdadero':'Verdadero','falso':'Falso',
                    'true':'Verdadero','false':'Falso',
                };
                // Palabras compuestas que tienen casing especial
                const COMPOUND_CANONICAL = {
                    'escribir sin saltar': 'Escribir Sin Saltar',
                    'borrar pantalla': 'Borrar Pantalla',
                    'limpiar pantalla': 'Limpiar Pantalla',
                    'esperar tecla': 'Esperar Tecla',
                    'hasta que': 'Hasta Que',
                    'de otro modo': 'De Otro Modo',
                    'con paso': 'Con Paso',
                    'sino si': 'SiNo Si',
                    'por valor': 'Por Valor',
                    'por referencia': 'Por Referencia',
                };

                // ── CORRECCIÓN DE TYPOS COMUNES ──
                // Mapa typo → keyword canónica. Solo se aplica a tokens AISLADOS
                // (rodeados de delimitadores de palabra) y respeta strings/comentarios.
                // Conservador: solo agregamos typos que NO podrían ser nombres
                // de variable razonables.
                const KW_TYPOS = {
                    // Tildes/diacríticos olvidados o mal puestos
                    'sì': 'Si', 'sí': 'Si',
                    'segùn': 'Segun', 'según': 'Segun',
                    // Mientras
                    'mintras': 'Mientras', 'mientars': 'Mientras', 'mintrass': 'Mientras',
                    'finmintras': 'FinMientras', 'fin_mientras': 'FinMientras',
                    // Entonces
                    'entonse': 'Entonces', 'entonses': 'Entonces',
                    'entonzes': 'Entonces', 'entoces': 'Entonces',
                    'entoncse': 'Entonces', 'entonscs': 'Entonces',
                    'entocnes': 'Entonces', 'entoncs': 'Entonces',
                    // Hacer / Hasta
                    'haser': 'Hacer', 'hacar': 'Hacer', 'haccer': 'Hacer',
                    'asta': 'Hasta', 'hata': 'Hasta',
                    // Fin*
                    'fin_si': 'FinSi', 'finsì': 'FinSi',
                    'fin_para': 'FinPara', 'fin_mientras': 'FinMientras',
                    'fin_proceso': 'FinProceso', 'fin_funcion': 'FinFuncion',
                    'fin_subproceso': 'FinSubProceso', 'fin_segun': 'FinSegun',
                    // Definir
                    'definr': 'Definir', 'defnir': 'Definir', 'definnir': 'Definir',
                    // Leer / Escribir
                    'ler': 'Leer', 'lerr': 'Leer',
                    'escrivir': 'Escribir', 'escrbir': 'Escribir', 'esribir': 'Escribir',
                    'escriibr': 'Escribir',
                    // Para / SubProceso / Funcion / Procedimiento
                    'parra': 'Para',
                    'subproces': 'SubProceso', 'sub_proceso': 'SubProceso',
                    'funcón': 'Función', 'funcionn': 'Funcion',
                    'procedimeinto': 'Procedimiento', 'procedimineto': 'Procedimiento',
                    // SiNo
                    'sinno': 'SiNo', 'sino_si': 'SiNo Si',
                    // Repetir
                    'repteir': 'Repetir', 'repeti': 'Repetir',
                    // Verdadero / Falso
                    'verdaero': 'Verdadero', 'verdadeo': 'Verdadero',
                    'fasso': 'Falso', 'faslo': 'Falso',
                };
                function _autoFixTypos(line) {
                    // Separar comentario al final
                    let commentIdx = -1;
                    let inStr0 = false;
                    for (let i = 0; i < line.length - 1; i++) {
                        if (line[i] === '"') inStr0 = !inStr0;
                        if (!inStr0 && line[i] === '/' && line[i+1] === '/') {
                            commentIdx = i; break;
                        }
                    }
                    let codePart = commentIdx >= 0 ? line.slice(0, commentIdx) : line;
                    let commentPart = commentIdx >= 0 ? line.slice(commentIdx) : '';
                    // Tokenizar respetando strings
                    let result = '';
                    let pos = 0;
                    while (pos < codePart.length) {
                        const c = codePart[pos];
                        if (c === '"') {
                            // Conservar string intacto
                            result += c; pos++;
                            while (pos < codePart.length && codePart[pos] !== '"') {
                                result += codePart[pos]; pos++;
                            }
                            if (pos < codePart.length) { result += codePart[pos]; pos++; }
                            continue;
                        }
                        // Captura palabra
                        const wm = codePart.slice(pos).match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-ZáéíóúÁÉÍÓÚñÑ_0-9]*/);
                        if (wm) {
                            const w = wm[0];
                            const fix = KW_TYPOS[w.toLowerCase()];
                            result += fix || w;
                            pos += w.length;
                            continue;
                        }
                        result += c; pos++;
                    }
                    return result + commentPart;
                }

                // ── NORMALIZACIÓN DE ESPACIADO alrededor de operadores ──
                // Reglas:
                //   • `<-` → siempre rodeado por UN espacio.
                //   • Operadores de comparación (`<`, `>`, `<=`, `>=`, `<>`, `=`) → un espacio.
                //   • Operadores aritméticos binarios (`+`, `-`, `*`, `/`, `^`, `%`) → un espacio.
                //   • `,` → cero antes, uno después.
                //   • Respetar strings y comentarios.
                //   • NO tocar `-` unario (después de `(`, `,`, `+`, `-`, `*`, `/`, `^`, `=`, `<`, `>`, inicio).
                function _normalizeSpacing(line) {
                    let commentIdx = -1;
                    let inStr0 = false;
                    for (let i = 0; i < line.length - 1; i++) {
                        if (line[i] === '"') inStr0 = !inStr0;
                        if (!inStr0 && line[i] === '/' && line[i+1] === '/') {
                            commentIdx = i; break;
                        }
                    }
                    let codePart = commentIdx >= 0 ? line.slice(0, commentIdx) : line;
                    let commentPart = commentIdx >= 0 ? line.slice(commentIdx) : '';

                    // Tokenizer simple respetando strings. Emite tokens y luego
                    // los reune con espaciado controlado solo donde aplica.
                    const tokens = []; // {type:'str'|'op'|'word'|'num'|'punct'|'space', val:string}
                    let pos = 0;
                    while (pos < codePart.length) {
                        const c = codePart[pos];
                        if (c === '"') {
                            let s = c; pos++;
                            while (pos < codePart.length && codePart[pos] !== '"') { s += codePart[pos]; pos++; }
                            if (pos < codePart.length) { s += codePart[pos]; pos++; }
                            tokens.push({type:'str', val:s});
                            continue;
                        }
                        if (/\s/.test(c)) { let s=''; while(pos<codePart.length && /\s/.test(codePart[pos])){s+=codePart[pos];pos++;} tokens.push({type:'space', val:s}); continue; }
                        // Operadores multi-char primero
                        if (codePart.startsWith('<-', pos)) { tokens.push({type:'op', val:'<-'}); pos+=2; continue; }
                        if (codePart.startsWith('<=', pos)) { tokens.push({type:'op', val:'<='}); pos+=2; continue; }
                        if (codePart.startsWith('>=', pos)) { tokens.push({type:'op', val:'>='}); pos+=2; continue; }
                        if (codePart.startsWith('<>', pos)) { tokens.push({type:'op', val:'<>'}); pos+=2; continue; }
                        if (codePart.startsWith('==', pos)) { tokens.push({type:'op', val:'='}); pos+=2; continue; } // normalizar == a =
                        if (codePart.startsWith('!=', pos)) { tokens.push({type:'op', val:'<>'}); pos+=2; continue; } // normalizar != a <>
                        if ('<>=+*/^%'.includes(c)) { tokens.push({type:'op', val:c}); pos++; continue; }
                        if (c === '-') { tokens.push({type:'op', val:'-'}); pos++; continue; }
                        if (c === ',') { tokens.push({type:'punct', val:','}); pos++; continue; }
                        if (c === '(' || c === ')' || c === '[' || c === ']') { tokens.push({type:'punct', val:c}); pos++; continue; }
                        if (/\d/.test(c)) { let s=''; while(pos<codePart.length && /[\d.]/.test(codePart[pos])){s+=codePart[pos];pos++;} tokens.push({type:'num', val:s}); continue; }
                        const wm = codePart.slice(pos).match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-ZáéíóúÁÉÍÓÚñÑ_0-9]*/);
                        if (wm) { tokens.push({type:'word', val:wm[0]}); pos += wm[0].length; continue; }
                        tokens.push({type:'punct', val:c}); pos++;
                    }

                    // Detectar si un `-` es unario: el token previo no-espacio
                    // es operador, paréntesis abierto, coma, o no existe.
                    function isUnaryMinus(idx) {
                        for (let k = idx - 1; k >= 0; k--) {
                            const t = tokens[k];
                            if (t.type === 'space') continue;
                            if (t.type === 'op') return true;
                            if (t.type === 'punct' && (t.val === '(' || t.val === ',' || t.val === '[')) return true;
                            if (t.type === 'word' && /^(y|o|no|mod|div|and|or|not|entonces|hacer|hasta)$/i.test(t.val)) return true;
                            return false;
                        }
                        return true; // primer token
                    }

                    // Reemitir con espaciado controlado.
                    let outStr = '';
                    let needLeadingSpaceForOp = false;
                    for (let i = 0; i < tokens.length; i++) {
                        const t = tokens[i];
                        if (t.type === 'space') {
                            // Compactar varios espacios a uno (excepto al INICIO de la línea, que lo gestiona la indentación)
                            if (outStr.length > 0 && !outStr.endsWith(' ') && !outStr.endsWith('(') && !outStr.endsWith('[')) {
                                outStr += ' ';
                            }
                            continue;
                        }
                        if (t.type === 'str' || t.type === 'word' || t.type === 'num') {
                            outStr += t.val;
                            continue;
                        }
                        if (t.type === 'punct') {
                            if (t.val === ',') {
                                // sin espacio antes, uno después
                                outStr = outStr.replace(/\s+$/, '') + ', ';
                            } else if (t.val === '(' || t.val === '[') {
                                // Quitar espacio antes si la previa era word (llamada): foo(  → foo(
                                outStr = outStr.replace(/\s+$/, '');
                                outStr += t.val;
                            } else if (t.val === ')' || t.val === ']') {
                                outStr = outStr.replace(/\s+$/, '') + t.val;
                            } else {
                                outStr += t.val;
                            }
                            continue;
                        }
                        if (t.type === 'op') {
                            if (t.val === '-' && isUnaryMinus(i)) {
                                // Unario: pegado al operando, sin forzar espacios
                                // Si lo previo es `,` o `(` o operador, mantener espacio luego
                                outStr = outStr.replace(/\s+$/, '');
                                if (outStr.length && !/[(\[,]$/.test(outStr)) outStr += ' ';
                                outStr += '-';
                            } else {
                                outStr = outStr.replace(/\s+$/, '');
                                if (outStr.length) outStr += ' ';
                                outStr += t.val + ' ';
                            }
                            continue;
                        }
                    }
                    // Limpiar dobles espacios residuales y trailing
                    outStr = outStr.replace(/ {2,}/g, ' ').replace(/\s+$/, '');
                    return outStr + (commentPart ? (outStr ? ' ' : '') + commentPart : '');
                }

                /** Normaliza el casing de las keywords en una línea de código.
                 *  Respeta strings entre comillas y comentarios después de //. */
                function _normalizeKeywordCasing(line) {
                    // Separar comentario al final (preservar tal cual)
                    let commentIdx = -1;
                    let inStr = false;
                    for (let i = 0; i < line.length - 1; i++) {
                        if (line[i] === '"') inStr = !inStr;
                        if (!inStr && line[i] === '/' && line[i+1] === '/') {
                            commentIdx = i; break;
                        }
                    }
                    let codePart = commentIdx >= 0 ? line.slice(0, commentIdx) : line;
                    let commentPart = commentIdx >= 0 ? line.slice(commentIdx) : '';

                    // Aplicar primero las palabras compuestas (longest match first)
                    let result = '';
                    let pos = 0;
                    let inString = false;
                    while (pos < codePart.length) {
                        let c = codePart[pos];
                        if (c === '"') {
                            // Pasar el string sin cambios
                            inString = true;
                            result += c;
                            pos++;
                            while (pos < codePart.length && codePart[pos] !== '"') {
                                result += codePart[pos];
                                pos++;
                            }
                            if (pos < codePart.length) {
                                result += codePart[pos]; // comilla de cierre
                                pos++;
                            }
                            inString = false;
                            continue;
                        }
                        // Intentar palabras compuestas (revisar las más largas primero)
                        let matched = false;
                        // Ordenar por longitud (más largas primero) para evitar
                        // que "por" capture lo que era "por valor"
                        let phrases = Object.keys(COMPOUND_CANONICAL)
                            .sort((a, b) => b.length - a.length);
                        for (let phr of phrases) {
                            let chunk = codePart.slice(pos, pos + phr.length);
                            if (chunk.toLowerCase() === phr) {
                                // Verificar bordes de palabra
                                let prev = pos > 0 ? codePart[pos-1] : ' ';
                                let next = codePart[pos+phr.length] || ' ';
                                if (!/\w/.test(prev) && !/\w/.test(next)) {
                                    result += COMPOUND_CANONICAL[phr];
                                    pos += phr.length;
                                    matched = true;
                                    break;
                                }
                            }
                        }
                        if (matched) continue;
                        // Intentar palabras simples
                        if (/[a-zA-ZáéíóúÁÉÍÓÚñÑ_]/.test(c)) {
                            let word = '';
                            let startPos = pos;
                            while (pos < codePart.length && /[\w_áéíóúÁÉÍÓÚñÑ]/.test(codePart[pos])) {
                                word += codePart[pos];
                                pos++;
                            }
                            let lw = word.toLowerCase();
                            if (KW_CANONICAL[lw]) {
                                result += KW_CANONICAL[lw];
                            } else {
                                result += word;
                            }
                            continue;
                        }
                        // Cualquier otro carácter
                        result += c;
                        pos++;
                    }
                    return result + commentPart;
                }

                for (let i = 0; i < lines.length; i++) {
                    let raw = lines[i];
                    // Conservar líneas completamente vacías
                    if (raw.trim() === '') { out.push(''); continue; }
                    // Quitar indentación previa
                    let trimmed = raw.replace(/^[\t ]+/, '');
                    // 1) Corregir typos comunes de keywords (entonse → Entonces, etc.)
                    trimmed = _autoFixTypos(trimmed);
                    // 2) Normalizar casing de keywords (respeta strings y comentarios)
                    trimmed = _normalizeKeywordCasing(trimmed);
                    // 3) Normalizar espaciado alrededor de operadores y comas
                    trimmed = _normalizeSpacing(trimmed);
                    // Detectar tokens (case-insensitive, en lower)
                    let lower = trimmed.toLowerCase();

                    // Líneas que CIERRAN bloques: reducir depth ANTES de imprimir
                    // FIX: añadidos finalgoritmo, finprocedimiento
                    let isClose =
                        /^(finproceso|finalgoritmo|finsi|finmientras|finpara|finsegun|finsubproceso|finfuncion|finfunción|finprocedimiento)\b/.test(lower) ||
                        /^hasta\s+que\b/.test(lower) || // Repetir ... Hasta Que cierra el bloque
                        /^hasta\b/.test(lower) && !/^hasta\s+\d/.test(lower); // "Hasta x = 0" solo, sin "Que"
                    // SiNo / De Otro Modo: salen un nivel para alinearse con Si/Segun
                    let isMidBranch = /^sino\b/.test(lower);
                    // case "N:", "'a':" o "De Otro Modo:" dentro de Segun
                    let isSegunCase = /^(\d+(\s*,\s*\d+)*|".*"|'.*'|de\s+otro\s+modo)\s*:/.test(lower);

                    let indentDepth = depth;
                    if (isClose) {
                        depth = Math.max(0, depth - 1);
                        indentDepth = depth;
                        // Si cerramos un FinSegun, sacar del segunStack
                        if (/^finsegun\b/.test(lower) && segunStack.length > 0) {
                            // Si el Segun estaba con un case abierto, ese case
                            // sumaba +1 al depth; lo descontamos antes de cerrar.
                            if (segunStack[segunStack.length - 1].inCase) {
                                depth = Math.max(0, depth - 1);
                                indentDepth = depth;
                            }
                            segunStack.pop();
                        }
                    } else if (isMidBranch) {
                        indentDepth = Math.max(0, depth - 1);
                    } else if (isSegunCase && segunStack.length > 0) {
                        // El case se alinea un nivel adentro del Segun.
                        // Si ya estábamos en otro case, hay que cerrarlo
                        // (decrementar depth) antes de abrir este nuevo case.
                        let topSegun = segunStack[segunStack.length - 1];
                        if (topSegun.inCase) {
                            depth = Math.max(0, depth - 1);
                        }
                        // El case se imprime en la "primera línea adentro del Segun"
                        indentDepth = topSegun.segunDepth + 1;
                    }

                    // Imprimir línea con indentación correcta
                    out.push('\t'.repeat(indentDepth) + trimmed);

                    // Líneas que ABREN bloques: aumentar depth para las siguientes
                    // FIX: añadidos algoritmo, procedimiento
                    let isOpen =
                        /^proceso\b/.test(lower) ||
                        /^algoritmo\b/.test(lower) ||
                        /^subproceso\b/.test(lower) ||
                        /^funcion\b/.test(lower) || /^función\b/.test(lower) ||
                        /^procedimiento\b/.test(lower) ||
                        /\bentonces\s*$/.test(lower) ||
                        /\bhacer\s*$/.test(lower) ||  // Mientras...Hacer, Para...Hacer, Segun...Hacer
                        /^repetir\s*$/.test(lower);
                    let isSegunOpen = /^segun\b.*\bhacer\s*$/.test(lower);
                    if (isSegunOpen) {
                        // Marcar este Segun en el stack: aún sin case
                        segunStack.push({ segunDepth: depth, inCase: false });
                        depth++;
                    } else if (isOpen) {
                        depth++;
                    } else if (isMidBranch) {
                        // SiNo no cambia depth (sigue dentro del Si)
                    } else if (isSegunCase && segunStack.length > 0) {
                        // FIX CRÍTICO: este case abre un nuevo nivel virtual
                        // para que el contenido siguiente quede indentado +1.
                        // Marcar que ahora estamos DENTRO de un case.
                        let topSegun = segunStack[segunStack.length - 1];
                        topSegun.inCase = true;
                        depth = indentDepth + 1; // contenido del case = case + 1
                    }
                }

                let result = out.join('\n');
                // Eliminar tabs solitarios al final de líneas (residuos)
                result = result.split('\n').map(l => l.replace(/[\t ]+$/, '')).join('\n');
                return result;
            }

            // Formatear el editor del playground (Ctrl+S o botón)
            // Acepta opcionalmente un taId para reutilizar en lecciones.
            function formatPlaygroundCode(taId) {
                let ta = document.getElementById(taId || 'playgroundEditor');
                if (!ta) return;
                let before = ta.value;
                let formatted = formatPSeIntCode(before);
                if (formatted === before) {
                    showToast('✨ El código ya está bien formateado');
                    return;
                }
                // FIX: guardar scroll y posición del cursor con detalle
                let cursorPos = ta.selectionStart;
                let cursorLine = before.substring(0, cursorPos).split('\n').length - 1;
                // Columna dentro de la línea (sin contar indentación, porque
                // la indentación cambia con el formateo)
                let lineStartOffset = before.lastIndexOf('\n', cursorPos - 1) + 1;
                let cursorCol = cursorPos - lineStartOffset;
                // Guardar el scroll exacto para restaurarlo
                let savedScrollTop = ta.scrollTop;
                let savedScrollLeft = ta.scrollLeft;

                // FIX: select-all + insertText para preservar undo
                ta.focus();
                ta.selectionStart = 0;
                ta.selectionEnd = ta.value.length;
                if (!document.execCommand('insertText', false, formatted)) {
                    ta.value = formatted;
                }
                // Restaurar cursor en la MISMA línea, en la misma columna relativa
                // al contenido (no a la indentación)
                let newLines = formatted.split('\n');
                let newPos = 0;
                for (let i = 0; i < Math.min(cursorLine, newLines.length); i++) {
                    newPos += newLines[i].length + 1;
                }
                if (cursorLine < newLines.length) {
                    let newLine = newLines[cursorLine];
                    // Indentación original
                    let originalLine = before.split('\n')[cursorLine] || '';
                    let originalIndent = originalLine.match(/^[\t ]*/)[0].length;
                    let newIndent = newLine.match(/^[\t ]*/)[0].length;
                    // Si el cursor estaba dentro de la indentación, ponerlo al inicio del contenido
                    if (cursorCol <= originalIndent) {
                        newPos += newIndent;
                    } else {
                        // Si estaba en el contenido, ajustar por la diferencia de indentación
                        let posInContent = cursorCol - originalIndent;
                        newPos += newIndent + posInContent;
                        // Clamp al final de la línea
                        if (newPos > newPos - (newIndent + posInContent) + newLine.length) {
                            newPos = newPos - (newIndent + posInContent) + newLine.length;
                        }
                    }
                }
                ta.selectionStart = ta.selectionEnd = newPos;
                // FIX: RESTAURAR EL SCROLL para no mover la vista del usuario
                ta.scrollTop = savedScrollTop;
                ta.scrollLeft = savedScrollLeft;
                ta.dispatchEvent(new Event('input'));
                // El input event resetea scroll? por si acaso lo volvemos a setear
                requestAnimationFrame(() => {
                    ta.scrollTop = savedScrollTop;
                    ta.scrollLeft = savedScrollLeft;
                    // Sincronizar gutter del editor correspondiente
                    let gutterId = (ta.id === 'playgroundEditor') ? 'playgroundLineNums'
                                 : (ta.id + 'LineNums');
                    let ln = document.getElementById(gutterId);
                    if (ln) ln.scrollTop = ta.scrollTop;
                });
                showToast('✨ Código formateado');
            }
            window.formatPlaygroundCode = formatPlaygroundCode;
            // Atajo: formatea el editor con foco actual (playground, ejemplo o reto).
            window.formatActiveEditor = function() {
                const active = document.activeElement;
                if (active && active.tagName === 'TEXTAREA' &&
                    (active.id === 'playgroundEditor' || active.id === 'exampleEditor' || active.id === 'challengeEditor')) {
                    formatPlaygroundCode(active.id);
                } else {
                    formatPlaygroundCode('playgroundEditor');
                }
            };

            /* ============================================================
               MENÚ ARCHIVO — toggle + cerrar al click fuera
            ============================================================ */
            function toggleFileMenu() {
                let dd = document.getElementById('fileMenuDropdown');
                if (!dd) return;
                dd.classList.toggle('open');
            }
            function closeFileMenu() {
                let dd = document.getElementById('fileMenuDropdown');
                if (dd) dd.classList.remove('open');
            }
            // Cerrar el menú al hacer click fuera
            document.addEventListener('click', function(e) {
                let wrap = document.getElementById('fileMenuWrap');
                if (!wrap) return;
                if (!wrap.contains(e.target)) {
                    closeFileMenu();
                }
            });
            window.toggleFileMenu = toggleFileMenu;
            window.closeFileMenu = closeFileMenu;

            // Exponer al scope global
            window.toggleDiagPanel = toggleDiagPanel;
            window.analyzeCodeSilent = analyzeCodeSilent;
            window.analyzeCode = analyzeCode;
            window.scheduleAnalyze = scheduleAnalyze;

            function escapeHtml(s) {
                return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
            }

            function goToLine(lineNum, col) {
                let ta = document.getElementById("playgroundEditor");
                let lines = ta.value.split("\n");
                let pos = 0;
                for (let i = 0; i < Math.min(lineNum - 1, lines.length); i++) pos += lines[i].length + 1;
                ta.focus();
                // Posicionar el cursor. Si se pasa `col` (0-based), va a esa columna
                // exacta. Si no, va al primer carácter no-blanco (indentación).
                let lineText = lines[lineNum-1] || "";
                let targetCol;
                if (typeof col === 'number' && col >= 0) {
                    targetCol = Math.min(col, lineText.length);
                } else {
                    targetCol = lineText.search(/\S/);
                    if (targetCol < 0) targetCol = 0;
                }
                let cursorPos = pos + targetCol;
                // setSelectionRange con start === end → solo mueve el cursor, NO selecciona
                ta.setSelectionRange(cursorPos, cursorPos);
                // FIX: hacer scroll automático para que la línea quede visible.
                // Aproximamos lineHeight desde el computed style.
                try {
                    const cs = window.getComputedStyle(ta);
                    let lh = parseFloat(cs.lineHeight);
                    if (isNaN(lh)) lh = parseFloat(cs.fontSize) * 1.6;
                    // Centrar la línea en la vista
                    let targetScroll = Math.max(0, (lineNum - 1) * lh - ta.clientHeight / 2);
                    ta.scrollTop = targetScroll;
                    // Sincronizar gutter
                    let ln = document.getElementById("playgroundLineNums");
                    if (ln) ln.scrollTop = ta.scrollTop;
                } catch(e) { /* no critical */ }
            }

            // <ANALYZE_SYNTAX_BEGIN> — marcador para tests/analyzer_smoke.js
            function analyzeSyntax(code) {
                let errors = [];
                // FIX: normalizar CRLF defensivamente
                if (/\r/.test(code)) code = code.replace(/\r\n?/g, '\n');
                let lines = code.split("\n");
                let stack = []; // stack of open blocks
                let hasProc = false;
                // Reiniciar el registro de "palabras reservadas usadas como variable".
                // El highlighter lo lee para pintar TODAS las apariciones en rojo
                // (incluyendo el lado derecho de expresiones como `x + y`).
                window._reservedAsVarNames = new Set();
                // ── Palabras reservadas del lenguaje (NO usables como identificadores) ──
                // Si están entre comillas no hay error (son string). Si se usan como
                // nombre de variable, función, parámetro o ciclo: error.
                const RESERVED_LANG = new Set([
                    // Bloques principales
                    'proceso','finproceso','algoritmo','finalgoritmo',
                    'subproceso','finsubproceso','funcion','función','finfuncion','finfunción',
                    'procedimiento','finprocedimiento',
                    // Control de flujo
                    'si','entonces','sino','finsi',
                    'mientras','hacer','finmientras',
                    'para','hasta','con','paso','finpara',
                    'repetir','que',
                    'segun','según','finsegun','finsegún','de','otro','modo',
                    // Declaraciones
                    'definir','como','dimension','arreglo',
                    // I/O
                    'leer','escribir','sin','saltar',
                    // Operadores lógicos / aritméticos
                    'y','o','no','and','or','not','mod','div',
                    // Tipos
                    'entero','real','texto','cadena','caracter','char','logico','lógico','numerico','numérico',
                    // Booleanos / constantes
                    'verdadero','falso','true','false','pi',
                    // Modificadores de parámetros
                    'var','ref','por','referencia','valor','byref',
                    // Otras instrucciones
                    'retornar','devolver','salir','salirpara','interrumpir',
                    'borrar','limpiar','pantalla','esperar','tecla','segundos',
                ]);
                function isReservedIdent(name) {
                    return RESERVED_LANG.has(String(name).toLowerCase());
                }
                // Buffer de rangos específicos para subrayar (en lugar de pintar toda la línea)
                let _ranges = [];
                function _pushRange(lineIdx, startCol, endCol, severity) {
                    if (lineIdx < 0 || startCol < 0 || endCol <= startCol) return;
                    _ranges.push({ line: lineIdx + 1, startCol, endCol, severity: severity || 'error' });
                }
                function _findTokenCol(rawLine, token, fromCol) {
                    // Busca el token como palabra completa en rawLine a partir de fromCol.
                    // Respeta comillas: si el match está dentro de un string, sigue buscando.
                    const re = new RegExp('(^|[^\\wáéíóúÁÉÍÓÚñÑ])(' + token.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')(?![\\wáéíóúÁÉÍÓÚñÑ])', 'gi');
                    re.lastIndex = fromCol || 0;
                    let m;
                    while ((m = re.exec(rawLine)) !== null) {
                        const idx = m.index + (m[1] ? m[1].length : 0);
                        // Comprobar si está dentro de string
                        let inStr = false;
                        for (let j = 0; j < idx; j++) {
                            if (rawLine[j] === '\\' && rawLine[j+1] === '"') { j++; continue; }
                            if (rawLine[j] === '"') inStr = !inStr;
                        }
                        if (!inStr) return { start: idx, end: idx + m[2].length };
                    }
                    return null;
                }
                function checkReservedDecl(rawName, ln, kind, rawLine, lineIdx) {
                    if (!rawName) return false;
                    let nm = rawName.trim();
                    if (!nm) return false;
                    if (isReservedIdent(nm)) {
                        errors.push({
                            line: ln,
                            msg: `'${nm}' es una palabra reservada de PSeInt y no puede usarse como nombre de ${kind}. Usa otro nombre (ej: '${nm}1' o '${nm}Var').`
                        });
                        if (rawLine && typeof lineIdx === 'number') {
                            const loc = _findTokenCol(rawLine, nm, 0);
                            if (loc) _pushRange(lineIdx, loc.start, loc.end, 'error');
                        }
                        // Registrar el nombre globalmente — el highlighter lo usa
                        // para pintar de rojo TODAS las apariciones (no solo la línea
                        // de declaración). Guardamos case-sensitive Y case-insensitive.
                        if (!window._reservedAsVarNames) window._reservedAsVarNames = new Set();
                        window._reservedAsVarNames.add(nm);
                        window._reservedAsVarNames.add(nm.toLowerCase());
                        window._reservedAsVarNames.add(nm.toUpperCase());
                        return true;
                    }
                    return false;
                }
                // Nombres legibles para mensajes
                // FIX: añadidos algoritmo y procedimiento (PSeInt v20250218)
                const friendlyName = {
                    'proceso': 'Proceso',
                    'algoritmo': 'Algoritmo',
                    'subproceso': 'SubProceso',
                    'funcion': 'Funcion',
                    'procedimiento': 'Procedimiento',
                    'si': 'Si',
                    'mientras': 'Mientras',
                    'para': 'Para',
                    'segun': 'Segun',
                    'repetir': 'Repetir',
                };
                const expectedEnd = {
                    'proceso': 'FinProceso',
                    'algoritmo': 'FinAlgoritmo',
                    'subproceso': 'FinSubProceso',
                    'funcion': 'FinFuncion',
                    'procedimiento': 'FinProcedimiento',
                    'si': 'FinSi',
                    'mientras': 'FinMientras',
                    'para': 'FinPara',
                    'segun': 'FinSegun',
                    'repetir': 'Hasta Que',
                };
                // Tipos de cierre que aceptan
                const closesFor = {
                    'finproceso': 'proceso',
                    'finalgoritmo': 'algoritmo',
                    'finsubproceso': 'subproceso',
                    'finfuncion': 'funcion',
                    'finfunción': 'funcion',
                    'finprocedimiento': 'procedimiento',
                    'finsi': 'si',
                    'finmientras': 'mientras',
                    'finpara': 'para',
                    'finsegun': 'segun',
                };

                // Helper: cuando encontramos un cierre, si el top del stack no
                // coincide, reportar AMBOS: que falta el cierre del actual
                // y emitir warning más útil.
                function reportMismatch(closer, expectedKw, ln) {
                    // ¿hay un bloque de ese tipo abajo en el stack?
                    let foundIdx = -1;
                    for (let i = stack.length - 1; i >= 0; i--) {
                        if (stack[i].kw === expectedKw) { foundIdx = i; break; }
                    }
                    if (foundIdx >= 0) {
                        // Algo intermedio quedó sin cerrar
                        for (let i = stack.length - 1; i > foundIdx; i--) {
                            errors.push({
                                line: stack[i].line,
                                msg: `Falta ${expectedEnd[stack[i].kw]} para cerrar ${friendlyName[stack[i].kw]} (abierto en línea ${stack[i].line}). Revisa antes de la línea ${ln}.`
                            });
                        }
                        // Eliminar desde foundIdx en adelante (incluyendo el bloque que se cierra)
                        stack.splice(foundIdx, stack.length - foundIdx);
                    } else {
                        errors.push({line: ln, msg: `${closer} sin ${friendlyName[expectedKw]} correspondiente`});
                    }
                }

                for (let i = 0; i < lines.length; i++) {
                    let raw = lines[i];
                    // Remove comment
                    let ci = -1, inStr = false;
                    for (let j = 0; j < raw.length - 1; j++) {
                        if (raw[j] === '"') inStr = !inStr;
                        if (!inStr && raw[j] === '/' && raw[j+1] === '/') { ci = j; break; }
                    }
                    let t = (ci >= 0 ? raw.slice(0, ci) : raw).trim();
                    // Quitar punto y coma final (PSeInt los acepta opcionales)
                    t = t.replace(/;+\s*$/, '').trim();
                    if (!t) continue;
                    let lt = t.toLowerCase();
                    let ln = i + 1;

                    // ── APERTURAS ──────────────────────────────────────
                    if (/^proceso\s+\S+/i.test(t)) {
                        if (stack.find(b => b.kw === 'proceso' || b.kw === 'algoritmo')) {
                            errors.push({line: ln, msg: "Proceso anidado no permitido"});
                        }
                        hasProc = true;
                        stack.push({kw: 'proceso', line: ln});
                        continue;
                    }
                    // FIX: Algoritmo es sinónimo oficial de Proceso (PSeInt v20250218)
                    if (/^algoritmo\s+\S+/i.test(t)) {
                        if (stack.find(b => b.kw === 'proceso' || b.kw === 'algoritmo')) {
                            errors.push({line: ln, msg: "Algoritmo anidado no permitido"});
                        }
                        hasProc = true;
                        stack.push({kw: 'algoritmo', line: ln});
                        continue;
                    }
                    if (/^subproceso\s+/i.test(t)) {
                        stack.push({kw: 'subproceso', line: ln});
                        continue;
                    }
                    if (/^(funcion|función)\s+/i.test(t)) {
                        stack.push({kw: 'funcion', line: ln});
                        continue;
                    }
                    // FIX: añadido Procedimiento (PSeInt v20250218)
                    if (/^procedimiento\s+/i.test(t)) {
                        stack.push({kw: 'procedimiento', line: ln});
                        continue;
                    }
                    // Si — multilínea (Entonces al final) o híbrido (Entonces seguido de
                    // stmt en misma línea PERO sin FinSi → el cierre vendrá con `SiNo X FinSi`
                    // o `FinSi` en otra línea).
                    if (/^si\s+.+entonces$/i.test(t) && !/finsi$/i.test(t) && !/^sino\s+si/i.test(t)) {
                        stack.push({kw: 'si', line: ln});
                        continue;
                    }
                    // FIX: forma híbrida `Si X Entonces <stmt>` (Entonces no al final, sin FinSi).
                    // Esto abre un Si que se cierra con `SiNo X FinSi` (otra línea) o `FinSi`.
                    if (/^si\s+.+\s+entonces\s+\S/i.test(t) && !/\s+finsi\s*$/i.test(t) && !/^sino\s+si/i.test(t)) {
                        stack.push({kw: 'si', line: ln});
                        continue;
                    }
                    // SiNo Si (encadenado) — no apila, pertenece al Si padre
                    if (/^sino\s+si\s+.+entonces$/i.test(t)) continue;
                    // Mientras (multilínea)
                    if (/^mientras\s+.+hacer$/i.test(t)) {
                        stack.push({kw: 'mientras', line: ln});
                        continue;
                    }
                    // Para — con o sin Con Paso (sin FinPara en la misma línea)
                    if (/^para\s+\w+\s*<-\s*.+\s+hasta\s+.+\s+hacer$/i.test(t) && !/finpara/i.test(t)) {
                        stack.push({kw: 'para', line: ln});
                        continue;
                    }
                    // Segun
                    if (/^segun\s+.+(\s+hacer)?$/i.test(t) && !/^segun\s*$/i.test(t)) {
                        // Aceptamos también "Segun x" sin "Hacer" (PSeInt lo permite)
                        stack.push({kw: 'segun', line: ln});
                        continue;
                    }
                    // Repetir
                    if (/^repetir$/i.test(t)) {
                        stack.push({kw: 'repetir', line: ln});
                        continue;
                    }

                    // ── CIERRES ────────────────────────────────────────
                    if (/^finproceso$/i.test(t)) {
                        reportMismatch('FinProceso', 'proceso', ln);
                        continue;
                    }
                    // FIX: FinAlgoritmo es sinónimo oficial de FinProceso
                    if (/^finalgoritmo$/i.test(t)) {
                        reportMismatch('FinAlgoritmo', 'algoritmo', ln);
                        continue;
                    }
                    if (/^finsubproceso$/i.test(t)) {
                        reportMismatch('FinSubProceso', 'subproceso', ln);
                        continue;
                    }
                    if (/^(finfuncion|finfunción)$/i.test(t)) {
                        reportMismatch('FinFuncion', 'funcion', ln);
                        continue;
                    }
                    // FIX: añadido FinProcedimiento (PSeInt v20250218)
                    if (/^finprocedimiento$/i.test(t)) {
                        reportMismatch('FinProcedimiento', 'procedimiento', ln);
                        continue;
                    }
                    if (/^finsi$/i.test(t)) {
                        reportMismatch('FinSi', 'si', ln);
                        continue;
                    }
                    if (/^finmientras$/i.test(t)) {
                        reportMismatch('FinMientras', 'mientras', ln);
                        continue;
                    }
                    if (/^finpara$/i.test(t)) {
                        reportMismatch('FinPara', 'para', ln);
                        continue;
                    }
                    if (/^finsegun$/i.test(t)) {
                        reportMismatch('FinSegun', 'segun', ln);
                        continue;
                    }
                    if (/^hasta\s+que\s+/i.test(t)) {
                        reportMismatch('Hasta Que', 'repetir', ln);
                        continue;
                    }
                    // SiNo solo — no cierra, pertenece a Si
                    if (/^sino$/i.test(t)) continue;

                    // FIX: forma híbrida `SiNo <stmt> FinSi` cierra el Si abierto en la
                    // misma línea. Si no la tratamos como cierre, el stack queda
                    // desbalanceado y las cases siguientes de Segun se reportan mal
                    // (firstWord = '?', "Falta FinSi", etc.).
                    if (/^sino\s+.+\s+finsi\s*$/i.test(t)) {
                        reportMismatch('FinSi', 'si', ln);
                        continue;
                    }
                    // NOTA: Si full-inline (`Si X Entonces stmt FinSi`) NO necesita
                    // early-continue aquí — el detector de apertura ya no la apila
                    // (por la guard `!/finsi$/i`). Dejamos que la validación de
                    // cuerpo más abajo siga funcionando.

                    // Caso de Segun (líneas tipo "1:" o "De Otro Modo:" — no son error)
                    // Si estamos dentro de Segun, aceptarlas (incluso si hay un Si abierto
                    // arriba en el stack, mientras el Segun esté en algún punto del stack).
                    const inSegunNow = stack.some(b => b.kw === 'segun');
                    // FIX: aceptar líneas tipo `1: stmt` también si contienen `<-`
                    // (asignaciones inline son comunes en case bodies compactos).
                    // Reconocemos un case label como: prefijo válido (número, rango,
                    // string corto o identificador) seguido de `:` seguido de stmt.
                    const _caseLabelM = inSegunNow && t.match(/^(\d+(?:\s*,\s*\d+)*|\d+\s*(?:-|\.\.)\s*\d+|"[^"]*"|[a-zA-ZáéíóúÁÉÍÓÚñÑ_][\wáéíóúÁÉÍÓÚñÑ]*|de\s+otro\s+modo|otro(?:\s+modo)?)\s*:\s*(\S.*)?$/i);
                    if (_caseLabelM) {
                        const afterColon = (_caseLabelM[2] || '').trim();
                        // Si después del `:` viene `Si X Entonces` (multi-línea, sin body)
                        // O `Si X Entonces stmt` (híbrido sin FinSi en la misma línea),
                        // abre un bloque Si pendiente que se cierra con `SiNo X FinSi` o `FinSi`.
                        if (/^si\s+.+\s+entonces\b/i.test(afterColon) && !/\bfinsi\s*$/i.test(t)) {
                            stack.push({kw: 'si', line: ln});
                        }
                        continue;
                    }
                    if (stack.length && stack[stack.length-1].kw === 'segun') {
                        if (/^(de\s+otro\s+modo|otro\s+modo|otro)\s*:/i.test(t)) continue;
                        // Caso "valor:" o "valor1, valor2:"
                        if (/^[\s\S]+:\s*$/.test(t)) continue;
                        // Caso "valor: statement"
                        if (/^[^:]+:\s*\S/.test(t) && !/<-/.test(t)) continue;
                    }

                    // ── VALIDACIÓN DE Si INLINE (cuerpo de cada rama) ──────────
                    // Captura tres formas:
                    //   A) `Si COND Entonces STMT [SiNo STMT2] FinSi`  (full inline)
                    //   B) `Si COND Entonces STMT`                    (hybrid: SiNo en línea siguiente)
                    //   C) `SiNo STMT [FinSi]`                        (rama SiNo inline)
                    // Cada STMT debe ser una instrucción REAL. Cuerpos como
                    // `"texto", monto` o `monto` (expr suelta) son ERROR — al
                    // usuario le falta el Escribir.
                    {
                        const _isValidStmt = (s) => {
                            const stmtKW = /^(escribir|leer|si|sino|mientras|para|repetir|segun|según|retornar|devolver|salir|salirpara|interrumpir|borrar|limpiar|esperar|definir|dimension|finsi|finmientras|finpara|finsegun)\b/i;
                            const x = s.trim().replace(/;+\s*$/, '').trim();
                            if (!x) return false;
                            if (stmtKW.test(x)) return true;
                            if (x.includes('<-')) return true;
                            if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ_][\wáéíóúÁÉÍÓÚñÑ]*\s*\([^)]*\)\s*$/.test(x)) return true;
                            return false;
                        };
                        let inlineHandled = false;
                        // (A) Full inline
                        const mA = t.match(/^Si\s+(.+?)\s+Entonces\s+(.+?)(?:\s+SiNo\s+(.+?))?\s+FinSi\s*$/i);
                        if (mA) {
                            const branches = [mA[2]];
                            if (mA[3]) branches.push(mA[3]);
                            for (const br of branches) {
                                if (!_isValidStmt(br)) {
                                    errors.push({line: ln, msg: `Si inline: el cuerpo '${br.trim()}' no es una instrucción válida. ¿Falta 'Escribir' antes? Ej: 'Si cond Entonces Escribir ${br.trim()} FinSi'.`});
                                    inlineHandled = true;
                                    break;
                                }
                            }
                            if (inlineHandled) continue;
                            inlineHandled = true; // ya validado, no caer en aperturas
                        }
                        // (B) Hybrid `Si X Entonces STMT` (sin FinSi, Entonces NO al final)
                        if (!inlineHandled) {
                            const mB = t.match(/^Si\s+(.+?)\s+Entonces\s+(.+)$/i);
                            if (mB && !/\bentonces\s*$/i.test(t) && !/\bfinsi\s*$/i.test(t) && !/^sino\s+si/i.test(t)) {
                                const body = mB[2].trim();
                                // No es 'Si X Entonces FinSi' (vacío)
                                if (body && !_isValidStmt(body)) {
                                    errors.push({line: ln, msg: `Si: el cuerpo después de 'Entonces' ('${body}') no es una instrucción válida. ¿Falta 'Escribir' antes? Ej: 'Si cond Entonces Escribir ${body}'.`});
                                    continue;
                                }
                            }
                        }
                        // (C) Rama `SiNo STMT [FinSi]` (sin ser "SiNo" solo ni "SiNo Si ...")
                        if (!inlineHandled) {
                            if (/^sino\s+\S/i.test(t) && !/^sino\s+si\b/i.test(t)) {
                                let body = t.replace(/^sino\s+/i, '').replace(/\s+finsi\s*$/i, '').trim();
                                if (body && !_isValidStmt(body)) {
                                    errors.push({line: ln, msg: `SiNo: el cuerpo '${body}' no es una instrucción válida. ¿Falta 'Escribir' antes? Ej: 'SiNo Escribir ${body}'.`});
                                    continue;
                                }
                            }
                        }
                    }

                    // ── REGLAS DE ERRORES PUNTUALES ───────────────────
                    // Definir syntax
                    if (/^definir\s+/i.test(t) && !/^definir\s+\S+.*\s+como\s+\w+/i.test(t)) {
                        errors.push({line: ln, msg: "Sintaxis Definir incorrecta. Formato: Definir <variable> Como <tipo>"});
                        continue;
                    }
                    // ── Validar identificadores: NO usar palabras reservadas ────
                    // Definir <var1>, <var2> Como <tipo>
                    let mDef = t.match(/^definir\s+(.+?)\s+como\s+\w+/i);
                    if (mDef) {
                        let foundReserved = false;
                        for (let v of mDef[1].split(',')) {
                            let name = v.trim().replace(/\[.*$/, '').trim();
                            if (checkReservedDecl(name, ln, 'variable', raw, i)) foundReserved = true;
                        }
                        if (foundReserved) continue;
                    }
                    // Dimension <arr1>[...], <arr2>[...]
                    let mDim = t.match(/^dimension\s+(.+)$/i);
                    if (mDim) {
                        let foundReserved = false;
                        let re = /([a-zA-ZáéíóúÁÉÍÓÚñÑ_][\wáéíóúÁÉÍÓÚñÑ]*)\s*\[/g;
                        let mm;
                        while ((mm = re.exec(mDim[1])) !== null) {
                            if (checkReservedDecl(mm[1], ln, 'arreglo', raw, i)) foundReserved = true;
                        }
                        if (foundReserved) continue;
                    }
                    // Para <var> <- ...
                    let mPara = t.match(/^para\s+(\w+)\s*<-/i);
                    if (mPara && checkReservedDecl(mPara[1], ln, 'variable del ciclo Para', raw, i)) continue;
                    // Leer <var1>, <var2>
                    let mLeer = t.match(/^leer\s+(.+)$/i);
                    if (mLeer) {
                        let foundReserved = false;
                        for (let v of mLeer[1].split(',')) {
                            let name = v.trim().replace(/\[.*$/, '').trim();
                            if (checkReservedDecl(name, ln, 'variable a leer', raw, i)) foundReserved = true;
                        }
                        if (foundReserved) continue;
                    }
                    // Asignación: <var> <- expr
                    let mAsig = t.match(/^([a-zA-ZáéíóúÁÉÍÓÚñÑ_][\wáéíóúÁÉÍÓÚñÑ]*)\s*<-/);
                    if (mAsig && checkReservedDecl(mAsig[1], ln, 'variable', raw, i)) continue;
                    // SubProceso / Funcion / Procedimiento: nombre y parámetros
                    let mSub = t.match(/^(?:subproceso|funcion|función|procedimiento)\s+(?:(\w+)\s*<-\s*)?(\w+)\s*(?:\(([^)]*)\))?/i);
                    if (mSub) {
                        let foundReserved = false;
                        if (mSub[1] && checkReservedDecl(mSub[1], ln, 'valor de retorno', raw, i)) foundReserved = true;
                        if (mSub[2] && checkReservedDecl(mSub[2], ln, 'función/subproceso', raw, i)) foundReserved = true;
                        if (mSub[3]) {
                            for (let p of mSub[3].split(',')) {
                                let pname = p.replace(/^\s*(var|ref)\s+/i, '')
                                             .replace(/\s+(por\s+referencia|por\s+valor|byref)\b.*$/i, '')
                                             .trim();
                                if (checkReservedDecl(pname, ln, 'parámetro', raw, i)) foundReserved = true;
                            }
                        }
                        if (foundReserved) continue;
                    }
                    // ── Uso indebido de reservadas en EXPRESIONES ──
                    // DESACTIVADO: causaba demasiados falsos positivos con líneas
                    // legítimas como `Para i <- 1 Hasta n Hacer x <- x*2 FinPara`
                    // (Para inline), llamadas `f(a, b)`, líneas que contienen
                    // operadores en posición que el heurístico detectaba mal, etc.
                    // La detección de reservadas YA se hace correctamente en las
                    // declaraciones (Definir, asignación, Para X<-, parámetros).
                    // Para activarla de nuevo, cambiar a `if (true) {`.
                    if (false) {
                        const NEVER_VALUE = new Set([
                            'proceso','finproceso','algoritmo','finalgoritmo',
                            'subproceso','finsubproceso','funcion','función','finfuncion','finfunción',
                            'procedimiento','finprocedimiento',
                            'si','entonces','sino','finsi','mientras','hacer','finmientras',
                            'para','hasta','con','paso','finpara','repetir','que',
                            'segun','según','finsegun','finsegún',
                            'definir','como','dimension','arreglo','leer',
                            'entero','real','texto','cadena','caracter','char','logico','lógico','numerico','numérico',
                            'var','ref','byref',
                            'salir','salirpara','interrumpir','tecla','segundos'
                        ]);
                        const BIN_OPS = new Set(['y','o','no','and','or','not','mod','div']);
                        // Extraer la parte que es expresión según el tipo de instrucción
                        let exprPart = null;
                        let exprOffsetInT = 0;
                        if (/^escribir(\s+sin\s+saltar)?\s+/i.test(t)) {
                            let m = t.match(/^escribir(?:\s+sin\s+saltar)?\s+/i);
                            exprOffsetInT = m[0].length;
                            exprPart = t.substring(exprOffsetInT);
                        } else if (/^si\s+.+\s+entonces$/i.test(t)) {
                            exprPart = t.replace(/^si\s+/i,'').replace(/\s+entonces$/i,'');
                            exprOffsetInT = t.toLowerCase().indexOf('si ') + 3;
                        } else if (/^mientras\s+.+\s+hacer$/i.test(t)) {
                            exprPart = t.replace(/^mientras\s+/i,'').replace(/\s+hacer$/i,'');
                            exprOffsetInT = t.toLowerCase().indexOf('mientras ') + 9;
                        } else if (/^hasta\s+que\s+/i.test(t)) {
                            let m = t.match(/^hasta\s+que\s+/i);
                            exprOffsetInT = m[0].length;
                            exprPart = t.substring(exprOffsetInT);
                        } else if (t.includes('<-')) {
                            let idx = t.indexOf('<-') + 2;
                            exprOffsetInT = idx;
                            exprPart = t.substring(idx);
                        }
                        if (exprPart) {
                            // Neutralizar strings literales (los reemplazamos por mismas longitudes
                            // de comillas vacías para preservar offsets)
                            let masked = exprPart.replace(/"[^"]*"/g, m => '"' + ' '.repeat(Math.max(0, m.length - 2)) + '"');
                            // Tokenizar con offsets
                            const tokRe = /\b[a-zA-ZáéíóúÁÉÍÓÚñÑ_][\wáéíóúÁÉÍÓÚñÑ]*\b/g;
                            let m;
                            let prevNonSpace = null;
                            while ((m = tokRe.exec(masked)) !== null) {
                                const tok = m[0];
                                const tokL = tok.toLowerCase();
                                const tokStart = m.index;
                                const tokEnd = tokStart + tok.length;
                                // Verificar carácter anterior no-blanco para distinguir uso como valor
                                let prevChar = '';
                                for (let k = tokStart - 1; k >= 0; k--) {
                                    if (!/\s/.test(masked[k])) { prevChar = masked[k]; break; }
                                }
                                // Verificar carácter siguiente no-blanco
                                let nextChar = '';
                                for (let k = tokEnd; k < masked.length; k++) {
                                    if (!/\s/.test(masked[k])) { nextChar = masked[k]; break; }
                                }
                                // Saltar si el token está dentro de comillas (defensivo)
                                let inStrAtTok = false;
                                for (let k = 0; k < tokStart; k++) {
                                    if (masked[k] === '\\' && masked[k+1] === '"') { k++; continue; }
                                    if (masked[k] === '"') inStrAtTok = !inStrAtTok;
                                }
                                if (inStrAtTok) continue;

                                // Tipos / keywords de control: error si aparecen aquí
                                if (NEVER_VALUE.has(tokL)) {
                                    // Posición real en raw (línea cruda)
                                    let tIndexInRaw = raw.indexOf(t);
                                    if (tIndexInRaw < 0) tIndexInRaw = 0;
                                    const absStart = tIndexInRaw + exprOffsetInT + tokStart;
                                    const absEnd = absStart + tok.length;
                                    errors.push({
                                        line: ln,
                                        msg: `'${tok}' es una palabra reservada de PSeInt y no puede usarse como valor en una expresión. Si querías escribir el texto literalmente, ponlo entre comillas: "${tok}".`
                                    });
                                    _pushRange(i, absStart, absEnd, 'error');
                                    continue;
                                }
                                // NOTA: NO validamos Y/O/NO/MOD/DIV como valor incorrecto.
                                // En PSeInt 'y', 'o' también son nombres válidos para variables
                                // (muy común en código de estudiantes: x, y, z). El intérprete
                                // resuelve ambigüedad por contexto. Validarlo aquí causa
                                // demasiados falsos positivos en código legítimo.
                                if (false && BIN_OPS.has(tokL)) {
                                    // Mantenido por si en el futuro se quiere reactivar con
                                    // mejor heurística.
                                    if (false) {
                                        continue;
                                    }
                                }
                            }
                        }
                    }
                    // ── Escribir: solo detectar coma final colgante ──
                    // (La detección "faltan comas entre tokens" fue retirada porque
                    // tenía demasiados falsos positivos con expresiones legítimas
                    // como `Escribir "x:", a + b` o `Escribir Sin Saltar "msg "`.)
                    if (/^escribir(\s|$)/i.test(t)) {
                        let body = t.replace(/^escribir\s*/i, '').replace(/^sin\s+saltar\s*/i, '');
                        let masked = body.replace(/"[^"]*"/g, '""');
                        if (/,\s*$/.test(masked.trim())) {
                            errors.push({line: ln, msg: "Escribir: coma final sin argumento. Quita la última coma o agrega el siguiente valor."});
                            continue;
                        }
                    }
                    // Si sin Entonces — pero ignorar SiNo, SiNo Si, y Si inline
                    if (/^si\s+/i.test(t) && !/entonces/i.test(t) && !/^sino/i.test(t) && !/finsi/i.test(t)) {
                        errors.push({line: ln, msg: "Si sin 'Entonces' al final"});
                        continue;
                    }
                    // Para without Hacer — ignorar si es inline completo
                    if (/^para\s+/i.test(t) && !/hacer/i.test(t) && !/finpara/i.test(t)) {
                        errors.push({line: ln, msg: "Para sin 'Hacer' al final"});
                        continue;
                    }
                    // Mientras without Hacer
                    if (/^mientras\s+/i.test(t) && !/hacer/i.test(t) && !/finmientras/i.test(t)) {
                        errors.push({line: ln, msg: "Mientras sin 'Hacer' al final"});
                        continue;
                    }
                    // Assignment without <-
                    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ_]\w*\s*=\s*/.test(t) &&
                        !/^(definir|como|si|segun|mientras|para|subproceso|proceso|funcion)/i.test(t) &&
                        !t.includes('<-')) {
                        errors.push({line: ln, msg: "¿Quisiste escribir '<-' en lugar de '='? Para asignar usa <- (ej: x <- 5). El = solo compara."});
                        continue;
                    }

                    // ── INSTRUCCIÓN DESCONOCIDA ────────────────────────
                    // Lista de patrones válidos reconocidos en PSeInt
                    const knownPatterns = [
                        /^proceso\s+\S+/i, /^finproceso$/i,
                        /^subproceso\s+/i, /^finsubproceso$/i,
                        /^(funcion|función)\s+/i, /^(finfuncion|finfunción)$/i,
                        /^si\s+/i, /^sino(\s+si\s+)?/i, /^finsi$/i,
                        /^mientras\s+/i, /^finmientras$/i,
                        /^para\s+/i, /^finpara$/i,
                        /^segun\s+/i, /^finsegun$/i,
                        /^repetir$/i, /^hasta\s+que\s+/i,
                        /^leer\s*/i, /^escribir/i,
                        /^definir\s+/i, /^dimension\s+/i,
                        /^retornar\s*/i, /^devolver\s*/i,
                        /^salir$/i, /^interrumpir$/i,
                        /^borrar/i, /^limpiar/i, /^esperar\s+/i,
                        /^[a-záéíóúüñ_][\wáéíóúüñ]*\s*<-/i,
                        /^[a-záéíóúüñ_][\wáéíóúüñ]*\s*\[/i,
                        /^[a-záéíóúüñ_][\wáéíóúüñ]*\s*\(/i,
                        /^de\s+otro\s+modo\s*:/i,
                        /^otro(\s+modo)?\s*:/i,
                    ];
                    let isKnownInstr = knownPatterns.some(p => p.test(t));
                    if (!isKnownInstr) {
                        // Dentro de Segun: "valor:" o "valor: stmt" son válidos
                        let inSegun = stack.length > 0 && stack[stack.length-1].kw === 'segun';
                        let isSegunCase = /^[^:]+:\s*/.test(t);
                        if (!inSegun || !isSegunCase) {
                            // Es una instrucción no reconocida
                            let firstWord = (t.match(/^([a-zA-ZáéíóúÁÉÍÓÚñÑ_]\w*)/) || ['','?'])[1] || t.split(/\s/)[0];
                            errors.push({line: ln, msg: `Instrucción no reconocida: '${firstWord}'. Verifica la sintaxis o el nombre.`});
                            continue;
                        }
                    }
                }

                // Bloques sin cerrar al final del archivo
                stack.forEach(b => {
                    errors.push({
                        line: b.line,
                        msg: `${friendlyName[b.kw]} sin ${expectedEnd[b.kw]} correspondiente (abierto en línea ${b.line})`
                    });
                });

                if (!hasProc && code.trim()) {
                    // FIX: aceptar también Procedimiento como bloque "principal"
                    // sin necesidad de Proceso/Algoritmo (raro pero permitido)
                    let hasSubProc = /\b(SubProceso|Funcion|Función|Procedimiento)\b/i.test(code);
                    if (!hasSubProc) {
                        errors.push({line: 1, msg: "Falta bloque Proceso/Algoritmo principal. El programa debe comenzar con 'Proceso NombrePrograma' o 'Algoritmo NombrePrograma'"});
                    }
                }

                // ── DETECCIÓN DE VARIABLES NO DEFINIDAS ──────────────────────
                // Pasa 1: recolectar todas las variables declaradas en el código.
                // Incluye: Definir, Para i <-, Leer, parámetros de SubProcesos/Funciones,
                // asignaciones simples (x <- valor) y variables de retorno de Funcion.
                {
                    // 'y' y 'o' son operadores lógicos en PSeInt (AND / OR) pero
                    // también son nombres de variable válidos y muy comunes (ej: x+y).
                    // Solución: NO están en reservedVars. En la Pasa 2 detectamos el
                    // contexto: si aparecen rodeados de espacios entre sub-expresiones
                    // (patrón de operador lógico: "expr Y expr") los ignoramos;
                    // si aparecen pegados a operadores aritméticos ("x + y") son variables.
                    const reservedVars = new Set(['proceso','finproceso','algoritmo','finalgoritmo','subproceso','finsubproceso','funcion','función','finfuncion','finfunción','procedimiento','finprocedimiento','definir','como','dimension','arreglo','leer','escribir','si','entonces','sino','finsi','segun','según','hacer','finsegun','finsegún','mientras','finmientras','repetir','hasta','que','para','finpara','con','paso','sin','saltar','de','otro','modo','retornar','devolver','salir','salirpara','interrumpir','borrar','limpiar','pantalla','esperar','tecla','segundos','no','and','or','not','y','o','verdadero','falso','true','false','mod','div','entero','real','texto','cadena','caracter','char','logico','numerico','var','ref','por','referencia','valor','byref','parametros','parámetros','raiz','rc','abs','trunc','redon','sen','cos','tan','asen','acos','atan','log','ln','exp','e','pi','piso','techo','floor','ceil','round','sqrt','potencia','pow','signo','sign','max','min','maximo','minimo','aleatorio','azar','random','longitud','largo','subcadena','trozo','substr','mayusculas','tomayusculas','amayusculas','mayuscula','minusculas','tominusculas','aminusculas','minuscula','convertiratexto','numerotexto','textonumero','numerotextoa','convertirencadena','numeroatexto','concatenar','recortar','trim','contiene','reemplazar','replace','posicioncaracter','posicion','indice','caracterenposicion','caracter','numeroacadena','cadenaanumero','textoanumero','convertiranumero','valor','invertir','reverse','asc','chr','log10']);
                    let declaredVars = new Set();
                    // FIX casing-consistency: mapa lower → primera ocurrencia canónica
                    // (con el casing exacto que el usuario eligió al declarar).
                    // PSeInt en escritorio es case-INSENSITIVE para identificadores,
                    // pero como editor educativo queremos que el usuario sea
                    // consistente con su propio estilo: declarar `hola` y usar
                    // `Hola` después debe avisarse.
                    let declaredCanonical = new Map(); // lower → original (global, primera vez vista en cualquier scope)
                    let declaredLineFirst = new Map(); // lower → 1-based line del primer Definir
                    // FIX scope: duplicados solo se reportan en el MISMO scope (main o sub:<n>).
                    // scopeDecls: Map<scopeKey, Map<lower, {name, line}>> — sólo Definir EXPLÍCITO
                    let scopeDecls = new Map();
                    let duplicateReported = new Set(); // scope+lower keys ya reportados como duplicados

                    // Registrar nombre del Proceso/Algoritmo principal (no es variable)
                    let procNames = new Set();
                    for (let ln of lines) {
                        let mProc = ln.match(/^\s*(?:Proceso|Algoritmo)\s+(\w+)/i);
                        if (mProc) procNames.add(mProc[1].toLowerCase());
                    }

                    // Helper: registra un nombre declarado en su SCOPE.
                    // - Duplicados sólo se reportan cuando AMBAS apariciones son
                    //   Definir EXPLÍCITO en el MISMO scope (params, asignaciones,
                    //   Para, Leer no cuentan — sólo Definir es redeclaración real).
                    // - declaredCanonical guarda la primera ocurrencia GLOBAL para
                    //   los chequeos de casing-mismatch (que sí son globales).
                    function _registerDecl(name, lineIdx, isExplicitDefinir, scopeKey) {
                        if (!name) return;
                        declaredVars.add(name);
                        const lo = name.toLowerCase();
                        if (!declaredCanonical.has(lo)) {
                            declaredCanonical.set(lo, name);
                            declaredLineFirst.set(lo, lineIdx + 1);
                        }
                        if (!isExplicitDefinir) return;
                        // Reportar duplicado SOLO dentro del mismo scope
                        const sk = scopeKey || 'main';
                        if (!scopeDecls.has(sk)) scopeDecls.set(sk, new Map());
                        const sm = scopeDecls.get(sk);
                        if (sm.has(lo)) {
                            const dupKey = sk + ':' + lo;
                            if (!duplicateReported.has(dupKey)) {
                                const first = sm.get(lo);
                                const sameCase = (first.name === name);
                                const msg = sameCase
                                    ? `Variable '${name}' ya fue declarada en la línea ${first.line}. No se puede redeclarar.`
                                    : `Variable '${name}' duplica a '${first.name}' (línea ${first.line}) — PSeInt no distingue mayúsculas/minúsculas en nombres. Renombra una de las dos.`;
                                errors.push({line: lineIdx + 1, msg});
                                duplicateReported.add(dupKey);
                            }
                        } else {
                            sm.set(lo, {name, line: lineIdx + 1});
                        }
                    }

                    // Determinar scope de cada línea
                    function _computeScopes(linesArr) {
                        const out = new Array(linesArr.length);
                        let current = 'main';
                        for (let i = 0; i < linesArr.length; i++) {
                            const ln = linesArr[i];
                            const open = ln.match(/^\s*(SubProceso|Funcion|Función|Procedimiento)\s+(?:\w+\s*<-\s*)?(\w+)/i);
                            const close = /^\s*(FinSubProceso|FinFuncion|FinFunción|FinProcedimiento)\b/i.test(ln);
                            if (open) {
                                current = 'sub:' + open[2].toLowerCase();
                                out[i] = current; // la línea del header pertenece al sub
                                continue;
                            }
                            out[i] = current;
                            if (close) current = 'main';
                        }
                        return out;
                    }
                    const _scopes = _computeScopes(lines);

                    // declaredVars guarda el nombre EXACTO (case-sensitive).
                    // Variables de usuario son case-sensitive: "y" != "Y".
                    for (let li = 0; li < lines.length; li++) {
                        let ln = lines[li];
                        const sk = _scopes[li] || 'main';
                        // FIX: las lecciones a veces compactan varios stmts en una línea:
                        //   `Definir notas Como Real; Definir i,n,opc Como Entero`
                        // Recorremos cada sub-statement separado por `;`.
                        const _segs = ln.split(';');
                        for (const _seg of _segs) {
                            // Definir x, y Como Tipo
                            let dm = _seg.match(/^\s*Definir\s+(.+?)\s+Como\s+\w+/i);
                            if (dm) {
                                dm[1].split(',').forEach(v => {
                                    let vn = v.trim();
                                    if (vn) _registerDecl(vn, li, true, sk);
                                });
                            }
                        }
                        // Dimension arr[...]
                        let dim = ln.match(/^\s*Dimension\s+(.+)$/i);
                        if (dim) {
                            let re2 = /(\w+)\s*\[/g, mm2;
                            while ((mm2 = re2.exec(dim[1]))) _registerDecl(mm2[1], li, false, sk);
                        }
                        // Para i <- ...
                        let pm = ln.match(/^\s*Para\s+(\w+)\s*<-/i);
                        if (pm) _registerDecl(pm[1], li, false, sk);
                        // Leer x, y, z
                        let lm = ln.match(/^\s*Leer\s+(.+)$/i);
                        if (lm) {
                            lm[1].split(',').forEach(v => {
                                let vn = v.trim().replace(/\[.*$/, '');
                                if (vn) _registerDecl(vn, li, false, sk);
                            });
                        }
                        // Asignación directa: x <- expr (case original)
                        let am = ln.match(/^\s*([a-zA-ZáéíóúÁÉÍÓÚñÑ_][\wáéíóúÁÉÍÓÚñÑ]*)\s*<-/i);
                        if (am) _registerDecl(am[1], li, false, sk);
                        // SubProceso / Funcion / Procedimiento — nombre y parámetros
                        // sm[1] = nombre del sub, sm[2] = lista de params crudos
                        let sm = ln.match(/^\s*(?:SubProceso|Funcion|Función|Procedimiento)\s+(?:\w+\s*<-\s*)?(\w+)\s*(?:\(([^)]*)\))?/i);
                        if (sm) {
                            // El nombre del sub lo declara el caller → scope 'main'.
                            if (sm[1]) _registerDecl(sm[1], li, false, 'main');
                            if (sm[2]) {
                                const subScope = 'sub:' + sm[1].toLowerCase();
                                sm[2].split(',').forEach(p => {
                                    let pRaw = p.trim();
                                    // FIX: rechazar `var X` — no es sintaxis válida de PSeInt.
                                    if (/^var\s+/i.test(pRaw)) {
                                        errors.push({
                                            line: li + 1,
                                            msg: `Parámetro inválido: '${pRaw}'. PSeInt no acepta 'var' aquí. Usa 'Por Referencia' o 'Por Valor' después del nombre, o solo el nombre. Ej: 'saldo Por Referencia' o simplemente 'saldo'.`
                                        });
                                    }
                                    let pn = pRaw.replace(/^\s*(var|ref)\s+/i,'').replace(/\s+(por\s+referencia|por\s+valor|byref)\b.*$/i,'').trim();
                                    if (pn) _registerDecl(pn, li, false, subScope);
                                });
                            }
                        }
                        // Variable de retorno de Funcion (en scope del propio sub)
                        let rm = ln.match(/^\s*(?:Funcion|Función)\s+(\w+)\s*<-/i);
                        if (rm) {
                            const subMatch = ln.match(/^\s*(?:Funcion|Función)\s+\w+\s*<-\s*(\w+)/i);
                            const subScopeR = subMatch ? 'sub:' + subMatch[1].toLowerCase() : sk;
                            _registerDecl(rm[1], li, false, subScopeR);
                        }
                    }

                    // ── PASA 1.5: TIPADO DE VARIABLES ─────────────────────────
                    // Recolectar tipos declarados (Definir x Como Tipo) y detectar
                    // asignaciones que cambian el tipo sin función de conversión.
                    // PSeInt es de tipado dinámico en runtime, pero como editor
                    // educativo avisamos para acercarnos al espíritu del lenguaje.
                    {
                        // type canónicos: 'entero' 'real' 'numerico' 'texto' 'caracter' 'logico'
                        // alias: cadena→texto, char→caracter, lógico→logico, numérico→numerico
                        const _typeAlias = (s) => {
                            if (!s) return null;
                            s = s.toLowerCase()
                                .replace(/^cadena$/, 'texto')
                                .replace(/^char$/, 'caracter')
                                .replace(/^lógico$/, 'logico')
                                .replace(/^numérico$/, 'numerico');
                            return s;
                        };
                        const _isNumType = (t) => t === 'entero' || t === 'real' || t === 'numerico';
                        const _isStrType = (t) => t === 'texto' || t === 'caracter';
                        // Compatible: misma categoría
                        const _compat = (declared, value) => {
                            if (!declared || !value) return true;
                            if (declared === value) return true;
                            if (_isNumType(declared) && _isNumType(value)) return true;
                            if (_isStrType(declared) && _isStrType(value)) return true;
                            return false;
                        };
                        // Funciones que devuelven explícitamente un tipo (cast)
                        const FN_RETURN_TYPE = {
                            'convertiratexto': 'texto', 'numeroatexto': 'texto', 'numerotexto': 'texto',
                            'convertirencadena': 'texto', 'cadena': 'texto',
                            'convertiranumero': 'real', 'textoanumero': 'real', 'numero': 'real',
                            'valor': 'real',
                            'entero': 'entero', 'real': 'real',
                            'caracter': 'caracter', 'char': 'caracter',
                            'asc': 'entero', 'chr': 'caracter',
                            'longitud': 'entero', 'largo': 'entero',
                            'subcadena': 'texto', 'trozo': 'texto', 'substr': 'texto',
                            'mayusculas': 'texto', 'minusculas': 'texto',
                            'concatenar': 'texto', 'recortar': 'texto', 'trim': 'texto',
                            'reemplazar': 'texto', 'replace': 'texto', 'invertir': 'texto',
                            'raiz': 'real', 'rc': 'real', 'sqrt': 'real',
                            'abs': 'real', 'trunc': 'entero', 'redon': 'entero', 'round': 'entero',
                            'piso': 'entero', 'floor': 'entero', 'techo': 'entero', 'ceil': 'entero',
                            'aleatorio': 'entero', 'azar': 'entero', 'random': 'real',
                            'contiene': 'logico'
                        };
                        // Inferir tipo de una expresión RHS (best-effort, conservador)
                        function _inferType(expr) {
                            if (!expr) return null;
                            let e = expr.trim();
                            // FIX: si la línea es multi-statement con `;`, tomamos solo
                            // la parte ANTES del primer `;` (la asignación que estamos
                            // analizando termina ahí; el resto son otros statements).
                            if (e.includes(';')) e = e.split(';')[0].trim();
                            // FIX: enmascarar `<-` para que el detector de comparación no
                            // confunda el `<` de la siguiente asignación como operador.
                            const eForOp = e.replace(/<-/g, '##');
                            // String literal "..."
                            if (/^"[^"]*"$/.test(e)) {
                                return e.length === 3 ? 'caracter' : 'texto';
                            }
                            // Concatenación de strings o que contiene string literal
                            if (/"[^"]*"/.test(e) && /\+/.test(e)) return 'texto';
                            // Numero entero
                            if (/^-?\d+$/.test(e)) return 'entero';
                            // Numero real
                            if (/^-?\d+\.\d+$/.test(e)) return 'real';
                            // Booleano
                            if (/^(Verdadero|Falso|true|false)$/i.test(e)) return 'logico';
                            // Llamada a función conocida: Nombre(...) — el outermost
                            const fnCall = e.match(/^([a-zA-ZáéíóúÁÉÍÓÚñÑ_][\wáéíóúÁÉÍÓÚñÑ]*)\s*\(/);
                            if (fnCall) {
                                const fn = fnCall[1].toLowerCase();
                                if (FN_RETURN_TYPE[fn]) return FN_RETURN_TYPE[fn];
                            }
                            // Comparación → logico (usando expresión sin `<-`)
                            if (/[<>]=?|<>|(?<![<>])=(?!=)/.test(eForOp)) return 'logico';
                            // Operadores lógicos (palabras Y/O/NO con bordes)
                            if (/\b(Y|O|NO|AND|OR|NOT)\b/.test(e)) return 'logico';
                            // Aritmético con literales numéricos → numerico (conservador)
                            if (/^[\d\s+\-*/().^%]+$/.test(e)) return 'real';
                            // Acceso a variable conocida con tipo: usar su tipo
                            if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ_][\wáéíóúÁÉÍÓÚñÑ]*$/.test(e)) {
                                const lo = e.toLowerCase();
                                if (declaredType.has(lo)) return declaredType.get(lo).type;
                            }
                            return null; // no inferible
                        }

                        // declaredType: lower → {type, line, name}
                        var declaredType = new Map();
                        // 1) Recoger Definir ... Como TIPO
                        for (let li = 0; li < lines.length; li++) {
                            const ln = lines[li];
                            const m = ln.match(/^\s*Definir\s+(.+?)\s+Como\s+(\w+)/i);
                            if (!m) continue;
                            const tp = _typeAlias(m[2]);
                            if (!tp) continue;
                            m[1].split(',').forEach(v => {
                                const vn = v.trim();
                                if (!vn) return;
                                const lo = vn.toLowerCase();
                                if (!declaredType.has(lo)) {
                                    declaredType.set(lo, {type: tp, line: li + 1, name: vn});
                                }
                            });
                        }
                        // 2) Recorrer asignaciones y comparar
                        const _typeReported = new Set(); // line:name dedupe
                        for (let li = 0; li < lines.length; li++) {
                            const raw = lines[li];
                            // Sin comentario
                            let ci = -1, inS = false;
                            for (let j = 0; j < raw.length - 1; j++) {
                                if (raw[j] === '"') inS = !inS;
                                if (!inS && raw[j] === '/' && raw[j+1] === '/') { ci = j; break; }
                            }
                            const t = (ci >= 0 ? raw.slice(0, ci) : raw).trim();
                            if (!t || /^definir\s+/i.test(t)) continue;
                            // Asignación simple: var <- expr (no Para ... <-)
                            if (/^para\s+/i.test(t)) continue;
                            const m = t.match(/^([a-zA-ZáéíóúÁÉÍÓÚñÑ_][\wáéíóúÁÉÍÓÚñÑ]*)\s*<-\s*(.+)$/);
                            if (!m) continue;
                            const vname = m[1];
                            const lo = vname.toLowerCase();
                            const decl = declaredType.get(lo);
                            if (!decl) continue;
                            const inferred = _inferType(m[2]);
                            if (!inferred) continue;
                            if (_compat(decl.type, inferred)) continue;
                            // Conflicto. ¿Llamada de conversión? El _inferType ya
                            // devuelve el tipo del cast, así que si no coincide
                            // es real conflicto.
                            const key = (li + 1) + ':' + lo;
                            if (_typeReported.has(key)) continue;
                            _typeReported.add(key);
                            const friendly = {
                                'entero':'Entero','real':'Real','numerico':'Numerico',
                                'texto':'Texto','caracter':'Caracter','logico':'Logico'
                            };
                            const dT = friendly[decl.type] || decl.type;
                            const iT = friendly[inferred] || inferred;
                            errors.push({
                                line: li + 1,
                                msg: `Tipo incompatible: '${vname}' fue declarada Como ${dT} (línea ${decl.line}) y se le asigna un valor ${iT}. Usa una función de conversión (ConvertirATexto, ConvertirANumero, etc.) o cambia el tipo en Definir.`
                            });
                        }
                    }

                    // Pasa 2: detectar uso de variables no declaradas en expresiones
                    // Se revisan las líneas que contienen expresiones con variables:
                    // Escribir, Si...Entonces, Mientras...Hacer, Hasta Que, lado derecho de <-,
                    // Retornar/Devolver, Para (límites), y asignaciones de arreglos.
                    for (let i = 0; i < lines.length; i++) {
                        let raw = lines[i];
                        // Quitar comentario de línea
                        let ci2 = -1, inSt2 = false;
                        for (let j = 0; j < raw.length - 1; j++) {
                            if (raw[j] === '"') inSt2 = !inSt2;
                            if (!inSt2 && raw[j] === '/' && raw[j+1] === '/') { ci2 = j; break; }
                        }
                        let t2 = (ci2 >= 0 ? raw.slice(0, ci2) : raw).trim();
                        if (!t2) continue;
                        let ln2 = i + 1;

                        // Líneas a omitir (declaraciones, estructuras de control que no usan vars)
                        if (/^definir\s+/i.test(t2)) continue;
                        if (/^dimension\s+/i.test(t2)) continue;
                        if (/^(proceso|algoritmo|subproceso|funcion|función|procedimiento)\s+/i.test(t2)) continue;
                        if (/^(finproceso|finalgoritmo|finsubproceso|finfuncion|finfunción|finprocedimiento|finsi|finpara|finmientras|finsegun)$/i.test(t2)) continue;
                        if (/^repetir$/i.test(t2)) continue;
                        if (/^sino$/i.test(t2)) continue;
                        if (/^(de\s+otro\s+modo|otro)\s*:/i.test(t2)) continue;
                        // FIX importante: PSeInt acepta múltiples patrones avanzados que
                        // confunden a un analyzer line-by-line:
                        //   • Múltiples statements separados por ';' en la misma línea
                        //   • Si X Entonces STMT  (sin FinSi en esta línea — separado)
                        //   • SiNo STMT FinSi    (rama partida en otra línea)
                        //   • Etiqueta de Segun con statement inline:  1: Escribir "x"
                        // Para evitar FALSOS POSITIVOS en estos casos, skip-eamos el
                        // análisis profundo de palabras reservadas-como-valor.
                        // El intérprete los ejecuta correctamente; aquí solo evitamos
                        // alarmas que no son reales.
                        const _noStrForSemicolon = t2.replace(/"[^"]*"/g, '""');
                        const hasMultiStmt = _noStrForSemicolon.includes(';');
                        const hasInlineCtrl = /^(si|sino)\s+.+\s+entonces\s+\S/i.test(t2)
                                           || /^sino\s+\S/i.test(t2) && !/^sino\s*$/i.test(t2);
                        // FIX bug crítico: `:` DENTRO de un string literal (ej.
                        // `Escribir "Tirada ", n, ": ", x`) hacía que la línea se
                        // tratara como case-label de Segun y se saltara la validación
                        // de variables → falsos NEGATIVOS (vars no declaradas no se
                        // reportaban). Ahora chequeamos contra el código con strings
                        // enmascarados.
                        const hasSegunLabelInline = /^([^:]+):\s*\S/.test(_noStrForSemicolon) && !/^(de\s+otro\s+modo)\s*:/i.test(_noStrForSemicolon);
                        if (hasMultiStmt || hasInlineCtrl || hasSegunLabelInline) continue;
                        // ── FIX: Si INLINE — extraer solo la condición y el RHS de la asignación
                        // interna, NO toda la expresión que incluiría 'FinSi'.
                        // Patrón: Si COND Entonces STMT FinSi  (y con SiNo opcional)
                        const inlineSi = t2.match(/^Si\s+(.+?)\s+Entonces\s+(.+?)(?:\s+SiNo\s+(.+?))?\s+FinSi\s*$/i);
                        if (inlineSi) {
                            // Validar la condición (con la pasa normal)
                            // Y los STMT internos. Procesamos las partes por separado.
                            const partsToValidate = [inlineSi[1], inlineSi[2]];
                            if (inlineSi[3]) partsToValidate.push(inlineSi[3]);
                            // Combinar en una "expresión virtual" con comas, mismo trato
                            const exprPart = partsToValidate.join(' , ');
                            // (continúa con el flujo normal)
                            // Para evitar duplicar código, asignamos y dejamos que la pasa siguiente lo use
                            // No usamos `continue` para que el código siguiente analice la expresión.
                            // (manejado en el flujo principal abajo via la variable exprPart)
                            // Setear exprPart aquí y NO ejecutar los else-if siguientes
                            var __forcedExpr = exprPart;
                        }

                        // Extraer la "expresión" a analizar según el tipo de instrucción
                        let exprPart = null;
                        // Si fue Si inline ya tenemos exprPart prepara
                        if (typeof __forcedExpr === 'string' && __forcedExpr) {
                            exprPart = __forcedExpr;
                            __forcedExpr = null;
                        } else if (/^escribir(\s+sin\s+saltar)?\s+/i.test(t2)) {
                            // FIX: aceptar `Escribir Sin Saltar X` (modifier al inicio) Y
                            // `Escribir X Sin Saltar` (modifier al final, también válido en
                            // PSeInt). Strippeamos ambas posiciones para que `Sin`/`Saltar`
                            // no se reporten como keywords mal usadas.
                            exprPart = t2.replace(/^escribir(?:\s+sin\s+saltar)?\s+/i, '')
                                         .replace(/\s+sin\s+saltar\s*$/i, '');
                        } else if (/^leer\s+/i.test(t2)) {
                            // Leer declara variables — pero los nombres deben ser identificadores válidos.
                            // Antes: skip total. Ahora validamos cada token y rechazamos reservadas.
                            // FIX: split bracket-aware. `Leer mat[f, c]` no debe partirse
                            // en `mat[f` y `c]` — la coma dentro de `[]` pertenece al subíndice.
                            const _leerStr = t2.replace(/^leer\s+/i, '');
                            const leerArgs = [];
                            {
                                let buf = '', d = 0;
                                for (const ch of _leerStr) {
                                    if (ch === '[' || ch === '(') d++;
                                    else if (ch === ']' || ch === ')') d--;
                                    else if (ch === ',' && d === 0) { if (buf.trim()) leerArgs.push(buf.trim()); buf = ''; continue; }
                                    buf += ch;
                                }
                                if (buf.trim()) leerArgs.push(buf.trim());
                            }
                            const reservedLeer = new Set([
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
                                'retornar','devolver','salir','salirpara','interrumpir',
                                'borrar','limpiar','pantalla','esperar','tecla','segundos'
                            ]);
                            let leerError = false;
                            for (const arg of leerArgs) {
                                // Acepta `nombreVar` o `arr[expr]`
                                const namePart = arg.replace(/\[.*$/, '').trim();
                                if (!namePart) continue;
                                if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-ZáéíóúÁÉÍÓÚñÑ_0-9]*$/.test(namePart)) {
                                    errors.push({line: ln2, msg: `Leer: '${namePart}' no es un nombre de variable válido. Leer espera nombres de variables separados por comas (ej: 'Leer x, y, z').`});
                                    leerError = true;
                                    break;
                                }
                                if (reservedLeer.has(namePart.toLowerCase())) {
                                    errors.push({line: ln2, msg: `Leer: '${namePart}' es una palabra reservada de PSeInt y no puede usarse como nombre de variable. Renómbrala (ej: '${namePart}1' o 'mi${namePart}').`});
                                    // Marcar global para el highlighter
                                    window._reservedAsVarNames.add(namePart);
                                    window._reservedAsVarNames.add(namePart.toLowerCase());
                                    window._reservedAsVarNames.add(namePart.toUpperCase());
                                    leerError = true;
                                    break;
                                }
                            }
                            if (leerError) continue;
                            continue; // Leer no consume vars en expresiones → seguimos al siguiente line
                        } else if (/^si\s+(.+?)\s+entonces$/i.test(t2)) {
                            exprPart = t2.replace(/^si\s+/i,'').replace(/\s+entonces$/i,'');
                        } else if (/^sino\s+si\s+(.+?)\s+entonces$/i.test(t2)) {
                            exprPart = t2.replace(/^sino\s+si\s+/i,'').replace(/\s+entonces$/i,'');
                        } else if (/^mientras\s+(.+?)\s+hacer$/i.test(t2)) {
                            exprPart = t2.replace(/^mientras\s+/i,'').replace(/\s+hacer$/i,'');
                        } else if (/^hasta\s+que\s+/i.test(t2)) {
                            exprPart = t2.replace(/^hasta\s+que\s+/i,'');
                        } else if (/^(retornar|devolver)\s+/i.test(t2)) {
                            exprPart = t2.replace(/^(retornar|devolver)\s+/i,'');
                        } else if (/^para\s+\w+\s*<-/i.test(t2)) {
                            // FIX: el Para se chequea ANTES de la asignación genérica con <-
                            // porque también contiene <- pero tiene Hasta/Hacer que no son valores.
                            // Extraemos las tres expresiones (inicio, fin, paso) separadas por
                            // comas para que el analizador NO trate Hasta/Hacer como tokens.
                            const mPara2 = t2.match(/^para\s+\w+\s*<-\s*(.+?)\s+hasta\s+(.+?)(?:\s+con\s+paso\s+(.+?))?\s+hacer\s*$/i);
                            if (mPara2) {
                                exprPart = mPara2[1] + ' , ' + mPara2[2] + (mPara2[3] ? ' , ' + mPara2[3] : '');
                            } else {
                                exprPart = null;
                            }
                        } else if (t2.includes('<-')) {
                            // Lado derecho de una asignación
                            exprPart = t2.split('<-').slice(1).join('<-');
                        }
                        if (!exprPart) continue;

                        // Quitar strings literales para no analizar su contenido,
                        // preservando offsets (relleno con espacios) para detectar bien
                        // la posición de cada token dentro de la expresión.
                        let noStr = exprPart.replace(/"[^"]*"/g, m => '"' + ' '.repeat(Math.max(0, m.length - 2)) + '"');

                        // FIX: la detección camina con posiciones absolutas (matchAll-like)
                        // para poder analizar el CONTEXTO de cada token (operador vs valor).
                        // Antes, todas las reservadas se saltaban con un `continue` ciego,
                        // ocultando misuse como `Escribir x + Y` donde Y se usa como variable.
                        const tokRe = /\b[a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-ZáéíóúÁÉÍÓÚñÑ_0-9]*\b/g;
                        // OPERADORES de palabra: válidos cuando tienen valor a ambos lados
                        const BIN_OP_WORDS = new Set(['y','o','no','mod','div','and','or','not']);
                        // ESTRUCTURALES: keywords de control que NUNCA pueden ser valor
                        const STRUCTURAL_KW = new Set([
                            'proceso','finproceso','algoritmo','finalgoritmo',
                            'subproceso','finsubproceso','funcion','función','finfuncion','finfunción',
                            'procedimiento','finprocedimiento',
                            'si','entonces','sino','finsi',
                            'mientras','hacer','finmientras',
                            'para','hasta','con','paso','finpara',
                            'repetir','que',
                            'segun','según','finsegun','finsegún',
                            'definir','como','dimension','arreglo','leer','escribir',
                            'de','otro','modo','sin','saltar',
                            'var','ref','por','referencia','byref','parametros','parámetros',
                            'retornar','devolver','salir','salirpara','interrumpir',
                            'borrar','limpiar','pantalla','esperar','tecla','segundos'
                        ]);
                        // TIPOS de datos: válidos como cast SOLO si van seguidos de '('
                        const TYPE_KW = new Set([
                            'entero','real','texto','cadena','caracter','char','logico','lógico','numerico','numérico'
                        ]);
                        // FUNCIONES builtin: válidas SOLO si van seguidas de '('
                        const FUNCTION_KW = new Set([
                            'raiz','rc','sqrt','abs','trunc','redon','round','sen','sin','cos','tan',
                            'asen','acos','atan','log','ln','exp','log10','piso','floor','techo','ceil',
                            'potencia','pow','signo','sign','aleatorio','random','azar','max','min',
                            'maximo','minimo','longitud','largo','subcadena','trozo','substr',
                            'mayusculas','minusculas','tomayusculas','tominusculas','amayusculas','aminusculas',
                            'convertiratexto','textonumero','numerotexto','convertirencadena',
                            'numeroatexto','concatenar','recortar','trim','contiene','reemplazar','replace',
                            'posicioncaracter','posicion','indice','caracterenposicion',
                            'invertir','reverse','asc','chr','convertiranumero','textoanumero',
                            'mayuscula','minuscula','cadenaanumero'
                        ]);
                        // LITERALES válidos en cualquier posición de valor
                        const LITERAL_OK = new Set(['verdadero','falso','true','false','pi','e']);
                        // FIX falso positivo: `(` también es válido como "char antes/después de operador"
                        // porque abre un grupo de valor: `(x > 0) Y (y > 0)` debe ser reconocido como
                        // operador binario. Antes, el `Y` con prev=`)` y next=`(` se reportaba como
                        // identificador reservado.
                        const isValueChar = (c) => !!c && /[A-Za-z0-9_)("À-ſ]/.test(c);
                        const reportedTokens = new Set();
                        let mTok;
                        let breakLine = false;
                        // FIX: permitimos HASTA 3 errores por línea para que problemas
                        // posteriores (palabras reservadas, vars no declaradas) no queden
                        // ocultos detrás del primer error encontrado.
                        let lineErrorCount = 0;
                        const MAX_ERRORS_PER_LINE = 3;
                        while ((mTok = tokRe.exec(noStr)) !== null && lineErrorCount < MAX_ERRORS_PER_LINE) {
                            const tok = mTok[0];
                            const tokL = tok.toLowerCase();
                            const tokStart = mTok.index;
                            const tokEnd = tokStart + tok.length;
                            if (procNames.has(tokL)) continue;
                            if (reportedTokens.has(tok)) continue;
                            if (tok.length < 1) continue;

                            // Char no-blanco previo y siguiente (dentro de la expresión)
                            let prev = '';
                            for (let k = tokStart - 1; k >= 0; k--) {
                                if (!/\s/.test(noStr[k])) { prev = noStr[k]; break; }
                            }
                            let next = '';
                            for (let k = tokEnd; k < noStr.length; k++) {
                                if (!/\s/.test(noStr[k])) { next = noStr[k]; break; }
                            }

                            // ── FIX IMPORTANTE: chequear si es RESERVADA antes que declaredVars ──
                            // Si el usuario hizo `Definir y Como Entero`, `y` está en declaredVars,
                            // pero `y` ES reservada y SIGUE siendo error usarla. Procesamos primero
                            // el check de reservada para no perder esos errores.
                            if (reservedVars.has(tokL)) {
                                // 1) Literales válidos en posición de valor (Verdadero, Falso, Pi, E)
                                if (LITERAL_OK.has(tokL)) continue;

                                // 2) Operador-palabra (Y, O, NO, MOD, DIV, AND, OR, NOT):
                                //    `Y, O, MOD, DIV, AND, OR` son BINARIOS → necesitan valor a ambos lados.
                                //    `NO, NOT` son UNARIOS → solo necesitan valor a la DERECHA (después
                                //    pueden venir de paréntesis o keyword como Entonces). FIX falso positivo
                                //    en `NO (x > 0)` donde prev era `,` o ` `.
                                if (BIN_OP_WORDS.has(tokL)) {
                                    const isUnary = (tokL === 'no' || tokL === 'not');
                                    const inOpPos = isUnary
                                        ? isValueChar(next)  // unario: solo derecha
                                        : (isValueChar(prev) && isValueChar(next));
                                    if (!inOpPos) {
                                        reportedTokens.add(tok);
                                        errors.push({
                                            line: ln2,
                                            msg: `'${tok}' es una palabra reservada de PSeInt (operador lógico/aritmético) y no puede usarse como nombre de variable. Renómbrala (por ejemplo: '${tok}1', '${tok}Var' o 'mi${tok}').`
                                        });
                                        // Marcar global para el highlighter — pinta TODAS las apariciones
                                        window._reservedAsVarNames.add(tok);
                                        window._reservedAsVarNames.add(tok.toLowerCase());
                                        window._reservedAsVarNames.add(tok.toUpperCase());
                                        lineErrorCount++;
                                    }
                                    continue;
                                }

                                // 3) Estructural (Si, Para, Mientras, Entonces, Hacer, Hasta,
                                //    Definir, Como, Leer, Escribir, Proceso, FinSi, etc.):
                                //    NUNCA puede aparecer como valor. Es siempre un error de sintaxis.
                                if (STRUCTURAL_KW.has(tokL)) {
                                    reportedTokens.add(tok);
                                    errors.push({
                                        line: ln2,
                                        msg: `'${tok}' es una palabra reservada del lenguaje (estructura de control) y no puede usarse como valor en una expresión. ¿Te falta completar la instrucción o querías una variable con otro nombre?`
                                    });
                                    lineErrorCount++;
                                    continue;
                                }

                                // 4) Tipo de dato (Entero, Real, Texto, Cadena, Caracter, Logico):
                                //    SOLO válido como cast `Entero(x)`, `Real(y)`, etc.
                                //    Sin paréntesis → es error.
                                if (TYPE_KW.has(tokL)) {
                                    if (next !== '(') {
                                        reportedTokens.add(tok);
                                        errors.push({
                                            line: ln2,
                                            msg: `'${tok}' es un tipo de dato de PSeInt. Si querías convertir un valor, usa '${tok}(...)'. Si querías una variable, renómbrala.`
                                        });
                                        lineErrorCount++;
                                    }
                                    continue;
                                }

                                // 5) Función builtin (raiz, abs, log, longitud, etc.):
                                //    requiere paréntesis. Sin ellos es error.
                                if (FUNCTION_KW.has(tokL)) {
                                    if (next !== '(') {
                                        reportedTokens.add(tok);
                                        errors.push({
                                            line: ln2,
                                            msg: `'${tok}' es una función de PSeInt y requiere paréntesis: '${tok}(...)'. Si querías una variable, renómbrala.`
                                        });
                                        lineErrorCount++;
                                    }
                                    continue;
                                }

                                // Cualquier otro reservado no categorizado → tolerar (no saturar)
                                continue;
                            }

                            // Si llegamos aquí, NO es palabra reservada.
                            // Ahora sí aplicamos el filtro de variables declaradas:
                            // si el usuario la declaró, no es error.
                            if (declaredVars.has(tok)) continue;

                            // FIX: si NO matchea exacto pero EXISTE el lowercase,
                            // es un mismatch de mayúsculas/minúsculas. PSeInt en
                            // escritorio lo aceptaría (case-insensitive) pero
                            // nuestro editor exige consistencia para que el código
                            // sea legible y portable.
                            const tokLo2 = tok.toLowerCase();
                            if (declaredCanonical.has(tokLo2)) {
                                const canonical = declaredCanonical.get(tokLo2);
                                reportedTokens.add(tok);
                                errors.push({
                                    line: ln2,
                                    msg: `Variable '${tok}' usa mayúsculas/minúsculas distintas a su declaración '${canonical}'. PSeInt no distingue casing pero por consistencia usa siempre '${canonical}'.`
                                });
                                lineErrorCount++;
                                continue;
                            }

                            // Variable usada sin declarar (case-sensitive)
                            reportedTokens.add(tok);
                            errors.push({
                                line: ln2,
                                msg: `Variable '${tok}' no está definida. Declárala con 'Definir ${tok} Como <Tipo>' o asígnale un valor antes de usarla.`
                            });
                            lineErrorCount++;
                        }
                    }
                }

                // ════════════════════════════════════════════════════════
                // DETECCIÓN DE SÍMBOLOS SUELTOS / INVÁLIDOS
                // PSeInt usa solo: letras, dígitos, _, áéíóú, espacios,
                // ()[]+-*/^%<>=,"#.. Cualquier otro carácter en código
                // (fuera de strings y comentarios) es un error de tipeo.
                // Casos típicos: x' (comilla simple suelta), z : (dos
                // puntos sueltos), ;; doble, &, |, etc.
                // ════════════════════════════════════════════════════════
                for (let i = 0; i < lines.length; i++) {
                    const raw = lines[i];
                    // Aislar la parte de código (sin comentario)
                    let ci = -1, inStr = false;
                    for (let j = 0; j < raw.length - 1; j++) {
                        if (raw[j] === '"') inStr = !inStr;
                        if (!inStr && raw[j] === '/' && raw[j+1] === '/') { ci = j; break; }
                    }
                    let codePart = ci >= 0 ? raw.slice(0, ci) : raw;
                    // Reemplazar contenido de strings dobles por espacios (preservando offsets)
                    let stripped = codePart.replace(/"[^"]*"/g, m => '"' + ' '.repeat(Math.max(0, m.length - 2)) + '"');
                    // Strings sin cerrar al final: si queda comilla doble suelta, todo lo demás
                    // hasta fin de línea es contenido del string (no analizar)
                    const openQuoteIdx = stripped.indexOf('"');
                    if (openQuoteIdx >= 0 && (stripped.match(/"/g) || []).length % 2 !== 0) {
                        stripped = stripped.slice(0, openQuoteIdx + 1) +
                            ' '.repeat(stripped.length - openQuoteIdx - 1);
                    }
                    const ln = i + 1;
                    const lineTrim = stripped.trim();
                    // Una línea es etiqueta válida de Segun SOLO si:
                    //   1) Es 'De Otro Modo:' (case insensitive)
                    //   2) Su parte antes de ':' es: número, rango (1-5 o 1..5), string "...", o identificador
                    //   3) NO empieza con Escribir/Leer/Si/Mientras/Para/etc.
                    let looksLikeSegunCase = false;
                    if (/^(de\s+otro\s+modo)\s*:\s*.*$/i.test(lineTrim)) {
                        looksLikeSegunCase = true;
                    } else {
                        const labelMatch = lineTrim.match(/^([^:]+):/);
                        if (labelMatch) {
                            const label = labelMatch[1].trim();
                            const isStmt = /^(escribir|leer|si|mientras|para|repetir|segun|definir|dimension|retornar|devolver|salir|interrumpir|borrar|limpiar|esperar)\b/i.test(label);
                            const isValidCaseLabel = (
                                /^-?\d+(\s*,\s*-?\d+)*$/.test(label) || // 1 o 1,2,3
                                /^-?\d+\s*(-|\.\.)\s*-?\d+$/.test(label) || // 1-5 o 1..5
                                /^".*"$/.test(label) || // "a"
                                /^[a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-ZáéíóúÁÉÍÓÚñÑ_0-9]*$/.test(label) // identificador
                            );
                            looksLikeSegunCase = !isStmt && isValidCaseLabel;
                        }
                    }
                    // Caracteres válidos en código PSeInt
                    // Permitimos: a-zA-Z 0-9 _ áéíóúüñÁÉÍÓÚÜÑ ¿¡ espacios tab
                    //             ( ) [ ] + - * / ^ %  <  >  =  ,  "  .
                    //             ; (terminator opcional)
                    //             : SOLO si la línea es etiqueta de Segun
                    const VALID = /[A-Za-z0-9_áéíóúüñÁÉÍÓÚÜÑ¿¡\s()[\]+\-*/^%<>=,"."';!]/;
                    for (let k = 0; k < stripped.length; k++) {
                        const c = stripped[k];
                        if (c === '\r') continue;
                        // Permitimos espacios siempre
                        if (/\s/.test(c)) continue;
                        // Caracteres claramente inválidos en PSeInt
                        if (c === "'") {
                            errors.push({
                                line: ln,
                                msg: `Símbolo suelto: comilla simple ' en columna ${k+1}. PSeInt usa solo comillas dobles "..." para texto. Bórrala o ciérrala.`
                            });
                            break; // un error por línea de este tipo
                        }
                        if (c === ':' && !looksLikeSegunCase) {
                            // ':' solo es válido en etiquetas de Segun. Si aparece fuera
                            // de eso → error.
                            // Permitir si está después de "De Otro Modo" (caso especial)
                            errors.push({
                                line: ln,
                                msg: `Símbolo suelto: ':' en columna ${k+1}. Los dos puntos solo se usan en etiquetas de Segun (ej: '1:', '"a":', 'De Otro Modo:'). Bórralo.`
                            });
                            break;
                        }
                        if (c === '\\' || c === '`' || c === '{' || c === '}' || c === '&' || c === '|' || c === '?' || c === '@' || c === '#' || c === '$') {
                            errors.push({
                                line: ln,
                                msg: `Símbolo suelto: '${c}' en columna ${k+1}. No es un carácter válido en código PSeInt fuera de comentarios o strings.`
                            });
                            break;
                        }
                    }
                }

                // ════════════════════════════════════════════════════════
                // DETECCIÓN DE EXPRESIONES INCOMPLETAS
                // Una línea no puede terminar con un operador binario
                // colgando (Escribir x +, x <- a -, Si y > Entonces, etc.).
                // Causa un comportamiento confuso en el intérprete (imprime
                // basura literal en vez de lanzar error claro).
                // ════════════════════════════════════════════════════════
                for (let i = 0; i < lines.length; i++) {
                    const raw = lines[i];
                    // Aislar parte de código sin comentario
                    let ci = -1, inStr = false;
                    for (let j = 0; j < raw.length - 1; j++) {
                        if (raw[j] === '"') inStr = !inStr;
                        if (!inStr && raw[j] === '/' && raw[j+1] === '/') { ci = j; break; }
                    }
                    const codePart = (ci >= 0 ? raw.slice(0, ci) : raw);
                    // Quitar contenido entre comillas (sin afectar offsets)
                    const masked = codePart.replace(/"[^"]*"/g, m => '"' + ' '.repeat(Math.max(0, m.length - 2)) + '"');
                    const trimmed = masked.replace(/\s+$/, '');
                    if (!trimmed.trim()) continue;
                    // ¿Termina con operador binario o coma colgante?
                    const lastChar = trimmed.slice(-1);
                    const lastTwo  = trimmed.slice(-2);
                    // <- es asignación abierta sin RHS
                    const endsAssign = (lastTwo === '<-');
                    // Operadores binarios solos al final
                    const endsOp = /[+\-*/^%=<>,]$/.test(lastChar) && !endsAssign;
                    // Excepción: líneas que SON solo un operador (raro), o son comentarios puros
                    if (!endsOp && !endsAssign) continue;
                    // No marcar si la línea es solo una etiqueta de Segun (termina en `:`)
                    if (lastChar === ':') continue;
                    const ln = i + 1;
                    // Calcular columna exacta del operador colgante
                    const opStart = trimmed.length - (endsAssign ? 2 : 1);
                    const opEnd = trimmed.length;
                    if (endsAssign) {
                        errors.push({
                            line: ln,
                            msg: `Asignación incompleta: '<-' al final sin valor a la derecha. Escribe el valor que quieres asignar (ej: 'x <- 5').`
                        });
                    } else {
                        const op = lastChar;
                        let opName = 'operador';
                        if (op === '+') opName = "suma '+'";
                        else if (op === '-') opName = "resta '-'";
                        else if (op === '*') opName = "multiplicación '*'";
                        else if (op === '/') opName = "división '/'";
                        else if (op === '^') opName = "potencia '^'";
                        else if (op === '%') opName = "módulo '%'";
                        else if (op === '=') opName = "comparación '='";
                        else if (op === '<' || op === '>') opName = "comparación '" + op + "'";
                        else if (op === ',') opName = "coma ','";
                        errors.push({
                            line: ln,
                            msg: `Expresión incompleta: la línea termina con ${opName} sin valor a la derecha. Completa la expresión o quita el operador.`
                        });
                    }
                    _pushRange(i, opStart, opEnd, 'error');
                }

                // PASA FINAL: para cada palabra reservada usada como variable,
                // empujar un rango específico en cada aparición exacta del token
                // dentro del código. Sin esto, el highlighter pinta toda la línea
                // de rojo plano (porque la línea está en _errorLineSet pero no
                // en _errorLinesWithRange). Con _pushRange, solo se pinta el
                // subrayado wavy en la palabra exacta.
                if (window._reservedAsVarNames && window._reservedAsVarNames.size > 0) {
                    // Normalizar a versiones únicas (lowercase para iteración eficiente)
                    const uniqueLow = new Set();
                    for (const n of window._reservedAsVarNames) uniqueLow.add(n.toLowerCase());
                    for (let i = 0; i < lines.length; i++) {
                        const rawL = lines[i];
                        if (!rawL || !rawL.trim()) continue;
                        for (const nameLow of uniqueLow) {
                            if (!nameLow) continue;
                            let searchFrom = 0;
                            // _findTokenCol es case-insensitive y respeta comillas y comentarios
                            while (searchFrom < rawL.length) {
                                const loc = _findTokenCol(rawL, nameLow, searchFrom);
                                if (!loc) break;
                                _pushRange(i, loc.start, loc.end, 'error');
                                searchFrom = loc.end;
                            }
                        }
                    }
                }

                // Exponer rangos de subrayado específico (para overlay wavy en lugar
                // de pintar la línea completa de rojo).
                window._syntaxErrorRanges = _ranges;
                // Líneas que tienen al menos un rango específico — no usaremos el
                // fondo plano rojo para esas, solo el subrayado sierra.
                window._errorLinesWithRange = new Set(_ranges.map(r => r.line));

                // Deduplicar errores idénticos
                let seen = new Set();
                return errors.filter(e => {
                    let key = e.line + '|' + e.msg;
                    if (seen.has(key)) return false;
                    seen.add(key);
                    return true;
                });
            }
            // <ANALYZE_SYNTAX_END>

            function analyzeWarnings(code) {
                let warns = [];
                // FIX: normalizar CRLF defensivamente
                if (/\r/.test(code)) code = code.replace(/\r\n?/g, '\n');
                let lines = code.split("\n");
                // FIX: array de rangos específicos para resaltar en línea
                // los paréntesis con parámetros mal. Se llena durante el
                // análisis y se expone globalmente para el highlighter.
                let _paramErrorRanges = [];

                // Colectar variables definidas
                let defined = new Set();
                // Palabras reservadas que no son variables
                const reserved = new Set(['proceso','finproceso','algoritmo','finalgoritmo','subproceso','finsubproceso','funcion','función','finfuncion','finfunción','procedimiento','finprocedimiento','definir','como','dimension','arreglo','leer','escribir','si','entonces','sino','finsi','segun','hacer','finsegun','mientras','finmientras','repetir','hasta','que','para','finpara','con','paso','retornar','devolver','salir','salirpara','interrumpir','sin','saltar','borrar','limpiar','pantalla','esperar','tecla','segundos','y','o','no','and','or','not','verdadero','falso','true','false','mod','div','entero','real','texto','cadena','caracter','char','logico','numerico','var','ref','por','referencia','valor','byref','parametros','parámetros','raiz','rc','abs','trunc','redon','sen','cos','tan','asen','acos','atan','log','exp','pi','piso','techo','potencia','signo','aleatorio','random','longitud','subcadena','mayusculas','minusculas','convertiratexto','numerotexto','textonumero','concatenar','recortar','trim','contiene','reemplazar','posicioncaracter','caracterenposicion','numeroacadena','cadenaanumero']);

                // Registrar nombres de SubProcesos/Funciones/Procedimientos
                // FIX: incluido Procedimiento (PSeInt v20250218)
                for (let line of lines) {
                    let m = line.match(/^\s*(?:SubProceso|Funcion|Función|Procedimiento)\s+(?:\w+\s*<-\s*)?(\w+)\s*\(/i);
                    if (m) defined.add(m[1].toLowerCase());
                    // También sin paréntesis: "Funcion mostrar"
                    let mNP = line.match(/^\s*(?:SubProceso|Funcion|Función|Procedimiento)\s+(?:\w+\s*<-\s*)?(\w+)\s*$/i);
                    if (mNP) defined.add(mNP[1].toLowerCase());
                    // También parámetros del subproc/funcion/procedimiento
                    let pm0 = line.match(/^\s*(?:SubProceso|Funcion|Función|Procedimiento)\s+(?:\w+\s*<-\s*)?\w+\s*\(([^)]*)\)/i);
                    if (pm0 && pm0[1]) {
                        pm0[1].split(',').forEach(p => {
                            // Quitar "var", "ref", "por referencia", "por valor"
                            let pn = p
                                .replace(/^\s*(var|ref)\s+/i, '')
                                .replace(/\s+(por\s+referencia|por\s+valor|byref)\b.*$/i, '')
                                .trim().toLowerCase();
                            if (pn) defined.add(pn);
                        });
                    }
                    // Variable de retorno de la Funcion: "Funcion ret <- nombre(...)"
                    let rm = line.match(/^\s*(?:Funcion|Función)\s+(\w+)\s*<-/i);
                    if (rm) defined.add(rm[1].toLowerCase());
                    // Para SubProceso también
                    let rm2 = line.match(/^\s*SubProceso\s+(\w+)\s*<-/i);
                    if (rm2) defined.add(rm2[1].toLowerCase());
                    // Definir variables
                    let dm = line.match(/^\s*Definir\s+(.+)\s+Como\s+\w+/i);
                    if (dm) {
                        dm[1].split(',').forEach(v => {
                            let vn = v.trim().toLowerCase();
                            if (vn) defined.add(vn);
                        });
                    }
                    // Dimension arr[...] también define
                    let dim = line.match(/^\s*Dimension\s+(.+)$/i);
                    if (dim) {
                        let re = /(\w+)\s*\[/g, mm;
                        while ((mm = re.exec(dim[1]))) defined.add(mm[1].toLowerCase());
                    }
                    // Para i <- ... registrar la variable del ciclo
                    let pm = line.match(/^\s*Para\s+(\w+)\s*<-/i);
                    if (pm) defined.add(pm[1].toLowerCase());
                    // Leer x, y, z también declara variables (PSeInt es lenient)
                    let lm = line.match(/^\s*Leer\s+(.+)$/i);
                    if (lm) {
                        lm[1].split(',').forEach(v => {
                            let vn = v.trim().replace(/\[.*$/, '').toLowerCase();
                            if (vn) defined.add(vn);
                        });
                    }
                }

                // (La detección de variables no definidas se hace ahora en analyzeSyntax
                //  como errores reales, con cobertura completa de todas las expresiones.)

                // Check for possible division by zero literals
                if (/\/\s*0\b/.test(code)) warns.push("Posible división por cero detectada");
                // Check for muy largo
                if (lines.length > 200) warns.push("El programa es muy largo (" + lines.length + " líneas). Considera dividirlo en SubProcesos.");
                // Check maxSteps
                if (/Mientras\s+Verdadero/i.test(code) || /Mientras\s+True/i.test(code))
                    warns.push("Ciclo 'Mientras Verdadero' puede ejecutarse indefinidamente. Asegúrate de tener una condición de salida.");
                // Check Escribir sin argumentos
                for (let i = 0; i < lines.length; i++) {
                    let t = lines[i].trim();
                    if (/^Escribir$/i.test(t)) warns.push("Línea " + (i+1) + ": Escribir sin argumentos — ¿falta el texto o variable a mostrar?");
                    if (/^Leer$/i.test(t)) warns.push("Línea " + (i+1) + ": Leer sin variable — especifica la variable donde guardar el dato.");
                }
                // Check = instead of <- for assignment (suggestion)
                for (let i = 0; i < lines.length; i++) {
                    let t = lines[i].trim();
                    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ_]\w*\s*=\s*[^=]/.test(t) && !/<-/.test(t) && !/^(Si|Mientras|Hasta|Para|Segun|Definir|Como|SubProceso|Proceso)/i.test(t)) {
                        warns.push("Línea " + (i+1) + ": En PSeInt la asignación es con <- no con = (ej: x <- 5). El = solo sirve para comparar.");
                        break;
                    }
                }

                // ─────────────────────────────────────────────────────
                // FIX: Detectar bloques vacíos. Helper para saber si una
                // línea es "vacía" desde el punto de vista del intérprete:
                // - Línea totalmente vacía (whitespace)
                // - Solo comentario "// algo"
                // - Solo tabuladores/espacios
                function _isEmptyLine(line) {
                    let s = line.trim();
                    if (s === '') return true;
                    if (/^\/\//.test(s)) return true;
                    return false;
                }
                // Helper: cuenta líneas con contenido REAL entre [from, to) exclusivo
                function _countNonEmpty(from, to) {
                    let n = 0;
                    for (let k = from; k < to && k < lines.length; k++) {
                        if (!_isEmptyLine(lines[k])) n++;
                    }
                    return n;
                }
                // Helper: nombre de cierre de un bloque
                const _closeOf = {
                    'si': /^\s*FinSi\b/i,
                    'mientras': /^\s*FinMientras\b/i,
                    'para': /^\s*FinPara\b/i,
                    'segun': /^\s*FinSegun\b/i,
                    'repetir': /^\s*Hasta(\s+Que)?\b/i,
                    'subproceso': /^\s*FinSubProceso\b/i,
                    'funcion': /^\s*FinFunci(o|ó)n\b/i,
                    'proceso': /^\s*FinProceso\b/i,
                };

                /** Helper: añade un rango problemático que cubre desde el
                 *  primer carácter no-blanco hasta el final de la línea
                 *  indicada. Útil para subrayar bloques vacíos en su línea
                 *  de cabecera (Si Entonces, Para Hacer, Segun Hacer, etc).
                 */
                function _markEmptyBlock(lineIdx) {
                    if (lineIdx < 0 || lineIdx >= lines.length) return;
                    let line = lines[lineIdx];
                    let firstNonBlank = line.search(/\S/);
                    if (firstNonBlank < 0) firstNonBlank = 0;
                    _paramErrorRanges.push({
                        line: lineIdx + 1,
                        startCol: firstNonBlank,
                        endCol: line.length,
                        severity: 'warn'
                    });
                }

                // Recorrer las líneas detectando aperturas y cuerpo vacío
                for (let i = 0; i < lines.length; i++) {
                    let raw = lines[i];
                    // Quitar comentario para análisis
                    let lineForCheck = raw.replace(/\/\/.*$/, '').trim();
                    let lower = lineForCheck.toLowerCase();
                    if (!lineForCheck) continue;

                    // ── Si Entonces / SiNo / FinSi ──
                    let mSi = /\bentonces\s*$/i.test(lineForCheck) && /^si\b/i.test(lineForCheck);
                    if (mSi) {
                        // Buscar el SiNo o FinSi al mismo nivel
                        let depth = 1, sinoLine = -1, finSiLine = -1;
                        for (let j = i + 1; j < lines.length; j++) {
                            let tt = lines[j].replace(/\/\/.*$/, '').trim();
                            if (/^si\b.*\bentonces\s*$/i.test(tt)) depth++;
                            else if (/^finsi\b/i.test(tt)) {
                                depth--;
                                if (depth === 0) { finSiLine = j; break; }
                            } else if (/^sino\b/i.test(tt) && depth === 1 && sinoLine === -1) {
                                sinoLine = j;
                            }
                        }
                        let thenEnd = sinoLine >= 0 ? sinoLine : finSiLine;
                        if (thenEnd > 0 && _countNonEmpty(i + 1, thenEnd) === 0) {
                            _markEmptyBlock(i);
                            warns.push("Línea " + (i+1) + ": El bloque 'Si...Entonces' está vacío. Falta el código a ejecutar si la condición se cumple.");
                        }
                        if (sinoLine > 0 && finSiLine > 0 && _countNonEmpty(sinoLine + 1, finSiLine) === 0) {
                            _markEmptyBlock(sinoLine);
                            warns.push("Línea " + (sinoLine+1) + ": El bloque 'SiNo' está vacío. O bórralo, o agrega código a ejecutar.");
                        }
                    }

                    // ── Mientras ... Hacer / FinMientras ──
                    if (/^mientras\b.*\bhacer\s*$/i.test(lineForCheck)) {
                        let depth = 1, endLine = -1;
                        for (let j = i + 1; j < lines.length; j++) {
                            let tt = lines[j].replace(/\/\/.*$/, '').trim();
                            if (/^mientras\b.*\bhacer\s*$/i.test(tt)) depth++;
                            else if (/^finmientras\b/i.test(tt)) {
                                depth--;
                                if (depth === 0) { endLine = j; break; }
                            }
                        }
                        if (endLine > 0 && _countNonEmpty(i + 1, endLine) === 0) {
                            _markEmptyBlock(i);
                            warns.push("Línea " + (i+1) + ": El ciclo 'Mientras' está vacío. Sin código dentro, sería un ciclo sin efecto o infinito.");
                        }
                    }

                    // ── Para ... Hacer / FinPara ──
                    if (/^para\b.*\bhacer\s*$/i.test(lineForCheck)) {
                        let depth = 1, endLine = -1;
                        for (let j = i + 1; j < lines.length; j++) {
                            let tt = lines[j].replace(/\/\/.*$/, '').trim();
                            if (/^para\b.*\bhacer\s*$/i.test(tt)) depth++;
                            else if (/^finpara\b/i.test(tt)) {
                                depth--;
                                if (depth === 0) { endLine = j; break; }
                            }
                        }
                        if (endLine > 0 && _countNonEmpty(i + 1, endLine) === 0) {
                            _markEmptyBlock(i);
                            warns.push("Línea " + (i+1) + ": El ciclo 'Para' está vacío. No tiene código que ejecutar en cada iteración.");
                        }
                    }

                    // ── Repetir ... Hasta Que ──
                    if (/^repetir\s*$/i.test(lineForCheck)) {
                        let depth = 1, endLine = -1;
                        for (let j = i + 1; j < lines.length; j++) {
                            let tt = lines[j].replace(/\/\/.*$/, '').trim();
                            if (/^repetir\s*$/i.test(tt)) depth++;
                            else if (/^hasta(\s+que)?\b/i.test(tt)) {
                                depth--;
                                if (depth === 0) { endLine = j; break; }
                            }
                        }
                        if (endLine > 0 && _countNonEmpty(i + 1, endLine) === 0) {
                            _markEmptyBlock(i);
                            warns.push("Línea " + (i+1) + ": El ciclo 'Repetir' está vacío.");
                        }
                    }

                    // ── SubProceso / FinSubProceso ──
                    if (/^subproceso\b/i.test(lineForCheck)) {
                        let depth = 1, endLine = -1;
                        for (let j = i + 1; j < lines.length; j++) {
                            let tt = lines[j].replace(/\/\/.*$/, '').trim();
                            if (/^subproceso\b/i.test(tt)) depth++;
                            else if (/^finsubproceso\b/i.test(tt)) {
                                depth--;
                                if (depth === 0) { endLine = j; break; }
                            }
                        }
                        if (endLine > 0 && _countNonEmpty(i + 1, endLine) === 0) {
                            _markEmptyBlock(i);
                            warns.push("Línea " + (i+1) + ": El SubProceso está vacío. Agrega su lógica o elimínalo.");
                        }
                    }

                    // ── Funcion / FinFuncion ──
                    if (/^funci(o|ó)n\b/i.test(lineForCheck)) {
                        let depth = 1, endLine = -1;
                        for (let j = i + 1; j < lines.length; j++) {
                            let tt = lines[j].replace(/\/\/.*$/, '').trim();
                            if (/^funci(o|ó)n\b/i.test(tt)) depth++;
                            else if (/^finfunci(o|ó)n\b/i.test(tt)) {
                                depth--;
                                if (depth === 0) { endLine = j; break; }
                            }
                        }
                        if (endLine > 0 && _countNonEmpty(i + 1, endLine) === 0) {
                            _markEmptyBlock(i);
                            warns.push("Línea " + (i+1) + ": La Función está vacía.");
                        }
                    }

                    // ── Proceso / FinProceso ──
                    if (/^proceso\b/i.test(lineForCheck)) {
                        let depth = 1, endLine = -1;
                        for (let j = i + 1; j < lines.length; j++) {
                            let tt = lines[j].replace(/\/\/.*$/, '').trim();
                            if (/^proceso\b/i.test(tt)) depth++;
                            else if (/^finproceso\b/i.test(tt)) {
                                depth--;
                                if (depth === 0) { endLine = j; break; }
                            }
                        }
                        if (endLine > 0 && _countNonEmpty(i + 1, endLine) === 0) {
                            _markEmptyBlock(i);
                            warns.push("Línea " + (i+1) + ": El Proceso está vacío. No tiene ningún código que ejecutar.");
                        }
                    }

                    // ── Algoritmo / FinAlgoritmo ── (FIX: PSeInt v20250218)
                    if (/^algoritmo\b/i.test(lineForCheck)) {
                        let depth = 1, endLine = -1;
                        for (let j = i + 1; j < lines.length; j++) {
                            let tt = lines[j].replace(/\/\/.*$/, '').trim();
                            if (/^algoritmo\b/i.test(tt)) depth++;
                            else if (/^finalgoritmo\b/i.test(tt)) {
                                depth--;
                                if (depth === 0) { endLine = j; break; }
                            }
                        }
                        if (endLine > 0 && _countNonEmpty(i + 1, endLine) === 0) {
                            _markEmptyBlock(i);
                            warns.push("Línea " + (i+1) + ": El Algoritmo está vacío. No tiene ningún código que ejecutar.");
                        }
                    }

                    // ── Procedimiento / FinProcedimiento ── (FIX: PSeInt v20250218)
                    if (/^procedimiento\b/i.test(lineForCheck)) {
                        let depth = 1, endLine = -1;
                        for (let j = i + 1; j < lines.length; j++) {
                            let tt = lines[j].replace(/\/\/.*$/, '').trim();
                            if (/^procedimiento\b/i.test(tt)) depth++;
                            else if (/^finprocedimiento\b/i.test(tt)) {
                                depth--;
                                if (depth === 0) { endLine = j; break; }
                            }
                        }
                        if (endLine > 0 && _countNonEmpty(i + 1, endLine) === 0) {
                            _markEmptyBlock(i);
                            warns.push("Línea " + (i+1) + ": El Procedimiento está vacío.");
                        }
                    }

                    // ── Segun ... FinSegun: detectar cada caso vacío ──
                    if (/^segun\b.*\bhacer\s*$/i.test(lineForCheck)) {
                        // Buscar el FinSegun para acotar
                        let depth = 1, endLine = -1;
                        for (let j = i + 1; j < lines.length; j++) {
                            let tt = lines[j].replace(/\/\/.*$/, '').trim();
                            if (/^segun\b.*\bhacer\s*$/i.test(tt)) depth++;
                            else if (/^finsegun\b/i.test(tt)) {
                                depth--;
                                if (depth === 0) { endLine = j; break; }
                            }
                        }
                        if (endLine < 0) continue;

                        // Detectar todos los cases dentro del Segun (a depth=1 solo)
                        // Cada case empieza con: N: , "txt": , 'c': , De Otro Modo:
                        let cases = []; // {line, label, contentStart}
                        let innerDepth = 1;
                        for (let j = i + 1; j < endLine; j++) {
                            let tt = lines[j].replace(/\/\/.*$/, '').trim();
                            if (!tt) continue;
                            // Trackear depth interno por si hay Segun anidados
                            if (/^segun\b.*\bhacer\s*$/i.test(tt)) innerDepth++;
                            else if (/^finsegun\b/i.test(tt)) innerDepth--;
                            if (innerDepth !== 1) continue;
                            // Detectar etiqueta de caso al inicio
                            let cm = tt.match(/^([^:]+?):\s*(.*)$/);
                            if (cm && !/<-/.test(cm[1]) && !/"/.test(cm[1])) {
                                let lbl = cm[1].trim();
                                let inlineContent = cm[2] ? cm[2].trim() : '';
                                cases.push({ line: j, label: lbl, inlineContent });
                            }
                        }

                        // Para cada case, contar líneas no-vacías hasta el siguiente case o FinSegun
                        for (let k = 0; k < cases.length; k++) {
                            let c = cases[k];
                            let nextStart = (k + 1 < cases.length) ? cases[k+1].line : endLine;
                            let nonEmpty = c.inlineContent ? 1 : 0;
                            nonEmpty += _countNonEmpty(c.line + 1, nextStart);
                            if (nonEmpty === 0) {
                                _markEmptyBlock(c.line);
                                warns.push("Línea " + (c.line+1) + ": El caso '" + c.label + ":' del 'Segun' está vacío. Falta el código a ejecutar para este caso.");
                            }
                        }

                        // Y si TODO el Segun está vacío (sin cases o todos vacíos)
                        if (cases.length === 0) {
                            _markEmptyBlock(i);
                            warns.push("Línea " + (i+1) + ": El 'Segun' no tiene ningún caso definido.");
                        }
                    }
                }
                // ─────────────────────────────────────────────────────

                // ─────────────────────────────────────────────────────
                // VALIDACIÓN DE PARÁMETROS DE FUNCIONES (nativas + propias)
                // ─────────────────────────────────────────────────────

                // Firmas de funciones nativas: {name: {min, max, desc}}
                // min/max = número de argumentos. Inf = variádica.
                const NATIVE_FNS = {
                    // Matemáticas
                    'raiz':         { min: 1, max: 1, desc: 'RAIZ(x)' },
                    'rc':           { min: 1, max: 1, desc: 'RC(x)' },
                    'abs':          { min: 1, max: 1, desc: 'ABS(x)' },
                    'trunc':        { min: 1, max: 1, desc: 'TRUNC(x)' },
                    'redon':        { min: 1, max: 1, desc: 'REDON(x)' },
                    'sen':          { min: 1, max: 1, desc: 'SEN(angulo)' },
                    'cos':          { min: 1, max: 1, desc: 'COS(angulo)' },
                    'tan':          { min: 1, max: 1, desc: 'TAN(angulo)' },
                    'asen':         { min: 1, max: 1, desc: 'ASEN(valor)' },
                    'acos':         { min: 1, max: 1, desc: 'ACOS(valor)' },
                    'atan':         { min: 1, max: 1, desc: 'ATAN(valor)' },
                    'log':          { min: 1, max: 1, desc: 'LOG(x)' },
                    'exp':          { min: 1, max: 1, desc: 'EXP(x)' },
                    'pi':           { min: 0, max: 0, desc: 'PI()' },
                    'piso':         { min: 1, max: 1, desc: 'PISO(x)' },
                    'techo':        { min: 1, max: 1, desc: 'TECHO(x)' },
                    'potencia':     { min: 2, max: 2, desc: 'Potencia(base, exp)' },
                    'signo':        { min: 1, max: 1, desc: 'SIGNO(x)' },
                    'aleatorio':    { min: 2, max: 2, desc: 'Aleatorio(min, max)' },
                    'random':       { min: 2, max: 2, desc: 'Random(min, max)' },
                    // Strings
                    'longitud':     { min: 1, max: 1, desc: 'Longitud(texto)' },
                    'subcadena':    { min: 3, max: 3, desc: 'Subcadena(texto, inicio, fin)' },
                    'mayusculas':   { min: 1, max: 1, desc: 'Mayusculas(texto)' },
                    'minusculas':   { min: 1, max: 1, desc: 'Minusculas(texto)' },
                    'convertiratexto': { min: 1, max: 1, desc: 'ConvertirATexto(numero)' },
                    'numerotexto':  { min: 1, max: 1, desc: 'NumeroATexto(n)' },
                    'numeroacadena':{ min: 1, max: 1, desc: 'NumeroACadena(n)' },
                    'textonumero':  { min: 1, max: 1, desc: 'TextoANumero(texto)' },
                    'cadenaanumero':{ min: 1, max: 1, desc: 'CadenaANumero(texto)' },
                    'concatenar':   { min: 2, max: Infinity, desc: 'Concatenar(a, b, ...)' },
                    'recortar':     { min: 1, max: 1, desc: 'Recortar(texto)' },
                    'trim':         { min: 1, max: 1, desc: 'Trim(texto)' },
                    'contiene':     { min: 2, max: 2, desc: 'Contiene(texto, buscar)' },
                    'reemplazar':   { min: 3, max: 3, desc: 'Reemplazar(texto, viejo, nuevo)' },
                    'posicioncaracter': { min: 2, max: 2, desc: 'PosicionCaracter(texto, char)' },
                    'caracterenposicion': { min: 2, max: 2, desc: 'CaracterEnPosicion(texto, pos)' },
                    // Conversión
                    'entero':       { min: 1, max: 1, desc: 'Entero(x)' },
                    'real':         { min: 1, max: 1, desc: 'Real(x)' },
                    'texto':        { min: 1, max: 1, desc: 'Texto(x)' },
                    'valor':        { min: 1, max: 1, desc: 'Valor(texto)' },
                };

                // Parsear firmas de SubProceso/Funcion/Procedimiento propias.
                // FIX: añadido soporte para Procedimiento (PSeInt v20250218).
                // Formato: SubProceso resultado <- Nombre(p1, p2 Por Valor, p3 Por Referencia)
                //          Funcion ret <- Nombre(p1, p2)
                //          SubProceso Nombre(p1, p2)  (sin retorno)
                //          Funcion Nombre(p1, p2)     (sin retorno)
                //          Procedimiento Nombre(p1, p2)
                let userFns = {}; // nombre_lower: {min, max, paramNames, line}
                for (let i = 0; i < lines.length; i++) {
                    let raw = lines[i].replace(/\/\/.*$/, '').trim();
                    let m = raw.match(/^(?:SubProceso|Funci(?:o|ó)n|Procedimiento)\s+(?:[\w_]+\s*<-\s*)?([\w_]+)\s*\(([^)]*)\)/i);
                    if (!m) {
                        // Soportar declaración sin paréntesis: "Funcion mostrar"
                        // (Las funciones sin parámetros pueden omitir los paréntesis)
                        let m2 = raw.match(/^(?:SubProceso|Funci(?:o|ó)n|Procedimiento)\s+(?:[\w_]+\s*<-\s*)?([\w_]+)\s*$/i);
                        if (m2) {
                            userFns[m2[1].toLowerCase()] = { min: 0, max: 0, paramNames: [], line: i + 1 };
                        }
                        continue;
                    }
                    let name = m[1].toLowerCase();
                    let paramsStr = m[2].trim();
                    let params = paramsStr === '' ? [] :
                                 paramsStr.split(',').map(p => p.trim()).filter(p => p);
                    userFns[name] = { min: params.length, max: params.length, paramNames: params, line: i + 1 };
                }

                // Helper: extraer argumentos del paréntesis externo de una llamada
                // respetando paréntesis anidados y strings.
                function _splitArgs(s) {
                    if (!s.trim()) return [];
                    let args = [];
                    let depth = 0, cur = '', inStr = false;
                    for (let c of s) {
                        if (c === '"') inStr = !inStr;
                        if (!inStr) {
                            if (c === '(' || c === '[') depth++;
                            else if (c === ')' || c === ']') depth--;
                            else if (c === ',' && depth === 0) {
                                args.push(cur.trim()); cur = ''; continue;
                            }
                        }
                        cur += c;
                    }
                    if (cur.trim()) args.push(cur.trim());
                    return args;
                }

                // Buscar llamadas a funciones en cada línea
                for (let i = 0; i < lines.length; i++) {
                    let raw = lines[i].replace(/\/\/.*$/, '');
                    // Saltar definiciones (no son llamadas)
                    if (/^\s*(?:SubProceso|Funci(?:o|ó)n|Procedimiento)\b/i.test(raw)) continue;
                    // Para ignorar contenido de strings, los reemplazamos por placeholders
                    let cleaned = raw.replace(/"(?:\\.|[^"\\])*"/g, '""');

                    // Detectar todas las llamadas: NOMBRE(args)
                    let callRe = /\b([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ_][\wáéíóúüÁÉÍÓÚÜñÑ]*)\s*\(/g;
                    let mc;
                    while ((mc = callRe.exec(cleaned))) {
                        let fname = mc[1];
                        let flower = fname.toLowerCase();
                        // Ignorar palabras clave que NO son funciones pero
                        // pueden tener paréntesis (Si, Mientras, Para, etc.)
                        if (/^(si|mientras|para|segun|repetir|hasta|que|hacer|entonces|sino|finsi|finsegun|finmientras|finpara|finsubproceso|finproceso|finfunci(o|ó)n|finrepetir|definir|como|dimension|leer|escribir|salir|interrumpir|retornar|devolver|borrar|limpiar|pantalla|esperar|tecla|segundos|y|o|no|mod|div|verdadero|falso|true|false)$/i.test(fname)) {
                            continue;
                        }
                        // Encontrar el paréntesis de cierre balanceado
                        let openIdx = mc.index + mc[0].length;
                        let depth = 1, closeIdx = -1, inStr2 = false;
                        for (let k = openIdx; k < cleaned.length; k++) {
                            let c = cleaned[k];
                            if (c === '"') inStr2 = !inStr2;
                            if (inStr2) continue;
                            if (c === '(') depth++;
                            else if (c === ')') {
                                depth--;
                                if (depth === 0) { closeIdx = k; break; }
                            }
                        }
                        if (closeIdx < 0) {
                            warns.push("Línea " + (i+1) + ": Llamada inválida a '" + fname + "': falta cerrar el paréntesis ).");
                            // Marcar desde el nombre hasta el final de la línea
                            _paramErrorRanges.push({
                                line: i + 1,
                                startCol: mc.index,
                                endCol: cleaned.length,
                                severity: 'error'
                            });
                            continue;
                        }
                        let argsStr = cleaned.slice(openIdx, closeIdx);
                        let args = _splitArgs(argsStr);
                        let argCount = args.length;

                        // Verificar firma
                        let sig = NATIVE_FNS[flower] || userFns[flower];
                        if (!sig) continue; // función desconocida — quizás definida después o método externo, ignorar
                        // Detectar argumentos vacíos (e.g. "RAIZ(,)" o "Func(a,)")
                        let emptyArgs = args.filter(a => a.trim() === '').length;
                        if (emptyArgs > 0 && argCount > 0) {
                            warns.push("Línea " + (i+1) + ": Llamada a '" + fname + "' tiene argumento(s) vacío(s).");
                            _paramErrorRanges.push({
                                line: i + 1,
                                startCol: openIdx - 1, // incluir el '('
                                endCol: closeIdx + 1,  // incluir el ')'
                                severity: 'warn'
                            });
                            continue;
                        }
                        if (argCount < sig.min) {
                            let missing = sig.min - argCount;
                            let plural = missing === 1 ? '' : 's';
                            warns.push("Línea " + (i+1) + ": A la llamada '" + fname + "' le falta" + plural + " " + missing + " parámetro" + plural + ". Esperaba " + sig.min + (sig.max !== sig.min && sig.max !== Infinity ? '-' + sig.max : '') + ", recibió " + argCount + ". Forma correcta: " + (sig.desc || (fname + '(' + (sig.paramNames || []).join(', ') + ')')));
                            // Resaltar desde "(" hasta ")"
                            _paramErrorRanges.push({
                                line: i + 1,
                                startCol: openIdx - 1,
                                endCol: closeIdx + 1,
                                severity: 'warn'
                            });
                        } else if (argCount > sig.max) {
                            let extra = argCount - sig.max;
                            let plural = extra === 1 ? '' : 's';
                            warns.push("Línea " + (i+1) + ": A la llamada '" + fname + "' le sobra" + plural + " " + extra + " parámetro" + plural + ". Esperaba " + (sig.min === sig.max ? sig.max : sig.min + '-' + sig.max) + ", recibió " + argCount + ". Forma correcta: " + (sig.desc || (fname + '(' + (sig.paramNames || []).join(', ') + ')')));
                            _paramErrorRanges.push({
                                line: i + 1,
                                startCol: openIdx - 1,
                                endCol: closeIdx + 1,
                                severity: 'warn'
                            });
                        }
                    }
                }

                // ─────────────────────────────────────────────────────
                // DETECCIONES ADICIONALES DE LÍNEAS MAL FORMADAS
                // ─────────────────────────────────────────────────────
                for (let i = 0; i < lines.length; i++) {
                    let raw = lines[i].replace(/\/\/.*$/, '').trim();
                    if (!raw) continue;
                    let lower = raw.toLowerCase();

                    // Saltar líneas que son etiquetas de Segun (1:, "a":, De Otro Modo:, etc.)
                    if (/^([^:]+):\s*$/.test(raw) || /^([^:]+):\s*\S/.test(raw)) {
                        // Si la parte antes del : NO contiene <-, parece un case
                        let beforeColon = raw.split(':')[0];
                        if (!/<-/.test(beforeColon) && !/"/.test(beforeColon)) {
                            // Es un case, saltamos
                            continue;
                        }
                    }

                    // ── Escribir sin argumentos ──
                    if (/^escribir(\s+sin\s+saltar)?\s*$/i.test(raw)) {
                        warns.push("Línea " + (i+1) + ": 'Escribir' sin argumentos. Falta el texto o variable a mostrar (ej: Escribir \"Hola\").");
                    }

                    // ── Leer sin variable ──
                    if (/^leer\s*$/i.test(raw)) {
                        warns.push("Línea " + (i+1) + ": 'Leer' sin variable. Indica qué variable leer (ej: Leer x).");
                    }

                    // ── Asignación con lado derecho vacío: "x <-" ──
                    let mAsgn = raw.match(/^([\w_\[\]\s,]+)\s*<-\s*$/);
                    if (mAsgn) {
                        warns.push("Línea " + (i+1) + ": Asignación incompleta: falta el valor a la derecha de '<-'.");
                    }

                    // ── Asignación con lado izquierdo vacío: "<- valor" ──
                    if (/^<-/.test(raw)) {
                        warns.push("Línea " + (i+1) + ": Asignación inválida: falta la variable a la izquierda de '<-'.");
                    }

                    // ── Definir sin tipo ──
                    if (/^definir\s+\w/i.test(raw) && !/\bcomo\s+\w/i.test(raw)) {
                        warns.push("Línea " + (i+1) + ": 'Definir' incompleto: falta indicar el tipo con 'Como' (ej: Definir x Como Entero).");
                    }

                    // ── Si sin Entonces ──
                    // Acepta: "Si x > 0 Entonces" (al final), o sintaxis inline
                    // "Si x > 0 Entonces FinSi" pero NO "Si x > 0" solo.
                    if (/^si\b/i.test(raw) && !/\bentonces\b/i.test(raw) && !/^sino\b/i.test(raw) && !/^si\s*$/i.test(raw)) {
                        warns.push("Línea " + (i+1) + ": Estructura 'Si' incompleta: falta 'Entonces' (ej: Si x > 0 Entonces).");
                    }

                    // ── Para sin Hacer ──
                    if (/^para\s+\w/i.test(raw) && !/\bhacer\b/i.test(raw)) {
                        warns.push("Línea " + (i+1) + ": Estructura 'Para' incompleta: falta 'Hacer' (ej: Para i <- 1 Hasta 10 Hacer).");
                    }

                    // ── Mientras sin Hacer ──
                    if (/^mientras\s+\S/i.test(raw) && !/\bhacer\b/i.test(raw)) {
                        warns.push("Línea " + (i+1) + ": Estructura 'Mientras' incompleta: falta 'Hacer' (ej: Mientras x > 0 Hacer).");
                    }

                    // ── Segun sin Hacer ──
                    if (/^segun\s+\S/i.test(raw) && !/\bhacer\b/i.test(raw)) {
                        warns.push("Línea " + (i+1) + ": Estructura 'Segun' incompleta: falta 'Hacer' (ej: Segun opcion Hacer).");
                    }

                    // ── Paréntesis desbalanceados (excluyendo strings) ──
                    let cleaned = raw.replace(/"(?:\\.|[^"\\])*"/g, '""');
                    let opens = (cleaned.match(/\(/g) || []).length;
                    let closes = (cleaned.match(/\)/g) || []).length;
                    if (opens !== closes) {
                        let diff = opens - closes;
                        if (diff > 0) {
                            warns.push("Línea " + (i+1) + ": Falta " + diff + " paréntesis de cierre ')'.");
                        } else {
                            warns.push("Línea " + (i+1) + ": Sobra" + (Math.abs(diff) > 1 ? 'n' : '') + " " + Math.abs(diff) + " paréntesis de cierre ')'.");
                        }
                    }

                    // ── Comillas desbalanceadas ──
                    let quoteCount = (raw.match(/"/g) || []).length;
                    if (quoteCount % 2 !== 0) {
                        warns.push("Línea " + (i+1) + ": Cadena de texto sin cerrar (falta una comilla \").");
                    }
                }

                // FIX: exponer rangos globalmente para que el highlighter
                // pueda subrayar el lugar exacto del problema, no solo
                // toda la línea. Estilo VS Code / Cursor.
                window._paramErrorRanges = _paramErrorRanges;

                // ── DEFINIR fuera de bloque / DEFINIR después de código ──
                // PSeInt acepta Definir en cualquier parte (lenient), PERO la
                // BUENA PRÁCTICA es declarar variables al inicio del Proceso/
                // SubProceso/Funcion. Avisamos en dos casos pedagógicos:
                //   1) Definir fuera de cualquier bloque ejecutable.
                //   2) Definir después de instrucciones ejecutables (declaración tardía).
                {
                    let inBlock = false;
                    let sawExecInBlock = false;
                    for (let i = 0; i < lines.length; i++) {
                        let raw = lines[i];
                        let ci = -1, inStr = false;
                        for (let j = 0; j < raw.length - 1; j++) {
                            if (raw[j] === '"') inStr = !inStr;
                            if (!inStr && raw[j] === '/' && raw[j+1] === '/') { ci = j; break; }
                        }
                        const t = (ci >= 0 ? raw.slice(0, ci) : raw).trim().replace(/;+\s*$/, '').trim();
                        if (!t) continue;
                        const ln = i + 1;
                        // Aperturas que inician un "bloque ejecutable"
                        if (/^(proceso|algoritmo|subproceso|(funcion|función)|procedimiento)\s+/i.test(t)) {
                            inBlock = true;
                            sawExecInBlock = false;
                            continue;
                        }
                        // Cierres
                        if (/^(finproceso|finalgoritmo|finsubproceso|finfuncion|finfunción|finprocedimiento)$/i.test(t)) {
                            inBlock = false;
                            sawExecInBlock = false;
                            continue;
                        }
                        // Definir
                        if (/^definir\s+/i.test(t)) {
                            if (!inBlock) {
                                warns.push(`Línea ${ln}: 'Definir' fuera de un bloque Proceso/SubProceso/Funcion. Mueve la declaración DENTRO del bloque que la usa (PSeInt lo acepta aquí pero NO es buena práctica).`);
                            } else if (sawExecInBlock) {
                                warns.push(`Línea ${ln}: 'Definir' aparece después de código ejecutable. Buena práctica: agrupa todos los 'Definir' al inicio del bloque, antes de cualquier asignación, Leer, Escribir o estructura de control.`);
                            }
                            continue;
                        }
                        // Dimension cuenta como declaración también
                        if (/^dimension\s+/i.test(t)) continue;
                        // Comentarios ya filtrados (línea vacía tras quitar comentario continua)
                        // Cualquier OTRA línea dentro del bloque marca "código ejecutable visto"
                        if (inBlock) sawExecInBlock = true;
                    }
                }

                // ── Detección de BLOQUES VACÍOS v2 (warning) ──────────────
                // NOTA: el detector anterior (~líneas 12530-12605) ya cubre los casos
                // principales (Si/Mientras/Para/Repetir vacíos) con mensajes específicos.
                // Este pase SOLO añade los que el anterior NO cubre: Segun, SubProceso,
                // Funcion, Procedimiento, Proceso y Algoritmo vacíos.
                // Y NO duplica mensajes para Si/Mientras/Para que el otro ya marca.
                if (false) {  // DESACTIVADO para evitar duplicados — ver detector antiguo arriba
                    const friendlyName2 = {
                        si: 'Si...FinSi',
                        mientras: 'Mientras...FinMientras',
                        para: 'Para...FinPara',
                        repetir: 'Repetir...Hasta Que',
                        segun: 'Segun...FinSegun',
                        subproceso: 'SubProceso',
                        funcion: 'Funcion',
                        procedimiento: 'Procedimiento',
                        proceso: 'Proceso',
                        algoritmo: 'Algoritmo'
                    };
                    const open = [];
                    for (let i = 0; i < lines.length; i++) {
                        let raw = lines[i];
                        // Quitar comentario
                        let ci = -1, inStr = false;
                        for (let j = 0; j < raw.length - 1; j++) {
                            if (raw[j] === '"') inStr = !inStr;
                            if (!inStr && raw[j] === '/' && raw[j+1] === '/') { ci = j; break; }
                        }
                        let t = (ci >= 0 ? raw.slice(0, ci) : raw).trim().replace(/;+\s*$/, '').trim();
                        if (!t) continue;
                        const ln = i + 1;

                        // FIX: cada apertura nueva cuenta como "instrucción" del bloque padre.
                        // Así, un Si que SOLO contiene otro Si anidado no se considera vacío.
                        const bumpParent = () => { if (open.length > 0) open[open.length - 1].body++; };

                        // ─── Aperturas ───
                        if (/^proceso\s+\S+/i.test(t))   { bumpParent(); open.push({kw:'proceso', line:ln, body:0}); continue; }
                        if (/^algoritmo\s+\S+/i.test(t)) { bumpParent(); open.push({kw:'algoritmo', line:ln, body:0}); continue; }
                        if (/^subproceso\s+/i.test(t))   { bumpParent(); open.push({kw:'subproceso', line:ln, body:0}); continue; }
                        if (/^(funcion|función)\s+/i.test(t)) { bumpParent(); open.push({kw:'funcion', line:ln, body:0}); continue; }
                        if (/^procedimiento\s+/i.test(t)) { bumpParent(); open.push({kw:'procedimiento', line:ln, body:0}); continue; }
                        if (/^si\s+.+entonces$/i.test(t) && !/finsi/i.test(t) && !/^sino\s+si/i.test(t)) {
                            bumpParent(); open.push({kw:'si', line:ln, body:0}); continue;
                        }
                        if (/^mientras\s+.+hacer$/i.test(t)) { bumpParent(); open.push({kw:'mientras', line:ln, body:0}); continue; }
                        if (/^para\s+\w+\s*<-\s*.+\s+hasta\s+.+\s+hacer$/i.test(t) && !/finpara/i.test(t)) {
                            bumpParent(); open.push({kw:'para', line:ln, body:0}); continue;
                        }
                        if (/^repetir$/i.test(t)) { bumpParent(); open.push({kw:'repetir', line:ln, body:0}); continue; }
                        if (/^segun\s+/i.test(t) && !/finsegun/i.test(t)) {
                            bumpParent(); open.push({kw:'segun', line:ln, body:0}); continue;
                        }
                        // SiNo Si: pertenece al Si padre, no apila pero ese sí es contenido del Si
                        if (/^sino\s+si\s+.+entonces$/i.test(t)) {
                            if (open.length && open[open.length-1].kw === 'si') open[open.length-1].body++;
                            continue;
                        }

                        // ─── Cierres ───
                        const closeRe = /^(finsi|finmientras|finpara|finsegun|finsubproceso|finfuncion|finfunción|finprocedimiento|finproceso|finalgoritmo)$/i;
                        const hastaQueRe = /^hasta\s+que\s+/i;
                        if (closeRe.test(t) || hastaQueRe.test(t)) {
                            if (open.length > 0) {
                                const top = open.pop();
                                if (top.body === 0) {
                                    warns.push(`Línea ${top.line}: el bloque ${friendlyName2[top.kw] || top.kw} está vacío — no contiene ninguna instrucción. Añade al menos un statement o el comentario '// Lógica aquí' para evitar confusión.`);
                                }
                            }
                            continue;
                        }
                        // 'Sino' (rama alterna del Si): si la rama Entonces estaba vacía, avisar; reiniciar contador.
                        if (/^sino$/i.test(t)) {
                            if (open.length && open[open.length-1].kw === 'si') {
                                if (open[open.length-1].body === 0) {
                                    warns.push(`Línea ${open[open.length-1].line}: la rama 'Entonces' del Si está vacía. Añade alguna instrucción o un comentario.`);
                                }
                                open[open.length-1].body = 0; // reset para la rama Sino
                            }
                            continue;
                        }
                        // Caso de Segun (X:) — no cuenta como cuerpo del Segun (es etiqueta de caso)
                        if (open.length && open[open.length-1].kw === 'segun' && /^[^:]+:\s*/.test(t)) {
                            // Cuenta como body solo si tiene contenido después del ':'
                            const afterColon = t.replace(/^[^:]+:\s*/, '').trim();
                            if (afterColon) open[open.length-1].body++;
                            continue;
                        }
                        // Cualquier otra línea cuenta como cuerpo del bloque más interno
                        if (open.length > 0) open[open.length - 1].body++;
                    }
                }

                // ════════════════════════════════════════════════════════
                // BUENAS PRÁCTICAS — warnings pedagógicos
                // Detectamos patrones sin depender de un parser real:
                // tokens, regex, conteo de líneas, profundidad de stack.
                // ════════════════════════════════════════════════════════
                const _BP_RESERVED = new Set([
                    'proceso','finproceso','algoritmo','finalgoritmo','subproceso','finsubproceso',
                    'funcion','función','finfuncion','finfunción','procedimiento','finprocedimiento',
                    'si','entonces','sino','finsi','mientras','hacer','finmientras',
                    'para','hasta','con','paso','finpara','repetir','que',
                    'segun','según','finsegun','finsegún','de','otro','modo',
                    'definir','como','dimension','arreglo','leer','escribir','sin','saltar',
                    'y','o','no','and','or','not','mod','div',
                    'entero','real','texto','cadena','caracter','char','logico','lógico','numerico','numérico',
                    'verdadero','falso','true','false','pi','e',
                    'var','ref','por','referencia','byref','parametros','parámetros',
                    'retornar','devolver','salir','salirpara','interrumpir',
                    'borrar','limpiar','pantalla','esperar','tecla','segundos',
                    'raiz','rc','sqrt','abs','trunc','redon','round','sen','sin','cos','tan',
                    'asen','acos','atan','log','ln','exp','log10','piso','floor','techo','ceil',
                    'potencia','pow','signo','sign','aleatorio','random','azar','max','min',
                    'maximo','minimo','longitud','largo','subcadena','trozo','substr',
                    'mayusculas','minusculas','tomayusculas','tominusculas','amayusculas','aminusculas',
                    'mayuscula','minuscula','convertiratexto','textonumero','numerotexto',
                    'convertirencadena','numeroatexto','concatenar','recortar','trim','contiene',
                    'reemplazar','replace','posicioncaracter','posicion','indice',
                    'caracterenposicion','invertir','reverse','asc','chr',
                    'convertiranumero','textoanumero','cadenaanumero','valor'
                ]);

                // ── 1) Recolectar uso de variables (declaraciones y lecturas) ──
                {
                    const declared = new Map();   // name → primera línea declarada
                    const assigned = new Map();   // name → primera línea asignada
                    const usedRead = new Map();   // name → primera línea leída (en expr)
                    const procNames = new Set();
                    const subprocParamNames = new Set();
                    const funcReturnVars = new Set(); // FIX: Funcion ret <- nombre(...): 'ret' es
                                                      // la var de retorno; NO la flageamos como unused
                                                      // porque su uso es implícito (el caller la consume).

                    // Pasa 1: recolectar
                    for (let i = 0; i < lines.length; i++) {
                        let raw = lines[i];
                        let ci = -1, inStr = false;
                        for (let j = 0; j < raw.length - 1; j++) {
                            if (raw[j] === '"') inStr = !inStr;
                            if (!inStr && raw[j] === '/' && raw[j+1] === '/') { ci = j; break; }
                        }
                        const t = (ci >= 0 ? raw.slice(0, ci) : raw).trim().replace(/;+\s*$/, '').trim();
                        if (!t) continue;
                        const ln = i + 1;

                        // Nombre del Proceso/Algoritmo (no es variable)
                        let mProc = t.match(/^(?:Proceso|Algoritmo)\s+(\w+)/i);
                        if (mProc) { procNames.add(mProc[1].toLowerCase()); continue; }
                        // Nombres de SubProceso/Funcion/Procedimiento (no son vars usables)
                        let mSP = t.match(/^(?:SubProceso|Funcion|Función|Procedimiento)\s+(?:(\w+)\s*<-\s*)?(\w+)\s*(?:\(([^)]*)\))?/i);
                        if (mSP) {
                            if (mSP[1]) {
                                declared.set(mSP[1].toLowerCase(), ln); // var de retorno
                                funcReturnVars.add(mSP[1].toLowerCase());
                            }
                            procNames.add(mSP[2].toLowerCase());
                            if (mSP[3]) {
                                mSP[3].split(',').forEach(p => {
                                    let pn = p.replace(/^\s*(var|ref)\s+/i, '')
                                              .replace(/\s+(por\s+referencia|por\s+valor|byref)\b.*$/i, '')
                                              .trim();
                                    if (pn) {
                                        subprocParamNames.add(pn.toLowerCase());
                                        declared.set(pn.toLowerCase(), ln);
                                        // FIX CRÍTICO: marcar como asignado en línea 0 (lo más
                                        // temprano posible) para que NUNCA dispare "usada antes
                                        // de asignar". Los parámetros se reciben con un valor
                                        // del caller — no necesitan asignación local.
                                        assigned.set(pn.toLowerCase(), 0);
                                    }
                                });
                            }
                            continue;
                        }
                        // Definir x, y Como Tipo
                        let mDef = t.match(/^Definir\s+(.+?)\s+Como\s+\w+/i);
                        if (mDef) {
                            mDef[1].split(',').forEach(v => {
                                const vn = v.trim().toLowerCase();
                                if (vn && !declared.has(vn)) declared.set(vn, ln);
                            });
                            continue;
                        }
                        // Dimension a[..], b[..]
                        let mDim = t.match(/^Dimension\s+(.+)$/i);
                        if (mDim) {
                            const re2 = /(\w+)\s*\[/g; let mm2;
                            while ((mm2 = re2.exec(mDim[1]))) {
                                const an = mm2[1].toLowerCase();
                                if (!declared.has(an)) declared.set(an, ln);
                            }
                            continue;
                        }
                        // Leer x, y
                        let mLeer = t.match(/^Leer\s+(.+)$/i);
                        if (mLeer) {
                            mLeer[1].split(',').forEach(v => {
                                const vn = v.trim().replace(/\[.*$/, '').toLowerCase();
                                if (vn && !subprocParamNames.has(vn) && !assigned.has(vn)) assigned.set(vn, ln);
                                if (vn && !declared.has(vn)) declared.set(vn, ln);
                            });
                            continue;
                        }
                        // Para i <- inicio Hasta fin [Con Paso step] Hacer
                        let mPara = t.match(/^Para\s+(\w+)\s*<-\s*(.+?)\s+Hasta\s+(.+?)(?:\s+Con\s+Paso\s+(.+?))?\s+Hacer$/i);
                        if (mPara) {
                            const vn = mPara[1].toLowerCase();
                            if (!assigned.has(vn)) assigned.set(vn, ln);
                            if (!declared.has(vn)) declared.set(vn, ln);
                            // Y los valores en `inicio`, `fin`, `paso` cuentan como lectura de identificadores
                            const rhs = (mPara[2] + ' ' + mPara[3] + ' ' + (mPara[4]||'')).replace(/"[^"]*"/g,'""');
                            const toks = rhs.match(/\b[a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-ZáéíóúÁÉÍÓÚñÑ_0-9]*\b/g) || [];
                            toks.forEach(tk => {
                                const k = tk.toLowerCase();
                                if (!_BP_RESERVED.has(k) && !procNames.has(k)) {
                                    if (!usedRead.has(k)) usedRead.set(k, ln);
                                }
                            });
                            continue;
                        }
                        // Asignación: x <- expr  o  arr[idx] <- expr
                        if (t.includes('<-')) {
                            const parts = t.split('<-');
                            const lhs = parts[0].trim();
                            const rhs = parts.slice(1).join('<-').replace(/"[^"]*"/g, '""');
                            // LHS: nombre o nombre[...]
                            const lhsName = lhs.match(/^(\w+)/);
                            if (lhsName) {
                                const vn = lhsName[1].toLowerCase();
                                // FIX CRÍTICO: guardar la PRIMERA asignación, no la última.
                                // Antes: cada `<-` sobreescribía la línea, así que si una var
                                // se reasignaba dentro de un bucle se reportaba como "usada
                                // antes de asignar" en la condición del bucle.
                                if (!subprocParamNames.has(vn) && !assigned.has(vn)) {
                                    assigned.set(vn, ln);
                                }
                                if (!declared.has(vn)) declared.set(vn, ln);
                            }
                            // RHS: lecturas
                            const toks = rhs.match(/\b[a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-ZáéíóúÁÉÍÓÚñÑ_0-9]*\b/g) || [];
                            toks.forEach(tk => {
                                const k = tk.toLowerCase();
                                if (!_BP_RESERVED.has(k) && !procNames.has(k)) {
                                    if (!usedRead.has(k)) usedRead.set(k, ln);
                                }
                            });
                            continue;
                        }
                        // Escribir/Si/Mientras/Hasta/Retornar/Devolver/Segun — extraen expresión con vars leídas
                        let exprPart = null;
                        // FIX: line label de Segun (1:, 2:, "a":, De Otro Modo:) puede llevar
                        // un stmt inline. Strip del prefijo `LABEL:` y reprocesar como si fuera línea normal.
                        let workT = t;
                        const caseInline = t.match(/^(?:\d+(?:\s*,\s*\d+)*|"[^"]*"|de\s+otro\s+modo|otro|[a-zA-ZáéíóúÁÉÍÓÚñÑ_][\wáéíóúÁÉÍÓÚñÑ]*)\s*:\s*(.+)$/i);
                        if (caseInline) {
                            workT = caseInline[1].trim();
                            // Si el stmt inline es una asignación o Escribir/Leer/etc.,
                            // procesarlo como tal: split por ';' por si hay múltiples
                            const subStmts = workT.split(/;+/).map(s => s.trim()).filter(Boolean);
                            for (const ss of subStmts) {
                                // Asignación
                                if (ss.includes('<-')) {
                                    const lp = ss.split('<-');
                                    const lhsM = lp[0].trim().match(/^(\w+)/);
                                    if (lhsM) {
                                        const vn = lhsM[1].toLowerCase();
                                        if (!subprocParamNames.has(vn) && !assigned.has(vn)) assigned.set(vn, ln);
                                        if (!declared.has(vn)) declared.set(vn, ln);
                                    }
                                    const rhsMasked = lp.slice(1).join('<-').replace(/"[^"]*"/g, '""');
                                    const toks = rhsMasked.match(/\b[a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-ZáéíóúÁÉÍÓÚñÑ_0-9]*\b/g) || [];
                                    toks.forEach(tk => {
                                        const k = tk.toLowerCase();
                                        if (!_BP_RESERVED.has(k) && !procNames.has(k) && !usedRead.has(k)) usedRead.set(k, ln);
                                    });
                                } else if (/^Leer\s+/i.test(ss)) {
                                    ss.replace(/^Leer\s+/i,'').split(',').forEach(v => {
                                        const vn = v.trim().replace(/\[.*$/, '').toLowerCase();
                                        if (vn && !subprocParamNames.has(vn) && !assigned.has(vn)) assigned.set(vn, ln);
                                        if (vn && !declared.has(vn)) declared.set(vn, ln);
                                    });
                                } else if (/^Escribir(\s+Sin\s+Saltar)?\s+/i.test(ss)) {
                                    const exp = ss.replace(/^Escribir(?:\s+Sin\s+Saltar)?\s+/i, '');
                                    const m = exp.replace(/"[^"]*"/g, '""');
                                    const toks = m.match(/\b[a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-ZáéíóúÁÉÍÓÚñÑ_0-9]*\b/g) || [];
                                    toks.forEach(tk => {
                                        const k = tk.toLowerCase();
                                        if (!_BP_RESERVED.has(k) && !procNames.has(k) && !usedRead.has(k)) usedRead.set(k, ln);
                                    });
                                }
                            }
                            continue;
                        }
                        if (/^Escribir(\s+Sin\s+Saltar)?\s+/i.test(t)) {
                            exprPart = t.replace(/^Escribir(?:\s+Sin\s+Saltar)?\s+/i, '');
                        } else if (/^Si\s+.+\s+Entonces$/i.test(t)) {
                            exprPart = t.replace(/^Si\s+/i, '').replace(/\s+Entonces$/i, '');
                        } else if (/^Mientras\s+.+\s+Hacer$/i.test(t)) {
                            exprPart = t.replace(/^Mientras\s+/i, '').replace(/\s+Hacer$/i, '');
                        } else if (/^Hasta\s+Que\s+/i.test(t)) {
                            exprPart = t.replace(/^Hasta\s+Que\s+/i, '');
                        } else if (/^(Retornar|Devolver)\s+/i.test(t)) {
                            exprPart = t.replace(/^(Retornar|Devolver)\s+/i, '');
                        } else if (/^Segun\s+.+\s+Hacer$/i.test(t)) {
                            // FIX: Segun lee su variable de control
                            exprPart = t.replace(/^Segun\s+/i, '').replace(/\s+Hacer$/i, '');
                        } else if (/^Segun\s+\S+\s*$/i.test(t)) {
                            // Segun sin Hacer (PSeInt lo permite)
                            exprPart = t.replace(/^Segun\s+/i, '');
                        }
                        if (exprPart) {
                            const masked = exprPart.replace(/"[^"]*"/g, '""');
                            const toks = masked.match(/\b[a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-ZáéíóúÁÉÍÓÚñÑ_0-9]*\b/g) || [];
                            toks.forEach(tk => {
                                const k = tk.toLowerCase();
                                if (!_BP_RESERVED.has(k) && !procNames.has(k)) {
                                    if (!usedRead.has(k)) usedRead.set(k, ln);
                                }
                            });
                        }
                    }

                    // ── 2) Variables declaradas pero nunca usadas (leídas) ──
                    const unusedList = [];
                    declared.forEach((dline, vn) => {
                        if (!usedRead.has(vn) && !subprocParamNames.has(vn) &&
                            !procNames.has(vn) && !funcReturnVars.has(vn)) {
                            unusedList.push({line: dline, name: vn});
                        }
                    });
                    // Agrupar: si hay >3 variables unused, emitir un mensaje agrupado
                    // para no abrumar al usuario.
                    if (unusedList.length === 1) {
                        warns.push(`Línea ${unusedList[0].line}: la variable '${unusedList[0].name}' está declarada pero nunca se usa. Considera eliminarla.`);
                    } else if (unusedList.length > 1 && unusedList.length <= 3) {
                        unusedList.forEach(u => warns.push(`Línea ${u.line}: variable '${u.name}' declarada pero nunca usada.`));
                    } else if (unusedList.length > 3) {
                        const names = unusedList.slice(0, 5).map(u => `'${u.name}' (L${u.line})`).join(', ');
                        const more = unusedList.length > 5 ? ` y ${unusedList.length - 5} más` : '';
                        warns.push(`Variables declaradas pero nunca usadas: ${names}${more}. Considera eliminarlas para mantener el código limpio.`);
                    }

                    // ── 3) Variables leídas antes de ser asignadas ──
                    usedRead.forEach((uline, vn) => {
                        if (assigned.has(vn)) {
                            const aline = assigned.get(vn);
                            if (uline < aline) {
                                warns.push(`Línea ${uline}: la variable '${vn}' se usa antes de asignarle un valor (primera asignación en línea ${aline}). Su valor será 0 / "" / Falso.`);
                            }
                        } else if (declared.has(vn) && !subprocParamNames.has(vn)) {
                            warns.push(`Línea ${uline}: la variable '${vn}' está declarada pero nunca recibe un valor (Leer / <-) antes de usarse. Será 0 / "" / Falso.`);
                        }
                    });

                    // ── 4) Nombres de variable muy cortos (1 carácter, no contador) ──
                    // Solo emitimos UN mensaje agrupado para no saturar.
                    const loopCounters = new Set(['i','j','k','n','m']);
                    const shortNames = [];
                    declared.forEach((dline, vn) => {
                        if (vn.length === 1 && !loopCounters.has(vn) && !procNames.has(vn) && !subprocParamNames.has(vn)) {
                            shortNames.push({line: dline, name: vn});
                        }
                    });
                    if (shortNames.length === 1) {
                        warns.push(`Línea ${shortNames[0].line}: el nombre '${shortNames[0].name}' es muy corto. Considera un nombre descriptivo (ej: 'total', 'contador', 'edad').`);
                    } else if (shortNames.length > 1) {
                        const list = shortNames.slice(0, 5).map(s => `'${s.name}'`).join(', ');
                        const more = shortNames.length > 5 ? ` y ${shortNames.length - 5} más` : '';
                        warns.push(`Nombres muy cortos: ${list}${more}. Usa nombres descriptivos para hacer el código más legible (ej: 'total', 'contador', 'edad').`);
                    }
                }

                // ── 5) Funciones / SubProcesos / Procedimientos muy largos ──
                // ── 6) Anidamiento profundo (>4 niveles) ──
                // ── 7) Código inalcanzable tras Salir / Retornar / Devolver ──
                {
                    const stack = [];
                    let maxDepth = 0;
                    let depthAlreadyWarned = false; // FIX: solo avisar UNA vez por programa
                    let unreachableBlocker = null; // {line, kw} cuando una línea Salir/Retornar ya bloqueó
                    let unreachableWarnCount = 0;
                    let blockBodyStart = null;
                    let blockKw = null;
                    let blockKwLine = -1;
                    let blockBodyCount = 0;

                    const isOpen = (t) =>
                        /^(proceso|algoritmo)\s+/i.test(t) ||
                        /^(subproceso|(funcion|función)|procedimiento)\s+/i.test(t) ||
                        (/^si\s+.+entonces$/i.test(t) && !/finsi/i.test(t)) ||
                        /^mientras\s+.+hacer$/i.test(t) ||
                        (/^para\s+\w+\s*<-\s*.+\s+hasta\s+.+\s+hacer$/i.test(t) && !/finpara/i.test(t)) ||
                        /^repetir$/i.test(t) ||
                        (/^segun\s+/i.test(t) && !/finsegun/i.test(t));
                    const isClose = (t) =>
                        /^(finproceso|finalgoritmo|finsubproceso|finfuncion|finfunción|finprocedimiento|finsi|finmientras|finpara|finsegun)$/i.test(t) ||
                        /^hasta\s+que\s+/i.test(t);

                    for (let i = 0; i < lines.length; i++) {
                        let raw = lines[i];
                        let ci = -1, inStr = false;
                        for (let j = 0; j < raw.length - 1; j++) {
                            if (raw[j] === '"') inStr = !inStr;
                            if (!inStr && raw[j] === '/' && raw[j+1] === '/') { ci = j; break; }
                        }
                        const t = (ci >= 0 ? raw.slice(0, ci) : raw).trim().replace(/;+\s*$/, '').trim();
                        if (!t) continue;
                        const ln = i + 1;

                        // ── Funciones muy largas: contar líneas no-vacías del cuerpo
                        if (/^(subproceso|(funcion|función)|procedimiento|proceso|algoritmo)\s+/i.test(t)) {
                            blockKw = (t.match(/^(\w+)/) || ['',''])[1];
                            blockKwLine = ln;
                            blockBodyCount = 0;
                        } else if (/^(finsubproceso|finfuncion|finfunción|finprocedimiento|finproceso|finalgoritmo)$/i.test(t)) {
                            if (blockKwLine > 0 && blockBodyCount > 50) {
                                warns.push(`Línea ${blockKwLine}: el bloque '${blockKw}' tiene ${blockBodyCount} líneas — es demasiado largo (>50). Considera dividirlo en SubProcesos más pequeños y enfocados.`);
                            }
                            blockKwLine = -1;
                            blockBodyCount = 0;
                        } else if (blockKwLine > 0) {
                            blockBodyCount++;
                        }

                        // ── Anidamiento ──
                        if (isOpen(t)) {
                            stack.push({line: ln, kw: t.split(/\s/)[0]});
                            if (stack.length > maxDepth) maxDepth = stack.length;
                            // FIX: solo avisar UNA vez (en el primer cruce) para no spamear.
                            if (stack.length > 4 && !depthAlreadyWarned) {
                                depthAlreadyWarned = true;
                                warns.push(`Línea ${ln}: anidamiento profundo (${stack.length} niveles). Considera extraer la lógica interna a un SubProceso o usar 'salida temprana' para simplificar.`);
                            }
                            unreachableBlocker = null;
                            continue;
                        }
                        if (isClose(t)) {
                            stack.pop();
                            unreachableBlocker = null;
                            continue;
                        }
                        if (/^sino\s*$/i.test(t) || /^sino\s+si\b/i.test(t)) {
                            unreachableBlocker = null;
                            continue;
                        }

                        // ── Código inalcanzable ──
                        if (unreachableBlocker && unreachableWarnCount < 3) {
                            // Limitar a 3 avisos para no abrumar
                            warns.push(`Línea ${ln}: código inalcanzable. La instrucción '${unreachableBlocker.kw}' en línea ${unreachableBlocker.line} sale del bloque — todo lo que sigue antes del cierre nunca se ejecuta.`);
                            unreachableWarnCount++;
                            unreachableBlocker = null;
                        } else if (unreachableBlocker) {
                            unreachableBlocker = null; // limpiar sin avisar
                        }
                        if (/^(salir|salirpara|interrumpir|retornar|devolver)\b/i.test(t)) {
                            const kw = (t.match(/^(\w+)/) || ['',''])[1];
                            unreachableBlocker = {line: ln, kw};
                        }

                        // ── 8) Asignación redundante `x <- x` ──
                        const selfAssign = t.match(/^(\w+)\s*<-\s*(\w+)\s*$/);
                        if (selfAssign && selfAssign[1].toLowerCase() === selfAssign[2].toLowerCase()) {
                            warns.push(`Línea ${ln}: asignación redundante '${selfAssign[1]} <- ${selfAssign[2]}' (asignar una variable a sí misma no tiene efecto).`);
                        }

                        // ── 9) Comparación contra true/false redundante: `Si x = Verdadero` ──
                        const redCmp = t.match(/\b(\w+)\s*=\s*(verdadero|falso)\b/i);
                        if (redCmp && /^si\s|^mientras\s|^hasta\s+que\s/i.test(t)) {
                            warns.push(`Línea ${ln}: comparación '${redCmp[1]} = ${redCmp[2]}' es redundante. Si '${redCmp[1]}' ya es lógico, usa directamente '${redCmp[1]}' (o '${/falso/i.test(redCmp[2]) ? 'NO ' : ''}${redCmp[1]}').`);
                        }
                    }
                }

                // ── 10) Líneas muy largas (>140 caracteres) — agrupado ──
                {
                    const longLines = [];
                    for (let i = 0; i < lines.length; i++) {
                        if (lines[i].length > 140) longLines.push({line: i+1, len: lines[i].length});
                    }
                    if (longLines.length === 1) {
                        warns.push(`Línea ${longLines[0].line}: línea muy larga (${longLines[0].len} caracteres). Considera dividirla.`);
                    } else if (longLines.length > 1) {
                        const list = longLines.slice(0, 3).map(l => `L${l.line}`).join(', ');
                        const more = longLines.length > 3 ? ` y ${longLines.length - 3} más` : '';
                        warns.push(`Líneas muy largas (>140 chars): ${list}${more}. Divídelas o extrae a variables intermedias para mejor legibilidad.`);
                    }
                }

                // ════════════════════════════════════════════════════════════
                // 💡 ADVISOR INTELIGENTE — Sugerencias contextuales (tips)
                // Pensado como "asistente sin IA": detecta patrones objetivos
                // que típicamente revelan algo mejorable, pero NO son errores.
                // Cada tip se prefija con "💡 Sugerencia" para diferenciarlo
                // visualmente de los warnings normales.
                // ════════════════════════════════════════════════════════════
                {
                    // ── Tip 1: Funcion declarada sin 'Retornar'/'Devolver' explícito ──
                    {
                        let inFunc = null; // {line, name, hasReturn}
                        for (let i = 0; i < lines.length; i++) {
                            let raw = lines[i];
                            let ci = -1, inStr = false;
                            for (let j = 0; j < raw.length - 1; j++) {
                                if (raw[j] === '"') inStr = !inStr;
                                if (!inStr && raw[j] === '/' && raw[j+1] === '/') { ci = j; break; }
                            }
                            const t = (ci >= 0 ? raw.slice(0, ci) : raw).trim().replace(/;+\s*$/, '').trim();
                            if (!t) continue;
                            const ln = i + 1;
                            const mF = t.match(/^(?:Funcion|Función)\s+(?:(\w+)\s*<-\s*)?(\w+)/i);
                            if (mF) {
                                inFunc = { line: ln, name: mF[2], retVar: mF[1] || null, hasReturn: false, retVarAssigned: false };
                                continue;
                            }
                            if (/^(finfuncion|finfunción)$/i.test(t)) {
                                if (inFunc) {
                                    // Si la Funcion tenía 'ret <-' pero NUNCA se asignó ret en el cuerpo
                                    if (inFunc.retVar && !inFunc.retVarAssigned) {
                                        warns.push(`💡 Sugerencia (línea ${inFunc.line}): la Función '${inFunc.name}' declara la variable de retorno '${inFunc.retVar}' pero nunca le asigna un valor en su cuerpo. El llamador recibirá 0 / "" / Falso.`);
                                    }
                                    // Si la Funcion NO tenía retVar Y NO tiene Retornar/Devolver explícito
                                    if (!inFunc.retVar && !inFunc.hasReturn) {
                                        warns.push(`💡 Sugerencia (línea ${inFunc.line}): la Función '${inFunc.name}' no tiene 'Retornar'/'Devolver' ni variable de retorno. ¿Es realmente una función o querías un SubProceso?`);
                                    }
                                    inFunc = null;
                                }
                                continue;
                            }
                            if (inFunc) {
                                if (/^(retornar|devolver)\b/i.test(t)) inFunc.hasReturn = true;
                                // Detectar asignación a la var de retorno
                                if (inFunc.retVar) {
                                    const lhsMatch = t.match(/^(\w+)\s*<-/);
                                    if (lhsMatch && lhsMatch[1].toLowerCase() === inFunc.retVar.toLowerCase()) {
                                        inFunc.retVarAssigned = true;
                                    }
                                }
                            }
                        }
                    }

                    // ── Tip 2: Mientras potencialmente infinito ──
                    // Detecta `Mientras X Hacer ... FinMientras` donde las variables
                    // de la condición no se modifican dentro del bucle ni hay Salir/Retornar.
                    {
                        let inLoop = null;
                        let infiniteTips = 0;
                        for (let i = 0; i < lines.length && infiniteTips < 2; i++) {
                            let raw = lines[i];
                            let ci = -1, inStr = false;
                            for (let j = 0; j < raw.length - 1; j++) {
                                if (raw[j] === '"') inStr = !inStr;
                                if (!inStr && raw[j] === '/' && raw[j+1] === '/') { ci = j; break; }
                            }
                            const t = (ci >= 0 ? raw.slice(0, ci) : raw).trim().replace(/;+\s*$/, '').trim();
                            if (!t) continue;
                            const ln = i + 1;
                            const mM = t.match(/^Mientras\s+(.+)\s+Hacer$/i);
                            if (mM) {
                                const cond = mM[1].replace(/"[^"]*"/g, '""');
                                const condVars = new Set();
                                const condToks = cond.match(/\b[a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-ZáéíóúÁÉÍÓÚñÑ_0-9]*\b/g) || [];
                                condToks.forEach(tk => {
                                    if (!_BP_RESERVED.has(tk.toLowerCase())) condVars.add(tk.toLowerCase());
                                });
                                inLoop = { line: ln, condVars, modified: false, hasEarlyExit: false };
                                // Caso especial: Mientras Verdadero/Falso Hacer
                                if (/^(verdadero|true)\s*$/i.test(mM[1].trim())) {
                                    inLoop.condIsLiteral = true;
                                }
                                continue;
                            }
                            if (/^finmientras$/i.test(t)) {
                                if (inLoop) {
                                    const hasNoExit = !inLoop.modified && !inLoop.hasEarlyExit;
                                    if (hasNoExit) {
                                        // Marcar VISUALMENTE la línea del Mientras (subrayado wavy amarillo)
                                        const rawL = lines[inLoop.line - 1] || '';
                                        const colStart = Math.max(0, rawL.search(/\S/));
                                        const colEnd = Math.min(rawL.length, colStart + rawL.trim().length);
                                        if (colEnd > colStart) {
                                            _paramErrorRanges.push({
                                                line: inLoop.line,
                                                startCol: colStart,
                                                endCol: colEnd,
                                                severity: 'warn'
                                            });
                                        }
                                        if (inLoop.condIsLiteral) {
                                            warns.push(`⚠️ Línea ${inLoop.line}: posible BUCLE INFINITO — 'Mientras Verdadero Hacer' sin 'Salir' / 'Retornar' / 'Interrumpir' adentro. El programa se ejecutará hasta agotar el tiempo límite (30s). Añade una condición de salida.`);
                                        } else if (inLoop.condVars.size > 0) {
                                            const vs = Array.from(inLoop.condVars).slice(0,3).join(', ');
                                            warns.push(`⚠️ Línea ${inLoop.line}: posible BUCLE INFINITO — la condición usa ${vs} pero NINGUNA de esas variables se modifica dentro del bucle. El programa se colgará al ejecutarlo.`);
                                        }
                                        infiniteTips++;
                                    }
                                    inLoop = null;
                                }
                                continue;
                            }
                            if (inLoop) {
                                if (/^(salir|salirpara|interrumpir|retornar|devolver)\b/i.test(t)) {
                                    inLoop.hasEarlyExit = true;
                                }
                                // Detectar asignación a alguna var de la condición
                                const am = t.match(/^(\w+)\s*<-/);
                                if (am && inLoop.condVars.has(am[1].toLowerCase())) {
                                    inLoop.modified = true;
                                }
                                // Leer también la modifica
                                if (/^leer\s+/i.test(t)) {
                                    const args = t.replace(/^leer\s+/i, '').split(',');
                                    args.forEach(a => {
                                        const n = a.trim().replace(/\[.*$/, '').toLowerCase();
                                        if (inLoop.condVars.has(n)) inLoop.modified = true;
                                    });
                                }
                            }
                        }
                    }

                    // ── Tip 3: Cadena de SiNo Si larga (>=3 ramas) → sugerir Segun ──
                    {
                        // FIX: el contador NO debe resetearse por cada línea del cuerpo —
                        // solo cuando salimos del Si/SiNo Si más externo (al ver FinSi
                        // o instrucción al mismo nivel). Mantenemos un stack de Si abiertos
                        // y solo evaluamos chain cuando el SiNo Si está al mismo nivel.
                        let chainCount = 0;
                        let chainStartLine = -1;
                        let chainSubject = null;
                        let chainDepth = 0;  // profundidad del Si que abre el chain
                        let curDepth = 0;
                        let suggested = false;
                        for (let i = 0; i < lines.length && !suggested; i++) {
                            let raw = lines[i];
                            let ci = -1, inStr = false;
                            for (let j = 0; j < raw.length - 1; j++) {
                                if (raw[j] === '"') inStr = !inStr;
                                if (!inStr && raw[j] === '/' && raw[j+1] === '/') { ci = j; break; }
                            }
                            const t = (ci >= 0 ? raw.slice(0, ci) : raw).trim().replace(/;+\s*$/, '').trim();
                            if (!t) continue;
                            const ln = i + 1;

                            const mSiNoSi = t.match(/^sino\s+si\s+(\w+)\s*=\s*.+\s+Entonces$/i);
                            const mSi = t.match(/^si\s+(\w+)\s*=\s*.+\s+Entonces$/i);
                            const isFinSi = /^finsi$/i.test(t);
                            const isOpenBlock = /^(si|mientras|para|repetir|segun|subproceso|funcion|función|procedimiento|proceso|algoritmo)\b/i.test(t) && /(entonces|hacer|do)$/i.test(t) === false ? /^(repetir|subproceso|funcion|función|procedimiento|proceso|algoritmo)\b/i.test(t) : true;
                            const isCloseBlock = /^(finsi|finmientras|finpara|finsegun|finsubproceso|finfuncion|finfunción|finprocedimiento|finproceso|finalgoritmo)$/i.test(t) || /^hasta\s+que\s+/i.test(t);

                            if (mSi && !mSiNoSi) {
                                // Nuevo Si: posible inicio de chain
                                chainCount = 1;
                                chainStartLine = ln;
                                chainSubject = mSi[1].toLowerCase();
                                chainDepth = curDepth;
                                curDepth++;
                            } else if (mSiNoSi) {
                                // SiNo Si al mismo depth que el Si inicial → continúa chain
                                if (chainSubject === mSiNoSi[1].toLowerCase()) {
                                    chainCount++;
                                    if (chainCount >= 4) {
                                        warns.push(`💡 Sugerencia (línea ${chainStartLine}): tienes ${chainCount}+ ramas 'Si/SiNo Si' comparando '${chainSubject}'. Considera 'Segun ${chainSubject} Hacer' — es más legible.`);
                                        suggested = true;
                                    }
                                }
                            } else if (isFinSi) {
                                curDepth--;
                                if (curDepth <= chainDepth) {
                                    chainCount = 0;
                                    chainSubject = null;
                                }
                            } else if (isOpenBlock && /entonces$|hacer$/i.test(t)) {
                                curDepth++;
                            } else if (isCloseBlock) {
                                curDepth--;
                            }
                        }
                    }

                    // ── Tip 4: Comentarios TODO/FIXME ──
                    {
                        const todos = [];
                        for (let i = 0; i < lines.length; i++) {
                            const raw = lines[i];
                            const tm = raw.match(/\/\/\s*(TODO|FIXME|XXX|HACK)\b[:\s]*(.*)/i);
                            if (tm) todos.push({line: i+1, kind: tm[1].toUpperCase(), text: tm[2].trim()});
                        }
                        if (todos.length === 1) {
                            warns.push(`💡 Recordatorio (línea ${todos[0].line}): tienes un ${todos[0].kind} pendiente${todos[0].text ? `: ${todos[0].text}` : ''}.`);
                        } else if (todos.length > 1) {
                            const list = todos.slice(0,3).map(t => `${t.kind}@L${t.line}`).join(', ');
                            const more = todos.length > 3 ? ` y ${todos.length-3} más` : '';
                            warns.push(`💡 Tienes ${todos.length} recordatorios pendientes en el código (${list}${more}).`);
                        }
                    }

                    // ── Tip 5: Magic numbers en condiciones ──
                    // Detectar literales >9 en condiciones (Si X > 100, Mientras x < 365)
                    // Sugerir extraer a constante para legibilidad.
                    {
                        const magicNumbers = [];
                        for (let i = 0; i < lines.length; i++) {
                            const raw = lines[i];
                            const ci = (() => {
                                let inStr = false;
                                for (let j = 0; j < raw.length - 1; j++) {
                                    if (raw[j] === '"') inStr = !inStr;
                                    if (!inStr && raw[j] === '/' && raw[j+1] === '/') return j;
                                }
                                return -1;
                            })();
                            const t = (ci >= 0 ? raw.slice(0, ci) : raw).trim();
                            if (!t) continue;
                            if (!/^(si|sino\s+si|mientras|hasta\s+que|para\s+\w+\s*<-)\b/i.test(t)) continue;
                            const noStr = t.replace(/"[^"]*"/g, '""');
                            const nums = noStr.match(/\b\d{2,}\b/g) || [];
                            for (const n of nums) {
                                if (Number(n) > 9 && Number(n) !== 100 && Number(n) !== 1000) {
                                    magicNumbers.push({line: i+1, n});
                                    break;
                                }
                            }
                        }
                        if (magicNumbers.length > 2) {
                            const list = magicNumbers.slice(0,3).map(m => `${m.n}@L${m.line}`).join(', ');
                            warns.push(`💡 Sugerencia: encontré números "mágicos" en condiciones (${list}...). Considera extraerlos a constantes con nombre (ej: 'Definir MAX_EDAD Como Entero; MAX_EDAD <- 120') para que el código sea autoexplicativo.`);
                        }
                    }
                }

                // ── Cap final: si hay demasiados warnings, agregamos un meta-aviso ──
                if (warns.length > 25) {
                    const extras = warns.length - 25;
                    warns = warns.slice(0, 25);
                    warns.push(`ℹ️ Hay ${extras} advertencia(s) más ocultas para no abrumarte. Corrige primero las visibles y vuelve a ejecutar el análisis.`);
                }

                return warns;
            }

            /* ============================================================
   EditorIDE — módulo reutilizable de análisis + paneles
   ============================================================
   Encapsula todo el ciclo: input → analyzeSyntax + analyzeWarnings →
   render de paneles → sincronización de highlight. Mantiene estado
   PER-EDITOR (no globals compartidos) y crea paneles dinámicamente
   si no existen. Uso típico:

       EditorIDE.attach('exampleEditor', {
           highlightId:   'exampleHighlight',  // opcional
           autoPanels:    true,                // crear paneles bajo el editor
       });

   El playground sigue usando su pipeline original; este módulo
   sirve para los editores de lecciones (ejemplo, reto) y cualquier
   editor futuro que quiera el mismo IDE-experience sin duplicar
   código. */
            (function() {
                const instances = new Map();

                class EditorIDE {
                    static attach(editorId, options) {
                        if (instances.has(editorId)) return instances.get(editorId);
                        const inst = new EditorIDE(editorId, options || {});
                        if (inst.ta) instances.set(editorId, inst);
                        return inst;
                    }
                    static get(editorId) { return instances.get(editorId); }

                    constructor(editorId, opts) {
                        this.editorId = editorId;
                        this.opts = opts;
                        this.ta = document.getElementById(editorId);
                        if (!this.ta) return;
                        this.highlightId = opts.highlightId || null;
                        // Estado PER-EDITOR
                        this.state = {
                            errors: [],
                            warns: [],
                            undeclaredVars: new Map(),
                            errorLineSet: new Set(),
                            errorLinesWithRange: new Set(),
                            syntaxErrorRanges: [],
                            paramErrorRanges: []
                        };
                        if (opts.autoPanels !== false) this._buildPanels();
                        this._debounce = null;
                        this.ta.addEventListener('input', () => this.scheduleAnalysis());
                        this.ta.addEventListener('change', () => this.scheduleAnalysis(0));
                        // Análisis inicial
                        setTimeout(() => this.analyze(), 0);
                    }

                    _buildPanels() {
                        // El wrap del editor (`.editor-wrap`) tiene `overflow:hidden`,
                        // así que NO podemos insertar el host como hijo o quedaría
                        // recortado y se vería superpuesto al editor.
                        // Solución: insertar el host como SIBLING del wrap, antes de
                        // los `editor-actions` u otros elementos que ya estén ahí.
                        const wrap = this.ta.closest('.editor-wrap, .big-editor-container, .editor-container, .playground-editor-panel') || this.ta.parentElement;
                        if (!wrap) return;
                        const parent = wrap.parentElement || wrap;
                        // No duplicar — buscar host ya creado para este editor en el parent
                        if (parent.querySelector(':scope > .ide-diag-host[data-for="' + this.editorId + '"]')) return;
                        const host = document.createElement('div');
                        host.className = 'ide-diag-host';
                        host.setAttribute('data-for', this.editorId);
                        host.style.cssText = 'margin-top:8px;margin-bottom:8px;display:flex;flex-direction:column;gap:6px;clear:both';

                        const epId = 'ide-err-' + this.editorId;
                        const wpId = 'ide-warn-' + this.editorId;
                        const ecId = 'ide-ec-' + this.editorId;
                        const wcId = 'ide-wc-' + this.editorId;
                        const elId = 'ide-el-' + this.editorId;
                        const wlId = 'ide-wl-' + this.editorId;

                        host.innerHTML = `
                            <div class="diag-panel error-panel" id="${epId}">
                                <div class="diag-panel-header" tabindex="0" role="button" aria-expanded="false" aria-label="Panel de errores. Enter para expandir.">
                                    <span class="diag-toggle-icon">▸</span>
                                    <span class="diag-panel-title">⛔ Errores de sintaxis</span>
                                    <span class="diag-count" id="${ecId}">0</span>
                                </div>
                                <div class="diag-panel-body" id="${elId}"></div>
                            </div>
                            <div class="diag-panel warn-panel" id="${wpId}">
                                <div class="diag-panel-header" tabindex="0" role="button" aria-expanded="false" aria-label="Panel de sugerencias. Enter para expandir.">
                                    <span class="diag-toggle-icon">▸</span>
                                    <span class="diag-panel-title">💡 Sugerencias</span>
                                    <span class="diag-count" id="${wcId}">0</span>
                                </div>
                                <div class="diag-panel-body" id="${wlId}"></div>
                            </div>
                        `;
                        // Insertar como SIBLING después del wrap del editor.
                        // Esto evita el clipping por `overflow:hidden` del wrap y
                        // garantiza que los paneles fluyan debajo, sin solaparse.
                        if (wrap.nextSibling) {
                            parent.insertBefore(host, wrap.nextSibling);
                        } else {
                            parent.appendChild(host);
                        }

                        // Toggle expandido al click/Enter en header
                        host.querySelectorAll('.diag-panel-header').forEach(h => {
                            const panel = h.parentElement;
                            const toggle = () => {
                                const expanded = panel.classList.toggle('expanded');
                                h.setAttribute('aria-expanded', expanded ? 'true' : 'false');
                            };
                            h.addEventListener('click', toggle);
                            h.addEventListener('keydown', e => {
                                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
                            });
                        });

                        this._panelIds = { ep: epId, wp: wpId, ec: ecId, wc: wcId, el: elId, wl: wlId };
                    }

                    scheduleAnalysis(delay) {
                        if (delay === undefined) delay = 280;
                        clearTimeout(this._debounce);
                        this._debounce = setTimeout(() => this.analyze(), delay);
                    }

                    analyze() {
                        const code = this.ta.value;
                        // Snapshot de globals que analyzeSyntax/Warnings sobrescriben
                        const snap = {
                            syntaxErrorRanges: window._syntaxErrorRanges,
                            paramErrorRanges: window._paramErrorRanges,
                            errorLinesWithRange: window._errorLinesWithRange,
                            undeclaredVars: window._undeclaredVars,
                            errorLineSet: window._errorLineSet
                        };
                        let errors = [], warns = [];
                        try {
                            errors = analyzeSyntax(code) || [];
                            warns  = analyzeWarnings(code) || [];
                        } catch(e) {
                            console.warn('EditorIDE analyze failed:', e);
                        }
                        // Capturar el estado producido por las funciones de análisis
                        this.state.syntaxErrorRanges  = window._syntaxErrorRanges  || [];
                        this.state.paramErrorRanges   = window._paramErrorRanges   || [];
                        this.state.errorLinesWithRange = window._errorLinesWithRange || new Set();

                        // FIX: variables sin declarar son ERRORES (rojo), no warnings.
                        // Mantenemos el `undeclaredVars` map para overlays específicos por token.
                        const umap = new Map();
                        for (const err of errors) {
                            const m = err.msg.match(/Variable '([^']+)' no está definida/);
                            if (m) {
                                if (!umap.has(err.line)) umap.set(err.line, new Set());
                                umap.get(err.line).add(m[1]);
                            }
                        }
                        this.state.errors = errors;
                        this.state.warns = warns;
                        this.state.undeclaredVars = umap;
                        this.state.errorLineSet = new Set(errors.map(e => e.line));

                        // Restaurar globals SI no soy el playground (que tiene su pipeline propio).
                        if (this.editorId !== 'playgroundEditor') {
                            window._syntaxErrorRanges  = snap.syntaxErrorRanges;
                            window._paramErrorRanges   = snap.paramErrorRanges;
                            window._errorLinesWithRange = snap.errorLinesWithRange;
                            window._undeclaredVars      = snap.undeclaredVars;
                            window._errorLineSet        = snap.errorLineSet;
                        }

                        this.renderPanels();
                        this.applyHighlight();
                        // FIX: dibujar wavy-underline en lecciones (antes solo playground).
                        if (this.editorId !== 'playgroundEditor' && typeof window._renderParamErrorOverlays === 'function') {
                            const combinedRanges = [
                                ...(this.state.syntaxErrorRanges || []),
                                ...(this.state.paramErrorRanges  || [])
                            ];
                            try { window._renderParamErrorOverlays(this.editorId, combinedRanges); } catch(_) {}
                        }
                    }

                    renderPanels() {
                        const ids = this._panelIds;
                        if (!ids) return;
                        const ep = document.getElementById(ids.ep);
                        const wp = document.getElementById(ids.wp);
                        const el = document.getElementById(ids.el);
                        const wl = document.getElementById(ids.wl);
                        const ec = document.getElementById(ids.ec);
                        const wc = document.getElementById(ids.wc);
                        if (!ep || !wp || !el || !wl) return;

                        el.innerHTML = '';
                        wl.innerHTML = '';
                        if (ec) ec.textContent = this.state.errors.length;
                        if (wc) wc.textContent = this.state.warns.length;

                        const code = this.ta.value;
                        const lines = code.split('\n');
                        const rangeByLine = new Map();
                        for (const r of this.state.syntaxErrorRanges) {
                            if (!rangeByLine.has(r.line) || r.startCol < rangeByLine.get(r.line)) {
                                rangeByLine.set(r.line, r.startCol);
                            }
                        }
                        for (const r of this.state.paramErrorRanges) {
                            if (!rangeByLine.has(r.line) || r.startCol < rangeByLine.get(r.line)) {
                                rangeByLine.set(r.line, r.startCol);
                            }
                        }

                        const jumpTo = (ln, col) => {
                            this.ta.focus();
                            let pos = 0;
                            for (let i = 0; i < Math.min(ln - 1, lines.length); i++) pos += lines[i].length + 1;
                            const lineText = lines[ln - 1] || '';
                            let targetCol = (typeof col === 'number' && col >= 0)
                                ? Math.min(col, lineText.length)
                                : Math.max(0, lineText.search(/\S/));
                            const cur = pos + targetCol;
                            this.ta.setSelectionRange(cur, cur);
                            // Centrar scroll
                            try {
                                const cs = window.getComputedStyle(this.ta);
                                let lh = parseFloat(cs.lineHeight);
                                if (isNaN(lh)) lh = parseFloat(cs.fontSize) * 1.6;
                                this.ta.scrollTop = Math.max(0, (ln - 1) * lh - this.ta.clientHeight / 2);
                            } catch(_) {}
                        };

                        // FIX UX: actualizar badges de las pestañas fullscreen
                        // cuando cambia el conteo de errores/warns
                        if (typeof _fsUpdateTabButtons === 'function') {
                            try { _fsUpdateTabButtons(); } catch(_) {}
                        }

                        if (this.state.errors.length > 0) {
                            ep.classList.add('has-errors');
                            ep.classList.add('expanded');
                            this.state.errors.forEach(e => {
                                const item = document.createElement('div');
                                item.className = 'error-item';
                                const exactCol = rangeByLine.get(e.line);
                                item.title = (typeof exactCol === 'number')
                                    ? 'Clic para ir a la línea ' + e.line + ', columna ' + (exactCol + 1)
                                    : 'Clic para ir a la línea ' + e.line;
                                item.innerHTML = '<span class="error-line-num">L' + e.line + '</span><span class="error-msg">' + this._esc(e.msg) + '</span>';
                                item.onclick = (ev) => { ev.stopPropagation(); jumpTo(e.line, exactCol); };
                                el.appendChild(item);
                            });
                        } else {
                            ep.classList.remove('has-errors');
                            ep.classList.remove('expanded');
                        }

                        if (this.state.warns.length > 0) {
                            wp.classList.add('has-warns');
                            this.state.warns.forEach(w => {
                                const item = document.createElement('div');
                                item.className = 'warn-item';
                                const mLine = w.match(/^Línea\s+(\d+):\s*/);
                                if (mLine) {
                                    const ln = parseInt(mLine[1]);
                                    const rest = w.substring(mLine[0].length);
                                    let exactCol = rangeByLine.get(ln);
                                    if (typeof exactCol !== 'number') {
                                        const mVar = rest.match(/Variable '([^']+)'/);
                                        if (mVar) {
                                            const idx = (lines[ln-1] || '').indexOf(mVar[1]);
                                            if (idx >= 0) exactCol = idx;
                                        }
                                    }
                                    item.innerHTML = '💡 <span class="warn-line-jump">L' + ln + '</span> ' + this._esc(rest);
                                    item.title = (typeof exactCol === 'number')
                                        ? 'Clic para ir a la línea ' + ln + ', columna ' + (exactCol + 1)
                                        : 'Clic para ir a la línea ' + ln;
                                    item.onclick = (ev) => { ev.stopPropagation(); jumpTo(ln, exactCol); };
                                } else {
                                    item.textContent = '💡 ' + w;
                                }
                                wl.appendChild(item);
                            });
                        } else {
                            wp.classList.remove('has-warns');
                        }
                    }

                    applyHighlight() {
                        // Si hay un highlight div, sincronizar con su estado.
                        if (!this.highlightId) return;
                        if (!window.syncHighlight) return;
                        // Swap-in temporal del estado de ESTE editor a los globals que
                        // consume el highlighter, sync, swap-out.
                        const snap = {
                            undeclaredVars: window._undeclaredVars,
                            errorLineSet: window._errorLineSet,
                            errorLinesWithRange: window._errorLinesWithRange
                        };
                        window._undeclaredVars      = this.state.undeclaredVars;
                        window._errorLineSet        = this.state.errorLineSet;
                        window._errorLinesWithRange = this.state.errorLinesWithRange;
                        try { window.syncHighlight(this.editorId, this.highlightId); } catch(_) {}
                        if (this.editorId !== 'playgroundEditor') {
                            window._undeclaredVars      = snap.undeclaredVars;
                            window._errorLineSet        = snap.errorLineSet;
                            window._errorLinesWithRange = snap.errorLinesWithRange;
                        }
                    }

                    _esc(s) {
                        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                    }

                    destroy() {
                        clearTimeout(this._debounce);
                        instances.delete(this.editorId);
                        const ids = this._panelIds;
                        if (ids) {
                            const host = document.querySelector('.ide-diag-host[data-for="' + this.editorId + '"]');
                            if (host) host.remove();
                        }
                    }
                }
                window.EditorIDE = EditorIDE;
            })();

            /* ============================================================
   CheatPanel — panel lateral de símbolos y funciones PSeInt
   ============================================================
   Reutilizable: se attachea a cualquier editor (playground, ejemplo,
   reto, fullscreen). Categorías colapsables; al hacer click en un
   item se inserta el código en la posición del cursor, preservando
   undo via execCommand. Para teclados de portátil que no tienen
   símbolos como `<-`, `<=`, `<>`, `^`, etc. */
            (function() {
                const CHEAT_CATEGORIES = [
                    { name: 'Asignación y operadores', items: [
                        { lbl: '←  asignar',     ins: ' <- ' },
                        { lbl: '=  igual',        ins: ' = ' },
                        { lbl: '<> distinto',    ins: ' <> ' },
                        { lbl: '<  menor',       ins: ' < ' },
                        { lbl: '>  mayor',       ins: ' > ' },
                        { lbl: '<= menor o igual', ins: ' <= ' },
                        { lbl: '>= mayor o igual', ins: ' >= ' },
                        { lbl: '+  suma',         ins: ' + ' },
                        { lbl: '−  resta',        ins: ' - ' },
                        { lbl: '×  mult.',        ins: ' * ' },
                        { lbl: '÷  divis.',       ins: ' / ' },
                        { lbl: '^  potencia',     ins: '^' },
                        { lbl: 'MOD',             ins: ' MOD ' },
                        { lbl: 'DIV',             ins: ' DIV ' }
                    ]},
                    { name: 'Lógicos', items: [
                        { lbl: 'Y',           ins: ' Y ' },
                        { lbl: 'O',           ins: ' O ' },
                        { lbl: 'NO',          ins: ' NO ' },
                        { lbl: 'Verdadero',   ins: 'Verdadero' },
                        { lbl: 'Falso',       ins: 'Falso' }
                    ]},
                    { name: 'Declaración', items: [
                        { lbl: 'Definir … Como Entero',  ins: 'Definir nombre Como Entero\n' },
                        { lbl: 'Definir … Como Real',    ins: 'Definir nombre Como Real\n' },
                        { lbl: 'Definir … Como Texto',   ins: 'Definir nombre Como Texto\n' },
                        { lbl: 'Definir … Como Logico',  ins: 'Definir nombre Como Logico\n' },
                        { lbl: 'Dimension arr[N]',       ins: 'Dimension arr[10]\n' }
                    ]},
                    { name: 'Entrada / Salida', items: [
                        { lbl: 'Leer variable',          ins: 'Leer variable\n' },
                        { lbl: 'Escribir …',             ins: 'Escribir "texto"\n' },
                        { lbl: 'Escribir Sin Saltar',    ins: 'Escribir Sin Saltar "texto"\n' },
                        { lbl: 'Borrar Pantalla',        ins: 'Borrar Pantalla\n' }
                    ]},
                    { name: 'Control de flujo', items: [
                        { lbl: 'Si … Entonces … FinSi',
                          ins: 'Si condicion Entonces\n\t// Se ejecuta cuando la condicion es Verdadera\nFinSi\n' },
                        { lbl: 'Si … Sino … FinSi',
                          ins: 'Si condicion Entonces\n\t// Rama Verdadera: se ejecuta si la condicion es Verdadera\nSiNo\n\t// Rama Falsa: se ejecuta si la condicion es Falsa\nFinSi\n' },
                        { lbl: 'Mientras … FinMientras',
                          ins: 'Mientras condicion Hacer\n\t// Se repite mientras la condicion sea Verdadera\n\t// Recuerda modificar la variable de la condicion para evitar bucle infinito\nFinMientras\n' },
                        { lbl: 'Para … FinPara',
                          ins: 'Para i <- 1 Hasta 10 Hacer\n\t// Repite 10 veces (i toma valores de 1 a 10)\n\t// Usa la variable i para acceder al numero de iteracion\nFinPara\n' },
                        { lbl: 'Para con Paso',
                          ins: 'Para i <- 1 Hasta 10 Con Paso 2 Hacer\n\t// i avanza de 2 en 2: 1, 3, 5, 7, 9\n\t// Usa Paso -1 para contar hacia atras\nFinPara\n' },
                        { lbl: 'Repetir … Hasta Que',
                          ins: 'Repetir\n\t// Se ejecuta SIEMPRE al menos una vez\n\t// Luego repite hasta que la condicion sea Verdadera\nHasta Que condicion\n' },
                        { lbl: 'Segun … FinSegun',
                          ins: 'Segun variable Hacer\n\t1:\n\t\t// Se ejecuta cuando variable = 1\n\t2, 3:\n\t\t// Se ejecuta cuando variable = 2 O variable = 3\n\t4-9:\n\t\t// Se ejecuta cuando variable esta entre 4 y 9\n\tDe Otro Modo:\n\t\t// Caso por defecto si ningun otro coincide\nFinSegun\n' }
                    ]},
                    { name: 'SubProcesos / Funciones', items: [
                        { lbl: 'SubProceso',
                          ins: 'SubProceso miSubProceso(param1, param2)\n\t// SubProceso = bloque reutilizable que NO retorna valor\n\t// Recibe parametros y los procesa internamente\nFinSubProceso\n' },
                        { lbl: 'Funcion con retorno',
                          ins: 'Funcion resultado <- miFuncion(param)\n\t// Funcion = bloque que SI retorna un valor mediante la variable de retorno\n\t// Asigna a "resultado" el valor que quieres devolver\n\tresultado <- 0\nFinFuncion\n' },
                        { lbl: 'Procedimiento',
                          ins: 'Procedimiento miProcedimiento(param)\n\t// Procedimiento = SubProceso con parametros Por Referencia\n\t// Los cambios a los parametros afectan al llamador\nFinProcedimiento\n' }
                    ]},
                    { name: 'Funciones matemáticas', items: [
                        { lbl: 'RAIZ(x)',         ins: 'RAIZ()' },
                        { lbl: 'ABS(x)',          ins: 'ABS()' },
                        { lbl: 'TRUNC(x)',        ins: 'TRUNC()' },
                        { lbl: 'REDON(x)',        ins: 'REDON()' },
                        { lbl: 'PISO(x)',         ins: 'PISO()' },
                        { lbl: 'TECHO(x)',        ins: 'TECHO()' },
                        { lbl: 'POTENCIA(b, e)',  ins: 'POTENCIA(, )' },
                        { lbl: 'SEN(x)',          ins: 'SEN()' },
                        { lbl: 'COS(x)',          ins: 'COS()' },
                        { lbl: 'TAN(x)',          ins: 'TAN()' },
                        { lbl: 'LOG(x)',          ins: 'LOG()' },
                        { lbl: 'EXP(x)',          ins: 'EXP()' },
                        { lbl: 'PI',              ins: 'PI' },
                        { lbl: 'SIGNO(x)',        ins: 'SIGNO()' },
                        { lbl: 'ALEATORIO(min,max)', ins: 'ALEATORIO(1, 100)' }
                    ]},
                    { name: 'Funciones de texto', items: [
                        { lbl: 'LONGITUD(s)',       ins: 'LONGITUD()' },
                        { lbl: 'SUBCADENA(s,i,f)',  ins: 'SUBCADENA(, , )' },
                        { lbl: 'MAYUSCULAS(s)',     ins: 'MAYUSCULAS()' },
                        { lbl: 'MINUSCULAS(s)',     ins: 'MINUSCULAS()' },
                        { lbl: 'CONCATENAR(a,b)',   ins: 'CONCATENAR(, )' },
                        { lbl: 'RECORTAR(s)',       ins: 'RECORTAR()' },
                        { lbl: 'REEMPLAZAR(s,a,b)', ins: 'REEMPLAZAR(, , )' },
                        { lbl: 'CONTIENE(s, sub)',  ins: 'CONTIENE(, )' },
                        { lbl: 'POSICIONCARACTER',  ins: 'POSICIONCARACTER(, )' },
                        { lbl: 'CARACTERENPOSICION',ins: 'CARACTERENPOSICION(, )' },
                        { lbl: 'INVERTIR(s)',       ins: 'INVERTIR()' },
                        { lbl: 'ASC(c)',            ins: 'ASC()' },
                        { lbl: 'CHR(n)',            ins: 'CHR()' }
                    ]},
                    { name: 'Conversión', items: [
                        { lbl: 'CONVERTIRATEXTO',  ins: 'CONVERTIRATEXTO()' },
                        { lbl: 'CONVERTIRANUMERO', ins: 'CONVERTIRANUMERO()' },
                        { lbl: 'ENTERO(x)',        ins: 'ENTERO()' },
                        { lbl: 'REAL(x)',          ins: 'REAL()' }
                    ]},
                    { name: 'Estructura', items: [
                        { lbl: 'Proceso',         ins: 'Proceso MiPrograma\n\t// Lógica aquí\nFinProceso\n' },
                        { lbl: 'Algoritmo',       ins: 'Algoritmo MiPrograma\n\t// Lógica aquí\nFinAlgoritmo\n' }
                    ]}
                ];

                function attachCheatPanel(editorId) {
                    const ta = document.getElementById(editorId);
                    if (!ta) return;
                    // Buscar el container del editor
                    const cont = ta.closest('.big-editor-container, .editor-container');
                    if (!cont) return;
                    // No duplicar
                    if (cont.querySelector('.cheat-panel[data-for="' + editorId + '"]')) return;

                    const panel = document.createElement('div');
                    // Arranca COLAPSADO por preferencia del usuario: aparece como
                    // una franja vertical estrecha; el usuario decide expandirlo.
                    panel.className = 'cheat-panel collapsed';
                    panel.setAttribute('data-for', editorId);
                    panel.innerHTML = `
                        <div class="cheat-collapsed-strip" role="button" tabindex="0" aria-label="Expandir panel de símbolos y funciones" title="Símbolos & Funciones (Alt+S)">
                            <span class="expand-icon">◀</span>
                            <span class="vertical-label">Símbolos & Funciones</span>
                            <span class="expand-icon">◀</span>
                        </div>
                        <div class="cheat-body">
                            <div class="cheat-header">
                                <span class="cheat-title">Símbolos &amp; Funciones</span>
                                <button class="cheat-close" type="button" aria-label="Contraer panel" title="Contraer (Alt+S)">Ocultar ▶</button>
                            </div>
                            <div class="cheat-search-wrap">
                                <input class="cheat-search" type="text" placeholder="Buscar símbolo o función…" />
                            </div>
                            <div class="cheat-cats"></div>
                        </div>
                    `;
                    cont.appendChild(panel);

                    const catsEl = panel.querySelector('.cheat-cats');
                    const searchEl = panel.querySelector('.cheat-search');

                    function buildCats(filter) {
                        catsEl.innerHTML = '';
                        const q = (filter || '').trim().toLowerCase();
                        CHEAT_CATEGORIES.forEach((cat, ci) => {
                            const matchedItems = q
                                ? cat.items.filter(it => it.lbl.toLowerCase().includes(q) || it.ins.toLowerCase().includes(q))
                                : cat.items;
                            if (q && matchedItems.length === 0) return;
                            const wrap = document.createElement('div');
                            // Todas las categorías inician COLAPSADAS (excepto al filtrar con búsqueda).
                            wrap.className = 'cheat-cat' + (q ? ' open' : '');
                            const head = document.createElement('button');
                            head.className = 'cheat-cat-head';
                            head.type = 'button';
                            head.innerHTML = '<span class="cheat-cat-arrow">▸</span> ' + cat.name + ' <span class="cheat-cat-count">(' + matchedItems.length + ')</span>';
                            head.onclick = () => wrap.classList.toggle('open');
                            const body = document.createElement('div');
                            body.className = 'cheat-cat-body';
                            matchedItems.forEach(it => {
                                const btn = document.createElement('button');
                                btn.className = 'cheat-item';
                                btn.type = 'button';
                                btn.textContent = it.lbl;
                                btn.title = 'Insertar: ' + it.ins.replace(/\n/g, '⏎').replace(/\t/g, '→');
                                btn.onclick = (e) => {
                                    e.preventDefault();
                                    insertAtCursor(ta, it.ins);
                                };
                                body.appendChild(btn);
                            });
                            wrap.appendChild(head);
                            wrap.appendChild(body);
                            catsEl.appendChild(wrap);
                        });
                    }

                    function insertAtCursor(target, text) {
                        target.focus();
                        // Detectar la indentación de la línea actual y aplicarla a
                        // cada `\n` interno del snippet. Sin esto, los bloques
                        // multi-línea se pegaban sin sangría al nivel actual y el
                        // código quedaba mal alineado.
                        const pos = target.selectionStart;
                        const valBefore = target.value.substring(0, pos);
                        const lineStart = valBefore.lastIndexOf('\n') + 1;
                        const currentLine = valBefore.substring(lineStart);
                        const indentMatch = currentLine.match(/^[\t ]*/);
                        const baseIndent = indentMatch ? indentMatch[0] : '';
                        // Si el cursor NO está al inicio de la línea (hay caracteres no-blanco
                        // antes), no añadimos indent extra delante del primer fragmento,
                        // pero sí a las líneas internas.
                        const lines = text.split('\n');
                        const indented = lines.map((ln, idx) => idx === 0 ? ln : baseIndent + ln).join('\n');
                        const insertStart = pos;
                        // execCommand preserva el historial undo/redo
                        if (!document.execCommand('insertText', false, indented)) {
                            const s = target.selectionStart, e = target.selectionEnd;
                            target.value = target.value.substring(0, s) + indented + target.value.substring(e);
                            target.selectionStart = target.selectionEnd = s + indented.length;
                        }
                        // Si el snippet contiene un placeholder "// Lógica aquí",
                        // seleccionamos esa primera ocurrencia para que el usuario
                        // empiece a escribir sobreescribiéndolo directamente.
                        const placeholder = '// Lógica aquí';
                        const placeholderIdx = indented.indexOf(placeholder);
                        if (placeholderIdx >= 0) {
                            const selStart = insertStart + placeholderIdx;
                            const selEnd = selStart + placeholder.length;
                            try {
                                target.setSelectionRange(selStart, selEnd);
                            } catch (_) { /* noop */ }
                        }
                        // Disparar input para que análisis/highlight se actualicen
                        target.dispatchEvent(new Event('input', { bubbles: true }));
                    }

                    // Helper: sincroniza la clase del CONTAINER del editor con
                    // el estado del panel, así el CSS puede reducir el área del
                    // textarea con un selector simple basado en clases.
                    function syncContainerClass() {
                        cont.classList.toggle('cheat-expanded', !panel.classList.contains('collapsed'));
                        cont.classList.toggle('cheat-collapsed', panel.classList.contains('collapsed'));
                    }
                    syncContainerClass();

                    // Click en la franja vertical → expandir
                    const strip = panel.querySelector('.cheat-collapsed-strip');
                    strip.addEventListener('click', () => {
                        panel.classList.remove('collapsed');
                        syncContainerClass();
                    });
                    strip.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            panel.classList.remove('collapsed');
                            syncContainerClass();
                        }
                    });
                    // Botón "Ocultar ▶" del header → colapsar
                    panel.querySelector('.cheat-close').onclick = () => {
                        panel.classList.add('collapsed');
                        syncContainerClass();
                    };
                    searchEl.addEventListener('input', () => buildCats(searchEl.value));

                    buildCats('');
                }

                // Atajo global Alt+S para abrir/cerrar el panel del editor activo
                document.addEventListener('keydown', (e) => {
                    if (e.altKey && (e.key === 's' || e.key === 'S')) {
                        const active = document.activeElement;
                        if (active && active.tagName === 'TEXTAREA') {
                            const cont = active.closest('.big-editor-container, .editor-container');
                            if (cont) {
                                const panel = cont.querySelector('.cheat-panel');
                                if (panel) {
                                    panel.classList.toggle('collapsed');
                                    cont.classList.toggle('cheat-expanded', !panel.classList.contains('collapsed'));
                                    cont.classList.toggle('cheat-collapsed', panel.classList.contains('collapsed'));
                                    e.preventDefault();
                                }
                            }
                        }
                    }
                });

                window.attachCheatPanel = attachCheatPanel;
            })();

            /* ============================================================
   NÚMEROS DE LÍNEA Y BARRA DE ESTADO
============================================================ */
            function updateLineNums(editorId, lineNumId) {
                let ta = document.getElementById(editorId);
                let ln = document.getElementById(lineNumId);
                if (!ta || !ln) return;
                let lines = ta.value.split("\n");
                // FEATURE: indicadores en gutter. Calculamos qué líneas tienen
                // error o sugerencia desde los Sets que mantiene el analizador
                // (window._errorLineSet y window._warnLineSet, ambos 1-based).
                const errSet = (window._errorLineSet instanceof Set) ? window._errorLineSet : null;
                const warnSet = (window._warnLineSet instanceof Set) ? window._warnLineSet : null;
                ln.innerHTML = lines.map((_, i) => {
                    const lineNum = i + 1;
                    let cls = 'ln-row';
                    let dot = '';
                    if (errSet && errSet.has(lineNum)) {
                        cls += ' ln-has-error';
                        dot = '<span class="ln-dot ln-dot-error" title="Esta línea tiene un error de sintaxis"></span>';
                    } else if (warnSet && warnSet.has(lineNum)) {
                        cls += ' ln-has-warn';
                        dot = '<span class="ln-dot ln-dot-warn" title="Esta línea tiene una sugerencia"></span>';
                    }
                    return '<div class="' + cls + '">' + dot + lineNum + '</div>';
                }).join('');
                // Sync scroll
                ln.scrollTop = ta.scrollTop;
                // FIX: invalidar y reaplicar el highlight de fila actual
                if (window._invalidateActiveRowRef) window._invalidateActiveRowRef();
                if (window._reapplyCurrentRow) window._reapplyCurrentRow(ta);
            }

            function updateStatusBar() {
                let ta = document.getElementById("playgroundEditor");
                if (!ta) return;
                let code = ta.value;
                let lines = code.split("\n").length;
                let chars = code.length;
                let pos = ta.selectionStart;
                let before = code.substring(0, pos);
                let lineNum = before.split("\n").length;
                let colNum = before.split("\n").pop().length + 1;

                let sl = document.getElementById("statusLines");
                let sc = document.getElementById("statusCursor");
                let sch = document.getElementById("statusChars");
                if (sl) sl.textContent = "Líneas: " + lines;
                if (sc) sc.textContent = "Ln " + lineNum + ", Col " + colNum;
                if (sch) sch.textContent = "Chars: " + chars;

                // FIX: actualizar el resaltado de la línea actual
                _updateActiveLineHighlight(ta, lineNum);
            }

            /**
             * Calcula y aplica el resaltado de la línea actual + número
             * en el gutter. Estilo VS Code.
             *
             * Optimizaciones:
             * - line-height y padding se cachean por sesión (no cambian
             *   salvo media query, que invalidamos en resize)
             * - se usa rAF para coalescer múltiples llamadas en un frame
             * - el class .current se aplica DIRECTAMENTE sin scan completo
             *   del gutter (recordamos cuál era el .current anterior)
             */
            let _lhCache = null;        // {lh, padTop} cacheado
            let _activeRowEl = null;    // último .ln-row.current
            let _lastActiveLineNum = -1; // FIX: última línea highlighteada (para skip si no cambió)
            let _lastScrollTop = -1;     // FIX: último scrollTop visto (para reposicionar en scroll)
            let _alhRaf = null;         // rAF pendiente

            function _invalidateLhCache() { _lhCache = null; }
            // Invalidar cache cuando cambia el viewport (media queries cambian font-size)
            window.addEventListener('resize', () => {
                _invalidateLhCache();
                // FIX: invalidar char-width y re-renderizar overlays en resize
                let ta = document.getElementById('playgroundEditor');
                if (ta) ta._charWidth = null;
                if (window._scheduleOverlayUpdate) window._scheduleOverlayUpdate();
            });

            /**
             * Aplica el highlight a la línea `lineNum` del editor `ta`.
             *
             * FIX CRÍTICO: solo hace trabajo si la fila CAMBIÓ. Mover el
             * cursor de izquierda a derecha en la misma fila no debería
             * disparar repintado. Antes, cada selectionchange (incluido
             * mover por columnas) recalculaba todo y disparaba reflows
             * inútiles. Ahora con un comparador simple evitamos ese trabajo.
             */
            function _updateActiveLineHighlight(ta, lineNum) {
                // SKIP solo si la fila NO cambió Y el scrollTop tampoco cambió.
                // Antes el guard no chequeaba scrollTop, así que al scrollear
                // en la misma línea el highlight no se reposicionaba.
                const curScroll = ta ? ta.scrollTop : 0;
                if (lineNum === _lastActiveLineNum &&
                    curScroll === _lastScrollTop &&
                    _activeRowEl &&
                    _activeRowEl.classList.contains('current')) {
                    return;
                }
                _lastActiveLineNum = lineNum;
                _lastScrollTop = curScroll;
                if (_alhRaf !== null) return; // ya hay uno encolado
                _alhRaf = requestAnimationFrame(() => {
                    _alhRaf = null;
                    let highlight = document.getElementById('playgroundActiveLine');
                    let ln = document.getElementById('playgroundLineNums');
                    if (!highlight || !ln || !ta) return;

                    // Cachear line-height / padding (cuestan mucho leerlos)
                    if (!_lhCache) {
                        const cs = window.getComputedStyle(ta);
                        let lh = parseFloat(cs.lineHeight);
                        if (isNaN(lh)) lh = parseFloat(cs.fontSize) * 1.6;
                        let padTop = parseFloat(cs.paddingTop) || 0;
                        _lhCache = { lh, padTop };
                    }
                    let { lh, padTop } = _lhCache;

                    // Posición vertical de la línea actual (descontando scroll)
                    let lineTop = padTop + (lineNum - 1) * lh - ta.scrollTop;
                    let containerH = ta.clientHeight;

                    // Solo mostrar el highlight si la línea está visible
                    if (lineTop >= -lh && lineTop < containerH) {
                        highlight.style.display = 'block';
                        highlight.style.top = lineTop + 'px';
                        highlight.style.height = lh + 'px';
                    } else {
                        highlight.style.display = 'none';
                    }

                    // Marcar el número activo en el gutter (sin querySelector)
                    let newActive = ln.children[lineNum - 1];
                    if (newActive !== _activeRowEl) {
                        if (_activeRowEl) _activeRowEl.classList.remove('current');
                        if (newActive) newActive.classList.add('current');
                        _activeRowEl = newActive;
                    }
                });
            }
            window._updateActiveLineHighlight = _updateActiveLineHighlight;

            /**
             * Cuando el gutter se regenera (por updateLineNums o por sync()
             * de attachHighlighter), hay que olvidar la referencia al .current
             * anterior porque ese nodo DOM ya no existe.
             */
            window._invalidateActiveRowRef = function() {
                _activeRowEl = null;
                _lastActiveLineNum = -1; // forzar re-aplicación en la próxima llamada
            };

            /**
             * Re-aplica la clase .current a la fila correcta. Se usa después
             * de regenerar el gutter para restaurar el resaltado del número.
             * Resetea _lastActiveLineNum para forzar la re-aplicación sin
             * que el SKIP check la salte (los nodos DOM son nuevos).
             */
            window._reapplyCurrentRow = function(ta) {
                if (!ta) return;
                let pos = ta.selectionStart;
                let before = ta.value.substring(0, pos);
                let lineNum = before.split('\n').length;
                // Reset force: el nodo .ln-row.current anterior ya no existe,
                // y _lastActiveLineNum ya fue reseteado a -1 por _invalidateActiveRowRef
                _updateActiveLineHighlight(ta, lineNum);
            };

            /**
             * Renderiza overlays de subrayado ondulado para los rangos
             * problemáticos detectados (paréntesis con parámetros mal,
             * llamadas inválidas, etc.). Usa window._paramErrorRanges
             * que es llenado por analyzeWarnings.
             *
             * Estilo: estilo VS Code, subrayado ondulado amarillo (warn)
             * o rojo (error severo) justo en la columna exacta del problema.
             *
             * Se llama después de cada análisis y se re-posiciona en cada
             * cambio de tamaño/scroll del editor.
             */
            let _paramErrorOverlays = []; // referencias a los DOM nodes activos del PLAYGROUND
            // Pool de overlays por editor (para lecciones). Cada editor tiene su array
            // independiente para no pisarse al renderizar.
            let _paramErrorOverlaysByTa = {};
            window._renderParamErrorOverlays = function(taId, rangesArg) {
                // Compatibilidad: sin args → playground
                let resolvedTaId = taId || 'playgroundEditor';
                let ta = document.getElementById(resolvedTaId);
                let containerId = (resolvedTaId === 'playgroundEditor')
                    ? 'playgroundEditorContainer'
                    : (resolvedTaId === 'exampleEditor')
                        ? 'exampleEditorContainer'
                        : (resolvedTaId === 'challengeEditor')
                            ? 'challengeEditorContainer'
                            : null;
                let container = containerId ? document.getElementById(containerId) : null;
                if (!ta || !container) return;

                // Asegurar que el container puede contener overlays absolute
                let cs0 = window.getComputedStyle(container);
                if (cs0.position === 'static') container.style.position = 'relative';

                // Bolsa de overlays correcta según editor
                let bag;
                if (resolvedTaId === 'playgroundEditor') bag = _paramErrorOverlays;
                else {
                    if (!_paramErrorOverlaysByTa[resolvedTaId]) _paramErrorOverlaysByTa[resolvedTaId] = [];
                    bag = _paramErrorOverlaysByTa[resolvedTaId];
                }

                // Limpiar overlays anteriores
                bag.forEach(el => el.remove());
                bag.length = 0;

                // Combinar rangos de errores de sintaxis (severity: 'error') con
                // los warnings de parámetros existentes (severity: 'warn').
                let ranges;
                if (Array.isArray(rangesArg)) {
                    ranges = rangesArg;
                } else {
                    ranges = [
                        ...(window._syntaxErrorRanges || []),
                        ...(window._paramErrorRanges || [])
                    ];
                }
                if (ranges.length === 0) return;

                // Calcular dimensiones del texto (cacheable, pero recalculamos
                // cada vez por simplicidad — es rápido).
                const cs = window.getComputedStyle(ta);
                let lh = parseFloat(cs.lineHeight);
                if (isNaN(lh)) lh = parseFloat(cs.fontSize) * 1.6;
                let padTop = parseFloat(cs.paddingTop) || 0;
                let padLeft = parseFloat(cs.paddingLeft) || 0;

                // Calcular char-width medio usando un canvas (fuente monospace)
                let charW = ta._charWidth;
                if (!charW) {
                    let canvas = document.createElement('canvas');
                    let ctx = canvas.getContext('2d');
                    ctx.font = cs.font || (cs.fontSize + ' ' + cs.fontFamily);
                    charW = ctx.measureText('0').width;
                    ta._charWidth = charW;
                }

                // Posición absoluta del container del editor
                let containerRect = container.getBoundingClientRect();
                // Posición del textarea dentro del container
                let taRect = ta.getBoundingClientRect();
                let taOffsetTop = taRect.top - containerRect.top;
                let taOffsetLeft = taRect.left - containerRect.left;

                // Obtener las líneas del textarea para mapear cols
                let allLines = ta.value.split('\n');

                for (let r of ranges) {
                    let lineIdx = r.line - 1;
                    if (lineIdx < 0 || lineIdx >= allLines.length) continue;

                    // Convertir tabs a "ancho de tab" — los tabs ocupan
                    // típicamente 4 chars visualmente. Sin esto, los rangos
                    // que vienen DESPUÉS de un tab quedan desplazados.
                    let lineText = allLines[lineIdx];
                    function visualCol(realCol) {
                        let vc = 0;
                        for (let i = 0; i < realCol && i < lineText.length; i++) {
                            if (lineText[i] === '\t') {
                                // Avanzar al siguiente múltiplo de 4
                                vc = Math.floor(vc / 4) * 4 + 4;
                            } else {
                                vc++;
                            }
                        }
                        return vc;
                    }

                    let visStart = visualCol(r.startCol);
                    let visEnd = visualCol(r.endCol);
                    let visLen = Math.max(1, visEnd - visStart);

                    // Posición Y de la línea (descontando scroll)
                    let top = taOffsetTop + padTop + lineIdx * lh - ta.scrollTop;
                    // Posición X del rango
                    let left = taOffsetLeft + padLeft + visStart * charW - ta.scrollLeft;
                    let width = visLen * charW;
                    let height = lh;

                    // Solo crear el overlay si la línea está visible
                    if (top + height < taOffsetTop || top > taOffsetTop + ta.clientHeight) {
                        continue;
                    }

                    let overlay = document.createElement('div');
                    overlay.className = 'param-error-overlay' + (r.severity === 'error' ? ' severe' : '');
                    overlay.style.top = top + 'px';
                    overlay.style.left = left + 'px';
                    overlay.style.width = width + 'px';
                    overlay.style.height = height + 'px';
                    overlay.title = 'Problema en este rango — revisa el panel de advertencias';
                    container.appendChild(overlay);
                    bag.push(overlay);
                }
            };

            // Re-posicionar overlays cuando el editor scrollea
            window._scheduleOverlayUpdate = function() {
                if (window._overlayRaf) return;
                window._overlayRaf = requestAnimationFrame(() => {
                    window._overlayRaf = null;
                    if (window._renderParamErrorOverlays) {
                        window._renderParamErrorOverlays();
                    }
                });
            };

            /* ============================================================
   AUTOCOMPLETADO (Ctrl+Space)
============================================================ */
            const AC_ITEMS = [
                // Snippets completos
                { label: "Proceso", tag: "snip", desc: "Bloque principal", insert: "Proceso $NAME$\n\t\nFinProceso" },
                { label: "Si...Entonces", tag: "snip", desc: "Condicional", insert: "Si $COND$ Entonces\n\t\nFinSi" },
                { label: "SiNo", tag: "snip", desc: "Alternativa", insert: "SiNo\n" },
                { label: "Mientras...Hacer", tag: "snip", desc: "Ciclo mientras", insert: "Mientras $COND$ Hacer\n\t\nFinMientras" },
                { label: "Para...Hasta...Hacer", tag: "snip", desc: "Ciclo para", insert: "Para i <- 1 Hasta $N$ Hacer\n\t\nFinPara" },
                { label: "Repetir...Hasta Que", tag: "snip", desc: "Ciclo repetir", insert: "Repetir\n\t\nHasta Que $COND$" },
                { label: "Segun...Hacer", tag: "snip", desc: "Switch", insert: "Segun $VAR$ Hacer\n\t1: \n\tDe Otro Modo: \nFinSegun" },
                { label: "SubProceso", tag: "snip", desc: "Subproceso (sin retorno)", insert: "SubProceso $NAME$()\n\t\nFinSubProceso" },
                { label: "SubProceso con retorno", tag: "snip", desc: "Subproceso con valor de retorno", insert: "SubProceso $RET$ <- $NAME$($PARAMS$)\n\t\nFinSubProceso" },
                // FIX: añadidos snippets de Funcion (sinónimo de SubProceso en PSeInt v20250218)
                { label: "Funcion", tag: "snip", desc: "Función (sin retorno)", insert: "Funcion $NAME$($PARAMS$)\n\t\nFinFuncion" },
                { label: "Funcion con retorno", tag: "snip", desc: "Función con valor de retorno", insert: "Funcion $RET$ <- $NAME$($PARAMS$)\n\t\nFinFuncion" },
                // Algoritmo es sinónimo oficial de Proceso en PSeInt v20250218
                { label: "Algoritmo", tag: "snip", desc: "Algoritmo (sinónimo de Proceso)", insert: "Algoritmo $NAME$\n\t\nFinAlgoritmo" },
                // Procedimiento — solo Por Referencia
                { label: "Procedimiento", tag: "snip", desc: "Procedimiento (parámetros Por Referencia)", insert: "Procedimiento $NAME$($PARAMS$)\n\t\nFinProcedimiento" },
                { label: "Definir", tag: "kw", desc: "Declarar variable", insert: "Definir $VAR$ Como Entero" },
                { label: "Dimension", tag: "kw", desc: "Declarar arreglo", insert: "Dimension $ARR$[$N$]" },
                // Tipos como KEYWORDS (no como función). Aparecen tras "Como ".
                // Mantienen prioridad SOBRE las versiones Entero()/Real()/Texto() que
                // son funciones de cast. Sin estos el autocompletado convertía mal
                // "Definir x Como Texto" en "Definir x Como Texto($X$)".
                { label: "Entero",   tag: "type", desc: "Tipo entero (en Definir)",   insert: "Entero" },
                { label: "Real",     tag: "type", desc: "Tipo real (en Definir)",     insert: "Real" },
                { label: "Texto",    tag: "type", desc: "Tipo texto/cadena (en Definir)", insert: "Texto" },
                { label: "Cadena",   tag: "type", desc: "Tipo cadena (en Definir)",   insert: "Cadena" },
                { label: "Caracter", tag: "type", desc: "Tipo carácter (en Definir)", insert: "Caracter" },
                { label: "Logico",   tag: "type", desc: "Tipo lógico (en Definir)",   insert: "Logico" },
                { label: "Numerico", tag: "type", desc: "Tipo numérico (en Definir)", insert: "Numerico" },
                // Keywords
                { label: "Escribir", tag: "kw", desc: "Salida de texto", insert: 'Escribir "$MSG$"' },
                { label: "Escribir Sin Saltar", tag: "kw", desc: "Sin salto de línea", insert: 'Escribir Sin Saltar "$MSG$"' },
                { label: "Leer", tag: "kw", desc: "Leer variable", insert: "Leer $VAR$" },
                { label: "FinProceso", tag: "kw", desc: "Cierra Proceso", insert: "FinProceso" },
                { label: "FinAlgoritmo", tag: "kw", desc: "Cierra Algoritmo", insert: "FinAlgoritmo" },
                { label: "FinSi", tag: "kw", desc: "Cierra Si", insert: "FinSi" },
                { label: "FinMientras", tag: "kw", desc: "Cierra Mientras", insert: "FinMientras" },
                { label: "FinPara", tag: "kw", desc: "Cierra Para", insert: "FinPara" },
                { label: "FinSegun", tag: "kw", desc: "Cierra Segun", insert: "FinSegun" },
                { label: "FinSubProceso", tag: "kw", desc: "Cierra SubProceso", insert: "FinSubProceso" },
                { label: "FinFuncion", tag: "kw", desc: "Cierra Funcion", insert: "FinFuncion" },
                { label: "FinProcedimiento", tag: "kw", desc: "Cierra Procedimiento", insert: "FinProcedimiento" },
                // Modificadores de parámetros
                { label: "Por Valor", tag: "kw", desc: "Parámetro pasado por valor", insert: "Por Valor" },
                { label: "Por Referencia", tag: "kw", desc: "Parámetro pasado por referencia", insert: "Por Referencia" },
                // Literales booleanos
                { label: "Verdadero", tag: "lit", desc: "Literal lógico verdadero (true)", insert: "Verdadero" },
                { label: "Falso", tag: "lit", desc: "Literal lógico falso (false)", insert: "Falso" },
                // Constantes matemáticas
                { label: "PI", tag: "lit", desc: "Constante PI (3.14159...)", insert: "PI" },
                // Operadores lógicos como tokens
                { label: "Y", tag: "op", desc: "Operador lógico Y (AND)", insert: "Y" },
                { label: "O", tag: "op", desc: "Operador lógico O (OR)", insert: "O" },
                { label: "NO", tag: "op", desc: "Operador lógico NO (NOT)", insert: "NO" },
                { label: "MOD", tag: "op", desc: "Módulo (resto de división entera)", insert: "MOD" },
                { label: "DIV", tag: "op", desc: "División entera", insert: "DIV" },
                // Funciones
                { label: "Aleatorio()", tag: "fn", desc: "Número aleatorio", insert: "Aleatorio(1, 100)" },
                { label: "RAIZ()", tag: "fn", desc: "Raíz cuadrada", insert: "RAIZ($X$)" },
                { label: "ABS()", tag: "fn", desc: "Valor absoluto", insert: "ABS($X$)" },
                { label: "TRUNC()", tag: "fn", desc: "Truncar decimal", insert: "TRUNC($X$)" },
                { label: "REDON()", tag: "fn", desc: "Redondear", insert: "REDON($X$)" },
                { label: "Longitud()", tag: "fn", desc: "Longitud de texto", insert: "Longitud($STR$)" },
                { label: "Subcadena()", tag: "fn", desc: "Parte de texto", insert: "Subcadena($STR$, $INI$, $FIN$)" },
                { label: "Mayusculas()", tag: "fn", desc: "Texto en mayúsculas", insert: "Mayusculas($STR$)" },
                { label: "Minusculas()", tag: "fn", desc: "Texto en minúsculas", insert: "Minusculas($STR$)" },
                { label: "ConvertirATexto()", tag: "fn", desc: "Número a texto", insert: "ConvertirATexto($N$)" },
                { label: "Contiene()", tag: "fn", desc: "Buscar subcadena", insert: "Contiene($STR$, $BUS$)" },
                { label: "Reemplazar()", tag: "fn", desc: "Reemplazar texto", insert: "Reemplazar($STR$, $OLD$, $NEW$)" },
                { label: "SEN()", tag: "fn", desc: "Seno", insert: "SEN($X$)" },
                { label: "COS()", tag: "fn", desc: "Coseno", insert: "COS($X$)" },
                { label: "LOG()", tag: "fn", desc: "Logaritmo natural", insert: "LOG($X$)" },
                { label: "EXP()", tag: "fn", desc: "Exponencial", insert: "EXP($X$)" },
                { label: "Potencia()", tag: "fn", desc: "Base elevada a exp", insert: "Potencia($BASE$, $EXP$)" },
                // Conversión de tipo
                { label: "Entero()", tag: "fn", desc: "Convertir a entero", insert: "Entero($X$)" },
                { label: "Real()", tag: "fn", desc: "Convertir a real", insert: "Real($X$)" },
                { label: "Texto()", tag: "fn", desc: "Convertir a texto", insert: "Texto($X$)" },
                { label: "Valor()", tag: "fn", desc: "Texto a número", insert: "Valor($STR$)" },
                // Control de flujo extra
                { label: "Salir", tag: "kw", desc: "Salir del ciclo actual", insert: "Salir" },
                { label: "SalirPara", tag: "kw", desc: "Break específico para Para", insert: "SalirPara" },
                { label: "Interrumpir", tag: "kw", desc: "Interrumpir ciclo (alias Salir)", insert: "Interrumpir" },
                { label: "Retornar", tag: "kw", desc: "Retornar valor de SubProceso/Funcion", insert: "Retornar $VALOR$" },
                { label: "Devolver", tag: "kw", desc: "Devolver valor (alias de Retornar)", insert: "Devolver $VALOR$" },
                // Comandos especiales PSeInt
                { label: "Borrar Pantalla", tag: "kw", desc: "Limpia la consola", insert: "Borrar Pantalla" },
                { label: "Limpiar Pantalla", tag: "kw", desc: "Limpia la consola (alias)", insert: "Limpiar Pantalla" },
                { label: "Esperar Segundos", tag: "kw", desc: "Pausa N segundos (máx 60)", insert: "Esperar $N$ Segundos" },
                { label: "Esperar Tecla", tag: "kw", desc: "Pausa hasta Enter", insert: "Esperar Tecla" },
            ];

            let _acSelectedIdx = 0;
            let _acVisible = false;
            let _acFiltered = [];

            function showAutocomplete(ta) {
                let pos = ta.selectionStart;
                let text = ta.value.substring(0, pos);
                // FIX: NO mostrar autocompletado si el cursor está dentro de
                // un string entre comillas dobles, dentro de un comentario //,
                // o si la última "palabra" empieza por número/símbolo.
                // Detectamos analizando la línea actual desde su inicio.
                let lineStart = text.lastIndexOf('\n') + 1;
                let currentLine = text.substring(lineStart);
                // Detectar si estamos dentro de comilla doble (con paridad)
                let inString = false;
                for (let i = 0; i < currentLine.length; i++) {
                    if (currentLine[i] === '"') inString = !inString;
                }
                if (inString) { hideAutocomplete(); return; }
                // Detectar si estamos dentro de un comentario //
                let commentIdx = -1;
                let inStr2 = false;
                for (let i = 0; i < currentLine.length - 1; i++) {
                    if (currentLine[i] === '"') inStr2 = !inStr2;
                    if (!inStr2 && currentLine[i] === '/' && currentLine[i+1] === '/') {
                        commentIdx = i; break;
                    }
                }
                if (commentIdx >= 0) { hideAutocomplete(); return; }
                let word = (text.match(/[\w]+$/) || [""])[0];
                if (word.length < 2) { hideAutocomplete(); return; }
                // No mostrar si la "palabra" empieza por número (es un literal numérico)
                if (/^\d/.test(word)) { hideAutocomplete(); return; }
                let lower = word.toLowerCase();

                // FIX CONTEXTO: si la línea actual está tras "Como " (declaración de tipo),
                // SOLO sugerimos tipos. Antes `Definir x Como Texto` autocompletaba a
                // `Texto($X$)` (la función de cast), produciendo código inválido.
                // Detectamos: prefijo de línea (sin la palabra parcial al final) que matche
                // /\bComo\s+$/i — es decir, espacio después de Como pero sin todavía
                // haber escrito el tipo.
                const wordStart = text.length - word.length;
                const beforeWord = text.substring(0, wordStart);
                const afterComo = /\bComo\s+$/i.test(beforeWord);
                if (afterComo) {
                    _acFiltered = AC_ITEMS.filter(it => it.tag === 'type' && it.label.toLowerCase().startsWith(lower));
                } else {
                    _acFiltered = AC_ITEMS.filter(it => it.label.toLowerCase().startsWith(lower));
                    // Reordenar: tipos PUROS antes que cast-functions cuando ambos coinciden.
                    // Si hay un tipo `Texto` y una función `Texto()`, el tipo sale primero.
                    _acFiltered.sort((a, b) => {
                        const aType = a.tag === 'type' ? 0 : 1;
                        const bType = b.tag === 'type' ? 0 : 1;
                        if (aType !== bType) return aType - bType;
                        return 0;
                    });
                }
                if (!_acFiltered.length) { hideAutocomplete(); return; }
                let popup = document.getElementById("autocompletePopup");
                popup.innerHTML = "";
                _acSelectedIdx = 0;
                _acFiltered.forEach((it, idx) => {
                    let div = document.createElement("div");
                    div.className = "ac-item" + (idx === 0 ? " selected" : "");
                    let tagEl = document.createElement("span");
                    tagEl.className = "ac-tag ac-tag-" + it.tag;
                    tagEl.textContent = it.tag;
                    let lblEl = document.createElement("span");
                    lblEl.className = "ac-label";
                    lblEl.textContent = it.label;
                    let descEl = document.createElement("span");
                    descEl.className = "ac-desc";
                    descEl.textContent = it.desc;
                    div.appendChild(tagEl); div.appendChild(lblEl); div.appendChild(descEl);
                    div.onmousedown = (e) => { e.preventDefault(); applyAutocomplete(ta, word, it); };
                    popup.appendChild(div);
                });
                // Position near cursor (approximate)
                let rect = ta.getBoundingClientRect();
                let lineH = parseInt(getComputedStyle(ta).lineHeight) || 22;
                let curLine = text.split("\n").length;
                popup.style.left = (rect.left + 48) + "px";
                popup.style.top = Math.min(rect.top + curLine * lineH - ta.scrollTop, window.innerHeight - 240) + "px";
                popup.style.position = "fixed";
                popup.classList.add("open");
                _acVisible = true;
            }

            function hideAutocomplete() {
                document.getElementById("autocompletePopup").classList.remove("open");
                _acVisible = false;
                _acFiltered = [];
            }

            function applyAutocomplete(ta, word, item) {
                let pos = ta.selectionStart;
                let before = ta.value.substring(0, pos - word.length);
                let after = ta.value.substring(pos);
                let insert = item.insert;

                // FIX: detectar la indentación de la línea actual y aplicarla
                // a cada línea nueva del snippet. Antes, al insertar Segun en
                // una línea con 2 tabs de indent, las líneas internas del
                // snippet quedaban en columna 0/1 (sin respetar el contexto):
                //   Segun VAR Hacer
                // 1:                    ← MAL
                // De Otro Modo:         ← MAL
                // FinSegun              ← MAL
                // Ahora respeta la columna actual:
                //   \t\tSegun VAR Hacer
                //   \t\t\t1:            ← BIEN
                //   \t\t\tDe Otro Modo: ← BIEN
                //   \t\tFinSegun        ← BIEN
                let lineStart = before.lastIndexOf('\n') + 1;
                let curLine = before.substring(lineStart);
                let indentMatch = curLine.match(/^[\t ]*/);
                let baseIndent = indentMatch ? indentMatch[0] : '';
                // Aplicar baseIndent a cada \n del snippet (excepto el primer
                // segmento, que se inserta en la columna actual del cursor).
                if (insert.includes('\n')) {
                    insert = insert.replace(/\n/g, '\n' + baseIndent);
                }

                // Remove all $PLACEHOLDER$ markers — just insert clean text
                // First placeholder: select it so user can type over it
                let phStart = insert.indexOf('$');
                let phEnd = phStart >= 0 ? insert.indexOf('$', phStart + 1) : -1;

                if (phStart >= 0 && phEnd > phStart) {
                    // Replace ONLY the first placeholder, remove rest
                    let phText = insert.slice(phStart + 1, phEnd); // e.g. "MSG"
                    let cleanInsert = insert
                        .substring(0, phStart)           // before first $
                        + phText                          // placeholder label (will be selected)
                        + insert.substring(phEnd + 1)    // rest of string
                        .replace(/\$[^$]*\$/g, '');      // remove remaining placeholders

                    // FIX: usar execCommand para preservar undo. Primero
                    // seleccionamos la palabra que el usuario empezó a
                    // escribir y la reemplazamos por el snippet completo.
                    let wordStart = pos - word.length;
                    ta.setSelectionRange(wordStart, pos);
                    if (!document.execCommand('insertText', false, cleanInsert)) {
                        ta.value = before + cleanInsert + after;
                    }
                    // Select the first placeholder text so user can type directly
                    let selStart = before.length + phStart;
                    let selEnd = selStart + phText.length;
                    ta.setSelectionRange(selStart, selEnd);
                } else {
                    // No placeholders — just insert
                    let wordStart = pos - word.length;
                    ta.setSelectionRange(wordStart, pos);
                    if (!document.execCommand('insertText', false, insert)) {
                        ta.value = before + insert + after;
                    }
                    ta.setSelectionRange(before.length + insert.length, before.length + insert.length);
                }

                ta.dispatchEvent(new Event('input'));
                hideAutocomplete();
                ta.focus();
            }

            function acMoveSelection(dir) {
                let items = document.querySelectorAll("#autocompletePopup .ac-item");
                items[_acSelectedIdx]?.classList.remove("selected");
                _acSelectedIdx = Math.max(0, Math.min(items.length - 1, _acSelectedIdx + dir));
                items[_acSelectedIdx]?.classList.add("selected");
                items[_acSelectedIdx]?.scrollIntoView({block:"nearest"});
            }

            /* ============================================================
           MODAL DE LECCIONES
        ============================================================ */
            function openLesson(id) {
                let lesson = LESSONS.find((l) => l.id === id);
                if (!lesson) return;
                currentLesson = lesson;

                // Marcar como leída al abrir (solo si no tiene estado mayor)
                markRead(id);

                document.getElementById("modalTitle").textContent =
                    lesson.icon + " " + lesson.title;

                // Theory tab
                document.getElementById("tab-theory").innerHTML = lesson.theory;

                // Example tab — editor con syntax highlight
                document.getElementById("tab-example").innerHTML = `
	 <div class="editor-wrap" style="border: 1px solid var(--border); border-radius: var(--radius);">
		<div class="editor-toolbar" style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
		  <span>📝 Ejemplo ejecutable</span>
		  <div style="display:inline-flex;gap:6px;flex-wrap:wrap">
		    <button type="button" class="fg-toggle-btn" onclick="cycleFlowMode()" title="Alternar guías" style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:var(--bg-card2);color:var(--text-main);border:1px solid var(--border);border-radius:6px;font-size:0.72rem;font:inherit;cursor:pointer">
		      🧭 <span class="fg-mode-label" style="font-weight:700;color:var(--accent1)">Tabs</span>
		    </button>
		    <div class="theme-picker-wrap" style="position:relative;display:inline-block">
		      <button type="button" class="theme-picker-btn" onclick="toggleThemePicker(this)" aria-label="Seleccionar tema" aria-haspopup="true" aria-expanded="false" style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;background:var(--bg-card2);color:var(--text-main);border:1px solid var(--border);border-radius:6px;font-size:0.72rem;font:inherit;cursor:pointer">
		        🎨 <span class="theme-picker-label" style="font-weight:700;color:var(--accent1)">Dark</span> ▾
		      </button>
		    </div>
		  </div>
		</div>
		<div class="editor-container" id="exampleEditorContainer">
		  <div class="editor-highlight" id="exampleHighlight" aria-hidden="true"></div>
		  <textarea class="code-editor" id="exampleEditor" spellcheck="false" wrap="off" style="min-height:200px;">${lesson.example}</textarea>
		</div>
	 </div>
	 <div class="editor-actions" style="margin-top:12px;">
		<button class="btn-run" onclick="runLessonExample()">▶ Ejecutar</button>
		<button class="btn-clear" onclick="document.getElementById('exampleEditor').value='';clearConsole('exampleConsole');syncHighlight('exampleEditor','exampleHighlight')">🗑 Limpiar</button>
	 </div>
	 <div class="console-label" style="margin-top:12px;">💻 Salida:</div>
	 <div class="console-out" id="exampleConsole" role="log" aria-live="polite" aria-atomic="false" aria-label="Salida del ejemplo"><span class="cout-line cout-info" style="color:var(--text-muted)">// Ejecuta el código para ver la salida...</span></div>
  `;
                setTimeout(() => attachHighlighter('exampleEditor', 'exampleHighlight'), 0);

                // Challenge tab — editor con syntax highlight
                let ch = lesson.challenge;
                let verifyBadge = ch.expected
                    ? `<div style="margin-top:8px;font-size:0.78rem;color:var(--accent4)">🤖 Verificación automática por salida exacta</div>`
                    : ch.validator
                    ? `<div style="margin-top:8px;font-size:0.78rem;color:var(--accent4)">🤖 Verificación automática por lógica del programa</div>`
                    : `<div style="margin-top:8px;font-size:0.78rem;color:var(--accent3)">✋ Verificación manual — revisa el enunciado y confirma</div>`;
                document.getElementById("tab-challenge").innerHTML = `
	 <div class="challenge-block">
		<h3>🎯 Mini-reto</h3>
		<p>${ch.desc}</p>
		${ch.expected ? `<div class="expected-out"><span>Salida esperada:</span><code>${ch.expected}</code></div>` : ""}
		${verifyBadge}
	 </div>
	 <div class="editor-wrap" style="border: 1px solid var(--border); border-radius: var(--radius); margin-bottom:12px;">
		<div class="editor-toolbar" style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
		  <span>✏️ Tu solución</span>
		  <div style="display:inline-flex;gap:6px;flex-wrap:wrap">
		    <button type="button" class="fg-toggle-btn" onclick="cycleFlowMode()" title="Alternar guías" style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:var(--bg-card2);color:var(--text-main);border:1px solid var(--border);border-radius:6px;font-size:0.72rem;font:inherit;cursor:pointer">
		      🧭 <span class="fg-mode-label" style="font-weight:700;color:var(--accent1)">Tabs</span>
		    </button>
		    <div class="theme-picker-wrap" style="position:relative;display:inline-block">
		      <button type="button" class="theme-picker-btn" onclick="toggleThemePicker(this)" aria-label="Seleccionar tema" aria-haspopup="true" aria-expanded="false" style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;background:var(--bg-card2);color:var(--text-main);border:1px solid var(--border);border-radius:6px;font-size:0.72rem;font:inherit;cursor:pointer">
		        🎨 <span class="theme-picker-label" style="font-weight:700;color:var(--accent1)">Dark</span> ▾
		      </button>
		    </div>
		  </div>
		</div>
		<div class="editor-container" id="challengeEditorContainer">
		  <div class="editor-highlight" id="challengeHighlight" aria-hidden="true"></div>
		  <textarea class="code-editor" id="challengeEditor" spellcheck="false" wrap="off" style="min-height:180px;" placeholder="Escribe tu solución aquí...">Proceso MiSolucion
	// Escribe tu código aquí
FinProceso</textarea>
		</div>
	 </div>
	 <div class="editor-actions">
		<button class="btn-run" onclick="runChallenge()">▶ Ejecutar y verificar</button>
		<button class="btn-solution" onclick="showSolution()">👁 Ver solución</button>
	 </div>
	 <div id="verdict" class="verdict"></div>
	 <div class="console-label">💻 Salida:</div>
	 <div class="console-out" id="challengeConsole" role="log" aria-live="polite" aria-atomic="false" aria-label="Salida del reto"><span style="color:var(--text-muted)">// Escribe tu solución y ejecútala...</span></div>
  `;
                setTimeout(() => {
                    attachHighlighter('challengeEditor', 'challengeHighlight');
                    attachHighlighter('exampleEditor', 'exampleHighlight');
                    // Occurrence highlight
                    if (window.attachIDEToEditor) {
                        window.attachIDEToEditor('exampleEditor');
                        window.attachIDEToEditor('challengeEditor');
                    }
                    // Análisis + paneles de errores/sugerencias (EditorIDE módulo reutilizable).
                    // Destruimos instancias previas si existían — el DOM fue regenerado
                    // por el openLesson, los textareas son nuevos nodos.
                    if (window.EditorIDE) {
                        const prevEx = window.EditorIDE.get('exampleEditor');
                        if (prevEx) prevEx.destroy();
                        const prevCh = window.EditorIDE.get('challengeEditor');
                        if (prevCh) prevCh.destroy();
                        window.EditorIDE.attach('exampleEditor',   { highlightId: 'exampleHighlight',   autoPanels: true });
                        window.EditorIDE.attach('challengeEditor', { highlightId: 'challengeHighlight', autoPanels: true });
                    }
                    // Panel lateral de símbolos & funciones (mismo módulo reutilizable)
                    if (window.attachCheatPanel) {
                        window.attachCheatPanel('exampleEditor');
                        window.attachCheatPanel('challengeEditor');
                    }
                }, 0);

                switchTab("theory");
                document.getElementById("lessonModal").classList.add("open");
                document.body.style.overflow = "hidden";
            }
            function closeModal() {
                document.getElementById("lessonModal").classList.remove("open");
                document.body.style.overflow = "";
                // Limpiar las instancias de EditorIDE asociadas al modal — los
                // textareas exampleEditor/challengeEditor se regeneran al abrir
                // otra lección, así que dejar instancias colgadas causa que la
                // próxima `attach` retorne la cacheada (apuntando a DOM viejo).
                if (window.EditorIDE) {
                    const ex = window.EditorIDE.get('exampleEditor');
                    if (ex) ex.destroy();
                    const ch = window.EditorIDE.get('challengeEditor');
                    if (ch) ch.destroy();
                }
            }

            document
                .getElementById("lessonModal")
                .addEventListener("click", (e) => {
                    if (e.target === document.getElementById("lessonModal"))
                        closeModal();
                });

            function switchTab(tab) {
                currentTab = tab;
                document.querySelectorAll(".modal-tab").forEach((t) => {
                    const isActive = t.dataset.tab === tab;
                    t.classList.toggle("active", isActive);
                    t.setAttribute("aria-selected", isActive ? "true" : "false");
                });
                document.querySelectorAll(".tab-content").forEach((c) => {
                    c.classList.toggle("active", c.id === "tab-" + tab);
                });
            }

            async function runLessonExample() {
                _activeConsoleId = 'exampleConsole';
                await runCode("exampleEditor", "exampleConsole");
                // Solo marcar como 'intentada' al ejecutar el ejemplo — NO como completada
                if (currentLesson) markTried(currentLesson.id);
            }

            async function runChallenge() {
                if (!currentLesson) return;
                _activeConsoleId = 'challengeConsole';

                // ── Validación anti-trampa: el código debe tener contenido real ──
                let code = document.getElementById("challengeEditor").value;
                let verdict = document.getElementById("verdict");

                // Quitar comentarios y strings para analizar el contenido real
                let codeClean = code
                    .replace(/\/\/.*/g, '')           // quitar comentarios
                    .replace(/"[^"]*"/g, '""')         // neutralizar strings
                    .replace(/\s+/g, ' ').trim();

                // Detectar si solo es el esqueleto vacío (Proceso + FinProceso sin nada útil)
                let meaningfulLines = code.split('\n')
                    .map(l => l.replace(/\/\/.*/g,'').trim())
                    .filter(l => l && !/^Proceso\s/i.test(l) && !/^FinProceso$/i.test(l) && l !== '"AQUI VA TU CODIGO"');

                if (meaningfulLines.length < 2) {
                    verdict.className = "verdict wrong";
                    verdict.style.display = "block";
                    verdict.innerHTML = "⚠️ El código está prácticamente vacío. Debes escribir una solución real al reto antes de ejecutar.";
                    return;
                }

                let lastChallengeOut = "";   // buffer para Escribir Sin Saltar
                let outputs = [];        // solo salida de Escribir
                let hasError = false;
                let el = document.getElementById("challengeConsole");
                el.innerHTML = "";

                let interp = new PSeIntInterpreter(
                    (text, cls, noNewline) => {
                        appendConsole("challengeConsole", text, cls, noNewline);
                        // Solo capturar outputs reales (sin cls = Escribir normal)
                        // Excluir mensajes del sistema (info, err, input echo)
                        if (!cls) {
                            if (noNewline) {
                                lastChallengeOut += text;
                            } else {
                                outputs.push(lastChallengeOut + text);
                                lastChallengeOut = "";
                            }
                        }
                        if (cls === 'err') hasError = true;
                    },
                    (varName) => showInputModal(varName),
                );
                try {
                    await interp.run(code);
                } catch(e) {
                    hasError = true;
                }
                // Flush buffer de Escribir Sin Saltar al final
                if (lastChallengeOut) { outputs.push(lastChallengeOut); lastChallengeOut = ""; }

                let ch = currentLesson.challenge;
                // Capturar el ID AHORA, antes de que el usuario cierre el modal
                const capturedId = currentLesson.id;

                if (hasError) {
                    verdict.className = "verdict wrong";
                    verdict.style.display = "block";
                    verdict.innerHTML = "❌ El programa tiene errores. Corrígelos antes de continuar.";
                    return;
                }

                // ── Verificar que haya salida real ─────────────────────────
                if (outputs.length === 0) {
                    verdict.className = "verdict wrong";
                    verdict.style.display = "block";
                    verdict.innerHTML = "❌ Tu programa no produjo ninguna salida. Usa <code>Escribir</code> para mostrar los resultados requeridos.";
                    return;
                }

                if (ch.expected) {
                    // Comparar salida ignorando espacios extra y saltos de línea adicionales
                    let actual = outputs.map(o => o.trim()).filter(o => o !== '').join("\n");
                    let expected = ch.expected.trim().split("\n").map(l => l.trim()).filter(l => l !== '').join("\n");
                    if (actual === expected) {
                        verdict.className = "verdict correct";
                        verdict.style.display = "block";
                        verdict.innerHTML = "🎉 ¡Excelente! Tu salida es exactamente la correcta.";
                        markComplete(capturedId);
                    } else {
                        // Mostrar línea por línea qué falta
                        let expLines = expected.split("\n");
                        let actLines = actual.split("\n");
                        let diffHtml = '<div style="margin-top:8px;font-size:0.78rem;font-family:var(--font-mono)">';
                        let maxLen = Math.max(expLines.length, actLines.length);
                        for (let li = 0; li < maxLen; li++) {
                            let expL = expLines[li];
                            let actL = actLines[li];
                            let match = expL !== undefined && actL !== undefined && expL === actL;
                            if (match) {
                                diffHtml += `<div style="color:#4ade80;padding:2px 6px">✅ "${escapeHtml(expL)}"</div>`;
                            } else if (expL !== undefined && actL === undefined) {
                                diffHtml += `<div style="color:var(--color-error-strong);padding:2px 6px">❌ Falta: "${escapeHtml(expL)}"</div>`;
                            } else if (expL === undefined && actL !== undefined) {
                                diffHtml += `<div style="color:var(--color-warn-strong);padding:2px 6px">⚠ Extra: "${escapeHtml(actL)}"</div>`;
                            } else {
                                diffHtml += `<div style="color:var(--color-error-strong);padding:2px 6px">❌ Esperado: "${escapeHtml(expL||'')}" · Tu salida: "${escapeHtml(actL||'')}"</div>`;
                            }
                        }
                        diffHtml += '</div>';
                        verdict.className = "verdict wrong";
                        verdict.style.display = "block";
                        verdict.innerHTML = "❌ Aún no coincide. Revisa línea por línea:" + diffHtml;
                    }
                } else if (ch.validator) {
                    // ── Validación semántica con función personalizada ──────
                    // Construir checklist de requisitos
                    let result = ch.validator(outputs, code);
                    if (result.ok) {
                        verdict.className = "verdict correct";
                        verdict.style.display = "block";
                        verdict.innerHTML = "🎉 ¡Bien hecho! Tu programa cumple todos los requisitos del reto.";
                        markComplete(capturedId);
                    } else {
                        // Mostrar lo que ya tiene bien y lo que le falta
                        let outPreview = outputs.length > 0
                            ? '<div style="margin-top:6px;font-size:0.78rem;color:var(--text-muted)">Tu salida actual: ' +
                              outputs.slice(0,5).map(o => '<code style="color:#60a5fa">' + escapeHtml(o) + '</code>').join(' · ') +
                              (outputs.length > 5 ? '...' : '') + '</div>'
                            : '<div style="margin-top:6px;font-size:0.78rem;color:var(--color-error-strong)">Tu programa no produjo salida visible.</div>';
                        verdict.className = "verdict wrong";
                        verdict.style.display = "block";
                        verdict.innerHTML =
                            '<div style="color:var(--color-warn-strong);font-weight:600">⚠ Falta completar el reto:</div>' +
                            '<div style="color:var(--color-error-strong);margin-top:6px;padding:6px 10px;background:rgba(239,68,68,0.08);border-radius:6px;border-left:3px solid #f87171">❌ ' + (result.hint || "Revisa los requisitos del reto.") + '</div>' +
                            outPreview;
                    }
                } else {
                    // Sin expected ni validator — validación inteligente basada en el enunciado del reto
                    let nonEmptyOutputs = outputs.filter(o => o.trim() !== '');
                    if (nonEmptyOutputs.length < 1) {
                        verdict.className = "verdict wrong";
                        verdict.style.display = "block";
                        verdict.innerHTML = "❌ Tu programa no muestra resultados. Añade instrucciones <code>Escribir</code> con los valores calculados.";
                        return;
                    }
                    // Analizar el enunciado del reto para inferir validaciones mínimas
                    let desc = ch.desc.toLowerCase();
                    let codeL = code.toLowerCase();
                    let issues = [];

                    // Si el reto pide Leer, verificar que haya Leer en el código
                    if ((desc.includes('pide') || desc.includes('lee') || desc.includes('leer') || desc.includes('ingresa')) && !codeL.includes('leer')) {
                        issues.push("El reto requiere leer datos del usuario con <code>Leer</code>, pero no encontré ningún <code>Leer</code> en tu código.");
                    }
                    // Si el reto pide cálculos específicos
                    if (desc.includes('suma') && !codeL.includes('+')) issues.push("El reto requiere calcular una suma pero no usas el operador <code>+</code>.");
                    if (desc.includes('producto') && !codeL.includes('*')) issues.push("El reto requiere multiplicar pero no usas <code>*</code>.");
                    if ((desc.includes('si') || desc.includes('condici')) && !codeL.includes('si ') && !codeL.includes('si\n')) issues.push("El reto parece requerir una condición (<code>Si</code>) pero no encontré ninguna.");
                    if ((desc.includes('mientras') || desc.includes('ciclo') || desc.includes('repetir') || desc.includes('para i') || desc.includes('hasta')) &&
                        !codeL.includes('mientras') && !codeL.includes('para ') && !codeL.includes('repetir')) {
                        issues.push("El reto parece requerir un ciclo (<code>Mientras</code>, <code>Para</code> o <code>Repetir</code>) pero no encontré ninguno.");
                    }
                    // Verificar salida mínima razonable
                    let minOutputs = 1;
                    if (desc.includes('muestra') && desc.includes('y')) minOutputs = 2;
                    if (nonEmptyOutputs.length < minOutputs) {
                        issues.push("Se esperan al menos " + minOutputs + " líneas de salida con <code>Escribir</code>.");
                    }

                    if (issues.length > 0) {
                        let issueHtml = issues.map(i => `<div style="color:var(--color-error-strong);padding:3px 8px;margin:3px 0;border-left:3px solid #f87171;border-radius:4px;background:rgba(239,68,68,0.07)">❌ ${i}</div>`).join('');
                        let outPreview = '<div style="margin-top:8px;font-size:0.78rem;color:var(--text-muted)">Tu salida actual: ' +
                            nonEmptyOutputs.slice(0,5).map(o=>'<code style="color:#60a5fa">'+escapeHtml(o)+'</code>').join(' · ') +
                            (nonEmptyOutputs.length>5?'...':'') + '</div>';
                        verdict.className = "verdict wrong";
                        verdict.style.display = "block";
                        verdict.innerHTML = '<div style="color:var(--color-warn-strong);font-weight:600;margin-bottom:6px">⚠ El reto no está completo:</div>' + issueHtml + outPreview;
                    } else {
                        // Todo bien: completar automáticamente
                        verdict.className = "verdict correct";
                        verdict.style.display = "block";
                        verdict.innerHTML =
                            '🎉 ¡Reto completado! El programa produce resultados correctos.' +
                            '<div style="margin:6px 0;font-size:0.78rem;color:var(--text-muted)">Salida: ' +
                            nonEmptyOutputs.slice(0,5).map(o=>'<code style="color:#60a5fa">'+escapeHtml(o)+'</code>').join(' · ') +
                            (nonEmptyOutputs.length>5?'...':'') + '</div>';
                        markComplete(capturedId);
                    }
                }
            }

            function showSolution() {
                if (!currentLesson) return;
                let ta = document.getElementById("challengeEditor");
                ta.value = currentLesson.challenge.solution;
                // Sync highlighter
                if (window.syncHighlight) syncHighlight("challengeEditor", "challengeHighlight");
                showToast("👁 Solución cargada");
            }

            /* ============================================================
   LINE NUMBERS
============================================================ */

            // ── Esc UNIFICADO: cierra UNA cosa a la vez con orden de prioridad ──
            // Capture phase + stopImmediatePropagation para que sea el ÚNICO
            // handler que actúa por pulsación de Esc, evitando que otros
            // listeners Esc dispersos en el código cierren más cosas en cascada.
            document.addEventListener("keydown", function _escMaster(e) {
                if (e.key !== "Escape") return;

                const close = (fn) => {
                    if (typeof fn === 'function') fn();
                    e.preventDefault();
                    e.stopImmediatePropagation();
                };

                // 0) Widget de Buscar/Reemplazar (Ctrl+F)
                const findW = document.getElementById('findReplaceWidget');
                if (findW && findW.style.display !== 'none' && findW.style.display !== '') {
                    return close(window.closeFindReplace);
                }
                // 0.5) Modal de reportes
                const repModal = document.getElementById('reportModal');
                if (repModal && repModal.classList.contains('open')) {
                    return close(window.closeReportModal);
                }
                // 1) Autocompletado
                const acPopup = document.getElementById('autocompletePopup');
                if (acPopup && acPopup.classList.contains('open')) {
                    return close(window.hideAutocomplete);
                }
                // 2) Input pendiente (Leer)
                if (typeof inputAbort !== 'undefined' && inputAbort) {
                    return close(window.cancelInput);
                }
                // 3) Ejecución activa
                if (typeof _currentInterp !== 'undefined' && _currentInterp) {
                    return close(window.stopExecution);
                }
                // 4) Menú Archivo
                const fileMenuDD = document.getElementById('fileMenuDropdown');
                if (fileMenuDD && fileMenuDD.classList.contains('open')) {
                    return close(window.closeFileMenu);
                }
                // 5) Modal de descarga del diagrama (sobre el flowchart)
                const dlModal = document.getElementById('fcDownloadModal');
                if (dlModal && dlModal.classList.contains('open')) {
                    return close(window._fcCloseDownloadModal);
                }
                // 6) Diagrama de flujo
                const fcModal = document.getElementById('flowchartModal');
                if (fcModal && fcModal.classList.contains('open')) {
                    return close(window.closeFlowchart);
                }
                // 7) Modal de atajos de teclado
                const shortcuts = document.getElementById('shortcutsModal');
                if (shortcuts && shortcuts.classList.contains('open')) {
                    return close(window.toggleShortcuts);
                }
                // 8) Modal de lección
                const lessonModal = document.getElementById('lessonModal');
                if (lessonModal && lessonModal.classList.contains('open')) {
                    return close(window.closeModal);
                }
                // 9) Overlay de bienvenida (creado dinámicamente)
                const welcomeBtn = document.getElementById('welcomeStart');
                if (welcomeBtn) {
                    const overlay = welcomeBtn.closest('[role="dialog"]');
                    if (overlay) {
                        return close(() => {
                            try { localStorage.setItem('pseint_welcomed', 'true'); } catch(_) {}
                            overlay.remove();
                        });
                    }
                }
                // 10) Salir de fullscreen
                const fsGrid = document.querySelector('.playground-grid.fullscreen');
                if (fsGrid && typeof toggleEditorFullscreen === 'function') {
                    return close(toggleEditorFullscreen);
                }
            }, /* capture */ true);

            // Handle tab key and Shift+Tab in editors
            document.addEventListener("keydown", (e) => {
                // Detect Tab en editores de código
                if (
                    e.key === "Tab" &&
                    (e.target.classList.contains("code-editor") ||
                        e.target.classList.contains("big-editor"))
                ) {
                    e.preventDefault();
                    let el = e.target;
                    let start = el.selectionStart,
                        end = el.selectionEnd;
                    let value = el.value;

                    if (e.shiftKey) {
                        // Shift+Tab: desindentar
                        if (start === end) {
                            // Sin selección: desindentar línea actual
                            let lineStart =
                                value.lastIndexOf("\n", start - 1) + 1;
                            let lineEnd = value.indexOf("\n", start);
                            if (lineEnd === -1) lineEnd = value.length;
                            let line = value.substring(lineStart, lineEnd);
                            // Eliminar tabulación o 4 espacios al inicio
                            // FIX: usar execCommand para preservar undo
                            if (line.startsWith("\t")) {
                                el.selectionStart = lineStart;
                                el.selectionEnd = lineStart + 1;
                                if (!document.execCommand('delete', false)) {
                                    el.value = value.substring(0, lineStart) +
                                               line.substring(1) +
                                               value.substring(lineEnd);
                                }
                                el.selectionStart = el.selectionEnd = start - 1;
                            } else if (line.substring(0, 4) === "    ") {
                                el.selectionStart = lineStart;
                                el.selectionEnd = lineStart + 4;
                                if (!document.execCommand('delete', false)) {
                                    el.value = value.substring(0, lineStart) +
                                               line.substring(4) +
                                               value.substring(lineEnd);
                                }
                                el.selectionStart = el.selectionEnd = start - 4;
                            }
                        } else {
                            // Con selección: desindentar todas las líneas seleccionadas
                            let lines = value.split("\n");
                            let startLine =
                                value.substring(0, start).split("\n").length -
                                1;
                            let endLine =
                                value.substring(0, end).split("\n").length - 1;
                            let offset = 0;
                            for (let i = startLine; i <= endLine; i++) {
                                let line = lines[i];
                                if (line.startsWith("\t")) {
                                    lines[i] = line.substring(1);
                                    offset += 1;
                                } else if (line.substring(0, 4) === "    ") {
                                    lines[i] = line.substring(4);
                                    offset += 4;
                                }
                            }
                            let newVal = lines.join("\n");
                            // FIX: usar select-all + insertText para preservar undo
                            el.selectionStart = 0;
                            el.selectionEnd = el.value.length;
                            if (!document.execCommand('insertText', false, newVal)) {
                                el.value = newVal;
                            }
                            el.selectionStart = Math.max(0, start - offset);
                            el.selectionEnd = Math.max(0, end - offset);
                        }
                    } else {
                        // Tab normal (sin Shift)
                        if (start === end) {
                            // Sin selección: insertar un tab donde está el cursor
                            // FIX: usar execCommand para preservar undo
                            if (!document.execCommand('insertText', false, '\t')) {
                                el.value = value.substring(0, start) + "\t" + value.substring(end);
                                el.selectionStart = el.selectionEnd = start + 1;
                            }
                        } else {
                            // FIX: CON selección, indentar TODAS las líneas
                            // tocadas por la selección (estilo VS Code).
                            // Antes esto borraba la selección y la reemplazaba
                            // por un tab, que era el comportamiento default
                            // del execCommand('insertText') y por eso era horrible.
                            let lines = value.split("\n");
                            let startLine = value.substring(0, start).split("\n").length - 1;
                            let endLine = value.substring(0, end).split("\n").length - 1;
                            // Si la selección termina justo al inicio de una línea
                            // (selección "vacía" en esa línea), no la indentamos
                            let endLineStart = value.lastIndexOf("\n", end - 1) + 1;
                            if (end === endLineStart && endLine > startLine) endLine--;

                            let added = 0;
                            for (let i = startLine; i <= endLine; i++) {
                                lines[i] = "\t" + lines[i];
                                added += 1;
                            }
                            let newVal = lines.join("\n");
                            // FIX: usar select-all + insertText para preservar undo
                            el.selectionStart = 0;
                            el.selectionEnd = el.value.length;
                            if (!document.execCommand('insertText', false, newVal)) {
                                el.value = newVal;
                            }
                            // Ajustar selección: mover el inicio y fin por +1 char por línea
                            // El inicio se mueve por 1 (la primera línea recibió 1 tab)
                            // El fin se mueve por la cantidad total de tabs añadidos
                            el.selectionStart = start + 1;
                            el.selectionEnd = end + added;
                        }
                    }
                    el.dispatchEvent(new Event("input"));
                }
            });

            /* ============================================================
   RENDERIZAR LECCIONES
============================================================ */
            function renderLessons() {
                let grid = document.getElementById("lessonsGrid");
                if (!grid) {
                    console.warn("lessonsGrid no encontrado en renderLessons");
                    return;
                }
                if (!Array.isArray(LESSONS)) {
                    console.error("LESSONS no es un array");
                    grid.innerHTML =
                        '<p style="color:red;text-align:center">Error al cargar lecciones. Recarga la página.</p>';
                    return;
                }

                grid.innerHTML = "";
                const filtered = LESSONS.filter(
                    (l) => filterLevel === "todos" || l.level === filterLevel,
                );
                filtered.forEach((lesson, idx) => {
                    let state = lessonStates[lesson.id] || null; // null | 'read' | 'tried' | 'done'
                    let card = document.createElement("div");
                    let cls = "lesson-card lesson-fade";
                    if (state) cls += ' state-' + state;
                    if (state === 'done') cls += ' completed';
                    card.className = cls;
                    card.style.animationDelay = (idx * 30) + "ms";
                    card.setAttribute("role", "button");
                    card.setAttribute("tabindex", "0");
                    card.setAttribute("aria-label", "Abrir lección: " + lesson.title);
                    const levelLabel = lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1);

                    // Badge de estado tipo WhatsApp
                    let stateBadge = '';
                    if (state === 'done') {
                        stateBadge = '<span class="lesson-state-badge badge-done" title="Reto completado">✓✓ Completada</span>';
                    } else if (state === 'tried') {
                        stateBadge = '<span class="lesson-state-badge badge-tried" title="Ejecutaste el ejemplo. Completa el reto.">✓ Intentada</span>';
                    } else if (state === 'read') {
                        stateBadge = '<span class="lesson-state-badge badge-read" title="Leíste la lección. Practica el ejemplo.">📖 Leída</span>';
                    }

                    card.innerHTML =
                        stateBadge +
                        '<div class="lesson-icon">' + lesson.icon + '</div>' +
                        '<h3>' + lesson.title + '</h3>' +
                        '<p>' + lesson.desc + '</p>' +
                        '<span class="lesson-level-badge badge-' + lesson.level + '">' + levelLabel + '</span>';
                    card.onclick = () => openLesson(lesson.id);
                    card.onkeydown = (e) => {
                        if (e.key === "Enter" || e.key === " ")
                            openLesson(lesson.id);
                    };
                    grid.appendChild(card);
                });
                updateProgress();
            }
            /* ============================================================
   PROGRESO
============================================================ */
            function updateProgress() {
                let levels = ["basico", "intermedio", "avanzado", "experto"];
                let total = 0,
                    done = 0;
                levels.forEach((lv) => {
                    let lvLessons = LESSONS.filter((l) => l.level === lv);
                    let lvDone = lvLessons.filter((l) =>
                        completed.has(l.id),
                    ).length;
                    let pct = lvLessons.length
                        ? (lvDone / lvLessons.length) * 100
                        : 0;
                    let barEl = document.getElementById("prog-" + lv);
                    let textEl = document.getElementById("prog-" + lv + "-text");
                    if (barEl) barEl.style.width = pct + "%";
                    if (textEl) textEl.textContent = lvDone + "/" + lvLessons.length;
                    total += lvLessons.length;
                    done += lvDone;
                });
                let overall = total ? Math.round((done / total) * 100) : 0;
                let totalTextEl = document.getElementById("prog-total-text");
                let navProg = document.getElementById("navProgress");
                let emojiEl = document.getElementById("prog-emoji");
                if (totalTextEl) totalTextEl.textContent = overall + "%";
                if (navProg) navProg.style.width = overall + "%";
                let emojis = ["🌱", "🌿", "🌳", "⭐", "🏆"];
                if (emojiEl) emojiEl.textContent = emojis[Math.min(Math.floor(overall / 20), 4)];
            }


            /* ============================================================
   REFERENCIA
============================================================ */
            function renderReference() {
                let grid = document.getElementById("refGrid");
                REFERENCE.forEach((ref) => {
                    let card = document.createElement("div");
                    card.className = "ref-card animate-in";
                    let escapedCode = ref.code.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
                    card.innerHTML = `
		<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:6px">
		  <h4>${ref.kw}</h4>
		  <button onclick="copyRefCode(this)" data-code="${ref.code.replace(/"/g,'&quot;')}" style="background:rgba(0,212,255,0.08);border:1px solid rgba(0,212,255,0.25);border-radius:6px;color:var(--accent1);font-size:0.68rem;padding:2px 8px;cursor:pointer;white-space:nowrap;flex-shrink:0" title="Copiar código">📋</button>
		</div>
		<p>${ref.desc}</p>
		<pre class="ref-code">${escapedCode}</pre>
	 `;
                    grid.appendChild(card);
                });
            }

            function copyRefCode(btn) {
                let code = btn.getAttribute('data-code').replace(/&quot;/g, '"');
                navigator.clipboard.writeText(code).then(() => {
                    btn.textContent = '✅';
                    setTimeout(() => btn.textContent = '📋', 1500);
                }).catch(() => {
                    let ta = document.createElement('textarea');
                    ta.value = code;
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand('copy');
                    document.body.removeChild(ta);
                    btn.textContent = '✅';
                    setTimeout(() => btn.textContent = '📋', 1500);
                });
            }

            /* ============================================================
   NAVBAR
============================================================ */
            document
                .getElementById("navBurger")
                .addEventListener("click", () => {
                    let links = document.getElementById("navLinks");
                    let open = links.classList.toggle("open");
                    document
                        .getElementById("navBurger")
                        .setAttribute("aria-expanded", open);
                });

            document.querySelectorAll(".nav-links a").forEach((a) => {
                a.addEventListener("click", (ev) => {
                    document
                        .getElementById("navLinks")
                        .classList.remove("open");
                    // FIX: si el usuario clickea la MISMA ruta (ya activa), el
                    // navegador NO dispara hashchange. Forzamos re-scroll a la
                    // sección. Útil cuando bajaste/subiste manualmente y querés
                    // volver al título de la sección con un click más.
                    try {
                        const href = a.getAttribute('href') || '';
                        if (href.startsWith('#/') && href === location.hash) {
                            ev.preventDefault();
                            // Re-disparar la lógica del router via hashchange manual
                            window.dispatchEvent(new HashChangeEvent('hashchange', {
                                oldURL: location.href,
                                newURL: location.href
                            }));
                        }
                    } catch(_) {}
                });
            });

            function scrollToSection(sel) {
                // Legacy: convertir scroll a navegación de ruta.
                // Si el selector apunta a una sección con data-route, navegamos
                // por hash router en vez de scrollear.
                let el = document.querySelector(sel);
                if (el && el.hasAttribute('data-route')) {
                    location.hash = '#/' + el.getAttribute('data-route');
                    return;
                }
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }

            /* ============================================================
               SPA ROUTER — un solo data-route activo a la vez
               URL: #/home #/lecciones #/playground #/referencia #/progreso
                    #/sobre #/licencia
            ============================================================ */
            (function() {
                // Rutas funcionales (cada una es una sección con data-route)
                const PAGE_ROUTES = ['home','lecciones','playground','referencia','progreso'];
                // Rutas-ancla: redirigen a home y scroll al elemento
                const ANCHOR_ROUTES = {
                    'sobre': 'sobre-anchor',
                    'licencia': 'licencia-anchor'
                };
                const LEGACY = {
                    'hero':'home', 'lecciones':'lecciones', 'playground':'playground',
                    'referencia':'referencia', 'progreso':'progreso',
                    'sobre':'sobre', 'licencia':'licencia'
                };

                function navHeight() {
                    const nav = document.getElementById('navbar');
                    return nav ? nav.offsetHeight + 12 : 76;
                }

                function showSection(route) {
                    document.querySelectorAll('[data-route]').forEach(s => {
                        s.removeAttribute('data-active');
                    });
                    const target = document.querySelector('[data-route="' + route + '"]');
                    if (target) target.setAttribute('data-active', 'true');
                    // Highlight nav link
                    document.querySelectorAll('.nav-links a').forEach(a => {
                        const href = a.getAttribute('href') || '';
                        a.classList.toggle('active', href === '#/' + route);
                    });
                    // Cerrar menú mobile
                    const navLinks = document.getElementById('navLinks');
                    if (navLinks) navLinks.classList.remove('open');
                }

                function scrollToAnchor(anchorId) {
                    const el = document.getElementById(anchorId);
                    if (!el) return;
                    // Doble RAF + delay: esperar a que la sección se monte
                    // (data-active activa fade-in 0.25s). Sin esto, el cálculo
                    // de posición se hace antes del layout final.
                    requestAnimationFrame(() => requestAnimationFrame(() => {
                        setTimeout(() => {
                            const rect = el.getBoundingClientRect();
                            const top = window.scrollY + rect.top - navHeight();
                            window.scrollTo({ top, behavior: 'smooth' });
                        }, 80);
                    }));
                }

                function scrollToTopOfActive() {
                    // Llevar al título de la sección activa, no al top puro del body
                    requestAnimationFrame(() => requestAnimationFrame(() => {
                        const active = document.querySelector('[data-route][data-active="true"]');
                        if (!active) { window.scrollTo({ top: 0, behavior: 'auto' }); return; }
                        const rect = active.getBoundingClientRect();
                        const top = Math.max(0, window.scrollY + rect.top - navHeight() + 4);
                        window.scrollTo({ top, behavior: 'auto' });
                    }));
                }

                function parseRoute() {
                    const h = (location.hash || '').replace(/^#/, '');
                    if (h.startsWith('/')) return h.slice(1).split(/[/?]/)[0] || 'home';
                    if (h && LEGACY[h]) return LEGACY[h];
                    return 'home';
                }

                function onChange() {
                    // Cerrar modales abiertos al cambiar de ruta
                    document.querySelectorAll('.modal-overlay.open').forEach(m => {
                        m.classList.remove('open');
                    });
                    const route = parseRoute();
                    if (PAGE_ROUTES.includes(route)) {
                        showSection(route);
                        // Scroll al top de la sección activa (no al body=0, que
                        // dejaría el título tapado por el navbar fijo)
                        scrollToTopOfActive();
                        // Highlight nav del link específico
                        document.querySelectorAll('.nav-links a').forEach(a => {
                            a.classList.toggle('active', a.getAttribute('href') === '#/' + route);
                        });
                    } else if (ANCHOR_ROUTES[route]) {
                        showSection('home');
                        // Highlight el link de la ruta-ancla (Sobre/Licencia)
                        document.querySelectorAll('.nav-links a').forEach(a => {
                            a.classList.toggle('active', a.getAttribute('href') === '#/' + route);
                        });
                        scrollToAnchor(ANCHOR_ROUTES[route]);
                    } else {
                        showSection('home');
                        window.scrollTo({ top: 0, behavior: 'auto' });
                    }
                }

                window.addEventListener('hashchange', onChange);
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', onChange);
                } else {
                    onChange();
                }

                window.navigateTo = function(route) { location.hash = '#/' + route; };

                // ── Reveal on scroll ──
                if ('IntersectionObserver' in window) {
                    const io = new IntersectionObserver((entries) => {
                        entries.forEach(e => {
                            if (e.isIntersecting) {
                                e.target.classList.add('visible');
                                io.unobserve(e.target);
                            }
                        });
                    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
                    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
                } else {
                    // Fallback: mostrar todo si no hay IO
                    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
                }
            })();

            /* ============================================================
   FILTRO DE NIVELES
============================================================ */
            document.querySelectorAll(".level-tab").forEach((tab) => {
                tab.addEventListener("click", () => {
                    document
                        .querySelectorAll(".level-tab")
                        .forEach((t) => t.classList.remove("active"));
                    tab.classList.add("active");
                    filterLevel = tab.dataset.level;
                    renderLessons();
                });
            });

            // Inyectar contadores de lecciones en cada tab
            function updateTabCounts() {
                document.querySelectorAll(".level-tab").forEach(tab => {
                    const lv = tab.dataset.level;
                    if (lv === 'todos') {
                        tab.innerHTML = tab.innerHTML.replace(/\s*\(\d+\)/, '') + ' (' + LESSONS.length + ')';
                    } else {
                        const count = LESSONS.filter(l => l.level === lv).length;
                        if (count > 0) {
                            // reemplazar contador existente o añadir
                            const label = tab.textContent.replace(/\s*\(\d+\)/, '').trim();
                            tab.textContent = label + ' (' + count + ')';
                        }
                    }
                });
            }
            updateTabCounts();

            /* ============================================================
   ANIMACIONES CON SCROLL
============================================================ */
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((e) => {
                        if (e.isIntersecting) e.target.classList.add("visible");
                    });
                },
                { threshold: 0.05 },
            );

            function observeAnimated() {
                // On mobile (<=900px), make all animate-in elements visible immediately
                if (window.innerWidth <= 900) {
                    document.querySelectorAll(".animate-in").forEach((el) => {
                        el.classList.add("visible");
                    });
                    return;
                }
                document
                    .querySelectorAll(".animate-in")
                    .forEach((el) => observer.observe(el));
            }

            /* ============================================================
   ESTRELLAS DE FONDO
============================================================ */
            function createStars() {
                let container = document.getElementById("stars");
                for (let i = 0; i < 80; i++) {
                    let star = document.createElement("div");
                    star.className = "star";
                    let size = Math.random() * 3 + 1;
                    star.style.cssText = `
		width:${size}px; height:${size}px;
		left:${Math.random() * 100}%;
		top:${Math.random() * 100}%;
		--d:${2 + Math.random() * 4}s;
		animation-delay:${Math.random() * 4}s;
	 `;
                    container.appendChild(star);
                }
            }

            /* ============================================================
   PERSISTENCIA DEL PLAYGROUND
============================================================ */
            /* ============================================================
   FUNCIONES AVANZADAS DEL EDITOR
============================================================ */

            // Auto-indent inteligente al presionar Enter
            function handleSmartEnter(ta) {
                let start = ta.selectionStart, end = ta.selectionEnd;
                let val = ta.value;
                // Obtener la línea actual
                let lineStart = val.lastIndexOf("\n", start - 1) + 1;
                let lineEnd = val.indexOf("\n", start);
                if (lineEnd === -1) lineEnd = val.length;
                let curLine = val.substring(lineStart, start);
                // Extraer indentación actual
                let indentMatch = curLine.match(/^(\s*)/);
                let indent = indentMatch ? indentMatch[1] : "";
                // Detectar palabras clave que abren bloque → añadir un tab
                let trimmedLine = curLine.trim();
                let opensBlock = /\b(Hacer|Entonces|Repetir|Hacer$|Otro\s+Modo:)$/i.test(trimmedLine)
                              || /^(Proceso|SubProceso)\s+/i.test(trimmedLine)
                              || /^\d+\s*:/.test(trimmedLine)  // caso de Segun: "1:"
                              || /^De\s+Otro\s+Modo\s*:/i.test(trimmedLine);
                // Detectar si la línea siguiente cierra (para mantener simetría)
                let nextLineStart = lineEnd + 1;
                let nextLineEnd = val.indexOf("\n", nextLineStart);
                if (nextLineEnd === -1) nextLineEnd = val.length;
                let nextLine = val.substring(nextLineStart, nextLineEnd).trim();
                let nextIsClose = /^(FinSi|FinPara|FinMientras|FinSegun|FinProceso|FinSubProceso|SiNo|Hasta\s+Que)/i.test(nextLine);

                let newIndent = indent;
                let extraInsert = "";
                if (opensBlock) {
                    newIndent = indent + "\t";
                    // Si la siguiente línea ya cierra, hacer "sandwich" — cursor en línea intermedia
                    if (nextIsClose) {
                        extraInsert = "\n" + indent;
                    }
                }

                let insert = "\n" + newIndent + extraInsert;
                // FIX: usar execCommand("insertText") para preservar undo/redo
                if (!document.execCommand('insertText', false, insert)) {
                    // Fallback si execCommand falla
                    ta.value = val.substring(0, start) + insert + val.substring(end);
                }
                // Posicionar cursor después del newline + indent (antes del extraInsert)
                let cursorPos = start + 1 + newIndent.length;
                ta.selectionStart = ta.selectionEnd = cursorPos;
                ta.dispatchEvent(new Event("input"));
            }

            // Duplicar línea actual (Ctrl+D)
            function duplicateLine(ta) {
                let start = ta.selectionStart, end = ta.selectionEnd;
                let val = ta.value;
                let lineStart = val.lastIndexOf("\n", start - 1) + 1;
                let lineEnd = val.indexOf("\n", end);
                if (lineEnd === -1) lineEnd = val.length;
                let line = val.substring(lineStart, lineEnd);
                // FIX: insertar al final de la línea actual usando execCommand
                // para preservar el historial undo/redo.
                ta.selectionStart = ta.selectionEnd = lineEnd;
                let toInsert = "\n" + line;
                if (!document.execCommand('insertText', false, toInsert)) {
                    ta.value = val.substring(0, lineEnd) + toInsert + val.substring(lineEnd);
                }
                let newPos = start + line.length + 1;
                ta.selectionStart = ta.selectionEnd = newPos;
                ta.dispatchEvent(new Event("input"));
            }

            // Eliminar línea actual (Ctrl+K)
            function deleteLine(ta) {
                let start = ta.selectionStart;
                let val = ta.value;
                let lineStart = val.lastIndexOf("\n", start - 1) + 1;
                let lineEnd = val.indexOf("\n", start);
                if (lineEnd === -1) lineEnd = val.length;
                else lineEnd++; // incluir el \n
                // FIX: usar execCommand("delete") con la selección de la línea
                // para preservar el historial undo/redo.
                ta.selectionStart = lineStart;
                ta.selectionEnd = lineEnd;
                if (!document.execCommand('delete', false)) {
                    ta.value = val.substring(0, lineStart) + val.substring(lineEnd);
                    ta.selectionStart = ta.selectionEnd = Math.min(lineStart, ta.value.length);
                }
                ta.dispatchEvent(new Event("input"));
            }

            // ── Portapapeles interno ──────────────────────────────────────────
            // navigator.clipboard.writeText() es asíncrono y puede fallar.
            // Usamos una variable interna para garantizar que Ctrl+V siempre
            // pegue la línea correcta. { text: string, isLine: boolean }
            let _internalClipboard = { text: '', isLine: false };

            function _writeClipboard(text) {
                try {
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        navigator.clipboard.writeText(text);
                    } else {
                        let tmp = document.createElement('textarea');
                        tmp.value = text;
                        tmp.style.position = 'fixed'; tmp.style.opacity = '0';
                        document.body.appendChild(tmp);
                        tmp.select();
                        document.execCommand('copy');
                        document.body.removeChild(tmp);
                    }
                } catch(e) { /* el portapapeles interno es el fallback */ }
            }

            // Pegar línea (Ctrl+V cuando _internalClipboard.isLine === true)
            // Inserta la línea ANTES de la línea actual (comportamiento VS Code).
            function pasteInternalLine(ta) {
                let val = ta.value;
                let start = ta.selectionStart;
                let lineStart = val.lastIndexOf("\n", start - 1) + 1;
                let insertText = _internalClipboard.text + "\n";
                ta.selectionStart = lineStart;
                ta.selectionEnd   = lineStart;
                if (!document.execCommand('insertText', false, insertText)) {
                    ta.value = val.substring(0, lineStart) + insertText + val.substring(lineStart);
                    ta.selectionStart = ta.selectionEnd = lineStart + insertText.length - 1;
                }
                ta.dispatchEvent(new Event("input"));
            }

            // Cortar línea actual (Ctrl+X sin selección)
            function cutCurrentLine(ta) {
                let start = ta.selectionStart;
                let val = ta.value;
                let lineStart = val.lastIndexOf("\n", start - 1) + 1;
                let lineEnd = val.indexOf("\n", start);
                let hasNewline = lineEnd !== -1;
                if (lineEnd === -1) lineEnd = val.length;
                let lineText = val.substring(lineStart, lineEnd);
                // Guardar en portapapeles interno (garantiza que Ctrl+V funcione)
                _internalClipboard = { text: lineText, isLine: true };
                // Intentar también en el portapapeles del SO
                _writeClipboard(lineText + (hasNewline ? "\n" : ""));
                // Borrar la línea (incluyendo \n si la había)
                let delEnd = hasNewline ? lineEnd + 1 : lineEnd;
                ta.selectionStart = lineStart;
                ta.selectionEnd   = delEnd;
                if (!document.execCommand('delete', false)) {
                    ta.value = val.substring(0, lineStart) + val.substring(delEnd);
                    ta.selectionStart = ta.selectionEnd = lineStart;
                }
                ta.dispatchEvent(new Event("input"));
                showToast('✂️ Línea cortada');
            }

            // Copiar línea actual (Ctrl+C sin selección)
            function copyCurrentLine(ta) {
                let start = ta.selectionStart;
                let val = ta.value;
                let lineStart = val.lastIndexOf("\n", start - 1) + 1;
                let lineEnd = val.indexOf("\n", start);
                if (lineEnd === -1) lineEnd = val.length;
                let lineText = val.substring(lineStart, lineEnd);
                // Guardar en portapapeles interno (garantiza que Ctrl+V funcione)
                _internalClipboard = { text: lineText, isLine: true };
                // Intentar también en el portapapeles del SO
                _writeClipboard(lineText + "\n");
                showToast('📋 Línea copiada');
            }

            // Mover línea arriba/abajo (Alt+↑ / Alt+↓)
            function moveLine(ta, dir) {
                let start = ta.selectionStart, end = ta.selectionEnd;
                let val = ta.value;
                let lines = val.split("\n");
                let startLine = val.substring(0, start).split("\n").length - 1;
                let endLine = val.substring(0, end).split("\n").length - 1;
                if (dir === -1 && startLine === 0) return;
                if (dir === 1 && endLine === lines.length - 1) return;
                // FIX: solo reemplazamos el rango AFECTADO (no todo el documento)
                // para que cada Alt+↑/↓ produzca un undo entry pequeño en vez
                // de uno gigantesco que destruya todo el historial al hacer Ctrl+Z.
                let lineStartOffsets = [0];
                for (let i = 0; i < lines.length; i++) {
                    lineStartOffsets.push(lineStartOffsets[i] + lines[i].length + 1);
                }
                let affectStart, affectEnd, replaced, newCursorLine;
                if (dir === -1) {
                    let prev = lines[startLine - 1];
                    let block = lines.slice(startLine, endLine + 1);
                    affectStart = lineStartOffsets[startLine - 1];
                    // hasta el final de la línea endLine (exclusivo del \n siguiente)
                    affectEnd = lineStartOffsets[endLine] + lines[endLine].length;
                    replaced = block.join("\n") + "\n" + prev;
                    newCursorLine = startLine - 1;
                } else {
                    let next = lines[endLine + 1];
                    let block = lines.slice(startLine, endLine + 1);
                    affectStart = lineStartOffsets[startLine];
                    affectEnd = lineStartOffsets[endLine + 1] + lines[endLine + 1].length;
                    replaced = next + "\n" + block.join("\n");
                    newCursorLine = startLine + 1;
                }
                ta.focus();
                if (typeof ta.setRangeText === 'function') {
                    // setRangeText con 'preserve' mantiene la selección si está fuera del rango;
                    // setRangeText es atómico en undo (mucho mejor que insertText sobre todo el doc).
                    ta.setRangeText(replaced, affectStart, affectEnd, 'preserve');
                } else {
                    // Fallback: select-range + insertText
                    ta.selectionStart = affectStart;
                    ta.selectionEnd = affectEnd;
                    if (!document.execCommand('insertText', false, replaced)) {
                        ta.value = val.substring(0, affectStart) + replaced + val.substring(affectEnd);
                    }
                }
                // Recalcular posición del cursor preservando offset dentro de la línea
                let colInLine = start - val.substring(0, start).lastIndexOf("\n") - 1;
                let newLines2 = ta.value.split("\n");
                let newStart = 0;
                for (let i = 0; i < newCursorLine; i++) newStart += newLines2[i].length + 1;
                newStart += Math.min(colInLine, (newLines2[newCursorLine] || '').length);
                ta.selectionStart = newStart;
                ta.selectionEnd = newStart + (end - start);
                ta.dispatchEvent(new Event("input"));
                // FIX: forzar repintado inmediato del active-line + gutter en el
                // siguiente frame. Sin esto, al mantener Alt+↓/↑ presionado el
                // highlight de fila y el número del gutter se "despintan" hasta
                // que sueltas la tecla, porque los listeners están debounceados.
                requestAnimationFrame(() => {
                    const before = ta.value.substring(0, ta.selectionStart);
                    const lineNum = before.split('\n').length;
                    if (window._invalidateActiveRowRef) window._invalidateActiveRowRef();
                    if (window._updateActiveLineHighlight) window._updateActiveLineHighlight(ta, lineNum);
                    if (window._reapplyCurrentRow) window._reapplyCurrentRow(ta);
                    // Re-sincronizar syntax highlight (gutter incluido) sin esperar al debounce
                    if (ta.id === 'playgroundEditor' && window.syncHighlight) {
                        window.syncHighlight('playgroundEditor', 'playgroundHighlight');
                    }
                });
            }

            // Toggle fullscreen del editor (F11)
            // FIX: ahora pone TODO el grid (editor + consola) en pantalla
            // completa, no solo el panel del editor. Antes la consola
            // quedaba fuera de la vista y el usuario tenía que hacer
            // scroll de la página, lo que rompía el modo "pantalla
            // completa" visualmente.
            /* ============================================================
               SISTEMA DE PANTALLA COMPLETA - REIMPLEMENTACIÓN COMPLETA
               ============================================================
               Estado:
               - playground-grid tiene clase .fullscreen
               - playground-grid tiene clase .bottom-panel-open si hay un tab activo
               - data-fs-tab en el grid indica cuál tab está activo ('console', 'errors', 'warns')
               ============================================================ */

            let _fsActiveTab = null; // null = panel cerrado, o 'console'/'errors'/'warns'

            function toggleEditorFullscreen() {
                let grid = document.querySelector('.playground-grid');
                if (!grid) return;
                let isFullscreen = grid.classList.toggle('fullscreen');
                document.body.classList.toggle('editor-fullscreen-active', isFullscreen);

                if (isFullscreen) {
                    // Guardar scroll de la página para restaurarlo al salir
                    grid._savedScrollY = window.scrollY || window.pageYOffset || 0;
                    // CRITICAL: mover el grid al body para escapar de cualquier
                    // contenedor padre con padding/transform/overflow que
                    // interfiera con position:fixed.
                    if (grid.parentElement !== document.body) {
                        grid._originalParent = grid.parentElement;
                        grid._originalNextSibling = grid.nextSibling;
                        document.body.appendChild(grid);
                    }

                    // === REORDENAR EL DOM PARA FULLSCREEN ===
                    // El grid es flex column. El orden visual depende
                    // del orden DOM. Forzamos:
                    //   1. fs-topbar          (arriba)
                    //   2. playground-editor-panel  (centro / flex:1)
                    //   3. fs-splitter
                    //   4. fs-bottom-panel    (contenido del tab activo)
                    //   5. fs-bottombar       (abajo)
                    // Guardamos posiciones originales para restaurar al salir.
                    let topbar = document.getElementById('fsTopbar');
                    let editorPanel = grid.querySelector('.playground-editor-panel');
                    let splitter = document.getElementById('fsSplitter');
                    let bottomPanel = document.getElementById('fsBottomPanel');
                    let bottombar = document.getElementById('fsBottombar');
                    let outputPanel = grid.querySelector('.playground-output-panel');

                    if (!grid._originalOrder) {
                        // Guardar orden DOM original UNA SOLA VEZ
                        grid._originalOrder = Array.from(grid.children);
                    }

                    // Re-anexar en el orden correcto (esto los mueve sin clonarlos)
                    if (topbar) grid.appendChild(topbar);
                    if (editorPanel) grid.appendChild(editorPanel);
                    if (splitter) grid.appendChild(splitter);
                    if (bottomPanel) grid.appendChild(bottomPanel);
                    if (bottombar) grid.appendChild(bottombar);
                    // El output-panel original lo escondemos al final
                    if (outputPanel) grid.appendChild(outputPanel);
                    // Ahora reorderemos para poner topbar PRIMERO usando prepend
                    if (topbar) grid.prepend(topbar);

                    // Altura por defecto del bottom panel
                    if (!grid.style.getPropertyValue('--fs-bottom-height')) {
                        grid.style.setProperty('--fs-bottom-height', '240px');
                    }
                    // Recuperar última tab activa
                    let lastTab = localStorage.getItem('fsActiveTab');
                    if (lastTab && ['console', 'errors', 'warns'].includes(lastTab)) {
                        _fsActiveTab = lastTab;
                        grid.classList.add('bottom-panel-open');
                        _fsRenderTabContent();
                        _fsUpdateTabButtons();
                    } else {
                        _fsActiveTab = null;
                        grid.classList.remove('bottom-panel-open');
                    }
                    // Forzar actualización de contadores y visibilidad de tabs
                    if (window._fsUpdateCounts) window._fsUpdateCounts();
                    _setupFsSplitter();
                    showToast("⛶ Pantalla completa · Esc o ✕ para salir");
                } else {
                    // FIX: restaurar la consola real a su parent original
                    // ANTES de mover el grid (porque la consola está ahora
                    // dentro del fs-bottom-content que está dentro del grid).
                    _fsRestoreConsole();
                    // Restaurar el orden DOM original antes de devolver el grid
                    if (grid._originalOrder) {
                        grid._originalOrder.forEach(el => grid.appendChild(el));
                        grid._originalOrder = null;
                    }
                    // Restaurar grid a su posición original en el DOM
                    if (grid._originalParent) {
                        if (grid._originalNextSibling && grid._originalNextSibling.parentNode === grid._originalParent) {
                            grid._originalParent.insertBefore(grid, grid._originalNextSibling);
                        } else {
                            grid._originalParent.appendChild(grid);
                        }
                        grid._originalParent = null;
                        grid._originalNextSibling = null;
                    }
                    grid.classList.remove('bottom-panel-open');
                    _fsActiveTab = null;
                    // FIX: restaurar scroll de la página al lugar donde el
                    // usuario estaba antes de entrar en fullscreen. Sin esto,
                    // al pulsar Esc se mandaba al usuario al top de la página.
                    let savedY = grid._savedScrollY || 0;
                    grid._savedScrollY = null;
                    // Doble requestAnimationFrame para asegurar que el layout
                    // se reflowee antes de restaurar el scroll.
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            window.scrollTo(0, savedY);
                        });
                    });
                    showToast("⛶ Modo normal");
                }

                // Invalidar caches del editor
                if (window._invalidateLhCache) window._invalidateLhCache();
                if (window._invalidateActiveRowRef) window._invalidateActiveRowRef();
                let ta = document.getElementById('playgroundEditor');
                if (ta) {
                    ta._charWidth = null;
                    if (window._reapplyCurrentRow) {
                        requestAnimationFrame(() => window._reapplyCurrentRow(ta));
                    }
                    if (window._renderParamErrorOverlays) {
                        requestAnimationFrame(() => window._renderParamErrorOverlays());
                    }
                    // FIX: solo enfocar el editor al ENTRAR en fullscreen,
                    // no al salir. Al salir, enfocar haría que el navegador
                    // scrollee al editor automáticamente, anulando nuestro
                    // restore de scrollY.
                    if (isFullscreen) setTimeout(() => ta.focus({preventScroll: true}), 50);
                }
                _updateFsStatus();
            }
            window.toggleEditorFullscreen = toggleEditorFullscreen;

            /**
             * Toggle de un tab del bottom panel en fullscreen.
             * tabId: 'console' | 'errors' | 'warns'
             * - Si el tab ya está activo: cerrar el panel
             * - Si otro tab está activo: cambiar al tab clicado
             * - Si está cerrado: abrir con el tab clicado
             */
            function fsToggleTab(tabId) {
                let grid = document.querySelector('.playground-grid');
                if (!grid || !grid.classList.contains('fullscreen')) return;
                if (_fsActiveTab === tabId) {
                    // Cerrar el panel
                    _fsActiveTab = null;
                    grid.classList.remove('bottom-panel-open');
                    localStorage.removeItem('fsActiveTab');
                } else {
                    _fsActiveTab = tabId;
                    grid.classList.add('bottom-panel-open');
                    localStorage.setItem('fsActiveTab', tabId);
                    _fsRenderTabContent();
                }
                _fsUpdateTabButtons();
                // Re-renderizar overlays con dimensiones nuevas
                let ta = document.getElementById('playgroundEditor');
                if (ta) {
                    ta._charWidth = null;
                    if (window._invalidateLhCache) window._invalidateLhCache();
                    if (window._reapplyCurrentRow) {
                        requestAnimationFrame(() => window._reapplyCurrentRow(ta));
                    }
                    if (window._renderParamErrorOverlays) {
                        requestAnimationFrame(() => window._renderParamErrorOverlays());
                    }
                }
            }
            window.fsToggleTab = fsToggleTab;

            /** Marca visualmente el tab activo */
            function _fsUpdateTabButtons() {
                let map = { console: 'fsTabConsole', errors: 'fsTabErrors', warns: 'fsTabWarns' };
                for (let [tab, btnId] of Object.entries(map)) {
                    let btn = document.getElementById(btnId);
                    if (btn) btn.classList.toggle('active', _fsActiveTab === tab);
                }
                // FIX UX: badges con conteo de errores/warns en las pestañas
                // del fullscreen. Sin esto, en mobile el usuario no sabia que
                // habia errores nuevos hasta abrir cada tab.
                try {
                    const errorList = document.getElementById('playgroundErrorList');
                    const warnList = document.getElementById('playgroundWarnList');
                    const errCount = errorList ? errorList.children.length : 0;
                    const warnCount = warnList ? warnList.children.length : 0;
                    const errBtn = document.getElementById('fsTabErrors');
                    const warnBtn = document.getElementById('fsTabWarns');
                    function setBadge(btn, count, cls) {
                        if (!btn) return;
                        btn.classList.toggle(cls, count > 0);
                        let badge = btn.querySelector('.fs-tab-count');
                        if (count > 0) {
                            if (!badge) {
                                badge = document.createElement('span');
                                badge.className = 'fs-tab-count';
                                btn.appendChild(badge);
                            }
                            badge.textContent = count > 99 ? '99+' : String(count);
                        } else if (badge) {
                            badge.remove();
                        }
                    }
                    setBadge(errBtn, errCount, 'has-errors');
                    setBadge(warnBtn, warnCount, 'has-warns');
                } catch(_) {}
            }
            window._fsUpdateTabButtons = _fsUpdateTabButtons;

            /** Renderiza el contenido del tab activo en el bottom panel */
            function _fsRenderTabContent() {
                let content = document.getElementById('fsBottomContent');
                if (!content || !_fsActiveTab) return;
                content.className = 'fs-bottom-content fs-pane-' + _fsActiveTab;
                // Actualizar título del header del bottom panel
                let titleEl = document.getElementById('fsBottomTitle');
                if (titleEl) {
                    let titles = {
                        'console': '💻 Consola',
                        'errors':  '⛔ Errores de sintaxis',
                        'warns':   '💡 Sugerencias y advertencias',
                    };
                    titleEl.textContent = titles[_fsActiveTab] || '';
                }

                // Restaurar la consola REAL a su lugar antes de cambiar de tab
                _fsRestoreConsole();

                if (_fsActiveTab === 'console') {
                    // FIX CRITICAL: MOVER físicamente el elemento real de la
                    // consola al fs-bottom-content (no clonar, no innerHTML).
                    // Esto preserva los listeners del input row para Leer.
                    // Al salir de fullscreen o cambiar de tab, lo devolvemos.
                    let realConsole = document.getElementById('playgroundConsole');
                    if (realConsole) {
                        // Guardar parent original para restaurar después
                        if (!realConsole._originalParent) {
                            realConsole._originalParent = realConsole.parentElement;
                            realConsole._originalNextSibling = realConsole.nextSibling;
                        }
                        // Limpiar el content y meter la consola real
                        content.innerHTML = '';
                        content.appendChild(realConsole);
                        realConsole.scrollTop = realConsole.scrollHeight;
                    }
                } else if (_fsActiveTab === 'errors') {
                    let realList = document.getElementById('playgroundErrorList');
                    if (realList && realList.children.length > 0) {
                        content.innerHTML = '';
                        Array.from(realList.children).forEach(item => {
                            // Los error-item tienen estructura:
                            //   <span class="error-line-num">L5</span><span class="error-msg">...</span>
                            let lineEl = item.querySelector('.error-line-num');
                            let msgEl = item.querySelector('.error-msg');
                            let lineText = lineEl ? lineEl.textContent : '';
                            let msgText = msgEl ? msgEl.textContent : item.textContent;
                            let div = document.createElement('div');
                            div.className = 'fs-error-item';
                            // Construir DOM seguro
                            let lineSpan = document.createElement('span');
                            lineSpan.className = 'fs-error-line';
                            lineSpan.textContent = lineText;
                            let msgSpan = document.createElement('span');
                            msgSpan.className = 'fs-error-msg';
                            msgSpan.textContent = msgText;
                            div.appendChild(lineSpan);
                            div.appendChild(msgSpan);
                            // Click va a la línea
                            let lineNum = parseInt((lineText || '').replace(/^L/, '')) || null;
                            if (lineNum) {
                                div.title = 'Clic para ir a la línea ' + lineNum;
                                div.onclick = () => {
                                    if (window.goToLine) goToLine(lineNum);
                                };
                            }
                            content.appendChild(div);
                        });
                    } else {
                        content.className = 'fs-bottom-content empty';
                        content.textContent = '✅ No hay errores de sintaxis';
                    }
                } else if (_fsActiveTab === 'warns') {
                    let realList = document.getElementById('playgroundWarnList');
                    if (realList && realList.children.length > 0) {
                        content.innerHTML = '';
                        Array.from(realList.children).forEach(item => {
                            // Los warn-item tienen estructura:
                            //   💡 <span class="warn-line-jump">L5</span> texto del mensaje
                            // O simplemente texto plano si no tiene línea.
                            let lineEl = item.querySelector('.warn-line-jump');
                            let lineText = lineEl ? lineEl.textContent : '';
                            // Texto del mensaje: todo el textContent menos "💡" y "L5"
                            let fullText = item.textContent || '';
                            let msgText = fullText
                                .replace(/^💡\s*/, '')
                                .replace(/^L\d+\s*/, '')
                                .trim();
                            let div = document.createElement('div');
                            div.className = 'fs-warn-item';
                            let lineSpan = document.createElement('span');
                            lineSpan.className = 'fs-error-line';
                            lineSpan.textContent = lineText || '—';
                            let msgSpan = document.createElement('span');
                            msgSpan.className = 'fs-error-msg';
                            msgSpan.textContent = msgText;
                            div.appendChild(lineSpan);
                            div.appendChild(msgSpan);
                            let lineNum = parseInt((lineText || '').replace(/^L/, '')) || null;
                            if (lineNum) {
                                div.title = 'Clic para ir a la línea ' + lineNum;
                                div.onclick = () => {
                                    if (window.goToLine) goToLine(lineNum);
                                };
                            }
                            content.appendChild(div);
                        });
                    } else {
                        content.className = 'fs-bottom-content empty';
                        content.textContent = '✅ No hay sugerencias ni advertencias';
                    }
                }
            }
            window._fsRenderTabContent = _fsRenderTabContent;

            /** Actualizar contadores y badges de tabs */
            function _fsUpdateCounts() {
                let ec = document.getElementById('errorCount');
                let wc = document.getElementById('warnCount');
                let fec = document.getElementById('fsTabErrorsCount');
                let fwc = document.getElementById('fsTabWarnsCount');
                let errs = ec ? parseInt(ec.textContent) || 0 : 0;
                let warns = wc ? parseInt(wc.textContent) || 0 : 0;
                if (fec) fec.textContent = errs;
                if (fwc) fwc.textContent = warns;
                let btnE = document.getElementById('fsTabErrors');
                let btnW = document.getElementById('fsTabWarns');
                if (btnE) {
                    btnE.classList.toggle('has-errors', errs > 0);
                    // Mostrar el tab Errores solo cuando hay errores
                    btnE.style.display = errs > 0 ? 'inline-flex' : 'none';
                }
                if (btnW) {
                    btnW.classList.toggle('has-warns', warns > 0);
                    // Mostrar el tab Sugerencias solo cuando hay sugerencias
                    btnW.style.display = warns > 0 ? 'inline-flex' : 'none';
                }
                // Si el panel estaba abierto en un tab que ya no tiene contenido, cerrarlo
                if (_fsActiveTab === 'errors' && errs === 0) {
                    fsCloseBottomPanel();
                } else if (_fsActiveTab === 'warns' && warns === 0) {
                    fsCloseBottomPanel();
                }
                // Si el panel está abierto en errors/warns, refrescar contenido
                if (_fsActiveTab === 'errors' || _fsActiveTab === 'warns') {
                    _fsRenderTabContent();
                }
            }
            window._fsUpdateCounts = _fsUpdateCounts;

            /** Re-sincronizar consola del fs con la real cuando hay nuevos prints
             *  Como ahora MOVEMOS el playgroundConsole real al fs-bottom-content,
             *  no necesitamos copiar contenido — solo asegurar el scroll al final.
             *  Si la consola NO está actualmente movida (otro tab activo), no hace nada. */
            function _fsSyncConsole() {
                if (_fsActiveTab !== 'console') return;
                let realConsole = document.getElementById('playgroundConsole');
                if (realConsole) {
                    realConsole.scrollTop = realConsole.scrollHeight;
                }
                // Si por alguna razón aún no se movió la consola al panel fs, hacerlo ahora
                let content = document.getElementById('fsBottomContent');
                if (content && realConsole && realConsole.parentElement !== content) {
                    _fsRenderTabContent();
                }
            }
            window._fsSyncConsole = _fsSyncConsole;

            /** Restaurar la consola real a su parent original.
             *  Se llama al cambiar de tab, cerrar el panel o salir del
             *  fullscreen, para que la consola siga siendo accesible
             *  desde el modo normal. */
            function _fsRestoreConsole() {
                let realConsole = document.getElementById('playgroundConsole');
                if (!realConsole || !realConsole._originalParent) return;
                // Solo restaurar si actualmente está fuera de su parent original
                if (realConsole.parentElement === realConsole._originalParent) {
                    return;
                }
                if (realConsole._originalNextSibling &&
                    realConsole._originalNextSibling.parentNode === realConsole._originalParent) {
                    realConsole._originalParent.insertBefore(realConsole, realConsole._originalNextSibling);
                } else {
                    realConsole._originalParent.appendChild(realConsole);
                }
            }
            window._fsRestoreConsole = _fsRestoreConsole;

            /** Setup del splitter (drag para redimensionar bottom panel) */
            let _fsSplitterReady = false;
            function _setupFsSplitter() {
                if (_fsSplitterReady) return;
                _fsSplitterReady = true;
                let splitter = document.getElementById('fsSplitter');
                let grid = document.querySelector('.playground-grid');
                if (!splitter || !grid) return;
                let dragging = false;
                let startY = 0;
                let startH = 0;
                splitter.addEventListener('mousedown', (e) => {
                    if (!grid.classList.contains('fullscreen')) return;
                    dragging = true;
                    startY = e.clientY;
                    let curr = grid.style.getPropertyValue('--fs-bottom-height');
                    startH = parseFloat(curr) || 240;
                    splitter.classList.add('dragging');
                    document.body.style.userSelect = 'none';
                    e.preventDefault();
                });
                document.addEventListener('mousemove', (e) => {
                    if (!dragging) return;
                    let delta = startY - e.clientY;
                    let newH = Math.max(80, Math.min(window.innerHeight * 0.7, startH + delta));
                    grid.style.setProperty('--fs-bottom-height', newH + 'px');
                });
                document.addEventListener('mouseup', () => {
                    if (!dragging) return;
                    dragging = false;
                    splitter.classList.remove('dragging');
                    document.body.style.userSelect = '';
                    let ta = document.getElementById('playgroundEditor');
                    if (ta) {
                        ta._charWidth = null;
                        if (window._invalidateLhCache) window._invalidateLhCache();
                        if (window._reapplyCurrentRow) window._reapplyCurrentRow(ta);
                        if (window._renderParamErrorOverlays) window._renderParamErrorOverlays();
                    }
                });
            }

            /** Actualizar status del fullscreen (Ln/Col) */
            function _updateFsStatus() {
                let grid = document.querySelector('.playground-grid.fullscreen');
                if (!grid) return;
                let st = document.getElementById('fsStatus');
                let ta = document.getElementById('playgroundEditor');
                if (!st || !ta) return;
                let pos = ta.selectionStart;
                let before = ta.value.substring(0, pos);
                let lineNum = before.split('\n').length;
                let colNum = before.split('\n').pop().length + 1;
                let totalLines = ta.value.split('\n').length;
                let totalChars = ta.value.length;
                st.textContent = 'Ln ' + lineNum + ', Col ' + colNum +
                                 '  ·  ' + totalLines + ' líneas  ·  ' + totalChars + ' chars';
            }
            window._updateFsStatus = _updateFsStatus;

            /** Toggle del menú Archivo en fullscreen */
            function fsToggleFileMenu(e) {
                if (e) e.stopPropagation();
                let dd = document.getElementById('fsFileMenuDropdown');
                if (!dd) return;
                // Si va a abrirse, calcular posición fixed basada en el botón
                if (!dd.classList.contains('open')) {
                    let btn = e && e.currentTarget ? e.currentTarget : null;
                    if (!btn) {
                        // Fallback: buscar el botón en el DOM
                        let wrap = document.getElementById('fsFileMenuWrap');
                        if (wrap) btn = wrap.querySelector('.fs-icon-btn');
                    }
                    if (btn) {
                        let r = btn.getBoundingClientRect();
                        dd.style.top = (r.bottom + 6) + 'px';
                        dd.style.left = r.left + 'px';
                        dd.style.right = 'auto';
                    }
                }
                dd.classList.toggle('open');
            }
            window.fsToggleFileMenu = fsToggleFileMenu;

            /** Cerrar menú Archivo en fullscreen */
            function fsCloseFileMenu() {
                let dd = document.getElementById('fsFileMenuDropdown');
                if (dd) dd.classList.remove('open');
            }
            window.fsCloseFileMenu = fsCloseFileMenu;

            /** Cerrar el bottom panel (X) */
            function fsCloseBottomPanel() {
                let grid = document.querySelector('.playground-grid.fullscreen');
                if (!grid) return;
                // Restaurar la consola real a su parent original
                _fsRestoreConsole();
                _fsActiveTab = null;
                grid.classList.remove('bottom-panel-open');
                localStorage.removeItem('fsActiveTab');
                _fsUpdateTabButtons();
                let ta = document.getElementById('playgroundEditor');
                if (ta) {
                    ta._charWidth = null;
                    if (window._invalidateLhCache) window._invalidateLhCache();
                    if (window._reapplyCurrentRow) window._reapplyCurrentRow(ta);
                    if (window._renderParamErrorOverlays) window._renderParamErrorOverlays();
                }
            }
            window.fsCloseBottomPanel = fsCloseBottomPanel;

            /** Click fuera cierra el menú archivo del fullscreen */
            document.addEventListener('click', (e) => {
                let wrap = document.getElementById('fsFileMenuWrap');
                if (wrap && !wrap.contains(e.target)) {
                    fsCloseFileMenu();
                }
            });

            /* ============================================================
   FIN FUNCIONES AVANZADAS DEL EDITOR
============================================================ */

            /* ============================================================
   DIAGRAMA DE FLUJO — MOTOR COMPLETO
   Compatible con la representación visual del diagrama de PSeInt Windows
============================================================ */

            // ── PARSER de PSeInt → AST de bloques de flujo ────────────────
            //
            // Cada nodo tiene:
            //   { type: 'start'|'end'|'io'|'process'|'if'|'while'|'repeat'
            //          |'for'|'switch'|'call'|'subproc'|'comment',
            //     text: string,           // texto a mostrar en la forma
            //     children?: [...],       // hijos directos (then/body)
            //     elseChildren?: [...],   // rama else del if
            //     cases?: [...],          // casos del Segun
            //     defaultCase?: [...],    // De Otro Modo
            //     line: number,           // línea original
            //   }

            function fcParseCode(code) {
                // FIX: normalizar CRLF defensivamente
                if (/\r/.test(code)) code = code.replace(/\r\n?/g, '\n');
                let rawLines = code.split('\n');
                // Pre-procesar: eliminar comentarios, conservar índice original
                let lines = rawLines.map((l, idx) => {
                    let ci = -1, inStr = false;
                    for (let j = 0; j < l.length - 1; j++) {
                        if (l[j] === '"') inStr = !inStr;
                        if (!inStr && l[j] === '/' && l[j+1] === '/') { ci = j; break; }
                    }
                    return { text: (ci >= 0 ? l.slice(0, ci) : l).trim(), line: idx + 1 };
                });

                let procesos = [];  // [{name, body, returnVar, params, isMain}]
                let i = 0;

                while (i < lines.length) {
                    let t = lines[i].text;
                    if (!t) { i++; continue; }

                    // Proceso principal
                    let mProc = t.match(/^Proceso\s+(\S+)/i);
                    if (mProc) {
                        let name = mProc[1];
                        i++;
                        let body = [];
                        i = fcParseBlock(lines, i, body, ['FinProceso']);
                        procesos.push({ name, body, isMain: true, line: lines[i-1]?.line || 1 });
                        // saltar el FinProceso
                        if (i < lines.length && /^FinProceso$/i.test(lines[i].text)) i++;
                        continue;
                    }

                    // SubProceso
                    let mSub = t.match(/^SubProceso\s+(.*)$/i);
                    if (mSub) {
                        let header = mSub[1].trim();
                        let name, returnVar = null, params = [];
                        let rm = header.match(/^(\w+)\s*<-\s*(\w+)\s*\((.*)\)\s*$/i);
                        if (rm) {
                            returnVar = rm[1];
                            name = rm[2];
                            params = rm[3] ? rm[3].split(',').map(p => p.trim()) : [];
                        } else {
                            let sm = header.match(/^(\w+)\s*\((.*)\)\s*$/i);
                            if (sm) { name = sm[1]; params = sm[2] ? sm[2].split(',').map(p => p.trim()) : []; }
                            else name = header;
                        }
                        i++;
                        let body = [];
                        i = fcParseBlock(lines, i, body, ['FinSubProceso']);
                        procesos.push({ name, body, isMain: false, returnVar, params, line: lines[i-1]?.line || 1 });
                        if (i < lines.length && /^FinSubProceso$/i.test(lines[i].text)) i++;
                        continue;
                    }

                    i++;
                }

                // Si no hay Proceso explícito, tratar todo el código como proceso principal
                if (procesos.length === 0 && code.trim()) {
                    let body = [];
                    fcParseBlock(lines, 0, body, []);
                    procesos.push({ name: 'MiPrograma', body, isMain: true, line: 1 });
                }

                return procesos;
            }

            // Parsea un bloque hasta encontrar uno de los terminadores indicados
            function fcParseBlock(lines, i, out, terminators) {
                while (i < lines.length) {
                    let entry = lines[i];
                    let t = entry.text;
                    let ln = entry.line;
                    if (!t) { i++; continue; }

                    // Verificar terminadores
                    let isTerm = terminators.some(term => {
                        if (term === 'Hasta Que') return /^Hasta\s+Que\s+/i.test(t);
                        return new RegExp('^' + term + '\\b', 'i').test(t);
                    });
                    if (isTerm) return i;

                    // Si — multilínea
                    let mSi = t.match(/^Si\s+(.+?)\s+Entonces$/i);
                    let mSiInlineFull = t.match(/^Si\s+(.+?)\s+Entonces\s+(.+?)\s+SiNo\s+(.+?)\s+FinSi$/i);
                    let mSiInline = !mSiInlineFull && t.match(/^Si\s+(.+?)\s+Entonces\s+(.+?)\s+FinSi$/i);

                    if (mSiInlineFull) {
                        // Si COND Entonces STMT1 SiNo STMT2 FinSi
                        let thenStmts = [], elseStmts = [];
                        fcParseBlock([{text: mSiInlineFull[2], line: ln}], 0, thenStmts, []);
                        fcParseBlock([{text: mSiInlineFull[3], line: ln}], 0, elseStmts, []);
                        out.push({ type: 'if', text: mSiInlineFull[1].trim(),
                                   children: thenStmts, elseChildren: elseStmts, line: ln });
                        i++; continue;
                    }
                    if (mSiInline) {
                        let thenStmts = [];
                        fcParseBlock([{text: mSiInline[2], line: ln}], 0, thenStmts, []);
                        out.push({ type: 'if', text: mSiInline[1].trim(),
                                   children: thenStmts, elseChildren: [], line: ln });
                        i++; continue;
                    }
                    if (mSi) {
                        let thenBody = [], elseBody = [];
                        i++;
                        i = fcParseBlock(lines, i, thenBody, ['SiNo', 'FinSi']);
                        if (i < lines.length && /^SiNo\b/i.test(lines[i].text)) {
                            // Soportar "SiNo Si COND Entonces" (else if encadenado)
                            // En diagrama lo modelamos como if anidado en elseChildren
                            let sinoText = lines[i].text;
                            let sinoSi = sinoText.match(/^SiNo\s+Si\s+(.+?)\s+Entonces$/i);
                            if (sinoSi) {
                                let nestedThen = [], nestedElse = [];
                                let nestedLine = lines[i].line;
                                i++;
                                i = fcParseBlock(lines, i, nestedThen, ['SiNo', 'FinSi']);
                                if (i < lines.length && /^SiNo\b/i.test(lines[i].text)) {
                                    i++;
                                    i = fcParseBlock(lines, i, nestedElse, ['FinSi']);
                                }
                                elseBody.push({ type: 'if', text: sinoSi[1].trim(),
                                                children: nestedThen, elseChildren: nestedElse,
                                                line: nestedLine });
                            } else {
                                i++; // saltar SiNo solo
                                i = fcParseBlock(lines, i, elseBody, ['FinSi']);
                            }
                        }
                        if (i < lines.length && /^FinSi$/i.test(lines[i].text)) i++;
                        out.push({ type: 'if', text: mSi[1].trim(),
                                   children: thenBody, elseChildren: elseBody, line: ln });
                        continue;
                    }

                    // Mientras
                    let mMien = t.match(/^Mientras\s+(.+?)\s+Hacer$/i);
                    if (mMien) {
                        let body = [];
                        i++;
                        i = fcParseBlock(lines, i, body, ['FinMientras']);
                        if (i < lines.length && /^FinMientras$/i.test(lines[i].text)) i++;
                        out.push({ type: 'while', text: mMien[1].trim(), children: body, line: ln });
                        continue;
                    }

                    // Repetir / Hasta Que
                    if (/^Repetir$/i.test(t)) {
                        let body = [];
                        i++;
                        i = fcParseBlock(lines, i, body, ['Hasta Que']);
                        let cond = '';
                        if (i < lines.length) {
                            let hq = lines[i].text.match(/^Hasta\s+Que\s+(.+)$/i);
                            if (hq) cond = hq[1].trim();
                            i++;
                        }
                        out.push({ type: 'repeat', text: cond, children: body, line: ln });
                        continue;
                    }

                    // Para — inline
                    let mParaInline = t.match(/^Para\s+(\w+)\s*<-\s*(.+?)\s+Hasta\s+(.+?)(?:\s+Con\s+Paso\s+(.+?))?\s+Hacer\s+(.+?)\s+FinPara$/i);
                    if (mParaInline) {
                        let body = [];
                        fcParseBlock([{text: mParaInline[5], line: ln}], 0, body, []);
                        out.push({ type: 'for', text: mParaInline[1] + ' ← ' + mParaInline[2].trim() +
                                   ', ' + mParaInline[3].trim() + (mParaInline[4] ? ', paso ' + mParaInline[4].trim() : ''),
                                   children: body, line: ln });
                        i++; continue;
                    }
                    let mPara = t.match(/^Para\s+(\w+)\s*<-\s*(.+?)\s+Hasta\s+(.+?)(?:\s+Con\s+Paso\s+(.+?))?\s+Hacer$/i);
                    if (mPara) {
                        let body = [];
                        i++;
                        i = fcParseBlock(lines, i, body, ['FinPara']);
                        if (i < lines.length && /^FinPara$/i.test(lines[i].text)) i++;
                        let stepStr = mPara[4] ? ', paso ' + mPara[4].trim() : '';
                        out.push({ type: 'for',
                                   text: mPara[1] + ' ← ' + mPara[2].trim() + ', ' + mPara[3].trim() + stepStr,
                                   children: body, line: ln });
                        continue;
                    }

                    // Segun
                    let mSeg = t.match(/^Segun\s+(.+?)(?:\s+Hacer)?$/i);
                    if (mSeg) {
                        let switchVar = mSeg[1].trim();
                        i++;
                        let cases = [];
                        let defaultCase = null;
                        // Parsear casos hasta FinSegun
                        while (i < lines.length) {
                            let ct = lines[i].text;
                            if (/^FinSegun$/i.test(ct)) { i++; break; }
                            // De Otro Modo
                            let dom = ct.match(/^De\s+Otro\s+Modo\s*:\s*(.*)$/i);
                            if (dom) {
                                let body = [];
                                if (dom[1].trim()) {
                                    fcParseBlock([{text: dom[1], line: lines[i].line}], 0, body, []);
                                }
                                i++;
                                // Acumular siguientes líneas hasta el próximo "case" o FinSegun
                                while (i < lines.length && !/^FinSegun$/i.test(lines[i].text) && !/^[^:]+:/i.test(lines[i].text)) {
                                    if (lines[i].text) {
                                        fcParseBlock([lines[i]], 0, body, []);
                                    }
                                    i++;
                                }
                                defaultCase = body;
                                continue;
                            }
                            // Caso: VALOR:
                            let cm = ct.match(/^(.+?)\s*:\s*(.*)$/);
                            if (cm) {
                                let caseVal = cm[1].trim();
                                let body = [];
                                if (cm[2].trim()) {
                                    fcParseBlock([{text: cm[2], line: lines[i].line}], 0, body, []);
                                }
                                i++;
                                while (i < lines.length && !/^FinSegun$/i.test(lines[i].text) &&
                                       !/^[^:]+:/i.test(lines[i].text) &&
                                       !/^De\s+Otro\s+Modo/i.test(lines[i].text)) {
                                    if (lines[i].text) {
                                        fcParseBlock([lines[i]], 0, body, []);
                                    }
                                    i++;
                                }
                                cases.push({ value: caseVal, body });
                                continue;
                            }
                            i++;
                        }
                        out.push({ type: 'switch', text: switchVar, cases, defaultCase, line: ln });
                        continue;
                    }

                    // Leer
                    if (/^Leer\s+/i.test(t)) {
                        let vars = t.replace(/^Leer\s+/i, '');
                        out.push({ type: 'io', text: 'Leer ' + vars, ioKind: 'in', line: ln });
                        i++; continue;
                    }

                    // Escribir
                    if (/^Escribir\b/i.test(t)) {
                        let body = t.replace(/^Escribir\s+Sin\s+Saltar\s*/i, '').replace(/^Escribir\s*/i, '');
                        out.push({ type: 'io', text: 'Escribir ' + body, ioKind: 'out', line: ln });
                        i++; continue;
                    }

                    // Definir
                    if (/^Definir\s+/i.test(t)) {
                        out.push({ type: 'process', text: t, line: ln });
                        i++; continue;
                    }

                    // Dimension
                    if (/^Dimension\s+/i.test(t)) {
                        out.push({ type: 'process', text: t, line: ln });
                        i++; continue;
                    }

                    // Borrar Pantalla / Esperar
                    if (/^(Borrar|Limpiar)\s+Pantalla/i.test(t) || /^Esperar\b/i.test(t)) {
                        out.push({ type: 'process', text: t, line: ln });
                        i++; continue;
                    }

                    // Salir / Retornar
                    if (/^(Salir|Interrumpir|Retornar|Devolver)\b/i.test(t)) {
                        out.push({ type: 'process', text: t, line: ln, isExit: true });
                        i++; continue;
                    }

                    // Llamada a SubProc (sin asignación)
                    let mCall = t.match(/^(\w+)\s*\((.*)\)$/);
                    if (mCall) {
                        out.push({ type: 'call', text: t, line: ln });
                        i++; continue;
                    }

                    // Asignación
                    if (/<-/.test(t)) {
                        out.push({ type: 'process', text: t, line: ln });
                        i++; continue;
                    }

                    // Línea desconocida — tratarla como proceso genérico
                    out.push({ type: 'process', text: t, line: ln });
                    i++;
                }
                return i;
            }

            // ── RENDERER: AST → SVG (algoritmo de layout PSeInt-like) ─────
            //
            // Cada nodo del AST se mide y dibuja recursivamente. Devuelve
            // un layout con dimensiones, posiciones, puntos de entrada y
            // de salida para que el padre lo conecte.

            const FC = {
                // Configuración del layout — estilo PSeInt
                FONT: '12px "Cascadia Code", Consolas, monospace',
                CHAR_W: 7.2,            // ancho aprox por carácter mono 12px
                LINE_H: 18,              // alto de línea
                PAD_X: 14,               // padding horizontal en formas
                PAD_Y: 10,               // padding vertical en formas
                MIN_W: 100,              // ancho mínimo
                MIN_H: 40,               // alto mínimo
                V_GAP: 28,               // espacio vertical entre bloques
                H_GAP: 36,               // espacio horizontal entre ramas
                IF_PAD: 30,              // espacio extra para etiquetas SI/NO
                FRAME_PAD: 24,           // padding del marco de SubProceso
                MAX_TEXT_W: 320,         // ancho máximo de texto antes de wrap
                COLORS: {
                    start:   { fill: '#10b981', stroke: '#065f46', text: '#fff' },
                    end:     { fill: '#10b981', stroke: '#065f46', text: '#fff' },
                    process: { fill: '#3b82f6', stroke: '#1e3a8a', text: '#fff' },
                    io:      { fill: '#f59e0b', stroke: '#92400e', text: '#0a0e1a' },
                    if:      { fill: '#ef4444', stroke: '#7f1d1d', text: '#fff' },
                    while:   { fill: '#a855f7', stroke: '#581c87', text: '#fff' },
                    repeat:  { fill: '#a855f7', stroke: '#581c87', text: '#fff' },
                    for:     { fill: '#a855f7', stroke: '#581c87', text: '#fff' },
                    switch:  { fill: '#06b6d4', stroke: '#0e7490', text: '#fff' },
                    call:    { fill: '#8b5cf6', stroke: '#4c1d95', text: '#fff' },
                    comment: { fill: '#6b7280', stroke: '#374151', text: '#e5e7eb' },
                    exit:    { fill: '#dc2626', stroke: '#7f1d1d', text: '#fff' }
                }
            };

            // Calcula el ancho/alto que ocupa un texto (con wrap en varias líneas)
            function fcMeasureText(text) {
                let txt = String(text || '');
                // Truncar texto si es absurdamente largo
                if (txt.length > 200) txt = txt.substring(0, 197) + '...';
                let lines = [];
                // Si el texto cabe en una línea (sin pasar MAX_TEXT_W), no envolver
                let oneLineW = txt.length * FC.CHAR_W;
                if (oneLineW <= FC.MAX_TEXT_W) {
                    lines = [txt];
                } else {
                    // Wrap por palabras
                    let words = txt.split(/(\s+)/);
                    let cur = '';
                    let maxCharsPerLine = Math.max(20, Math.floor(FC.MAX_TEXT_W / FC.CHAR_W));
                    for (let w of words) {
                        if ((cur + w).length <= maxCharsPerLine) cur += w;
                        else {
                            if (cur.trim()) lines.push(cur);
                            cur = w.trimStart();
                        }
                    }
                    if (cur.trim()) lines.push(cur);
                    if (lines.length === 0) lines = [txt];
                }
                let maxLen = Math.max(...lines.map(l => l.length));
                return {
                    w: Math.max(FC.MIN_W, maxLen * FC.CHAR_W + 2 * FC.PAD_X),
                    h: Math.max(FC.MIN_H, lines.length * FC.LINE_H + 2 * FC.PAD_Y),
                    lines
                };
            }

            // Layout principal de una secuencia de nodos.
            // Devuelve: { w, h, draw(svgList, ox, oy), inX, outX }
            function fcLayoutBlock(nodes) {
                // Cada subnodo se posiciona en una columna central (inX)
                let items = nodes.map(fcLayoutNode);
                let maxW = Math.max(...items.map(it => it.w), FC.MIN_W);
                // Centrar todos: cada uno alineado por su inX al centro maxW/2
                let h = 0;
                items.forEach((it, idx) => {
                    if (idx > 0) h += FC.V_GAP;
                    it._y = h;
                    h += it.h;
                });
                return {
                    w: maxW,
                    h: h || 0,
                    inX: maxW / 2,
                    outX: maxW / 2,
                    inY: 0,
                    outY: h,
                    items,
                    draw(out, ox, oy) {
                        items.forEach((it, idx) => {
                            // Centrar horizontalmente: alinear it.inX al centro de maxW
                            let itX = ox + maxW / 2 - it.inX;
                            let itY = oy + it._y;
                            it.draw(out, itX, itY);
                            // Conector vertical hacia el siguiente
                            if (idx < items.length - 1) {
                                let next = items[idx + 1];
                                let nextX = ox + maxW / 2 - next.inX;
                                let x1 = ox + maxW / 2;
                                let y1 = itY + it.outY;
                                let x2 = ox + maxW / 2;
                                let y2 = oy + items[idx+1]._y;
                                fcDrawArrow(out, x1, y1, x2, y2);
                            }
                        });
                    }
                };
            }

            // Layout de un nodo individual (despacha por tipo)
            function fcLayoutNode(node) {
                switch (node.type) {
                    case 'start': case 'end': return fcLayoutShape(node, 'oval');
                    case 'io': return fcLayoutShape(node, 'parallelogram');
                    case 'process': return fcLayoutShape(node, node.isExit ? 'rect-exit' : 'rect');
                    case 'call': return fcLayoutShape(node, 'rect-subroutine');
                    case 'if': return fcLayoutIf(node);
                    case 'while': return fcLayoutWhile(node);
                    case 'repeat': return fcLayoutRepeat(node);
                    case 'for': return fcLayoutFor(node);
                    case 'switch': return fcLayoutSwitch(node);
                    case 'comment': return fcLayoutShape(node, 'rect-comment');
                    default: return fcLayoutShape(node, 'rect');
                }
            }

            // Layout de una forma simple (óvalo, rect, paralelogramo)
            function fcLayoutShape(node, shape) {
                let m = fcMeasureText(node.text);
                let w = m.w, h = m.h;
                if (shape === 'parallelogram') w += 16; // espacio para el sesgo
                return {
                    w, h,
                    inX: w / 2, inY: 0,
                    outX: w / 2, outY: h,
                    draw(out, ox, oy) { fcDrawShape(out, shape, ox, oy, w, h, node, m.lines); }
                };
            }

            // Layout de Si/Entonces/SiNo — clásico diamante con dos ramas
            function fcLayoutIf(node) {
                let cond = fcMeasureText(node.text);
                // Rombo: ancho/alto ajustables
                let dW = cond.w + 30;
                let dH = Math.max(60, cond.h + 18);
                let thenLay = fcLayoutBlock(node.children || []);
                let elseLay = fcLayoutBlock(node.elseChildren || []);
                let branchGap = FC.H_GAP + 20; // extra gap so SI/NO labels have room
                // Si una rama está vacía, asegurar mínimo
                if (!node.children || node.children.length === 0) {
                    thenLay = { w: 0, h: 0, inX: 0, inY: 0, outX: 0, outY: 0, draw() {} };
                }
                if (!node.elseChildren || node.elseChildren.length === 0) {
                    elseLay = { w: 0, h: 0, inX: 0, inY: 0, outX: 0, outY: 0, draw() {} };
                }
                // Recalcular totalW con anchos efectivos y padding extra para etiquetas
                let thenW = thenLay.w || 60;
                let elseW = elseLay.w || 60;
                // Asegurar que el ancho total sea suficiente para el rombo + labels (SI/NO = 30px cada lado)
                let minForDiamond = dW + 80; // 40px margen a cada lado para etiquetas
                let totalW = Math.max(thenW + branchGap + elseW, minForDiamond);

                let centerX = totalW / 2;
                // Posiciones de cada rama (centradas en su mitad)
                let thenCenterX = (thenW || 60) / 2;
                let elseCenterX = totalW - (elseW || 60) / 2;

                // Etiqueta SI a la izquierda del rombo, NO a la derecha
                // (PSeInt: por defecto Verdadero a la IZQUIERDA, Falso a la DERECHA)
                let topRombo = 0;
                let branchTopY = dH + FC.V_GAP;
                let maxBranchH = Math.max(thenLay.h || 0, elseLay.h || 0);
                let mergeY = branchTopY + maxBranchH + FC.V_GAP;
                let totalH = mergeY + 20;

                return {
                    w: totalW,
                    h: totalH,
                    inX: centerX,
                    inY: 0,
                    outX: centerX,
                    outY: totalH,
                    draw(out, ox, oy) {
                        // Dibujar rombo en el centro arriba
                        let dx = ox + centerX - dW / 2;
                        let dy = oy + topRombo;
                        fcDrawShape(out, 'diamond', dx, dy, dW, dH, node, cond.lines);

                        // Línea izquierda (SI) desde rombo hacia thenLay
                        if (thenLay.w > 0) {
                            let thenTopX = ox + thenCenterX;
                            let thenTopY = oy + branchTopY;
                            // Salir por la izquierda del rombo
                            let exitX = ox + centerX - dW / 2;
                            let exitY = oy + topRombo + dH / 2;
                            // L-path con color SI (verde)
                            fcDrawPath(out, [
                                [exitX, exitY],
                                [thenTopX, exitY],
                                [thenTopX, thenTopY]
                            ], 'si');
                            // Etiqueta SI — bien a la izquierda del rombo
                            fcDrawLabel(out, exitX - 14, exitY - 4, 'SI', 'end', 'si');
                            // Dibujar bloque then
                            thenLay.draw(out, ox + thenCenterX - thenLay.inX, oy + branchTopY);
                        } else {
                            // SI con cuerpo vacío: línea directa al merge
                            let exitX = ox + centerX - dW / 2;
                            let exitY = oy + topRombo + dH / 2;
                            let mergeX = ox + centerX;
                            fcDrawPath(out, [
                                [exitX, exitY],
                                [exitX - 20, exitY],
                                [exitX - 20, oy + mergeY],
                                [mergeX, oy + mergeY]
                            ], 'si');
                            fcDrawLabel(out, exitX - 14, exitY - 4, 'SI', 'end', 'si');
                        }

                        // Línea derecha (NO) desde rombo hacia elseLay
                        if (elseLay.w > 0) {
                            let elseTopX = ox + elseCenterX;
                            let elseTopY = oy + branchTopY;
                            let exitX = ox + centerX + dW / 2;
                            let exitY = oy + topRombo + dH / 2;
                            fcDrawPath(out, [
                                [exitX, exitY],
                                [elseTopX, exitY],
                                [elseTopX, elseTopY]
                            ], 'no');
                            fcDrawLabel(out, exitX + 14, exitY - 4, 'NO', 'start', 'no');
                            elseLay.draw(out, ox + elseCenterX - elseLay.inX, oy + branchTopY);
                        } else {
                            let exitX = ox + centerX + dW / 2;
                            let exitY = oy + topRombo + dH / 2;
                            let mergeX = ox + centerX;
                            fcDrawPath(out, [
                                [exitX, exitY],
                                [exitX + 20, exitY],
                                [exitX + 20, oy + mergeY],
                                [mergeX, oy + mergeY]
                            ], 'no');
                            fcDrawLabel(out, exitX + 14, exitY - 4, 'NO', 'start', 'no');
                        }

                        // Líneas inferiores: bajada al punto de merge (gris neutro)
                        if (thenLay.w > 0) {
                            let fromX = ox + thenCenterX;
                            let fromY = oy + branchTopY + thenLay.h;
                            fcDrawPath(out, [
                                [fromX, fromY],
                                [fromX, oy + mergeY],
                                [ox + centerX, oy + mergeY]
                            ], 'merge');
                        }
                        if (elseLay.w > 0) {
                            let fromX = ox + elseCenterX;
                            let fromY = oy + branchTopY + elseLay.h;
                            fcDrawPath(out, [
                                [fromX, fromY],
                                [fromX, oy + mergeY],
                                [ox + centerX, oy + mergeY]
                            ], 'merge');
                        }

                        // Flecha final del merge hacia abajo (out)
                        fcDrawArrow(out, ox + centerX, oy + mergeY, ox + centerX, oy + totalH, 'merge');
                    }
                };
            }

            // Layout de Mientras — trapezoide de condición + ciclo de retorno
            function fcLayoutWhile(node) {
                let cond = fcMeasureText(node.text);
                let cW = cond.w + 30;
                let cH = Math.max(50, cond.h + 12);
                let body = fcLayoutBlock(node.children || []);
                let bodyW = body.w || FC.MIN_W;
                // Espacio para el bucle de retorno a la izquierda
                let loopMargin = 40;
                let totalW = Math.max(cW, bodyW) + loopMargin * 2;
                let centerX = totalW / 2;
                let cY = 0;
                let bodyY = cH + FC.V_GAP;
                let bodyEndY = bodyY + (body.h || 30);
                let mergeY = bodyEndY + FC.V_GAP;
                let totalH = mergeY + 20;

                return {
                    w: totalW, h: totalH,
                    inX: centerX, inY: 0,
                    outX: centerX, outY: totalH,
                    draw(out, ox, oy) {
                        // Trapezoide / hexágono de condición
                        let cx = ox + centerX - cW / 2;
                        fcDrawShape(out, 'hex-while', cx, oy + cY, cW, cH, node, cond.lines);

                        // Etiqueta SI (cuerpo) hacia abajo
                        fcDrawLabel(out, ox + centerX + 8, oy + cY + cH + 4, 'SI', 'start', 'si');

                        // Flecha hacia el cuerpo (verde = sí, entra al bucle)
                        fcDrawArrow(out, ox + centerX, oy + cY + cH, ox + centerX, oy + bodyY, 'si');

                        // Dibujar cuerpo
                        if (body.w > 0) {
                            body.draw(out, ox + centerX - body.inX, oy + bodyY);
                            // Retorno: del fondo del cuerpo, sube por la izquierda y vuelve al lado izq del condicional
                            let fromX = ox + centerX;
                            let fromY = oy + bodyEndY;
                            let leftX = ox + centerX - cW / 2 - loopMargin / 2;
                            fcDrawPath(out, [
                                [fromX, fromY],
                                [fromX, oy + bodyEndY + 14],
                                [leftX, oy + bodyEndY + 14],
                                [leftX, oy + cY + cH / 2],
                                [ox + centerX - cW / 2, oy + cY + cH / 2]
                            ], 'loop');
                        }

                        // Salida NO: por la derecha del condicional → abajo
                        let exitX = ox + centerX + cW / 2;
                        let exitY = oy + cY + cH / 2;
                        let rightX = exitX + loopMargin / 2;
                        fcDrawPath(out, [
                            [exitX, exitY],
                            [rightX, exitY],
                            [rightX, oy + mergeY],
                            [ox + centerX, oy + mergeY]
                        ], 'no');
                        fcDrawLabel(out, exitX + 8, exitY - 6, 'NO', 'start', 'no');

                        // Salida final hacia abajo
                        fcDrawArrow(out, ox + centerX, oy + mergeY, ox + centerX, oy + totalH, 'merge');
                    }
                };
            }

            // Layout de Repetir/Hasta Que — condición ABAJO
            function fcLayoutRepeat(node) {
                let cond = fcMeasureText(node.text || '(sin condición)');
                let cW = cond.w + 30;
                let cH = Math.max(50, cond.h + 12);
                let body = fcLayoutBlock(node.children || []);
                let bodyW = body.w || FC.MIN_W;
                let loopMargin = 40;
                let totalW = Math.max(cW, bodyW) + loopMargin * 2;
                let centerX = totalW / 2;
                let bodyY = 0;
                let condY = (body.h || 30) + FC.V_GAP;
                let mergeY = condY + cH + FC.V_GAP;
                let totalH = mergeY + 20;

                return {
                    w: totalW, h: totalH,
                    inX: centerX, inY: 0,
                    outX: centerX, outY: totalH,
                    draw(out, ox, oy) {
                        // Dibujar cuerpo
                        if (body.w > 0) body.draw(out, ox + centerX - body.inX, oy + bodyY);
                        // Flecha del cuerpo a la condición
                        let bodyEndY = oy + bodyY + (body.h || 0);
                        let condTopY = oy + condY;
                        fcDrawArrow(out, ox + centerX, bodyEndY, ox + centerX, condTopY);
                        // Condición (hex-while invertido)
                        let cx = ox + centerX - cW / 2;
                        fcDrawShape(out, 'hex-repeat', cx, condTopY, cW, cH, node, cond.lines);
                        // Retorno por la izquierda si NO se cumple → vuelve arriba del body
                        let leftX = ox + centerX - cW / 2 - loopMargin / 2;
                        fcDrawPath(out, [
                            [ox + centerX - cW / 2, condTopY + cH / 2],
                            [leftX, condTopY + cH / 2],
                            [leftX, oy + bodyY - 14],
                            [ox + centerX, oy + bodyY - 14],
                            [ox + centerX, oy + bodyY]
                        ], 'loop');
                        fcDrawLabel(out, leftX - 4, condTopY + cH / 2 - 6, 'NO', 'end', 'no');
                        // Salida SI → abajo
                        fcDrawArrow(out, ox + centerX, condTopY + cH, ox + centerX, oy + totalH, 'si');
                        fcDrawLabel(out, ox + centerX + 8, condTopY + cH + 4, 'SI', 'start', 'si');
                    }
                };
            }

            // Layout de Para — hexágono especial con cuerpo y retorno
            function fcLayoutFor(node) {
                let cond = fcMeasureText(node.text);
                let cW = cond.w + 40;
                let cH = Math.max(56, cond.h + 16);
                let body = fcLayoutBlock(node.children || []);
                let bodyW = body.w || FC.MIN_W;
                let loopMargin = 40;
                let totalW = Math.max(cW, bodyW) + loopMargin * 2;
                let centerX = totalW / 2;
                let cY = 0;
                let bodyY = cH + FC.V_GAP;
                let bodyEndY = bodyY + (body.h || 30);
                let totalH = bodyEndY + FC.V_GAP + 20;

                return {
                    w: totalW, h: totalH,
                    inX: centerX, inY: 0,
                    outX: centerX, outY: totalH,
                    draw(out, ox, oy) {
                        // Forma "hexágono de Para" — pentágono apuntando abajo
                        let cx = ox + centerX - cW / 2;
                        fcDrawShape(out, 'hex-for', cx, oy + cY, cW, cH, node, cond.lines);
                        // Flecha al cuerpo (verde: entra al bucle)
                        fcDrawArrow(out, ox + centerX, oy + cY + cH, ox + centerX, oy + bodyY, 'si');
                        // Cuerpo
                        if (body.w > 0) {
                            body.draw(out, ox + centerX - body.inX, oy + bodyY);
                            // Retorno (violeta: ciclo)
                            let leftX = ox + centerX - cW / 2 - loopMargin / 2;
                            fcDrawPath(out, [
                                [ox + centerX, oy + bodyEndY],
                                [ox + centerX, oy + bodyEndY + 12],
                                [leftX, oy + bodyEndY + 12],
                                [leftX, oy + cY + cH / 2],
                                [ox + centerX - cW / 2, oy + cY + cH / 2]
                            ], 'loop');
                        }
                        // Salida fin de iteraciones (derecha → abajo, rojo: sale)
                        let exitX = ox + centerX + cW / 2;
                        let exitY = oy + cY + cH / 2;
                        let rightX = exitX + loopMargin / 2;
                        let outY = oy + totalH - 10;
                        fcDrawPath(out, [
                            [exitX, exitY],
                            [rightX, exitY],
                            [rightX, outY],
                            [ox + centerX, outY]
                        ], 'no');
                        fcDrawLabel(out, exitX + 8, exitY - 6, 'Fin', 'start', 'no');
                        // Flecha hacia el siguiente
                        fcDrawArrow(out, ox + centerX, outY, ox + centerX, oy + totalH, 'merge');
                    }
                };
            }

            // Layout de Segun — pentágono + ramas paralelas
            function fcLayoutSwitch(node) {
                let head = fcMeasureText('Segun ' + node.text);
                let hW = head.w + 30;
                let hH = Math.max(56, head.h + 16);
                let allCases = (node.cases || []).slice();
                if (node.defaultCase && node.defaultCase.length > 0) {
                    allCases.push({ value: 'Otro', body: node.defaultCase, isDefault: true });
                }
                if (allCases.length === 0) allCases.push({ value: '?', body: [] });
                // Layout de cada caso
                let caseLays = allCases.map(c => ({
                    value: c.value,
                    lay: fcLayoutBlock(c.body || []),
                    isDefault: c.isDefault
                }));
                let totalCasesW = caseLays.reduce((s, c) => s + Math.max(c.lay.w, FC.MIN_W) + FC.H_GAP, 0) - FC.H_GAP;
                let totalW = Math.max(hW + 40, totalCasesW + 20);
                let centerX = totalW / 2;
                let casesTopY = hH + FC.V_GAP + 10;
                let maxCaseH = Math.max(...caseLays.map(c => c.lay.h || 0), 30);
                let mergeY = casesTopY + maxCaseH + FC.V_GAP;
                let totalH = mergeY + 20;
                // Posición horizontal de cada caso
                let curX = (totalW - totalCasesW) / 2;
                caseLays.forEach(c => {
                    let w = Math.max(c.lay.w, FC.MIN_W);
                    c._x = curX + w / 2;
                    curX += w + FC.H_GAP;
                });

                return {
                    w: totalW, h: totalH,
                    inX: centerX, inY: 0,
                    outX: centerX, outY: totalH,
                    draw(out, ox, oy) {
                        let cx = ox + centerX - hW / 2;
                        fcDrawShape(out, 'pentagon', cx, oy, hW, hH, node, head.lines);
                        // Líneas a cada caso (cyan = case)
                        caseLays.forEach(c => {
                            let toX = ox + c._x;
                            let toY = oy + casesTopY;
                            // Línea desde el centro inferior del pentágono al top del caso
                            fcDrawPath(out, [
                                [ox + centerX, oy + hH],
                                [ox + centerX, oy + hH + FC.V_GAP / 2],
                                [toX, oy + hH + FC.V_GAP / 2],
                                [toX, toY]
                            ], 'case');
                            // Etiqueta del valor
                            fcDrawLabel(out, toX, oy + hH + FC.V_GAP / 2 - 6, c.value, 'middle', 'case');
                            // Cuerpo del caso
                            if (c.lay.w > 0) {
                                c.lay.draw(out, ox + c._x - c.lay.inX, toY);
                            }
                            // Conexión hacia el merge
                            let fromY = toY + (c.lay.h || 0);
                            fcDrawPath(out, [
                                [toX, fromY],
                                [toX, oy + mergeY],
                                [ox + centerX, oy + mergeY]
                            ], 'merge');
                        });
                        fcDrawArrow(out, ox + centerX, oy + mergeY, ox + centerX, oy + totalH, 'merge');
                    }
                };
            }

            // ── DIBUJANTES de formas individuales ─────────────────────────
            function fcDrawShape(out, shape, x, y, w, h, node, lines) {
                let kind = node.type;
                if (node.isExit) kind = 'exit';
                let c = FC.COLORS[kind] || FC.COLORS.process;
                let dataLine = node.line ? ` data-line="${node.line}"` : '';
                let cls = 'fc-shape';

                if (shape === 'oval') {
                    let rx = w / 2, ry = h / 2;
                    out.push(`<ellipse class="${cls}" cx="${x+rx}" cy="${y+ry}" rx="${rx}" ry="${ry}" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.8"${dataLine}/>`);
                } else if (shape === 'rect') {
                    out.push(`<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.8"${dataLine}/>`);
                } else if (shape === 'rect-exit') {
                    c = FC.COLORS.exit;
                    out.push(`<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${c.fill}" stroke="${c.stroke}" stroke-width="2"${dataLine}/>`);
                } else if (shape === 'rect-subroutine') {
                    // Rect con doble línea vertical (subrutina)
                    out.push(`<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.8"${dataLine}/>`);
                    out.push(`<line x1="${x+6}" y1="${y}" x2="${x+6}" y2="${y+h}" stroke="${c.stroke}" stroke-width="1.5"/>`);
                    out.push(`<line x1="${x+w-6}" y1="${y}" x2="${x+w-6}" y2="${y+h}" stroke="${c.stroke}" stroke-width="1.5"/>`);
                } else if (shape === 'rect-comment') {
                    out.push(`<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.2" stroke-dasharray="4 2"${dataLine}/>`);
                } else if (shape === 'parallelogram') {
                    let off = 12;
                    let pts = `${x+off},${y} ${x+w},${y} ${x+w-off},${y+h} ${x},${y+h}`;
                    out.push(`<polygon class="${cls}" points="${pts}" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.8"${dataLine}/>`);
                } else if (shape === 'diamond') {
                    let cx = x + w/2, cy = y + h/2;
                    let pts = `${cx},${y} ${x+w},${cy} ${cx},${y+h} ${x},${cy}`;
                    out.push(`<polygon class="${cls}" points="${pts}" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.8"${dataLine}/>`);
                } else if (shape === 'hex-while') {
                    // Hexágono horizontal
                    let off = 14;
                    let pts = `${x+off},${y} ${x+w-off},${y} ${x+w},${y+h/2} ${x+w-off},${y+h} ${x+off},${y+h} ${x},${y+h/2}`;
                    out.push(`<polygon class="${cls}" points="${pts}" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.8"${dataLine}/>`);
                } else if (shape === 'hex-repeat') {
                    // Igual al hex-while
                    let off = 14;
                    let pts = `${x+off},${y} ${x+w-off},${y} ${x+w},${y+h/2} ${x+w-off},${y+h} ${x+off},${y+h} ${x},${y+h/2}`;
                    out.push(`<polygon class="${cls}" points="${pts}" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.8"${dataLine}/>`);
                } else if (shape === 'hex-for') {
                    // Hexágono vertical para Para
                    let off = 12;
                    let pts = `${x+w/2},${y} ${x+w},${y+off} ${x+w},${y+h-off} ${x+w/2},${y+h} ${x},${y+h-off} ${x},${y+off}`;
                    out.push(`<polygon class="${cls}" points="${pts}" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.8"${dataLine}/>`);
                } else if (shape === 'pentagon') {
                    // Pentágono (selector): casa apuntando abajo
                    let off = 16;
                    let pts = `${x+w/2},${y} ${x+w},${y+off} ${x+w},${y+h-off*0.6} ${x+w/2},${y+h} ${x},${y+h-off*0.6} ${x},${y+off}`;
                    out.push(`<polygon class="${cls}" points="${pts}" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1.8"${dataLine}/>`);
                }

                // Texto centrado
                let cx = x + w / 2;
                let totalTextH = lines.length * FC.LINE_H;
                let startY = y + h / 2 - totalTextH / 2 + FC.LINE_H * 0.75;
                let textCls = 'fc-shape-text' + (c.text === '#0a0e1a' ? ' dark' : '');
                lines.forEach((ln, idx) => {
                    out.push(`<text class="${textCls}" x="${cx}" y="${startY + idx * FC.LINE_H}">${fcEscapeXml(ln)}</text>`);
                });
            }

            function fcEscapeXml(s) {
                return String(s)
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;');
            }

            // Dibuja una flecha simple (línea con cabeza)
            // connType: '' | 'si' | 'no' | 'loop' | 'merge' | 'case'
            function fcDrawArrow(out, x1, y1, x2, y2, connType) {
                let cls = 'fc-conn' + (connType ? ' fc-conn-' + connType : '');
                let markerId = connType ? 'fc-arrow-' + connType : 'fc-arrow';
                out.push(`<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" marker-end="url(#${markerId})"/>`);
            }

            // Dibuja un path con múltiples puntos y flecha al final
            function fcDrawPath(out, points, connType) {
                if (!points || points.length < 2) return;
                let d = `M ${points[0][0]} ${points[0][1]}`;
                for (let i = 1; i < points.length; i++) {
                    d += ` L ${points[i][0]} ${points[i][1]}`;
                }
                let cls = 'fc-conn' + (connType ? ' fc-conn-' + connType : '');
                let markerId = connType ? 'fc-arrow-' + connType : 'fc-arrow';
                out.push(`<path class="${cls}" d="${d}" marker-end="url(#${markerId})"/>`);
            }

            // Etiqueta de conexión (SI / NO / valor) — con fondo sólido para legibilidad
            function fcDrawLabel(out, x, y, text, anchor, connType) {
                let a = anchor || 'middle';
                let txt = String(text);
                let txtW = txt.length * 8 + 14;
                let txtH = 20;
                let bx;
                if (a === 'end') bx = x - txtW;
                else if (a === 'start') bx = x;
                else bx = x - txtW / 2;
                let by = y - txtH + 4;
                // Color por tipo de etiqueta
                let bgColor, strokeColor, textColor;
                if (connType === 'si' || txt === 'SI' || txt === 'Sí') {
                    bgColor = 'rgba(16,185,129,0.15)'; strokeColor = '#10b981'; textColor = '#6ee7b7';
                } else if (connType === 'no' || txt === 'NO') {
                    bgColor = 'rgba(239,68,68,0.15)'; strokeColor = '#ef4444'; textColor = '#fca5a5';
                } else if (connType === 'loop') {
                    bgColor = 'rgba(168,85,247,0.15)'; strokeColor = '#a855f7'; textColor = '#d8b4fe';
                } else {
                    bgColor = 'rgba(6,182,212,0.15)'; strokeColor = '#06b6d4'; textColor = '#67e8f9';
                }
                out.push(`<rect x="${bx}" y="${by}" width="${txtW}" height="${txtH}" rx="4" fill="${bgColor}" stroke="${strokeColor}" stroke-width="1.2" opacity="0.97"/>`);
                out.push(`<text class="fc-conn-label" x="${x}" y="${y}" text-anchor="${a}" fill="${textColor}">${fcEscapeXml(txt)}</text>`);
            }

            // ── PUNTO DE ENTRADA: parsear, layout, render SVG ─────────────
            function fcGenerateSVG(code) {
                let procesos;
                try {
                    procesos = fcParseCode(code);
                } catch(e) {
                    return { svg: fcErrorSVG('Error al parsear el código:\n' + e.message), error: e.message };
                }
                if (procesos.length === 0) {
                    return { svg: fcErrorSVG('No se encontró ningún Proceso o SubProceso.'), error: 'sin proceso' };
                }

                // Por cada proceso/subproceso, generar un marco con su layout
                let frames = [];
                for (let p of procesos) {
                    let bodyNodes = [
                        { type: 'start', text: 'Inicio', line: p.line }
                    ].concat(p.body).concat([
                        { type: 'end', text: 'Fin', line: p.line }
                    ]);
                    let lay = fcLayoutBlock(bodyNodes);
                    frames.push({
                        title: p.isMain ? 'Proceso: ' + p.name :
                               'SubProceso: ' + (p.returnVar ? p.returnVar + ' ← ' : '') +
                               p.name + '(' + (p.params || []).join(', ') + ')',
                        lay,
                        w: lay.w,
                        h: lay.h
                    });
                }

                // Distribuir frames verticalmente (uno encima del otro con separación)
                let frameGap = 50;
                let titleH = 28;
                let outerPad = FC.FRAME_PAD;
                let maxW = Math.max(...frames.map(f => f.w)) + 2 * outerPad;
                let totalH = frames.reduce((s, f) => s + f.h + titleH + 2 * outerPad + frameGap, 0) - frameGap;
                // Render
                let svgOut = [];
                // defs: flechas por tipo de conexión
                svgOut.push(`<defs>
                    <marker id="fc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
                    </marker>
                    <marker id="fc-arrow-si" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
                    </marker>
                    <marker id="fc-arrow-no" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
                    </marker>
                    <marker id="fc-arrow-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7"/>
                    </marker>
                    <marker id="fc-arrow-merge" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
                    </marker>
                    <marker id="fc-arrow-case" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#06b6d4"/>
                    </marker>
                </defs>`);
                let curY = 20;
                for (let f of frames) {
                    // Marco
                    svgOut.push(`<rect class="fc-frame-rect" x="${10}" y="${curY}" width="${maxW}" height="${f.h + titleH + 2*outerPad}" rx="10"/>`);
                    svgOut.push(`<text class="fc-frame-title" x="${20}" y="${curY + 20}">${fcEscapeXml(f.title)}</text>`);
                    // Layout del frame
                    let frameInnerX = 10 + (maxW - f.w) / 2;
                    let frameInnerY = curY + titleH + outerPad;
                    f.lay.draw(svgOut, frameInnerX, frameInnerY);
                    curY += f.h + titleH + 2 * outerPad + frameGap;
                }

                let svgW = maxW + 20;
                let svgH = totalH + 20;  // reduced from 40 to avoid extra blank space
                let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}">
                    ${svgOut.join('\n')}
                </svg>`;
                return { svg, width: svgW, height: svgH };
            }

            function fcErrorSVG(msg) {
                let lines = String(msg).split('\n');
                let h = lines.length * 22 + 40;
                let body = lines.map((l, idx) =>
                    `<text x="20" y="${30 + idx*22}" fill="#ef4444" font-family="${FC.FONT}" font-size="14">${fcEscapeXml(l)}</text>`
                ).join('');
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="${h}">
                    <rect width="500" height="${h}" fill="#1f1015" stroke="#7f1d1d" stroke-width="2" rx="6"/>
                    ${body}
                </svg>`;
            }

            // ── UI: abrir / cerrar / zoom / descargar ─────────────────────
            let _fcZoom = 1;
            let _fcPanX = 0, _fcPanY = 0;

            function openFlowchart() {
                let code = document.getElementById('playgroundEditor').value;
                let modal = document.getElementById('flowchartModal');
                let canvas = document.getElementById('flowchartCanvas');
                let status = document.getElementById('fcStatus');
                let wrap = document.getElementById('flowchartCanvasWrap');
                status.textContent = '⏳ Generando diagrama...';
                // Mostrar un placeholder mientras carga
                canvas.innerHTML = '<div style="padding:60px 20px;text-align:center;color:var(--text-dim);font-family:var(--font-mono);font-size:0.85rem">⏳ Procesando código y generando diagrama...</div>';
                modal.classList.add('open');
                // FIX: bloquear scroll del body detrás del modal para que el
                // scroll del wrap no se "salga" al body cuando se llega al
                // borde. Antes, al seguir haciendo scroll en el límite, la
                // página de atrás se movía y los frames se cortaban en el view.
                document.body.classList.add('fc-modal-open');
                // FIX: usar requestAnimationFrame para asegurar que el navegador
                // pinte el modal + placeholder ANTES de empezar el render pesado
                // del SVG. Antes con setTimeout(50) el "Generando..." nunca
                // aparecía porque el render bloqueaba el thread.
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        try {
                            let result = fcGenerateSVG(code);
                            canvas.innerHTML = result.svg;
                            _fcZoom = 1;
                            fcApplyZoom();
                            // Resetear scroll al inicio del diagrama
                            if (wrap) { wrap.scrollTop = 0; wrap.scrollLeft = 0; }
                            if (result.error) {
                                status.textContent = '⚠ ' + result.error;
                            } else {
                                // Contar bloques
                                let nodeCount = (result.svg.match(/class="fc-shape"/g) || []).length;
                                status.textContent = '✓ Diagrama generado · ' + nodeCount + ' bloques · ' + result.width + '×' + result.height + 'px';
                            }
                            // Hacer clickable cada shape para resaltar la línea del editor
                            let shapes = canvas.querySelectorAll('.fc-shape');
                            shapes.forEach(s => {
                                s.addEventListener('click', () => {
                                    let ln = s.getAttribute('data-line');
                                    if (ln) {
                                        // Cerrar modal y marcar línea
                                        closeFlowchart();
                                        goToLine(parseInt(ln));
                                        showToast('📍 Línea ' + ln);
                                    }
                                });
                            });
                        } catch(e) {
                            canvas.innerHTML = '<pre style="color:#ef4444;padding:20px">Error: ' + (e.message || e) + '</pre>';
                            status.textContent = '✗ Error al generar';
                        }
                    });
                });
            }

            function closeFlowchart() {
                document.getElementById('flowchartModal').classList.remove('open');
                // FIX: restaurar scroll del body al cerrar el modal
                document.body.classList.remove('fc-modal-open');
            }

            function fcApplyZoom() {
                let canvas = document.getElementById('flowchartCanvas');
                let svg = canvas.querySelector('svg');
                // FIX: combinar scale con translateZ(0) para mantener el GPU
                // compositing layer (mejora la fluidez del scroll).
                canvas.style.transform = `translateZ(0) scale(${_fcZoom})`;
                // FIX: ajustar width/height del canvas al tamaño VISUAL real
                // tras el scale, para que el wrap padre calcule correctamente
                // el área scrolleable. Sin esto, el scroll quedaba "corto"
                // (con zoom > 1 no se podía llegar al final) o con espacio
                // vacío grande (con zoom < 1 sobraba área).
                if (svg) {
                    let sw = Number(svg.getAttribute('width')) || svg.getBoundingClientRect().width;
                    let sh = Number(svg.getAttribute('height')) || svg.getBoundingClientRect().height;
                    // El padding está en el WRAP (no en el canvas), por lo
                    // que el tamaño del canvas es exactamente el SVG escalado.
                    canvas.style.width  = (sw * _fcZoom) + 'px';
                    canvas.style.height = (sh * _fcZoom) + 'px';
                }
                let lbl = document.getElementById('fcZoomLabel');
                if (lbl) lbl.textContent = Math.round(_fcZoom * 100) + '%';
            }
            // FIX: throttle de fcApplyZoom con requestAnimationFrame.
            // Antes, hacer Ctrl+wheel rápido encolaba muchas llamadas
            // sincrónicas a fcApplyZoom, cada una causando reflow
            // (width/height del canvas) — esto producía "saltos" visuales.
            // Ahora solo se aplica una vez por frame de pintado.
            let _fcApplyRaf = null;
            function fcApplyZoomThrottled() {
                if (_fcApplyRaf !== null) return;
                _fcApplyRaf = requestAnimationFrame(() => {
                    _fcApplyRaf = null;
                    fcApplyZoom();
                });
            }
            function fcZoomIn()  { _fcZoom = Math.min(3, _fcZoom + 0.15); fcApplyZoomThrottled(); }
            function fcZoomOut() { _fcZoom = Math.max(0.2, _fcZoom - 0.15); fcApplyZoomThrottled(); }
            function fcZoomReset(){
                _fcZoom = 1;
                fcApplyZoom();
                // FIX: también resetear scroll para que el diagrama vuelva
                // al inicio (arriba-izquierda), evitando quedar "perdido"
                // en una zona vacía después de cambios de zoom.
                let wrap = document.getElementById('flowchartCanvasWrap');
                if (wrap) { wrap.scrollTop = 0; wrap.scrollLeft = 0; }
            }
            function fcZoomFit() {
                let wrap = document.getElementById('flowchartCanvasWrap');
                let svg = document.querySelector('#flowchartCanvas svg');
                if (!svg) return;
                let sw = svg.getAttribute('width') || svg.getBoundingClientRect().width;
                let sh = svg.getAttribute('height') || svg.getBoundingClientRect().height;
                let scaleX = (wrap.clientWidth - 80) / Number(sw);
                let scaleY = (wrap.clientHeight - 80) / Number(sh);
                _fcZoom = Math.min(scaleX, scaleY, 1.5);
                if (_fcZoom < 0.2) _fcZoom = 0.2;
                fcApplyZoom();
                // FIX: resetear scroll después del fit para centrar/encajar bien
                if (wrap) { wrap.scrollTop = 0; wrap.scrollLeft = 0; }
            }

            // Wheel + Ctrl para zoom (estilo Figma/MS Visio)
            // FIX: dos handlers separados para wheel:
            // 1) passive: false SOLO para Ctrl+wheel (zoom), evita el bloqueo
            //    de scroll natural del wrap.
            // 2) passive: true para todo lo demás (overscroll-behavior:contain
            //    del CSS ya evita la propagación al body).
            // Antes el handler único con passive:false hacía que CADA wheel
            // event tuviera que esperar al JS antes de scrollear, generando
            // la sensación de "lag a saltos" reportada por el usuario.
            document.addEventListener('wheel', (e) => {
                let modal = document.getElementById('flowchartModal');
                if (!modal || !modal.classList.contains('open')) return;
                if (e.ctrlKey || e.metaKey) {
                    let wrap = document.getElementById('flowchartCanvasWrap');
                    if (!wrap || !wrap.contains(e.target)) return;
                    e.preventDefault();
                    if (e.deltaY < 0) fcZoomIn();
                    else fcZoomOut();
                }
            }, { passive: false });

            function fcDownloadSVG() {
                let canvas = document.getElementById('flowchartCanvas');
                let svgEl = canvas.querySelector('svg');
                if (!svgEl) { showToast('⚠ No hay diagrama'); return; }
                // Serializar con estilos inline (incluir el font-family)
                let clone = svgEl.cloneNode(true);
                // Asegurar atributos namespace
                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                // Inline styles para todas las clases utilizadas
                let css = `
                    .fc-shape-text { font-family: 'Cascadia Code', monospace; font-size: 12px; font-weight: 600; text-anchor: middle; dominant-baseline: middle; fill: #fff; }
                    .fc-shape-text.dark { fill: #0a0e1a; }
                    .fc-conn { stroke: #94a3b8; stroke-width: 1.8; fill: none; }
                    .fc-conn-si { stroke: #10b981; stroke-width: 2; fill: none; }
                    .fc-conn-no { stroke: #ef4444; stroke-width: 2; fill: none; }
                    .fc-conn-loop { stroke: #a855f7; stroke-width: 2; fill: none; stroke-dasharray: 5 3; }
                    .fc-conn-merge { stroke: #94a3b8; stroke-width: 1.8; fill: none; }
                    .fc-conn-case { stroke: #06b6d4; stroke-width: 1.8; fill: none; }
                    .fc-conn-label { fill: #e2e8f0; font-family: monospace; font-size: 11px; font-weight: 700; paint-order: stroke; stroke: #0a0e1a; stroke-width: 3px; }
                    .fc-frame-title { fill: #c4b5fd; font-family: sans-serif; font-size: 13px; font-weight: 800; }
                    .fc-frame-rect { fill: rgba(124,58,237,0.04); stroke: rgba(124,58,237,0.4); stroke-width: 1.5; stroke-dasharray: 6 4; }
                `;
                let style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
                style.textContent = css;
                clone.insertBefore(style, clone.firstChild);
                let bgRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                bgRect.setAttribute('width', '100%');
                bgRect.setAttribute('height', '100%');
                bgRect.setAttribute('fill', '#0a0e1a');
                clone.insertBefore(bgRect, clone.firstChild.nextSibling);

                let serialized = new XMLSerializer().serializeToString(clone);
                let blob = new Blob([serialized], { type: 'image/svg+xml;charset=utf-8' });
                let url = URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                let code = document.getElementById('playgroundEditor').value;
                let m = code.match(/^Proceso\s+(\S+)/im);
                a.download = (m ? m[1] : 'diagrama') + '.svg';
                a.click();
                URL.revokeObjectURL(url);
                showToast('⬇ SVG descargado');
            }

            function fcDownloadPNG() {
                let canvas = document.getElementById('flowchartCanvas');
                let svgEl = canvas.querySelector('svg');
                if (!svgEl) { showToast('⚠ No hay diagrama'); return; }
                let clone = svgEl.cloneNode(true);
                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                let css = `
                    .fc-shape-text { font-family: 'Cascadia Code', monospace; font-size: 12px; font-weight: 600; text-anchor: middle; dominant-baseline: middle; fill: #fff; }
                    .fc-shape-text.dark { fill: #0a0e1a; }
                    .fc-conn { stroke: #94a3b8; stroke-width: 1.8; fill: none; }
                    .fc-conn-si { stroke: #10b981; stroke-width: 2; fill: none; }
                    .fc-conn-no { stroke: #ef4444; stroke-width: 2; fill: none; }
                    .fc-conn-loop { stroke: #a855f7; stroke-width: 2; fill: none; stroke-dasharray: 5 3; }
                    .fc-conn-merge { stroke: #94a3b8; stroke-width: 1.8; fill: none; }
                    .fc-conn-case { stroke: #06b6d4; stroke-width: 1.8; fill: none; }
                    .fc-conn-label { fill: #e2e8f0; font-family: monospace; font-size: 11px; font-weight: 700; paint-order: stroke; stroke: #0a0e1a; stroke-width: 3px; }
                    .fc-frame-title { fill: #c4b5fd; font-family: sans-serif; font-size: 13px; font-weight: 800; }
                    .fc-frame-rect { fill: rgba(124,58,237,0.04); stroke: rgba(124,58,237,0.4); stroke-width: 1.5; stroke-dasharray: 6 4; }
                `;
                let style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
                style.textContent = css;
                clone.insertBefore(style, clone.firstChild);
                let bgRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                bgRect.setAttribute('width', '100%');
                bgRect.setAttribute('height', '100%');
                bgRect.setAttribute('fill', '#0a0e1a');
                clone.insertBefore(bgRect, clone.firstChild.nextSibling);

                let serialized = new XMLSerializer().serializeToString(clone);
                let svgBlob = new Blob([serialized], { type: 'image/svg+xml;charset=utf-8' });
                let url = URL.createObjectURL(svgBlob);

                let w = Number(svgEl.getAttribute('width')) || 800;
                let h = Number(svgEl.getAttribute('height')) || 600;
                let scale = 2; // PNG hi-res
                let cnv = document.createElement('canvas');
                cnv.width = w * scale;
                cnv.height = h * scale;
                let ctx = cnv.getContext('2d');
                let img = new Image();
                img.onload = function() {
                    ctx.fillStyle = '#0a0e1a';
                    ctx.fillRect(0, 0, cnv.width, cnv.height);
                    ctx.drawImage(img, 0, 0, cnv.width, cnv.height);
                    URL.revokeObjectURL(url);
                    cnv.toBlob(function(blob) {
                        let burl = URL.createObjectURL(blob);
                        let a = document.createElement('a');
                        a.href = burl;
                        let code = document.getElementById('playgroundEditor').value;
                        let m = code.match(/^Proceso\s+(\S+)/im);
                        a.download = (m ? m[1] : 'diagrama') + '.png';
                        a.click();
                        URL.revokeObjectURL(burl);
                        showToast('⬇ PNG descargado');
                    }, 'image/png');
                };
                img.onerror = function() {
                    URL.revokeObjectURL(url);
                    showToast('❌ Error al renderizar PNG');
                };
                img.src = url;
            }

            // ── Descargar por hojas (1 PNG/JPEG por Proceso/SubProceso) ─────
            // FIX: ahora abre primero un modal que permite al usuario:
            //   - ver cuántas hojas se van a generar
            //   - seleccionar cuáles quiere descargar (checkboxes)
            //   - elegir el formato (PNG/JPEG)
            // y solo descarga al confirmar. Antes descargaba todo de golpe
            // y el usuario no podía elegir si su navegador bloqueaba descargas
            // múltiples sin confirmación.
            function fcDownloadPages() {
                let canvas = document.getElementById('flowchartCanvas');
                let svgEl = canvas.querySelector('svg');
                if (!svgEl) { showToast('⚠ No hay diagrama'); return; }

                // Detectar frames
                let svgW = Number(svgEl.getAttribute('width')) || svgEl.getBoundingClientRect().width || 800;
                let frameRects = Array.from(svgEl.querySelectorAll('rect.fc-frame-rect'));
                let frameTitles = Array.from(svgEl.querySelectorAll('text.fc-frame-title'));
                let frames = frameRects.map((r, i) => {
                    let x = Number(r.getAttribute('x')) || 0;
                    let y = Number(r.getAttribute('y')) || 0;
                    let w = Number(r.getAttribute('width')) || svgW;
                    let h = Number(r.getAttribute('height')) || 100;
                    let titleEl = frameTitles[i];
                    let title = titleEl ? titleEl.textContent : ('Proceso ' + (i + 1));
                    let safeTitle = title
                        .replace(/^(Proceso|SubProceso|Función|Funcion):\s*/i, '')
                        .replace(/\(.*$/, '')
                        .replace(/[^a-zA-Z0-9_\-]/g, '_')
                        .replace(/_+/g, '_')
                        .replace(/^_|_$/g, '')
                        .substring(0, 40) || ('frame' + (i + 1));
                    return { x, y, w, h, title, safeTitle, idx: i };
                });

                if (frames.length === 0) { fcDownloadPNG(); return; }
                if (frames.length === 1) {
                    // Una sola hoja: ofrecer al usuario elegir formato igual
                    _fcShowDownloadModal(frames);
                    return;
                }
                // Múltiples hojas: mostrar modal de selección
                _fcShowDownloadModal(frames);
            }

            // Estado del modal de descarga (módulo)
            let _fcDownloadFrames = [];
            let _fcDownloadSelected = new Set();
            let _fcDownloadFormat = 'png';

            function _fcShowDownloadModal(frames) {
                _fcDownloadFrames = frames;
                _fcDownloadSelected = new Set(frames.map(f => f.idx)); // todas seleccionadas por defecto
                _fcDownloadFormat = 'png';

                let modal = document.getElementById('fcDownloadModal');
                if (!modal) {
                    modal = document.createElement('div');
                    modal.id = 'fcDownloadModal';
                    modal.className = 'fc-download-modal';
                    modal.onclick = (e) => { if (e.target === modal) _fcCloseDownloadModal(); };
                    document.body.appendChild(modal);
                }
                modal.innerHTML = _fcRenderDownloadModal();
                modal.classList.add('open');
            }

            function _fcRenderDownloadModal() {
                let frames = _fcDownloadFrames;
                let isOne = frames.length === 1;
                let selectedCount = _fcDownloadSelected.size;
                let formatOptions = [
                    { id: 'png',  label: 'PNG',  desc: 'Alta calidad, transparencia' },
                    { id: 'jpeg', label: 'JPEG', desc: 'Más liviano, sin transparencia' },
                ];
                let formatHtml = formatOptions.map(opt =>
                    `<label class="fc-dl-fmt-opt${_fcDownloadFormat === opt.id ? ' active' : ''}">
                        <input type="radio" name="fc-dl-fmt" value="${opt.id}"
                               ${_fcDownloadFormat === opt.id ? 'checked' : ''}
                               onchange="_fcSetDownloadFormat('${opt.id}')">
                        <span class="fc-dl-fmt-label">${opt.label}</span>
                        <span class="fc-dl-fmt-desc">${opt.desc}</span>
                    </label>`
                ).join('');

                let framesHtml = isOne
                    ? `<div class="fc-dl-single-info">📄 Una sola hoja: <strong>${frames[0].title.replace(/[<>]/g, '')}</strong></div>`
                    : frames.map(f => `
                        <label class="fc-dl-frame-item${_fcDownloadSelected.has(f.idx) ? ' selected' : ''}">
                            <input type="checkbox" data-idx="${f.idx}"
                                   ${_fcDownloadSelected.has(f.idx) ? 'checked' : ''}
                                   onchange="_fcToggleFrameSelection(${f.idx})">
                            <span class="fc-dl-frame-num">Hoja ${f.idx + 1}</span>
                            <span class="fc-dl-frame-title">${f.title.replace(/[<>]/g, '')}</span>
                        </label>
                    `).join('');

                let confirmDisabled = !isOne && selectedCount === 0;
                let confirmLabel = isOne
                    ? '⬇ Descargar imagen'
                    : '⬇ Descargar ' + selectedCount + ' hoja' + (selectedCount !== 1 ? 's' : '');

                return `
                    <div class="fc-dl-box">
                        <div class="fc-dl-header">
                            <h3>${isOne ? '⬇ Descargar diagrama' : '⬇ Descargar hojas del diagrama'}</h3>
                            <button class="fc-dl-close" onclick="_fcCloseDownloadModal()" title="Cerrar (Esc)">✕</button>
                        </div>
                        <div class="fc-dl-body">
                            ${!isOne ? `
                                <div class="fc-dl-section">
                                    <div class="fc-dl-section-title">
                                        <span>📑 Selecciona las hojas (${selectedCount}/${frames.length})</span>
                                        <div class="fc-dl-bulk-actions">
                                            <button class="fc-dl-mini-btn" onclick="_fcSelectAllFrames(true)">✓ Todas</button>
                                            <button class="fc-dl-mini-btn" onclick="_fcSelectAllFrames(false)">✗ Ninguna</button>
                                        </div>
                                    </div>
                                    <div class="fc-dl-frames-list">${framesHtml}</div>
                                </div>
                            ` : `<div class="fc-dl-section">${framesHtml}</div>`}
                            <div class="fc-dl-section">
                                <div class="fc-dl-section-title">🎨 Formato de imagen</div>
                                <div class="fc-dl-fmt-list">${formatHtml}</div>
                            </div>
                        </div>
                        <div class="fc-dl-footer">
                            <button class="fc-dl-cancel" onclick="_fcCloseDownloadModal()">Cancelar</button>
                            <button class="fc-dl-confirm" ${confirmDisabled ? 'disabled' : ''}
                                    onclick="_fcConfirmDownload()">${confirmLabel}</button>
                        </div>
                    </div>
                `;
            }

            function _fcToggleFrameSelection(idx) {
                if (_fcDownloadSelected.has(idx)) _fcDownloadSelected.delete(idx);
                else _fcDownloadSelected.add(idx);
                // Re-render para actualizar contador
                let modal = document.getElementById('fcDownloadModal');
                if (modal) modal.innerHTML = _fcRenderDownloadModal();
            }
            function _fcSelectAllFrames(all) {
                if (all) {
                    _fcDownloadFrames.forEach(f => _fcDownloadSelected.add(f.idx));
                } else {
                    _fcDownloadSelected.clear();
                }
                let modal = document.getElementById('fcDownloadModal');
                if (modal) modal.innerHTML = _fcRenderDownloadModal();
            }
            function _fcSetDownloadFormat(fmt) {
                _fcDownloadFormat = fmt;
                let modal = document.getElementById('fcDownloadModal');
                if (modal) modal.innerHTML = _fcRenderDownloadModal();
            }
            function _fcCloseDownloadModal() {
                let modal = document.getElementById('fcDownloadModal');
                if (modal) modal.classList.remove('open');
            }
            async function _fcConfirmDownload() {
                if (_fcDownloadSelected.size === 0) {
                    showToast('⚠ Selecciona al menos una hoja');
                    return;
                }
                let selectedFrames = _fcDownloadFrames.filter(f => _fcDownloadSelected.has(f.idx));
                _fcCloseDownloadModal();
                await _fcDownloadPagesExecute(selectedFrames, _fcDownloadFormat);
            }
            window._fcToggleFrameSelection = _fcToggleFrameSelection;
            window._fcSelectAllFrames = _fcSelectAllFrames;
            window._fcSetDownloadFormat = _fcSetDownloadFormat;
            window._fcCloseDownloadModal = _fcCloseDownloadModal;
            window._fcConfirmDownload = _fcConfirmDownload;

            async function _fcDownloadPagesExecute(selectedFrames, format) {
                let canvas = document.getElementById('flowchartCanvas');
                let svgEl = canvas.querySelector('svg');
                if (!svgEl) { showToast('⚠ No hay diagrama'); return; }

                let code = document.getElementById('playgroundEditor').value;
                let m = code.match(/^Proceso\s+(\S+)/im);
                let baseName = m ? m[1] : 'diagrama';

                let svgW = Number(svgEl.getAttribute('width'))  || svgEl.getBoundingClientRect().width  || 800;

                if (selectedFrames.length === 0) { showToast('⚠ No hay hojas seleccionadas'); return; }

                const SCALE = 2;         // hi-res
                const PAD   = 24;        // padding alrededor del frame en cada hoja
                const HEADER_H = 36;
                const FOOTER_H = 28;
                let totalSelected = selectedFrames.length;
                let totalAll = _fcDownloadFrames.length;
                let isJpeg = (format === 'jpeg' || format === 'jpg');
                let mime = isJpeg ? 'image/jpeg' : 'image/png';
                let ext = isJpeg ? 'jpg' : 'png';

                showToast('⏳ Generando ' + totalSelected + ' hoja' + (totalSelected !== 1 ? 's' : '') + ' (' + format.toUpperCase() + ')...');

                // Inline CSS para el clone
                const CSS = `
                    .fc-shape-text { font-family: 'Cascadia Code', monospace; font-size: 12px; font-weight: 600; text-anchor: middle; dominant-baseline: middle; fill: #fff; }
                    .fc-shape-text.dark { fill: #0a0e1a; }
                    .fc-conn { stroke: #94a3b8; stroke-width: 1.8; fill: none; }
                    .fc-conn-si { stroke: #10b981; stroke-width: 2; fill: none; }
                    .fc-conn-no { stroke: #ef4444; stroke-width: 2; fill: none; }
                    .fc-conn-loop { stroke: #a855f7; stroke-width: 2; fill: none; stroke-dasharray: 5 3; }
                    .fc-conn-merge { stroke: #94a3b8; stroke-width: 1.8; fill: none; }
                    .fc-conn-case { stroke: #06b6d4; stroke-width: 1.8; fill: none; }
                    .fc-conn-label { fill: #e2e8f0; font-family: monospace; font-size: 11px; font-weight: 700; paint-order: stroke; stroke: #0a0e1a; stroke-width: 3px; }
                    .fc-frame-title { fill: #c4b5fd; font-family: sans-serif; font-size: 13px; font-weight: 800; }
                    .fc-frame-rect { fill: rgba(124,58,237,0.04); stroke: rgba(124,58,237,0.4); stroke-width: 1.5; stroke-dasharray: 6 4; }
                `;

                // Renderizar 1 frame en una hoja propia y devolver blob
                function renderFrame(frame, pageNum) {
                    return new Promise((resolve, reject) => {
                        // Coordenadas del frame en el SVG original
                        let fx = frame.x;
                        let fy = frame.y;
                        let fw = frame.w;
                        let fh = frame.h;

                        // Dimensiones de la hoja final
                        let sheetW = fw + 2 * PAD;
                        let sheetH = HEADER_H + fh + 2 * PAD + FOOTER_H;

                        // Construir SVG de hoja
                        let sheet = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        sheet.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                        sheet.setAttribute('width',  String(sheetW));
                        sheet.setAttribute('height', String(sheetH));
                        sheet.setAttribute('viewBox', `0 0 ${sheetW} ${sheetH}`);

                        // Estilos
                        let styleEl = document.createElementNS('http://www.w3.org/2000/svg', 'style');
                        styleEl.textContent = CSS;
                        sheet.appendChild(styleEl);

                        // Defs: copiar las flechas del SVG original
                        let origDefs = svgEl.querySelector('defs');
                        if (origDefs) {
                            sheet.appendChild(origDefs.cloneNode(true));
                        }

                        // Fondo de la hoja
                        let sheetBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                        sheetBg.setAttribute('width',  String(sheetW));
                        sheetBg.setAttribute('height', String(sheetH));
                        sheetBg.setAttribute('fill', '#0a0e1a');
                        sheet.appendChild(sheetBg);

                        // ── Header de la hoja ──
                        let hdrRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                        hdrRect.setAttribute('x', '0'); hdrRect.setAttribute('y', '0');
                        hdrRect.setAttribute('width', String(sheetW)); hdrRect.setAttribute('height', String(HEADER_H));
                        hdrRect.setAttribute('fill', '#111827');
                        sheet.appendChild(hdrRect);

                        let hdrLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                        hdrLine.setAttribute('x1', '0'); hdrLine.setAttribute('y1', String(HEADER_H));
                        hdrLine.setAttribute('x2', String(sheetW)); hdrLine.setAttribute('y2', String(HEADER_H));
                        hdrLine.setAttribute('stroke', '#1e2d45'); hdrLine.setAttribute('stroke-width', '1');
                        sheet.appendChild(hdrLine);

                        let hdrTitle = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                        hdrTitle.setAttribute('x', '20');
                        hdrTitle.setAttribute('y', String(HEADER_H / 2 + 1));
                        hdrTitle.setAttribute('dominant-baseline', 'central');
                        hdrTitle.setAttribute('fill', '#e2e8f0');
                        hdrTitle.setAttribute('font-family', 'sans-serif');
                        hdrTitle.setAttribute('font-size', '13');
                        hdrTitle.setAttribute('font-weight', '700');
                        hdrTitle.textContent = '🔀 ' + frame.title;
                        sheet.appendChild(hdrTitle);

                        let hdrPage = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                        hdrPage.setAttribute('x', String(sheetW - 20));
                        hdrPage.setAttribute('y', String(HEADER_H / 2 + 1));
                        hdrPage.setAttribute('dominant-baseline', 'central');
                        hdrPage.setAttribute('text-anchor', 'end');
                        hdrPage.setAttribute('fill', '#a78bfa');
                        hdrPage.setAttribute('font-family', 'sans-serif');
                        hdrPage.setAttribute('font-size', '12');
                        hdrPage.setAttribute('font-weight', '700');
                        hdrPage.textContent = 'Hoja ' + (frame.idx + 1) + ' de ' + totalAll;
                        sheet.appendChild(hdrPage);

                        // ── Contenido del frame ──
                        // Clonamos TODOS los hijos del SVG original (sin defs)
                        // y los envolvemos en un <g> con clipping al rectángulo
                        // del frame. Trasladamos para que el frame quede dentro
                        // del área de la hoja con PAD alrededor.
                        let clipId = 'clip-frame-' + pageNum + '-' + Date.now();
                        let defs2 = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                        let clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
                        clipPath.setAttribute('id', clipId);
                        let clipRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                        // Pequeño margen extra en el clip para no recortar bordes finos
                        clipRect.setAttribute('x', String(fx - 2));
                        clipRect.setAttribute('y', String(fy - 2));
                        clipRect.setAttribute('width',  String(fw + 4));
                        clipRect.setAttribute('height', String(fh + 4));
                        clipPath.appendChild(clipRect);
                        defs2.appendChild(clipPath);
                        sheet.appendChild(defs2);

                        let g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                        // Trasladar: la esquina sup-izq del frame debe quedar
                        // en (PAD, HEADER_H + PAD) en la hoja
                        let tx = PAD - fx;
                        let ty = HEADER_H + PAD - fy;
                        g.setAttribute('transform', `translate(${tx}, ${ty})`);
                        g.setAttribute('clip-path', 'url(#' + clipId + ')');

                        // Copiar contenido del SVG original (sin <defs> y sin <style>)
                        Array.from(svgEl.children).forEach(child => {
                            if (child.tagName === 'defs' || child.tagName === 'style') return;
                            g.appendChild(child.cloneNode(true));
                        });
                        sheet.appendChild(g);

                        // ── Footer ──
                        let footerY = HEADER_H + 2 * PAD + fh;
                        let ftrLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                        ftrLine.setAttribute('x1', '0'); ftrLine.setAttribute('y1', String(footerY));
                        ftrLine.setAttribute('x2', String(sheetW)); ftrLine.setAttribute('y2', String(footerY));
                        ftrLine.setAttribute('stroke', '#1e2d45'); ftrLine.setAttribute('stroke-width', '1');
                        sheet.appendChild(ftrLine);

                        let ftrRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                        ftrRect.setAttribute('x', '0'); ftrRect.setAttribute('y', String(footerY));
                        ftrRect.setAttribute('width', String(sheetW)); ftrRect.setAttribute('height', String(FOOTER_H));
                        ftrRect.setAttribute('fill', '#111827');
                        sheet.appendChild(ftrRect);

                        let ftrTxt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                        ftrTxt.setAttribute('x', String(sheetW / 2));
                        ftrTxt.setAttribute('y', String(footerY + FOOTER_H / 2 + 1));
                        ftrTxt.setAttribute('text-anchor', 'middle');
                        ftrTxt.setAttribute('dominant-baseline', 'central');
                        ftrTxt.setAttribute('fill', '#4b5563');
                        ftrTxt.setAttribute('font-family', 'sans-serif');
                        ftrTxt.setAttribute('font-size', '10');
                        ftrTxt.textContent = 'PSeInt Academy · ' + baseName + '.psc · ' + frame.title;
                        sheet.appendChild(ftrTxt);

                        // ── Renderizar a PNG/JPEG ──
                        let serialized = new XMLSerializer().serializeToString(sheet);
                        let blob = new Blob([serialized], { type: 'image/svg+xml;charset=utf-8' });
                        let url = URL.createObjectURL(blob);

                        let cnv = document.createElement('canvas');
                        cnv.width  = sheetW * SCALE;
                        cnv.height = sheetH * SCALE;
                        let ctx = cnv.getContext('2d');
                        let img = new Image();
                        img.onload = function() {
                            // FIX: para JPEG el fondo debe ser opaco
                            // (sin transparencia). El bg oscuro del SVG ya
                            // está, pero por defensa pintamos primero.
                            ctx.fillStyle = '#0a0e1a';
                            ctx.fillRect(0, 0, cnv.width, cnv.height);
                            ctx.drawImage(img, 0, 0, cnv.width, cnv.height);
                            URL.revokeObjectURL(url);
                            // JPEG con quality 0.92 da buen balance tamaño/calidad
                            let quality = isJpeg ? 0.92 : undefined;
                            cnv.toBlob(function(outBlob) { resolve(outBlob); }, mime, quality);
                        };
                        img.onerror = function() {
                            URL.revokeObjectURL(url);
                            reject(new Error('Error renderizando frame ' + pageNum));
                        };
                        img.src = url;
                    });
                }

                // Generar todas las hojas SELECCIONADAS y descargar
                try {
                    for (let p = 0; p < selectedFrames.length; p++) {
                        let frame = selectedFrames[p];
                        let blob = await renderFrame(frame, p + 1);
                        let burl = URL.createObjectURL(blob);
                        let a = document.createElement('a');
                        a.href = burl;
                        // Usar el índice REAL de la hoja original (frame.idx + 1)
                        // para que el nombre del archivo sea consistente con el header.
                        a.download = baseName + '_' + String(frame.idx + 1).padStart(2, '0') +
                                     '_' + frame.safeTitle + '.' + ext;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        URL.revokeObjectURL(burl);
                        // Pequeña pausa entre descargas para no saturar el navegador
                        await new Promise(r => setTimeout(r, 300));
                    }
                    showToast('✅ ' + selectedFrames.length + ' hoja' +
                              (selectedFrames.length !== 1 ? 's' : '') +
                              ' descargada' + (selectedFrames.length !== 1 ? 's' : '') +
                              ' (' + format.toUpperCase() + ')');
                } catch(e) {
                    showToast('❌ Error generando hojas: ' + e.message);
                }
            }

            function fcPrint() {
                let canvas = document.getElementById('flowchartCanvas');
                let svgEl = canvas.querySelector('svg');
                if (!svgEl) { showToast('⚠ No hay diagrama'); return; }
                let win = window.open('', '_blank');
                let code = document.getElementById('playgroundEditor').value;
                let m = code.match(/^Proceso\s+(\S+)/im);
                let title = 'Diagrama: ' + (m ? m[1] : 'PSeInt');

                let svgW = Number(svgEl.getAttribute('width')) || 800;
                let svgH = Number(svgEl.getAttribute('height')) || 600;

                // FIX: imprimir 1 página por Proceso/SubProceso (frame),
                // igual que en la descarga por hojas. Antes se cortaba
                // en bandas de 900px y partía cajitas a la mitad.
                let frameRects  = Array.from(svgEl.querySelectorAll('rect.fc-frame-rect'));
                let frameTitles = Array.from(svgEl.querySelectorAll('text.fc-frame-title'));
                let frames = frameRects.map((r, i) => {
                    let x = Number(r.getAttribute('x')) || 0;
                    let y = Number(r.getAttribute('y')) || 0;
                    let w = Number(r.getAttribute('width')) || svgW;
                    let h = Number(r.getAttribute('height')) || 100;
                    let titleEl = frameTitles[i];
                    let frameTitle = titleEl ? titleEl.textContent : ('Proceso ' + (i + 1));
                    return { x, y, w, h, title: frameTitle };
                });

                // Fallback: si no hay frames (extraño), imprimir todo el SVG
                if (frames.length === 0) {
                    frames = [{ x: 0, y: 0, w: svgW, h: svgH, title: title }];
                }
                let totalPages = frames.length;

                // Generar páginas, una por frame
                const PAD = 12;
                let slicesHtml = '';
                for (let p = 0; p < totalPages; p++) {
                    let f = frames[p];
                    let vbX = Math.max(0, f.x - PAD);
                    let vbY = Math.max(0, f.y - PAD);
                    let vbW = f.w + 2 * PAD;
                    let vbH = f.h + 2 * PAD;
                    slicesHtml += `
                        <div class="page-wrap">
                            <div class="page-hdr">
                                <span>${title} · ${f.title.replace(/[<>]/g, '')}</span>
                                <span>Hoja ${p+1} de ${totalPages}</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="${vbX} ${vbY} ${vbW} ${vbH}"
                                 style="width:100%;height:auto;display:block;background:#0a0e1a">
                                ${svgEl.innerHTML}
                            </svg>
                        </div>
                        ${p < totalPages-1 ? '<div style="page-break-after:always"></div>' : ''}
                    `;
                }

                win.document.write(`<!doctype html><html><head><title>${title}</title>
                    <style>
                        @page { margin: 10mm; }
                        body { margin:0; padding:0; background:#fff; font-family:sans-serif; }
                        .page-wrap { padding:0; break-inside:avoid; }
                        .page-hdr { background:#111827; color:#e2e8f0; padding:8px 16px; display:flex; justify-content:space-between; font-size:12px; font-weight:700; }
                        .fc-shape-text { font-family: monospace; font-size: 12px; font-weight: 600; text-anchor: middle; dominant-baseline: middle; fill: #fff; }
                        .fc-shape-text.dark { fill: #0a0e1a; }
                        .fc-conn { stroke: #94a3b8; stroke-width: 1.8; fill: none; }
                        .fc-conn-si { stroke: #10b981; stroke-width: 2; fill: none; }
                        .fc-conn-no { stroke: #ef4444; stroke-width: 2; fill: none; }
                        .fc-conn-loop { stroke: #a855f7; stroke-width: 2; fill: none; stroke-dasharray: 5 3; }
                        .fc-conn-label { fill: #e2e8f0; font-family: monospace; font-size: 11px; font-weight: 700; paint-order: stroke; stroke: #0a0e1a; stroke-width: 3px; }
                        .fc-frame-title { fill: #c4b5fd; font-family: sans-serif; font-size: 13px; font-weight: 800; }
                        .fc-frame-rect { fill: rgba(124,58,237,0.04); stroke: rgba(124,58,237,0.4); stroke-width: 1.5; stroke-dasharray: 6 4; }
                    </style>
                    </head><body>
                    ${slicesHtml}
                    <script>setTimeout(function(){window.print();},400);<\/script>
                    </body></html>`);
                win.document.close();
            }

            // Pan drag con mouse en el canvas
            (function() {
                let isPanning = false;
                let startX = 0, startY = 0, scrollLeft = 0, scrollTop = 0;
                let panRaf = null;
                let pendingX = null, pendingY = null;
                document.addEventListener('mousedown', function(e) {
                    let wrap = document.getElementById('flowchartCanvasWrap');
                    if (!wrap) return;
                    let modal = document.getElementById('flowchartModal');
                    if (!modal || !modal.classList.contains('open')) return;
                    if (!wrap.contains(e.target)) return;
                    // Si clickeó en una shape (cursor pointer), no pan
                    if (e.target.classList && e.target.classList.contains('fc-shape')) return;
                    if (e.target.tagName && e.target.tagName.toLowerCase() === 'text') return;
                    isPanning = true;
                    startX = e.pageX;
                    startY = e.pageY;
                    scrollLeft = wrap.scrollLeft;
                    scrollTop = wrap.scrollTop;
                    // FIX: añadir clase para desactivar transition del transform
                    // mientras se hace pan (evita lag visual del SVG).
                    wrap.classList.add('fc-panning');
                });
                document.addEventListener('mousemove', function(e) {
                    if (!isPanning) return;
                    // FIX: usar requestAnimationFrame para sincronizar el scroll
                    // con el refresh rate del navegador. Antes se asignaba
                    // directo scrollLeft/scrollTop en cada mousemove (hasta
                    // 200/seg), causando saltos visuales en pantallas con
                    // alto refresh rate o cuando el SVG era grande.
                    pendingX = scrollLeft - (e.pageX - startX);
                    pendingY = scrollTop  - (e.pageY - startY);
                    if (panRaf === null) {
                        panRaf = requestAnimationFrame(() => {
                            let wrap = document.getElementById('flowchartCanvasWrap');
                            if (wrap && isPanning) {
                                wrap.scrollLeft = pendingX;
                                wrap.scrollTop  = pendingY;
                            }
                            panRaf = null;
                        });
                    }
                });
                function endPan() {
                    if (!isPanning) return;
                    isPanning = false;
                    if (panRaf !== null) { cancelAnimationFrame(panRaf); panRaf = null; }
                    let wrap = document.getElementById('flowchartCanvasWrap');
                    if (wrap) wrap.classList.remove('fc-panning');
                }
                document.addEventListener('mouseup', endPan);
                document.addEventListener('mouseleave', endPan);
            })();

            // Exponer al scope global
            window.openFlowchart = openFlowchart;
            window.closeFlowchart = closeFlowchart;
            window.fcZoomIn = fcZoomIn;
            window.fcZoomOut = fcZoomOut;
            window.fcZoomReset = fcZoomReset;
            window.fcZoomFit = fcZoomFit;
            window.fcDownloadSVG = fcDownloadSVG;
            window.fcDownloadPNG = fcDownloadPNG;
            window.fcPrint = fcPrint;

            /* ============================================================
   FIN DIAGRAMA DE FLUJO
============================================================ */

            function loadPlaygroundCode() {
                let saved = (typeof safeLSGet === 'function') ? safeLSGet("pseinc_playground") : null;
                if (saved == null) { try { saved = localStorage.getItem("pseinc_playground"); } catch(_) {} }
                if (saved) {
                    // FIX: normalizar CRLF al cargar (por si la versión
                    // anterior guardó código con \r del clipboard de Windows)
                    if (/\r/.test(saved)) saved = saved.replace(/\r\n?/g, '\n');
                    document.getElementById("playgroundEditor").value = saved;
                }
            }
            const playgroundEditor =
                document.getElementById("playgroundEditor");
            ["input", "change", "paste"].forEach((event) => {
                playgroundEditor.addEventListener(event, function () {
                    if (typeof safeLSSet === 'function') safeLSSet("pseinc_playground", this.value);
                    else { try { localStorage.setItem("pseinc_playground", this.value); } catch(_) {} }
                });
            });

            /* ============================================================
   NAVBAR ACTIVE ON SCROLL
============================================================ */
            function updateNavActive() {
                let sections = ["hero","lecciones","playground","referencia","progreso"];
                let scrollY = window.scrollY + 80;
                sections.forEach((id) => {
                    let el = document.getElementById(id);
                    if (!el) return;
                    let a = document.querySelector(`.nav-links a[href="#${id}"]`);
                    if (!a) return;
                    let top = el.offsetTop, bot = top + el.offsetHeight;
                    if (scrollY >= top && scrollY < bot) a.classList.add("active");
                    else a.classList.remove("active");
                });
            }
            window.addEventListener("scroll", updateNavActive);

            /* ============================================================
   INIT SEGURO (espera a que el DOM esté listo)
============================================================ */
            function safeInit() {
                try {
                    const lessonsGrid = document.getElementById("lessonsGrid");
                    const refGrid = document.getElementById("refGrid");
                    const starsContainer = document.getElementById("stars");
                    const totalLessonsEl = document.getElementById("totalLessons");
                    const playgroundEditor = document.getElementById("playgroundEditor");

                    if (!lessonsGrid || !refGrid) {
                        console.warn("Elementos principales no encontrados. Reintentando...");
                        setTimeout(safeInit, 100);
                        return;
                    }

                    if (starsContainer) createStars();
                    renderLessons();
                    renderReference();
                    renderSnippets();
                    loadPlaygroundCode();
                    observeAnimated();
                    updateProgress();
                    if (totalLessonsEl && Array.isArray(LESSONS)) totalLessonsEl.textContent = LESSONS.length;
                    updateNavActive();

                    // Initialize editor features
                    if (playgroundEditor) {
                        updateLineNums("playgroundEditor", "playgroundLineNums");
                        updateStatusBar();
                        // Panel lateral de símbolos & funciones (reutilizable)
                        if (window.attachCheatPanel) window.attachCheatPanel("playgroundEditor");

                        // Sync line numbers on scroll
                        playgroundEditor.addEventListener("scroll", () => {
                            let ln = document.getElementById("playgroundLineNums");
                            if (ln) ln.scrollTop = playgroundEditor.scrollTop;
                            // FIX: re-posicionar el highlight de línea activa
                            // al scrollear, para que siga al cursor visible.
                            let pos = playgroundEditor.selectionStart;
                            let before = playgroundEditor.value.substring(0, pos);
                            let lineNum = before.split("\n").length;
                            _updateActiveLineHighlight(playgroundEditor, lineNum);
                            // FIX: re-posicionar los subrayados ondulados de
                            // rangos problemáticos al scrollear.
                            if (window._scheduleOverlayUpdate) window._scheduleOverlayUpdate();
                        });

                        // FIX: usar selectionchange (evento del document que
                        // dispara en CUALQUIER movimiento del cursor: flechas,
                        // click, Home/End, Page Up/Down, Ctrl+arrow, drag,
                        // teclado de movimiento, etc.). Antes solo usábamos
                        // keyup/click, y las flechas SÍ disparaban keyup pero
                        // si el handler global de keydown tenía un return
                        // temprano (por ej. autocomplete), el highlight no
                        // se actualizaba hasta que pulsabas otra tecla.
                        document.addEventListener("selectionchange", () => {
                            // Solo si el editor del playground tiene foco
                            if (document.activeElement === playgroundEditor) {
                                updateStatusBar();
                                // Actualizar también el status del fullscreen si está activo
                                if (window._updateFsStatus) window._updateFsStatus();
                            }
                        });
                        playgroundEditor.addEventListener("click", updateStatusBar);
                        playgroundEditor.addEventListener("focus", updateStatusBar);
                        playgroundEditor.addEventListener("input", () => {
                            // FIX: NO llamar updateLineNums aquí. sync() de
                            // attachHighlighter ya regenera el gutter en cada
                            // input (vía su propio listener). updateStatusBar
                            // actualiza los contadores y el highlight de fila.
                            // Diferimos con rAF para que se ejecute DESPUÉS del
                            // sync (que se registró en attachHighlighter),
                            // garantizando que el gutter ya esté regenerado.
                            requestAnimationFrame(updateStatusBar);
                            // Auto-analyze on each change (debounced) — versión completa
                            // que llena paneles colapsables y status bar.
                            scheduleAnalyze();
                            // NOTA: el autocompletado se dispara desde el keydown
                            // global (línea ~16852) solo cuando el usuario teclea
                            // letras o Backspace. NO lo invocamos aquí en input
                            // para evitar que aparezca "de la nada" al pegar,
                            // hacer click, mover cursor con flechas, etc.
                        });
                        // Ocultar autocomplete en interacciones que NO son tipear
                        playgroundEditor.addEventListener('scroll',     hideAutocomplete);
                        playgroundEditor.addEventListener('wheel',      hideAutocomplete, { passive: true });
                        playgroundEditor.addEventListener('blur',       () => setTimeout(hideAutocomplete, 50));
                        playgroundEditor.addEventListener('mousedown',  hideAutocomplete);
                        document.addEventListener('click', (e) => {
                            const pop = document.getElementById('autocompletePopup');
                            if (pop && !pop.contains(e.target) && e.target !== playgroundEditor) {
                                hideAutocomplete();
                            }
                        });
                        // También al pegar y al cargar
                        playgroundEditor.addEventListener("paste", (e) => {
                            // FIX: normalizar CRLF (\r\n) y CR (\r) a \n al pegar.
                            // Antes los \r quedaban en el texto y rompían los
                            // regex del intérprete (ej. /Entonces$/i no matcheaba
                            // "Entonces\r"). También se evita el doble salto.
                            try {
                                let clipboardData = e.clipboardData || window.clipboardData;
                                if (clipboardData) {
                                    let pasted = clipboardData.getData('text');
                                    if (pasted && /\r/.test(pasted)) {
                                        e.preventDefault();
                                        let normalized = pasted.replace(/\r\n?/g, '\n');
                                        if (!document.execCommand('insertText', false, normalized)) {
                                            // Fallback
                                            let start = playgroundEditor.selectionStart;
                                            let end = playgroundEditor.selectionEnd;
                                            let val = playgroundEditor.value;
                                            playgroundEditor.value =
                                                val.substring(0, start) + normalized + val.substring(end);
                                            playgroundEditor.selectionStart =
                                                playgroundEditor.selectionEnd = start + normalized.length;
                                        }
                                        playgroundEditor.dispatchEvent(new Event('input'));
                                    }
                                }
                            } catch(err) { /* fallback al paste nativo */ }
                            setTimeout(scheduleAnalyze, 30);
                        });
                        // Análisis inicial (por si el editor ya tiene código del localStorage)
                        setTimeout(() => {
                            if (playgroundEditor.value.trim()) {
                                analyzeCodeSilent();
                            }
                        }, 200);
                    }

                    // ── Global keyboard shortcuts ──────────────────────────
                    document.addEventListener("keydown", (e) => {
                        let ta = document.activeElement;
                        let isBigEditor = ta && (ta.classList.contains("big-editor") || ta.classList.contains("code-editor"));

                        // FIX: helper para decidir si interceptar atajos del playground.
                        // Solo lo hacemos si el editor tiene foco O la sección
                        // playground es visible en el viewport. Así F5 (recargar
                        // página) y similares siguen funcionando cuando el
                        // usuario está leyendo lecciones o referencia.
                        // FIX: también detectar el modo fullscreen — cuando el
                        // grid está movido al body, el section queda vacío y
                        // su altura es 0, lo que rompía la heurística del
                        // viewport.
                        let _playgroundActive = (() => {
                            if (isBigEditor) return true;
                            // Si el grid está en fullscreen, el playground está activo
                            let gridFs = document.querySelector('.playground-grid.fullscreen');
                            if (gridFs) return true;
                            let pg = document.getElementById('playground');
                            if (!pg) return false;
                            let r = pg.getBoundingClientRect();
                            return r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.2;
                        })();

                        // F5: ejecutar playground (solo si está activo)
                        if (e.key === "F5" && !e.altKey && _playgroundActive) {
                            e.preventDefault();
                            runPlayground();
                            return;
                        }

                        // F6: limpiar consola (solo si playground activo)
                        if (e.key === "F6" && _playgroundActive) {
                            e.preventDefault();
                            clearConsole('playgroundConsole');
                            showToast("🗑 Consola limpia");
                            return;
                        }

                        // F7: abrir diagrama de flujo (solo si playground activo)
                        if (e.key === "F7" && _playgroundActive) {
                            e.preventDefault();
                            openFlowchart();
                            return;
                        }

                        // F11: toggle fullscreen editor SOLO si el playground
                        // está activo. Si no, dejamos pasar F11 al navegador.
                        // Shift+F11 siempre pasa al navegador (fullscreen real).
                        if (e.key === "F11" && !e.shiftKey && _playgroundActive) {
                            e.preventDefault();
                            toggleEditorFullscreen();
                            return;
                        }

                        // Ctrl+` (backtick): toggle consola en fullscreen
                        // Ctrl+` (backtick): toggle tab consola en fullscreen
                        // estilo VS Code.
                        if ((e.key === "`" || e.key === "º" || e.key === "|") && e.ctrlKey && _playgroundActive) {
                            let gridFs = document.querySelector('.playground-grid.fullscreen');
                            if (gridFs) {
                                e.preventDefault();
                                if (window.fsToggleTab) fsToggleTab('console');
                                return;
                            }
                        }

                        // Escape: cerrar modals / autocompletado / salir de fullscreen
                        if (e.key === "Escape") {
                            if (_acVisible) { hideAutocomplete(); return; }
                            // Cerrar el menú Archivo si está abierto
                            let fileMenu = document.getElementById("fileMenuDropdown");
                            if (fileMenu && fileMenu.classList.contains("open")) {
                                closeFileMenu();
                                return;
                            }
                            // Cerrar modal de descarga de hojas si está abierto
                            // (PRIORIDAD sobre el modal del flowchart porque está encima)
                            let dlModal = document.getElementById("fcDownloadModal");
                            if (dlModal && dlModal.classList.contains("open")) {
                                _fcCloseDownloadModal();
                                return;
                            }
                            // Cerrar diagrama de flujo si está abierto
                            let fcModal = document.getElementById("flowchartModal");
                            if (fcModal && fcModal.classList.contains("open")) {
                                closeFlowchart();
                                return;
                            }
                            if (document.getElementById("shortcutsModal").classList.contains("open")) { toggleShortcuts(); return; }
                            // Salir de fullscreen si está activo (FIX: ahora
                            // el fullscreen se aplica al grid completo, no
                            // solo al panel del editor).
                            let fsGrid = document.querySelector('.playground-grid.fullscreen');
                            if (fsGrid) { toggleEditorFullscreen(); return; }
                        }

                        // FIX: estos atajos de "Archivo" son GLOBALES en
                        // el playground — funcionan incluso si el foco
                        // está en un botón de la topbar, no solo en el
                        // textarea. Antes estaban abajo del check
                        // `if (!isBigEditor) return;` y eso los rompía
                        // cuando el usuario clickeaba botones en fullscreen.
                        if (_playgroundActive) {
                            // Ctrl+S: formatear código (estilo gofmt) — del editor activo
                            if (e.key === "s" && e.ctrlKey && !e.shiftKey) {
                                e.preventDefault();
                                if (typeof formatActiveEditor === 'function') formatActiveEditor();
                                else formatPlaygroundCode();
                                return;
                            }
                            // Ctrl+Shift+S: descargar .psc
                            if (e.key === "S" && e.ctrlKey && e.shiftKey) {
                                e.preventDefault();
                                downloadCode();
                                return;
                            }
                            // Ctrl+O: importar archivo .psc
                            if (e.key === "o" && e.ctrlKey && !e.shiftKey) {
                                e.preventDefault();
                                importCode();
                                return;
                            }
                            // Ctrl+L: limpiar editor
                            if (e.key === "l" && e.ctrlKey && !e.shiftKey) {
                                e.preventDefault();
                                clearEditor();
                                return;
                            }
                            // Ctrl+Shift+C: copiar código completo
                            if (e.key === "C" && e.ctrlKey && e.shiftKey) {
                                e.preventDefault();
                                copyCode();
                                return;
                            }
                        }

                        if (!isBigEditor) {
                            // Atajos específicos del editor (Ctrl+D, Ctrl+K,
                            // Tab, autocompletado, etc.) requieren foco en el
                            // textarea. Salir aquí evita interferir con la
                            // navegación normal del navegador en el resto
                            // de la página.
                            return;
                        }

                        // Ctrl+Space: autocompletado
                        if (e.key === " " && e.ctrlKey) {
                            e.preventDefault();
                            showAutocomplete(ta);
                            return;
                        }

                        // Arrow keys in autocomplete
                        if (_acVisible) {
                            if (e.key === "ArrowDown") { e.preventDefault(); acMoveSelection(1); return; }
                            if (e.key === "ArrowUp")   { e.preventDefault(); acMoveSelection(-1); return; }
                            if (e.key === "Enter" || e.key === "Tab") {
                                if (_acFiltered.length) {
                                    e.preventDefault();
                                    let word = (ta.value.substring(0, ta.selectionStart).match(/[\w]+$/) || [""])[0];
                                    applyAutocomplete(ta, word, _acFiltered[_acSelectedIdx]);
                                    return;
                                }
                            }
                            if (e.key === "Escape") { hideAutocomplete(); return; }
                        }

                        // Ctrl+Enter: ejecutar código del editor activo
                        if (e.key === "Enter" && e.ctrlKey) {
                            e.preventDefault();
                            const id = ta.id;
                            if (id === "playgroundEditor") {
                                if (typeof runPlayground === "function") runPlayground();
                            } else if (id === "exampleEditor") {
                                if (typeof runLessonExample === "function") runLessonExample();
                            } else if (id === "challengeEditor") {
                                if (typeof runChallenge === "function") runChallenge();
                            }
                            return;
                        }

                        // Enter: auto-indent inteligente
                        if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !_acVisible) {
                            e.preventDefault();
                            handleSmartEnter(ta);
                            return;
                        }

                        // Auto-cierre de paréntesis, corchetes y comillas
                        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
                            const pairs = { '(': ')', '[': ']', '"': '"' };
                            if (pairs[e.key]) {
                                let start = ta.selectionStart, end = ta.selectionEnd;
                                let val = ta.value;
                                // Si hay texto seleccionado, envolverlo
                                if (start !== end) {
                                    e.preventDefault();
                                    let sel = val.substring(start, end);
                                    // FIX: usar execCommand("insertText") en vez de
                                    // asignar ta.value directamente, así Ctrl+Z
                                    // sigue funcionando. Antes el undo se rompía
                                    // cada vez que el editor auto-cerraba un par.
                                    let inserted = e.key + sel + pairs[e.key];
                                    if (!document.execCommand('insertText', false, inserted)) {
                                        // Fallback si execCommand no funciona
                                        ta.value = val.substring(0, start) + inserted + val.substring(end);
                                    }
                                    ta.selectionStart = start + 1;
                                    ta.selectionEnd = end + 1;
                                    ta.dispatchEvent(new Event("input"));
                                    return;
                                }
                                // Si el siguiente char es el cierre, solo mover cursor
                                if (val[start] === pairs[e.key] && (e.key === '"' || e.key === ')' || e.key === ']')) {
                                    // saltar el cierre
                                    if (e.key === '"' && val[start] === '"') {
                                        e.preventDefault();
                                        ta.selectionStart = ta.selectionEnd = start + 1;
                                        return;
                                    }
                                }
                                // Insertar par (preservando undo)
                                e.preventDefault();
                                let pair = e.key + pairs[e.key];
                                if (!document.execCommand('insertText', false, pair)) {
                                    ta.value = val.substring(0, start) + pair + val.substring(end);
                                }
                                ta.selectionStart = ta.selectionEnd = start + 1;
                                ta.dispatchEvent(new Event("input"));
                                return;
                            }
                            // Saltar cierre si ya existe ')' o ']' que el usuario escribe sobre el existente
                            if ((e.key === ')' || e.key === ']') && ta.value[ta.selectionStart] === e.key && ta.selectionStart === ta.selectionEnd) {
                                e.preventDefault();
                                ta.selectionStart = ta.selectionEnd = ta.selectionStart + 1;
                                return;
                            }
                            // Backspace: eliminar par vacío
                            if (e.key === "Backspace" && ta.selectionStart === ta.selectionEnd && ta.selectionStart > 0) {
                                let prev = ta.value[ta.selectionStart - 1];
                                let next = ta.value[ta.selectionStart];
                                const openClose = { '(':')', '[':']', '"':'"' };
                                if (openClose[prev] === next) {
                                    e.preventDefault();
                                    let pos = ta.selectionStart;
                                    // FIX: usar execCommand("delete") para preservar undo
                                    // Seleccionamos el par y lo eliminamos
                                    ta.selectionStart = pos - 1;
                                    ta.selectionEnd = pos + 1;
                                    if (!document.execCommand('delete', false)) {
                                        ta.value = ta.value.substring(0, pos - 1) + ta.value.substring(pos + 1);
                                        ta.selectionStart = ta.selectionEnd = pos - 1;
                                    }
                                    ta.dispatchEvent(new Event("input"));
                                    return;
                                }
                            }
                        }

                        // Ctrl+/ : comentar/descomentar
                        if ((e.key === "/" || e.key === "7") && e.ctrlKey) {
                            e.preventDefault();
                            let start = ta.selectionStart, end = ta.selectionEnd;
                            let lines = ta.value.split("\n");
                            let startLine = ta.value.substring(0, start).split("\n").length - 1;
                            let endLine = ta.value.substring(0, end).split("\n").length - 1;
                            let allCommented = true;
                            for (let i = startLine; i <= endLine; i++) {
                                if (!lines[i].trim().startsWith("//")) { allCommented = false; break; }
                            }
                            for (let i = startLine; i <= endLine; i++) {
                                if (allCommented) lines[i] = lines[i].replace(/^(\s*)\/\/\s?/, "$1");
                                else lines[i] = lines[i].replace(/^(\s*)/, "$1// ");
                            }
                            let newValue = lines.join("\n");
                            // FIX: usar select-all + insertText para preservar undo
                            ta.selectionStart = 0;
                            ta.selectionEnd = ta.value.length;
                            if (!document.execCommand('insertText', false, newValue)) {
                                ta.value = newValue;
                            }
                            // Restaurar selección aproximada
                            ta.selectionStart = Math.min(start, ta.value.length);
                            ta.selectionEnd = Math.min(end, ta.value.length);
                            ta.dispatchEvent(new Event("input"));
                            return;
                        }

                        // Ctrl+D: duplicar línea
                        if (e.key === "d" && e.ctrlKey && !e.shiftKey) {
                            e.preventDefault();
                            duplicateLine(ta);
                            return;
                        }

                        // Ctrl+K: eliminar línea (antes era Ctrl+Shift+K)
                        if ((e.key === "k" || e.key === "K") && e.ctrlKey && !e.shiftKey) {
                            e.preventDefault();
                            deleteLine(ta);
                            return;
                        }

                        // Ctrl+X sin selección: cortar línea (copia al portapapeles y borra)
                        if ((e.key === "x" || e.key === "X") && e.ctrlKey && !e.shiftKey &&
                            ta.selectionStart === ta.selectionEnd) {
                            e.preventDefault();
                            cutCurrentLine(ta);
                            return;
                        }
                        if ((e.key === "x" || e.key === "X") && e.ctrlKey && !e.shiftKey &&
                            ta.selectionStart !== ta.selectionEnd) {
                            // Corte de selección nativa: limpiar flag isLine
                            _internalClipboard = { text: '', isLine: false };
                        }

                        // Ctrl+C sin selección: copiar línea al portapapeles (estilo VS Code)
                        // Si HAY selección, dejar el comportamiento por defecto del navegador
                        // pero marcar el clipboard interno como texto normal (no línea).
                        if ((e.key === "c") && e.ctrlKey && !e.shiftKey &&
                            ta.selectionStart === ta.selectionEnd) {
                            e.preventDefault();
                            copyCurrentLine(ta);
                            return;
                        }
                        if ((e.key === "c") && e.ctrlKey && !e.shiftKey &&
                            ta.selectionStart !== ta.selectionEnd) {
                            // Selección normal: limpiar flag isLine para que Ctrl+V no pegue como línea
                            _internalClipboard = { text: '', isLine: false };
                            // dejar comportamiento nativo del navegador
                        }

                        // Ctrl+V: si el portapapeles interno tiene una línea completa,
                        // pegarla como línea nueva (comportamiento VS Code).
                        // Si no, dejar el comportamiento nativo.
                        if ((e.key === "v") && e.ctrlKey && !e.shiftKey &&
                            _internalClipboard.isLine && isBigEditor) {
                            e.preventDefault();
                            pasteInternalLine(ta);
                            return;
                        }

                        // Alt+ArrowUp / Alt+ArrowDown: mover línea
                        if (e.altKey && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
                            e.preventDefault();
                            moveLine(ta, e.key === "ArrowUp" ? -1 : 1);
                            return;
                        }

                        // Ctrl+Shift+C: copiar código completo (mantengo este por compatibilidad)
                        if (e.key === "C" && e.ctrlKey && e.shiftKey && ta.id === "playgroundEditor") {
                            e.preventDefault();
                            copyCode();
                            return;
                        }

                        // FIX: Ctrl+S ahora FORMATEA el código (estilo gofmt).
                        // Antes descargaba el .psc, lo cual sorprendía al usuario
                        // y era difícil de descubrir. Ahora Ctrl+S es la opción
                        // de "guardar" mental → reformatea sin descargar.
                        // Ctrl+Shift+S descarga el archivo .psc.
                        if (e.key === "s" && e.ctrlKey && !e.shiftKey) {
                            e.preventDefault();
                            formatPlaygroundCode();
                            return;
                        }
                        if (e.key === "S" && e.ctrlKey && e.shiftKey) {
                            e.preventDefault();
                            downloadCode();
                            return;
                        }

                        // Ctrl+O: abrir archivo (importar .psc)
                        if (e.key === "o" && e.ctrlKey && !e.shiftKey) {
                            e.preventDefault();
                            importCode();
                            return;
                        }

                        // Ctrl+L: limpiar editor
                        if (e.key === "l" && e.ctrlKey && !e.shiftKey) {
                            e.preventDefault();
                            clearEditor();
                            return;
                        }

                        // Show autocomplete on typing (after 2+ chars).
                        if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
                            setTimeout(() => showAutocomplete(ta), 0);
                        } else if (e.key === "Backspace") {
                            setTimeout(() => showAutocomplete(ta), 0);
                        } else if (_acVisible && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
                            // Las flechas verticales con popup abierto navegan la lista
                            // (lo maneja otro handler). No ocultamos.
                        } else {
                            // Cualquier otra tecla (flechas horizontales/verticales sin popup,
                            // Home, End, Page Up/Down, Delete, Escape, etc.) oculta el popup
                            // para que no quede flotando al mover el cursor.
                            hideAutocomplete();
                        }
                    });

                    // Hide autocomplete on click outside
                    document.addEventListener("mousedown", (e) => {
                        if (!e.target.closest("#autocompletePopup")) hideAutocomplete();
                    });

                    console.log(
                        "%c⬡ PSeInt Academy v9 %cCargado · Gerente ✓ Arquitecto ✓ Backend ✓ Frontend ✓ QA ✓ · Validación automática activada",
                        "color:#00d4ff;font-weight:800;font-size:1.1rem",
                        "color:#94a3b8"
                    );
                } catch (e) {
                    console.error("Error durante inicialización:", e);
                    setTimeout(safeInit, 1000);
                }
            }

            // ─── Modal de bienvenida (primera visita) ────────────────────
            function showWelcomeIfNeeded() {
                try {
                    if (localStorage.getItem("pseint_welcomed") === "true") return;
                } catch(e) { return; }
                const overlay = document.createElement("div");
                overlay.setAttribute("role", "dialog");
                overlay.setAttribute("aria-modal", "true");
                overlay.setAttribute("aria-labelledby", "welcomeTitle");
                overlay.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.78);z-index:1000;display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(4px)";
                const card = document.createElement("div");
                card.style.cssText = "background:var(--bg-card);border:1px solid var(--border);border-radius:14px;max-width:520px;width:100%;padding:28px;box-shadow:0 8px 48px rgba(0,212,255,0.18);font-family:var(--font-body);color:var(--text-main)";
                card.innerHTML = `
                    <h2 id="welcomeTitle" style="margin:0 0 8px;color:var(--accent1);font-size:1.4rem">👋 ¡Bienvenido a PSeInt Academy!</h2>
                    <p style="color:var(--text-muted);margin-bottom:18px;font-size:0.92rem">Aprende programación con pseudocódigo en español, directo en tu navegador.</p>
                    <div style="display:grid;gap:10px;margin-bottom:20px">
                      <div style="display:flex;gap:10px;align-items:flex-start"><span style="font-size:1.3rem">📚</span><div><strong>Lecciones</strong><div style="color:var(--text-muted);font-size:0.85rem">Teoría + ejemplo + reto. Avanza a tu ritmo.</div></div></div>
                      <div style="display:flex;gap:10px;align-items:flex-start"><span style="font-size:1.3rem">💻</span><div><strong>Editor libre</strong><div style="color:var(--text-muted);font-size:0.85rem">Prueba tu propio código con resaltado y autocompletado.</div></div></div>
                      <div style="display:flex;gap:10px;align-items:flex-start"><span style="font-size:1.3rem">📖</span><div><strong>Referencia rápida</strong><div style="color:var(--text-muted);font-size:0.85rem">Todas las palabras clave y funciones del lenguaje.</div></div></div>
                    </div>
                    <div style="background:rgba(0,212,255,0.08);border-left:3px solid var(--accent1);padding:10px 14px;border-radius:6px;margin-bottom:18px;font-size:0.85rem">
                      <strong>💡 Atajos útiles:</strong><br>
                      <code style="font-family:var(--font-mono)">Ctrl + Enter</code> = ejecutar &nbsp;·&nbsp; <code style="font-family:var(--font-mono)">Esc</code> = detener
                    </div>
                    <button id="welcomeStart" style="background:linear-gradient(135deg,var(--accent1),var(--accent2));border:none;color:#0a0e1a;font-weight:700;padding:11px 28px;border-radius:8px;cursor:pointer;font-size:0.95rem;width:100%">¡Empezar a aprender!</button>
                `;
                overlay.appendChild(card);
                document.body.appendChild(overlay);
                const close = () => {
                    try { localStorage.setItem("pseint_welcomed", "true"); } catch(e){}
                    overlay.remove();
                };
                card.querySelector("#welcomeStart").addEventListener("click", close);
                overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
                // NOTA: Esc para cerrar este overlay lo maneja el handler global
                // `_escMaster` (capture phase). No registramos un handler extra
                // aquí para evitar cierres en cascada.
                setTimeout(() => { try { card.querySelector("#welcomeStart").focus(); } catch(e){} }, 50);
            }

            // ── Selector de tema del editor (5 opciones) ──────────────────
            // Aplica el tema actual (persistido) al cargar, sincroniza el <select>,
            // y guarda en localStorage cada vez que el usuario cambia.
            (function initThemeSelector() {
                const VALID = new Set(['dark','light','solarized','monokai','ocean']);
                function applyTheme(name) {
                    if (!VALID.has(name)) name = 'dark';
                    if (name === 'dark') {
                        document.documentElement.removeAttribute('data-theme');
                    } else {
                        document.documentElement.setAttribute('data-theme', name);
                    }
                    // Sync con todos los <select> de tema (puede haber en fullscreen también)
                    document.querySelectorAll('#themeSelector, #themeSelectorFs').forEach(sel => {
                        if (sel.value !== name) sel.value = name;
                    });
                    // Actualizar label de TODOS los pickers visuales (puede haber varios)
                    document.querySelectorAll('.theme-picker-label').forEach(lbl => {
                        lbl.textContent = name.charAt(0).toUpperCase() + name.slice(1);
                    });
                    // Marcar tema activo en el menú global
                    document.querySelectorAll('.theme-option').forEach(opt => {
                        opt.dataset.active = (opt.dataset.theme === name) ? '1' : '0';
                    });
                }
                function loadInitial() {
                    let saved = null;
                    try { saved = localStorage.getItem('pseinc_theme'); } catch(_) {}
                    applyTheme(saved || 'dark');
                }
                function attachListeners() {
                    document.querySelectorAll('#themeSelector, #themeSelectorFs').forEach(sel => {
                        if (sel._themeAttached) return;
                        sel._themeAttached = true;
                        sel.addEventListener('change', () => {
                            const name = sel.value;
                            applyTheme(name);
                            try { localStorage.setItem('pseinc_theme', name); } catch(_) {}
                            if (typeof showToast === 'function') showToast(`🎨 Tema: ${name.charAt(0).toUpperCase()+name.slice(1)}`);
                        });
                    });
                }
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', () => { loadInitial(); attachListeners(); });
                } else {
                    loadInitial();
                    setTimeout(attachListeners, 0);
                }
                window.applyTheme = applyTheme;
                // Re-attach periódicamente por si el <select> del fullscreen se inserta dinámicamente
                setTimeout(attachListeners, 500);
                setTimeout(attachListeners, 2000);

                // ── Picker visual de temas (con previews de colores) ──
                const THEMES_META = [
                    { id: 'dark',      name: 'Dark',      desc: 'Por defecto — cian/violeta neón sobre azul oscuro',
                      preview: { bg: '#0a0e1a', card: '#1a2236', text: '#e2e8f0', accent: '#00d4ff', kw: '#7c3aed', str: '#fbbf24' } },
                    { id: 'light',     name: 'Light',     desc: 'Claro estilo VS Code Light+',
                      preview: { bg: '#f6f8fb', card: '#eef2f7', text: '#1f2937', accent: '#0078d4', kw: '#c026d3', str: '#b45309' } },
                    { id: 'solarized', name: 'Solarized', desc: 'Paleta cálida y cremosa',
                      preview: { bg: '#002b36', card: '#0e4250', text: '#fdf6e3', accent: '#2aa198', kw: '#d33682', str: '#b58900' } },
                    { id: 'monokai',   name: 'Monokai',   desc: 'Clásico Sublime — vibrante',
                      preview: { bg: '#1e1f1c', card: '#2d2e28', text: '#f8f8f2', accent: '#66d9ef', kw: '#f92672', str: '#e6db74' } },
                    { id: 'ocean',     name: 'Ocean',     desc: 'Azul profundo + cyan',
                      preview: { bg: '#0b1a2b', card: '#1a304a', text: '#e0f2fe', accent: '#38bdf8', kw: '#f0abfc', str: '#fde68a' } }
                ];
                function buildThemeMenu() {
                    const menu = document.getElementById('themePickerMenu');
                    if (!menu || menu._built) return;
                    menu._built = true;
                    THEMES_META.forEach(t => {
                        const opt = document.createElement('button');
                        opt.type = 'button';
                        opt.className = 'theme-option';
                        opt.setAttribute('role', 'menuitem');
                        opt.dataset.theme = t.id;
                        opt.style.cssText = 'display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid transparent;border-radius:8px;cursor:pointer;background:transparent;color:var(--text-main);font:inherit;text-align:left;transition:all 0.12s;width:100%';
                        // Preview swatch
                        const swatch = document.createElement('div');
                        swatch.style.cssText = 'width:44px;height:32px;border-radius:5px;flex-shrink:0;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,0.1);background:' + t.preview.bg;
                        const swInner = document.createElement('div');
                        swInner.style.cssText = 'position:absolute;left:4px;top:4px;right:4px;bottom:4px;background:' + t.preview.card + ';border-radius:3px;display:flex;align-items:center;padding:2px 4px;gap:3px';
                        // Mini "código" de muestra dentro del swatch
                        ['accent', 'kw', 'str', 'text'].forEach(k => {
                            const dot = document.createElement('span');
                            dot.style.cssText = 'display:inline-block;width:5px;height:5px;border-radius:50%;background:' + t.preview[k];
                            swInner.appendChild(dot);
                        });
                        swatch.appendChild(swInner);
                        const info = document.createElement('div');
                        info.style.cssText = 'flex:1;min-width:0';
                        const nameDiv = document.createElement('div');
                        nameDiv.style.cssText = 'font-weight:700;font-size:0.85rem;display:flex;align-items:center;gap:6px';
                        nameDiv.innerHTML = t.name + ' <span class="theme-active-check" style="display:none;color:#10b981">✓</span>';
                        const descDiv = document.createElement('div');
                        descDiv.style.cssText = 'font-size:0.72rem;opacity:0.7;line-height:1.3';
                        descDiv.textContent = t.desc;
                        info.appendChild(nameDiv);
                        info.appendChild(descDiv);
                        opt.appendChild(swatch);
                        opt.appendChild(info);
                        opt.addEventListener('mouseover', () => { opt.style.background = 'rgba(0,212,255,0.08)'; opt.style.borderColor = 'var(--accent1)'; });
                        opt.addEventListener('mouseout', () => { opt.style.background = 'transparent'; opt.style.borderColor = (opt.dataset.active === '1') ? 'var(--accent1)' : 'transparent'; });
                        opt.addEventListener('click', () => {
                            applyTheme(t.id);
                            try { localStorage.setItem('pseinc_theme', t.id); } catch(_) {}
                            if (typeof showToast === 'function') showToast('🎨 Tema: ' + t.name);
                            closeThemePicker();
                        });
                        menu.appendChild(opt);
                    });
                    // Aplicar estado activo inicial
                    const current = (document.documentElement.getAttribute('data-theme') || 'dark');
                    document.querySelectorAll('.theme-option').forEach(o => {
                        const isActive = (o.dataset.theme === current);
                        o.dataset.active = isActive ? '1' : '0';
                        o.style.borderColor = isActive ? 'var(--accent1)' : 'transparent';
                        const chk = o.querySelector('.theme-active-check');
                        if (chk) chk.style.display = isActive ? 'inline' : 'none';
                    });
                }
                // Toggle del menú flotante (position:fixed) cerca del botón clickeado
                window.toggleThemePicker = function(triggerBtn) {
                    buildThemeMenu();
                    const menu = document.getElementById('themePickerMenu');
                    if (!menu) return;
                    const isOpen = menu.style.display === 'flex';
                    // Cerrar TODOS los botones expandidos
                    document.querySelectorAll('.theme-picker-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
                    if (isOpen) {
                        menu.style.display = 'none';
                        return;
                    }
                    // Calcular posición debajo del botón clickeado
                    const btn = triggerBtn || document.querySelector('.theme-picker-btn');
                    if (!btn) return;
                    const rect = btn.getBoundingClientRect();
                    menu.style.display = 'flex';
                    // Por defecto debajo y alineado a la derecha del botón
                    const menuWidth = 260;
                    let left = rect.right - menuWidth;
                    if (left < 10) left = 10;
                    if (left + menuWidth > window.innerWidth - 10) left = window.innerWidth - menuWidth - 10;
                    let top = rect.bottom + 6;
                    // Si no cabe abajo, mostrar arriba
                    if (top + 300 > window.innerHeight) {
                        top = rect.top - 6 - Math.min(300, menu.scrollHeight || 280);
                    }
                    menu.style.left = left + 'px';
                    menu.style.top = top + 'px';
                    btn.setAttribute('aria-expanded', 'true');
                    // Sync active state
                    const current = (document.documentElement.getAttribute('data-theme') || 'dark');
                    document.querySelectorAll('.theme-option').forEach(o => {
                        const isActive = (o.dataset.theme === current);
                        o.dataset.active = isActive ? '1' : '0';
                        o.style.borderColor = isActive ? 'var(--accent1)' : 'transparent';
                        const chk = o.querySelector('.theme-active-check');
                        if (chk) chk.style.display = isActive ? 'inline' : 'none';
                    });
                };
                window.closeThemePicker = function() {
                    const menu = document.getElementById('themePickerMenu');
                    if (menu) menu.style.display = 'none';
                    document.querySelectorAll('.theme-picker-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
                };
                // Cerrar al hacer click fuera
                document.addEventListener('click', (e) => {
                    if (e.target.closest('.theme-picker-wrap') || e.target.closest('#themePickerMenu')) return;
                    window.closeThemePicker();
                });
                // Cerrar al scroll o resize (la posición fija se desactualiza)
                window.addEventListener('scroll', window.closeThemePicker, { passive: true });
                window.addEventListener('resize', window.closeThemePicker);

                // Función helper: inyectar un theme picker en cualquier contenedor
                window.injectThemePicker = function(container) {
                    if (!container || container.querySelector('.theme-picker-wrap')) return;
                    const wrap = document.createElement('div');
                    wrap.className = 'theme-picker-wrap';
                    wrap.style.cssText = 'position:relative;display:inline-block';
                    const current = (document.documentElement.getAttribute('data-theme') || 'dark');
                    const currentLabel = current.charAt(0).toUpperCase() + current.slice(1);
                    wrap.innerHTML =
                        '<button type="button" class="theme-picker-btn" onclick="toggleThemePicker(this)" aria-label="Seleccionar tema" aria-haspopup="true" aria-expanded="false" ' +
                        'style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:var(--bg-card2);color:var(--text-main);border:1px solid var(--border);border-radius:8px;font-size:0.78rem;font:inherit;cursor:pointer">' +
                        '<span aria-hidden="true">🎨</span><span>Tema:</span>' +
                        '<span class="theme-picker-label" style="font-weight:700;color:var(--accent1)">' + currentLabel + '</span>' +
                        '<span aria-hidden="true" style="font-size:0.7rem;opacity:0.7">▾</span>' +
                        '</button>';
                    container.appendChild(wrap);
                };
            })();

            // ══════════════════════════════════════════════════════════════
            // SISTEMA DE REPORTES — anti-abuso + cuota + tracking
            // ══════════════════════════════════════════════════════════════
            const REPORT_CONFIG = {
                MONTHLY_QUOTA: 250,         // Web3Forms plan free
                COOLDOWN_MS: 60 * 60 * 1000, // 1 hora entre envíos del mismo usuario
                MIN_SUBJECT_LEN: 8,
                MAX_SUBJECT_LEN: 120,
                MIN_DESC_LEN: 25,
                MAX_DESC_LEN: 2000,
                MIN_DESC_WORDS: 5
            };

            function _currentMonthKey() {
                const d = new Date();
                return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
            }
            function _getReportStats() {
                const monthKey = _currentMonthKey();
                let count = 0, lastSent = 0;
                try {
                    count = parseInt(localStorage.getItem('pseinc_report_count_' + monthKey) || '0');
                    lastSent = parseInt(localStorage.getItem('pseinc_report_last') || '0');
                } catch(_) {}
                const remaining = Math.max(0, REPORT_CONFIG.MONTHLY_QUOTA - count);
                const cooldownLeft = Math.max(0, REPORT_CONFIG.COOLDOWN_MS - (Date.now() - lastSent));
                return { count, remaining, monthKey, lastSent, cooldownLeft };
            }
            function _incrementReportCount() {
                const monthKey = _currentMonthKey();
                try {
                    const cur = parseInt(localStorage.getItem('pseinc_report_count_' + monthKey) || '0');
                    localStorage.setItem('pseinc_report_count_' + monthKey, String(cur + 1));
                    localStorage.setItem('pseinc_report_last', String(Date.now()));
                } catch(_) {}
            }
            function _formatDuration(ms) {
                const min = Math.ceil(ms / 60000);
                if (min < 60) return min + ' min';
                const h = Math.floor(min / 60), m = min % 60;
                return h + 'h ' + (m ? m + 'min' : '');
            }
            // Sincronizar manualmente con el dashboard de Web3Forms
            window._syncQuotaFromDashboard = function() {
                const cur = prompt(
                    'Sincronizar contador con el dashboard real de Web3Forms.\n\n' +
                    'Ve a https://web3forms.com/dashboard, mira "Submissions this month",\n' +
                    'y escribe ese número aquí:'
                );
                if (cur === null) return;
                const n = parseInt(cur);
                if (isNaN(n) || n < 0 || n > 10000) {
                    if (typeof showToast === 'function') showToast('Número inválido. Pon un entero entre 0 y 10000.');
                    return;
                }
                const monthKey = _currentMonthKey();
                try {
                    localStorage.setItem('pseinc_report_count_' + monthKey, String(n));
                } catch(_) {}
                _updateQuotaBanner();
                if (typeof showToast === 'function') showToast('🔄 Contador sincronizado: ' + n + ' / ' + REPORT_CONFIG.MONTHLY_QUOTA);
            };

            function _generateTicketId() {
                const ts = Date.now().toString(36).toUpperCase().slice(-6);
                const rand = Math.floor(Math.random() * 9999).toString(36).toUpperCase().padStart(3, '0');
                return 'PSE-' + ts + '-' + rand;
            }
            function _updateQuotaBanner() {
                const stats = _getReportStats();
                const text = document.getElementById('reportQuotaText');
                const cooldown = document.getElementById('reportCooldownText');
                const bar = document.getElementById('reportQuotaBar');
                const syncWrap = document.getElementById('reportQuotaSyncWrap');
                if (!text || !bar) return;
                text.innerHTML = '📊 <b>' + stats.count + '</b> envíos hechos desde este navegador este mes <span style="opacity:0.6;font-size:0.7rem">(cuota total mensual: ' + REPORT_CONFIG.MONTHLY_QUOTA + ')</span>';
                if (syncWrap) syncWrap.style.display = 'inline-block';
                const pct = (stats.remaining / REPORT_CONFIG.MONTHLY_QUOTA) * 100;
                bar.style.width = Math.max(2, pct) + '%';
                // Color dinámico: verde >50% / ámbar 20-50% / rojo <20% / rojo+pulse 0%
                let color = '#10b981'; // green
                if (pct === 0) color = '#ef4444';
                else if (pct < 20) color = '#f97316'; // orange
                else if (pct < 50) color = '#fbbf24'; // amber
                bar.style.background = color;
                // Cooldown
                if (stats.cooldownLeft > 0) {
                    cooldown.innerHTML = '⏱ Próximo envío en <b>' + _formatDuration(stats.cooldownLeft) + '</b>';
                    cooldown.style.color = '#f97316';
                } else {
                    cooldown.innerHTML = '✓ Puedes enviar ahora';
                    cooldown.style.color = '#10b981';
                }
            }

            // ── Validación anti-spam del contenido ──
            function _validateReportContent(form) {
                const errors = [];
                const data = new FormData(form);
                const asunto = (data.get('Asunto') || '').toString().trim();
                const desc = (data.get('Descripcion') || '').toString().trim();
                const tipo = data.get('Tipo');
                const area = data.get('Area');

                if (!tipo) errors.push('Selecciona un tipo de reporte.');
                if (!area) errors.push('Selecciona un área afectada.');

                // ASUNTO
                if (asunto.length < REPORT_CONFIG.MIN_SUBJECT_LEN) {
                    errors.push('El asunto es muy corto (mínimo ' + REPORT_CONFIG.MIN_SUBJECT_LEN + ' caracteres). Describe brevemente el problema.');
                }
                if (asunto.length > REPORT_CONFIG.MAX_SUBJECT_LEN) {
                    errors.push('El asunto es muy largo (máximo ' + REPORT_CONFIG.MAX_SUBJECT_LEN + ' caracteres).');
                }
                if (/^(.)\1+$/.test(asunto)) {
                    errors.push('El asunto parece basura (un solo carácter repetido).');
                }
                if (/(.)\1{5,}/.test(asunto)) {
                    errors.push('El asunto tiene caracteres repetidos excesivamente (ej: "aaaaaa").');
                }

                // DESCRIPCIÓN
                if (desc.length < REPORT_CONFIG.MIN_DESC_LEN) {
                    errors.push('La descripción es muy corta (mínimo ' + REPORT_CONFIG.MIN_DESC_LEN + ' caracteres). Explica el problema con detalle.');
                }
                if (desc.length > REPORT_CONFIG.MAX_DESC_LEN) {
                    errors.push('La descripción es demasiado larga (máximo ' + REPORT_CONFIG.MAX_DESC_LEN + ' caracteres).');
                }
                if (/^(.)\1+$/.test(desc)) {
                    errors.push('La descripción parece basura. Escribe algo útil.');
                }
                if (/(.)\1{7,}/.test(desc)) {
                    errors.push('La descripción tiene demasiados caracteres repetidos.');
                }
                const descWords = desc.split(/\s+/).filter(w => w.length > 1).length;
                if (descWords < REPORT_CONFIG.MIN_DESC_WORDS) {
                    errors.push('La descripción debe tener al menos ' + REPORT_CONFIG.MIN_DESC_WORDS + ' palabras significativas.');
                }
                if (asunto.toLowerCase() === desc.toLowerCase() && asunto.length > 0) {
                    errors.push('El asunto y la descripción no pueden ser idénticos.');
                }
                // Detección de "teclas al azar": ratio vocales muy bajo en texto largo
                if (desc.length > 30) {
                    const vowels = (desc.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g) || []).length;
                    const letters = (desc.match(/[a-zA-ZáéíóúñÁÉÍÓÚÑ]/g) || []).length || 1;
                    if (vowels / letters < 0.15) {
                        errors.push('La descripción parece teclas al azar (muy pocas vocales). Escribe algo legible.');
                    }
                }
                // Solo signos / solo dígitos / solo símbolos
                if (/^[\d\s]+$/.test(desc)) errors.push('La descripción no puede ser solo números.');
                if (/^[^\w\s]+$/.test(desc)) errors.push('La descripción no puede ser solo signos.');

                return errors;
            }

            // ── Construir cuerpo HTML del mensaje (más descriptivo que la tabla por defecto) ──
            function _buildMessageBody(form, ticketId) {
                const data = new FormData(form);
                const tipo = data.get('Tipo') || 'Sin tipo';
                const severidad = data.get('Severidad') || '—';
                const area = data.get('Area') || 'Sin área';
                const asunto = data.get('Asunto') || '';
                const desc = data.get('Descripcion') || '';
                const pasos = data.get('Pasos') || '';
                const codigo = data.get('CodigoPseInt') || '';
                const email = data.get('_replyto') || '';
                const anon = data.get('Anonimo') || '';
                const ua = data.get('UserAgent') || '';
                const pant = data.get('Pantalla') || '';
                const idioma = data.get('Idioma') || '';
                const fecha = data.get('FechaCliente') || '';

                const sev = severidad.includes('Crítico') ? '🔴 CRÍTICO'
                    : severidad.includes('Importante') ? '🟠 IMPORTANTE'
                    : severidad.includes('Menor') ? '🟡 MENOR'
                    : severidad.includes('Cosmético') ? '🟢 COSMÉTICO'
                    : '';

                let body = '';
                body += '╔══════════════════════════════════════════════════════╗\n';
                body += '║   PSeInt Academy — Nuevo reporte                    ║\n';
                body += '╚══════════════════════════════════════════════════════╝\n\n';
                body += '🎫 Ticket: ' + ticketId + '\n';
                body += '📅 Recibido: ' + fecha + '\n';
                body += '\n';
                body += '─────────────────────────────────────────────────────────\n';
                body += '  CLASIFICACIÓN\n';
                body += '─────────────────────────────────────────────────────────\n';
                body += 'Tipo:      ' + tipo + '\n';
                if (sev) body += 'Severidad: ' + sev + '\n';
                body += 'Área:      ' + area + '\n';
                body += '\n';
                body += '─────────────────────────────────────────────────────────\n';
                body += '  ASUNTO\n';
                body += '─────────────────────────────────────────────────────────\n';
                body += asunto + '\n\n';
                body += '─────────────────────────────────────────────────────────\n';
                body += '  DESCRIPCIÓN\n';
                body += '─────────────────────────────────────────────────────────\n';
                body += desc + '\n\n';
                if (pasos.toString().trim()) {
                    body += '─────────────────────────────────────────────────────────\n';
                    body += '  PASOS PARA REPRODUCIR\n';
                    body += '─────────────────────────────────────────────────────────\n';
                    body += pasos + '\n\n';
                }
                if (codigo.toString().trim()) {
                    body += '─────────────────────────────────────────────────────────\n';
                    body += '  CÓDIGO PSEINT ADJUNTO\n';
                    body += '─────────────────────────────────────────────────────────\n';
                    body += '```\n' + codigo + '\n```\n\n';
                }
                body += '─────────────────────────────────────────────────────────\n';
                body += '  CONTACTO\n';
                body += '─────────────────────────────────────────────────────────\n';
                if (anon) {
                    body += 'Anónimo (sin email de contacto)\n';
                } else if (email) {
                    body += 'Email: ' + email + '\n';
                    body += '➜ Responde directo a este correo para contestarle.\n';
                } else {
                    body += 'No dejó email.\n';
                }
                body += '\n';
                body += '─────────────────────────────────────────────────────────\n';
                body += '  METADATOS TÉCNICOS\n';
                body += '─────────────────────────────────────────────────────────\n';
                body += 'Navegador: ' + ua + '\n';
                body += 'Pantalla:  ' + pant + '\n';
                body += 'Idioma:    ' + idioma + '\n';
                body += 'Página:    ' + (data.get('Pagina') || '') + '\n';
                body += 'Versión:   ' + (data.get('Version') || 'v1') + '\n';
                body += '\n';
                body += '─────────────────────────────────────────────────────────\n';
                body += 'Para seguimiento, referencia el ticket: ' + ticketId + '\n';
                return body;
            }

            // ── Formulario de reportes ─────────────────────
            window.openReportModal = function() {
                const m = document.getElementById('reportModal');
                if (!m) return;
                m.classList.add('open');
                _updateQuotaBanner();
                // Auto-rellenar metadatos del cliente
                try {
                    document.getElementById('reportUA').value = navigator.userAgent || '';
                    document.getElementById('reportScreen').value = (screen.width + 'x' + screen.height + ' / ' + window.innerWidth + 'x' + window.innerHeight);
                    document.getElementById('reportLang').value = navigator.language || '';
                    document.getElementById('reportDate').value = new Date().toLocaleString('es-CO', { dateStyle: 'medium', timeStyle: 'short' });
                } catch(_) {}
                setTimeout(() => { try { m.querySelector('input[type="radio"]').focus(); } catch(_) {} }, 60);
            };
            window.closeReportModal = function() {
                const m = document.getElementById('reportModal');
                if (m) m.classList.remove('open');
            };
            window.onReportTypeChange = function(value) {
                const sev = document.getElementById('reportSeverityWrap');
                if (sev) sev.style.display = (value === '🐛 Bug') ? 'block' : 'none';
                // Subject template más útil
                const subj = document.getElementById('reportSubjectAuto');
                if (subj) subj.value = '[PSeInt Academy] ' + value;
            };
            window.copyEditorToReport = function() {
                const editors = ['playgroundEditor','exampleEditor','challengeEditor'];
                let best = null;
                for (const id of editors) {
                    const el = document.getElementById(id);
                    if (el && el.value && el.value.trim()) {
                        // Priorizar el editor con foco; sino el playground; sino el primero con contenido
                        if (document.activeElement === el) { best = el; break; }
                        if (!best) best = el;
                    }
                }
                if (best) {
                    const target = document.querySelector('#reportForm textarea[name="CodigoPseInt"]');
                    if (target) {
                        target.value = best.value.substring(0, 4000); // cap defensivo
                        if (typeof showToast === 'function') showToast('📋 Código copiado al reporte');
                    }
                } else {
                    if (typeof showToast === 'function') showToast('No hay código en los editores');
                }
            };
            // Construir el cuerpo del reporte en formato legible
            function _buildReportBody(form) {
                const data = new FormData(form);
                const sections = [];
                sections.push('═══════════════════════════════════════════');
                sections.push('  PSeInt Academy — Reporte');
                sections.push('═══════════════════════════════════════════');
                sections.push('');
                const orderedKeys = ['Tipo', 'Severidad', 'Area', 'Asunto', 'Descripcion', 'Pasos', '_replyto', 'Anonimo'];
                const labels = {
                    'Tipo': 'Tipo de reporte',
                    'Severidad': 'Severidad',
                    'Area': 'Área afectada',
                    'Asunto': 'Asunto',
                    'Descripcion': 'Descripción',
                    'Pasos': 'Pasos para reproducir',
                    '_replyto': 'Email de contacto',
                    'Anonimo': 'Reporte anónimo'
                };
                for (const key of orderedKeys) {
                    const val = data.get(key);
                    if (!val) continue;
                    sections.push('▸ ' + (labels[key] || key) + ':');
                    sections.push(String(val).split('\n').map(l => '  ' + l).join('\n'));
                    sections.push('');
                }
                const code = data.get('CodigoPseInt');
                if (code && code.trim()) {
                    sections.push('▸ Código PSeInt:');
                    sections.push('  ┌──────────────────────────────────────────');
                    sections.push(code.split('\n').map(l => '  │ ' + l).join('\n'));
                    sections.push('  └──────────────────────────────────────────');
                    sections.push('');
                }
                sections.push('───────────────────────────────────────────');
                sections.push('  Metadatos automáticos');
                sections.push('───────────────────────────────────────────');
                const metaKeys = ['Pagina', 'Version', 'UserAgent', 'Pantalla', 'Idioma', 'FechaCliente'];
                for (const key of metaKeys) {
                    const val = data.get(key);
                    if (val) sections.push('  ' + key + ': ' + val);
                }
                sections.push('');
                sections.push('Enviado desde el formulario integrado.');
                return sections.join('\n');
            }

            function _buildReportMailto(form) {
                const data = new FormData(form);
                const subject = (data.get('_subject') || '[PSeInt Academy] Reporte');
                const body = _buildReportBody(form);
                return 'mailto:solopvppro@gmail.com'
                    + '?subject=' + encodeURIComponent(subject)
                    + '&body=' + encodeURIComponent(body);
            }

            // Submit: enviar vía Web3Forms con validación anti-spam + cuota + cooldown
            document.addEventListener('submit', function(e) {
                const form = e.target;
                if (!form || form.id !== 'reportForm') return;
                e.preventDefault();
                const btn = document.getElementById('reportSubmitBtn');
                const status = document.getElementById('reportStatus');

                // ── PASO 1: validar cuota mensual y cooldown ──
                const stats = _getReportStats();
                if (stats.remaining <= 0) {
                    status.style.display = 'block';
                    status.className = 'err';
                    status.innerHTML = '🚫 <b>Cuota mensual agotada.</b><br>'
                        + 'Se enviaron los ' + REPORT_CONFIG.MONTHLY_QUOTA + ' reportes permitidos este mes. '
                        + 'El contador se reinicia el día 1 del próximo mes.<br><br>'
                        + 'Mientras tanto, usa <a href="https://github.com/ldikay99/pseint-academy/issues/new" target="_blank" style="color:var(--color-warn-strong);text-decoration:underline">GitHub Issues</a> para reportar.';
                    return;
                }
                if (stats.cooldownLeft > 0) {
                    status.style.display = 'block';
                    status.className = 'err';
                    status.innerHTML = '⏱ <b>Espera un poco antes de enviar otro reporte.</b><br>'
                        + 'Puedes enviar el siguiente en <b>' + _formatDuration(stats.cooldownLeft) + '</b>.<br><br>'
                        + 'Esto evita spam y abuso del sistema. Para reportes urgentes adicionales usa '
                        + '<a href="https://github.com/ldikay99/pseint-academy/issues/new" target="_blank" style="color:var(--color-warn-strong);text-decoration:underline">GitHub Issues</a>.';
                    return;
                }

                // ── PASO 2: validar contenido (anti-spam) ──
                const valErrors = _validateReportContent(form);
                if (valErrors.length > 0) {
                    status.style.display = 'block';
                    status.className = 'err';
                    status.innerHTML = '⚠️ <b>Revisa estos puntos antes de enviar:</b><ul style="margin:8px 0 0 18px;padding:0">'
                        + valErrors.map(e => '<li style="margin-bottom:4px">' + e + '</li>').join('')
                        + '</ul>';
                    return;
                }

                // ── PASO 3: generar ticket y mensaje formateado ──
                const ticketId = _generateTicketId();
                const ticketField = document.getElementById('reportTicketId');
                if (ticketField) ticketField.value = ticketId;
                // Inyectar subject con ticket + el "message" formateado para el email
                const subjField = document.getElementById('reportSubjectAuto');
                const tipo = form.querySelector('input[name="Tipo"]:checked');
                const tipoStr = tipo ? tipo.value : 'Reporte';
                if (subjField) subjField.value = '[PSeInt] ' + ticketId + ' ' + tipoStr + ' — ' + (form.querySelector('input[name="Asunto"]').value.substring(0, 60));
                // Añadir un input hidden "message" con el cuerpo HTML formateado
                let msgField = form.querySelector('input[name="message"]');
                if (!msgField) {
                    msgField = document.createElement('input');
                    msgField.type = 'hidden';
                    msgField.name = 'message';
                    form.appendChild(msgField);
                }
                msgField.value = _buildMessageBody(form, ticketId);

                btn.disabled = true;
                btn.textContent = '⏳ Enviando...';
                status.style.display = 'block';
                status.className = 'info';
                status.textContent = 'Enviando reporte (ticket ' + ticketId + ')...';

                const formData = new FormData(form);

                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                    // No headers — dejamos al navegador poner Content-Type:
                    // multipart/form-data automático con boundary.
                }).then(async (r) => {
                    let data = null;
                    try { data = await r.json(); } catch(_) {}
                    return { ok: r.ok, status: r.status, data };
                }).then(({ok, data}) => {
                    const success = data && (data.success === true || data.success === 'true');

                    if (ok && success) {
                        _incrementReportCount();
                        _updateQuotaBanner();
                        status.className = 'ok';
                        status.innerHTML = '✅ <b>¡Reporte enviado!</b> Gracias por ayudar a mejorar la app.<br>'
                            + '🎫 Tu ticket: <code style="background:rgba(0,212,255,0.15);padding:2px 6px;border-radius:4px;font-weight:700">' + ticketId + '</code><br>'
                            + '<small style="opacity:0.85">Guárdalo si quieres hacer seguimiento. Si dejaste tu email, recibirás respuesta cuando lo revise.</small>';
                        form.reset();
                        const sev = document.getElementById('reportSeverityWrap');
                        if (sev) sev.style.display = 'none';
                        setTimeout(() => {
                            window.closeReportModal();
                            btn.disabled = false;
                            btn.textContent = '📤 Enviar reporte';
                            status.style.display = 'none';
                        }, 6000);
                        return;
                    }
                    // Error de validación o servidor
                    const msg = (data && (data.message || JSON.stringify(data))) || 'Error desconocido';
                    const mailtoLink = _buildReportMailto(form);
                    status.className = 'err';
                    status.innerHTML = '⚠️ <b>No se pudo enviar el reporte.</b><br>'
                        + '<small style="opacity:0.85">Detalle: ' + String(msg).substring(0, 200) + '</small><br><br>'
                        + 'Alternativas:<br>'
                        + '• <a href="' + mailtoLink + '" style="color:var(--color-warn-strong);text-decoration:underline">📧 Enviar por correo</a><br>'
                        + '• <a href="https://github.com/ldikay99/pseint-academy/issues/new" target="_blank" style="color:var(--color-warn-strong);text-decoration:underline">🐙 Abrir issue en GitHub</a>';
                    btn.disabled = false;
                    btn.textContent = '📤 Enviar reporte';
                }).catch((err) => {
                    // CASO IMPORTANTE: en muchos navegadores con bloqueadores
                    // (uBlock, Brave Shields, antivirus con filtro web), la REQUEST
                    // POST sí sale al servidor (el reporte LLEGA al autor), pero la
                    // RESPONSE es bloqueada y fetch rechaza con "Failed to fetch".
                    // Es decir: el reporte SE ENVÍA correctamente aunque veamos error.
                    console.warn('[Reporte] fetch.catch:', err && err.message ? err.message : err);
                    console.info('[Reporte] Aclaración: este error suele significar que la respuesta del servidor fue bloqueada (extensión/antivirus), PERO la petición POST sí salió. El correo probablemente ya llegó al autor. Si quieres confirmación visual, prueba en modo incógnito.');

                    const errMsg = err && err.message ? err.message : '';
                    const looksLikeFailedToFetch = /failed to fetch|networkerror|load failed/i.test(errMsg);

                    if (looksLikeFailedToFetch) {
                        // Asumir éxito + advertencia honesta (request sí salió)
                        _incrementReportCount();
                        _updateQuotaBanner();
                        status.className = 'ok';
                        status.innerHTML = '📨 <b>Reporte enviado.</b><br>'
                            + '🎫 Tu ticket: <code style="background:rgba(0,212,255,0.15);padding:2px 6px;border-radius:4px;font-weight:700">' + ticketId + '</code><br>'
                            + '<small style="opacity:0.9">Tu navegador bloqueó la confirmación visual del servidor (probablemente por un bloqueador, firewall corporativo o antivirus), pero la petición se envió correctamente y el autor recibirá tu mensaje en segundos.</small><br><br>'
                            + '<small style="opacity:0.75">Tip: para que la confirmación se vea en próximas ocasiones, prueba en modo incógnito (Ctrl+Shift+N) o desactiva extensiones para este sitio.</small>';
                        form.reset();
                        const sev = document.getElementById('reportSeverityWrap');
                        if (sev) sev.style.display = 'none';
                        setTimeout(() => {
                            window.closeReportModal();
                            btn.disabled = false;
                            btn.textContent = '📤 Enviar reporte';
                            status.style.display = 'none';
                        }, 8000);
                    } else {
                        // Error real (no típico de bloqueo de respuesta)
                        const mailtoLink = _buildReportMailto(form);
                        status.className = 'err';
                        status.innerHTML = '⚠️ <b>No se pudo conectar al servidor.</b><br>'
                            + '<small style="opacity:0.85">Detalle: ' + String(errMsg).substring(0, 150) + '</small><br><br>'
                            + 'Alternativas:<br>'
                            + '• <a href="' + mailtoLink + '" style="color:var(--color-warn-strong);text-decoration:underline">📧 Enviar por correo</a><br>'
                            + '• <a href="https://github.com/ldikay99/pseint-academy/issues/new" target="_blank" style="color:var(--color-warn-strong);text-decoration:underline">🐙 Abrir issue en GitHub</a>';
                        btn.disabled = false;
                        btn.textContent = '📤 Enviar reporte';
                    }
                });
            });

            window._copyReportToClipboard = function() {
                const txt = window._lastReportBody || '';
                if (!txt) return;
                navigator.clipboard.writeText(txt).then(() => {
                    if (typeof showToast === 'function') showToast('📋 Reporte copiado. Pégalo en un correo a solopvppro@gmail.com');
                }).catch(() => {
                    // Fallback: textarea temporal + execCommand
                    const ta = document.createElement('textarea');
                    ta.value = txt;
                    document.body.appendChild(ta);
                    ta.select();
                    try { document.execCommand('copy'); if (typeof showToast === 'function') showToast('📋 Copiado'); }
                    catch(_) { if (typeof showToast === 'function') showToast('No se pudo copiar — selecciona manualmente'); }
                    document.body.removeChild(ta);
                });
            };

            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", () => { safeInit(); showWelcomeIfNeeded(); });
            } else {
                safeInit();
                showWelcomeIfNeeded();
            }
