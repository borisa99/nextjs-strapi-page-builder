import delve from 'dlv'
import { ParsedUrlQuery } from 'querystring'

// This function simply return the slug and the locale of the request with default values
export function getLocalizedParams(query?: ParsedUrlQuery) {
  if (!query) return { slug: '', lang: 'en' }

  const lang = delve(query, 'lang')
  const slug = delve(query, 'slug')

  return { slug: slug || '', locale: lang || 'en' }
}
