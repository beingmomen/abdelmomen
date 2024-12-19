<template>
  <div
    class="h-screen bg-slate-900 dark:bg-slate-900 flex justify-center items-center"
  >
    <NuxtLayout>
      <div class="flex flex-col gap-4 justify-center items-center text-center">
        <template v-if="error.statusCode === 404">
          <h1 class="text-7xl font-bold">404!</h1>
          <p class="text-5xl">Sorry, that page doesn't exist.</p>
        </template>
        <template v-else>
          <h1>Dang</h1>
          <p>
            <strong>{{ error.message }}</strong>
          </p>
          <p>It looks like something broke.</p>
          <p>Sorry about that.</p>
        </template>
        <p class="text-4xl">Go back to your</p>
        <UButton
          icon="i-ic-round-send"
          size="xl"
          color="primary"
          variant="solid"
          label="Home"
          @click="handleError"
        />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>