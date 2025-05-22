import { motorFalling } from './fallingLogic.js'
import { generarHome } from '../home/home'
import { saveProgress } from '../../utils/storage.js'
import { loadProgress } from '../../utils/storage.js'

import {
  especialGenerados,
  especialEnScreen,
  especialClicks
} from './fallingConstants.js'

import { presentToe } from '../toe/toe.js'
// import { circleAlmacen } from './falling'

export function finalFalling(circleAlmacen) {
  saveProgress(2, {
    especialClicks,
    especialGenerados,
    especialEnScreen
  })

  console.log(circleAlmacen)
  const resultadoFalling = document.createElement('div')
  resultadoFalling.classList.add('resultadoFalling')

  const fondoContainer = document.createElement('div')
  fondoContainer.classList.add('fondoContainer')
  // genero fondo container
  const fondo = document.createElement('img')
  fondo.src = './assets/f5.png'
  fondo.classList.add('fondo')

  resultadoFalling.appendChild(fondoContainer)
  fondoContainer.appendChild(fondo)

  const recuentoFalling = generarRecuentoFalling(circleAlmacen)
  resultadoFalling.appendChild(recuentoFalling)

  document.body.innerHTML = ''
  document.body.appendChild(resultadoFalling)
  document.querySelector('.recuentoFalling').classList.remove('hidden')

  setTimeout(() => {
    verificarBalance(resultadoFalling, circleAlmacen)
    console.log('llamando final')
  }, 3500)
}

function generarRecuentoFalling(circleAlmacen) {
  const recuentoContainer = document.createElement('div')
  recuentoContainer.classList.add('recuentoFalling')

  circleAlmacen.forEach((circle) => {
    const circleFigureEsp = document.createElement('div')
    circleFigureEsp.classList.add('circleEspecialCont') // Aseguramos que se vea como especial
    recuentoContainer.appendChild(circleFigureEsp)
  })

  return recuentoContainer
}

//verificar

function verificarBalance(resultadoFalling, circleAlmacen) {
  const nambercirkle = circleAlmacen.length
  if (nambercirkle >= 10) {
    circlesBalanced(resultadoFalling)
  } else {
    circlesUnbalanced(resultadoFalling)
  }
}

// +10 messi

export function circlesBalanced(resultadoFalling) {
  const circlesBalance = document.createElement('div')
  circlesBalance.classList.add('circlesBalance')

  const fondoContainer = document.createElement('div')
  fondoContainer.classList.add('fondoContainer')

  const fondo = document.createElement('img')
  fondo.src = './assets/f5.png'
  fondo.classList.add('fondo')

  circlesBalance.appendChild(fondoContainer)
  fondoContainer.appendChild(fondo)

  const divTextFall = document.createElement('div')
  divTextFall.classList.add('divTextFall')
  circlesBalance.appendChild(divTextFall)

  const textfall = document.createElement('h1')
  textfall.textContent = 'You reached your balanced amount'
  divTextFall.appendChild(textfall)

  const tictacBut = document.createElement('button')
  tictacBut.classList.add('butts')
  tictacBut.textContent = 'Final Stage'
  tictacBut.addEventListener('click', () => {
    document.body.innerHTML = ''

    presentToe()
  })

  const restartBut = document.createElement('button')
  restartBut.textContent = 'Restart'
  restartBut.classList.add('butts')
  restartBut.addEventListener('click', () => {
    // especialGenerados = 0
    // especialEnScreen = 0
    // especialClicks = 0
    document.body.innerHTML = ''
    motorFalling()
  })
  const homebut = document.createElement('button')
  homebut.textContent = 'Home'
  homebut.classList.add('butts')

  homebut.addEventListener('click', () => {
    document.body.innerHTML = ''
    generarHome()
  })

  circlesBalance.appendChild(divTextFall)
  resultadoFalling.appendChild(circlesBalance)
  circlesBalance.appendChild(tictacBut)
  circlesBalance.appendChild(restartBut)
  circlesBalance.appendChild(homebut)
}
// passado

export function circlesUnbalanced(resultadoFalling) {
  const UncirclesBalance = document.createElement('div')
  UncirclesBalance.classList.add('circlesBalance')

  const fondoContainer = document.createElement('div')
  fondoContainer.classList.add('fondoContainer')

  const fondo = document.createElement('img')
  fondo.src = './assets/f5.png'
  fondo.classList.add('fondo')

  UncirclesBalance.appendChild(fondoContainer)
  fondoContainer.appendChild(fondo)

  const divTextFall = document.createElement('div')
  divTextFall.classList.add('divTextFall')
  UncirclesBalance.appendChild(divTextFall)

  const textfall = document.createElement('h1')
  textfall.textContent = 'Ubalanced amount'
  divTextFall.appendChild(textfall)

  const restartBut = document.createElement('button')
  restartBut.textContent = 'Restart'
  restartBut.classList.add('butts')
  restartBut.addEventListener('click', () => {
    // especialGenerados = 0
    // especialEnScreen = 0
    // especialClicks = 0
    document.body.innerHTML = ''
    motorFalling()
  })

  const homebut = document.createElement('button')
  homebut.textContent = 'Home'
  homebut.classList.add('butts')

  homebut.addEventListener('click', () => {
    document.body.innerHTML = ''
    generarHome()
  })

  const helpBut = document.createElement('button')
  helpBut.textContent = '?'
  helpBut.classList.add('butts')
  helpBut.addEventListener('click', () => {
    const helpMenu = document.createElement('div')
    helpMenu.classList.add('helpMenu')
    helpMenu.textContent =
      'try to keep thoose whoose move and size are balanced'
    document.body.appendChild(helpMenu)

    setTimeout(() => {
      helpMenu.remove()
    }, 6000)
  })
  resultadoFalling.appendChild(UncirclesBalance)
  UncirclesBalance.appendChild(divTextFall)
  UncirclesBalance.appendChild(helpBut)

  UncirclesBalance.appendChild(restartBut)
  UncirclesBalance.appendChild(homebut)
}
