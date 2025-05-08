import { finalColors } from './resultsColors'
import { motorFalling } from '../falling/falling'
const colors = ['rojo', 'verde', 'lila', 'amarillo', 'azul', 'gris']

const colorsCuenta = {
  rojo: 0,
  verde: 0,
  lila: 0,
  amarillo: 0,
  azul: 0,
  gris: 0
}
const colorTranslations = {
  rojo: 'Red',
  verde: 'Green',
  lila: 'Purple',
  amarillo: 'Yellow',
  azul: 'Blue',
  gris: 'Gray'
}

let objetoCesta = {}

let colorsAlmacen // Almacen de estelas para que sea accesible globalmente
let colorsEmpezado = false
let colorsInterval
let colorsDuration = 20000
let empiezaTiempo
let juegoTerminado = false

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
// desglose funcion crear cestas
// creo estela
function generarEstela() {
  const rndmColor = colors[Math.floor(Math.random() * colors.length)]
  const colorsElement = crearElementoEstelaColor(rndmColor)
  colorsAlmacen.appendChild(colorsElement)
}
//creo color para la estela

function crearCestas() {
  // generare un objeto empty, luego recorro mi array de colores y por cada cesta genero un div
  const objetoCesta = {} // reinicio
  colors.forEach((color) => {
    const cesta = document.createElement('div')
    cesta.classList.add('cesta')
    // marco cada cesta con su id usando el arg color
    cesta.id = `cesta-${color}`

    // ara ya tengo las cestas generadas tengo que colocarlas en pantalla
    // tendra que ser distinto para movil tableta o pc mis huevos

    document.body.appendChild(cesta)

    // añado las cestas div recien creadas al objcesta, la clave es el nombre del color
    objetoCesta[color] = cesta
  })
}

function crearElementoEstelaColor(color) {
  const elementoEstelaColor = document.createElement('div')
  //le añado la clase por ejemplo, color.red
  elementoEstelaColor.classList.add('color', color)
  // POSIcion atleatoria
  const moveX = Math.random() * 90 + 'vw' // Posición horizontal entre 0% y 100% del ancho
  const moveY = Math.random() * 20 + 'vh' // Posición vertical entre 0% y 100% de la altura

  // Aplicar las posiciones al elemento
  elementoEstelaColor.style.left = moveX
  elementoEstelaColor.style.top = moveY

  elementoEstelaColor.style.transform = 'moverEstela 4s linear fowards'
  // añadir click para conteo y eliminacion si click

  elementoEstelaColor.addEventListener('click', () => {
    // +1
    colorsCuenta[color]++
    //elimino estela click
    elementoEstelaColor.remove()
    console.log(`Color ${color} clicado, total: ${colorsCuenta[color]}`)
    // inicio el contador si es la primera estela
    if (!colorsEmpezado) {
      colorsEmpezado = true
      startColors()
    }
  })
  // quito la estela despues de dos segundos si no se clicka
  setTimeout(() => {
    elementoEstelaColor.remove()
  }, 6000)
  return elementoEstelaColor
}

// logica de inicio

// logica end colors

function colorsEnd() {
  if (juegoTerminado) return
  juegoTerminado = true
  console.log('ejecuting end')
  clearInterval(colorsInterval)

  document.querySelectorAll('.color').forEach((estela) => estela.remove())
  // llamo funcion que muestra x poantalla los resultados
  finalColors(colorsCuenta)
}
