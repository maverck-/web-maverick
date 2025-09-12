<template>
    <div class="absolute inset-0 pointer-events-none bg-[url('/grid.svg')] bg-center bg-custom-mask opacity-[0.04] dark:opacity-[0.05] dark:filter dark:invert "></div>
</template>

<script setup>
</script>

<style scoped>
  .bg-custom-mask {
    mask-image: radial-gradient(ellipse at center, white, rgba(255, 255, 255, 0.2));
  }
</style>

