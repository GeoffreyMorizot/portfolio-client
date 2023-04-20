<template>
  <div class="about">
    <div v-if="error">{{ error.message }}</div>
    <div v-if="pending">Chargement</div>

    <header v-if="!error && !pending" ref="header" class="about__header">
      <h1 ref="title">{{ about?.data.attributes.pageTitle }}</h1>
      <p>{{ about?.data.attributes.headerText }}</p>
      <div class="header__img_wrapper">
        <div ref="image" class="header__img">
          <ImageSrcSet
            v-if="about?.data.attributes.imageProfil.data"
            :sizes="`${(100 / 12) * 5}vw`"
            :image="about?.data.attributes.imageProfil.data"
          />
        </div>
      </div>
    </header>
    <main v-if="!error && !pending">
      <ExperiencesList>
        <ExperienceDetail
          v-for="experience in about?.data.attributes.experiences"
          :key="experience.id"
          :experience="experience"
        />
      </ExperiencesList>
      <EducationList>
        <EducationDetail
          v-for="education in about?.data.attributes.educations"
          :key="education.id"
          :education="education"
        />
      </EducationList>
      <SkillList>
        <SkillDetail
          v-for="skill in about?.data.attributes.skills.data"
          :key="skill.id"
          :skill="skill"
        />
      </SkillList>
    </main>
  </div>
</template>

<script setup lang="ts">
import { About } from '@/types/index'

// #region Fetch data
const { findOne } = useStrapi()

const {
  data: about,
  error,
  pending,
} = await useAsyncData('about', () =>
  findOne<About>('about', {
    populate: [
      'imageProfil',
      'experiences.id',
      'experiences.period',
      'educations',
      'educations.period',
      'skills',
      'skills.subSkills',
    ],
  }).catch(() => {
    throw new Error("impossible de récupérer les données pour la page 'About'")
  })
)
// #endregion

// #region Animation Reveal
const { $gsap: gsap } = useNuxtApp()

const header = ref<HTMLElement>()
const title = ref<HTMLElement>()
const image = ref<HTMLElement>()

const ctx = ref<gsap.Context>()
const tl = gsap.timeline()
/* const tl = ref<gsap.core.Timeline>() */
// #endregion

// #region Lifecycle hooks
onMounted(() => {
  ctx.value = gsap.context(() => {
    if (!title.value || !image.value) throw new Error('No title')
    revealAnimationText(tl, title.value)
    revealAnimationImage(tl, image.value, '-=0.4')
  }, header.value)
})

onUnmounted(() => {
  ctx?.value?.revert()
})

onBeforeRouteLeave((to, from, next) => {
  console.log({ to, from, next })
  tl.reverse().then(() => {
    next()
  })
})
// #endregion
</script>

<style scoped lang="scss">
.about {
  @extend %grid-6;
}

.about header {
  padding-top: 10rem;
  padding-bottom: 12rem;
  grid-column: 2 / span 2;
}

.about header h1 {
  @extend %title-1;
  position: relative;
  overflow: hidden;
  margin-bottom: 3rem;
  //For the animation
  color: transparent;
  --scale-x: 0;
  --origin: left;
  &::before {
    @extend %overlay-slide-apparition;
  }
}

.about header p {
  @extend %text-body-small;
}

.about img {
}

.about .about__header .header__img_wrapper {
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  width: calc((100% / 12) * 5);
  height: auto;
}

.about .about__header .header__img {
  position: relative;
  transform: translate3d(-100%, 0, 0);
  --translate-x: 0;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--orange);
    transform: translate3d(var(--translate-x), 0, 0);
  }
}

.about main {
  @extend %grid-6;
  grid-column: 1/ -1;
  padding-top: 10rem;
  width: 100%;
}
</style>
