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
