<template>
  <section class="experience">
    <h2>
      <span>Expériences</span>
      <img src="/images/pen3.svg" alt="" srcset="" />
    </h2>
    <slot />
  </section>
</template>

<style scoped lang="scss">
.experience {
  grid-column: 2 / span 4;
  margin-bottom: 10rem;
}
.experience h2 {
  @extend %title-2;
  font-size: clamp(2rem, 4vw, 5rem);
  grid-column: 2 / span 3;
  margin-bottom: 6rem;
  position: relative;
  display: inline-block;
}

.experience h2 img {
  position: absolute;
  top: -34%;
  left: -10%;
  width: 115%;
  transform: rotate(-3deg);
}
</style>
