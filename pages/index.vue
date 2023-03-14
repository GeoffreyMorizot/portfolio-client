<template>
  <main>
    <div v-if="home" class="header__wrapper">
      <HeaderHome :home="home?.data.attributes" />
    </div>
    <ProjectsList>
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </ProjectsList>
  </main>
</template>

<script setup lang="ts">
import { ResponseAPI, Home } from '@/types/types'

const projects = ref([
  {
    id: 1,
    title: 'Weather App',
    image:
      'https://res.cloudinary.com/dypnlxw5g/image/upload/v1642009951/large_weather_cover_4d1cf5e27d.jpg',
  },
  {
    id: 2,
    title: 'Portfolio',
    image:
      'https://res.cloudinary.com/dypnlxw5g/image/upload/v1642009951/large_weather_cover_4d1cf5e27d.jpg',
  },
  {
    id: 3,
    title: 'Structure',
    image:
      'https://res.cloudinary.com/dypnlxw5g/image/upload/v1642009951/large_weather_cover_4d1cf5e27d.jpg',
  },
  {
    id: 3,
    title: 'FormulaBet',
    image:
      'https://res.cloudinary.com/dypnlxw5g/image/upload/v1642009951/large_weather_cover_4d1cf5e27d.jpg',
  },
])

const config = useRuntimeConfig()

const { data: home } = await useAsyncData<ResponseAPI<Home>>(() =>
  $fetch(`${config.API_BASE_URL}/home`)
)
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
