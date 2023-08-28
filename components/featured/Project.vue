<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/20/solid';
import { Project } from 'interfaces/project';

interface Props {
  project: Project;
  dark?: boolean;
  reverse?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
  reverse: false,
});
</script>

<template>
  <div
    class="grid grid-cols-1 lg:grid-flow-col lg:grid-cols-2 lg:gap-x-8 xl:gap-x-6"
  >
    <div
      class="order-2 lg:order-1 lg:space-y-4"
      :class="{ '!order-2': props.reverse }"
    >
      <div class="flex items-center justify-between mb-2 mt-7 lg:mt-0">
        <NuxtLink
          :to="`/projects/${props.project.slug}`"
          class="font-bold tracking-tight uppercase truncate text-primary font-primary dark:text-slate-200"
        >
          {{ props.project.title }}
        </NuxtLink>

        <div class="flex items-center space-x-2">
          <div>
            <a
              :href="props.project.link"
              target="_blank"
              v-if="props.project.link"
            >
              <ArrowTopRightOnSquareIcon class="w-5 h-5" />
            </a>
            <a
              :href="props.project.github"
              target="_blank"
              v-if="props.project.github"
            >
              <IconGithub class="dark:text-slate-300" />
            </a>
          </div>
        </div>
      </div>

      <div class="text-sm font-secondary dark:text-slate-400">
        {{ props.project.description }}
      </div>
    </div>

    <div class="order-1">
      <img
        class="shadow-[10px_10px_0_#94A3B8] object-cover dark:shadow-[10px_10px_0_#1E293B]"
        :src="props.project.imageUrl"
        :alt="props.project.title"
      />
    </div>
  </div>
</template>
