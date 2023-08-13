<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <NuxtErrorBoundary>
        <template #error="{ error }">
          <p>
            Oh no, something went wrong with the lesson!
            <code>{{ error }}</code>
          </p>
          <p>
            <button
              class="px-3 py-1 font-bold text-white bg-gray-500 rounded hover:cursor-pointer"
              @click="resetError(error)"
            >
              Reset
            </button>
          </p>
        </template>
      </NuxtErrorBoundary>
    </NuxtLayout>
  </div>
</template>

<script setup>
const resetError = async (error) => {
  await navigateTo('/');
  error.value = null;
};
</script>
