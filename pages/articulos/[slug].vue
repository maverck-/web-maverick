<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <article v-if="article">
        <h1>{{ article.title }}</h1>
        <ContentRenderer :value="article" />
      </article>
    </div>
  </main>
</template>
<script setup>
const route = useRoute();
const { slug } = route.params;

const { data: article } = await useAsyncData(`article-${slug}`, () =>
  queryCollection('articulos').where('stem', 'LIKE', `%${slug}`).first()
);

useSeoMeta({
  title: () => article.value?.title || 'Artículo',
  ogImage: `https://fayazahmed.com/articles/${slug}.png`,
  twitterCard: "summary_large_image",
  articleAuthor: "Maverick Gayoso",
});
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
