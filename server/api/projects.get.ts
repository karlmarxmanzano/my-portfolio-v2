import * as projects from './projects.json';

export default defineEventHandler((event) => {
  return projects;
});
