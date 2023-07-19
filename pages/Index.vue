<template>
  <div>
    <div class="flex flex-col justify-center px-6 mx-auto sm:px-0 sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <div class="relative flex flex-col justify-center min-h-screen">
        <div class="mb-4 text-4xl lg:text-5xl">👋</div>

        <h1 class="mb-8 text-5xl font-bold sm:text-6xl lg:text-7xl dark:text-blue-100">I can make your ideas real in <br class="block sm:hidden"> <span class="text-primary dark:text-accent">the web!</span></h1>

        <p class="mb-8 text-sm sm:text-base text-light md:w-6/12 text-break dark:text-light-light">
          I'm a web developer based in Philippines Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <call-to-action :is-rounded="true" class="self-start ">Get in touch</call-to-action>


      </div>
    </div>

    <app-section class="space-y-10 md:space-y-16" title="Featured Projects">
      <featured-project></featured-project>
      <featured-project :reverse="true"></featured-project>
    </app-section>

    <app-section title="About Me">
      <div class="grid grid-flow-row md:grid-flow-col lg:grid-cols-2 gap-x-16">
        <div class="mt-4 mb-6 sm:mb-5 lg:mb-0">
          <img src="~/assets/images/img-placeholder.jpg" alt="" style="box-shadow: -10px -10px 0 #E3B341;">
        </div>

        <div class="flex flex-col justify-center space-y-4 text-sm text-night-dark dark:text-light-light">
          <p>Hi! I am Karl, a web developer based in the Philippines. Mabuhay!</p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, sed porro, culpa delectus fugiat eveniet harum totam obcaecati eligendi magnam, provident quod sunt repellendus aut consectetur aliquam dolorem ad dolores.</p>

          <p>Let's work together! <br class="block sm:hidden">Download <a href="#" class="px-2 py-1 ml-1 leading-10 transition-all border border-dashed rounded cursor-pointer text-primary border-primary-light sm:leading-normal hover:bg-primary hover:text-white dark:border-light-light dark:text-light-light dark:hover:bg-light-light dark:hover:text-night-dark">resume</a></p>
        </div>
      </div>
    </app-section>

    <app-section title="Other Significant Projects">
      <!-- <div class="grid grid-flow-row gap-3 md:grid-flow-col md:grid-cols-2 lg:grid-cols-3"> -->
      <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <div class="col-span-1" v-for="index in 6" :key="index">
          <project-card></project-card>
        </div>
      </div>
    </app-section>
  </div>
</template>