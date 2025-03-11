import { type Project } from '~/interfaces/project';
import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

interface FetchProjectsResponse {
  projects?: Project[] | undefined;
}

const useProjectStore = defineStore('project', () => {
  const route = useRoute();
  const slug = route.params.slug;
  const projects = ref<Project[]>();

  const selectedProject = ref<Project | null | undefined>(null);

  const getProjects = async (): Promise<void> => {
    const { data } = await useFetch<FetchProjectsResponse>('/api/projects');
    projects.value = data.value?.projects;
  };

  const featuredProjects = computed(() => {
    return projects.value?.filter((project) => project.featured === true);
  });

  const getSelectedProject = (slug: string): void => {
    selectedProject.value = projects.value?.find((project) => {
      return project.slug === slug;
    });
  };

  const otherFeaturedProjects = computed(() => {
    return projects.value?.filter((project) => {
      return project.featured === true && project.slug !== slug;
    });
  });

  const otherProjects = computed(() => {
    return projects.value?.filter((project) => project.featured === false);
  });

  return {
    projects,
    getProjects,
    featuredProjects,
    getSelectedProject,
    selectedProject,
    otherFeaturedProjects,
    otherProjects,
  };
});

export default useProjectStore;
