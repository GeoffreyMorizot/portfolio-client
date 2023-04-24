<template>
  <div class="observer">
    <slot />
  </div>
</template>

<script setup lang="ts">
const element = ref<NodeListOf<Element>>()

onMounted(() => {
  element.value = document.querySelectorAll('.observer')
  if (element.value) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, options)
    element.value.forEach((el) => {
      observer.observe(el)
    })
  }
})
</script>
