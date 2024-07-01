import Repository from '@/api';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api: Repository(),
    },
  };
});