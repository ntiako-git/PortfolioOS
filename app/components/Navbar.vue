<script setup lang="ts">
import { ref } from 'vue';
import { useWindowStore } from '@/stores/windowStore';

const activeIndex = ref(0);
const windowStore = useWindowStore();
</script>

<template>
    <div class="fixed max-w-[30%] w-fit bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center gap-5 px-3 py-2.5 rounded-lg bg-linear-to-br from-blue-900/30 via-slate-900/60 to-black/70 bg-white/20 backdrop-blur-lg">
        <button
            id="start-menu-button"
            @click="windowStore.toggleStartMenu()"
            :class="[
                'relative p-2.5 rounded-xl flex items-center justify-center transition-colors duration-300 hover:bg-white/10 active:scale-95 cursor-pointer',
                windowStore.isStartMenuOpen ? 'bg-white/10' : 'bg-white/0'
            ]"
        >
            <UIcon
                name="i-heroicons-squares-2x2-16-solid"
                class="w-10 h-10 bg-linear-to-br from-[#b5cde9] to-[#2f66d8]"
            />
        </button>

<!--        <button-->
<!--            @click="activeIndex = 1"-->
<!--            :class="[-->
<!--                'relative p-2.5 rounded-xl flex items-center justify-center transition-colors duration-300 hover:bg-white/10 active:scale-95 cursor-pointer',-->
<!--                activeIndex === 1 ? 'bg-white/10' : 'bg-white/0'-->
<!--            ]"-->
<!--        >-->
<!--            <UIcon-->
<!--                name="i-heroicons-folder-16-solid"-->
<!--                class="w-10 h-10 bg-[#f8c336]"-->
<!--            />-->
<!--        </button>-->

<!--        <button-->
<!--            @click="activeIndex = 2"-->
<!--            :class="[-->
<!--                'relative p-2.5 rounded-xl flex items-center justify-center transition-colors duration-300 hover:bg-white/10 active:scale-95 cursor-pointer',-->
<!--                activeIndex === 2 ? 'bg-white/10' : 'bg-white/0'-->
<!--            ]"-->
<!--        >-->
<!--            <UIcon-->
<!--                name="i-heroicons-document-text-16-solid"-->
<!--                class="w-10 h-10 bg-[#90caf9]"-->
<!--            />-->
<!--        </button>-->
    </div>
</template>

<style scoped>

</style>