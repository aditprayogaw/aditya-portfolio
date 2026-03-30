<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { experiences } from '../data/experiences'
import { Briefcase } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
    <section id="experience" class="py-24 px-6 relative">
        <div class="max-w-5xl mx-auto">

            <div class="flex items-center gap-6 mb-16" data-aos="fade-right">
                <h2 class="text-2xl font-black text-slate-900 uppercase tracking-widest">
                    {{ t('section.experience') }}
                </h2>
                <div class="h-px flex-1 bg-slate-200"></div>
            </div>

            <div class="space-y-12 relative">
                <div class="absolute left-4.5 top-2 bottom-2 w-0.5 border-l-2 border-slate-200 border-dashed"
                    data-aos="fade-up"></div>

                <div v-for="(exp, index) in experiences" :key="index" class="relative pl-12 group" data-aos="fade-up"
                    :data-aos-delay="index * 150">
                    <div
                        class="absolute left-0 top-1 w-10 h-10 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center z-10 group-hover:border-indigo-500 group-hover:rotate-12 transition-all duration-300 shadow-sm">
                        <Briefcase :size="16" class="text-slate-400 group-hover:text-indigo-600" />
                    </div>

                    <div
                        class="glass p-8 rounded-[2.5rem] group-hover:bg-white/80 transition-all duration-500 border border-white/50">
                        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <h3 class="text-2xl font-black text-slate-950 tracking-tight">
                                {{ t(`experience.${exp.id}.role`) }}
                            </h3>

                            <span
                                class="text-[10px] font-black uppercase tracking-widest bg-slate-100 px-4 py-1.5 rounded-full text-slate-500 border border-slate-200/50">
                                {{ exp.period }}
                            </span>
                        </div>

                        <p
                            class="text-indigo-600 font-bold mb-4 tracking-widest uppercase text-[10px] flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse"></span>
                            {{ exp.company }}
                        </p>

                        <p class="text-slate-500 font-medium leading-relaxed max-w-3xl text-sm italic">
                            "{{ t(`experience.${exp.id}.desc`) }}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>