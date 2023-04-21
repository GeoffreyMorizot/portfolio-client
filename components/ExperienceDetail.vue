<template>
  <article class="xp">
    <div class="xp__dates">
      <time :datetime="startDate">{{ startDate }}</time>
      <span>→</span>
      <time :datetime="endDate">{{ endDate }}</time>
    </div>
    <div class="xp__content">
      <button class="xp__btn" @click="open">
        <h4>{{ experience.title }}</h4>
        <CollapseBtn
          :is-open="isOpen.value"
          color="var(--blue)"
          duration="0.15s"
        />
      </button>
      <h5>{{ experience.subTitle }}</h5>
      <div
        v-show="isOpen.value"
        ref="desc"
        v-html="$mdRenderer.render(experience.description)"
      ></div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Experience } from '@/types'
import useDateFormat from '@/composables/useDateFormat'

const props = defineProps<{ experience: Experience }>()
const isOpen = reactive({ value: false })
const { $gsap: gsap } = useNuxtApp()
const tl = gsap.timeline()

const desc = ref<HTMLElement | null>(null)
onUpdated(() => {
  if (desc.value && isOpen.value) {
    tl.from(desc.value?.querySelectorAll('li'), {
      x: 5,
      stagger: 0.05,
      delay: 0.1,
      opacity: 0,
      ease: 'Power2.easeOut',
    })
  }
})

function open() {
  isOpen.value = !isOpen.value
}

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

.xp__content .xp__btn {
  display: flex;
  justify-content: space-between;
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
