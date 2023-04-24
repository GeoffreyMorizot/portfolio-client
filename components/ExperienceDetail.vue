<template>
  <article class="xp">
    <div class="wrapper">
      <span class="xp__dates">
        <time :datetime="startDate">{{ startDate }}</time>
        <span>→</span>
        <time :datetime="endDate">{{ endDate }}</time>
      </span>
    </div>
    <div class="xp__content">
      <button class="xp__btn" @click="open">
        <span class="wrapper">
          <h4 class="xp__title">{{ experience.title }}</h4>
        </span>
        <div class="xp__icon">
          <CollapseBtn
            :is-open="isOpen.value"
            color="var(--blue)"
            duration="0.15s"
          />
        </div>
      </button>
      <span class="wrapper">
        <h5 class="xp__subtitle">{{ experience.subTitle }}</h5>
      </span>
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
const startDate = useDateFormat(props.experience.period.startDate).replace(
  '/',
  '.'
)
const endDate = useDateFormat(props.experience.period.endDate).replace('/', '.')

const { $gsap: gsap } = useNuxtApp()
const desc = ref<HTMLElement | null>(null)
const isOpen = reactive({ value: false })
const tl = gsap.timeline()

function open() {
  isOpen.value = !isOpen.value
}

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
</script>

<style scoped lang="scss">
.xp {
  display: grid;
  position: relative;
  opacity: 0;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 0.75rem;
  padding-bottom: 2rem;
  --scale-x: 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: var(--blue);
    transform: scale3d(var(--scale-x), 1, 1);
    transform-origin: left;
  }
}

.xp__dates {
  display: block;
  overflow: hidden;
  height: fit-content;
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

.xp__content .xp__title {
  @extend %title-4;
}

.xp__content .xp__subtitle {
  @extend %title-5;
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
