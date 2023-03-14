<template>
  <header class="header__home">
    <h1>
      <span class="header-home__firstname">{{ home.firstname }}</span>
      <span class="header-home__name">{{ home.lastname }}</span>
    </h1>
    <h2>
      <pre>{{ home.job }}</pre>
    </h2>
    <p>{{ home.bio }}</p>
  </header>
</template>

<script setup lang="ts">
import { Home } from '@/types/types'

type HomeProps = Omit<Home, 'createdAt' | 'publishedAt' | 'updatedAt'>
defineProps<{ home: HomeProps }>()

</script>

<style scoped lang="scss">
.header__home {
  @extend %grid-6;
  color: var(--blue);
  padding-top: calc(100vh / 6);
}
.header__home h1 {
  @extend %title-1--big;
  grid-column: 2 / span 4;
  grid-row: 1 / span 1;
  font-family: 'Space Grotesk Variable';
  font-weight: 500;
  color: var(--orange);
}
.header-home__firstname {
  display: block;
}
.header-home__name {
  display: block;
  margin-left: calc(100vw / 6);
}
.header__home h2 {
  grid-column: 3 / span 3;
  grid-row: 2 / span 1;
  @extend %title-2;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
.header__home p {
  grid-column: 3 / span 3;
  grid-row: 3 / span 1;
  @extend %text-body;
}
</style>
