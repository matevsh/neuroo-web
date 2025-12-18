import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Raporty Użytkowników | Neuroo',
  description:
    'Raporty doświadczeń użytkowników substancji psychoaktywnych. Nauka z pierwszej ręki i edukacja harm reduction.',
}

const substanceReports = [
  {
    id: 'kokaina-trip-1',
    slug: 'kokaina-trip-1',
    substancja: 'Kokaina',
    icon: '❄️',
    category: 'Stymulant',
    dawkowanie: '100mg (2 linie)',
    rodzajPrzezycia: 'Rekreacyjne',
    setSetting: 'Impreza domowa z przyjaciółmi',
    wiek: 26,
    doswiadczenie: 'Średnie (10-20 razy)',
    date: '2024-12-10',
    title: 'Moja pierwsza próba kokainy na imprezie',
    summary: 'Intensywna energia i pewność siebie, która szybko minęła. Euforyczny stan trwał około 45 minut.',
    riskLevel: 'Wysokie ryzyko',
    duration: '45 min',
    autor: 'Użytkownik_247'
  },
  {
    id: 'benzydamina-trip-1',
    slug: 'benzydamina-trip-1',
    substancja: 'Benzydamina',
    icon: '💊',
    category: 'Dysocjant/Deliriant',
    dawkowanie: '500mg (10 tabletek)',
    rodzajPrzezycia: 'Eksperymentalne',
    setSetting: 'W domu, sam',
    wiek: 22,
    doswiadczenie: 'Początkujący (1-5 razy)',
    date: '2024-11-28',
    title: 'Nieoczekiwane halucynacje z leku na ból gardła',
    summary: 'Wizualne zniekształcenia i dezorientacja. Efekty dysocjacyjne były silniejsze niż się spodziewałem.',
    riskLevel: 'Średnie ryzyko',
    duration: '6 godzin',
    autor: 'Użytkownik_089'
  },
  {
    id: 'bielun-trip-1',
    slug: 'bielun-trip-1',
    substancja: 'Bieluń',
    icon: '🌿',
    category: 'Deliriant',
    dawkowanie: '3 nasiona',
    rodzajPrzezycia: 'Negatywne/Ostrzeżenie',
    setSetting: 'W domu, obecność tripsittera',
    wiek: 19,
    doswiadczenie: 'Brak (pierwszy raz)',
    date: '2024-10-15',
    title: 'OSTRZEŻENIE: Przerażające delirium z bieluni',
    summary: 'Całkowita utrata kontaktu z rzeczywistością. Rozmowy z nieistniejącymi osobami. Ekstremalnie niebezpieczne.',
    riskLevel: 'Ekstremalnie niebezpieczne',
    duration: '14 godzin',
    autor: 'Użytkownik_034'
  }
]

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

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {substanceReports.map((report) => (
            <FadeIn key={report.id}>
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
                  <Link href={`/raporty/${report.slug}`}>
                    <span className="absolute inset-0 rounded-3xl" />
                    {report.title}
                  </Link>
                </h3>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm font-semibold text-neutral-600">
                    {report.substancja}
                  </span>
                  <span className="text-neutral-300">•</span>
                  <span className="text-sm text-neutral-500">
                    {report.category}
                  </span>
                </div>

                <p className="mt-4 text-base text-neutral-600">
                  {report.summary}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="block text-xs text-neutral-500">Dawkowanie</span>
                    <span className="font-medium text-neutral-900">{report.dawkowanie}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-500">Doświadczenie</span>
                    <span className="font-medium text-neutral-900">{report.doswiadczenie}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-sm text-neutral-600">
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{report.duration}</span>
                  </div>
                  <span className="text-xs text-neutral-500">{report.date}</span>
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 px-8 py-10 shadow-2xl">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-white blur-3xl" />
            </div>

            <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-8">
              {/* Icon and text section */}
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-display font-semibold text-white sm:text-2xl">
                    Podziel się swoim doświadczeniem
                  </h2>
                  <p className="mt-1 text-sm text-neutral-300">
                    Twój raport może uratować czyjeś życie
                  </p>
                </div>
              </div>

              {/* Button section */}
              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg transition hover:bg-neutral-100 hover:shadow-xl"
                >
                  <span>Dodaj raport</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}

