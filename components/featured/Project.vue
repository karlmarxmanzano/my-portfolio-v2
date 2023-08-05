<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/20/solid';

interface Props {
  title: string;
  imageUrl: string;
  description: string;
  link?: string;
  github?: string;
  dark: boolean;
  reverse: boolean;
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
        <div class="font-bold uppercase truncate text-primary font-primary">
          {{ props.title }}
        </div>

        <div class="flex items-center space-x-2">
          <div>
            <a :href="props.link" target="_blank" v-if="props.link">
              <ArrowTopRightOnSquareIcon class="w-5 h-5" />
            </a>
            <a :href="props.github" target="_blank" v-if="props.github">
              <IconGithub />
            </a>
          </div>
        </div>
      </div>

      <div class="text-sm font-secondary">
        {{ props.description }}
      </div>
    </div>

    <div class="order-1">
      <img
        class="shadow-[10px_10px_0_#1EC9ED] object-cover"
        :class="{ 'shadow-[-10px_-10px_0_#1EC9ED]': props.reverse }"
        :src="props.imageUrl"
        :alt="props.title"
      />
    </div>
  </div>
</template>
