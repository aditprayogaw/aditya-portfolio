<script setup lang="ts">
defineProps<{ isVisible: boolean }>()
</script>

<template>
    <Transition name="loader">
        <div v-if="isVisible" class="fixed inset-0 z-100 bg-white flex items-center justify-center">
            <div class="absolute top-0 left-0 w-full h-1 bg-slate-100">
                <div class="h-full bg-indigo-600 animate-progress"></div>
            </div>

            <div class="overflow-hidden">
                <p class="text-sm font-black uppercase tracking-[0.5em] text-slate-950 animate-reveal">
                    Aditya Visual
                </p>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
/* Animasi Progress Bar */
@keyframes progress {
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
}

.animate-progress {
    animation: progress 1s ease-in-out infinite;
}

/* Animasi Text Reveal */
@keyframes reveal {
    0% {
        transform: translateY(100%);
    }

    100% {
        transform: translateY(0);
    }
}

.animate-reveal {
    animation: reveal 0.6s cubic-bezier(0.77, 0, 0.175, 1);
}

/* Transisi Keluar (Slide Up) */
.loader-leave-active {
    transition: transform 0.8s cubic-bezier(0.85, 0, 0.15, 1);
}

.loader-leave-to {
    transform: translateY(-100%);
}
</style>