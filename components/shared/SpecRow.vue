<template>
  <!-- spec text -->
  <p v-if="typeof data === 'string'" class="spec">
    {{ nameSpec }}: <span class="spec__text">{{ data }}</span>
  </p>
  <!-- spec url -->
  <p v-if="typeof data === 'object' && !Array.isArray(data)" class="spec">
    {{ nameSpec }}:
    <NuxtLink class="spec__link" :href="data.link" target="_blank"
      >{{ data.name }} <span class="link__icon">↗</span></NuxtLink
    >
  </p>
  <!-- Liste de spec -->
  <ul v-if="typeof data === 'object' && Array.isArray(data)" class="spec">
    {{
      nameSpec
    }}:
    <li v-for="tech in data" :key="tech.id" class="spec__list-row">
      {{ tech.attributes.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Strapi4ResponseData } from '@nuxtjs/strapi/dist/runtime/types/v4'
import { Technology, Url } from '~~/types'

defineProps<{
  data: Url | Omit<Strapi4ResponseData<Technology>, 'meta'>[] | string
  nameSpec: string
}>()
</script>

<style scoped lang="scss">
.spec {
  display: flex;
  margin-bottom: 0.25rem;
  font-family: var(--secondary-font);
  font-variation-settings: 'wght' 500;
  font-size: 0.85rem;
  text-transform: uppercase;
  color: var(--orange);
}

.spec :is(.spec__link, .spec__list-row, .spec__text) {
  color: var(--blue);
}

.spec :is(.spec__link, .spec__list-row:is(:first-child), .spec__text) {
  margin-left: 0.5rem;
}

.spec .spec__link .link__icon {
  display: inline-block;
  opacity: 0;
  transform: translate3d(-2px, 2px, 0);
  transition: all 0.15s ease-out;
}

.spec .spec__link:hover .link__icon {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s ease-in;
}

/* @keyframes up {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
} */

.spec .spec__list-row {
  margin: 0;
  &:not(:first-child) {
    margin-left: 0.25rem;
  }
}
.spec .spec__list-row:not(:last-child):after {
  content: ' / ';
}
</style>
