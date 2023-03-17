<template>
  <article class="xp">
    <div class="xp__dates">
      <time :datetime="startDate">{{ startDate }}</time>
      <span>→</span>
      <time :datetime="endDate">{{ endDate }}</time>
    </div>
    <div class="xp__content">
      <h4>{{ experience.title }}</h4>
      <h5>{{ experience.subTitle }}</h5>
      <div v-html="$mdRenderer.render(experience.description)"></div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Experience } from '@/types'
import useDateFormat from '@/composables/useDateFormat'

const props = defineProps<{ experience: Experience }>()

const startDate = useDateFormat(props.experience.period.startDate).replace(
  '/',
  '.'
)
const endDate = useDateFormat(props.experience.period.endDate).replace('/', '.')
</script>

<style scoped lang="scss">
.xp {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  border-top: 2px solid var(--blue);
}

.xp__dates {
  font-family: 'Space Grotesk Variable';
  font-variation-settings: 'wght' 425;
  font-size: 0.9rem;
  color: var(--blue);
}

.xp__dates span {
  display: inline-block;
  margin-inline: 0.25rem;
}

.xp__content {
  grid-column: 2 / span 3;
  display: flex;
  flex-direction: column;
}

.xp__content h4 {
  @extend %title-4;
}

.xp__content h5 {
  @extend %title-5;
  margin-bottom: 0.5rem;
}

.xp__content div {
  @extend %text-body-small;
  & ::marker {
    content: '- ';
  }
  & ul {
    margin-left: 0.5rem;
  }
}
</style>
