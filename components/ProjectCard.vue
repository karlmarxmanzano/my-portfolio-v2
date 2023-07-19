<template>
  <div>
    <div class="bg-primary-light border-0 rounded-md h-64 sm:h-72 w-fill px-5 py-4 flex flex-col cursor-pointer transform transition hover:-translate-y-0.5 dark:bg-night-light">
      <div class="flex py-2 text-gray-900 gap-x-2 h-1/6">
        <div class="w-5 h-5 locked">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" /></svg>
        </div>

        <div class="w-5 h-5 github">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </div>

        <div class="w-5 h-5 external-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
        </div>
      </div>

      <div class="h-4/6">
        <p class="mb-4 text-lg font-bold tracking-wider text-white uppercase dark:text-blue-100">Google Keep Clone</p>
        <p class="text-sm text-blue-100 dark:text-light-light">A simple Google Keep clone built with Vue and Firebase</p>
      </div>

      <div class="flex items-end h-1/6 gap-x-2">
        <span class="text-xs text-blue-400 uppercase dark:text-light-light">VueJs</span>
        <span class="text-xs text-blue-400 uppercase dark:text-light-light">Firebase</span>
      </div>
    </div>
  </div>
</template>
