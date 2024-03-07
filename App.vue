<script setup lang="ts">
const { toggleTheme } = useColorModeInstance()
</script>

<template>
  <div class="text-center font-sans p4 bg-white dark:bg-black h-screen">
    <div class="logo" />
    <div class="text-primary text-lg">
      Hello UnoCSS + Vue
    </div>
    <p class="text-primary/25">25%</p>
    <p class="text-primary/56">56%</p>
    <p class="text-primary/89">89%</p>
    <p class="text-primary/100">100%</p>
    <div class="i-custom-icon" />
    <div class="i-custom-multi-line-attr" />
    <!-- @unocss-skip-start -->
    <div class="hidden bg-[url(../src/uno.svg)] bg-[url(/uno.svg)]" />
    <!-- @unocss-skip-end -->
    <button class="w-full mt-5 text-black dark:text-white" @click="toggleTheme()">Switch theme</button>
  </div>
</template>
