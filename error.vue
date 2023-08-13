<script setup>
const error = useError();
// const name = 'full';

const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>

<template>
  <NuxtLayout name="full">
    <main
      class="flex flex-col items-center justify-center h-full px-6 py-24 sm:py-32 lg:px-8"
    >
      <div class="text-center">
        <div v-if="error.statusCode === 404">
          <h1 class="text-4xl font-semibold text-white font-primary">404</h1>
          <p
            class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl font-secondary"
          >
            I guess that page doesn't exist.
          </p>
          <p class="mt-6 text-base leading-7 text-gray-600 font-secondary">
            <strong>
              {{ error.message }}
            </strong>
          </p>
        </div>

        <div v-else>
          <h1 class="text-4xl font-semibold text-white font-primary">
            {{ error }}
          </h1>
          <p
            class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-secondary"
          >
            I guess that page doesn't exist.
          </p>
          <p class="mt-6 text-base leading-7 text-gray-600 font-secondary">
            <strong>
              {{ error.message }}
            </strong>
          </p>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>
