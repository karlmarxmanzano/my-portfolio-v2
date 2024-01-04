<script setup>
const props = defineProps({
  error: Object,
});

const handleError = async () => {
  clearError();
};
</script>

<template>
  <NuxtLayout name="full">
    <main
      class="flex flex-col items-center justify-center h-full px-6 py-24 sm:py-32 lg:px-8"
    >
      <div class="text-center">
        <div v-if="error.statusCode === 404">
          <h1 class="block text-4xl font-semibold font-primary">404</h1>
          <p
            class="block mt-4 text-3xl font-semibold tracking-tight sm:text-5xl font-secondary"
          >
            I guess that page doesn't exist.
          </p>
          <p class="block mt-6 text-base leading-7 font-secondary">
            <strong>
              {{ error.message }}
            </strong>
          </p>
        </div>

        <div v-else>
          <h1 class="block text-4xl font-semibold font-primary">
            {{ error }}
          </h1>
          <p
            class="block mt-4 text-3xl font-bold tracking-tight sm:text-5xl font-secondary"
          >
            I guess that page doesn't exist.
          </p>
          <p class="mt-12 text-base leading-7 font-secondaryblock">
            <strong>
              {{ error.message }}
            </strong>
          </p>
        </div>

        <!-- <ButtonOutline
          class="block md:max-w-fit md:mx-auto mt-10"
          @click="handleError"
        >
          Go Back to Home
        </ButtonOutline> -->
      </div>
    </main>
  </NuxtLayout>
</template>
