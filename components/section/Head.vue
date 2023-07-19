<script setup lang="ts">
  const props = defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true }
  })
</script>

<template>
  <div class="flex flex-col items-start justify-between mb-12 space-y-4 lg:space-y-0 lg:flex-row">
    <div class="basis-3/4">
      <span class="block mb-2 font-semibold uppercase primary-color font-secondary">
          {{ props.title }}
      </span>
      <h2 class="text-4xl font-bold font-primary">
        {{ props.description }}
      </h2>
    </div>
  </div>
</template>