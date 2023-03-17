<template>
  <section class="educations">
    <h2>
      <span>Formations</span>
      <img src="/images/pen6.svg" alt="" srcset="" />
    </h2>
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.educations {
  grid-column: 3 / span 3;
}

.educations h2 {
  @extend %title-2;
  position: relative;
  display: inline-block;
  margin-bottom: 3rem;
}

.educations h2 img {
  position: absolute;
  right: -3%;
  top: -20%;

  width: 100%;
  transform: rotate(deg);
}
</style>
