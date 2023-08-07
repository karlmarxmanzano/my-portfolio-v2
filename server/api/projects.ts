import * as data from './projects.json';

export default defineEventHandler((event) => {
  return data;
});
