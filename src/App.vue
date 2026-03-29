<script setup lang="ts">

import Navbar from './components/layout/Navbar.vue'

import HeroSection from './sections/HeroSection.vue'
import ProjectSection from './sections/ProjectSection.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
import SkillSection from './sections/SkillSection.vue'

import Footer from './components/layout/Footer.vue'
</script>

<template>
  <div class="grain-overlay min-h-screen bg-[#FCFCFD]">
    <Navbar />

    <main>
      <HeroSection />
      <ProjectSection />
      <ExperienceSection />
      <SkillSection />
    </main>

    <Footer />
  </div>
</template>