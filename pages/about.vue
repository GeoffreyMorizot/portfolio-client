<template>
  <div class="about">
    <div v-if="error">{{ error.message }}</div>
    <div v-if="pending">Chargement</div>

    <header v-if="!error && !pending">
      <h1>{{ about?.data.attributes.pageTitle }}</h1>
      <p>{{ about?.data.attributes.headerText }}</p>
      <img
        :src="url"
        :alt="
          about?.data.attributes.imageProfil.data.attributes.alternativeText
        "
      />
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

const url = useStrapiMedia(
  about.value?.data.attributes.imageProfil.data.attributes.url ?? ''
)
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
  margin-bottom: 3rem;
}

.about header p {
  @extend %text-body-small;
}

.about img {
  position: absolute;
  top: 0;
  right: 0;
  width: calc((100% / 12) * 5);
  height: auto;
}

.about main {
  @extend %grid-6;
  grid-column: 1/ -1;
  padding-top: 10rem;
  width: 100%;
}
</style>
