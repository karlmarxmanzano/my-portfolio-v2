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
    class="p-6 bg-white border rounded-lg shadow cursor-pointer border-opacity-20 md:rounded-xl dark:bg-slate-800 dark:border-slate-800 dark:shadow-md dark:shadow-slate-800"
  >
    <div class="mb-1 text-xs font-semibold font-primary">
      {{ props.subtitle }}
    </div>
    <div class="mb-6 font-semibold font-primary">
      {{ props.title }}
    </div>
    <div class="text-sm font-secondary dark:text-slate-400">
      {{ props.description }}
    </div>
  </div>
</template>

<style scoped></style>
