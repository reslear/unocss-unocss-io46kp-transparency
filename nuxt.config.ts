export default defineNuxtConfig({
    css: [
        '@unocss/reset/tailwind.css',
        '@/assets/main.scss',
    ],
    modules: [
        '@unocss/nuxt',
        '@nuxtjs/color-mode',
    ],
    colorMode: {
        classSuffix: '',
        storageKey: 'color-mode',
        preference: 'system', // default value of $colorMode.preference
        globalName: '__NUXT_COLOR_MODE__',
        fallback: 'light',
        hid: 'color-mode-script',
    },
})