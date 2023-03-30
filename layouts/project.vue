<template>
  <div class="layout">
    <div class="background">
      <div class="background__column"></div>
      <div class="background__column"></div>
      <div class="background__column"></div>
      <div class="background__column"></div>
      <div class="background__column"></div>
      <div class="background__column"></div>
    </div>
    <header>
      <span class="back-btn">
        <NuxtLink @click="router.back">Retour</NuxtLink>
      </span>
    </header>
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
const router = useRouter()
</script>

<style scoped lang="scss">
.back-btn {
  writing-mode: vertical-lr;
  transform: translate3D(100%, 0, 0) rotate(180deg);
  cursor: pointer;
}
.layout {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout main {
  flex-grow: 1;
}

.background {
  position: absolute;
  display: grid;
  z-index: -1;
  width: 100%;
  height: 100%;
  grid-template-columns: var(--grid);
}

:not(:last-child).background__column {
  border-right: 1px solid var(--orange-light);
}
</style>
