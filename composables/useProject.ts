import { Project } from 'interfaces/project';
import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

interface Data {
  data: Project[] | null;
}

const useProjectStore = defineStore('project', () => {
  const projects = ref<Project[]>({ projects: null as Project });
  const route = useRoute();
  const slug = route.params.slug;
  const test = ref({});

  const getTest = async () => {
    const { data } = await useFetch('/api/projects');
    test.value = data;
  };

  const getProjects = async () => {
    const { data } = await useFetch('/api/projects', {
      transform(data: Project) {
        return data;
      },
    });
    projects.value = data;
  };

  //   const featuredProjects = projects.filter(
  //     (project) => project.featured === true
  //   );

  //   const selectedProject = computed(() => {
  //     return projects.find((project) => {
  //       return project.slug === slug;
  //     });
  //   });

  //   const otherFeaturedProjects = computed(() => {
  //     return projects.filter((project) => {
  //       return project.featured === true && project.slug !== slug;
  //     });
  //   });

  //   const otherProjects = projects.filter(
  //     (project) => project.featured === false
  //   );

  return {
    projects,
    getProjects,
    // featuredProjects,
    // selectedProject,
    // otherFeaturedProjects,
    // otherProjects,
  };
});

export default useProjectStore;
