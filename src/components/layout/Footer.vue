<script setup lang="ts">
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-vue-next'

const socialLinks = [
    { name: 'Github', icon: Github, url: 'https://github.com/' },
    { name: 'Linkedin', icon: Linkedin, url: 'https://linkedin.com/' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/' }
]
</script>

<template>
    <footer id="contact" class="pt-20 pb-12 px-6">
        <div class="max-w-5xl mx-auto">

            <div
                class="relative bg-slate-950 rounded-[4rem] p-12 md:p-24 overflow-hidden text-center shadow-[0_50px_100px_-20px_rgba(79,70,229,0.2)]">
                <div class="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/30 blur-[100px]"></div>
                <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-600/20 blur-[100px]"></div>

                <h2
                    class="relative z-10 text-4xl md:text-7xl font-bold text-white leading-[0.9] tracking-tighter mb-10">
                    Punya ide hebat? <br />
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Ayo kita
                        wujudkan.</span>
                </h2>

                <div class="relative z-10 flex flex-wrap justify-center gap-4">
                    <a href="mailto:hello@madeaditya.com"
                        class="bg-white text-slate-950 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
                        Kirim Email
                    </a>
                    <button
                        class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                        Salin Kontak
                    </button>
                </div>
            </div>

            <div
                class="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-200 pt-12">
                <div class="flex flex-col items-center md:items-start gap-2">
                    <span class="text-2xl font-bold tracking-tighter">AdityaVisual</span>
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Digital Craftsman based in
                        Indonesia</p>
                </div>

                <div class="flex gap-4">
                    <a v-for="social in socialLinks" :key="social.name" :href="social.url"
                        class="p-3 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 hover:shadow-lg transition-all">
                        <component :is="social.icon" :size="20" />
                    </a>
                </div>

                <p class="text-[13px] font-bold text-slate-400 uppercase">
                    © 2026 AdityaVisual.
                </p>
            </div>
        </div>
    </footer>
</template>