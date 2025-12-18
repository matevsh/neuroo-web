import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { SubstanceCard } from '@/components/substances'
import {
  CATEGORIES,
  type SubstanceCategory,
  isValidCategory,
} from '@/lib/substances'
import { loadSubstances } from '@/lib/mdx'

interface Props {
  params: Promise<{ kategoria: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategoria } = await params

  if (!isValidCategory(kategoria)) {
    return {}
  }

  const category = CATEGORIES[kategoria]

  return {
    title: `${category.nazwa} - Encyklopedia Substancji | Neuroo`,
    description: `${category.opisRozszerzony} Informacje o efektach, dawkowaniu i harm reduction.`,
  }
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((kategoria) => ({ kategoria }))
}

export default async function CategoryPage({ params }: Props) {
  const { kategoria } = await params

  if (!isValidCategory(kategoria)) {
    notFound()
  }

  const category = CATEGORIES[kategoria]
  const substances = await loadSubstances(kategoria as SubstanceCategory)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
            <Link href="/kategorie" className="hover:text-neutral-700">
              Encyklopedia
            </Link>
            <span>/</span>
            <span className="text-neutral-950">{category.nazwa}</span>
          </nav>

          {/* Header */}
          <div className="flex items-center gap-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 sm:text-6xl">
                {category.nazwa}
              </h1>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-xl text-neutral-600">
            {category.opisRozszerzony}
          </p>

          {/* Mechanism of action */}
          <div className="mt-10 rounded-2xl bg-neutral-50 p-6">
            <h2 className="font-display text-lg font-semibold text-neutral-950">
              Mechanizm dzialania
            </h2>
            <p className="mt-2 text-neutral-600">{category.mechanizmDzialania}</p>
          </div>
        </FadeIn>

        {/* Substances list */}
        <div className="mt-16">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Substancje w tej kategorii
            </h2>
            {substances.length === 0 && (
              <p className="mt-4 text-neutral-500">
                Brak substancji w tej kategorii. Wkrotce dodamy wiecej informacji.
              </p>
            )}
          </FadeIn>

          {substances.length > 0 && (
            <FadeInStagger className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {substances.map((substance) => (
                <SubstanceCard
                  key={substance.slug}
                  substance={substance}
                  href={substance.href}
                />
              ))}
            </FadeInStagger>
          )}
        </div>

        {/* Back link */}
        <FadeIn className="mt-16">
          <Link
            href="/kategorie"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-950"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Powrot do wszystkich kategorii
          </Link>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
