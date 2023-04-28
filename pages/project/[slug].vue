<template>
  <main class="project">
    <section>
      <ImageSrcSet
        v-if="project?.data.attributes.cover.data"
        :sizes="`${(100 / 6) * 4}vw`"
        :image="project?.data.attributes.cover.data"
        class="project__image cover"
      />
      <div class="project__header">
        <h1 class="project__title">{{ project?.data.attributes.name }}</h1>
        <SpecRow
          v-if="project?.data.attributes.githubUrl"
          name-spec="github"
          :data="project?.data.attributes.githubUrl"
        />
        <SpecRow
          v-if="project?.data.attributes.projectUrl"
          name-spec="url"
          :data="project?.data.attributes.projectUrl"
        />
        <SpecRow
          v-if="project?.data.attributes.technologies.data"
          name-spec="Technologies"
          :data="project?.data.attributes.technologies.data"
        />
      </div>
      <div
        class="project__description"
        v-html="$mdRenderer.render(project?.data.attributes.description ?? '')"
      ></div>
      <ImageSrcSet
        v-for="(image, index) in project?.data.attributes.images.data"
        :key="index"
        :image="image"
        :sizes="`${(100 / 6) * 4}vw`"
        class="project__image mockup"
        loading="lazy"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { Project } from '@/types'

definePageMeta({
  layout: 'project',
})

const route = useRoute()
const { findOne } = useStrapi()

const { data: project } = await useAsyncData('project', () =>
  findOne<Project>('projects', `${route.params.slug}`).catch((err) => {
    throw new Error(
      `Impossible de récupérer le projet "${route.params.slug}" ${err}`
    )
  })
)
</script>

<style scoped lang="scss">
.project {
  --padding-inline: calc(100% / 6);
  width: 100%;
}

.project__header {
  grid-column: 4 / -1;
  padding-inline: var(--padding-inline);
}

.project .project__title {
  @extend %title-1;
  font-size: clamp(2rem, 7vw, 13rem);
  position: relative;
  margin-bottom: 3rem;
  white-space: pre-wrap;
}

.project section {
  @extend %grid-6;
}

.project__spec {
  font-family: var(--secondary-font);
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
}

.project__spec :is(span, ul) {
  margin-right: 0.5rem;
  font-variation-settings: 'wght' 500;
  color: var(--orange);
}
.project__spec link,
.project__spec li {
  font-variation-settings: 'wght' 400;
  color: var(--blue);
}
.project__spec li {
  margin-left: calc(100% + 1rem);
  & span {
    color: currentColor;
  }
}

.project__spec ul {
  width: fit-content;
}

.project__image {
  @extend %image-ratio-cover;

  &.cover {
    grid-column: 1 / span 3;
  }
}

.project__image.cover {
  grid-column: 1 / span 3;
}

.project__image.mockup {
  grid-column: 2 / span 4;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
}

.project__description {
  grid-column: 3 / span 3;
  @extend %text-body-small;
  padding: 1rem 1rem;
  margin: 4rem 0;
  width: calc(
    100% - 1px
  ); //Pour ne pas cacher la ligne vertical en bout du paragraphe
  border-top: 1px solid var(--orange-light);
  border-bottom: 1px solid var(--orange-light);
  background: white;
}
</style>
