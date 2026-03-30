<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronDown, Globe } from 'lucide-vue-next'

const { t, locale } = useI18n()
const isScrolled = ref(false)
const isLangOpen = ref(false)

const navLinks = [
    { name: 'nav.home', href: '#home' },
    { name: 'nav.projects', href: '#projects' },
    { name: 'nav.experience', href: '#experience' },
    { name: 'nav.skills', href: '#skills' }
]

const languages = [
    { name: 'INDONESIA', code: 'id' },
    { name: 'ENGLISH', code: 'en' },
    { name: 'JAPANESE', code: 'jp' }
]

const currentLangLabel = computed(() => locale.value.toUpperCase())

const changeLanguage = (code: string) => {
    locale.value = code
    isLangOpen.value = false
    localStorage.setItem('user-lang', code)
}

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    const savedLang = localStorage.getItem('user-lang')
    if (savedLang) locale.value = savedLang
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
    <nav :class="[
        'fixed top-0 left-0 right-0 w-full z-100 transition-all duration-300 border-b',
        isScrolled
            ? 'py-4 bg-white/90 backdrop-blur-md border-slate-200 shadow-sm'
            : 'py-6 bg-white border-transparent'
    ]">
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <a href="#home" class="text-xl font-black tracking-tighter text-slate-950 uppercase">
                Aditya<span class="text-indigo-600">Visual</span>
            </a>

            <div class="hidden md:flex items-center gap-10">
                <a v-for="link in navLinks" :key="link.name" :href="link.href"
                    class="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-slate-950 transition-colors relative group">
                    {{ t(link.name) }}
                    <span
                        class="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                </a>
            </div>

            <div class="flex items-center gap-6">
                <div class="relative">
                    <button @click="isLangOpen = !isLangOpen"
                        class="text-[11px] font-bold text-slate-950 flex items-center gap-1 uppercase hover:opacity-70 transition-opacity">
                        <Globe :size="14" class="text-slate-400" />
                        {{ currentLangLabel }}
                        <ChevronDown :size="12" :class="isLangOpen ? 'rotate-180' : ''" class="transition-transform" />
                    </button>

                    <div v-if="isLangOpen"
                        class="absolute top-full mt-4 right-0 w-32 bg-white border border-slate-200 shadow-xl rounded-lg py-2 overflow-hidden">
                        <button v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)"
                            :class="['w-full text-left px-4 py-2 text-[10px] font-bold', locale === lang.code ? 'text-indigo-600' : 'text-slate-600 hover:bg-slate-50']">
                            {{ lang.name }}
                        </button>
                    </div>
                </div>

                <a href="#contact"
                    class="hidden sm:block bg-slate-950 text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/10">
                    {{ t('nav.hire') }}
                </a>
            </div>
        </div>
    </nav>
</template>