<script setup lang="ts">
import { MousePointer2, Sparkles, ArrowDown } from 'lucide-vue-next'
</script>

<template>
    <section id="home" class="relative pt-44 pb-24 px-6 overflow-hidden min-h-[90vh] flex items-center justify-center">

        <div
            class="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none aura-animate">
        </div>

        <div class="max-w-5xl mx-auto text-center relative z-10">

            <div data-aos="fade-down" data-aos-delay="200"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-10 border border-white/50 shadow-sm">
                <Sparkles :size="14" class="text-indigo-500 animate-pulse" />
                <span class="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">
                    Fullstack Web Developer
                </span>
            </div>

            <h1 data-aos="fade-up" data-aos-delay="400"
                class="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-slate-950 mb-10">
                Made Aditya <br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
                    Prayoga.
                </span>
            </h1>

            <p data-aos="fade-up" data-aos-delay="600"
                class="text-lg md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-14 leading-relaxed">
                Seorang pengembang yang menggabungkan <span
                    class="text-slate-900 font-bold italic underline decoration-indigo-200 decoration-4 underline-offset-4">estetika
                    minimalis</span> dengan <span class="text-slate-900 font-bold italic">performa maksimal</span>.
            </p>

            <div data-aos="fade-up" data-aos-delay="800" class="flex flex-wrap gap-5 justify-center items-center">
                <button
                    class="group bg-slate-950 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-indigo-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-indigo-100">
                    Ayo diskusi!
                    <MousePointer2 :size="18"
                        class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <a href="#projects"
                    class="glass px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest text-slate-900 hover:bg-white/90 hover:border-indigo-200 transition-all duration-300 flex items-center gap-2">
                    Lihat Proyek
                </a>
            </div>

            <div data-aos="fade-in" data-aos-delay="1200" data-aos-anchor-placement="top-bottom"
                class="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span class="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Scroll Down</span>
                <ArrowDown :size="16" class="text-slate-300 animate-bounce" />
            </div>
        </div>
    </section>
</template>