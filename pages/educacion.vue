<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Educación" :description="description" />
  </main>
</template>

<script setup>
const description =
  "Estoy bien educado";
useSeoMeta({
  title: "Educación | Maverick Gayoso",
  description,
});

const { data: experiencia } = await useAsyncData("experiencia-all", () =>
  queryCollection('experiencia').all()
);
</script>