<template>
  <div>
    <div class="">
      <div class="container grid max-w-5xl grid-cols-3 px-6 mx-auto sm:px-0 h-[800px]">
        <div class="flex items-center col-span-2">
          <div class="">
            <p class="mb-6 text-5xl">👋</p>
            
            <h1 class="mb-6 text-6xl font-bold font-primary primary-color">Karl Marx Manzano</h1>
            
            <p class="mb-8 font-medium text-gray-600 break-words font-secondary max-w-[600px]">
              I'm a full stack web developer based in the Philippines with almost 5 yrs of experience building exceptional digital solutions for companies or individuals. I love to take challenging tasks and am constantly learning on the latest tech trends. 
            </p>
            
            <p class="text-gray-600 font-secondary">
              Let's work together! <br class="block sm:hidden">Download <a href="#" class="px-2 py-1 ml-1 leading-10 transition-all border border-gray-500 border-dashed rounded cursor-pointer text-primary border-primary-light sm:leading-normal hover:bg-primary hover:text-white dark:border-light-light dark:text-light-light dark:hover:bg-light-light dark:hover:text-night-dark">resume</a>
            </p>
          </div>
        </div>
        
        <div class="flex items-center justify-end cols-span-1">
          <img class="border border-[#003C8F] w-full h-auto" src="~/assets/images/karl.jpg" alt="Karl Marx Manzano">
        </div>
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

<style>
  .img {
    animation: morph 8s ease-in-out infinite;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid #2d2e32;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    height: 35rem;
    position: relative;
    transition: all 1s ease-in-out;
    width: 35rem;
  }
</style>