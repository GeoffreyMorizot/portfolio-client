<template>
  <section class="educations">
    <h2>
      <span>Formations</span>
      <img src="/images/pen6.svg" alt="" srcset="" />
    </h2>
    <EducationDetail
      v-for="(education, index) in educations"
      ref="childs"
      :key="index"
      :education="education"
      :class="educationClass"
    />
  </section>
</template>

<script setup lang="ts">
import type { EducationDetail } from '~~/.nuxt/components'
import { Education } from '~~/types'

defineProps<{ educations: Education[] }>()

const educationClass = 'education'

const { observe } = useIntersectionObserver()
const { $gsap: gsap } = useNuxtApp()

const childs = ref<InstanceType<typeof EducationDetail>[] | null>(null) // Get ref of EducationDetail component
const childsEl = ref<Array<HTMLElement>>()

function animationCb() {
  const tl = gsap.timeline()
  return tl
    .to('.education.isIntersecting h4', { opacity: 1 })
    .from('.education.isIntersecting h4', {
      y: '100%',
      duration: 0.4,
      ease: 'Power4.easeOut',
    })
    .from(
      '.education.isIntersecting .education__location-school p',
      {
        y: '100%',
        duration: 0.4,
        ease: 'Power4.easeOut',
      },
      '-=0.05'
    )
    .from(
      '.education.isIntersecting .education__location-date .education__divider',
      {
        transform: 'scaleX(0)',
        duration: 0.4,
        ease: 'Power4.easeOut',
      },
      '-=0.1'
    )
    .from(
      '.education.isIntersecting .education__period',
      { y: '100%', duration: 0.4, ease: 'Power4.easeOut' },
      '-=0.15'
    )
}

onMounted(() => {
  if (childs.value) {
    childsEl.value = childs.value.map((child) => child.$el) // Extract the DOM element from the component EductionDetail
    observe(childsEl, animationCb)
  }
})
</script>

<style lang="scss" scoped>
.educations {
  grid-column: 3 / span 3;
  margin-bottom: 8rem;
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
