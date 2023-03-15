<template>
  <section>
    <h2 class="projects__title">Projets</h2>
    <slot />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
section {
  margin-bottom: 20rem;
}
.projects__title {
  @extend %title-2;
  font-size: 3rem;
  margin-left: calc(100vw / 6);
  margin-right: calc((100vw / 2));
  padding-bottom: 3rem;
}
</style>
