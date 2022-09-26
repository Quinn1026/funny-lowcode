import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Home from '@/view/Home'

NProgress.configure({ showSpinner: false })

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(() => {
  NProgress.start()
  return true
})

router.afterEach(() => {
  NProgress.done()
})

export default router