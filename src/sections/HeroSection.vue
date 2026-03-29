<script setup lang="ts">
import { MousePointer2, Sparkles } from 'lucide-vue-next'
</script>

<template>
    <section id="home" class="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
            class="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none">
        </div>

        <div class="max-w-5xl mx-auto text-center relative z-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
                <Sparkles :size="14" class="text-indigo-500" />
                <span class="text-[10px] font-bold uppercase text-slate-500">
                    Fullstack Web Developer
                </span>
            </div>

            <h1 class="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-slate-950 mb-8">
                Made Aditya <br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
                    Prayoga.
                </span>
            </h1>

            <p class="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                Seorang pengembang yang menggabungkan <span class="text-slate-900 font-bold italic">estetika
                    minimalis</span> dengan <span class="text-slate-900 font-bold italic">performa maksimal</span>.
            </p>

            <div class="flex flex-wrap gap-4 justify-center items-center">
                <button
                    class="bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-slate-200">
                    Ayo diskusi!
                    <MousePointer2 :size="18" />
                </button>
                <a href="#projects"
                    class="glass px-8 py-4 rounded-2xl font-bold text-slate-900 hover:bg-white/80 transition-all">
                    Lihat Proyek
                </a>
            </div>
        </div>
    </section>
</template>