<template>
	<div class="xp__list">
		<h2>Expériences</h2>
    <slot />
	</div>
</template>

<style scoped lang="scss">
.xp__list h2 {
	@extend %title-2;
  margin-bottom: 4rem;
}
</style>
