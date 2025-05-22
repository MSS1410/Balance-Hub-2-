const STORAGE_KEY = 'balance-hub-progress'

export function saveProgress(stage, data = {}) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ stage, data }))
}

export function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw) : { stage: null, data: {} }
}
