<script setup lang="ts">
import { skillCategories } from '../data/skills'
import { Palette, Sparkles, Flame } from 'lucide-vue-next' // Tambahan manual jika belum ada di data
</script>

<template>
    <section id="skills" class="py-24 px-6 relative">
        <div class="max-w-5xl mx-auto">
            <div class="flex items-center gap-6 mb-16">
                <h2 class="text-2xl font-black text-slate-900 uppercase">Skill Set</h2>
                <div class="h-[1px] flex-1 bg-slate-200"></div>
            </div>

            <div class="space-y-16">
                <div v-for="category in skillCategories" :key="category.title" class="group">
                    <h3 class="text-[10px] font-black uppercase text-slate-400 mb-8 flex items-center gap-4">
                        {{ category.title }}
                        <span class="h-[1px] w-8 bg-slate-200 group-hover:w-16 transition-all duration-500"></span>
                    </h3>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div v-for="skill in category.skills" :key="skill.name"
                            class="relative p-6 glass rounded-[2rem] hover:bg-white transition-all duration-500 group/item hover:-translate-y-1">
                            <div
                                :class="['absolute inset-0 opacity-0 group-hover/item:opacity-5 transition-opacity rounded-[2rem] bg-gradient-to-br', skill.color]">
                            </div>

                            <div class="flex items-center gap-4 relative z-10">
                                <div
                                    :class="['w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br shadow-sm', skill.color]">
                                    <component :is="skill.icon" :size="20" :stroke-width="2" />
                                </div>

                                <div class="flex flex-col">
                                    <span class="text-xs font-black text-slate-900 tracking-tight">{{ skill.name
                                        }}</span>
                                    <span :class="[
                                        'text-[9px] font-bold uppercase tracking-wider',
                                        skill.level === 'Advance' ? 'text-indigo-500' :
                                            skill.level === 'Intermediate' ? 'text-emerald-500' : 'text-slate-400'
                                    ]">
                                        {{ skill.level }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>