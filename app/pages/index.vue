<script setup lang="ts">
import StartMenu from '@/components/StartMenu.vue';
import Navbar from '@/components/Navbar.vue';

</script>

<template>
    <main class="relative w-svw h-svh overflow-hidden">
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