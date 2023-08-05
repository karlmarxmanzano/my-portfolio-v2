<script setup lang="ts">
const colorMode = useColorMode();
import { SunIcon, MoonIcon } from '@heroicons/vue/20/solid';

// TRUE = DARK MODE
// FALSE = LIGHT MODE
const _dark = ref(true);

watch(
  _dark,
  (newVal) => {
    const _preference = newVal ? 'dark' : 'light';
    colorMode.preference = _preference;
  },
  { immediate: true }
);

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
      class="p-2 border rounded-lg text-primary bg-primary bg-opacity-20 dark:border-slate-700"
      @click="_dark = !_dark"
    >
      <MoonIcon class="w-6 h-6 dark:text-slate-300" v-if="_dark" />
      <SunIcon class="w-6 h-6" v-else />
    </button>
  </div>
</template>
