<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  description: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="p-6 border rounded-lg shadow cursor-pointer border-opacity-20 md:rounded-xl"
  >
    <div class="mb-1 text-xs font-semibold font-primary">
      {{ props.subtitle }}
    </div>
    <div class="mb-6 font-semibold font-primary">
      {{ props.title }}
    </div>
    <div class="text-sm font-secondary">
      {{ props.description }}
    </div>
  </div>
</template>

<style scoped></style>
