import { motorColors } from './colorsLogic.js'
import { generarHome } from '../home/home.js'
import { motorFalling } from '../falling/fallingLogic.js'
import { saveProgress } from '../../utils/storage.js'

const colorTranslations = {
  rojo: 'Red',
  verde: 'Green',
  lila: 'Purple',
  amarillo: 'Yellow',
  azul: 'Blue',
  gris: 'Gray'
}
export function finalColors(colorsCuenta) {
  saveProgress(1, { colorsCuenta })
  const resultadoColors = document.createElement('div')
  resultadoColors.classList.add('resultadoColors')

  const fondoContainer = document.createElement('div')
  fondoContainer.classList.add('fondoContainer')
  // genero fondo container
  const fondo = document.createElement('img')
  fondo.src = './assets/f5.png'
  fondo.classList.add('fondo')

  resultadoColors.appendChild(fondoContainer)
  fondoContainer.appendChild(fondo)
  //mostrar recuento de colores

  const recuentoDiv = generarRecuento(colorsCuenta)
  resultadoColors.appendChild(recuentoDiv)

  document.body.innerHTML = ''
  document.body.appendChild(resultadoColors)

  // muestro recuento y verifico balance

  setTimeout(() => {
    recuentoDiv.classList.add('hidden')
    verificarBalance(resultadoColors, colorsCuenta)
    console.log('llamandoAverif')
  }, 3500)
}

function verificarBalance(resultadoColors, colorsCuenta) {
  // object.values convierto objeto de colorsCuenta en un array sacando solo los valores de este
  const valores = Object.values(colorsCuenta)
  // seteo los clicks en 0, paso bucle for por cada click que haya habido en el colorscuenta se sumara un valor a total clicks
  let totalClicks = 0
  for (let i = 0; i < valores.length; i++) {
    totalClicks += valores[i]
  }

  // si no hace click la saltamos a unbalanced oara que repita
  if (totalClicks === 0) {
    console.log('no click salta a unbalanced')
    unbalancedColors(resultadoColors)
    return
  }
  //  new set para que almacene los valores unicos
  const valoresCestas = new Set(Object.values(colorsCuenta))
  console.log('Comparando  cestas:', valoresCestas)

  if (valoresCestas.size === 1) {
    console.log('llamando balancedColors')
    balancedColors(resultadoColors)
  } else {
    console.log('llamando unbalancedColors')
    unbalancedColors(resultadoColors)
  }
}

function generarRecuento(colorsCuenta) {
  const recuentoDiv = document.createElement('div')
  recuentoDiv.classList.add('recuentoContainer')

  for (const color in colorsCuenta) {
    const colorCont = document.createElement('div')
    colorCont.classList.add('colorCont')

    const nombreColor = document.createElement('h3')
    nombreColor.textContent = colorTranslations[color] || color
    nombreColor.style.color = color
    colorCont.appendChild(nombreColor)

    const totalEstelas = document.createElement('p')
    totalEstelas.textContent = colorsCuenta[color]
    colorCont.appendChild(totalEstelas)

    recuentoDiv.appendChild(colorCont)
  }

  return recuentoDiv
}

export function balancedColors(resultadoColors) {
  console.log('Balanced shamadita')
  resultadoColors.innerHTML = ''
  // container

  const balancedColors = document.createElement('div')
  balancedColors.classList.add('balancedColors')

  // fondo
  const fondoContainer = document.createElement('div')
  fondoContainer.classList.add('fondoContainer')

  const fondo = document.createElement('img')
  fondo.src = './assets/f5.png'
  fondo.classList.add('fondo')

  balancedColors.appendChild(fondoContainer)
  fondoContainer.appendChild(fondo)

  const infoBalanced = document.createElement('div')
  infoBalanced.classList.add('infoBalanced')
  balancedColors.appendChild(infoBalanced)

  const textBalanced = document.createElement('h1')
  textBalanced.classList.add('text')
  textBalanced.textContent = 'Your choice is Balanced'
  infoBalanced.appendChild(textBalanced)

  const nextStage = document.createElement('button')
  nextStage.classList.add('butts')
  nextStage.textContent = 'Next Stage'
  balancedColors.appendChild(nextStage)

  const restart = document.createElement('button')
  restart.classList.add('butts')
  restart.textContent = 'Restart Colors'
  balancedColors.appendChild(restart)

  const homebut = document.createElement('button')
  homebut.classList.add('butts')
  homebut.textContent = ' Home '
  balancedColors.appendChild(homebut)

  nextStage.addEventListener('click', () => {
    // load falling sssssirkles
    document.body.innerHTML = ''
    saveProgress(2)
    motorFalling()
  })

  restart.addEventListener('click', () => {
    // recargo colore
    document.body.innerHTML = ''
    motorColors()
  })
  homebut.addEventListener('click', () => {
    // home coming
    const resultadoColors = document.querySelector('.resultadoColors')
    if (resultadoColors) {
      resultadoColors.style.transition = 'opacity 1s ease-in-out'
      resultadoColors.style.opacity = '0'

      setTimeout(() => {
        document.body.innerHTML = ''
        generarHome()
      }, 1000)
    }
  })
  resultadoColors.appendChild(balancedColors)
}

export function unbalancedColors(resultadoColors) {
  console.log('Unbalanced shamadon')

  resultadoColors.innerHTML = ''
  // container
  const unbalancedColors = document.createElement('div')
  unbalancedColors.classList.add('balancedColors')
  // fondo
  const fondoContainer = document.createElement('div')
  fondoContainer.classList.add('fondoContainer')

  const fondo = document.createElement('img')
  fondo.src = './assets/f5.png'
  fondo.classList.add('fondo')

  unbalancedColors.appendChild(fondoContainer)
  fondoContainer.appendChild(fondo)
  const infoUnbalanced = document.createElement('div')
  infoUnbalanced.classList.add('infoBalanced')
  unbalancedColors.appendChild(infoUnbalanced)

  const textunBalanced = document.createElement('h1')
  textunBalanced.classList.add('text')
  textunBalanced.textContent = 'Your choice lacks of Balance'
  infoUnbalanced.appendChild(textunBalanced)

  const helpDiv = document.createElement('div')
  helpDiv.classList.add('helpDiv')
  unbalancedColors.appendChild(helpDiv)

  // const helpText = document.createElement('p')
  // helpText.classList.add('helpTxt')
  // helpText.textContent = 'to advance to next stage, try to balance your picks'
  // helpDiv.appendChild(helpText)

  const helpBut = document.createElement('button')
  helpBut.classList.add('butts')
  helpBut.textContent = '?'
  helpDiv.appendChild(helpBut)

  const helpSign = document.createElement('p')

  helpSign.classList.add('helpSign')
  helpDiv.appendChild(helpSign)

  const restart = document.createElement('button')
  restart.classList.add('butts')
  restart.textContent = 'Restart Colors'

  unbalancedColors.appendChild(restart)

  const homebut = document.createElement('button')
  homebut.classList.add('butts')
  homebut.textContent = ' Home '
  unbalancedColors.appendChild(homebut)

  helpBut.addEventListener('click', () => {
    const helpMenu = document.createElement('div')
    helpMenu.classList.add('helpMenu')
    helpMenu.textContent = 'try to keep the balance between colors'
    document.body.appendChild(helpMenu)

    setTimeout(() => {
      helpMenu.remove()
    }, 6000)
  })

  restart.addEventListener('click', () => {
    document.body.innerHTML = ''
    motorColors()
  })
  homebut.addEventListener('click', () => {
    // home coming
    const resultadoColors = document.querySelector('.resultadoColors')
    if (resultadoColors) {
      resultadoColors.style.transition = 'opacity 1s ease-in-out'
      resultadoColors.style.opacity = '0'

      setTimeout(() => {
        document.body.innerHTML = ''
        generarHome()
      }, 1000)
    }
  })
  resultadoColors.appendChild(unbalancedColors)
}
