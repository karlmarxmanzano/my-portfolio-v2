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
    
    <SectionCard 
      title="Portfolio" 
      description="Some projects I worked on." 
      :light="false"
    >
      <template v-slot:content>
        <ProjectCard 
          title="Isuzuphil.com.ph"
          image="../assets/images/isuzuphil.png"
          description="Revamping their old site into a more modern design and implementing new features to make potential buyers updated, provide online support, and a virtual showroom."
          link="https://www.isuzuphil.com/"
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
          description="Helping users on their medical needs by improving the site UI/UX design and features to provide smoother user experience."
          link="https://www.ritemed.com.ph/"
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
          title="Unistar Credit and Finance Corp."
          image="../assets/images/unistar.png"
          description="Making a loan fast, easy, and convenient."
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
          description="Providing information about IV Therapy types and its benefits. Allowing users to book for an appointent with a physician."
          link="https://buhayhw.com/"
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
      :cols=3
    >
      <template v-slot:content>
        <ProjectCard
          title="Trello Clone"
          image="../assets/images/trello-clone.png"
          description="A trello clone built with VueJs, TailwindCSS, and SaSS."
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
          image="../assets/images/portfolio.png"
          description="My Personal Portfolio to showcase my works and skills with Nuxt, TailwindCSS, and mobile-first responsive design."
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
          description="A simple multi-tenancy web app showcasing on how to handle a single and multiple subdomains and databases."
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
          title="CRM"
          description="A basic CRM to manage clients and employees using TALL stack."
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
          title="ToDo App"
          description="A Flutter and Firebase app to track personal tasks."
          github="https://github.com/"
          :light="false"
        >
          <template v-slot:stack-icons>
            <IconFlutter />
            <IconFirebase />
          </template>
        </ProjectCard>
      </template>
    </SectionCard>
    
    <SectionCard 
      title="Services" 
      description="Let's work together!"
      :cols=3
      :light="false"
    >
      <template v-slot:content>
        <ProjectCard
          title="Front-end Development"
          description="Improving, revamping, or building from scratch your UI/UX design from Figma/AdobeXD to a real world application using the latest technology such as HTML, JavScript, Vue, Nuxt, or SaSS."
        >
        </ProjectCard>
        
        <ProjectCard
          title="Back-end Development"
          description="Building from scratch or optimizating your back-end service to provide reliable and faster output. Designing MySQL database to meet standard designs."
        >
        </ProjectCard>
        
        <ProjectCard
          title="API Integration and Development"
          description="3rd Party API integrations into your existing website or engineering your own API service."
        >
        </ProjectCard>
      </template>
    </SectionCard>
    
    <SectionCard 
      title="About Me" 
      description="A Passionate Full Stack Web Developer."
      :cols=1
      :light="false"
    >
      <template v-slot:content>
        <div class="flex flex-col gap-y-6">
          <p class="text-gray-500 font-secondary">
            Hi, My name is <span class="font-bold font-primary primary-color">Karl</span>. I do web development, maintenance, optimization, and API integrations providing top-notch digital solutions using latest technology such as Laravel and VueJs/Nuxt.
            I am very curios and am constantly learning on the latest technologies. Currently, I am working as a freelancer to explore different tech stacks and learn from other environments.
          </p>
          
          <p class="text-gray-500 font-secondary">I am based in La Union, Philippines but work with clients around the globe romotely.</p>
          
          <p class="text-gray-500 font-secondary">Here is some list of technologies that Ive been working recently:</p>
          <ul class="text-gray-500 font-secondary">
            <li>Laravel</li>
            <li>VueJs</li>
            <li>Nuxt</li>
            <li>TailwindCSS</li>
            <li>Bootstrap</li>
            <li>Flutter</li>
          </ul>
        </div>
      </template>
    </SectionCard>
  </div>
</template>