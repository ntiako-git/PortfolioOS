<script setup lang="ts">
import { Motion, AnimatePresence } from 'motion-v';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';
import { useWindowStore } from '@/stores/windowStore';
import typescriptIcon from '@/assets/svg/typescript-icon.svg';
import nuxtIcon from '@/assets/svg/nuxt-icon.svg';
import tauriIcon from '@/assets/svg/tauri.svg';
import cIcon from '@/assets/svg/c.svg';
import figmaIcon from '@/assets/svg/figma.svg';
import githubIcon from '@/assets/svg/github-icon.svg';
import postgresIcon from '@/assets/svg/postgresql.svg';

const windowStore = useWindowStore();
const menuRef = ref<HTMLElement | null>(null);

onClickOutside(menuRef, () => {
    if (windowStore.isStartMenuOpen) windowStore.closeStartMenu();
},
{ ignore: ['#start-menu-button'] });

const apps = [
    { name: 'Github', type: 'svg', icon: githubIcon, color: 'bg-pink-400' },
    { name: 'Ecole 42', type: 'icon', icon: 'i-simple-icons-42', color: 'bg-slate-400' },
    { name: 'C Language', type: 'svg', icon: cIcon, color: 'bg-[#a8bacd]' },
    { name: 'JS/TS', type: 'svg', icon: typescriptIcon, color: 'bg-yellow-400' },
    { name: 'VueJS / Nuxt', type: 'svg', icon: nuxtIcon, color: 'bg-emerald-400' },
    { name: 'Tauri', type: 'svg', icon: tauriIcon, color: 'bg-blue-400' },
    { name: 'Discord Apps', type: 'icon', icon: 'i-simple-icons-discorddotjs', color: 'bg-indigo-400' },
    { name: 'Figma', type: 'svg', icon: figmaIcon, color: 'bg-pink-400' },
    { name: 'PostgreSQL', type: 'svg', icon: postgresIcon, color: 'bg-pink-400' },
];
</script>

<template>
    <AnimatePresence>
        <Motion
            v-if="windowStore.isStartMenuOpen"
            ref="menuRef"
            :initial="{ y: 50, opacity: 0, scale: 0.95 }"
            :animate="{ y: 0, opacity: 1, scale: 1 }"
            :exit="{ y: 50, opacity: 0, scale: 0.95 }"
            :transition="{ type: 'spring', stiffness: 300, damping: 22 }"
            class="fixed bottom-30 left-1/2 -translate-x-1/2 w-[90%] max-w-md p-6 rounded-2xl bg-linear-to-br from-blue-900/30 via-slate-900/60 to-black/70 bg-white/20 backdrop-blur-lg z-40 text-white"
        >
            <h3 class="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                Compétences & Outils
            </h3>

            <div class="grid grid-cols-3 gap-4">
                <button
                    v-for="app in apps"
                    :key="app.name"
                    class="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 group cursor-pointer"
                >
                    <div class="rounded-xl mb-2 transition-transform duration-200 group-hover:scale-110">
                        <UIcon
                            v-if="app.type === 'icon'"
                            :name="app.icon"
                            class="w-7 h-7 text-white"
                        />

                        <img
                            v-else
                            :src="app.icon"
                            :alt="app.name"
                            class="w-7 h-7"
                        />
                    </div>
                    <span class="text-xs text-slate-200 text-center font-medium">{{ app.name }}</span>
                </button>
            </div>
        </Motion>
    </AnimatePresence>
</template>