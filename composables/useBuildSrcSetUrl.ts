import { Strapi4FormatKey, Strapi4Formats } from '@/types'

// Renvoi l'url srcSet ("small.jpeg 100w, medium.jpeg 200w") à partir des formats de Strapi
export function useBuildSrcSetUrl(formats: Strapi4Formats): string {
  const srcSetUrl = ref<string[]>([])

  function srcSetLink(): string {
    // Boucle sur les formats d'images strapi et retourne l'url de chaque formats suivi de la taille
    for (const format in formats) {
      srcSetUrl.value.push(
        useStrapiMedia(formats[format as Strapi4FormatKey].url) +
          ' ' +
          formats[format as Strapi4FormatKey].width +
          'w'
      )
    }
    return srcSetUrl.value.join(', ')
  }

  return srcSetLink()
}
