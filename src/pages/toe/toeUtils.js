import { saveProgress } from '../../utils/storage'
import { generarHome } from '../home/home'
import { motorTicTac } from './toeLogic'

export function presentToe() {
  console.log('inicio presentToe')
  // cont principal
  const ToeContent = document.createElement('div')
  ToeContent.id = 'ToeContent'

  const fondoNegro = document.createElement('div')
  fondoNegro.id = 'fondoNegro'
  document.body.appendChild(fondoNegro)
  // intro text
  const textDiv = document.createElement('div')
  textDiv.id = 'textDiv'
  textDiv.style.opacity = 0

  const textToe = document.createElement('h2')
  textToe.textContent =
    'Cause of ur balanced stats, we got some entertainment for you, find someone to play and click below'
  textToe.classList.add('textToe')

  const belowButt = document.createElement('button')
  belowButt.classList.add('buttss')
  belowButt.style.opacity = 0
  belowButt.textContent = 'Tic, Tac ...'
  belowButt.addEventListener('click', () => {
    ToeContent.remove()
    fondoNegro.remove()
    present2Toe()
  })

  textDiv.appendChild(textToe)

  textDiv.appendChild(belowButt)

  ToeContent.appendChild(textDiv)

  document.body.appendChild(ToeContent)

  setTimeout(() => {
    textDiv.style.transition = 'opacity 1s ease'
    textDiv.style.opacity = 1 // show texto
  }, 500) //

  // botton after
  setTimeout(() => {
    belowButt.style.transition = 'opacity 1s ease'
    belowButt.style.opacity = 1
  }, 1500)
}

export function present2Toe() {
  console.log('inicio presentToe2')

  const fondoNegro = document.createElement('div')
  fondoNegro.id = 'fondoNegro'
  document.body.appendChild(fondoNegro)

  // genero fondo container
  // const fondoContainer = document.createElement('div')
  // fondoContainer.classList.add('fondoContainer')

  // // genero fondo container
  // const fondo = document.createElement('img')
  // fondo.src = './assets/f5.png'
  // fondo.classList.add('fondo')
  //

  // const ToeContentNameDiv = document.createElement('div')
  // ToeContentNameDiv.classList.add('ToeContentDiv')
  //
  const tituloDivToe = document.createElement('div')
  tituloDivToe.classList.add('tituloDivToe')
  tituloDivToe.style.opacity = 0

  const tituloToe = document.createElement('h1')
  tituloToe.classList.add('tituloToe')
  tituloToe.textContent = 'Tic Tac Toe'

  console.log('Elemento titulo:', tituloToe)

  const subTT = document.createElement('h2')
  subTT.classList.add('subTT')
  subTT.textContent = 'By Balance'
  subTT.style.opacity = 0
  console.log('Elemento subtt:', subTT)

  // ToeContentNameDiv.appendChild(tituloDivToe)
  tituloDivToe.appendChild(tituloToe)
  tituloDivToe.appendChild(subTT)

  document.body.appendChild(tituloDivToe)
  console.log('cont del title:', tituloDivToe)

  setTimeout(() => {
    tituloDivToe.style.transition = 'opacity 1s ease'
    tituloDivToe.style.opacity = 1
  }, 1000)

  setTimeout(() => {
    subTT.style.transition = 'opacity 1s ease'
    subTT.style.opacity = 1
  }, 2000)

  setTimeout(() => {
    tituloDivToe.style.transition = 'opacity 1s ease'
    tituloDivToe.style.opacity = 0
    setTimeout(() => {
      tituloDivToe.remove()
      fondoNegro.remove()
      console.log('shamando formulario')
      generarFormPlayers()
    }, 1000)
  }, 5000)

  // fondoContainer.appendChild(fondo)
  // ToeContent.appendChild(fondoContainer)
}

// form para guardar player tu lo sabe tu no lo tiene
export function generarFormPlayers() {
  saveProgress(3)
  console.log('generando formulario')
  const fondoNegro = document.createElement('div')
  fondoNegro.id = 'fondoNegro'
  document.body.appendChild(fondoNegro)

  // genero fondo container
  // const fondoContainer = document.createElement('div')
  // fondoContainer.classList.add('fondoContainer')

  // // genero fondo container
  // const fondo = document.createElement('img')
  // fondo.src = './assets/f5.png'
  // fondo.classList.add('fondo')
  //
  const formulario = document.createElement('div')
  formulario.id = 'formuPlay'

  const tituloForm = document.createElement('h2')
  tituloForm.textContent = 'Place players ID`s'
  formulario.appendChild(tituloForm)

  const jugadorAInput = document.createElement('input')
  jugadorAInput.placeholder = 'Player ID 001'
  jugadorAInput.id = 'JugadorA'

  const jugadorBInput = document.createElement('input')
  jugadorBInput.placeholder = 'Player ID 002'
  jugadorBInput.id = 'JugadorB'

  const runButton = document.createElement('button')
  runButton.textContent = 'Start TOE'
  runButton.addEventListener('click', () => {
    formulario.classList.add('van')

    setTimeout(() => {
      const jugadorA = jugadorAInput.value
      const jugadorB = jugadorBInput.value
      if (jugadorA && jugadorB) {
        document.body.innerHTML = ''
        // motorTicTac(jugadorA, jugadorB)
        console.log('llamadno motor tikitakatoe')
        motorTicTac(jugadorA, jugadorB)
      } else {
        const Nofullplayers = document.createElement('div')
        Nofullplayers.classList.add('Nofullplayers')
        Nofullplayers.textContent = 'We need both players Id'
        // generarFormPlayers()
      }
    }, 1000)
  })
  formulario.appendChild(jugadorAInput)
  formulario.appendChild(jugadorBInput)
  formulario.appendChild(runButton)

  document.body.appendChild(formulario)

  // Log para verificar que el formulario se está añadiendo correctamente
  console.log('Formulario de jugadores añadido al DOM:', formulario)
}
