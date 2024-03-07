import { resolve } from 'node:path'
import {
    defineConfig,
    presetIcons,
    presetUno,
  } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import presetAttributify from '@unocss/preset-attributify'
const iconDirectory = resolve(__dirname, 'icons')

export default defineConfig({
shortcuts: [
    { logo: 'i-logos-vue w-6em h-6em transform transition-800' },
    ],
    presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
        extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        },
        collections: {
        custom: FileSystemIconLoader(iconDirectory),
        },
    }),
    ],
theme: {
    colors: {
        'primary': '#880088',
    }
    }
})