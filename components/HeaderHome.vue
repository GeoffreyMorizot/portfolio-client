<template>
  <header ref="main" class="header__home">
    <h1>
      <span ref="firstname" class="header-home__firstname">{{
        home.firstname
      }}</span>
      <span ref="name" class="header-home__name">{{ home.lastname }}</span>
    </h1>
    <!-- <p class="header-home__intro">{{ home.bio }}</p> -->
    <p ref="introText" class="header-home__intro">{{ home.bio }}</p>
    <p ref="paragraphTest" class="header-home__intro">
      <span class="intro__line"></span>
    </p>
  </header>
</template>

<script setup lang="ts">
import { Home } from '~~/types'

type HomeProps = Omit<Home, 'createdAt' | 'publishedAt' | 'updatedAt'>

const { $gsap: gsap } = useNuxtApp()
const { spanifyByLine, textElement, testElement } = useSpanifyByLine()

defineProps<{ home: HomeProps }>()

// #region Gsap Animation

const main = ref<HTMLElement>()
const ctx = ref<gsap.Context>()
const tl = gsap.timeline()

const firstname = ref<HTMLElement>()
const name = ref<HTMLElement>()
const introText = ref<HTMLElement>()
const paragraphTest = ref<HTMLElement>()
// #endregion

// #region Lifecycle hooks

onMounted(() => {
  textElement.value = introText.value
  testElement.value = paragraphTest.value
  spanifyByLine()
  ctx.value = gsap.context(() => {
    if (!firstname.value || !name.value || !introText.value) {
      throw new Error('SpanifyText(): missing elements')
    }
    revealAnimationText(tl, firstname.value)
    revealAnimationText(tl, name.value)
    revealAnimationText(tl, introText.value.childNodes, '-=0.3', 'var(--blue)')
  }, main.value)
})

onUnmounted(() => {
  ctx?.value?.revert()
})
// #endregion
</script>

<style lang="scss">
header.header__home {
  @extend %grid-6;
  color: var(--blue);
  padding-top: calc(100vh / 6);
}
.header__home h1 {
  @extend %title-1--big;
  grid-column: 2 / span 4;
  grid-row: 1 / span 1;
  margin-bottom: 2rem;
  font-family: 'Space Grotesk Variable';
  font-weight: 500;
  color: var(--orange);
}
.header-home__firstname,
.header-home__name {
  display: block;
  position: relative;
  width: fit-content;
  color: transparent;
  --scale-x: 0;
  --origin: left;
  &::after {
    @extend %overlay-slide-apparition;
  }
}
.header-home__name {
  margin-left: calc(100vw / 6);
}
.header__home h2 {
  grid-column: 3 / span 3;
  grid-row: 2 / span 1;
  @extend %title-2;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
.header__home .header-home__intro {
  grid-column: 3 / span 3;
  grid-row: 3 / span 1;
  display: flex;
  flex-direction: column;
  @extend %text-body;
  font-size: clamp(1rem, 4vw, 4.5rem);
  font-variation-settings: 'wght' 780;
  line-height: 1.4;
}
.header__home .intro__line {
  position: relative;
  width: fit-content;
  color: transparent;
  --scale-x: 0;
  --origin: left;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--blue);
    transform-origin: var(--origin);
    transform: scaleX(var(--scale-x));
  }
}
</style>
