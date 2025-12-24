<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      Proyectos
    </h2>
    <div class="space-y-4">
      <AppProjectCard v-for="(project, id) in projects" :key="id" :project="project" />
    </div>
    <div class="flex items-stretch justify-between mt-6 text-sm">
      <UButton label="Portafolio" icon="i-heroicons-folder-open" size="md" to="/proyectos" variant="link"
        :trailing="true" color="neutral" />
      <UButton label="Ver más &rarr;" to="/proyectos" variant="link" color="neutral" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: projects } = await useAsyncData("projects-home", () =>
  queryCollection('proyectos').limit(3).all()
);
</script>
