<template>
  <div class="mt-10 text-center xl:text-start">
    <TheUiLinkPreview
      :url="`${url.origin}/contact`"
      class="bg-white text-[13px] md:text-xl text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 relative"
    >
      هل أنت مستعد لإطلاق مشروعك التالي؟ دعنا نبدأ!
      <UAvatar
        icon="i-ic-baseline-launch"
        size="xs"
        class="absolute -top-2 -left-1"
      />
    </TheUiLinkPreview>
  </div>
</template>

<script setup>
const url = useRequestURL();
</script>

<style lang="scss" scoped>
</style>