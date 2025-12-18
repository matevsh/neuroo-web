import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { CATEGORIES, type CategoryInfo } from '@/lib/substances'
import { CategorySearch } from '@/components/CategorySearch'

export const metadata: Metadata = {
  title: 'Encyklopedia Substancji Psychoaktywnych | Neuroo',
  description:
    'Kompleksowa encyklopedia substancji psychoaktywnych. Informacje o efektach, dawkowaniu, harm reduction i interakcjach.',
}

export default function KategoriePage() {
  const categories = Object.values(CATEGORIES) as CategoryInfo[]

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 sm:text-7xl">
            Encyklopedia Substancji
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-neutral-600">
            Kompleksowe, rzetelne informacje o substancjach psychoaktywnych.
            Edukacja i harm reduction dla swiadomych decyzji.
          </p>
        </FadeIn>

        <CategorySearch categories={categories} />
      </Container>
    </RootLayout>
  )
}
