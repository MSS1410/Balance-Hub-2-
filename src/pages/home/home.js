import { motorColors } from '../colors/colorsLogic'
// musss

export function generarHome() {
  const homeContent = document.createElement('div')
  homeContent.id = 'homeContent'
  // homeContent.style.opacity = '0'

  // homeContent.style.transition = 'opacity 1s ease-in-out'
  // genero fondo container
  const fondoContainer = document.createElement('div')
  fondoContainer.classList.add('fondoContainer')
  // genero fondo container
  const fondo = document.createElement('img')
  fondo.src = './assets/f2.png'
  fondo.classList.add('fondo')
  // genero titulo
  const nombre = document.createElement('h1')
  nombre.classList.add('nombre')
  nombre.textContent = 'Balance'
  // genero frase
  const frase = document.createElement('h2')
  frase.classList.add('frase')
  frase.textContent = ' find your '
  // genero button
  const startButton = document.createElement('button')
  startButton.textContent = 'Start'
  startButton.classList.add('startButton')

  // añado evento al button start para redirigir al primer juego
  // necesitare ocultar home y dar paso a colors

  startButton.addEventListener('click', () => {
    // oculto home
    homeContent.style.transition = 'opacity 1s ease'
    homeContent.style.opacity = '0'
    setTimeout(() => {
      console.log('eliminando homeco')
      homeContent.remove()
      console.log('eliminado home')
      //inicio colors
      motorColors()
    }, 1000)
  })
  // plasmo elementos en el dom
  fondoContainer.appendChild(fondo)
  homeContent.appendChild(fondoContainer)
  homeContent.appendChild(frase)
  homeContent.appendChild(nombre)

  homeContent.appendChild(startButton)
  // homeContent.appendChild(fallButton)

  document.body.appendChild(homeContent)
  // setTimeout(() => {
  //   homeContent.style.opacity = '1'
  // }, 1000)
}
generarHome()
