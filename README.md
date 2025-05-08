# Balance-Hub-2-
BALANCE-HUB 3 GAMES IN 1



**Balance Hub** es una aplicación web interactiva que integra una serie de juegos secuenciales. El usuario debe completar cada etapa satisfactoriamente para poder avanzar a la siguiente, garantizando un "balance" en su rendimiento. Entre los juegos se encuentran un desafío de selección de colores, una experiencia interactiva con círculos en caída y un clásico Tic Tac Toe.

---

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)


- [Licencia](#licencia)

---

## Descripción

**Balance Hub** es una plataforma lúdica en la que cada pantalla corresponde a un juego distinto. Solo cuando se cumplen ciertos criterios de “balance” en cada etapa, se permite al usuario pasar a la siguiente fase. Esto asegura una experiencia progresiva y retadora en la que se fusionan efectos visuales, animaciones y lógica de juego.

---

## Características

- **Interactividad secuencial:** El usuario avanza de juego en juego solo tras cumplir los objetivos.
- **Animaciones y transiciones:** Uso intensivo de CSS para ofrecer efectos visuales y transiciones suaves.
- **Múltiples juegos:** Incluye desafíos de selección de colores, manejo de elementos en movimiento y un Tic Tac Toe interactivo.
- **Responsividad:** Adaptación de la interfaz a diferentes dispositivos y tamaños de pantalla.

---

## Tecnologías Utilizadas

- **HTML5**
- **CSS3** (incluyendo animaciones y media queries)
- **JavaScript (ES6+)** (módulos ES, manipulación del DOM)
- **Vite** (para desarrollo y empaquetado)

---

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/MSS1410/Balance-HUB.git
   cd Balance-HUB

2. **Instalar Dependencias:**

   ```bash
     npm install
   
4. **Iniciar Servidor:**
   
   ```bash
   npm run dev

   
## Uso

Pantalla de Inicio: Al cargar la aplicación se muestra la pantalla de inicio con un botón "Start".

Navegación: Cada juego se despliega en pantalla completa y, al completarlo, se presenta un resumen de resultados antes de pasar a la siguiente etapa.

Interacción: Dependiendo del juego, el usuario interactúa mediante clics sobre colores, círculos o rejillas del Tic Tac Toe para cumplir los criterios establecidos.


## Notas Adicionales

-Pequeño percance en la carga de estilos, si no carga correctamente desde el html general con esta href:
 ( link rel="stylesheet" href="src./style.css" ) ,
 
 si el estilado sale roto, probar con cambiar el [ href="./style.css ]



## Estructura del Proyecto

```php  
Balance-HUB/
├── index.html               # Punto de entrada principal (para la versión de desarrollo o como plantilla)
├── package.json
├── public/                  # Activos estáticos (imágenes, fuentes, etc.)
├── src/
│   ├── main.js              # Script principal (importa el CSS y los módulos de juego)
│   ├── style.css            # Hoja de estilos principal
│   └── pages/
│       ├── home/
│       │   └── home.js      # Pantalla de inicio
│       ├── colors/
│       │   ├── colors.js        # Lógica del juego de colores
│       │   └── resultsColors.js # Resultados del juego de colores
│       ├── falling/
│       │   ├── falling.js       # Lógica del juego de círculos en caída
│       │   └── resultsFalling.js# Resultados del juego de círculos
│       └── toe/
│           └── toe.js           # Lógica del Tic Tac Toe




