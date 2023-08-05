<template>
  <section class="bg-slate-200 dark:bg-slate-900">
    <AppContainer class="grid py-16 lg:grid-cols-2">
      <div class="mb-10 lg:order-2 lg:mb-0">
        <img
          class="dark:border-slate-700 w-1/2 mx-auto border rounded-full shadow-lg dark:shadow-slate-700 sm:w-1/3 h-50 border-slate-200 lg:w-[60%] lg:ml-auto lg:mr-0"
          src="~/assets/images/karl.jpg"
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

  <AppSection title="👋" description="About">
    <p class="mb-6 text-sm font-secondary indent-8 sm:tracking-wide">
      Hello! I'm Karl Marx Manzano, a full stack web developer with more than
      5yrs of professional experience in building exceptional web solutions for
      companies or individuals using modern tools and frameworks. I am based in
      La Union, Philippines but helping clients around the globe remotely.
    </p>

    <p class="mb-8 text-sm lg:mb-12 font-secondary indent-8 sm:tracking-wide">
      More than 5 yrs I'm working as a web developer, I focus on full stack
      development using latest technologies and tools. I always try my best to
      produce high quality codes by implementing code best practices. I love to
      take challenging tasks and am constantly learning new technologies. I am
      hard-working, responsible, and a dedicated team member.
    </p>

    <a
      href="#"
      class="py-2 ml-1 text-sm font-semibold text-center uppercase transition-all border rounded-lg cursor-pointer dark:hover:text-slate-400 dark:hover:border-slate-400 dark:hover:bg-slate-900 dark:hover:text-400 dark:text-yellow-400 dark:border-yellow-400 lg:px-4 lg:max-w-fit font-secondary border-primary text-primary border-primary-light hover:bg-primary hover:text-white"
    >
      Download resume
    </a>
  </AppSection>

  <AppSection
    title="Portfolio"
    description="Some projects I worked on."
    :cols="1"
    :dark="true"
  >
    <FeaturedProject
      title="Isuzuphil.com.ph"
      imageUrl="../assets/images/isuzuphil.png"
      description="Revamping their old site into a more modern design and implementing new features to make potential buyers updated, provide online support, and a virtual showroom."
      link="https://www.isuzuphil.com/"
      class="mb-10 lg:mb-16"
    >
      <template #stack-icons>
        <IconLaravel />
        <IconOctoberCMS />
        <IconBootstrap />
        <IconJQuery />
        <IconSass />
      </template>
    </FeaturedProject>
    <!--  -->
    <FeaturedProject
      title="Ritemed.com.ph"
      imageUrl="../assets/images/ritemed.png"
      description="Helping users on their medical needs by improving the site UI/UX design and features to provide smoother user experience."
      link="https://www.ritemed.com.ph/"
      :reverse="true"
      class="mb-10 lg:mb-16"
    >
      <template #stack-icons>
        <IconCodeIgniter />
        <IconPHP />
        <IconBootstrap />
        <IconJQuery />
        <IconSass />
      </template>
    </FeaturedProject>

    <FeaturedProject
      title="Unistar Credit and Finance Corp."
      imageUrl="../assets/images/unistar.png"
      description="Making a loan fast, easy, and convenient."
      class="mb-10 lg:mb-16"
    >
      <template #stack-icons>
        <IconLaravel />
        <IconOctoberCMS />
        <IconBootstrap />
        <IconJQuery />
        <IconCSS />
      </template>
    </FeaturedProject>

    <FeaturedProject
      title="BuhayHW.com"
      imageUrl="../assets/images/buhayhw.png"
      description="Providing information about IV Therapy types and its benefits. Allowing users to book for an appointent with a physician."
      link="https://buhayhw.com/"
      :reverse="true"
      class="mb-10 lg:mb-16"
    >
      <template #stack-icons>
        <IconWordpress />
        <IconCSS />
        <IconSquarespace />
      </template>
    </FeaturedProject>
  </AppSection>

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
      :free-mode="true"
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
    >
      <SwiperSlide>
        <ProjectCard
          title="Trello Clone"
          imageUrl="../assets/images/trello-clone.png"
          description="A trello clone built with VueJs, TailwindCSS, and SaSS."
          link="https://xenodochial-brahmagupta-453531.netlify.app/"
          githubLink="https://github.com/karlmarxmanzano/trello-clone"
          :dark="true"
        >
          <template #stack-icons>
            <IconVue />
            <IconTailwindCSS />
            <IconSass />
          </template>
        </ProjectCard>
      </SwiperSlide>

      <SwiperSlide>
        <ProjectCard
          title="Personal Portfolio"
          imageUrl="../assets/images/portfolio.png"
          description="My Personal Portfolio to showcase my works and skills with Nuxt, TailwindCSS, and mobile-first responsive design."
          link="https://example.com/"
          githubLink="https://github.com/"
          :dark="true"
        >
          <template #:stack-icons>
            <IconNuxt />
            <IconTailwindCSS />
            <IconSass />
          </template>
        </ProjectCard>
      </SwiperSlide>

      <SwiperSlide>
        <ProjectCard
          title="Multi-tenancy Web App"
          description="A simple multi-tenancy web app showcasing on how to handle a single and multiple subdomains and databases."
          link="https://example.com/"
          githubLink="https://github.com/"
          :dark="true"
        >
          <template #stack-icons>
            <IconLaravel />
            <IconTailwindCSS />
            <IconSass />
          </template>
        </ProjectCard>
      </SwiperSlide>

      <SwiperSlide>
        <ProjectCard
          title="CRM"
          description="A basic CRM to manage clients and employees using TALL stack."
          link="https://example.com/"
          githubLink="https://github.com/"
          :dark="true"
        >
          <template #stack-icons>
            <IconTailwindCSS />
            <IconAlpine />
            <IconLaravel />
            <IconLivewire />
          </template>
        </ProjectCard>
      </SwiperSlide>

      <SwiperSlide>
        <ProjectCard
          title="ToDo App"
          description="A Flutter and Firebase app to track personal tasks."
          githubLink="https://github.com/"
          :dark="true"
        >
          <template #stack-icons>
            <IconFlutter />
            <IconFirebase />
          </template>
        </ProjectCard>
      </SwiperSlide>
    </Swiper>
  </AppSection>

  <AppSection
    title="Services"
    description="Let's work together!"
    :cols="2"
    :dark="true"
  >
    <template #content>
      <ServiceCard
        title="Front End Development"
        subtitle="<html/>"
        description="Improving, revamping, or building from scratch your UI/UX design from
          Figma/AdobeXD to a real world application using the latest technology
          such as HTML, JavScript, Vue, Nuxt, or SaSS."
      />

      <ServiceCard
        title="Back End Development"
        subtitle="echo 'Hello World!';"
        description="Building from scratch or optimizating your back-end service to provide
          reliable and faster output. Designing MySQL database to meet standard
          designs."
      />

      <ServiceCard
        title="API Integration and Development"
        subtitle="{...}"
        description="3rd Party API integrations into your existing website or engineering
          your own API service."
      />
    </template>
  </AppSection>
</template>

<style scoped>
.swiper-pagination {
  bottom: 0px;
}
</style>
