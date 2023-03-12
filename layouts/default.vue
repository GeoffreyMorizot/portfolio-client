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
			<NuxtLink class="nav__logo" href="/">GM</NuxtLink>
			<NuxtLink class="nav__link" href="about">about</NuxtLink>
		</nav>
		<slot/>
		<TheFooter/>	
	</div>
</template>


<style scoped lang="scss">
.layout {
	position: relative;
	display: flex;
	flex-direction: column;
}

.nav {
	display: flex;
	justify-content: space-between;
	margin-inline: calc((100vw/6)/2);
	padding: 1rem 0;
	font-family: "IBMPlexMono Medium";
	color: var(--blue);
}

.nav :first-child{
	transform: translateX(-50%);
}
.nav .nav__link{
	transform: translateX(50%);
	position: relative;
	text-transform: uppercase;
	&:hover:after {
		content: "";
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
		100%{
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