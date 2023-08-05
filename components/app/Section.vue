<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title?: string;
  description?: string;
  dark: boolean;
  cols: number;
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
  cols: 2,
});

const column = computed(() => {
  switch (props.cols) {
    case 3:
      return 'lg:grid-cols-3';

    default:
      return 'lg:grid-cols-2';
  }
});
</script>

<template>
  <!-- dark:bg-[#0f172af9] -->
  <section
    class="py-16 bg-primary bg-opacity-10 dark:text-slate-300 dark:bg-[#0f172af9]"
    :class="[
      props.dark ? 'bg-primary bg-opacity-10' : 'bg-white dark:bg-slate-900',
    ]"
  >
    <AppContainer>
      <div
        class="flex flex-col items-start justify-between space-y-4 lg:space-y-0 lg:flex-row"
        :class="[!props.title || !props.description ? 'mb-10' : 'mb-12']"
      >
        <div class="lg:basis-4/5">
          <span
            class="block mb-2 font-semibold uppercase text-primary font-secondary dark:text-slate-500"
            v-if="props.title"
          >
            &lt {{ props.title }} /&gt
          </span>
          <h2
            class="text-xl font-bold sm:text-2xl lg:text-3xl font-primary"
            v-if="props.description"
          >
            {{ props.description }}
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6" :class="column">
        <slot name="content"></slot>
      </div>

      <div>
        <slot />
      </div>
    </AppContainer>
  </section>
</template>
