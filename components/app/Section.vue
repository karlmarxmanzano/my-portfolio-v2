<script setup lang="ts">
import { computed, useSlots } from 'vue';

interface Props {
  title?: string;
  description?: string;
  dark?: boolean;
  cols?: number;
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

const slots = useSlots();
</script>

<template>
  <!-- dark:bg-[#0f172af9] -->
  <!--  -->
  <section
    class="py-16 lg:py-20 dark:text-slate-300 dark:bg-[#0f172af9]"
    :class="[
      props.dark ? 'bg-primary bg-opacity-10 dark:bg-slate-900' : 'bg-white',
    ]"
  >
    <AppContainer>
      <div
        class="flex flex-col items-start justify-between space-y-4 lg:space-y-0 lg:flex-row"
        :class="[!props.title || !props.description ? 'mb-10' : 'mb-12']"
      >
        <div class="lg:basis-4/5">
          <div
            class="block mb-2 font-semibold uppercase text-primary font-secondary dark:text-slate-500"
          >
            &lt
            <template v-if="slots.animatedTitle">
              <div class="wave">
                <slot name="animatedTitle" />
              </div>
            </template>
            <template v-else>
              <span v-if="props.title">
                {{ props.title }}
              </span>
            </template>
            /&gt
          </div>

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

<style scoped lang="scss">
.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
