import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

AOS.init({
  duration: 800, // Durasi animasi (ms)
  once: false,   // Animasi ulang setiap kali di-scroll ke atas/bawah
  mirror: true,
  easing: 'ease-in-out-cubic' // Gerakan yang halus, tidak kaku
})

app.use(createPinia())
app.use(router)

app.mount('#app')
