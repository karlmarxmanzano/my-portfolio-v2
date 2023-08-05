<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/20/solid';
const checked = ref(true);

// watch(
//   toggleActive,
//   (newVal, oldVal) => {
//     // if (newVal) {
//     //   localStorage.theme = 'dark'
//     // } else {
//     //   localStorage.theme = 'light'
//     // }
//     // // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     //   document.documentElement.classList.add('dark')
//     // } else {
//     //   document.documentElement.classList.remove('dark')
//     // }
//   },
//   { immediate: true }
// );
</script>

<template>
  <div>
    <button
      class="p-2 border rounded-lg bg-primary bg-opacity-20 text-slate-800 dark:text-slate-300 dark:hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-green-400"
      @click="checked = !checked"
    >
      <SunIcon class="w-6 h-6 text-white" v-if="checked" />
      <MoonIcon class="w-6 h-6 text-white" v-else />
    </button>
  </div>
</template>
