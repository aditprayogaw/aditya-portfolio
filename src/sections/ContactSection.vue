<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Mail, MessageSquare, Send } from 'lucide-vue-next'
import { ref } from 'vue'

const { t } = useI18n()

const form = ref({
    name: '',
    email: '',
    message: ''
})

const isSending = ref(false)

const handleSubmit = () => {
    isSending.value = true
    // Simulasi pengiriman
    setTimeout(() => {
        alert(t('contact.form.success', { name: form.value.name }))
        isSending.value = false
        form.value = { name: '', email: '', message: '' }
    }, 2000)
}
</script>

<template>
    <section id="contact" class="py-24 px-6 relative overflow-hidden">
        <div
            class="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none aura-animate">
        </div>

        <div class="max-w-5xl mx-auto">
            <div class="flex items-center gap-6 mb-16" data-aos="fade-right">
                <h2 class="text-2xl font-black text-slate-900 uppercase tracking-widest">
                    {{ t('section.contact') }}
                </h2>
                <div class="h-px flex-1 bg-slate-200"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="space-y-8" data-aos="fade-up" data-aos-delay="200">
                    <h3 class="text-5xl font-black text-slate-950 leading-tight tracking-tighter">
                        {{ t('contact.title') }} <br />
                        <span class="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-pink-500">
                            {{ t('contact.highlight') }}
                        </span>
                    </h3>

                    <p class="text-slate-500 font-medium text-lg leading-relaxed max-w-md">
                        {{ t('contact.desc') }}
                    </p>

                    <div class="space-y-4">
                        <a href="mailto:adityamade2187@gmail.com" class="flex items-center gap-4 group">
                            <div
                                class="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-all shadow-sm">
                                <Mail :size="20" />
                            </div>
                            <span class="font-bold text-slate-700">adityamade2187@gmail.com</span>
                        </a>

                        <a href="https://wa.me/6287701152987" target="_blank" class="flex items-center gap-4 group">
                            <div
                                class="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-emerald-500 group-hover:border-emerald-200 transition-all shadow-sm">
                                <MessageSquare :size="20" />
                            </div>
                            <span class="font-bold text-slate-700">+62 877 0115 2987</span>
                        </a>
                    </div>
                </div>

                <div class="glass p-8 md:p-10 rounded-[3rem] border border-white/60 shadow-2xl shadow-indigo-500/5"
                    data-aos="fade-up" data-aos-delay="400">
                    <form @submit.prevent="handleSubmit" class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                                {{ t('contact.form.name') }}
                            </label>
                            <input v-model="form.name" type="text" :placeholder="t('contact.form.name_placeholder')"
                                class="w-full bg-white/50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
                                required />
                        </div>

                        <div class="space-y-2">
                            <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                                {{ t('contact.form.email') }}
                            </label>
                            <input v-model="form.email" type="email" placeholder="aditya@example.com"
                                class="w-full bg-white/50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
                                required />
                        </div>

                        <div class="space-y-2">
                            <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                                {{ t('contact.form.message') }}
                            </label>
                            <textarea v-model="form.message" rows="4"
                                :placeholder="t('contact.form.message_placeholder')"
                                class="w-full bg-white/50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium resize-none"
                                required></textarea>
                        </div>

                        <button type="submit" :disabled="isSending"
                            class="w-full bg-slate-950 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-indigo-100 disabled:opacity-50">
                            <span v-if="!isSending">{{ t('contact.form.send') }}</span>
                            <span v-else class="animate-pulse">{{ t('contact.form.sending') }}</span>
                            <Send v-if="!isSending" :size="16" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>