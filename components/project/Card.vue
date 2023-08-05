<script setup lang="ts">
interface Props {
  title: string;
  imageUrl?: string;
  description: string;
  link?: string;
  githubLink?: string;
  dark: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
});
</script>

<template>
  <div
    class="px-6 py-5 border rounded-lg shadow cursor-pointer md:rounded-xl min-h-[310px] mb-7 sm:mb-5 lg:mb-10 dark:bg-slate-800 dark:border-slate-800 dark:shadow-slate-800"
    :class="[props.dark ? 'bg-slate-200 border border-slate-200' : 'bg-white ']"
  >
    <div class="flex items-center justify-between mb-5">
      <div
        class="font-bold tracking-tight uppercase truncate text-primary font-primary dark:text-slate-200"
      >
        {{ props.title }}
      </div>

      <div class="flex items-center gap-x-2">
        <a :href="props.link" target="_blank" v-if="props.link">
          <IconOpenInNew />
        </a>
        <a :href="props.githubLink" target="_blank" v-if="props.githubLink">
          <IconGithub class="dark:text-slate-300" />
        </a>
      </div>
    </div>

    <div
      class="relative w-auto mb-5 overflow-hidden h-100"
      v-if="props.imageUrl"
    >
      <img
        :src="props.imageUrl"
        :alt="props.title"
        class="object-cover w-full h-full max-h-[220px]"
      />
    </div>

    <div class="text-sm font-secondary">
      {{ props.description }}
    </div>
  </div>
</template>
