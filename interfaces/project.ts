export interface Project {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
  link?: string;
  github?: string;
  techStack: string[];
  featured: boolean;
}
