import {
  Strapi4ResponseMany,
  Strapi4ResponseData,
  Strapi4Response,
} from '@nuxtjs/strapi/dist/runtime/types'
import { Strapi4Formats, Strapi4Format } from './strapi4'

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

export interface Strapi4ResponseMultiMediaImage {
  data: Array<{
    id: number
    attributes: Strapi4MediaImage
  }>
}

export type Strapi4FormatKey = 'small' | 'medium' | 'thumbnail'
export type Strapi4Formats = {
  [key in Strapi4FormatKey]: Strapi4Format
}
export interface Strapi4MediaImage extends StrapiBaseEntity {
  name: string
  alternativeText: string | undefined
  caption: string | undefined
  width: number
  height: number
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | undefined
  provider: string
  provider_metadata: Record<string, unknown> | undefined
  formats: Strapi4Formats
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
  skills: { data: Omit<Strapi4ResponseData<Skill>[], 'meta'> }
}

export interface Skill extends StrapiBaseEntity {
  name: string
  subSkills: SubSkill[]
}

export interface SubSkill {
  id: number
  __component: string
  name: string | null
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
  description: string
  cover: Strapi4ResponseSingleMediaImage
  images: Strapi4ResponseMultiMediaImage
  technologies: { data: Omit<Strapi4ResponseData<Technology>, 'meta'>[] }
  projectUrl: Url
  githubUrl: Url
}

export interface Technology extends StrapiBaseEntity {
  name: string
}

export interface Url {
  id: number
  name: string
  link: string
}
