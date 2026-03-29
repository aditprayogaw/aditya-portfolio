<script setup lang="ts">
import { experiences } from '../data/experiences'
import { Briefcase } from 'lucide-vue-next'
</script>

<template>
    <section id="experience" class="py-24 px-6 relative">
        <div class="max-w-5xl mx-auto">
            <div class="flex items-center gap-6 mb-16" data-aos="fade-right">
                <h2 class="text-2xl font-black text-slate-900 uppercase">Experience</h2>
                <div class="h-[1px] flex-1 bg-slate-200"></div>
            </div>

            <div class="space-y-12 relative">
                <div
                    class="absolute left-[18px] top-2 bottom-2 w-[2px] bg-dashed border-l-2 border-slate-200 border-dashed" data-aos="fade-up">
                </div>

                <div v-for="(exp, index) in experiences" :key="index" class="relative pl-12 group" data-aos="fade-up">
                    <div
                        class="absolute left-0 top-1 w-10 h-10 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center z-10 group-hover:border-indigo-500 transition-colors shadow-sm">
                        <Briefcase :size="16" class="text-slate-400 group-hover:text-indigo-600" />
                    </div>

                    <div class="glass p-8 rounded-[2.5rem] group-hover:bg-white/80 transition-all duration-500">
                        <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <h3 class="text-2xl font-black text-slate-950 tracking-tight">{{ exp.role }}</h3>
                            <span
                                class="text-[10px] font-black uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full text-slate-500">
                                {{ exp.period }}
                            </span>
                        </div>
                        <p class="text-indigo-600 font-bold mb-4 tracking-wide uppercase text-xs">{{ exp.company }}</p>
                        <p class="text-slate-500 font-medium leading-relaxed max-w-2xl text-sm">
                            {{ exp.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>