import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { setupStore } from './store/'
import App from './App.vue'
import Router from './router'

const app = createApp(App)

setupStore(app)

app
  .use(Router)
  .use(ElementPlus)
  .mount('#app')
