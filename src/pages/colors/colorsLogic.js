import {
  colors,
  colorsCuenta,
  colorTranslations,
  colorsDuration
} from './colorsConstants.js'

import {
  crearCestas,
  crearElementoEstelaColor,
  generarEstela
} from './colorsUtils'

import { finalColors } from './resultsColors.js'

export let colorsAlmacen
export let colorsInterval

export let empiezaTiempo
export let colorsEmpezado = false
export let juegoTerminado = false

export function setColorsEmpezadoTrue() {
  colorsEmpezado = true
}
// funcion para iniciar el juego

export function startColors() {
  empiezaTiempo = Date.now()
  colorsInterval = setInterval(() => {
    if (Date.now() - empiezaTiempo >= colorsDuration) {
      colorsEnd()
    } else {
      generarEstela()
    }
  }, 1500)
}

// logica end colors

export function colorsEnd() {
  if (juegoTerminado) return
  juegoTerminado = true
  console.log('ejecuting end')
  clearInterval(colorsInterval)

  document.querySelectorAll('.color').forEach((estela) => estela.remove())
  // llamo funcion que muestra x poantalla los resultados
  finalColors(colorsCuenta)
}

export function motorColors() {
  // reinicio clicks estelas
  for (const color in colorsCuenta) {
    colorsCuenta[color] = 0
  }
  // limpio nadad e home
  const homeContent = document.getElementById('homeContent')
  if (homeContent) {
    homeContent.remove()
  }
  // reinicio variables para el restart

  colorsEmpezado = false
  juegoTerminado = false

  empiezaTiempo = Date.now()

  const colorsContent = document.createElement('div')
  colorsContent.id = 'colorsContent'
  document.body.appendChild(colorsContent)
  // genero un fondo negro para el inicio

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
  colorsContent.appendChild(fondoContainer)
  // genero el titulo del juego

  const colorsNombreCont = document.createElement('div')
  colorsNombreCont.id = 'nombre'
  //tengo que poner una letra de cada color, genero un span para cada letra asi puedo tocarle el style y ponerle el color
  colorsNombreCont.innerHTML = `
  <h1 id="colorsnombre" style="letter-sapcing:2px;">
    <span style="color:rgba(255, 0, 0, 0.482) ;">C</span>
    <span style="color:rgba(11, 119, 11, 0.509) ;">O</span>
    <span style="color:rgba(93, 13, 93, 0.509) ;">L</span>
    <span style="color:rgba(211, 207, 0, 0.509) ;">O</span>
    <span style="color: rgba(23, 23, 138, 0.509);">R</span>
    <span style="color:rgba(136, 133, 133, 0.509);">S</span>
  </h1>`
  // d primeras lo oculto porque tengo el frame negro
  colorsNombreCont.classList.add('hidden')
  document.body.appendChild(colorsNombreCont)

  //cito  funcion para cestas

  colorsAlmacen = document.createElement('div')
  colorsAlmacen.id = 'Almacen'
  colorsContent.appendChild(colorsAlmacen)

  // por tanto, cuando inicio la pagina, cuando se carga quiero la pantalla negra

  //
  // efecto desvanecer del negro a mi fondo
  setTimeout(() => {
    colorsNombreCont.classList.remove('hidden') //muestro titulo

    setTimeout(() => {
      //
      fondoNegro.classList.add('hidden')

      setTimeout(() => {
        colorsNombreCont.classList.add('hidden')
        // ahora tiene que empezar el juego
        setTimeout(() => {
          fondoNegro.remove()
          colorsNombreCont.remove()
          startColors()
        }, 2000) //se va titulo
      }, 1000) // titulo 1 seg solo
    }, 3000) // titulo y fondo
  }, 1000) // fondo negro 1 s
  // negro visible 1 s
}
