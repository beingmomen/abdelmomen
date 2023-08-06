<template>
  <UCard
    class=""
    :ui="{
      wrapper: 'py-5',
      base: '',
      body: {
        base: 'flex gap-10',
      },
    }"
    v-for="(singleCard, i) in cards"
    :key="i"
  >
    <!-- icon="i-fa6-solid-circle-user" -->
    <UButton
      :icon="singleCard.icon"
      color="white"
      variant="ghost"
      size="xl"
      :ui="{
        base: ' shadow-md px-3.5',
        rounded: 'rounded-full',
        icon: {
          base: 'text-primary-500',
        },
      }"
    />
    <div>
      <p class="font-black text-xl oldstyle-nums text-primary-500">
        {{ singleCard.count }}
      </p>
      <p
        class="font-black text-md oldstyle-nums text-black-500 italic underline decoration-wavy decoration-primary-500"
      >
        {{ singleCard.name }}
      </p>
    </div>
  </UCard>
</template>

<script setup>
const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
</style>