<script setup lang="ts">
  const props = defineProps({
    title: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true },
    link: { type: String },
    github: { type: String },
    light: { type: Boolean, default: true }
  })
</script>

<template>
  <div class="flex flex-col h-auto p-6 rounded-2xl" :class="[props.light ? 'bg-white' : 'bg-gray-50']">
    <ProjectHead :title="props.title" :link="props.link" :github="props.github"></ProjectHead>
    
    <div class="relative w-auto mb-5 overflow-hidden h-100 rounded-xl" v-if="props.image">
      <img :src="props.image" :alt="props.title" class="object-cover w-full h-full max-h-[220px]">
    </div>
    
    <div class="text-sm text-gray-500 text-start font-secondary">
        {{ props.description }}
    </div>
    
    <div class="flex items-center pt-6 gap-x-4">
      <slot name="stack-icons"></slot>
    </div>
  </div>
</template>