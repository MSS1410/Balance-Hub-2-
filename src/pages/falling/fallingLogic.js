let fallingEmpezado = false
let fallingInterval

let empiezaTiempo
let juegoTerminado = false

import {
  especialClicks,
  circleAlmacen,
  especialGenerados,
  especialEnScreen,
  fallingDuration,
  circles,
  randomSize,
  randomVel,
  setEspecialClicks,
  setEspecialGenerados,
  setEspecialEnScreen,
  setCircleAlmacen
} from './fallingConstants'

import {
  createFallingContainers,
  createFondoContainer,
  createTitleContainer,
  createCircleAlmacen
} from './fallingUtils'

import { finalFalling } from './resultsfalling'
import { balancedColors } from '../colors/resultsColors'

export function motorFalling() {
  setEspecialGenerados(0)
  setEspecialClicks(0)
  setEspecialEnScreen(0)
  setCircleAlmacen([])

  juegoTerminado = false
  fallingEmpezado = false
  empiezaTiempo = Date.now()

  const { fallingContainer, fondoNegro } = createFallingContainers()
  const fondoContainer = createFondoContainer()
  fallingContainer.appendChild(fondoContainer)

  const tittlecont = createTitleContainer()
  fallingContainer.appendChild(tittlecont)

  const circleAlmacenDiv = createCircleAlmacen()
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
  // selecciono
  const isMobile = window.matchMedia('(max-width:480px)').matches

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
  setEspecialEnScreen(true)
  // Incrementar el contador de especiales generados
  setEspecialEnScreen(especialEnScreen + 1)
  setEspecialGenerados(especialGenerados + 1)
}
function iniciarCaidaEspecial(circleFigure, circleInfo, circlekey) {
  circleFigure.style.transition = `transform ${circleInfo.velocidad} linear`

  setTimeout(() => {
    circleFigure.style.transform = 'translateY(100vh)' // Caída

    // Cuando termina la animación, eliminamos el círculo y permitimos otro especial
    setTimeout(() => {
      circleFigure.remove() //
      setEspecialEnScreen(especialEnScreen - 1)
    }, parseFloat(circleInfo.velocidad) * 1000) // shoutout en milisec
  }, 100)

  //click to delete an one less

  circleFigure.addEventListener('click', () => {
    setEspecialClicks(especialClicks + 1)

    circleAlmacen.push(circleFigure.cloneNode(true))
    console.log('Círculo añadido al almacen:', circleAlmacen)
    document.querySelector('#circAlmacenDiv').appendChild(circleFigure)
    circleFigure.remove()
    setEspecialEnScreen(especialEnScreen - 1)
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
