export let especialClicks = 0
export let circleAlmacen = []
export let especialGenerados = 0
export let especialEnScreen = 0
//seters para evitar el asignment constant variable, las paso como funciones que modifican variable.
export function setEspecialClicks(v) {
  especialClicks = v
}
export function setEspecialGenerados(v) {
  especialGenerados = v
}
export function setEspecialEnScreen(v) {
  especialEnScreen = v
}
export function setCircleAlmacen(v) {
  circleAlmacen = v
}

export const minEspecial = 15
export const maxEspecialEnScreen = 2
export const maxCirculos = 500

export let fallingDuration = 20000

// genero array para guardar circulos

export const circles = {}
for (let i = 1; i <= 50; i++) {
  const circleName = `circle${i}` // para los nombres desde cirlce 01 hasta circle50, i sera recorrida del 1 al 50 dejando de numero de nombre la i que recorra
  circles[circleName] = {
    size: {
      opcion1: randomSize(),
      opcion2: randomSize()
    },
    velocidad: {
      opcion1: randomVel(),
      opcion2: randomVel()
    }
  }
}
// circulo Esp

circles.circleEspecial = {
  size: '50px',
  velocidad: '12s'
}
console.log(circles)
// generar funciones para size y velocidad
// sixe genero un array con distintos size y devuelvo el mismo array con math.floor y igual para velo
export function randomSize() {
  const sizes = [
    '20px',
    '30px',
    '40px',
    '33px',
    '32px',
    '34px',
    '73px',
    '44px',
    '45px',
    '60px',
    '94px',
    '70px',
    '75px',
    '80px',
    '92px',
    '90px',
    '93px',
    '100px',
    '120px',
    '110px',
    '112px'
  ]
  return sizes[Math.floor(Math.random() * sizes.length)]
}

export function randomVel() {
  const velos = [
    '6s',
    '1s',
    '2s',
    '3s',
    '3s',
    '3s',
    '4s',
    '4s',
    '4s',
    '6s',
    '6s',
    '5s',
    '6s',
    '6s',
    '7s',
    '8s',
    '9s',
    '10s',

    '14s',
    '15s',
    '15s',
    '16s',
    '16s',
    '17s',
    '17s',
    '18s',
    '19s',

    '10.5s'
  ]
  return velos[Math.floor(Math.random() * velos.length)]
}
