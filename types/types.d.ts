//ENTITIES

interface StrapiBaseEntity {
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface StrapiBaseUploadFile extends Omit<StrapiBaseEntity, 'publishedAt'> {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: StrapiUploadFileFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
}

interface StrapiUploadFileFormats {
  large: StrapiUploadFileFormatAttribute
  small: StrapiUploadFileFormatAttribute
  medium: StrapiUploadFileFormatAttribute
  thumbnail: StrapiUploadFileFormatAttribute
}

interface StrapiUploadFileFormatAttribute {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
}

export interface Home extends StrapiBaseEntity {
  firstname: string
  lastname: string
  bio: string
  job: string
}

export interface About extends StrapiBaseEntity {
  pageTitle: string
  headerText: string
  imageProfil: Omit<ResponseAPI<StrapiBaseUploadFile>, 'meta'>
}

//API
export interface ResponseAPI<T> {
  data: {
    attributes: T
    id: number
  }
  meta: Record<string, unknown>
  error?: errorAPI
}

interface errorAPI {
  detail: Record<string, unknown>
  message: string
  name: string
  status: number
}
