<script setup lang="ts">
import { storeToRefs } from 'pinia';
const route = useRoute();

const store = useProject();
const { getSelectedProject } = store;
const { selectedProject, otherFeaturedProjects } = storeToRefs(store);

onMounted(() => {
  getSelectedProject(route.params.slug);

  if (!selectedProject.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Project Not Found',
      fatal: true,
    });
  }
});
</script>

<template>
  <section
    class="py-10 lg:py-16 xl:py-20 text-gray-900 dark:text-slate-400 dark:bg-[#0f172af9] bg-white"
  >
    <AppContainer>
      <div
        class="mb-10 text-2xl font-bold text-center uppercase lg:text-xl sm:text-2xl font-primary dark:text-slate-200 text-primary"
      >
        {{ selectedProject?.title }}
      </div>

      <div class="mb-7" v-if="selectedProject?.imageUrl">
        <img
          :src="selectedProject?.imageUrl"
          :alt="selectedProject?.imageUrl"
          class="object-cover w-full h-full"
        />
      </div>

      <div
        class="mb-6 text-sm font-secondary sm:tracking-wide dark:text-slate-200"
      >
        {{ selectedProject?.description }}
      </div>

      <div>
        <div v-if="selectedProject?.link">
          <div
            class="inline-block mb-6 text-sm font-secondary sm:tracking-wide"
          >
            URL:
          </div>
          <NuxtLink
            :to="selectedProject.link"
            target="_blank"
            class="inline-block px-2 py-1 text-sm tracking-tight text-primary dark:text-slate-200 font-primary"
          >
            {{ selectedProject.link }}
          </NuxtLink>
        </div>

        <div v-if="selectedProject?.github">
          <div
            class="inline-block mb-6 text-sm font-secondary sm:tracking-wide"
          >
            GitHub:
          </div>
          <div
            class="inline-block px-2 py-1 text-sm tracking-tight text-primary dark:text-slate-200 font-primary"
          >
            {{ selectedProject.github }}
          </div>
        </div>
      </div>

      <div class="">
        <div class="block mb-2 text-sm font-secondary sm:tracking-wide">
          Tech Stack:
        </div>
        <div class="">
          <span
            v-for="(stack, key) in selectedProject?.techStack"
            class="inline-block px-2 py-1 mb-1 mr-2 text-xs tracking-tight rounded dark:bg-slate-800 font-primary dark:text-slate-200 text-primary bg-primary bg-opacity-10"
            :key="key"
          >
            {{ stack }}
          </span>
        </div>
      </div>
    </AppContainer>
  </section>

  <AppSection
    title="Portfolio"
    description="Other Featured Projects."
    :cols="2"
  >
    <Swiper
      :modules="[SwiperPagination, SwiperFreeMode, SwiperAutoplay]"
      :slides-per-view="1"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :breakpoints="{
        '1024': {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      }"
      space-between="30"
      :auto-height="true"
    >
      <SwiperSlide v-for="(otherFeaturedProject, key) in otherFeaturedProjects">
        <ProjectCard :key="key" :project="otherFeaturedProject"> </ProjectCard>
      </SwiperSlide>
    </Swiper>
  </AppSection>
</template>

<style scoped></style>
