import './style.css'

import { generarHome } from './src/pages/home/home.js'
import { finalColors } from './src/pages/colors/resultsColors.js'
import { finalFalling } from './src/pages/falling/resultsfalling.js'
import { generarFormPlayers } from './src/pages/toe/toeUtils.js'

import { loadProgress } from './src/utils/storage.js'

const { BalancedZone, data } = loadProgress()
console.log(' balanced zone: ', BalancedZone, data)

if (BalancedZone === 1) {
  finalColors(data.colorsCuenta)
} else if (BalancedZone === 2) {
  finalFalling(data)
} else if (BalancedZone === 3) {
  generarFormPlayers()
} else {
  generarHome()
}
