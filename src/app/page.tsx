import { type Metadata } from 'next'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'

const substanceGroups = [
  { name: 'Psychodeliki', slug: 'psychodeliki', icon: '🍄', description: 'LSD, psylocybina, DMT' },
  { name: 'Dysocjanty', slug: 'dysocjanty', icon: '🌀', description: 'Ketamina, DXM, PCP' },
  { name: 'Stymulanty', slug: 'stymulanty', icon: '⚡', description: 'Amfetamina, kokaina, kofeina' },
  { name: 'Depresanty', slug: 'depresanty', icon: '😴', description: 'Alkohol, benzodiazepiny, GHB' },
  { name: 'Kannabinoidy', slug: 'kannabinoidy', icon: '🌿', description: 'THC, CBD, syntetyki' },
  { name: 'Opioidy', slug: 'opioidy', icon: '💊', description: 'Morfina, fentanyl, kodeina' },
  { name: 'Empatogeny', slug: 'empatogeny', icon: '❤️', description: 'MDMA, MDA, 6-APB' },
  { name: 'Nootropiki', slug: 'nootropiki', icon: '🧠', description: 'Modafinil, piracetam, L-teanina' },
]

function SubstanceGroups() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Kategorie substancji psychoaktywnych
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {substanceGroups.map((group) => (
              <li key={group.name}>
                <FadeIn>
                  <Link
                    href={`/kategorie/${group.slug}`}
                    className="group relative flex flex-col items-center justify-center rounded-2xl bg-neutral-900 p-6 transition hover:bg-neutral-800"
                  >
                    <div className="text-5xl mb-3">{group.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{group.name}</h3>
                    <p className="text-xs text-neutral-400 text-center">{group.description}</p>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
        <FadeIn className="mt-10 flex justify-center">
          <Link
            href="/kategorie"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            Zobacz pelna encyklopedie
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </FadeIn>
      </Container>
    </div>
  )
}

const substanceReports = [
  {
    id: 'kokaina-trip-1',
    name: 'Kokaina',
    icon: '❄️',
    category: 'Stymulant',
    date: '2024-12',
    summary:
      'Silny stymulant układu nerwowego wydobywany z liści koki. Powoduje euforię, zwiększoną energię i pewność siebie.',
    riskLevel: 'Wysokie ryzyko',
    duration: '30-90 min',
    reports: 247,
  },
  {
    id: 'benzydamina-trip-1',
    name: 'Benzydamina',
    icon: '💊',
    category: 'Dysocjant/Deliriant',
    date: '2024-11',
    summary:
      'Lek przeciwzapalny dostępny bez recepty, w wysokich dawkach wywołuje efekty halucynogenne i dysocjacyjne.',
    riskLevel: 'Średnie ryzyko',
    duration: '6-8 godzin',
    reports: 89,
  },
  {
    id: 'bielun-trip-1',
    name: 'Bieluń',
    icon: '🌿',
    category: 'Deliriant',
    date: '2024-10',
    summary:
      'Roślina zawierająca toksyczne alkaloidy tropanowe. Wywołuje ciężkie delirium, halucynacje i może być śmiertelna.',
    riskLevel: 'Ekstremalnie niebezpieczne',
    duration: '8-24 godziny',
    reports: 34,
  },
]

function SubstanceReports() {
  return (
    <>
      <SectionIntro
        title="Najnowsze raporty użytkowników"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Rzeczywiste doświadczenia osób, które używały różnych substancji psychoaktywnych.
          Dowiedz się o efektach, dawkowaniu i potencjalnych zagrożeniach.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {substanceReports.map((report) => (
            <FadeIn key={report.id} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <div className="flex items-start justify-between">
                  <div className="text-4xl">{report.icon}</div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                    report.riskLevel === 'Ekstremalnie niebezpieczne' 
                      ? 'bg-red-100 text-red-800' 
                      : report.riskLevel === 'Wysokie ryzyko'
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {report.riskLevel}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  <Link href={`/raporty/${report.id}`}>
                    <span className="absolute inset-0 rounded-3xl" />
                    {report.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm font-semibold text-neutral-600">
                  {report.category}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {report.summary}
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600">
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{report.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <span>{report.reports} raportów</span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
        <FadeIn className="mt-10 flex justify-center">
          <Link
            href="/raporty"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Zobacz wszystkie raporty
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </FadeIn>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-4xl">
          <h1 className="text-4xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Dowiedz się więcej o substancjach i bądź bezpieczny
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Rzetelne, neutralne informacje o substancjach psychoaktywnych — efekty, dawkowanie i bezpieczeństwo.
          </p>
        </FadeIn>
      </Container>

      <SubstanceGroups />

      <SubstanceReports />

      {/* Safe Use Principles Section */}
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                Zasady bezpiecznego używania
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Jeśli zdecydowałeś się na użycie substancji psychoaktywnej, te zasady pomogą Ci zminimalizować ryzyko
              </p>
            </div>
          </FadeIn>

          <div className="mx-auto mt-16 max-w-5xl">
            <FadeInStagger className="space-y-6">
              {/* Step 1 */}
              <FadeIn>
                <div className="group relative flex gap-6 rounded-3xl bg-neutral-50 p-8 transition hover:bg-neutral-100">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 font-display text-xl font-bold text-white">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-neutral-950">
                      Zidentyfikuj substancję
                    </h3>
                    <p className="mt-2 text-base text-neutral-600">
                      Używaj testów reagentowych aby upewnić się, że to co masz jest tym czym powinno być.
                      Fentanyl i inne zanieczyszczenia mogą być śmiertelne.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        Testy reagentowe
                      </span>
                      <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        Weryfikacja źródła
                      </span>
                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                        Krytyczne
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Step 2 */}
              <FadeIn>
                <div className="group relative flex gap-6 rounded-3xl bg-neutral-50 p-8 transition hover:bg-neutral-100">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 font-display text-xl font-bold text-white">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-neutral-950">
                      Poznaj dawkowanie
                    </h3>
                    <p className="mt-2 text-base text-neutral-600">
                      Sprawdź bezpieczne dawki dla Twojej masy ciała. Zawsze zaczynaj od najmniejszej efektywnej dawki.
                      Możesz zawsze wziąć więcej, ale nigdy mniej.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        Wagę precyzyjną
                      </span>
                      <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        Start low, go slow
                      </span>
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
                        Bardzo ważne
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Step 3 */}
              <FadeIn>
                <div className="group relative flex gap-6 rounded-3xl bg-neutral-50 p-8 transition hover:bg-neutral-100">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 font-display text-xl font-bold text-white">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-neutral-950">
                      Przygotuj Set & Setting
                    </h3>
                    <p className="mt-2 text-base text-neutral-600">
                      Używaj w bezpiecznym, komfortowym miejscu z zaufanymi osobami. Upewnij się, że Twój nastrój
                      (set) i otoczenie (setting) są odpowiednie.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        Bezpieczne miejsce
                      </span>
                      <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        Dobry nastrój
                      </span>
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                        Ważne
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Step 4 */}
              <FadeIn>
                <div className="group relative flex gap-6 rounded-3xl bg-neutral-50 p-8 transition hover:bg-neutral-100">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 font-display text-xl font-bold text-white">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-neutral-950">
                      Miej tripsittera
                    </h3>
                    <p className="mt-2 text-base text-neutral-600">
                      Nigdy nie używaj sam, szczególnie nowych substancji lub wysokich dawek. Osoba trzeźwa może
                      pomóc w sytuacji kryzysowej i wezwać pomoc.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        Trzeźwy przyjaciel
                      </span>
                      <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        Dostęp do telefonu
                      </span>
                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                        Krytyczne
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Step 5 */}
              <FadeIn>
                <div className="group relative flex gap-6 rounded-3xl bg-neutral-50 p-8 transition hover:bg-neutral-100">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 font-display text-xl font-bold text-white">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-neutral-950">
                      Sprawdź interakcje
                    </h3>
                    <p className="mt-2 text-base text-neutral-600">
                      Nigdy nie mieszaj substancji bez sprawdzenia możliwych interakcji. Niektóre kombinacje są
                      śmiertelnie niebezpieczne (np. MDMA + MAOI, alkohol + benzodiazepiny).
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        Baza interakcji
                      </span>
                      <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        Leki na receptę
                      </span>
                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                        Krytyczne
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Step 6 */}
              <FadeIn>
                <div className="group relative flex gap-6 rounded-3xl bg-neutral-50 p-8 transition hover:bg-neutral-100">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 font-display text-xl font-bold text-white">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-neutral-950">
                      Zaplanuj aftercare
                    </h3>
                    <p className="mt-2 text-base text-neutral-600">
                      Przygotuj się na dzień po: nawodnij się, jedz zdrowo, odpoczywaj. Niektóre substancje mogą
                      powodować hangover lub depresję – bądź na to przygotowany.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        Elektrolity
                      </span>
                      <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        Witaminy
                      </span>
                      <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
                        Odpoczynek
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </FadeInStagger>

            {/* Bottom Banner */}
            <FadeIn>
              <div className="mt-12 rounded-3xl bg-neutral-950 px-8 py-8 text-center">
                <div className="flex items-center justify-center gap-3 text-white">
                  <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="text-sm font-medium sm:text-base">
                    W sytuacji zagrożenia życia <span className="font-bold">ZAWSZE</span> dzwoń na 112 lub 999.
                    Nie bój się - ustawy dobrego samarytanina chronią wzywających pomoc.
                  </p>
                </div>
                <Link
                  href="/redukcja-szkod"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
                >
                  Dowiedz się więcej o redukcji szkód
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>

      {/*<Services />*/}

      <ContactSection />
    </RootLayout>
  )
}
