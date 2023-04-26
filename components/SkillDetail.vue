<template>
  <ul class="subskill">
    <span>{{ skill.attributes.name }}</span>
    <li v-for="subSkill in skill.attributes.subSkills" :key="subSkill.id">
      {{ subSkill.name }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { Strapi4ResponseData } from '@nuxtjs/strapi/dist/runtime/types'
import { Skill } from '@/types'

defineProps<{ skill: Omit<Strapi4ResponseData<Skill>, 'meta'> }>()
</script>

<style scoped lang="scss">
.subskill {
  font-family: var(--secondary-font);
  font-size: 1.25rem;
  font-variation-settings: 'wght' 550;
  text-transform: uppercase;
  color: var(--orange);
  padding-right: 1rem;
}

.subskill span {
  margin-bottom: 1rem;
}

.subskill li {
  font-size: 1rem;
  font-variation-settings: 'wght' 450;
  color: var(--blue);
  text-transform: none;

  &::marker {
    content: '-';
  }
}
</style>
