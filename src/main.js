import './assets/main.css'
import cors from 'cors';
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(cors)
app.mount('#app') // ✅ Monte la bonne instance !
