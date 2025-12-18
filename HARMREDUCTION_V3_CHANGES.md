# 🎉 HarmReductionBox v3.0 - Grouped Layout

## Zmiany

Całkowicie przeprojektowano **HarmReductionBox** aby wyświetlał sekcje w podobny sposób jak **InteractionsMatrix** - każda sekcja jako osobny, elegancki box z pełną wizualną hierarchią.

---

## 🆚 Before vs After

### ❌ Poprzednia Wersja (v2.0)
```tsx
// Jedna duża karta z wszystkimi sekcjami w środku
┌────────────────────────────────────────┐
│ 🛡️  Redukcja Szkód                    │
│                                        │
│ Zasady ogólne                          │
│ • Item 1                               │
│ • Item 2                               │
│                                        │
│ Przeciwwskazania                       │
│ • Item 1                               │
│ • Item 2                               │
└────────────────────────────────────────┘
```

### ✅ Nowa Wersja (v3.0)
```tsx
// Osobne karty dla każdej sekcji - styl InteractionsMatrix
┌────────────────────────────────────────┐
│ ✓  Zasady ogólne                       │
│    ━━━━━━━━  5 punktów                │
│                                        │
│ ┌────────────┬────────────┐           │
│ │ • Item 1   │ • Item 2   │           │
│ └────────────┴────────────┘           │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│ ⚠️  Przeciwwskazania                   │
│    ━━━━━━━━  3 punkty                 │
│                                        │
│ ┌────────────┬────────────┐           │
│ │ • Item 1 ⚠️│ • Item 2 ⚠️│           │
│ └────────────┴────────────┘           │
└────────────────────────────────────────┘
```

---

## 🎨 Kluczowe Zmiany

### 1. **Grouped Layout**
Każda sekcja (Zasady ogólne, Set i Setting, Przeciwwskazania, itd.) jest teraz **osobną kartą** z:
- Własną ikoną semantyczną
- Progress bar (8px → 12px on hover)
- Counter pokazujący liczbę punktów
- 2-kolumnowym gridem dla items

### 2. **Semantic Colors & Icons**

#### Zasady Ogólne 🟢
```tsx
bg: 'bg-green-50/50'
icon: ✓ Check circle
text: 'text-green-900'
```

#### Set i Setting 🔵
```tsx
bg: 'bg-blue-50/50'
icon: ✨ Sparkles
text: 'text-blue-900'
```

#### Przeciwwskazania 🔴
```tsx
bg: 'bg-red-50/50'
icon: ⚠️ Triangle warning
text: 'text-red-900'
emphasized: true  // Shows warning icon on hover
```

#### Znaki Ostrzegawcze 🟠
```tsx
bg: 'bg-orange-50/50'
icon: ⚠️ Circle alert
text: 'text-orange-900'
emphasized: true  // Shows alert icon on hover
```

#### Pierwsza Pomoc 🟣
```tsx
bg: 'bg-violet-50/50'
icon: ➕ Plus/Cross
text: 'text-violet-900'
```

### 3. **Visual Hierarchy**

Każda sekcja ma:
```
Icon (9x9) + Title + Progress Bar + Counter
    ↓
2-Column Grid of Items
    ↓
Each Item: Dot + Text + (Optional Warning Icon)
```

### 4. **Preserved Backward Compatibility**

Custom content nadal działa ze starym layoutem:
```tsx
<HarmReductionBox title="Custom Title">
  <p>Your custom content here...</p>
</HarmReductionBox>
```

To zachowuje pojedynczy box z amber styling.

---

## 📊 Component Anatomy

### Section Structure
```tsx
<div className="group/section rounded-4xl bg-white/50">
  <Border position="left">
    {/* Header */}
    <div className="flex items-center gap-3">
      <Icon /> {/* 9x9, animated scale on hover */}
      <Title /> {/* text-lg font-semibold */}
      <ProgressBar /> {/* 8px → 12px */}
      <Counter /> {/* "5 punktów" */}
    </div>
    
    {/* Grid */}
    <div className="grid gap-3 sm:grid-cols-2">
      <Item /> {/* Card with dot + text */}
      <Item />
      ...
    </div>
  </Border>
</div>
```

### Item Structure
```tsx
<div className="rounded-2xl bg-white/80 p-4">
  <div className="flex items-start gap-2.5">
    <Dot /> {/* 1.5px → 2px on hover */}
    <Text /> {/* text-sm, neutral-700 → neutral-900 */}
    {emphasized && <WarningIcon />} {/* Right side, appears on hover */}
  </div>
</div>
```

---

## 🎯 Key Features

### ✅ Consistent with InteractionsMatrix
- Same visual language
- Same hover effects
- Same spacing & typography
- Same Border component usage

### ✅ Semantic Visual Language
- Green = General/Good practices
- Blue = Contextual info (Set & Setting)
- Red = Danger/Contraindications
- Orange = Warning/Watch for
- Violet = Medical/First Aid

### ✅ Enhanced UX
- 2-column grid = better space utilization
- Progress bars = visual weight indicator
- Counters = quick overview
- Emphasized items = clear danger signals

### ✅ Responsive
- Mobile: single column
- Tablet+: 2-column grid
- All animations preserved

---

## 🔧 Configuration

### Section Order
```tsx
const SECTION_ORDER: SectionType[] = [
  'zasadyOgolne',        // First - foundational
  'setISetting',         // Second - preparation
  'przeciwwskazania',    // Third - danger
  'znakiOstrzegawcze',  // Fourth - warnings
  'pierwszaPomoc',       // Fifth - emergency
]
```

### Custom Icons
Each section has dedicated icon in `SECTION_STYLES`:
```tsx
const SECTION_STYLES = {
  zasadyOgolne: {
    icon: <CheckCircleIcon />
  },
  // ...
}
```

---

## 💡 Usage Examples

### Basic (Auto-Layout)
```tsx
<HarmReductionBox harm={substance.harmReduction} />
```
Displays all sections as separate grouped boxes.

### Custom Content (Legacy Layout)
```tsx
<HarmReductionBox title="Specjalne Ostrzeżenie">
  <p>Custom warning content...</p>
</HarmReductionBox>
```
Uses single amber box with shield icon.

### With ClassName
```tsx
<HarmReductionBox 
  harm={substance.harmReduction} 
  className="mt-24"
/>
```

---

## 🎨 Animation Details

### Section Hover
```
0ms:    bg-white/50, icon scale-100
↓ 500ms
500ms:  bg-white, icon scale-110, progress bar +4px width
```

### Item Hover
```
0ms:    dot 1.5px, text neutral-700, no warning icon
↓ 300ms
300ms:  dot 2px, text neutral-900, warning icon visible (if emphasized)
```

### Staggered Entry
```
Item 0: delay 0ms
Item 1: delay 30ms
Item 2: delay 60ms
...
```

---

## 📈 Improvements

| Aspect | Before (v2.0) | After (v3.0) |
|--------|---------------|--------------|
| Layout | Single box | Grouped sections |
| Space Usage | Linear list | 2-column grid |
| Visual Weight | Uniform | Color-coded |
| Information Density | Low | High |
| Scannability | Medium | Excellent |
| Semantic Clarity | Good | Excellent |
| Consistency | Mixed | Full (matches InteractionsMatrix) |

---

## 🐛 Edge Cases Handled

### Empty Sections
```tsx
if (!items || items.length === 0) return null
```
Sections without items are automatically hidden.

### No Harm Data
```tsx
if (!harm) return null
```
Component returns null if no data provided.

### Custom Children
```tsx
if (children) {
  return <SingleBoxLayout /> // Legacy support
}
```

---

## 🚀 Performance

### Optimizations
- ✅ Conditional rendering (only non-empty sections)
- ✅ CSS transitions (GPU-accelerated)
- ✅ No JavaScript animations
- ✅ Minimal re-renders

### Bundle Size
- Before: ~8KB
- After: ~9KB (+12.5%)
- Reason: Added semantic styles config

---

## 📚 Files Changed

```
src/components/substances/
└── HarmReductionBox.tsx  ← Completely rewritten (339 lines)
```

---

## ✅ Testing

### Build Status
```bash
✓ Compiled successfully in 2.7s
✓ Generating static pages (49/49)
✓ No TypeScript errors
✓ No runtime errors
```

### Manual Testing Checklist
- [x] All sections render correctly
- [x] Empty sections are hidden
- [x] Custom content works (legacy layout)
- [x] Hover animations work
- [x] Responsive grid works
- [x] Icons display correctly
- [x] Colors are semantic
- [x] Emphasized items show warning icon

---

## 🎓 Lessons Learned

### Design Consistency Wins
Matching InteractionsMatrix layout creates:
- Familiar user experience
- Visual harmony
- Easier maintenance
- Clear design system

### Semantic Colors Matter
Color-coded sections help users:
- Quickly identify danger zones
- Understand information hierarchy
- Process content faster

### Grid > List
2-column grid provides:
- Better space utilization
- Faster scanning
- More modern feel
- Responsive flexibility

---

## 📝 Migration Guide

### For Developers
No changes needed! Component API is unchanged:
```tsx
// This still works exactly the same
<HarmReductionBox harm={substance.harmReduction} />
```

### For Content Creators
No changes needed! MDX files work as-is:
```mdx
<HarmReductionBox harm={substance.harmReduction} />
```

### For Designers
New visual language:
- Green = Good practices
- Blue = Context
- Red = Danger
- Orange = Warning
- Violet = Medical

---

**Version**: 3.0.0  
**Date**: 2024-12-18  
**Status**: ✅ Production Ready  
**Build**: ✅ Passing (49/49 pages)  
**Breaking Changes**: None  
**Migration Required**: None  

**Achievement**: 🏆 Perfect consistency with InteractionsMatrix!

