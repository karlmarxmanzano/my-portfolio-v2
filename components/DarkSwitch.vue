<template>
  <div>
    <div
      class="flex items-center justify-between space-x-2"
      @click.prevent="toggleActive = !toggleActive"
    >
      <div class="text-accent dark:text-primary-light">
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
        </svg>
      </div>

      <div
        class="flex items-center h-8 p-1 duration-300 ease-in-out rounded-full cursor-pointer w-14 bg-night-light dark:bg-primary-light"
        :class="{'bg-primary-light': toggleActive, 'bg-night-light': !toggleActive}"
      >
        <div class="duration-300 ease-in-out transform bg-white rounded-full shadow-md w-7 h-7" :class="{ 'translate-x-5': toggleActive}"></div>
      </div>

      <div class="dark:text-accent">
        <svg class="w-5 h-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const toggleActive = ref(true);
  
  watch(toggleActive, (newVal, oldVal) => {
    // if (newVal) {
    //   localStorage.theme = 'dark'
    // } else {
    //   localStorage.theme = 'light'
    // }

    // // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //   document.documentElement.classList.add('dark')
    // } else {
    //   document.documentElement.classList.remove('dark')
    // }
  }, { immediate: true })
</script>



