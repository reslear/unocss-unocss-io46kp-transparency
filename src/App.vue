<script lang="ts" setup>
import { useColorMode } from '@vueuse/core'

const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: 'dark contrast',
    cafe: 'cafe',
  },
})

</script>

<template>
  <div text-center font-sans p4 class="bg-bg">
    <div logo />
    <div class="text-primary/50 text-lg">
      Hello UnoCSS + Vue
    </div>
    <div i-custom-icon />
    <div i-custom-multi-line-attr />
    <!-- @unocss-skip-start -->
    <div hidden class="bg-[url(../src/uno.svg)] bg-[url(/uno.svg)]" />
    <!-- @unocss-skip-end -->


    <button @click="mode =  mode === 'dark' ? 'light' : 'dark'">
    {{ mode }}
    </button>
  </div>
</template>
