<template>
  <div class="education">
    <h4>{{ education.name }}</h4>
    <div class="education__location-date">
      <div class="education__location-school">
        <p>
          <span>{{ education.school }}</span>
          -
          <span>{{ education.location }}</span>
        </p>
      </div>
      <span class="education__divider" />
      <time>{{ startDate }}</time>
      -
      <time>{{ endDate }}</time>
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
  font-family: var(--secondary-font);
  font-size: 1.25rem;
  font-variation-settings: 'wght' 550;
  text-transform: uppercase;
  color: var(--orange);
}

.education__divider {
  flex-grow: 1;
  height: 1px;
  background-color: currentColor;
  margin-inline: 1rem;
}

.education__divider span {
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
