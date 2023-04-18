<template>
  <header ref="main" class="header__home">
    <h1>
      <span class="header-home__firstname">{{ home.firstname }}</span>
      <span class="header-home__name">{{ home.lastname }}</span>
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

defineProps<{ home: HomeProps }>()

// #region Gsap Animation
const { $gsap: gsap } = useNuxtApp()

const main = ref<HTMLElement>()
const ctx = ref<gsap.Context>()
const tl = gsap.timeline()
const slideAppear = {
  durationIn: 0.5,
  durationOut: 0.3,
  ease: 'Power2.easeOut',
}

const introText = ref<HTMLElement>()
const paragraphTest = ref<HTMLElement>()

function spanifyText() {
  if (!introText || !introText.value || !introText.value.textContent) {
    throw new Error('No intro text')
  }
  const maxWidth = introText.value.offsetWidth
  const words = introText.value.textContent.split(' ')
  let currentLine = ''
  introText.value.textContent = ''

  words.forEach((word, index) => {
    const testLine =
      (currentLine === ''
        ? ''
        : currentLine + (currentLine.endsWith(' ') ? '' : ' ')) + word
    const testWidth = getTextWidth(testLine)

    if (testWidth <= maxWidth) {
      if (currentLine !== '') {
        currentLine += currentLine.endsWith(' ') ? '' : ' '
      }
      currentLine += word
    } else {
      const span = document.createElement('span')
      span.className = 'intro__line'
      span.textContent = currentLine
      if (!introText.value) {
        throw new Error('No intro text')
      }
      introText.value.appendChild(span)
      currentLine = word
    }
    if (index === words.length - 1 && introText.value) {
      const lastSpan = document.createElement('span')
      lastSpan.className = 'intro__line'
      lastSpan.textContent = currentLine
      introText.value.appendChild(lastSpan)
    }
  })
}

function getTextWidth(text: string) {
  if (!paragraphTest || !paragraphTest.value) {
    throw new Error('No paragraph test')
  }
  paragraphTest.value.style.visibility = 'hidden'
  paragraphTest.value.style.whiteSpace = 'nowrap'
  paragraphTest.value.style.position = 'absolute'
  paragraphTest.value.style.top = '-9999px'
  paragraphTest.value.textContent = text
  const width = paragraphTest.value.offsetWidth
  paragraphTest.value.textContent = ''
  return width
}
// #endregion

onMounted(() => {
  spanifyText()
  ctx.value = gsap.context(() => {
    tl.to('.header-home__firstname', {
      '--scale-x': 1,
      delay: 0.6,
      duration: slideAppear.durationIn,
    })
      .to('.header-home__firstname', {
        '--origin': 'right',
        color: 'var(--orange)',
      })
      .to('.header-home__firstname', {
        '--scale-x': 0,
        duration: slideAppear.durationOut,
      })
      .to(
        '.header-home__name',
        {
          '--scale-x': 1,
          duration: slideAppear.durationIn,
        },
        '-=0.5'
      )
      .to('.header-home__name', {
        '--origin': 'right',
        color: 'var(--orange)',
      })
      .to('.header-home__name', {
        '--scale-x': 0,
        duration: slideAppear.durationOut,
      })
      .to(
        '.intro__line',
        {
          '--scale-x': 1,
          duration: slideAppear.durationIn,
          stagger: 0.2,
        },
        '-=0.6'
      )
      .to('.intro__line', {
        '--origin': 'right',
        duration: 0,
        color: 'var(--blue)',
      })
      .to('.intro__line', {
        '--scale-x': 0,
        duration: slideAppear.durationOut,
        stagger: 0.2,
      })
  }, main.value)
})

onUnmounted(() => {
  ctx?.value?.revert()
})
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
    transform-origin: var(--origin);
    transform: scaleX(var(--scale-x));
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
.intro__line {
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
