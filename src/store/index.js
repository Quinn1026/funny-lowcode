import { createPinia } from 'pinia'

const store = createPinia()
export function setupStore (App) {
  App.use(store)
}
export {
  store
}
