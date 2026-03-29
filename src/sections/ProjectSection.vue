<script setup lang="ts">
import { projects } from '../data/projects'
import { ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
    <section id="projects" class="py-24 px-6 relative">
        <div class="max-w-5xl mx-auto">
            <div class="flex items-center gap-6 mb-16" data-aos="fade-right">
                <h2 class="text-2xl font-black text-slate-900 uppercase">Projects</h2>
                <div class="h-[1px] flex-1 bg-slate-200"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="project in projects" :key="project.id"
                    class="group glass p-10 rounded-[3rem] hover:bg-white/80 transition-all duration-500 hover:-translate-y-2 relative" data-aos="fade-up">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]">
                    </div>

                    <div class="relative z-10">
                        <div class="flex justify-between items-start mb-12">
                            <div
                                class="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 transition-transform group-hover:rotate-6">
                                <component :is="project.icon" :size="28" :stroke-width="1.5" />
                            </div>
                            <a :href="project.link"
                                class="p-3 bg-white rounded-full text-slate-300 hover:text-indigo-600 border border-slate-100 transition-all hover:rotate-45">
                                <ArrowUpRight :size="20" />
                            </a>
                        </div>

                        <span class="text-[10px] font-black text-indigo-500 tracking-widest uppercase mb-4 block">
                            {{ project.category }}
                        </span>
                        <h3 class="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
                            {{ project.title }}
                        </h3>
                        <p class="text-slate-500 font-medium text-sm leading-relaxed mb-8">
                            {{ project.description }}
                        </p>

                        <div class="flex flex-wrap gap-2">
                            <span v-for="tag in project.tags" :key="tag"
                                class="px-3 py-1 bg-slate-950/5 text-[10px] font-bold text-slate-600 rounded-lg uppercase tracking-wider">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>