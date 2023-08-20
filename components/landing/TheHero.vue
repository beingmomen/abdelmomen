<template>
  <div class="flex lg:container xl:container mx-auto px-12 md:px-32 h-[40rem]">
    <div class="min-h-full pt-32">
      <h3 class="text-gray-400 font-black text-lg">Hello everyone!</h3>
      <p class="font-black text-6xl bg-custom-gradient bg-clip-text mt-6">
        I’m
      </p>
      <p
        id="typed"
        class="font-black text-5xl sm:text-6xl bg-custom-gradient bg-clip-text main-title mt-6 min-h-[96px] sm:min-h-[60px]"
      >
        <span ref="typedText" class="cursor"></span>
      </p>

      <p
        class="text-gray-400 font-black text-lg sm:w-[450px] mt-6 min-w-[301.5px]"
      >
        A passionate frontend developer specializing in
        <UBadge
          color="red"
          variant="solid"
          label="Vue 3"
          :ui="{ font: 'font-black' }"
        />
        and
        <UBadge
          color="red"
          variant="solid"
          label="Nuxt 3"
          :ui="{ font: 'font-black' }"
        />
        . With a blend of creativity and cutting-edge technology, I transform
        ideas into intuitive and immersive web experiences.
      </p>

      <div class="mt-10 flex gap-4">
        <NuxtLink to="https://www.linkedin.com/in/beingmomen/" target="_blank">
          <nuxt-icon
            class="text-[2rem] cursor-pointer shadow-lg"
            name="linkedin"
          ></nuxt-icon>
        </NuxtLink>
        <NuxtLink to="https://github.com/beingmomen" target="_blank">
          <nuxt-icon
            class="text-[2rem] cursor-pointer shadow-lg"
            name="github"
          ></nuxt-icon>
        </NuxtLink>
        <!-- <UButton
          icon="i-devicon-linkedin"
          size="xl"
          color="primary"
          square
          variant="link"
          to="https://www.linkedin.com/company/nanosoft-ly/"
          target="_blank"
          :ui="{
            base: 'text-6xl',
            icon: 'text-6xl',
          }"
        /> -->
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
const typedTextSpan = ref(null);
const cursorSpan = ref(null);
const textArray = ["Abdelmo’men Elshatory", "Frontend Developer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.value.classList.contains("typing"))
      cursorSpan.value.classList.add("typing");
    typedTextSpan.value.textContent +=
      textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.value.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.value.classList.contains("typing"))
      cursorSpan.value.classList.add("typing");
    typedTextSpan.value.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.value.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

onMounted(() => {
  typedTextSpan.value = document.getElementById("typed");
  cursorSpan.value = document.querySelector(".cursor");
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
</script>

<style lang="scss" scoped>
.cursor::after {
  content: "|";
  display: inline;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
