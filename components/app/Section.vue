<template>
  <div class="px-6 sm:px-0 sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto py-8 md:py-16 lg:py-24 relative">
    <p v-if="title" class="section-title text-center text-primary uppercase tracking-wider sm:tracking-widest font-bold text-2xl sm:text-3xl mb-6 md:mb-12 lg:mb-20 dark:text-accent">{{ title }}</p>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    title: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
