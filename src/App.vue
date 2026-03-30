<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from './components/layout/Navbar.vue'
import AppLoader from './components/layout/AppLoader.vue'
import HeroSection from './sections/HeroSection.vue'
import ProjectSection from './sections/ProjectSection.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
import SkillSection from './sections/SkillSection.vue'
import ContactSection from './sections/ContactSection.vue'
import Footer from './components/layout/Footer.vue'

const { locale } = useI18n()
const isLoading = ref(true)

// Fungsi untuk mentrigger loading screen
const triggerLoading = () => {
  isLoading.value = true
  // Durasi 1.2 detik agar animasi loader sempat terlihat sempurna
  setTimeout(() => {
    isLoading.value = false
  }, 1200)
}

// Pantau jika bahasa berubah, munculkan loading
watch(locale, () => {
  triggerLoading()
})

onMounted(() => {
  triggerLoading() // Loading saat pertama kali buka website
})
</script>

<template>
  <AppLoader :is-visible="isLoading" />

  <Navbar />

  <div class="grain-overlay min-h-screen bg-[#FCFCFD] transition-all duration-700"
    :class="[isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100']">
    <main>
      <HeroSection />
      <ProjectSection />
      <ExperienceSection />
      <SkillSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Smooth Scroll Global */
html {
  scroll-behavior: smooth;
}

/* Offset agar section tidak tertutup Navbar saat di-klik */
section {
  scroll-margin-top: 100px;
}
</style>