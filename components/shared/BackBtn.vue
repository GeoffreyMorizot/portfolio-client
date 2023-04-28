<template>
  <div class="btn">
    <svg
      ref="svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 2L6 6.8L10.8 11.6"
        stroke="currentColor"
        stroke-width="1.6"
      />
      <path
        ref="path"
        class="path"
        d="M6.80002 6.80005H13.2C15.851 6.80005 18 8.94908 18 11.6V21.2"
        stroke="currentColor"
        stroke-width="1.6"
      />
    </svg>
    <span>Retour</span>
  </div>
</template>

<script setup lang="ts">
const path = ref<SVGPathElement | null>(null)
const svg = ref<SVGElement | null>(null)

onMounted(() => {
  if (path.value && svg.value) {
    path.value.style.setProperty(
      '--path-lenght',
      path.value.getTotalLength().toString()
    )
    svg.value.style.opacity = '1'
  }
})
</script>

<style lang="scss">
.btn {
  --path-lenght: 0;
  --path-height: 8px;
  display: flex;
  align-items: baseline;
  gap: 0.1rem;
  cursor: pointer;
}

.btn span {
  font-family: var(--secondary-font);
  font-variation-settings: 'wght' 450;
  font-size: 1rem;
  transform: translate(0, -3px);
  line-height: 1;
}

.btn .path {
  stroke-dasharray: var(--path-lenght);
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 0.5s ease-in-out;
}

.btn:hover svg {
  transform: translate3D(0, var(--path-height), 0);
}

.btn svg {
  transition: transform 0.5s ease-in-out;
  opacity: 0;
}

.btn:hover .path {
  stroke-dashoffset: var(--path-lenght);
}
</style>
