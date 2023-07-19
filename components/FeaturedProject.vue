<template>
  <div class="grid grid-flow-row md:grid-flow-col md:grid-cols-2 md:gap-x-8 lg:gap-x-16">
    <div class="flex flex-col justify-center order-2 mt-6 space-y-4 md:order-1 sm:mt-10 md:mt-0" :class="{'order-2': props.reverse}">
      <div class="flex items-center justify-between" :class="{'mt-2': !props.reverse}">
        <div>
          <div class="text-sm font-medium tracking-widest uppercase text-primary dark:text-accent">Featured Project</div>
          <div class="text-3xl font-bold dark:text-blue-100">Trello Clone</div>
        </div>

        <div class="flex items-center space-x-2 text-night-dark dark:text-light-light">
          <div class="w-5 h-5 github">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </div>

          <div class="w-6 h-6 external-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
          </div>
        </div>
      </div>

      <div class="text-sm text-light lg:w-4/5 dark:text-light-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed suscipit libero voluptatibus quos. Accusamus officia, est obcaecati tempore vitae adipisci consectetur magni, atque quas ex omnis quasi id sint.
      </div>

      <div class="flex justify-between">
        <div class="flex space-x-3 dark:text-light-light">
          <div class="text-xs uppercase">VueJS</div>
          <div class="text-xs uppercase">TailwindCSS</div>
        </div>

        <div class="flex space-x-3">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </div>
      </div>
    </div>

    <div class="order-1 md:order-2" :class="{'order-1': props.reverse}">
      <img class="img-shadow" :class="{'shadow-reverse': props.reverse}" src="~/assets/images/img-placeholder.jpg" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    reverse: { type: Boolean, default: false }
  })
</script>

<style lang="scss" scoped>
  // .reverse {
  //   &-info {
  //     @apply order-2;
  //   }

  //   &-img {
  //     @apply order-1;
  //   }
  // }

  .img-shadow {
    box-shadow: 10px 10px 0 #1EC9ED;
  }

  .shadow-reverse {
    box-shadow: -10px -10px 0 #1EC9ED;
  }
</style>
