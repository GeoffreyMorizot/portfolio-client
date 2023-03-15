<template>
  <section>
    <h2 class="projects__title">
      <span>Projets</span>
      <img src="/images/pen4.svg" alt="" srcset="" />
    </h2>
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
  position: relative;
  display: inline-block;
  margin-left: calc(100% / 6);
  margin-right: calc((100% / 2));
  margin-bottom: 5rem;
}

.projects__title img {
  position: absolute;
  margin-top: 10px;
  transform: rotate(-5deg) scale(1.3);
}
</style>
