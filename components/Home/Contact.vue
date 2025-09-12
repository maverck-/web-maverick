<template>
  <div>
    <div class="mb-6 flex items-center gap-3">
      <div class="relative flex justify-center items-center h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500/60"></span>
        <span class="rounded-full h-1.5 w-1.5 bg-green-500"></span>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">
        Contacto
      </h2>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Tienes algún proyecto en mente, una pregunta o solo quieres saludar. Escríbeme, y te responderé lo antes posible.
    </p>
    <div class="flex items-center gap-3 mt-6 ">
      <UButton size="lg" class="select-none text-gray-600 disabled:pointer-events-none" label="maverick.gayoso@gmail.com" color="white" 
      @click="toast.add({ title: 'Correo copiado', icon: 'i-heroicons-check-circle', color: 'green', timeout: 1500})"
      >
        <!-- <template #trailing>
          <span class="border-s dark:border-gray-700 inline-block h-5"></span>
          <UIcon name="i-heroicons-clipboard-document" class="w-5 h-5" />
        </template> -->
      </UButton>

      <UButton icon="i-heroicons-envelope" size="lg" color="black" variant="solid" :trailing="false"
      to="mailto:maverick.gayoso@gmail.com" target="_blank">
        <span class="desktop-only">Hablemos</span> &rarr;
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const toast = useToast()
</script>