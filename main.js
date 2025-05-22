import './style.css'

import { generarHome } from './pages/home/home.js'

import { finalColors } from './src/pages/colors/resultsColors.js'
import { finalFalling } from './src/pages/falling/resultsfalling.js'
import { generarFormPlayers } from './src/pages/toe/toeUtils.js'
import { loadProgress } from './src/utils/storage.js'

const { stage, data } = loadProgress()

if (stage === 1) {
  finalColors(data.colorsCuenta)
} else if (stage === 2) {
  finalFalling(data)
} else if (stage === 3) {
  //ids form
  generarFormPlayers()
} else {
  generarHome()
}
