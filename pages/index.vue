<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <HomeIntro />
      <HomeFeaturedExperience />
      <HomeFeaturedProjects />
      <HomeFeaturedArticles />
      <HomeContact/>
    </div>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Maverick Gayoso",
  description:
    "Hola! Soy un profesor, diseñador y desarrollador amante del deporte, la ingeniería y construir cosas.",
  ogTitle: 'Maverick Gayoso',
  ogDescription: 'Hola! Soy un profesor, diseñador y desarrollador amante del deporte, la ingeniería y construir cosas.',
  ogImage: 'https://maverickgayoso.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2d126f13-f8fd-4b49-ad16-8447290e2455%2FMaverick_-_Profile_Pic_280.png?table=block&id=6a8c4678-c652-4b41-95c8-a8fa3865abd3&spaceId=207a6ba8-e557-48f9-a777-3af73694b495&width=250&userId=&cache=v2',
  ogUrl: 'maverickgayoso.com',
  twitterTitle: 'Maverick Gayoso',
  twitterDescription: 'Hola! Soy un profesor, diseñador y desarrollador amante del deporte, la ingeniería y construir cosas.',
  twitterImage: 'https://maverickgayoso.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2d126f13-f8fd-4b49-ad16-8447290e2455%2FMaverick_-_Profile_Pic_280.png?table=block&id=6a8c4678-c652-4b41-95c8-a8fa3865abd3&spaceId=207a6ba8-e557-48f9-a777-3af73694b495&width=250&userId=&cache=v2',
  twitterCard: 'Hola! Soy un profesor, diseñador y desarrollador amante del deporte, la ingeniería y construir cosas.',
});

useHead({
  htmlAttrs: {
    lang: 'es'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'https://maverickgayoso.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2d126f13-f8fd-4b49-ad16-8447290e2455%2FMaverick_-_Profile_Pic_280.png?table=block&id=6a8c4678-c652-4b41-95c8-a8fa3865abd3&spaceId=207a6ba8-e557-48f9-a777-3af73694b495&width=250&userId=&cache=v2'
    }
  ]
})
</script>
