<template>
  <main>
    <div v-if="home" class="header__wrapper">
      <HeaderHome :home="home.attributes" />
    </div>
    <ProjectsList>
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project.attributes"
      />
    </ProjectsList>
  </main>
</template>

<script setup lang="ts">
import { Home, Project } from '~~/types'

const { find, findOne } = useStrapi()

const { data: projects } = await find<Project>('projects', {
  populate: 'cover',
}).catch(() => {
  throw new Error("impossible de récupérer les données 'Projects'")
})

const { data: home } = await findOne<Home>('home').catch(() => {
  throw new Error("impossible de récupérer les données 'Home'")
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
