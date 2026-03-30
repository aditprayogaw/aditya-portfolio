import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from './i18n' // File i18n kamu
import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// Inisialisasi AOS
AOS.init({
  duration: 800,
  once: false,
  mirror: true,
  easing: 'ease-in-out-cubic'
})

// DAFTARKAN SEMUA PLUGIN DI SINI
app.use(createPinia())
app.use(i18n) // <--- BARIS INI HARUS ADA SEBELUM MOUNT!
app.use(router)

// BARU MOUNT KE DOM
app.mount('#app')