const USER_PROGRESS = 'balance-hub-progress'

export function saveProgress(BalancedZone, data = {}) {
  localStorage.setItem(USER_PROGRESS, JSON.stringify({ BalancedZone, data }))
}

export function loadProgress() {
  const resultSave = localStorage.getItem(USER_PROGRESS)
  return resultSave ? JSON.parse(resultSave) : { stage: null, data: {} }
}
