<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useProjectStore from '@/composables/useProject';
import Code from '~/components/Code.vue';

const resumeUrl =
  'https://drive.google.com/file/d/1RlUlMzxdtK8vIhvCJdID2BWyxGnvGjfo/view?usp=sharing';

const store = useProjectStore();
const { getProjects } = store;
const { featuredProjects, otherProjects } = storeToRefs(store);

onMounted(async () => {
  getProjects();
});

store.$subscribe((mutation, state) => {
  localStorage.setItem('cart', JSON.stringify(state));
});
</script>

<template>
  <!-- Hero -->
  <section class="bg-slate-200 dark:bg-slate-900">
    <AppContainer class="grid py-16 lg:grid-cols-3">
      <div class="mb-10 lg:col-span-1 lg:order-2 lg:mb-0">
        <img
          class="dark:border-slate-700 w-1/2 mx-auto border rounded-full shadow-lg dark:shadow-slate-700 sm:w-1/3 h-50 border-slate-200 lg:w-full lg:ml-auto lg:mr-0"
          src="/images/karl.jpg"
          alt="Karl Marx Manzano"
        />
      </div>

      <div
        class="mx-auto text-center lg:order-1 lg:text-start lg:my-auto lg:mr-auto lg:ml-0 lg:col-span-2"
      >
        <h1
          class="text-2xl font-bold font-primary text-primary dark:text-slate-200"
        >
          Karl Marx Manzano
        </h1>
        <span class="text-sm font-secondary dark:text-slate-400">
          Laravel | Vue/Nuxt | API integration | RESTful API
        </span>
      </div>
    </AppContainer>
  </section>

  <!-- About -->
  <AppSection description="About">
    <template #animatedTitle>👋</template>
    <p class="mb-6 text-sm font-secondary indent-8 sm:tracking-wid leading-6">
      Hi! I'm Karl Marx Manzano, a full-stack web developer with 7 years of
      experience delivering high-quality web solutions globally. Based in La
      Union, Philippines, I specialize in <Code>end-to-end development</Code>,
      <Code>3rd-party API integrations</Code>, <Code>RESTful APIs</Code>,
      <Code>optimization</Code>, and <Code>maintenance</Code>. Passionate about
      clean code and best practices, I continuously adapt to new technologies to
      ensure top-tier solutions.
    </p>

    <ButtonOutline :url="resumeUrl" class="block">
      Download Resume
    </ButtonOutline>
  </AppSection>

  <!-- Featured projects -->
  <AppSection
    title="Portfolio"
    description="Some projects I worked on."
    :cols="1"
    :dark="true"
  >
    <FeaturedProject
      v-for="(featuredProject, key) in featuredProjects"
      :key="key"
      :project="featuredProject"
      :reverse="key % 2 === 0 ? true : false"
      class="mb-10 lg:mb-16"
    >
    </FeaturedProject>
  </AppSection>

  <!-- Other projects -->
  <AppSection
    title="Portfolio"
    description="Other Significant Projects."
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
    >
      <SwiperSlide v-for="(otherProject, key) in otherProjects">
        <ProjectCard :key="key" :project="otherProject"> </ProjectCard>
      </SwiperSlide>
    </Swiper>
  </AppSection>

  <!-- Contact -->
  <AppSection title="Contact" description="Get in touch" :dark="true">
    <p class="block mb-10 text-sm text-center font-secondary">
      I am looking for new opportunities either full time or part time, remote
      work setup, currently. If you have an idea or need assistance with an
      ongoing project, I'd love to hear from you.
    </p>

    <ButtonOutline
      url="mailto:karlmarxmanzano@gmail.com"
      class="block md:max-w-fit md:mx-auto"
    >
      Say Hello
    </ButtonOutline>
  </AppSection>
</template>

<style scoped lang="scss"></style>
