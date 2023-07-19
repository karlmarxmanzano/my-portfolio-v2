<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    light: { type: Boolean, default: true },
    cols: { type: Number || String, default: 2 }
  })
  
  const column = computed(() => `lg:grid-cols-${props.cols}`)
</script>

<template>
  <section class="py-16" :class="[props.light ? 'bg-white' : 'bg-gray-50']">
      <div class="container max-w-5xl mx-auto">
        <SectionHead :title="props.title" :description="props.description"></SectionHead>
        
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2" :class="column">
          <slot name="content"></slot>
        </div>
      </div>
    </section>
</template>