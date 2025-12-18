import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Raporty Użytkowników | Neuroo',
  description:
    'Raporty doświadczeń użytkowników substancji psychoaktywnych. Nauka z pierwszej ręki i edukacja harm reduction.',
}

export default function RaportyPage() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 sm:text-7xl">
            Raporty Użytkowników
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-neutral-600">
            Dokumentacja rzeczywistych doświadczeń z substancjami
            psychoaktywnymi. Ucz się od innych, dziel się swoją wiedzą i
            wspieraj kulturę bezpiecznego używania.
          </p>
        </FadeIn>

        <div className="mt-16">
          <FadeIn>
            <div className="rounded-3xl bg-neutral-950 px-6 py-20 sm:px-6 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-display font-semibold tracking-tight text-white sm:text-4xl">
                  Sekcja w budowie
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                  Pracujemy nad platformą do dzielenia się raportami
                  użytkowników. Wkrótce będziesz mógł przeglądać i dodawać
                  własne doświadczenia.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/kategorie"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-neutral-950 shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
                  >
                    Przeglądaj substancje
                  </a>
                  <a
                    href="/contact"
                    className="text-sm font-semibold leading-6 text-white hover:text-neutral-200 transition"
                  >
                    Skontaktuj się <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-950 text-white text-2xl">
                  📝
                </div>
                <h3 className="mt-4 text-lg font-display font-semibold text-neutral-950">
                  Dokumentacja doświadczeń
                </h3>
                <p className="mt-2 text-neutral-600">
                  Szczegółowe opisy przebiegu działania substancji, efektów i
                  obserwacji.
                </p>
              </div>

              <div className="rounded-lg border border-neutral-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-950 text-white text-2xl">
                  🛡️
                </div>
                <h3 className="mt-4 text-lg font-display font-semibold text-neutral-950">
                  Harm Reduction
                </h3>
                <p className="mt-2 text-neutral-600">
                  Nauka z błędów i sukcesów innych w celu promowania
                  bezpieczniejszego używania.
                </p>
              </div>

              <div className="rounded-lg border border-neutral-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-950 text-white text-2xl">
                  🔬
                </div>
                <h3 className="mt-4 text-lg font-display font-semibold text-neutral-950">
                  Wkład dla nauki
                </h3>
                <p className="mt-2 text-neutral-600">
                  Twoje doświadczenia mogą pomóc w zrozumieniu działania
                  substancji psychoaktywnych.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-16 rounded-2xl bg-neutral-50 px-6 py-12 sm:px-12">
              <h3 className="text-2xl font-display font-semibold text-neutral-950">
                Wytyczne dotyczące raportów
              </h3>
              <div className="mt-6 space-y-4 text-neutral-600">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-xl">✓</span>
                  <p>
                    <strong className="text-neutral-950">Bądź szczery i dokładny</strong> - opisuj
                    swoje doświadczenie tak, jak je przeżyłeś
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-xl">✓</span>
                  <p>
                    <strong className="text-neutral-950">Podawaj szczegóły</strong> - dawkowanie,
                    droga podania, set i setting
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-xl">✓</span>
                  <p>
                    <strong className="text-neutral-950">Szanuj prywatność</strong> - nie ujawniaj
                    danych osobowych swoich ani innych osób
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-xl">✓</span>
                  <p>
                    <strong className="text-neutral-950">Promuj bezpieczeństwo</strong> - dziel się
                    wiedzą o harm reduction
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </RootLayout>
  )
}

