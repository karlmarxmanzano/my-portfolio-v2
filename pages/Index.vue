<template>
  <div>
    <div class="container grid max-w-5xl grid-cols-3 px-6 mx-auto sm:px-0 h-[650px]">
      <div class="flex items-center col-span-2">
        <div class="">
          <p class="mb-6 text-5xl">👋</p>
          
          <h1 class="mb-6 text-6xl font-bold font-primary primary-color">Karl Marx Manzano</h1>
          
          <p class="mb-8 font-medium text-gray-600 break-words font-secondary max-w-[600px]">
            I'm a full stack web developer based in the Philippines with 5 yrs of experience building exceptional digital solutions for companies or individuals. I love to take challenging tasks and am constantly learning on the latest tech trends. 
          </p>
          
          <p class="text-gray-600 font-secondary">
            Let's work together! <br class="block sm:hidden">Download <a href="#" class="px-2 py-1 ml-1 leading-10 transition-all border border-gray-500 border-dashed rounded cursor-pointer text-primary border-primary-light sm:leading-normal hover:bg-primary hover:text-white dark:border-light-light dark:text-light-light dark:hover:bg-light-light dark:hover:text-night-dark">resume</a>
          </p>
        </div>
      </div>
      
      <div class="flex items-center justify-end cols-span-1">
        <img class="border border-[#003C8F] w-full h-auto rounded-2xl shadow-sm" src="~/assets/images/karl.jpg" alt="Karl Marx Manzano">
      </div>
    </div>
    
    <!-- <section class="py-16 bg-gray-50">
      <div class="container max-w-5xl mx-auto">
        <div class="flex flex-col items-start justify-between mb-12 space-y-4 lg:space-y-0 lg:flex-row">
          <div class="basis-3/4">
            <span class="block mb-2 font-semibold uppercase primary-color font-secondary">
              Experience
            </span>
            <h2 class="text-4xl font-bold font-primary">
              Improving by working in a real-world projects
            </h2>
          </div>
        </div>
      </div>
    </section> -->
    
    <SectionCard 
      title="Portfolio" 
      description="Some projects I worked on." 
      :light="false"
    >
      <template v-slot:content>
        <ProjectCard 
          title="Isuzuphil.com"
          image="../assets/images/isuzuphil.png"
          description="This is a test description."
          link="https://example.com/"
          github="https://github.com/"
        >
          <template v-slot:stack-icons>
            <IconLaravel />
            <IconOctoberCMS />
            <IconBootstrap />
            <IconJQuery />
            <IconSass />
          </template>
        </ProjectCard>
        
        <ProjectCard 
          title="Ritemed.com.ph"
          image="../assets/images/ritemed.png"
          description="This is a test description."
          link="https://example.com/"
          github="https://github.com/"
        >
          <template v-slot:stack-icons>
            <IconCodeIgniter />
            <IconPHP />
            <IconBootstrap />
            <IconJQuery />
            <IconSass />
          </template>
        </ProjectCard>
        
        <ProjectCard 
          title="Unistar"
          image="../assets/images/unistar.png"
          description="This is a test description."
          link="https://example.com/"
          github="https://github.com/"
        >
          <template v-slot:stack-icons>
            <IconLaravel />
            <IconOctoberCMS />
            <IconBootstrap />
            <IconJQuery />
            <IconCSS />
          </template>
        </ProjectCard>
        
        <ProjectCard 
          title="BuhayHW.com"
          image="../assets/images/buhayhw.png"
          description="This is a test description."
          link="https://example.com/"
          github="https://github.com/"
        >
          <template v-slot:stack-icons>
            <IconWordpress />
            <IconCSS />
            <IconSquarespace />
          </template>
        </ProjectCard>
      </template>
    </SectionCard>
    
    <SectionCard 
      title="Portfolio" 
      description="Other Significant Projects."
      cols="3"
    >
      <template v-slot:content>
        <ProjectCard
          title="Trello Clone"
          image="../assets/images/trello-clone.png"
          description="This is a test description."
          link="https://xenodochial-brahmagupta-453531.netlify.app/"
          github="https://github.com/karlmarxmanzano/trello-clone"
          :light="false"
        >
          <template v-slot:stack-icons>
            <IconVue />
            <IconTailwindCSS />
            <IconSass />
          </template>
        </ProjectCard>
        
        <ProjectCard
          title="Personal Portfolio"
          description="This is a test description."
          link="https://example.com/"
          github="https://github.com/"
          :light="false"
        >
          <template v-slot:stack-icons>
            <IconNuxt />
            <IconTailwindCSS />
            <IconSass />
          </template>
        </ProjectCard>
        
        <ProjectCard
          title="Multi-tenancy Web App"
          description="This is a test description."
          link="https://example.com/"
          github="https://github.com/"
          :light="false"
        >
          <template v-slot:stack-icons>
            <IconLaravel />
            <IconTailwindCSS />
            <IconSass />
          </template>
        </ProjectCard>
        
        <ProjectCard
          title="Admin"
          description="This is a test description."
          link="https://example.com/"
          github="https://github.com/"
          :light="false"
        >
          <template v-slot:stack-icons>
            <IconTailwindCSS />
            <IconAlpine />
            <IconLaravel />
            <IconLivewire/>
          </template>
        </ProjectCard>
        
        <ProjectCard
          title="Test"
          description="This is a test description."
          link="https://example.com/"
          github="https://github.com/"
          :light="false"
        >
          <template v-slot:stack-icons>
            <IconLaravel />
            <IconOctoberCMS />
            <IconBootstrap />
            <IconJQuery />
            <IconSass />
          </template>
        </ProjectCard>
      </template>
    </SectionCard>
    
    <SectionCard 
      title="About Me" 
      description="A Passionate Full Stack Web Developer."
      cols="1"
      :light="false"
    >
      <template v-slot:content>
        <div>
          Hi, My name is Karl. I have impressive skills in PHP, Laravel, Vue, TailWind, Bootstrap, and ScSS.
          
          I am learning Flutter for mobile development recently to provide more capabality as a front end developer. 
          
          Here is some list of technologies that Ive been working on the past:
        </div>
      </template>
    </SectionCard>
  </div>
</template>