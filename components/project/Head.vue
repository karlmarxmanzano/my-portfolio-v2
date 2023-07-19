<script setup lang="ts">
  const props = defineProps({
    title: { type: String, required: true },
    link: { type: String, required: true },
    github: { type: String, required: true },
  })
</script>

<template>
  <div class="flex items-center justify-between mb-5">
    <div class="text-xl text-start font-primary">
      {{ props.title }}
    </div>
    
    <div class="flex items-center gap-x-2">
      <a :href="props.link" target="_blank">
        <IconOpenInNew />
      </a>
      <a :href="props.github" target="_blank">
        <IconGithub />
      </a>
    </div>
  </div>
</template>