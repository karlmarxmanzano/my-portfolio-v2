<script setup lang="ts">
  const props = defineProps({
    isRounded: { type: Boolean, default: true },
    isOutlined: { type: Boolean, default: false }
  })
</script>

<template>
  <button
    class="bg-yellow-400 px-6 py-3 rounded transform transition hover:-translate-y-0.5 focus:ring-accent focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-accent-dark"
    :class="{ 'rounded-btn': props.isRounded, 'outlined-btn': props.isOutlined }"
  >
    <slot />
  </button>
</template>