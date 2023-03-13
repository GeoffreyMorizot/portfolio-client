<template>
  <section>
    <h2 class="projects__title">Projets</h2>
    <slot />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.projects__title {
  position: relative;
  font-family: 'IBMPlexMono SemiBold';
  color: var(--blue);
  font-size: clamp(32px, 3.5vw, 64px);
  letter-spacing: -3px;
  margin-left: calc(100vw / 6);
}
</style>
