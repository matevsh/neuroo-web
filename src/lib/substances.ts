// Typy kategorii substancji
export type SubstanceCategory =
  | 'psychodeliki'
  | 'dysocjanty'
  | 'stymulanty'
  | 'depresanty'
  | 'kannabinoidy'
  | 'opioidy'
  | 'empatogeny'
  | 'nootropiki'

// Poziomy dawkowania
export type DoseLevel = 'prog' | 'lekka' | 'srednia' | 'silna' | 'bardzo-silna'

// Drogi podania
export type RouteOfAdministration =
  | 'doustnie'
  | 'donosowo'
  | 'wziewnie'
  | 'podjęzykowo'
  | 'domięśniowo'
  | 'dożylnie'
  | 'doodbytniczo'

// Poziomy ryzyka interakcji
export type InteractionSeverity =
  | 'bezpieczna'
  | 'synergia'
  | 'ostrożność'
  | 'niebezpieczna'
  | 'zagrożenie-życia'

// Status prawny
export type LegalStatus = 'legalna' | 'kontrolowana' | 'nielegalna' | 'szara-strefa'

// Informacje o dawkowaniu
export interface DosageInfo {
  route: RouteOfAdministration
  prog?: string
  lekka?: string
  srednia?: string
  silna?: string
  bardzoSilna?: string
  jednostka: string
  uwagi?: string
}

// Faza osi czasu efektów
export interface TimelinePhase {
  nazwa: string
  poczatek: string
  koniec: string
  opis?: string
}

// Interakcja z inną substancją
export interface Interaction {
  substancja: string
  slug?: string
  kategoria?: SubstanceCategory
  poziom: InteractionSeverity
  opis: string
}

// Informacje harm reduction
export interface HarmReductionInfo {
  zasadyOgolne: string[]
  setISetting: string[]
  przeciwwskazania: string[]
  znakiOstrzegawcze: string[]
  pierwszaPomoc?: string[]
}

// Główny interfejs substancji
export interface Substance {
  // Podstawowe informacje
  nazwa: string
  nazwyAlternatywne: string[]
  nazwaSystematyczna?: string
  wzorChemiczny?: string
  kategoria: SubstanceCategory
  slug: string

  // Klasyfikacja
  klasaPrawna: LegalStatus
  grupaChemiczna?: string

  // Efekty
  efektyGlowne: string[]
  efektyUboczne: string[]

  // Czas działania
  czasDzialania: {
    poczatek: string
    szczyt: string
    calkowity: string
    popierwsze?: string
  }
  osCzasu?: TimelinePhase[]

  // Dawkowanie
  dawkowanie: DosageInfo[]
  tolerancja?: {
    pelna: string
    polowa: string
    zero: string
  }

  // Harm reduction
  harmReduction: HarmReductionInfo

  // Interakcje
  interakcje: Interaction[]

  // SEO i metadata
  opis: string
  dataAktualizacji: string

  // Opcjonalne
  obrazek?: string
  zrodla?: string[]
  powiazane?: string[]
}

// Metadane kategorii
export interface CategoryInfo {
  nazwa: string
  slug: SubstanceCategory
  opis: string
  opisRozszerzony: string
  icon: string
  kolor: string
  mechanizmDzialania: string
}

// Stałe kategorii z pełnymi metadanymi
export const CATEGORIES: Record<SubstanceCategory, CategoryInfo> = {
  psychodeliki: {
    nazwa: 'Psychodeliki',
    slug: 'psychodeliki',
    opis: 'LSD, psylocybina, meskalina',
    opisRozszerzony:
      'Substancje wywołujące głębokie zmiany w percepcji, myśleniu i emocjach. Działają głównie poprzez receptory serotoninowe 5-HT2A.',
    icon: '🍄',
    kolor: 'purple',
    mechanizmDzialania:
      'Agoniści receptorów serotoninowych 5-HT2A, powodujący zmiany w komunikacji między obszarami mózgu.',
  },
  dysocjanty: {
    nazwa: 'Dysocjanty',
    slug: 'dysocjanty',
    opis: 'Ketamina, DXM, PCP',
    opisRozszerzony:
      'Substancje powodujące uczucie odłączenia od ciała i otoczenia. Działają głównie jako antagoniści receptorów NMDA.',
    icon: '🌀',
    kolor: 'blue',
    mechanizmDzialania:
      'Antagoniści receptorów NMDA glutaminianu, blokujący normalną transmisję sygnałów.',
  },
  stymulanty: {
    nazwa: 'Stymulanty',
    slug: 'stymulanty',
    opis: 'Amfetamina, kofeina, kokaina',
    opisRozszerzony:
      'Substancje zwiększające aktywność ośrodkowego układu nerwowego, poprawiające energię, koncentrację i nastrój.',
    icon: '⚡',
    kolor: 'yellow',
    mechanizmDzialania:
      'Zwiększają poziom dopaminy i noradrenaliny poprzez blokowanie wychwytu zwrotnego lub zwiększanie uwalniania.',
  },
  depresanty: {
    nazwa: 'Depresanty',
    slug: 'depresanty',
    opis: 'Alkohol, benzodiazepiny, GHB',
    opisRozszerzony:
      'Substancje hamujące aktywność ośrodkowego układu nerwowego, wywołujące relaksację i sedację.',
    icon: '😴',
    kolor: 'gray',
    mechanizmDzialania:
      'Wzmacniają działanie GABA (głównego neuroprzekaźnika hamującego) lub bezpośrednio hamują OUN.',
  },
  kannabinoidy: {
    nazwa: 'Kannabinoidy',
    slug: 'kannabinoidy',
    opis: 'THC, CBD, syntetyczne kannabinoidy',
    opisRozszerzony:
      'Substancje działające na endokannabinoidowy system organizmu, wywołujące relaksację i zmiany percepcji.',
    icon: '🌿',
    kolor: 'green',
    mechanizmDzialania:
      'Agoniści receptorów kannabinoidowych CB1 (mózg) i CB2 (układ odpornościowy).',
  },
  opioidy: {
    nazwa: 'Opioidy',
    slug: 'opioidy',
    opis: 'Morfina, kodeina, fentanyl',
    opisRozszerzony:
      'Substancje działające na receptory opioidowe, wywołujące silną analgezję i euforię. Wysokie ryzyko uzależnienia.',
    icon: '💊',
    kolor: 'red',
    mechanizmDzialania:
      'Agoniści receptorów opioidowych μ, κ i δ, hamujący przekaźnictwo bólu i wywołujący uwalnianie dopaminy.',
  },
  empatogeny: {
    nazwa: 'Empatogeny',
    slug: 'empatogeny',
    opis: 'MDMA, MDA, 6-APB',
    opisRozszerzony:
      'Substancje zwiększające empatię, bliskość emocjonalną i towarzyskość. Łączą cechy stymulantów i psychodelików.',
    icon: '❤️',
    kolor: 'pink',
    mechanizmDzialania:
      'Masowe uwalnianie serotoniny, dopaminy i noradrenaliny, szczególnie serotoniny.',
  },
  nootropiki: {
    nazwa: 'Nootropiki',
    slug: 'nootropiki',
    opis: 'Modafinil, racetamy, L-teanina',
    opisRozszerzony:
      'Substancje poprawiające funkcje poznawcze: pamięć, koncentrację, kreatywność. Zwykle dobrze tolerowane.',
    icon: '🧠',
    kolor: 'cyan',
    mechanizmDzialania:
      'Różnorodne mechanizmy: modulacja neuroprzekaźników, poprawa przepływu krwi, neuroprotekcja.',
  },
}

// Helper do pobierania kategorii po slug
export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return CATEGORIES[slug as SubstanceCategory]
}

// Helper do walidacji kategorii
export function isValidCategory(slug: string): slug is SubstanceCategory {
  return slug in CATEGORIES
}

// Kolory dla poziomów ryzyka interakcji
export const INTERACTION_COLORS: Record<InteractionSeverity, { bg: string; text: string; border: string }> = {
  'bezpieczna': {
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-300',
  },
  'synergia': {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    border: 'border-blue-300',
  },
  'ostrożność': {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    border: 'border-yellow-300',
  },
  'niebezpieczna': {
    bg: 'bg-orange-100',
    text: 'text-orange-800',
    border: 'border-orange-300',
  },
  'zagrożenie-życia': {
    bg: 'bg-red-100',
    text: 'text-red-800',
    border: 'border-red-300',
  },
}

// Kolory dla poziomów dawkowania
export const DOSE_COLORS: Record<DoseLevel, { bg: string; text: string }> = {
  'prog': { bg: 'bg-gray-100', text: 'text-gray-700' },
  'lekka': { bg: 'bg-green-100', text: 'text-green-800' },
  'srednia': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  'silna': { bg: 'bg-orange-100', text: 'text-orange-800' },
  'bardzo-silna': { bg: 'bg-red-100', text: 'text-red-800' },
}

// Kolory dla statusu prawnego
export const LEGAL_STATUS_COLORS: Record<LegalStatus, { bg: string; text: string }> = {
  'legalna': { bg: 'bg-green-100', text: 'text-green-800' },
  'kontrolowana': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  'nielegalna': { bg: 'bg-red-100', text: 'text-red-800' },
  'szara-strefa': { bg: 'bg-gray-100', text: 'text-gray-800' },
}

// Etykiety dla poziomów dawkowania
export const DOSE_LABELS: Record<DoseLevel, string> = {
  'prog': 'Próg',
  'lekka': 'Lekka',
  'srednia': 'Średnia',
  'silna': 'Silna',
  'bardzo-silna': 'Bardzo silna',
}

// Etykiety dla dróg podania
export const ROUTE_LABELS: Record<RouteOfAdministration, string> = {
  'doustnie': 'Doustnie',
  'donosowo': 'Donosowo',
  'wziewnie': 'Wziewnie',
  'podjęzykowo': 'Podjęzykowo',
  'domięśniowo': 'Domięśniowo',
  'dożylnie': 'Dożylnie',
  'doodbytniczo': 'Doodbytniczo',
}

// Etykiety dla poziomów interakcji
export const INTERACTION_LABELS: Record<InteractionSeverity, string> = {
  'bezpieczna': 'Bezpieczna',
  'synergia': 'Synergia',
  'ostrożność': 'Zachowaj ostrożność',
  'niebezpieczna': 'Niebezpieczna',
  'zagrożenie-życia': 'Zagrożenie życia',
}

// Etykiety dla statusu prawnego
export const LEGAL_STATUS_LABELS: Record<LegalStatus, string> = {
  'legalna': 'Legalna',
  'kontrolowana': 'Kontrolowana',
  'nielegalna': 'Nielegalna',
  'szara-strefa': 'Szara strefa',
}
