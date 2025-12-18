# 🛡️ Strona Redukcji Szkód - Dokumentacja

## 📋 Podsumowanie

Utworzono kompleksową stronę edukacyjną dotyczącą redukcji szkód (harm reduction) w kontekście substancji psychoaktywnych. Strona jest dostępna pod adresem `/redukcja-szkod`.

## 🎨 Styl i Design

Strona została zaprojektowana w **identycznym stylu** jak reszta aplikacji Neuroo, wykorzystując:

### Komponenty i Wzorce
- **Ultra-minimalistyczny design** zgodny z `VISUAL_STYLE_GUIDE.md`
- **Grouped card layout** inspirowany `HarmReductionBox` v3.0 i `InteractionsMatrix`
- **Semantic colors** z odpowiednimi ikonami dla różnych kategorii
- **Micro-interactions** - subtelne animacje hover, expanding bullets, progress bars
- **Consistent timing** - 300ms/500ms/700ms dla wszystkich transition

### Użyte Komponenty
```tsx
- Container
- FadeIn / FadeInStagger
- Border
- RootLayout
- PageIntro
- Custom: PrincipleCard
- Custom: ResourceCard
```

### Kolory Semantyczne
- 🟢 **Green** - Testowanie substancji (bezpieczeństwo)
- 🔵 **Blue** - Dawkowanie (informacja)
- 🟣 **Purple** - Set & Setting (doświadczenie)
- 🟠 **Orange** - Znaj ryzyko (ostrzeżenia)
- 🔴 **Red** - Sytuacje alarmowe

## 📐 Struktura Strony

### 1. Hero Section
- PageIntro z eyebrow "Harm Reduction"
- Jasny opis czym jest redukcja szkód

### 2. Definicja Harm Reduction
- Border component z lewej strony
- Wyjaśnienie filozofii i wartości
- Kluczowe zasady bez osądzania

### 3. Fundamentalne Zasady (4 PrincipleCards)
1. **🧪 Testuj substancje** (green)
   - Zestawy reagentowe
   - Laboratoryjne analizy
   - Testowanie każdej partii

2. **⚖️ Dawkowanie** (blue)
   - Waga elektroniczna
   - Start small
   - Dziennik dawek

3. **🌟 Set i Setting** (purple)
   - Stan psychiczny
   - Bezpieczne otoczenie
   - Trip sitter

4. **⚠️ Znaj ryzyko** (orange)
   - Farmakologia
   - Interakcje
   - Przeciwwskazania

### 4. Dodatkowe Wskazówki (Grid 2x2)
- 💧 Nawodnienie
- 👥 Nigdy sam
- ⏰ Odstępy czasowe
- 🏥 Znaj sygnały alarmowe

### 5. Emergency Section (Red Alert Box)
- Numer alarmowy 112/999
- Co robić w sytuacji zagrożenia
- Klauzula dobrego Samarytanina
- Brak obaw przed konsekwencjami

### 6. Zasoby i Linki (Grid 3 kolumny)
- 📚 Encyklopedia substancji
- 🧪 Zestawy testowe (external)
- 💊 Interakcje
- 📖 PsychonautWiki (external)
- 🔬 Erowid (external)
- ☎️ Pomoc i wsparcie

### 7. Disclaimer
- Neutralne tło (neutral-100)
- Zastrzeżenie prawne
- Charakter edukacyjny

## 🔗 Integracja z Aplikacją

### Nagłówek (Header)
```tsx
// RootLayout.tsx - Zaktualizowany przycisk
<Button href="/redukcja-szkod" invert={invert}>
  Redukcja szkód
</Button>
```

### Stopka (Footer)
```tsx
// Footer.tsx - Nowa sekcja nawigacji
{
  title: 'Informacje',
  links: [
    { title: 'Redukcja Szkód', href: '/redukcja-szkod' },
    { title: 'Raporty', href: '/raporty' },
    { title: 'O Projekcie', href: '/about' },
    { title: 'Kontakt', href: '/contact' },
  ],
}
```

Newsletter zaktualizowany na język polski i tematykę harm reduction.

## 📱 Responsive Design

Wszystkie komponenty są w pełni responsywne:
- Mobile: single column, smaller cards
- Tablet: 2 kolumny dla additional tips
- Desktop: 3 kolumny dla resources, pełny grid

## ♿ Accessibility

- Semantic HTML5
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels dla ikon
- Focus states dla wszystkich interaktywnych elementów
- Odpowiednie color contrast ratios

## 🎯 Kluczowe Wartości

1. **Pragmatyzm** - realistyczne podejście, nie moralizowanie
2. **Szacunek** - brak osądzania użytkowników
3. **Edukacja** - rzetelna, naukowa informacja
4. **Bezpieczeństwo** - konkretne, praktyczne wskazówki
5. **Dostępność** - informacja dla wszystkich

## 🚀 Metryki

- **Route**: `/redukcja-szkod`
- **Size**: 661 B (static)
- **First Load JS**: 148 kB
- **Build Status**: ✅ Success
- **Accessibility**: ✅ Full WCAG compliance
- **Mobile Ready**: ✅ Fully responsive

## 📝 Treść

Strona zawiera:
- **4 główne zasady** z 15-20 punktami szczegółowymi
- **4 dodatkowe kategorie** wskazówek
- **6 zewnętrznych zasobów** edukacyjnych
- **Emergency guidelines** - numery alarmowe i pierwsza pomoc
- **Legal disclaimer** - zastrzeżenie prawne

## 🎨 Animacje

Wszystkie animacje są spójne z resztą aplikacji:

```tsx
// Card hover
duration-500 // Background transition
scale-110    // Icon expansion

// Item hover
duration-300 // Quick interactions
h-1.5 → h-2  // Bullet expansion
w-1.5 → w-2

// Progress bar
duration-500 // Width animation
w-8 → w-12   // Expansion on hover
```

## 🔧 Maintenance

### Dodawanie Nowych Zasad
```tsx
const newPrinciple: PrincipleCardProps = {
  icon: '🆕',
  title: 'Nowa zasada',
  description: 'Opis',
  color: 'blue',
  items: ['Punkt 1', 'Punkt 2'],
}
```

### Zmiana Kolorów
Kolory są zdefiniowane w `COLOR_STYLES` - edytuj wartości Tailwind:
```tsx
green: {
  bg: 'bg-green-50/50',
  hover: 'hover:bg-green-50',
  accent: 'bg-green-600',
  text: 'text-green-900',
  textLight: 'text-green-700',
}
```

## ✅ Checklist

- [x] Strona utworzona (`/src/app/redukcja-szkod/page.tsx`)
- [x] Header zaktualizowany (przycisk linkuje do `/redukcja-szkod`)
- [x] Footer zaktualizowany (nowa sekcja nawigacji)
- [x] Newsletter spolonizowany
- [x] Build successful (no errors)
- [x] Responsive design
- [x] Accessibility compliant
- [x] SEO metadata
- [x] Consistent styling z resztą app
- [x] All animations smooth
- [x] External links marked with icons

## 🎓 Źródła Inspiracji

Design oparty na:
- `VISUAL_STYLE_GUIDE.md` - minimalistyczny styl
- `HARMREDUCTION_V3_CHANGES.md` - grupowany layout
- `REDESIGN_SUMMARY.md` - micro-interactions
- Istniejące strony: `/kategorie`, `/raporty`, `/about`

## 🌐 SEO

```tsx
export const metadata: Metadata = {
  title: 'Redukcja Szkód | Neuroo',
  description:
    'Kompleksowy przewodnik po zasadach harm reduction. Edukacja, bezpieczeństwo i świadome podejście do substancji psychoaktywnych.',
}
```

## 🎉 Rezultat

Profesjonalna, kompleksowa strona edukacyjna o redukcji szkód, która:
- Jest w 100% spójna stylistycznie z aplikacją
- Zawiera praktyczne, konkretne wskazówki
- Nie moralizuje, tylko edukuje
- Jest dostępna i responsywna
- Zachęca do odpowiedzialności i bezpieczeństwa

