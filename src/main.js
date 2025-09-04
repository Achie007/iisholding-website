import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n' // <-- Import our i18n configuration
import './assets/rtl.css' // <-- Import the RTL styles
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(i18n) // <-- Tell the app to USE the i18n library

app.mount('#app')
