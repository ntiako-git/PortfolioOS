import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWindowStore = defineStore('window', () => {
    const isStartMenuOpen = ref(false)

    const toggleStartMenu = () => {
        isStartMenuOpen.value = !isStartMenuOpen.value
    }

    const closeStartMenu = () => {
        isStartMenuOpen.value = false
    }

    return { isStartMenuOpen, toggleStartMenu, closeStartMenu }
});