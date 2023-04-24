<template>
  <section class="experience">
    <h2>
      <span>Expériences</span>
      <img src="/images/pen3.svg" alt="" srcset="" />
    </h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
const { observe } = useIntersectionObserver()
const element = ref<NodeListOf<Element>>()
const { $gsap: gsap } = useNuxtApp()

function animationCb() {
  const tl = gsap.timeline()
  return tl
    .to('.xp.isIntersecting', {
      opacity: 1,
      duration: 0,
    })
    .to('.xp.isIntersecting', {
      '--scale-x': 1,
      duration: 0.4,
      ease: 'Power3.easeOut',
    })
    .from(
      '.xp.isIntersecting .xp__dates',
      {
        y: '100%',
        duration: 0.4,
        ease: 'Power3.easeOut',
      },
      '-=0.1'
    )
    .from(
      '.xp.isIntersecting .xp__title',
      {
        y: '100%',
        duration: 0.4,
        ease: 'Power3.easeOut',
      },
      '-=0.1'
    )
    .from(
      '.xp.isIntersecting .xp__subtitle',
      {
        y: '100%',
        duration: 0.4,
        ease: 'Power3.easeOut',
      },

      '-=0.15'
    )
    .from(
      '.xp.isIntersecting .xp__icon',
      {
        opacity: 0,
        duration: 0.4,
        ease: 'Power3.easeOut',
      },
      '-=0.15'
    )
}

onMounted(() => {
  element.value = document.querySelectorAll('.xp')
  observe(element, animationCb)
})

onBeforeUnmount(() => {
  animationCb().revert()
})
</script>

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
