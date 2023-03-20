<template>
	<section class="skill">
		<h2>
			<span>Compétences</span>
		</h2>

			<slot />

	</section>
</template>

<style scoped lang="scss">
.skill {
	grid-column: 2 /span 4;
	display: grid;
	grid-template-columns: repeat(4, 1fr)
}

.skill h2 {
	@extend %title-2;
	grid-column: 1 / -1;
	margin-bottom: 3.5rem;
}


</style>

