<template>
  <article class="xp">
    <div class="xp__dates">
      <time>09-2019</time>
      <span>→</span>
      <time>Aujourd'hui</time>
    </div>
    <div class="xp__content">
      <h4>SARL SPEEDCITY - DIJON</h4>
      <h5>Chauffeur livreur / Gestion d’équipes / Communication</h5>
      <p>
        Gestion des calendriers des plannings de livraison et dispatche des
        colis Participation à la gestion de la relation client (Chronopost,
        TNT…) Participation à la livraison des colis
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.xp {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  border-top: 2px solid var(--blue);
}

.xp__dates {
  font-family: 'Space Grotesk Variable';
  font-variation-settings: 'wght' 425;
  font-size: 0.9rem;
  color: var(--blue);
}

.xp__dates span {
  margin-inline: 0.25rem;
}

.xp__content {
  grid-column: 2 / span 3;
  display: flex;
  flex-direction: column;
}

.xp__content h4 {
  @extend %title-4;
  margin-bottom: 0.5rem;
}

.xp__content h5 {
  @extend %title-5;
}

.xp__content p {
  @extend %text-body-small;
}
</style>
