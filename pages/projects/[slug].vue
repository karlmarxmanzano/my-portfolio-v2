<script setup lang="ts">
const projects = [
  {
    title: 'Isuzuphil.com.ph',
    slug: 'isuzuphil-com-ph',
    imageUrl: '/images/isuzuphil.png',
    description: 'Complete revamp of Isuzu Philippines website.',
    link: 'https://www.isuzuphil.com/',
    githubRepo: '',
    techStack: [
      'Laravel',
      'OctoberCMS',
      'MySQL',
      'Bootstrap',
      'SaSS',
      'jQuery',
      'Twig',
    ],
    featured: true,
  },
  {
    title: 'Ritemed.com.ph',
    slug: 'ritemed-com-ph',
    imageUrl: '/images/ritemed.png',
    description:
      'Front-end enhancements of Ritemed Philippines website to provide a better user experience namely a store/medicine locator.',
    link: 'https://www.ritemed.com.ph/',
    githubRepo: '',
    techStack: ['CodeIgniter', 'Bootstrap', 'SaSS'],
    featured: true,
  },
  {
    title: 'Unistar Credit and Finance Corp.',
    slug: 'unistar-credit-and-finance-corp',
    imageUrl: '/images/unistar.png',
    description:
      'Full stack development from scratch. Built a website for a financing firm to provide a fast, easy, and convenient loan operations',
    techStack: [
      'Laravel',
      'OctoberCMS',
      'MySQL',
      'Bootstrap',
      'SaSS',
      'jQuery',
      'Twig',
    ],
    featured: true,
  },
  {
    title: 'BuhayHW.com',
    slug: 'buhayhw-com',
    imageUrl: '/images/buhayhw.png',
    description:
      'Designed and developed an IV Therapy website for a client based in United States that provides online scheduling platform for individuals who need IV therapy. ',
    link: 'https://buhayhw.com/',
    githubRepo: '',
    techStack: ['WordPress', 'CSS', 'MySQL'],
    featured: true,
  },
  {
    title: 'My Personal Portfolio',
    slug: 'my-personal-portfolio',
    imageUrl: '/images/portfolio.png',
    description:
      'My Personal Portfolio built with Nuxt and TailwindCSS implementing a mobile-first development. Designed and developed using the latest technologies.',
    link: 'https://example.com/',
    githubRepo: 'https://github.com/',
    techStack: ['Nuxt', 'TailwindCSS', 'Pinia'],
    featured: false,
  },
  {
    title: 'Trello Clone',
    slug: 'trello-clone',
    imageUrl: '/images/trello-clone.png',
    description:
      'Basic Trello app clone using Vue - TS, Vue Composition API, Pinia for state management, and TailwindCSS.',
    link: 'https://xenodochial-brahmagupta-453531.netlify.app/',
    githubRepo: 'https://github.com/karlmarxmanzano/trello-clone',
    techStack: ['Vue', 'TailwindCSS', 'Pinia'],
    featured: false,
  },
  {
    title: 'Laravel CRM',
    slug: 'laravel-crm',
    description:
      'Simple CRM website to showcase TALL (Tailwind, Alpine.js, Laravel, Livewire) stack development using Laravel Filament.',
    link: 'https://example.com/',
    githubRepo: 'https://github.com/',
    techStack: [
      'TailwindCSS',
      'Alpine',
      'Laravel',
      'Livewire',
      'Laravel Filament',
    ],
    featured: false,
  },
];

const route = useRoute();
const slug = route.params.slug;

const selectedProject = projects.find((project) => project.slug === slug);

if (!selectedProject) {
  throw new Error('An error has occured');
}

const { featured: isFeatured } = selectedProject;

const otherFeaturedProjects = projects.filter(
  (project) => project.slug !== slug && project.featured === isFeatured
);
</script>

<template>
  <section
    class="py-10 lg:py-16 lg:py-20 text-gray-900 dark:text-slate-400 dark:bg-[#0f172af9] bg-white"
  >
    <AppContainer>
      <div
        class="mb-10 text-2xl font-bold text-center uppercase lg:text-xl sm:text-2xl font-primary dark:text-slate-200 text-primary"
      >
        {{ selectedProject.title }}
      </div>

      <div class="mb-7" v-if="selectedProject.imageUrl">
        <img
          :src="selectedProject.imageUrl"
          :alt="selectedProject.imageUrl"
          class="object-cover w-full h-full"
        />
      </div>

      <div
        class="mb-6 text-sm font-secondary sm:tracking-wide dark:text-slate-200"
      >
        {{ selectedProject.description }}
      </div>

      <div>
        <div v-if="selectedProject.link">
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

        <div v-if="selectedProject.githubRepo">
          <div
            class="inline-block mb-6 text-sm font-secondary sm:tracking-wide"
          >
            GitHub:
          </div>
          <div
            class="inline-block px-2 py-1 text-sm tracking-tight text-primary dark:text-slate-200 font-primary"
          >
            {{ selectedProject.githubRepo }}
          </div>
        </div>
      </div>

      <div class="">
        <div class="block mb-2 text-sm font-secondary sm:tracking-wide">
          Tech Stack:
        </div>
        <div class="">
          <span
            v-for="(stack, key) in selectedProject.techStack"
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
