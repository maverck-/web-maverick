<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <AppGridBackground />
  <AppNavbar />
  <div class="h-32"></div>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <div class="h-28"></div>
  <AppFooter />
  <UNotifications />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}

/* Ocultar el párrafo para dispositivos móviles */
@media only screen and (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}

/* Línea con animación para hover en links */
.underlines{
  position: relative;
  text-decoration: none;
  display: inline-block;
}

.underlines::before{
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 2px;
  transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

@media (hover: hover) and (pointer: fine) {
  .underlines:hover::before{
    left: 0;
    right: auto;
    width: 100%;
  }
}
</style>
