import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

;((s) => {
  Object.values(s).forEach((item: any) => item.default && app.use(item.default))
})(import.meta.glob('./plugins/*.ts', { eager: true }))

app.mount('#app')
