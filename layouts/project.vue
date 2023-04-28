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
      <div class="back-btn">
        <NuxtLink @click="router.back">
          <BackBtn />
        </NuxtLink>
      </div>
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
  display: flex;
  justify-content: center;
  width: calc((100% / 6) * 1);
  color: var(--orange);
}

.back-btn a {
  display: inline-block;
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

.layout header {
  height: 8rem;
  display: flex;
  align-items: center;
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
