<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDown, Globe, Moon, Sun } from 'lucide-vue-next'

const isScrolled = ref(false)
const isLangOpen = ref(false)
const currentLang = ref('ID')

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' }
]

const handleScroll = () => { isScrolled.value = window.scrollY > 20 }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
    <nav class="fixed top-8 left-0 right-0 z-50 px-6">
        <div :class="[
            'max-w-fit mx-auto flex items-center gap-8 px-6 py-3 rounded-full transition-all duration-500 border',
            isScrolled
                ? 'bg-white/70 backdrop-blur-xl border-white/40 shadow-xl shadow-indigo-500/5'
                : 'bg-white/30 backdrop-blur-md border-white/20'
        ]">
            <a href="#home" class="text-xl font-black tracking-tighter text-slate-950">
                <span class="text-indigo-600">A</span>V
            </a>

            <div class="hidden md:flex items-center gap-6">
                <a v-for="link in navLinks" :key="link.name" :href="link.href"
                    class="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors">
                    {{ link.name }}
                </a>
            </div>

            <div class="h-4 w-[1px] bg-slate-300/50"></div>

            <div class="flex items-center gap-4">
                <div class="relative">
                    <button @click="isLangOpen = !isLangOpen"
                        class="flex items-center gap-1.5 text-[10px] font-black text-slate-900 bg-white/50 px-3 py-1.5 rounded-full border border-white hover:bg-white transition-all">
                        <Globe :size="12" />
                        {{ currentLang }}
                        <ChevronDown :size="10" :class="['transition-transform', isLangOpen ? 'rotate-180' : '']" />
                    </button>

                    <div v-if="isLangOpen"
                        class="absolute top-full mt-3 right-0 w-32 bg-white/90 backdrop-blur-xl border border-white shadow-2xl rounded-2xl py-2 animate-in fade-in slide-in-from-top-2">
                        <button @click="currentLang = 'ID'; isLangOpen = false"
                            class="w-full text-left px-4 py-2 text-[10px] font-bold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600">INDONESIA</button>
                        <button @click="currentLang = 'EN'; isLangOpen = false"
                            class="w-full text-left px-4 py-2 text-[10px] font-bold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600">ENGLISH</button>
                        <button @click="currentLang = 'JP'; isLangOpen = false"
                            class="w-full text-left px-4 py-2 text-[10px] font-bold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600">JAPANESE</button>
                    </div>
                </div>

                <a href="#contact"
                    class="hidden sm:block bg-slate-950 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-200">
                    Hire Me
                </a>
            </div>
        </div>
    </nav>
</template>