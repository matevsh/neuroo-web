import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import { RootLayout } from '@/components/RootLayout'
import { PageIntro } from '@/components/PageIntro'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Redukcja Szkód | Neuroo',
  description:
    'Kompleksowy przewodnik po zasadach harm reduction. Edukacja, bezpieczeństwo i świadome podejście do substancji psychoaktywnych.',
}

interface PrincipleCardProps {
  icon: string
  title: string
  description: string
  items: string[]
  color: 'green' | 'blue' | 'purple' | 'orange'
  delay?: number
  number: number
}

const COLOR_STYLES = {
  green: {
    gradient: 'from-emerald-500/10 via-green-500/5 to-teal-500/10',
    glow: 'shadow-emerald-500/20',
    icon: 'from-emerald-400 to-green-500',
    badge: 'bg-gradient-to-br from-emerald-50 to-green-50',
    badgeText: 'text-emerald-700',
    number: 'text-emerald-500/30',
    check: 'bg-emerald-500',
    checkRing: 'ring-emerald-500/20',
    hover: 'hover:shadow-emerald-500/30',
  },
  blue: {
    gradient: 'from-blue-500/10 via-cyan-500/5 to-blue-500/10',
    glow: 'shadow-blue-500/20',
    icon: 'from-blue-400 to-cyan-500',
    badge: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    badgeText: 'text-blue-700',
    number: 'text-blue-500/30',
    check: 'bg-blue-500',
    checkRing: 'ring-blue-500/20',
    hover: 'hover:shadow-blue-500/30',
  },
  purple: {
    gradient: 'from-purple-500/10 via-violet-500/5 to-fuchsia-500/10',
    glow: 'shadow-purple-500/20',
    icon: 'from-purple-400 to-fuchsia-500',
    badge: 'bg-gradient-to-br from-purple-50 to-fuchsia-50',
    badgeText: 'text-purple-700',
    number: 'text-purple-500/30',
    check: 'bg-purple-500',
    checkRing: 'ring-purple-500/20',
    hover: 'hover:shadow-purple-500/30',
  },
  orange: {
    gradient: 'from-orange-500/10 via-amber-500/5 to-orange-500/10',
    glow: 'shadow-orange-500/20',
    icon: 'from-orange-400 to-amber-500',
    badge: 'bg-gradient-to-br from-orange-50 to-amber-50',
    badgeText: 'text-orange-700',
    number: 'text-orange-500/30',
    check: 'bg-orange-500',
    checkRing: 'ring-orange-500/20',
    hover: 'hover:shadow-orange-500/30',
  },
}

function PrincipleCard({ icon, title, description, items, color, delay = 0, number }: PrincipleCardProps) {
  const styles = COLOR_STYLES[color]

  return (
    <div
      className="group/principle relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background number watermark */}
      <div className="absolute -top-8 left-8 z-0 select-none">
        <span className={clsx(
          'font-display text-[180px] font-black leading-none tracking-tighter transition-all duration-700',
          styles.number,
          'group-hover/principle:scale-110'
        )}>
          {number}
        </span>
      </div>

      {/* Main card */}
      <div className={clsx(
        'relative overflow-hidden rounded-[32px] bg-white shadow-xl shadow-black/5 transition-all duration-700',
        'group-hover/principle:shadow-2xl',
        styles.hover
      )}>
        {/* Gradient overlay */}
        <div className={clsx(
          'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-700',
          styles.gradient,
          'group-hover/principle:opacity-100'
        )} />

        {/* Animated border */}
        <div className="absolute inset-0 rounded-[32px] opacity-0 ring-1 ring-inset ring-white/40 transition-opacity duration-700 group-hover/principle:opacity-100" />

        <div className="relative p-8 sm:p-10">
          {/* Header section */}
          <div className="mb-8 flex items-start gap-5">
            {/* Icon with premium gradient - improved visibility */}
            <div className="relative shrink-0">
              {/* Glow effect */}
              <div className={clsx(
                'absolute inset-0 rounded-3xl bg-gradient-to-br opacity-20 blur-xl transition-all duration-700',
                styles.icon,
                'group-hover/principle:scale-150 group-hover/principle:opacity-40'
              )} />

              {/* Icon container with white backdrop for contrast */}
              <div className="relative">
                <div className={clsx(
                  'flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-700',
                  'group-hover/principle:scale-110 group-hover/principle:shadow-xl'
                )}>
                  <span className="text-4xl filter drop-shadow-md">
                    {icon}
                  </span>
                </div>
              </div>
            </div>

            {/* Title and description */}
            <div className="flex-1 pt-1">
              <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">
                {description}
              </p>
            </div>
          </div>

          {/* Items list with premium checkmarks */}
          <div className="space-y-3">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="group/item relative overflow-hidden rounded-2xl bg-gradient-to-r from-neutral-50/50 to-white p-5 transition-all duration-500 hover:from-neutral-50 hover:to-white hover:shadow-md"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Premium checkmark */}
                  <div className="relative mt-0.5 shrink-0">
                    <div className={clsx(
                      'absolute inset-0 rounded-full opacity-0 blur-md transition-all duration-500',
                      styles.check,
                      'group-hover/item:opacity-30'
                    )} />
                    <div className={clsx(
                      'relative flex h-6 w-6 items-center justify-center rounded-full shadow-sm ring-4 transition-all duration-500',
                      styles.check,
                      styles.checkRing,
                      'group-hover/item:scale-110 group-hover/item:shadow-md'
                    )}>
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Text content */}
                  <p className="flex-1 pt-0.5 text-base leading-relaxed text-neutral-700 transition-colors duration-300 group-hover/item:text-neutral-950">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface ResourceCardProps {
  title: string
  description: string
  icon: string
  link: string
  external?: boolean
}

function ResourceCard({ title, description, icon, link, external = false }: ResourceCardProps) {
  return (
    <Link
      href={link}
      className="group/resource relative flex flex-col overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-neutral-950/5 transition-all duration-300 hover:bg-neutral-50 hover:ring-neutral-950/10"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-2xl transition-transform duration-300 group-hover/resource:scale-105">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold text-neutral-950">
        {title}
        {external && (
          <svg
            className="ml-2 inline-block h-4 w-4 opacity-0 transition-all duration-300 group-hover/resource:translate-x-0.5 group-hover/resource:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        )}
      </h3>
      <p className="mt-2 flex-1 text-sm text-neutral-600">
        {description}
      </p>
    </Link>
  )
}

export default function RedukcjaSzkodPage() {
  const corePrinciples: PrincipleCardProps[] = [
    {
      number: 1,
      icon: '🧪',
      title: 'Testuj substancje',
      description: 'Zawsze weryfikuj czystość i skład substancji przed użyciem.',
      color: 'green',
      items: [
        'Używaj zestawów testowych (reagentów) do identyfikacji substancji',
        'Testuj każdą nową partię, nawet od zaufanego źródła',
        'Pamiętaj że testy reagentowe mają ograniczenia - nie pokazują czystości ani wszystkich zanieczyszczeń',
        'Rozważ laboratoryjne analizy substancji w profesjonalnych punktach',
        'Jeśli nie możesz przetestować, nie używaj lub zachowaj szczególną ostrożność',
      ],
    },
    {
      number: 2,
      icon: '⚖️',
      title: 'Dawkowanie',
      description: 'Precyzyjne dawkowanie to klucz do bezpieczeństwa.',
      color: 'blue',
      items: [
        'Zawsze używaj wagi elektronicznej z dokładnością co najmniej 0.001g (miligram)',
        'Zaczynaj od małych dawek, szczególnie z nową substancją lub partią',
        'Poczekaj na pełne działanie przed redozowaniem (różne substancje mają różny czas początkowego działania)',
        'Prowadź dziennik dawek - zapisuj co, ile i kiedy zażywasz',
        'Pamiętaj o tolerancji i cross-tolerancji między substancjami',
      ],
    },
    {
      number: 3,
      icon: '🌟',
      title: 'Set i Setting',
      description: 'Środowisko i stan psychiczny są równie ważne jak substancja.',
      color: 'purple',
      items: [
        'Set (nastawienie): Bądź w dobrym stanie psychicznym, unikaj używania w złym nastroju',
        'Setting (otoczenie): Wybierz bezpieczne, komfortowe miejsce z zaufanymi osobami',
        'Zaplanuj doświadczenie - upewnij się że masz wystarczająco czasu',
        'Zadbaj o podstawowe potrzeby: wodę, jedzenie, odpowiednią temperaturę',
        'Rozważ obecność trzeźwego opiekuna (trip sitter), szczególnie przy psychodelikach',
      ],
    },
    {
      number: 4,
      icon: '⚠️',
      title: 'Znaj ryzyko',
      description: 'Edukacja i świadomość zagrożeń chroni Cię najlepiej.',
      color: 'orange',
      items: [
        'Poznaj farmakologię, efekty uboczne i interakcje substancji przed użyciem',
        'Sprawdź przeciwwskazania medyczne - niektóre schorzenia wykluczają używanie',
        'Nigdy nie łącz substancji bez sprawdzenia interakcji - niektóre kombinacje są śmiertelne',
        'Zapoznaj się z objawami przedawkowania i pierwszą pomocą',
        'Miej przy sobie numer alarmowy i nie bój się wzywać pomocy w nagłych przypadkach',
      ],
    },
  ]

  const additionalTips = [
    {
      icon: '💧',
      title: 'Nawodnienie',
      items: [
        'Pij wodę regularnie, ale nie przesadzaj (max 500ml/godzinę)',
        'Unikaj alkoholu jako głównego źródła płynów',
        'Przy stymulantach szczególnie ważne jest uzupełnianie elektrolitów',
      ],
    },
    {
      icon: '👥',
      title: 'Nigdy sam',
      items: [
        'Zawsze informuj kogoś zaufanego o swoich planach',
        'Używaj w obecności innych osób, które mogą pomóc w razie problemu',
        'Rozważ system "buddy system" - wzajemna opieka',
      ],
    },
    {
      icon: '⏰',
      title: 'Odstępy czasowe',
      items: [
        'Zachowuj odstępy między sesjami - daj ciału czas na regenerację',
        'Częste używanie zwiększa ryzyko uzależnienia i szkód zdrowotnych',
        'Planuj minimum 2-4 tygodnie przerwy między używaniem tej samej substancji',
      ],
    },
    {
      icon: '🏥',
      title: 'Znaj sygnały alarmowe',
      items: [
        'Ból w klatce piersiowej, problemy z oddychaniem - wzywaj pomoc natychmiast',
        'Utrata przytomności, drgawki, ekstremalne zaburzenia świadomości',
        'Nie bój się wzywać pomocy medycznej - twoje życie jest najważniejsze',
      ],
    },
  ]

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <PageIntro eyebrow="Harm Reduction" title="Redukcja Szkód">
          <p>
            Kompleksowy przewodnik po zasadach bezpieczeństwa w kontekście
            substancji psychoaktywnych. Edukacja, świadomość i odpowiedzialne
            podejście to fundamenty harm reduction.
          </p>
        </PageIntro>

        {/* Co to jest Harm Reduction */}
        <FadeIn>
          <div className="mt-24">
            <Border position="left" className="pl-6">
              <div className="max-w-3xl py-8">
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Czym jest Harm Reduction?
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700">
                  <p>
                    <strong className="text-neutral-950">Harm Reduction (redukcja szkód)</strong> to
                    filozofia i zbiór praktycznych strategii mających na celu minimalizowanie
                    negatywnych konsekwencji zdrowotnych, społecznych i prawnych związanych
                    z używaniem substancji psychoaktywnych.
                  </p>
                  <p>
                    Podejście to opiera się na założeniu, że abstynencja nie zawsze jest
                    realistycznym celem dla każdego. Zamiast moralizować lub wymagać całkowitej
                    rezygnacji, harm reduction koncentruje się na praktycznych strategiach
                    zwiększających bezpieczeństwo tych, którzy decydują się na używanie substancji.
                  </p>
                  <p>
                    <strong className="text-neutral-950">Kluczowe wartości:</strong> pragmatyzm,
                    szacunek dla godności użytkowników, dostęp do rzetelnej informacji,
                    brak osądzania, oraz uznanie, że każdy krok w kierunku większego
                    bezpieczeństwa jest wartościowy.
                  </p>
                </div>
              </div>
            </Border>
          </div>
        </FadeIn>

        {/* Główne Zasady - Premium Design */}
        <div className="mt-32">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Fundamentalne zasady
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
                Cztery filary bezpiecznego podejścia do substancji psychoaktywnych. Każda zasada jest równie ważna.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger faster className="mt-20 space-y-12">
            {corePrinciples.map((principle, idx) => (
              <FadeIn key={principle.title}>
                <PrincipleCard {...principle} delay={idx * 100} />
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>

        {/* Dodatkowe Wskazówki */}
        <div className="mt-24">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Dodatkowe wskazówki
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Praktyczne rady dla większego bezpieczeństwa.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-10 grid gap-6 sm:grid-cols-2">
            {additionalTips.map((tip) => (
              <FadeIn key={tip.title}>
                <div className="group/tip relative overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-neutral-950/5 transition-all duration-300 hover:bg-neutral-50 hover:ring-neutral-950/10">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-3xl transition-transform duration-300 group-hover/tip:scale-110">
                      {tip.icon}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-neutral-950">
                      {tip.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {tip.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>

        {/* Notfallowe */}
        <FadeIn>
          <div className="mt-24 rounded-4xl bg-red-50/50 p-8 sm:p-12">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-100">
                <svg
                  className="h-6 w-6 text-red-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-red-950">
                  W sytuacji zagrożenia życia
                </h3>
                <div className="mt-4 space-y-3 text-sm text-red-900">
                  <p>
                    <strong>Numer alarmowy: 112</strong> (Pogotowie Ratunkowe: 999)
                  </p>
                  <p>
                    Jeśli Ty lub ktoś w Twoim otoczeniu doświadcza poważnych objawów
                    (utrata przytomności, drgawki, problemy z oddychaniem, ból w klatce
                    piersiowej) - <strong>natychmiast wzywaj pomoc medyczną</strong>.
                  </p>
                  <p>
                    <strong>Nie bój się konsekwencji prawnych</strong> - życie jest
                    najważniejsze. Personel medyczny jest po to, by pomóc, nie osądzać.
                    W Polsce obowiązuje "klauzula dobrego Samarytanina" chroniąca
                    wzywających pomoc.
                  </p>
                  <p>
                    <strong>Co przekazać dyspozytorowi:</strong> dokładna lokalizacja,
                    objawy, jeśli wiesz - nazwa substancji i przybliżona dawka (bez tej
                    informacji też pomogą, ale ułatwia to leczenie).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Zasoby i Linki */}
        <div className="mt-24">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Zasoby i dalsze informacje
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Sprawdzone źródła wiedzy i wsparcia.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FadeIn>
              <ResourceCard
                icon="📚"
                title="Encyklopedia substancji"
                description="Pełna baza wiedzy o poszczególnych substancjach psychoaktywnych."
                link="/kategorie"
              />
            </FadeIn>
            <FadeIn>
              <ResourceCard
                icon="🧪"
                title="Zestawy testowe"
                description="Informacje o testowaniu substancji i gdzie kupić reagenty."
                link="https://www.reagent-tests.uk/"
                external
              />
            </FadeIn>
            <FadeIn>
              <ResourceCard
                icon="💊"
                title="Interakcje"
                description="Sprawdź jak różne substancje wchodzą ze sobą w interakcje."
                link="/kategorie"
              />
            </FadeIn>
            <FadeIn>
              <ResourceCard
                icon="📖"
                title="PsychonautWiki"
                description="Międzynarodowa encyklopedia substancji psychoaktywnych."
                link="https://psychonautwiki.org/"
                external
              />
            </FadeIn>
            <FadeIn>
              <ResourceCard
                icon="🔬"
                title="Erowid"
                description="Największa baza raportów i informacji naukowych."
                link="https://erowid.org/"
                external
              />
            </FadeIn>
            <FadeIn>
              <ResourceCard
                icon="☎️"
                title="Pomoc i wsparcie"
                description="Skontaktuj się z nami jeśli potrzebujesz pomocy."
                link="/contact"
              />
            </FadeIn>
          </FadeInStagger>
        </div>

        {/* Disclaimer */}
        <FadeIn>
          <div className="mt-24 rounded-3xl bg-neutral-100 p-8">
            <p className="text-sm text-neutral-600">
              <strong className="text-neutral-950">Zastrzeżenie prawne:</strong> Informacje
              przedstawione na tej stronie mają charakter wyłącznie edukacyjny i nie stanowią
              zachęty do używania substancji psychoaktywnych. Neuroo nie promuje ani nie
              popiera nielegalnego używania jakichkolwiek substancji. Zawsze przestrzegaj
              lokalnego prawa i konsultuj się z profesjonalistami medycznymi.
            </p>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}

