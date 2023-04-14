<template>
  <NuxtLink :href="`project/${project.slug}`" class="card">
    <div class="card__img">
      <img :src="url" :alt="project.cover.data.attributes.alternativeText" />
    </div>
    <div class="card__title" :data-title="project.name">
      <h3>{{ project.name }}</h3>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { Project } from '~~/types'

const props = defineProps<{ project: Project }>()
const url = useStrapiMedia(props.project.cover.data.attributes.url)
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: transparent;
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
}

.card.intersect {
  transition: all 500ms ease-in 0s;
  background: red;
}

.card__img {
  @extend %image-ratio-cover;
  position: relative;
  grid-column: 1 / span 3;
  width: 50%;
  overflow: hidden;
  height: auto;
  --x-pos: -100%;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--orange);
    z-index: 1;
    transform: translate3d(var(--x-pos), 0, 0);
  }
}

.card__img img {
  opacity: 0;
}

.card .card__img img {
  transform: scale(1);
  transition: transform 500ms ease-in 0s;
  filter: grayscale(100%);
}

.card:hover .card__img img {
  transform: scale(1.05);
  transition: transform 500ms ease-in 0s;
  filter: grayscale(0);
}

.card__title {
  position: relative;
  display: flex;
  transform: scale(0.9); // 1 after animation
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 50%;
  height: auto;
  font-family: var(--primary-font);
  font-variation-settings: 'wght' 600;
  line-height: 1;
  font-size: clamp(32px, 4vw, 64px);
  color: var(--blue);
  z-index: 1;
  opacity: 0;
  --scale-bg-text: 1.2; // 1 after animation
  &::after {
    content: attr(data-title);
    position: absolute;
    transform: scale(var(--scale-bg-text));
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-family: var(--primary-font);
    font-variation-settings: 'wght' 700;
    font-size: 17vw;
    white-space: nowrap;
    color: transparent;
    -webkit-text-stroke: 1px var(--orange-light);
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    z-index: -1;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 35%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 1) 65%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: -1;
  }
}

.card__title-outline {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: var(--orange);
  line-height: 1;
  white-space: nowrap;
  z-index: -1;
  -webkit-text-stroke: 1px var(--orange);
}
</style>
