<template>
  <p
    id="typed"
    class="font-bold text-5xl sm:text-6xl bg-custom-gradient bg-clip-text main-title mt-6 min-h-[96px] sm:min-h-[100px] text-center xl:text-start py-5"
  >
    <span ref="typedText" class="cursor"></span>
  </p>
</template>

<script setup>
const typedTextSpan = ref(null);
const cursorSpan = ref(null);
const textArray = [
  "عبدالمؤمن الشطوري",
  "Frontend Developer | Nuxt",
  "Abdelmomen Elshatory",
];
const typingDelay = 100; // 100
const erasingDelay = 100; // 100
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