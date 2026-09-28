<script setup lang="ts">
import StartMenu from '@/components/StartMenu.vue';
import Navbar from '@/components/Navbar.vue';
import DesktopIcon from '@/components/DesktopIcon.vue';
import { useDesktopStore } from '@/stores/desktopStore';

const desktopStore = useDesktopStore();
</script>

<template>
    <main class="relative w-svw h-svh overflow-hidden">
        <div class="absolute inset-0 pointer-events-auto">
            <DesktopIcon
                v-for="app in desktopStore.apps"
                :key="app.id"
                :app="app"
            />
        </div>

        <StartMenu/>
        <Navbar />
    </main>
</template>

<style scoped>
main {
    background-color: #121212;
    background-image: url("@/assets/img/wallpaper-dark.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>