//STRAPI
interface StrapiBaseEntity {
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

export interface Strapi4ResponseSingleMediaImage {
  data: {
    id: number
    attributes: Strapi4MediaImage
  }
}

export interface Strapi4MediaImage extends StrapiBaseEntity {
  name: string
  alternativeText: string | undefined
  caption: string | undefined
  width: number
  height: number
  formats: Record<string, unknown>
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | undefined
  provider: string
  provider_metadata: Record<string, unknown> | undefined
}

//ENTITIES
export interface Home extends StrapiBaseEntity {
  firstname: string
  lastname: string
  bio: string
  job: string
}

export interface About extends StrapiBaseEntity {
  pageTitle: string
  headerText: string
  imageProfil: Strapi4ResponseSingleMediaImage
  experiences: Experience[]
  educations: Education[]
}

export interface Experience {
  id: number
  __component: string
  title: string
  subTitle: string
  description: string
  period: Period
}

interface Period {
  id: number
  startDate: Date
  endDate: Date | null
}

export interface Education {
  id: number
  __component: string
  name: string
  location: string
  period: Period
  school: string
}

export interface Project extends StrapiBaseEntity {
  name: string
  slug: string
  cover: Strapi4ResponseSingleMediaImage
}
