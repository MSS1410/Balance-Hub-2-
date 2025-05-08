import { generarHome } from '../home/home'

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

function present2Toe() {
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
export function motorTicTac(jugadorA, jugadorB) {
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
  const mesa = document.createElement('div')
  mesa.classList.add('mesa')
  document.body.appendChild(mesa)

  // var

  let turno = jugadorA // empieza A
  let ganador = null
  let movments = 0 // para posible empate
  const rejillas = Array(9).fill(null) // necesito tener en cada posicion del array el valor null para poder saber que la tengo en ese momento vacia. luego yo recogere los movimientos para ver las combinaciones que han echo
  // la intencion es tener algo asi
  // ['X', nully, 'O',}
  //  nuly, 'X', 'O',
  // 'O', nully, 'X']

  // gestion de turno actu

  const textTurned = document.createElement('h3')
  textTurned.classList.add('texturned')
  textTurned.textContent = `Move to: ${turno}`

  document.body.appendChild(textTurned)
  function changeTurno() {
    turno = turno === jugadorA ? jugadorB : jugadorA
    textTurned.textContent = `Your move: ${turno}`
  }
  // tengo que generar 3x3 mesa asi que 9 rejillas

  for (let i = 0; i < 9; i++) {
    const reji = document.createElement('div')
    reji.classList.add('rejilla')
    reji.dataset.index = i

    reji.addEventListener('click', () => {
      if (!rejillas[i] && !ganador) {
        rejillas[i] = turno === jugadorA ? 'X' : 'O'
        reji.textContent = rejillas[i]
        movments++
        verifyWinner()

        // CAMBIAR TURNO
        if (!ganador) changeTurno()
      }
    })
    mesa.appendChild(reji)
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
        ganador = turno

        markcombiWinner(combinacion)
        setTimeout(() => {
          mostrarGanador(ganador)
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

  function mostrarEmpate(jugadorA, jugadorB) {
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
  // resaltare la combi winner
  function markcombiWinner(combinacion) {
    combinacion.forEach((index) => {
      const rejiWinner = document.querySelectorAll('.rejilla')[index]
      rejiWinner.classList.add('winner')
    })
  }
}

// amo a darle un finale combrobar ganador
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

// form para guardar playeeeeeeee tu lo sabe tu no lo tiene
function generarFormPlayers() {
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
