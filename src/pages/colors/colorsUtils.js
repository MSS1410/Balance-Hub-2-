import {
  colors,
  colorsCuenta,
  colorsDuration,
  colorTranslations
} from './colorsConstants.js'

import {
  colorsAlmacen,
  startColors,
  colorsEmpezado,
  setColorsEmpezadoTrue
} from './colorsLogic.js'

// crear cesta
export function crearCestas() {
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

// elemento estela
export function crearElementoEstelaColor(color) {
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
      setColorsEmpezadoTrue()
      startColors()
    }
  })
  // quito la estela despues de dos segundos si no se clicka
  setTimeout(() => {
    elementoEstelaColor.remove()
  }, 6000)
  return elementoEstelaColor
}

// creo estela

export function generarEstela() {
  const rndmColor = colors[Math.floor(Math.random() * colors.length)]
  const colorsElement = crearElementoEstelaColor(rndmColor)
  colorsAlmacen.appendChild(colorsElement)
}
