<script setup lang="ts">
import VueDraggableResizable from 'vue-draggable-resizable';
import type { DesktopApp } from '@/stores/desktopStore';
import { useDesktopStore } from '@/stores/desktopStore';

const props = defineProps<{
    app: DesktopApp
}>()

const desktopStore = useDesktopStore()

const onDragStop = (x: number, y: number) => {
    desktopStore.updatePosition(props.app.id, x, y)
}
</script>

<template>
    <VueDraggableResizable
        :x="app.x"
        :y="app.y"
        :w="80"
        :h="90"
        :resizable="false"
        :parent="false"
        :grid="[20, 20]"
        class-name="desktop-icon-wrapper"
        @drag-stop="onDragStop"
    >
        <div
            @dblclick="desktopStore.launchApp(app)"
            class="w-fit h-fit flex flex-col items-center justify-center px-6 py-2.5 rounded-xl hover:bg-white/10 active:bg-white/20 transition-colors cursor-pointer select-none group"
    	>
            <img :src="app.icon" :alt="app.name" class="w-15 h-15 text-white mb-1 group-hover:scale-105 transition-transform duration-200" />
            <span class="text-xs text-white text-center font-medium truncate w-full">
                {{ app.name }}
            </span>
        </div>
    </VueDraggableResizable>
</template>

<style scoped>
:deep(.desktop-icon-wrapper) {
    border: none !important;
}
</style>