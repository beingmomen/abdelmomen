<template>
  <div class="flex min-h-screen" :dir="useAR()">
    <div class="hidden flex-[0_0_66.6666666667%] lg:flex">
      <div class="m-8 flex-1 me-0 bg-slate-100 rounded-2xl">
        <div class="h-full flex justify-center items-center">
          <div class="max-w-[441px]">
            <img
              class="object-contain"
              :src="`/images/auth/${image}`"
              :alt="image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 lg:flex-[0_0_33.3333333333%]">
      <div
        class="flex min-h-full flex-1 flex-col justify-center items-center py-12 m-auto max-w-[350px]"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <nuxt-icon
            class="text-[5rem] nuxt-icon-auth"
            :name="logo"
          ></nuxt-icon>

          <h2
            class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            {{ page }} <span v-if="text">{{ $t("yourAccount") }}</span>
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6">
            <slot name="inputs" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  page: {
    type: String,
    required: true,
  },
  text: {
    type: Boolean,
    default: true,
  },
});

const router = useRoute();

const runtimeConfig = useRuntimeConfig();

const logo = computed(() => {
  return runtimeConfig.public.logo;
});

// console.warn("router", window.location.origin);
</script>

<style lang="scss">
.nuxt-icon {
  &.nuxt-icon-auth {
    fill: unset !important;
    svg {
      margin: auto;
    }
  }
}
</style>