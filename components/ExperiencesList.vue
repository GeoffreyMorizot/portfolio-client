<template>
  <div class="xp__list">
    <h2>
      <span>Expériences</span>
      <img src="/images/pen3.svg" alt="" srcset="" />
    </h2>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.xp__list h2 {
  @extend %title-2;
  font-size: clamp(2rem, 4vw, 5rem);

  margin-bottom: 6rem;
  position: relative;
  display: inline-block;
}

.xp__list h2 img {
  position: absolute;
  top: -50%;
  left: -10%;
  width: 115%;
  transform: rotate(-3deg);
}
</style>
