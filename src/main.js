import './assets/css/main.css'

import { ViteSSG } from 'vite-ssg/single-page'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import { createPinia } from 'pinia'

export const createApp = ViteSSG(App, ({ app }) => {
  const pinia = createPinia()
  app.use(pinia)
  app.use(ElementPlus)
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
})
