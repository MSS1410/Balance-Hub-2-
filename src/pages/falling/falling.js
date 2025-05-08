import { balancedColors } from '../colors/resultsColors'
import { finalFalling } from './resultsfalling'

// var

export let especialClicks = 0
let fallingEmpezado = false
let fallingInterval
let fallingDuration = 20000
let empiezaTiempo
let juegoTerminado = false
export let circleAlmacen = []
export let especialGenerados = 0

export let especialEnScreen = 0
const minEspecial = 15
const maxEspecialEnScreen = 2
const maxCirculos = 500
// genero array para guardar circulos

const circles = {}
for (let i = 1; i <= 50; i++) {
  const circleName = `circle${i}` // para los nombres desde cirlce 01 hasta circle50, i sera recorrida del 1 al 50 dejando de numero de nombre la i que recorra
  circles[circleName] = {
    size: {
      opcion1: randomSize(),
      opcion2: randomSize()
    },
    velocidad: {
      opcion1: randomVel(),
      opcion2: randomVel()
    }
  }
}
// circulo Esp

circles.circleEspecial = {
  size: '50px',
  velocidad: '12s'
}
console.log(circles)
// generar funciones para size y velocidad
// sixe genero un array con distintos size y devuelvo el mismo array con math.floor y igual para velo
function randomSize() {
  const sizes = [
    '20px',
    '30px',
    '40px',
    '33px',
    '32px',
    '34px',
    '73px',
    '44px',
    '45px',
    '60px',
    '94px',
    '70px',
    '75px',
    '80px',
    '92px',
    '90px',
    '93px',
    '100px',
    '120px',
    '110px',
    '112px'
  ]
  return sizes[Math.floor(Math.random() * sizes.length)]
}

function randomVel() {
  const velos = [
    '6s',
    '1s',
    '2s',
    '3s',
    '3s',
    '3s',
    '4s',
    '4s',
    '4s',
    '6s',
    '6s',
    '5s',
    '6s',
    '6s',
    '7s',
    '8s',
    '9s',
    '10s',

    '14s',
    '15s',
    '15s',
    '16s',
    '16s',
    '17s',
    '17s',
    '18s',
    '19s',

    '10.5s'
  ]
  return velos[Math.floor(Math.random() * velos.length)]
}

export function motorFalling() {
  especialGenerados = 0
  especialEnScreen = 0
  especialClicks = 0
  juegoTerminado = false
  fallingEmpezado = false
  empiezaTiempo = Date.now()
  circleAlmacen = []

  const fallingContainer = document.createElement('div')
  fallingContainer.id = 'fallingContent'
  document.body.appendChild(fallingContainer)

  const fondoNegro = document.createElement('div')
  fondoNegro.id = 'fondoNegro'
  document.body.appendChild(fondoNegro)

  // genero fondo container
  const fondoContainer = document.createElement('div')
  fondoContainer.classList.add('fondoContainer')
  // genero fondo container
  const fondo = document.createElement('img')
  fondo.src = './assets/f5.png'
  fondo.classList.add('fondo')
  fondoContainer.appendChild(fondo)
  fallingContainer.appendChild(fondoContainer)

  //titulo y contit

  const tittlecont = document.createElement('div')
  tittlecont.id = 'ftittle'
  tittlecont.textContent = 'FALLING CIRCLES '
  fallingContainer.appendChild(tittlecont)

  const circleAlmacenDiv = document.createElement('div')
  circleAlmacenDiv.id = 'circAlmacenDiv'
  fallingContainer.appendChild(circleAlmacenDiv)

  setTimeout(() => {
    // tittlecont.classList.remove('hidden')
    tittlecont.style.opacity = 1
    console.log('titulo')
    setTimeout(() => {
      fondoNegro.classList.add('hidden')

      setTimeout(() => {
        // tittlecont.classList.add('hidden')
        tittlecont.style.opacity = '0'
        setTimeout(() => {
          fondoNegro.remove()
          tittlecont.remove()
          console.log('llamo funcion start')
          startFalling()
        }, 2000)
      }, 1000)
    }, 2000)
  }, 1000)
}

function startFalling() {
  empiezaTiempo = Date.now()
  fallingInterval = setInterval(() => {
    if (Date.now() - empiezaTiempo >= fallingDuration) {
      // fallingEnd()
      fallingEnd()
    } else {
      // para que los circulos salgan mas y con mas frecuencia

      for (let i = 0; i < 8; i++) {
        generarIntercalado()
      }
    }
  }, 500)
}

function generarIntercalado() {
  // selecciono pantalla pequeña a 480px
  const isMobile = window.matchMedia('(max-width:480px)').matches
  // si esta en movil 30% mas de rojos que en las demas
  const redChance = isMobile ? 0.3 : 0.1

  if (Math.random() < redChance) {
    generarEspecial()
  } else {
    generarCircle()
  }
}

function generarEspecial() {
  const fallingContainer = document.getElementById('fallingContent')

  const circleInfo = circles['circleEspecial'] // Obtenemos la info del círculo especial
  const circleFigure = document.createElement('div')
  circleFigure.classList.add('circle', 'van', 'espurna') // Clase general + especial

  // Asignamos tamaño, velocidad y posición inicial
  circleFigure.style.width = circleInfo.size
  circleFigure.style.height = circleInfo.size
  circleFigure.style.left = `${Math.random() * 90}vw`
  circleFigure.classList.add('circleEspecial')
  // Añadimos el círculo al contenedor de caídas
  fallingContainer.appendChild(circleFigure)

  // Iniciar la caída del círculo especial
  iniciarCaidaEspecial(circleFigure, circleInfo, 'circleEspecial')
  // delimito que tengo uno en scr para que espere el siguiente
  especialEnScreen = true
  // Incrementar el contador de especiales generados
  especialEnScreen++
  especialGenerados++
}
function iniciarCaidaEspecial(circleFigure, circleInfo, circlekey) {
  circleFigure.style.transition = `transform ${circleInfo.velocidad} linear`

  setTimeout(() => {
    circleFigure.style.transform = 'translateY(100vh)' // Caída

    // Cuando termina la animación, eliminamos el círculo y permitimos otro especial
    setTimeout(() => {
      circleFigure.remove() //
      especialEnScreen--
    }, parseFloat(circleInfo.velocidad) * 1000) // shoutout en milisec
  }, 100)

  //click to delete an one less

  circleFigure.addEventListener('click', () => {
    especialClicks++

    circleAlmacen.push(circleFigure.cloneNode(true))
    console.log('Círculo añadido al almacen:', circleAlmacen)
    document.querySelector('#circAlmacenDiv').appendChild(circleFigure)
    circleFigure.remove()
    especialEnScreen--
  })
}
function generarCircle() {
  const fallingContainer = document.getElementById('fallingContent')
  //elegir un circulo atleatorio de los disponibles incluyendo el especial
  // uso object.keys para tener un nuevo array con los nombres de los circle
  // tal que me quedara algo cmo ["circle1", "cirlce2","circle3"]
  const circleKeys = Object.keys(circles)

  const circleKey = circleKeys[Math.floor(Math.random() * circleKeys.length)]
  const circleInfo = circles[circleKey]

  // dentro de cirlce info obtengo los datos de ese circulo seleccionado, size y velo, es decir entro al array de circles buscando lo que seran las props de circle 2

  //crear elemento html para hacer el circulo
  const circleFigure = document.createElement('div')
  circleFigure.classList.add('circle', 'van') // le añado la clase circle general

  // establezco la velo¡cidad y el tamaño iniciales
  circleFigure.style.width = circleInfo.size.opcion1
  circleFigure.style.height = circleInfo.size.opcion1
  circleFigure.style.left = `${Math.random() * 90}vw`

  // aplico keyframes fall
  // circleFigure.style.animation = `fall${circleInfo.velocidad.opcion1} linear`
  // circleFigure.style.transform = 'translateY(100vh)'
  // coloco el inicio de los circulos atl
  fallingContainer.appendChild(circleFigure)

  // caidita del circulo pa
  iniciarCaida(circleFigure, circleInfo)
}

function iniciarCaida(circleFigure, circleInfo, circleKey) {
  //debo pasar vel inicial a ms para luego poder cambiar tamaño a mitad de recorrdido
  const velocidadInicial = parseFloat(circleInfo.velocidad.opcion1) * 1000

  setTimeout(() => {
    // Aplicamos la transición para la caída
    circleFigure.style.transition = `transform ${circleInfo.velocidad.opcion1} linear`
    circleFigure.style.transform = 'translateY(100vh)' // Movemos hacia abajo

    // Cambio de tamaño o velocidad a la mitad del recorrido
    setTimeout(() => {
      cambiarTamañoySize(circleFigure, circleInfo) // change velo o size
    }, 4000) //4s

    // Aplicamos desvanecimiento justo antes de que termine la caída
    setTimeout(() => {
      circleFigure.style.animation = 'desvanEfecto 1s forwards'
    }, velocidadInicial - 1000) // 1 sec before falliiin

    // Si es un círculo especial, añadimos el evento de click
    // if (circleKey === 'circleEspecial') {
    //   circleFigure.addEventListener('click', () => {
    //     especialClicks++
    //     document.querySelector('#circAlm').appendChild(circleFigure) // Lo almacenamos en circAlm
    //   })
    // }
  }, 100)
}
// function cambio velocity y size

function cambiarTamañoySize(circleFigure, circleInfo) {
  setTimeout(() => {
    // haremos que si math random me da menor de 0.5 cambie la velocidad y si me da mayor cambie el tamaño
    if (Math.random() > 0.5) {
      circleFigure.style.transition = `transform ${circleInfo.velocidad.opcion2} linear`
    } else {
      circleFigure.style.width = circleInfo.size.opcion2
      circleFigure.style.height = circleInfo.size.opcion2
    }
  }, Math.random() * 4000)
}

export function fallingEnd() {
  if (juegoTerminado) return
  juegoTerminado = true
  console.log('ejecutando cierre falling')
  clearInterval(fallingInterval)

  document
    .querySelectorAll('.circle')
    .forEach((circleKey) => circleKey.remove())

  finalFalling(circleAlmacen)
}
