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
    techStack: ['Vue', 'TypeScript', 'TailwindCSS', 'Pinia'],
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

const featuredProjects = projects.filter(
  (project) => project.featured === true
);

const otherProjects = projects.filter((project) => project.featured === false);

const resumeUrl =
  'https://drive.google.com/file/d/15E0v5AKZ0G5nSyrONVfqQWDNQ3wGnO_o/view?usp=sharing';
</script>

<template>
  <!-- Hero -->
  <section class="bg-slate-200 dark:bg-slate-900">
    <AppContainer class="grid py-16 lg:grid-cols-2">
      <div class="mb-10 lg:order-2 lg:mb-0">
        <img
          class="dark:border-slate-700 w-1/2 mx-auto border rounded-full shadow-lg dark:shadow-slate-700 sm:w-1/3 h-50 border-slate-200 lg:w-[60%] lg:ml-auto lg:mr-0"
          src="/images/karl.jpg"
          alt="Karl Marx Manzano"
        />
      </div>

      <div
        class="mx-auto text-center lg:order-1 lg:text-start lg:my-auto lg:mr-auto lg:ml-0"
      >
        <h1
          class="text-2xl font-bold font-primary text-primary dark:text-slate-200"
        >
          Karl Marx Manzano
        </h1>
        <span class="text-sm font-secondary dark:text-slate-400"
          >Laravel | Vue | Nuxt engineer based in the PH</span
        >
      </div>
    </AppContainer>
  </section>

  <!-- About -->
  <AppSection description="About">
    <template #animatedTitle>👋</template>
    <p class="mb-6 text-sm font-secondary indent-8 sm:tracking-wide">
      Hello! I'm Karl Marx Manzano, a full stack web developer with more than
      5yrs of professional experience in building exceptional web solutions for
      companies or individuals using modern tools and frameworks. I am based in
      La Union, Philippines but helping clients around the globe remotely.
    </p>

    <p class="mb-8 text-sm lg:mb-12 font-secondary indent-8 sm:tracking-wide">
      More than 5 yrs I'm working as a web developer, I focus on full stack
      development using latest technologies and tools. I always try my best to
      produce high quality codes by implementing standard and best practices. I
      love to take challenging tasks and am constantly learning new technologies
      and strategies to provide a better quality services. I am hard-working,
      responsible, and a dedicated team member.
    </p>

    <ButtonCta :url="resumeUrl" class="block"> Download Resume </ButtonCta>
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
      :auto-height="true"
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

    <ButtonCta
      url="mailto:karlmarxmanzano@gmail.com"
      class="block md:max-w-fit md:mx-auto"
    >
      Say Hello
    </ButtonCta>
  </AppSection>
</template>

<style scoped lang="scss"></style>
