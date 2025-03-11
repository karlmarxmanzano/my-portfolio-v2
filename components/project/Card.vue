<script setup lang="ts">
import { type Project } from '~/interfaces/project';

interface Props {
  project: Project;
  dark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
});

const { title, slug, imageUrl, description, link, github, techStack } =
  props.project;
</script>

<template>
  <div
    class="px-6 py-5 border rounded-lg shadow cursor-pointer md:rounded-xl min-h-[310px] h-full mb-7 sm:mb-5 lg:mb-10 dark:bg-slate-800 dark:border-slate-800 dark:shadow-slate-800"
    :class="[props.dark ? 'bg-slate-200 border border-slate-200' : 'bg-white ']"
  >
    <NuxtLink :to="`/projects/${slug}`">
      <div class="flex items-center justify-between mb-5">
        <div
          class="font-bold tracking-tight uppercase truncate text-primary font-primary dark:text-slate-200"
        >
          {{ title }}
        </div>

        <div class="flex items-center gap-x-2">
          <NuxtLink :href="link" target="_blank" v-if="link">
            <IconOpenInNew />
          </NuxtLink>
          <NuxtLink :href="github" target="_blank" v-if="github">
            <IconGithub class="dark:text-slate-300" />
          </NuxtLink>
        </div>
      </div>

      <div class="relative w-auto mb-5 overflow-hidden h-100" v-if="imageUrl">
        <img
          :src="imageUrl"
          :alt="title"
          class="object-cover w-full h-full max-h-[220px]"
        />
      </div>

      <div class="text-sm font-secondary">
        {{ description }}
      </div>
    </NuxtLink>
  </div>
</template>
