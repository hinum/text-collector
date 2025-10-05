import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "./style.css"
import "boxicons"
import "../node_modules/boxicons/css/boxicons.min.css"
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
