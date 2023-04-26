<template>
  <section class="skillList">
    <h2>
      <span>Compétences</span>
    </h2>
    <div class="skills">
      <SkillDetail v-for="skill in skills" :key="skill.id" :skill="skill" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Strapi4ResponseData } from '@nuxtjs/strapi/dist/runtime/types'
import { Skill } from '~~/types'

defineProps<{ skills: Omit<Strapi4ResponseData<Skill>[], 'meta'> }>()
const { observe, options } = useIntersectionObserver()
const skillsEl = ref<HTMLElement>()
const { $gsap: gsap } = useNuxtApp()

options.value = {
  threshold: 0.3,
}

function animationCb() {
  if (!skillsEl.value) throw new Error('SkillList: No skillsEl')
  const tl = gsap.timeline()
  const duration = 0.9
  return tl
    .to(skillsEl.value.children, {
      y: 10,
      duration,
      stagger: duration / skillsEl.value.children.length,
      opacity: 1,
      ease: 'power4.out',
    })
    .to(
      skillsEl.value.querySelectorAll('li'),
      { x: -5, stagger: 0.1, opacity: 1 },
      '-=1.4'
    )
}

onMounted(() => {
  skillsEl.value = document.querySelector('.skills') as HTMLElement
  gsap.set(skillsEl.value.children, { opacity: 0 })
  gsap.set('.subskill li', { opacity: 0 })
  observe(skillsEl, animationCb)
})
</script>

<style scoped lang="scss">
.skillList {
  grid-column: 2 / span 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.skillList h2 {
  @extend %title-2;
  grid-column: 1 / -1;
  margin-bottom: 3.5rem;
}

.skills {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1 / -1;
}
</style>
