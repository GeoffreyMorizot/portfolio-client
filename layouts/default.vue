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
    <nav class="nav">
      <NuxtLink class="nav__logo" href="/">
        <img src="/images/logo.svg" alt="" />
      </NuxtLink>
      <NuxtLink class="nav__link" href="about">about</NuxtLink>
    </nav>
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
.layout {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nav {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: calc((100vw / 6) / 2);
  padding: 1rem 0;
  font-family: var(--secondary-font);
  font-weight: 600;
  color: var(--blue);
}

.nav .nav__logo {
  transform: translateX(-50%);
}
.nav .nav__link {
  transform: translateX(50%);
  position: relative;
  text-transform: uppercase;
  &:hover:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    bottom: 0px;
    left: 0;
    animation: slide 150ms ease-in both;
    transform: scaleX(0);
    transform-origin: right;
  }
  @keyframes slide {
    0% {
      transform-origin: left;
      transform: scaleX(0);
    }
    99% {
      transform-origin: left;
    }
    100% {
      transform: scaleX(1);
    }
  }
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
