import { generarHome } from '../home/home'

import { present2Toe } from '../toe/toeUtils'
import { saveProgress } from '../../utils/storage.js'

let mesa
let rejillas
let turno
let movments
let ganador
let textTurned
let jugadorA
let jugadorB
export function motorTicTac(jA, jB) {
  jugadorA = jA
  jugadorB = jB
  document.body.innerHTML = ''
  // const fondoNegro = document.createElement('div')
  // fondoNegro.id = 'fondoNegro'
  // document.body.appendChild(fondoNegro)

  // genero fondo container
  const fondoContainer = document.createElement('div')
  fondoContainer.classList.add('fondoContainer')

  const fondo = document.createElement('img')
  fondo.src = './assets/f5.png'
  fondo.classList.add('fondo')

  fondoContainer.appendChild(fondo)
  document.body.appendChild(fondoContainer)

  const tituloContainer = document.createElement('div')
  tituloContainer.classList.add('tituloContainer')
  document.body.appendChild(tituloContainer)

  // titulo game
  const tituloTic = document.createElement('h1')
  tituloTic.textContent = `Tic Tac Toe  `
  tituloTic.classList.add('tituloTic')

  tituloContainer.appendChild(tituloTic)
  const subtituloPlayer = document.createElement('h2')
  subtituloPlayer.classList.add('subtituloPlayer')
  subtituloPlayer.textContent = `${jugadorA} vs ${jugadorB}`
  tituloContainer.appendChild(subtituloPlayer)

  //mesa 3x3
  mesa = document.createElement('div')
  mesa.classList.add('mesa')
  document.body.appendChild(mesa)

  // tengo que generar 3x3 mesa asi que 9 rejillas

  for (let i = 0; i < 9; i++) {
    const reji = document.createElement('div')
    reji.classList.add('rejilla')
    reji.dataset.index = i

    reji.addEventListener('click', () => {
      if (!rejillas[i] && !ganador) {
        rejillas[i] = turno
        reji.textContent = turno
        movments++
        verifyWinner()

        // CAMBIAR TURNO
        if (!ganador) changeTurno()
      }
    })
    mesa.appendChild(reji)
  }
  // var

  turno = 'X' // empieza A
  ganador = null
  movments = 0 // para posible empate
  rejillas = Array(9).fill(null)
  // necesito tener en cada posicion del array el valor null para poder saber que la tengo en ese momento vacia. luego yo recogere los movimientos para ver las combinaciones que han echo
  // la intencion es tener algo asi
  // ['X', nully, 'O',}
  //  nuly, 'X', 'O',
  // 'O', nully, 'X']

  // gestion de turno actu

  textTurned = document.createElement('h3')
  textTurned.classList.add('texturned')
  textTurned.textContent = `Move to: ${turno === 'X' ? jugadorA : jugadorB}`

  document.body.appendChild(textTurned)
}

function changeTurno() {
  turno = turno === 'X' ? 'O' : 'X'
  textTurned.textContent = `Move to:${turno === 'X' ? jugadorA : jugadorB}`
}

// si imaginamos el tablero con los indices de posiciones, las combis ganadoras son
function verifyWinner() {
  const combinacionestriunfantes = [
    // Filas
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columnas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonales
    [0, 4, 8],
    [2, 4, 6]
  ]
  // portanto ataco con un forof para que me repase las combinaciones que hemos definido antes
  for (let combinacion of combinacionestriunfantes) {
    // ami combinacion me llegara como [0,1,2] ejemplo, ENTONCES LO que hago es destructuro el array para que me quede como a= 0 b=1 c=2 asi accedo mejor a los indices, lo puedo comparar directamente
    const [a, b, c] = combinacion
    //compruebo si tengo x o o en a, si es lo mismo que tengo en b, y si es lo mismo que tengo en c, si la combinacion coincide con ganadora y los tres indices son del mismo jugador, llamaremos a la funcion checkwine
    if (
      rejillas[a] &&
      rejillas[a] === rejillas[b] &&
      rejillas[a] === rejillas[c]
    ) {
      // el ganador sigue siendo el simbolo
      ganador = turno

      markcombiWinner(combinacion)

      setTimeout(() => {
        //paso el nombre segun el simbolo
        mostrarGanador(ganador === 'X' ? jugadorA : jugadorB)
      }, 1000)

      return
    }
  }
  if (movments === 9 && !ganador) {
    setTimeout(() => {
      mostrarEmpate(jugadorA, jugadorB)
    }, 1000)
  }
}

// resaltare la combi winner
function markcombiWinner(combinacion) {
  combinacion.forEach((index) => {
    const rejiWinner = document.querySelectorAll('.rejilla')[index]
    rejiWinner.classList.add('winner')
  })
}

function mostrarEmpate() {
  const drawCont = document.createElement('div')
  drawCont.classList.add('drawCont')

  const drawText = document.createElement('h2')
  drawText.textContent = "That's a Draw!"
  drawText.classList.add('drawText')
  drawCont.appendChild(drawText)

  const restBut = document.createElement('button')
  restBut.textContent = 'Play Again'
  restBut.classList.add('butts')
  drawCont.appendChild(restBut)

  restBut.addEventListener('click', () => {
    drawCont.remove()
    document.body.innerHTML = ''
    motorTicTac(jugadorA, jugadorB)
  })
  document.body.appendChild(drawCont)
}

function mostrarGanador(jugador) {
  const winText = document.createElement('div')
  winText.classList.add('winText')
  winText.textContent = `${jugador} finished this game!`
  document.body.appendChild(winText)

  setTimeout(() => {
    winText.style.opacity = '0'

    setTimeout(() => {
      winText.remove()

      document.body.innerHTML = ''
      endBalance() // Llama a la función para mostrar el mensaje final después de 33333333 seconds
    }, 1000) // tiempo para el fade-out
  }, 4000) // tiempo de permanencia del mensaje
}

function endBalance() {
  document.body.innerHTML = ''
  // const fondoNegro = document.createElement('div')
  // fondoNegro.id = 'fondoNegro'
  // document.body.appendChild(fondoNegro)

  // genero fondo container
  const fondoContainer = document.createElement('div')
  fondoContainer.classList.add('fondoContainer')

  // genero fondo container
  const fondo = document.createElement('img')
  fondo.src = './assets/f2.png'
  fondo.classList.add('fondo', 'entrada')
  //
  document.body.appendChild(fondoContainer)
  fondoContainer.appendChild(fondo)

  const endCont = document.createElement('div')
  endCont.id = 'endCont'
  endCont.classList.add('entrada')

  const endTxt = document.createElement('h1')
  endTxt.textContent = 'Your Balance trip ends here, thanks for playing!'
  endTxt.classList.add('endtxt', 'entrada')
  endCont.appendChild(endTxt)

  const endBut = document.createElement('button')
  endBut.textContent = 'Home'
  endBut.classList.add('finalButts', 'entrada')
  endCont.appendChild(endBut)
  endBut.addEventListener('click', () => {
    document.body.innerHTML = ''
    saveProgress(null)
    generarHome()
  })

  const restartToe = document.createElement('button')
  restartToe.textContent = 'Tic Tac...'
  restartToe.classList.add('finalButts', 'entrada')

  restartToe.addEventListener('click', () => {
    document.body.innerHTML = ''
    present2Toe()
  })
  endCont.appendChild(restartToe)
  document.body.appendChild(endCont)
}
