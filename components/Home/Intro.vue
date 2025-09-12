<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.jpg" alt="Maverick Gayoso"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-24 w-24 sm:h-24 sm:w-24"
      sizes="200px sm:200px" placeholder format="webp" />
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Maverick Gayoso
    </h1>
    <p class="text-gray-700 dark:text-gray-400">
      Hola! Soy un profesor, diseñador y desarrollador amante del deporte, la ingeniería y construir cosas.
    </p>
    <p class="text-gray-700 dark:text-gray-400">
      Trabajo impulsando la innovación y el emprendimiento en <a
        href="https://www.scienceup.cl/" target="_blank"
        class="font-medium underlines before:bg-blue-500 dark:before:bg-blue-400"> Science Up </a>, y dirijo a <a
        href="https://www.samso.cl/" target="_blank"
        class=" font-medium underlines before:bg-blue-500 dark:before:bg-blue-400">
        Samso</a> en busca de un mundo más activo y sustentable.
    </p>
    <br>
    <div class="flex items-center space-x-5">
      <a v-for="link in links" :key="link.icon" :href="link.url" target="_blank"
        class="group flex items-center text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
        <Icon :name="link.icon" class="w-6 h-6" />
      </a>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Maverick Gayoso",
  description:
    "Hola! Soy un profesor, diseñador y desarrollador amante del deporte, la ingeniería y construir cosas.",
});

const links = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/maverck/",
    icon: "mdi:linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/maverck_/",
    icon: "mdi:instagram",
  }, 
  {
    name: "GitHub",
    url: "https://github.com/maverck-",
    icon: "mdi:github",
  }, 
  {
    name: "Behance",
    url: "https://www.behance.net/maverck",
    icon: "mdi:behance",
  }
];
</script>


