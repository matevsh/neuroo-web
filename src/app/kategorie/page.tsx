import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { CategoryGrid } from '@/components/substances'
import { CATEGORIES, type CategoryInfo } from '@/lib/substances'

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

        <FadeIn className="mt-10">
          <div className="rounded-2xl bg-amber-50 p-6">
            <div className="flex items-start gap-4">
              <svg
                className="h-6 w-6 flex-shrink-0 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              <div className="text-sm text-amber-800">
                <p className="font-semibold">Informacja</p>
                <p className="mt-1">
                  Ta encyklopedia ma charakter wylacznie edukacyjny. Nie zachecamy
                  do uzywania substancji psychoaktywnych. Uzywanie wielu z
                  opisanych substancji jest nielegalne i moze byc niebezpieczne
                  dla zdrowia.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-16">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Kategorie substancji
            </h2>
          </FadeIn>

          <CategoryGrid categories={categories} className="mt-10" />
        </div>
      </Container>
    </RootLayout>
  )
}
