<template>
  <NuxtLink href="#" class="card">
    <div class="card__img">
      <img
        src="https://res.cloudinary.com/dypnlxw5g/image/upload/v1642009951/large_weather_cover_4d1cf5e27d.jpg"
        alt=""
        srcset=""
      />
    </div>
    <div class="card__title" :data-title="project.title">
      <h3>{{ project.title }}</h3>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ project: { title: string } }>()
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

.card__img {
  grid-column: 1 / span 3;
  width: 50%;
  overflow: hidden;
  height: auto;
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
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 50%;
  height: auto;
  font-family: var(--primary-font);
  font-variation-settings: "wght" 600;
  font-family: 'IBMPlexMono Medium';
  font-family: var(--primary-font);
  font-variation-settings: "wght" 600;
  line-height: 1;
  font-size: clamp(32px, 4vw, 64px);
  font-size: clamp(32px, 3.5vw, 64px);
  font-size: clamp(32px, 4vw, 64px);
  color: var(--blue);
  z-index: 1;
  &::after {
    content: attr(data-title);
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    font-family: var(--primary-font);
    font-variation-settings: "wght" 700;
    font-family: 'IBMPlexMono Bold';
    font-family: var(--primary-font);
    font-variation-settings: "wght" 700;
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
