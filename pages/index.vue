<template>
  <div>
    <div v-if="home" class="header__wrapper">
      <HeaderHome :home="home.data.attributes" />
    </div>
    <ProjectsList>
      <ProjectCard
        v-for="project in projects?.data"
        :key="project.id"
        :project="project.attributes"
      />
    </ProjectsList>
  </div>
</template>

<script setup lang="ts">
import { Home, Project } from '~~/types'

const { find, findOne } = useStrapi()

const { data: projects } = await useAsyncData('projects', () =>
  find<Project>('projects', {
    populate: 'cover',
  })
)

const { data: home } = await useAsyncData('home', () => findOne<Home>('home'))

// Card Intersection Observer Callback

const { $gsap: gsap } = useNuxtApp()
const tl = gsap.timeline()
const animationCb = () => {
  // 1.Overlay slides to the right - position 0
  // 2.Image appears behind the overlay
  // 3.Overlay slides to the right - position +100%
  // 4.Title appears
  tl.to('.card.isIntersecting .card__img', {
    '--x-pos': '0',
    duration: 0.75,
  })
    .to('.card.isIntersecting .card__img img', {
      opacity: 1,
      duration: 0,
    })
    .to('.card.isIntersecting .card__img', {
      duration: 0,
    })
    .to('.card.isIntersecting .card__img', {
      '--x-pos': '100%',
      duration: 0.55,
      onComplete: () => {
        gsap.set('.card.isIntersecting .card__img', {
          '--x-pos': '-100%',
        })
      },
    })
    .to(
      '.card.isIntersecting .card__title',
      {
        '--scale-bg-text': 1,
        transform: 'scale(1)',
        duration: 0.8,
        opacity: 1,
        ease: 'Power3.easeOut',
      },
      '-=0.25'
    )
}

// Intersection Observer

const cards = ref<NodeListOf<Element> | null>(null)

onMounted(() => {
  cards.value = document.querySelectorAll('.card')
  const observerOptions = {
    root: null,
    threshold: 0,
  }
  cards.value.forEach((card) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('isIntersecting')
          animationCb()
          entry.target.classList.remove('isIntersecting')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Start observing the element
    observer.observe(card)
  })
})
</script>

<style lang="scss" scoped>
h2 {
  font-family: 'Space Grotesk Variable';
  color: var(--blue);
  font-size: clamp(32px, 3.5vw, 64px);
  letter-spacing: -3px;
  margin-left: calc(100vw / 6);
}

.header__wrapper {
  min-height: 100vh;
}
</style>
