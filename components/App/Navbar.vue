<template>
  <div class="fixed top-0 w-full z-50">
    <nav class="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
      <ul
        class="relative flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-full ring-1 ring-black/10 dark:ring-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg shadow-lg/5 dark:text-gray-200"
      >
        <li v-for="item in items" :key="item.path">
          <UTooltip :text="item.name">
            <ULink
              :to="item.path"
              class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
              active-class="text-primary-600 dark:text-primary-400"
            >
              <UIcon aria-hidden="true" :name="item.icon" class="w-5 h-5 z-10" />
              <span
                v-if="$route.path === item.path"
                class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"
              ></span>
              <span
                v-if="$route.path === item.path"
                class="absolute h-8 w-8 z-0 rounded-full bg-gray-100/70 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></span>
              <span class="sr-only">{{ item.name }}</span>
            </ULink>
          </UTooltip>
        </li>
        <li class="flex-1"></li>
        <li>
          <AppThemeToggle />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const items = [
  { name: "Home", path: "/", icon: "solar:home-smile-outline" },
  {
    name: "Experiencia",
    path: "/experiencia",
    icon: "solar:suitcase-outline",
  }, 
  {
    name: "Educación",
    path: "/educacion",
    icon: "solar:square-academic-cap-outline",
  },
  {
    name: "Proyectos",
    path: "/proyectos",
    icon: "solar:folder-with-files-outline",
  },
  {
    name: "Artículos",
    path: "/articulos",
    icon: "solar:document-add-outline",
  }
];
</script>
