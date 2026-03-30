<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Github, Instagram, Linkedin, Twitter, Mail, Copy, Check } from 'lucide-vue-next'
import { ref } from 'vue'

const { t } = useI18n()
const isCopied = ref(false)

const socialLinks = [
    { name: 'Github', icon: Github, url: 'https://github.com/adityamade' },
    { name: 'Linkedin', icon: Linkedin, url: 'https://linkedin.com/in/madeadityaprayoga' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/adityaprayoga._' }
]

const copyContact = () => {
    navigator.clipboard.writeText('adityamade2187@gmail.com')
    isCopied.value = true
    setTimeout(() => isCopied.value = false, 2000)
}
</script>

<template>
    <footer id="footer" class="pt-20 pb-12 px-6">
        <div class="max-w-5xl mx-auto">

            <div class="relative bg-slate-950 rounded-[4rem] p-12 md:p-24 overflow-hidden text-center shadow-[0_50px_100px_-20px_rgba(79,70,229,0.2)]"
                data-aos="fade-up">

                <div class="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/30 blur-[100px]"></div>
                <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-600/20 blur-[100px]"></div>

                <h2
                    class="relative z-10 text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-10">
                    {{ t('footer.cta_title') }} <br />
                    <span class="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-pink-400">
                        {{ t('footer.cta_highlight') }}
                    </span>
                </h2>

                <div class="relative z-10 flex flex-wrap justify-center gap-4">
                    <a href="mailto:adityamade2187@gmail.com"
                        class="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center gap-3">
                        <Mail :size="18" />
                        {{ t('footer.btn_email') }}
                    </a>
                    <button @click="copyContact"
                        class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all flex items-center gap-3">
                        <component :is="isCopied ? Check : Copy" :size="18"
                            :class="isCopied ? 'text-emerald-400' : ''" />
                        {{ isCopied ? t('footer.btn_copied') : t('footer.btn_copy') }}
                    </button>
                </div>
            </div>

            <div
                class="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-100 pt-12">
                <div class="flex flex-col items-center md:items-start gap-2">
                    <span class="text-2xl font-black tracking-tighter text-slate-950">AdityaVisual</span>
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
                        {{ t('footer.credit_sub') }}
                    </p>
                </div>

                <div class="flex gap-4">
                    <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                        class="p-4 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/10 transition-all">
                        <component :is="social.icon" :size="20" />
                    </a>
                </div>

                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    © 2026 AdityaVisual.
                </p>
            </div>
        </div>
    </footer>
</template>