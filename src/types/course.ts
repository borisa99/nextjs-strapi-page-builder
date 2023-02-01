import type { blockKey } from '@/components/blocks'

export interface Block {
  __component: blockKey
  id: number
}

export interface Meta {
  id: number
  name: string
  content: string
}

export interface Seo {
  id: number
  metaTitle: string
  metaDescription: string
  preventIndexing: boolean
  structuredData: object | null
  meta: Meta[]
}
export interface Course {
  id: number
  slug: string
  lmsId: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  publishAt: string | null
  seo: Seo
  blocks: Block[]
}
