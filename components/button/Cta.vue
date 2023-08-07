<script setup lang="ts">
interface Props {
  url?: string;
}

const props = withDefaults(defineProps<Props>(), {
  url: '#',
});
</script>

<template>
  <a
    :href="props.url"
    class="px-6 py-4 ml-1 text-sm font-semibold text-center uppercase transition-all border rounded-lg cursor-pointer dark:hover:text-slate-400 dark:hover:border-slate-400 dark:hover:bg-slate-900 dark:hover:text-400 dark:text-yellow-400 dark:border-yellow-400 lg:px-4 lg:max-w-fit font-secondary border-primary text-primary border-primary-light hover:bg-primary hover:text-white"
  >
    <slot />
  </a>
</template>
