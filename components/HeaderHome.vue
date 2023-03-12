<template>
    <header class="header__home">
        <h1>
            <span class="header-home__firstname">Geoffrey</span> 
            <span class="header-home__name">Morizot</span>
        </h1>
        <h2>Développeur web</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit molestias recusandae, eaque aspernatur unde quaerat, molestiae ducimus incidunt repellat id, amet tempora est? Beatae nihil quibusdam suscipit accusantium consequuntur.</p>
    </header>
</template>
<style scoped lang="scss">
.header__home{
    @extend %grid-6;
    color: var(--blue);
    padding-top: calc(100vh/6);
}
.header__home h1  {
    grid-column: 2 / span 4;
    grid-row: 1 / span 1;
    @extend %title-1;
    font-family: "IBMPlexMono Medium";
    color: var(--orange)
}
.header-home__firstname{
    display: block;
}
.header-home__name{
    display: block;
    margin-left: calc((100vw / 6) + calc(100vw / 120));
}
.header__home h2 {
    grid-column: 3 / span 3;
    grid-row: 2 / span 1;
    font-size: 1.5rem;
    font-family: "IBMPlexMono Medium";
   margin-top: 2rem;
   margin-bottom: 1rem;
   text-transform: uppercase;
    
}
.header__home p {
    grid-column: 3 / span 3;
    grid-row: 3 / span 1;
    font-size: 1rem;
    font-family: "IBMPlexMono Regular";
  
}

</style>