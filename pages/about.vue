<template>
  <div class="about">
    <header>
      <h1>{{ about.attributes.pageTitle }}</h1>
      <p>{{ about.attributes.headerText }}</p>
      <img :src="url" :alt="alternativeText" />
    </header>
    <main>
      <ExperiencesList>
        <ExperienceDetail
          v-for="experience in about.attributes.experiences"
          :key="experience.id"
          :experience="experience"
        />
      </ExperiencesList>
    </main>
  </div>
</template>

<script setup lang="ts">
import { About } from '@/types/index'

const { findOne } = useStrapi()

const { data: about } = await findOne<About>('about', {
  populate: ['imageProfil', 'experiences.id', 'experiences.period'],
}).catch(() => {
  throw new Error("impossible de récupérer les données 'About'")
})

const url = useStrapiMedia(about.attributes.imageProfil.data.attributes.url)
const alternativeText =
  about.attributes.imageProfil.data.attributes.alternativeText
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
  grid-column: 1/ -1;
  padding-top: 10rem;
  width: 100%;
  padding-inline: calc(100% / 6);
}
</style>
