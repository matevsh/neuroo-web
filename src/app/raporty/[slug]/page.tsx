import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

// Dane raportów - w przyszłości mogą być w bazie danych
const tripReports = {
  'kokaina-trip-1': {
    id: 'kokaina-trip-1',
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
    riskLevel: 'Wysokie ryzyko',
    duration: '45 min',
    autor: 'Użytkownik_247',
    content: `
## Wstęp

Mam 26 lat i przez ostatnie kilka lat od czasu do czasu eksperymentowałem z różnymi substancjami. Zawsze byłem ostrożny, robiłem research i pilnowałem dawek. Tym razem zdecydowałem się spróbować kokainy na imprezie u znajomego.

## Przygotowanie (T-0:30)

Przed użyciem upewniłem się, że:
- Jestem w dobrym nastroju
- Otaczają mnie zaufani przyjaciele
- Nie mieszam z alkoholem (na początku)
- Mam dostęp do wody

## Początek działania (T+0:05 - T+0:10)

Już po 5 minutach od pierwszej linii (około 50mg) poczułem:
- Natychmiastowy przypływ energii
- Euforię i pewność siebie
- Chęć do rozmów
- Lekkie przyspieszenie serca
- Uczucie zdrętwienia w nosie

## Peak (T+0:15 - T+0:45)

To był najbardziej intensywny moment:
- Ekstremalna gadatliwość - nie mogłem przestać rozmawiać
- Poczucie, że wszystko jest możliwe
- Większa pewność siebie w interakcjach społecznych
- Brak zmęczenia mimo późnej godziny
- Niewielkie rozszerzenie źrenic

Wzięłem drugą linię (50mg) około T+0:30, żeby przedłużyć efekty.

## Zejście (T+0:45 - T+2:00)

Efekty zaczęły szybko spadać:
- Nagły spadek energii i nastroju
- Silna chęć wzięcia kolejnej dawki (redosing craving)
- Lekka paranoja i niepokój
- Problemy z zasypianiem
- Uczucie wyczerpania

## Następny dzień

- Lekki ból głowy
- Zmęczenie i apatia
- Nieznaczny dyskomfort w nosie
- Ogólne osłabienie nastroju

## Wnioski

**Pozytywne:**
- Intensywne efekty społeczne
- Krótki czas działania (można kontrolować)
- Nie było nudności ani innych fizycznych dyskomfortów

**Negatywne:**
- Bardzo krótkie działanie vs. cena
- Silna chęć redozowania
- Nieprzyjemne zejście
- Potencjał uzależniający jest bardzo widoczny

## Ostrzeżenia i porady

⚠️ **WAŻNE:**
- Kokaina ma bardzo wysoki potencjał uzależniający
- Nigdy nie mieszaj z alkoholem (tworzy się kokaetylen - toksyczny dla wątroby)
- Uważaj na stymulację serca - może być niebezpieczna dla osób z problemami kardiologicznymi
- Test reagent jest KONIECZNY - dużo "kokainy" to w rzeczywistości inne substancje
- Nie używaj sam - zawsze miej tripsittera

**Redukcja szkód:**
- Jeśli już używasz, rób długie przerwy między sesjami
- Nawadniaj się, ale nie przesadzaj
- Unikaj częstego używania (max raz na kilka miesięcy)
- Śledź swoje nawyki - uzależnienie pojawia się szybko

## Podsumowanie

Ocena: 6/10

Doświadczenie było interesujące, ale krótki czas działania, silna chęć redozowania i nieprzyjemne zejście sprawiają, że nie planuję powtarzać tego zbyt często. Zdecydowanie widzę, dlaczego ta substancja ma tak wysoki potencjał uzależniający.
    `
  },
  'benzydamina-trip-1': {
    id: 'benzydamina-trip-1',
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
    riskLevel: 'Średnie ryzyko',
    duration: '6 godzin',
    autor: 'Użytkownik_089',
    content: `
## Wstęp

Jestem 22-letnim studentem z pewnym doświadczeniem z psychodelikami (głównie LSD i grzybki). Przeczytałem o efektach halucynogennych benzydaminy i postanowiłem spróbować z czystej ciekawości naukowej.

## Przygotowanie

Kupiłem Tantum Verde w aptece (50mg/tabletka). Przeczytałem raporty na Reddit i PsychonautWiki. Zdecydowałem się na 500mg jako dawkę średnią.

**Set & Setting:**
- Spokojny wieczór w domu
- Rodzice wyjechali na weekend
- Telefon znajomego w pogotowiu
- Przygotowana woda i przekąski

## T+0:00 - Przyjęcie

Połknąłem 10 tabletek z wodą. Smak był okropnie gorzki mimo połykania całości.

## T+0:30 - Pierwsze efekty

Zaczęło się łagodnie:
- Lekkie zawroty głowy
- Uczucie lekkości w ciele
- Dezorientacja przestrzenna
- Trudności z koncentracją

## T+1:00 - Dysocjacja

Efekty dysocjacyjne stały się wyraźne:
- Oddzielenie od ciała (depersonalizacja)
- Świat wydawał się "nierealny"
- Ruchy były nieco niezgrabne
- Trudności z mówieniem (myślenie było szybsze niż mowa)

## T+2:00 - Peak - Halucynacje

To było najbardziej intensywne:

**Wzrokowe:**
- Wzory geometryczne na ścianach (jak na LSD ale bardziej "rozmyte")
- Przedmioty wydawały się "wibrować"
- Zniekształcenia proporcji pokoju
- Trudności z oceną odległości

**Słuchowe:**
- Słyszałem jakby ktoś szeptał (nikt nie był w domu)
- Muzyka brzmiała "dziwnie" - jakby z oddali
- Echo własnego głosu

**Mentalne:**
- Myśli skakały z tematu na temat
- Czasem zapominałem co robiłem sekundę temu
- Poczucie "podróży" ale nie tak głębokie jak psychodeliki
- Trudności z czytaniem tekstu

## T+3:00-5:00 - Plateau

Efekty się ustabilizowały:
- Utrzymująca się dysocjacja
- Łagodniejsze halucynacje
- Dziwne uczucie w ciele (nie nieprzyjemne, ale obce)
- Zero głodu
- Sucho w ustach (mimo picia wody)

## T+6:00 - Zejście

Powoli wracałem do normalności:
- Dysocjacja słabła
- Halucynacje wizualne prawie zniknęły
- Wciąż lekkie zawroty głowy
- Zmęczenie

## T+12:00 - Następny dzień

- Budziłem się zmęczony
- Lekki brain fog całe przedpołudnie
- Dziwne uczucie w żołądku
- Brak apetytu do obiadu

## Wnioski

**Pozytywne:**
- Unikalne doświadczenie dysocjacyjne
- Legalnie dostępne (choć nie do tego przeznaczone)
- Dość kontrolowalne przy tej dawce
- Ciekawe efekty wizualne

**Negatywne:**
- Nie tak przyjemne jak prawdziwe psychodeliki
- Dość długie zejście
- Uczucie "brudności" (body load)
- Potencjalnie niebezpieczne dla wątroby przy częstym użyciu

## Ostrzeżenia

⚠️ **UWAGA:**
- To jest LEK, nie narkotyk rekreacyjny
- Wysokie dawki są toksyczne dla wątroby
- Nie mieszaj z alkoholem (podwójna toksyczność dla wątroby)
- Można uzależnić się psychicznie
- Możliwe przedawkowanie - niektóre raporty opisują hospitalizacje

**Redukcja szkód:**
- Jeśli już testujesz, zacznij od niższej dawki (200-300mg)
- Używaj BARDZO rzadko (max raz na kilka miesięcy)
- Nigdy nie przekraczaj 750mg
- Miej kogoś na "phone call distance"
- Nie używaj jeśli masz problemy z wątrobą

## Podsumowanie

Ocena: 5/10

Było to interesujące doświadczenie edukacyjne, ale nie coś, co chciałbym powtarzać. Efekty były dziwne, nie "magiczne" jak prawdziwe psychodeliki. Jeśli ktoś szuka dysocjacji, ketamina (legalnie w klinikach) lub inne opcje są lepsze i bezpieczniejsze.

**Nie polecam** - używaj tylko jeśli naprawdę wiesz co robisz i masz dobry powód.
    `
  },
  'bielun-trip-1': {
    id: 'bielun-trip-1',
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
    riskLevel: 'Ekstremalnie niebezpieczne',
    duration: '14 godzin',
    autor: 'Użytkownik_034',
    content: `
# ⚠️ OSTRZEŻENIE - PRZECZYTAJ TO ⚠️

**Ten raport jest OSTRZEŻENIEM. NIE powtarzaj tego doświadczenia. Bieluń jest EKSTREMALNIE niebezpieczny i może być śmiertelny.**

Piszę to tylko po to, żeby powstrzymać innych przed popełnieniem tego samego błędu.

---

## Tło

Mam 19 lat. To było moje pierwsze "poważniejsze" doświadczenie z substancjami (wcześniej tylko alkohol i raz joint). Przeczytałem o bielunie na jakimś forum i w mojej głupiej, nastoletnią głowie pomyślałem "to rośnie w moim ogrodzie, spróbuję".

**TO BYŁA NAJGORSZA DECYZJA MOJEGO ŻYCIA.**

## Przygotowanie (lub brak)

Nie robiłem research. Nie wiedziałem nic o alkaloidy tropanowych, nie testowałem dawki, nie miałem planu. Mój przyjaciel zgodził się być "tripsitterem" (też nie wiedział co robi).

Zerwałem 3 nasiona z bieluni rosnącego za domem. Zjadłem je wieczorem około 20:00.

## T+0:30 - Pierwsze sygnały

- Sucho w ustach (ekstremalnie)
- Rozszerzone źrenice (ogromne)
- Niewyraźne widzenie
- Przyspieszony puls

Pomyślałem "okej, coś zaczyna działać". Nie miałem pojęcia co mnie czeka.

## T+1:00 - Zaczyna się koszmar

Reality zaczęło się rozpadać, ale nie w "fajny" sposób jak na psychodelikach. W przerażający sposób.

- Nie mogłem rozróżnić co jest prawdziwe a co nie
- Widziałem ludzi którzy tam nie byli
- Rozmawiałem z nimi jakby byli prawdziwi

Mój tripsitter mówił, że rozmawiałem z pustą ścianą przez 10 minut.

## T+2:00-8:00 - PEŁNE DELIRIUM

**Nie pamiętam większości z tego czasu.** Poniższe informacje pochodzą od mojego przyjaciela:

- Próbowałem wyjść z domu (myślałem że muszę iść do szkoły o 3 w nocy)
- Rozmawiałem z nieistniejącymi osobami
- Papierosy "pojawiały się" w mojej ręce (halucynacje dotykowe)
- Zdejmowałem ubrania bo było mi gorąco (moja temperatura była podwyższona)
- Próbowałem pić wodę ze szklanki która była pusta
- Byłem kompletnie inną osobą - agresywny, przestraszony, paranoidalny

**TO NIE BYŁY HALUCYNACJE JAK NA LSD. TO BYŁO PEŁNE DELIRIUM - CAŁKOWITA UTRATA KONTAKTU Z RZECZYWISTOŚCIĄ.**

## T+8:00 - Szpital

Mój przyjaciel w końcu zadzwonił po karetkę kiedy zacząłem mieć drgawki.

W szpitalu:
- Nie pamiętam przyjazdu
- Podobno byłem agresywny wobec personelu
- Podali mi jakieś leki (benzodiazepiny?)
- Zostałem na obserwacji

## T+14:00 - Wracam do siebie

Powoli zaczęło do mnie docierać gdzie jestem. Wciąż:
- Ogromne źrenice
- Zamglone widzenie
- Sucho w ustach
- Dezorientacja
- Lęk i paranoja

## Następne dni

- 2 dni później wciąż miałem problemy z widzeniem
- Koszmarami nocne przez tydzień
- Lęk i depresja
- PTSD z tego doświadczenia

## Co poszło nie tak (WSZYSTKO)

1. **Zero research** - nie wiedziałem że alkaloidy tropanowe są toksyczne
2. **Niewłaściwa dawka** - nasiona bieluni mają BARDZO zmienną zawartość alkaloidów - mogłem się otruć na śmierć
3. **Niewykwalifikowany tripsitter** - mój przyjaciel nie był przygotowany
4. **Brak testowania** - to nie jest substancja "rekreacyjna"
5. **Lekkomyślność i brawura** - myślałem że "to tylko roślina"

## DLACZEGO PISZĘ TO

**NIGDY, PRZENIGDY NIE UŻYWAJ BIELUNI ANI ŻADNEGO INNEGO DELIRIANTU.**

Powody:
- ❌ Ekstremalna toksyczność (łatwo o przedawkowanie)
- ❌ Całkowita utrata kontroli
- ❌ Zero "przyjemnych" efektów
- ❌ Długotrwałe konsekwencje psychiczne
- ❌ Prawdziwe ryzyko śmierci
- ❌ Możliwość zrobienia sobie krzywdy w delirium
- ❌ Możliwość skrzywdzenia innych

## Co powiedziałby profesjonalista

Lekarz w szpitale był szczery: "Miałeś szczęście. Ludzie umierają od bieluni. Inni kończą w psychiatryku. Nigdy więcej tego nie rób."

## Porównanie do innych substancji

To NIE jest jak:
- ✗ LSD (to jest kontrolowane, kolorowe, może być piękne)
- ✗ Grzybki (to jest introspektywne, naturalne)
- ✗ Ketamina (to jest dysocjacja ale kontrolowana)
- ✗ Marihuana (to jest relaks)

To jest jak **trucizna która powoduje psychozę**. To wszystko.

## Ostatnie słowa

Jeśli to czytasz i myślisz o spróbowaniu bieluni, bielunia, datury, lub innego deliriantu:

**NIE RÓB TEGO.**

To nie jest doświadczenie wartościowe. To nie jest "podróż". To nie nauczy cię niczego. To jest tylko toksyczne, przerażające delirium które może cię zabić.

Stałem się żywym ostrzeżeniem. Przez resztę życia będę pamiętać to doświadczenie jako najgorsze 14 godzin mojego życia.

Bądź mądrzejszy niż ja.

---

**Ocena: 0/10 - NIGDY WIĘCEJ**

**Status: 4 miesiące później wciąż mam lęki i koszmary**

**Rekomendacja: TAK, polecam - żebyś tego NIE ROBIŁ**
    `
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const report = tripReports[slug as keyof typeof tripReports]

  if (!report) {
    return {
      title: 'Raport nie znaleziony',
    }
  }

  return {
    title: `${report.title} | Trip Raport`,
    description: `Trip raport: ${report.substancja} - ${report.dawkowanie}. ${report.rodzajPrzezycia}`,
  }
}

export async function generateStaticParams() {
  return Object.keys(tripReports).map((slug) => ({
    slug: slug,
  }))
}

export default async function TripRaportPage({ params }: Props) {
  const { slug } = await params
  const report = tripReports[slug as keyof typeof tripReports]

  if (!report) {
    notFound()
  }

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          {/* Back button */}
          <Link
            href="/raporty"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 hover:text-neutral-600 transition mb-8"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Powrót do raportów
          </Link>

          {/* Header */}
          <div className="flex items-start gap-6">
            <div className="text-6xl">{report.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                  report.riskLevel === 'Ekstremalnie niebezpieczne' 
                    ? 'bg-red-100 text-red-800' 
                    : report.riskLevel === 'Wysokie ryzyko'
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {report.riskLevel}
                </span>
                <span className="text-sm text-neutral-500">{report.category}</span>
              </div>
              <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
                {report.title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-neutral-600">
                <span>Autor: {report.autor}</span>
                <span className="text-neutral-300">•</span>
                <span>{report.date}</span>
              </div>
            </div>
          </div>

          {/* Metadata cards */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <div className="rounded-2xl bg-neutral-50 p-4">
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
                Substancja
              </div>
              <div className="font-semibold text-neutral-900">
                {report.substancja}
              </div>
            </div>

            <div className="rounded-2xl bg-neutral-50 p-4">
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
                Dawkowanie
              </div>
              <div className="font-semibold text-neutral-900">
                {report.dawkowanie}
              </div>
            </div>

            <div className="rounded-2xl bg-neutral-50 p-4">
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
                Rodzaj przeżycia
              </div>
              <div className="font-semibold text-neutral-900">
                {report.rodzajPrzezycia}
              </div>
            </div>

            <div className="rounded-2xl bg-neutral-50 p-4">
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
                Set & Setting
              </div>
              <div className="font-semibold text-neutral-900 text-sm">
                {report.setSetting}
              </div>
            </div>

            <div className="rounded-2xl bg-neutral-50 p-4">
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
                Wiek
              </div>
              <div className="font-semibold text-neutral-900">
                {report.wiek} lat
              </div>
            </div>

            <div className="rounded-2xl bg-neutral-50 p-4">
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
                Doświadczenie
              </div>
              <div className="font-semibold text-neutral-900 text-sm">
                {report.doswiadczenie}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="mt-12 prose prose-neutral max-w-none">
            <div className="rounded-3xl bg-white p-8 ring-1 ring-neutral-950/5 sm:p-12">
              <div
                className="text-base leading-7 text-neutral-700"
                dangerouslySetInnerHTML={{
                  __html: report.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-3xl font-display font-bold text-neutral-950 mt-8 mb-4">${line.slice(2)}</h1>`
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="text-2xl font-display font-semibold text-neutral-950 mt-8 mb-4">${line.slice(3)}</h2>`
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="text-xl font-display font-semibold text-neutral-950 mt-6 mb-3">${line.slice(4)}</h3>`
                      }
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return `<p class="font-semibold text-neutral-900 mt-4">${line.slice(2, -2)}</p>`
                      }
                      if (line.startsWith('- ')) {
                        return `<li class="ml-4">${line.slice(2)}</li>`
                      }
                      if (line.startsWith('⚠️') || line.startsWith('❌') || line.startsWith('✗')) {
                        return `<p class="text-red-700 font-medium mt-2">${line}</p>`
                      }
                      if (line.trim() === '') {
                        return '<br/>'
                      }
                      if (line.trim() === '---') {
                        return '<hr class="my-8 border-neutral-200"/>'
                      }
                      return `<p class="mt-4">${line}</p>`
                    })
                    .join('')
                }}
              />
            </div>
          </div>

          {/* Warning footer */}
          {report.riskLevel !== 'Średnie ryzyko' && (
            <div className="mt-12 rounded-3xl bg-red-50 p-8 ring-1 ring-red-200">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-900">
                    Ostrzeżenie dotyczące bezpieczeństwa
                  </h3>
                  <p className="mt-2 text-sm text-red-800">
                    Ten raport opisuje doświadczenie z substancją o wysokim ryzyku. Zawsze stosuj zasady redukcji szkód,
                    testuj substancje, zaczynaj od małych dawek i nigdy nie używaj sam. W razie wątpliwości skonsultuj się
                    z profesjonalistą lub zadzwoń pod numer alarmowy.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Related substances link */}
          <div className="mt-12">
            <Link
              href={`/substancje`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 hover:text-neutral-600 transition"
            >
              Dowiedz się więcej o substancji: {report.substancja}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}

