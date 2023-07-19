<script setup lang="ts">
  const props = defineProps({
    title: { type: String, required: true },
    link: { type: String },
    github: { type: String },
  })
</script>

<template>
  <div class="flex items-center justify-between mb-5">
    <div class="text-xl text-start font-primary">
      {{ props.title }}
    </div>
    
    <div class="flex items-center gap-x-2">
      <a :href="props.link" target="_blank" v-if="props.link">
        <IconOpenInNew />
      </a>
      <a :href="props.github" target="_blank" v-if="props.github">
        <IconGithub />
      </a>
    </div>
  </div>
</template>