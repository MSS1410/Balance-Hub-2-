export function createFallingContainers() {
  const fallingContainer = document.createElement('div')
  fallingContainer.id = 'fallingContent'
  document.body.appendChild(fallingContainer)

  const fondoNegro = document.createElement('div')
  fondoNegro.id = 'fondoNegro'
  document.body.appendChild(fondoNegro)

  return { fallingContainer, fondoNegro }
}

export function createFondoContainer() {
  // genero fondo container
  const fondoContainer = document.createElement('div')
  fondoContainer.classList.add('fondoContainer')
  // genero fondo container
  const fondo = document.createElement('img')
  fondo.src = './assets/f5.png'
  fondo.classList.add('fondo')
  fondoContainer.appendChild(fondo)

  return fondoContainer
}

export function createTitleContainer() {
  //titulo y contit
  const tittlecont = document.createElement('div')
  tittlecont.id = 'ftittle'
  tittlecont.textContent = 'FALLING CIRCLES '

  return tittlecont
}

export function createCircleAlmacen() {
  const circleAlmacenDiv = document.createElement('div')
  circleAlmacenDiv.id = 'circAlmacenDiv'

  return circleAlmacenDiv
}
