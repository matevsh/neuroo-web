import { type ImageProps } from 'next/image'
import glob from 'fast-glob'
import {
  type Substance,
  type SubstanceCategory,
  CATEGORIES,
  isValidCategory,
} from './substances'

async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string,
): Promise<Array<MDXEntry<T>>> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(
        async (filename) => {
          let metadata = (await import(`../app/${directory}/${filename}`))[
            metaName
          ] as T
          return {
            ...metadata,
            metadata,
            href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          }
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  date: string
  title: string
  description: string
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface CaseStudy {
  date: string
  client: string
  title: string
  description: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

export function loadArticles() {
  return loadEntries<Article>('blog', 'article')
}

export function loadCaseStudies() {
  return loadEntries<CaseStudy>('work', 'caseStudy')
}

// ============================================
// Substancje - funkcje ładowania
// ============================================

export type MDXSubstance = Substance & { href: string }

async function loadSubstancesFromCategory(
  category: SubstanceCategory,
): Promise<MDXSubstance[]> {
  const files = await glob('*/page.mdx', {
    cwd: `src/app/kategorie/${category}`,
  })

  return Promise.all(
    files.map(async (filename) => {
      const module = await import(`../app/kategorie/${category}/${filename}`)
      const substance = module.substance as Substance

      return {
        ...substance,
        href: `/kategorie/${category}/${filename.replace(/\/page\.mdx$/, '')}`,
      }
    }),
  )
}

export async function loadSubstances(
  category?: SubstanceCategory,
): Promise<MDXSubstance[]> {
  if (category) {
    return loadSubstancesFromCategory(category)
  }

  // Załaduj wszystkie substancje ze wszystkich kategorii
  const allCategories = Object.keys(CATEGORIES) as SubstanceCategory[]
  const allSubstances = await Promise.all(
    allCategories.map(loadSubstancesFromCategory),
  )

  return allSubstances.flat().sort((a, b) => a.nazwa.localeCompare(b.nazwa, 'pl'))
}

export async function loadSubstanceBySlug(
  category: SubstanceCategory,
  slug: string,
): Promise<MDXSubstance | null> {
  try {
    const module = await import(`../app/kategorie/${category}/${slug}/page.mdx`)
    return {
      ...module.substance,
      href: `/kategorie/${category}/${slug}`,
    }
  } catch {
    return null
  }
}

export function getCategoryInfo(category: SubstanceCategory) {
  return CATEGORIES[category]
}

export { CATEGORIES, isValidCategory, type Substance, type SubstanceCategory }
