<template>
  <div class="about">
    <header>
      <h1>{{ about?.data.attributes.pageTitle }}</h1>
      <p>{{ about?.data.attributes.headerText }}</p>
      <img
        :src="
          config.public.BASE_URL +
          about?.data.attributes.imageProfil.data.attributes.formats.large.url
        "
        :alt="about?.data.attributes.imageProfil.data.attributes.alternativeText"
      />
    </header>
    <main>
      <ExperiencesList>
        <ExperienceDetail />
        <ExperienceDetail />
        <ExperienceDetail />
      </ExperiencesList>
    </main>
  </div>
</template>

<script setup lang="ts">
import { About, ResponseAPI } from '@/types/types'

console.log("ok")

const config = useRuntimeConfig()


const { data: about } = useFetch<ResponseAPI<About>>(
  `${config.API_BASE_URL}/about?populate=imageProfil`
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
  grid-column: 2 / span 4;
  padding-top: 10rem;
}
</style>
