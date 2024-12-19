<template>
  <div dir="rtl" class="dark:bg-gray-900 bg-gray-900">
    <NuxtLoadingIndicator />
    <VitePwaManifest />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>

<script setup >
useSeoMeta({
  title: "الموقع الرسمي لمهندس البرمجيات عبدالمؤمن الشطوري | Abdelmomen Elshatory",
  ogTitle: "عبدالمؤمن الشطوري (Elshatory) | مطور واجهات أمامية Vue.js و Nuxt.js",
  description: "الموقع الرسمي للمهندس عبدالمؤمن الشطوري - مطور واجهات أمامية متخصص في Vue.js و Nuxt.js. خبرة في تطوير تطبيقات ويب تفاعلية عالية الأداء | Official website of Abdelmomen Elshatory - Frontend Developer",
  ogDescription: "عبدالمؤمن الشطوري - مطور واجهات أمامية متخصص في تطوير تطبيقات ويب عالية الأداء باستخدام Vue.js و Nuxt.js. تحويل الأفكار إلى تجارب ويب تفاعلية ومبتكرة",
  ogImage: "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/fdr33lrypqxafnvpu1ql.jpg",
  ogUrl: "https://beingmomen.com",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "عبدالمؤمن الشطوري (Elshatory) | Frontend Developer",
  twitterDescription: "مطور واجهات أمامية متخصص في Vue.js و Nuxt.js - تطوير تطبيقات ويب تفاعلية وعالية الأداء",
  twitterImage: "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/fdr33lrypqxafnvpu1ql.jpg",
  twitterSite: "@beingmomen",
  keywords: "عبدالمؤمن الشطوري, beingmomen, الشطورى, Elshatory, Abdelmomen Elshatory, مطور واجهات أمامية, Vue.js, Nuxt.js, تطوير ويب, مبرمج, frontend developer",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Abdelmomen Elshatory",
        alternateName: [
          "عبدالمؤمن الشطوري",
          "beingmomen",
          "الشطورى",
          "Elshatory"
        ],
        jobTitle: "Frontend Developer",
        description: "Frontend Developer specializing in Vue.js and Nuxt.js",
        url: "https://beingmomen.com",
        sameAs: [
          "https://github.com/beingmomen",
          "https://linkedin.com/in/beingmomen"
        ]
      })
    }
  ]
});
</script>
