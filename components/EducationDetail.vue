<template>
  <div class="education">
    <span class="wrapper">
      <h4>{{ education.name }}</h4>
    </span>
    <div class="education__location-date">
      <div class="education__location-school wrapper">
        <p>
          <span>{{ education.school }}</span>
          -
          <span>{{ education.location }}</span>
        </p>
      </div>
      <span class="education__divider" />
      <span class="wrapper">
        <div class="education__period">
          <time>{{ startDate }}</time>
          -
          <time>{{ endDate }}</time>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Education } from '@/types/index'

const props = defineProps<{ education: Education }>()
const startDate = useDateFormat(props.education.period.startDate).replace(
  '/',
  '.'
)
const endDate = useDateFormat(props.education.period.endDate).replace('/', '.')
</script>

<style lang="scss" scoped>
.education {
  color: var(--blue);
  margin-bottom: 1rem;
}

.education h4 {
  display: block;
  font-family: var(--secondary-font);
  font-size: 1.25rem;
  font-variation-settings: 'wght' 550;
  text-transform: uppercase;
  color: var(--orange);
  opacity: 0;
}

.education__divider {
  flex-grow: 1;
  height: 1px;
  background-color: currentColor;
  margin-inline: 1rem;
}

.education__divider {
  transform-origin: left;
  margin-inline: 0.25rem;
}

.education__location-date {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: var(--secondary-font);
  font-variation-settings: 'wght' 450;
}

.education__location-school {
  display: flex;
}
</style>
