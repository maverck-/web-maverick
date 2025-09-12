<template>
  <div class="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40">
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      Experiencia
    </h2>
    <div class="space-y-4">
      <ol class="relative border-l border-gray-200 dark:border-gray-1000">
        <li class="mb-10 ml-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
          </div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Consorcio Science Up</h3>
          <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">Profesional de Armonización Curricular</p>
          <a href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn
            more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg></a>
        </li>
        <li class="mb-10 ml-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
          </div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first
            designed in Figma and we keep a parity between the two versions even as we update the project.</p>
        </li>
        <li class="ml-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
          </div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components
            and interactive elements built on top of Tailwind CSS.</p>
        </li>
      </ol>



      <AppExperienceCard v-for="(exp, id) in experiencia" :key="id" :exp="exp" />
    </div>



    <div class="flex items-stretch justify-between mt-6 text-sm">
      <UButton class="text-gray-700 dark:text-gray-300 dark:bg-gray-800/50 dark:hover:text-gray-50 hover:dark:bg-gray-800" label="Descargar CV"
        icon="i-heroicons-chevron-down" size="lg" to="/proyectos" variant="soft" color="gray" :trailing="true" />
      <UButton label="Ver más &rarr;" to="/proyectos" variant="link" color="gray" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: experiencia } = await useAsyncData("experiencia-home", () =>
  queryContent("/experiencia").limit(3).find()
);
</script>