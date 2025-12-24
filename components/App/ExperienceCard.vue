<template>
  <NuxtLink class="flex items-end gap-4 group p-2 -m-2 rounded-lg" :to="exp.url" target="_blank" external>
    <div class="max-w-sm">
      <span class="absolute left-4 top-4 ml-0 h-full" aria-hidden="true"></span>
      <h3 class="text-sm font-medium group-hover:text-primary-600">
        {{ exp.name }}
      </h3>
      <p class="text-gray-400 text-sm">{{ exp.title }}</p>
    </div>
    <div class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"></div>
    <UAvatar :src="exp.thumbnail" class="rounded z-10 relative" size="md" :alt="exp.name" />
  </NuxtLink>
</template>

<script setup>
defineProps({
  exp: {
    type: Object,
    required: true,
  },
});
</script>