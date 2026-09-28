import { defineStore } from 'pinia';
import { ref } from 'vue';
import githubIcon from '@/assets/svg/github-icon.svg';
import discordIcon from '@/assets/svg/discord-icon.svg';
import mailIcon from '@/assets/svg/google-gmail.svg';

export interface DesktopApp {
    id: string
    name: string
    icon: string
    type: 'external' | 'mailto' | 'discord'
    target: string
    x: number
    y: number
}

export const useDesktopStore = defineStore('desktop', () => {
    const apps = ref<DesktopApp[]>([
		{
            id: 'mail',
            name: 'Me Contacter',
            icon: mailIcon,
            type: 'mailto',
            target: 'mailto:972nolhan@gmail.com?subject=Contact%20Nolhan',
            x: 30,
            y: 30
        },
        {
            id: 'discord',
            name: 'Discord',
            icon: discordIcon,
            type: 'discord',
            target: 'https://discord.com/users/911969652874285107',
            x: 30,
            y: 130
        },
        {
            id: 'github',
            name: 'GitHub',
            icon: githubIcon,
            type: 'external',
            target: 'https://github.com/ntiako-git',
            x: 30,
            y: 230
        }
    ])

    // Déclenché au double-clic
    const launchApp = (app: DesktopApp) => {
        if (app.type === 'external' || app.type === 'discord' || app.type === 'mailto')
            window.open(app.target, '_blank')
    }

    // Sauvegarde la position après un déplacement
    const updatePosition = (id: string, x: number, y: number) => {
        const app = apps.value.find((a) => a.id === id);
        if (app) {
            app.x = x;
            app.y = y;
        }
    }

    return { apps, launchApp, updatePosition }
})