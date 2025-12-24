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
    
    <!-- Email Copy Box + Hablemos Button -->
    <div class="mt-6 flex items-center gap-3">
      <!-- Email Copy Box -->
      <div 
        class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 cursor-pointer transition-colors"
        :class="{ 'border-green-500/70 bg-green-50 dark:border-green-500/60 dark:bg-green-500/10': copied }"
        @click="copyEmail"
      >
        <code class="text-sm text-gray-600 dark:text-gray-400">{{ email }}</code>
        
        <UTooltip text="Copiar">
          <button 
            type="button"
            class="p-1 rounded cursor-pointer transition-colors"
            :class="copied ? 'text-green-500' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'"
          >
            <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
        </UTooltip>
      </div>

      <!-- Hablemos Button -->
      <a 
        href="mailto:maverick.gayoso@gmail.com"
        class="group inline-flex items-center gap-2 sm:hover:gap-3.5 px-3 sm:px-4 py-2.5 rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium transition-[color,background-color,box-shadow,gap] duration-200 ease-out hover:shadow-md"
      >
        <UIcon name="i-heroicons-envelope" class="w-4 h-4 sm:hidden" />
        <span class="hidden sm:inline">Hablemos</span>
        <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const email = 'maverick.gayoso@gmail.com'
  const copied = ref(false)

  function copyEmail() {
    navigator.clipboard.writeText(email)
    copied.value = true
    
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
</script>