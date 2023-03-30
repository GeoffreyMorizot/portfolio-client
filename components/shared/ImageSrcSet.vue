<template>
  <img
    :src="src"
    alt=""
    :srcset="useBuildSrcSetUrl(props.image.attributes.formats)"
    :width="image.attributes.width"
    :height="image.attributes.height"
    :sizes="sizes"
  />
</template>

<script setup lang="ts">
import { Strapi4ResponseData } from '@nuxtjs/strapi/dist/runtime/types/v4'
import { Strapi4MediaImage } from '@/types'

interface ImageSrcSetProps extends Partial<HTMLImageElement> {
  image: Omit<Strapi4ResponseData<Strapi4MediaImage>, 'meta'>
  sizes: string
}

const props = defineProps<ImageSrcSetProps>()

const src = useStrapiMedia(props.image.attributes.formats.medium.url)
</script>
