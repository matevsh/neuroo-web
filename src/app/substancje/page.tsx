import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { CATEGORIES, type CategoryInfo } from '@/lib/substances'

export const metadata: Metadata = {
  title: 'Wszystkie Substancje | Neuroo',
  description:
    'Pełna lista substancji psychoaktywnych z informacjami o efektach, dawkowaniu i redukcji szkód.',
}

// Temporary list of substances until we have a full database
type SubstanceItem = {
  name: string
  id: string
  category: string
  commonNames: string[]
}

const substancesList: SubstanceItem[] = [
  // Psychodeliki
  { name: 'LSD', id: 'lsd', category: 'psychodeliki', commonNames: ['Kwas', 'Lucy', 'Acid'] },
  { name: 'Psylocybina', id: 'psylocybina', category: 'psychodeliki', commonNames: ['Grzyby', 'Shrooms'] },
  { name: 'DMT', id: 'dmt', category: 'psychodeliki', commonNames: ['Dimitri', 'Spirit Molecule'] },

  // Dysocjanty
  { name: 'Ketamina', id: 'ketamina', category: 'dysocjanty', commonNames: ['K', 'Ket', 'Special K'] },
  { name: 'DXM', id: 'dxm', category: 'dysocjanty', commonNames: ['Robo', 'Dex'] },
  { name: 'PCP', id: 'pcp', category: 'dysocjanty', commonNames: ['Angel Dust', 'Peace Pill'] },

  // Stymulanty
  { name: 'Kofeina', id: 'kofeina', category: 'stymulanty', commonNames: ['Kawa', 'Herbata'] },
  { name: 'Amfetamina', id: 'amfetamina', category: 'stymulanty', commonNames: ['Amfa', 'Speed'] },
  { name: 'Metamfetamina', id: 'metamfetamina', category: 'stymulanty', commonNames: ['Meth', 'Crystal'] },

  // Depresanty
  { name: 'Alkohol', id: 'alkohol', category: 'depresanty', commonNames: ['Etanol', 'Wódka', 'Piwo'] },
  { name: 'Benzodiazepiny', id: 'benzodiazepiny', category: 'depresanty', commonNames: ['Benzos', 'Xanax'] },
  { name: 'GHB', id: 'ghb', category: 'depresanty', commonNames: ['G', 'Liquid Ecstasy'] },

  // Kannabinoidy
  { name: 'THC', id: 'thc', category: 'kannabinoidy', commonNames: ['Cannabis', 'Marihuana', 'Weed'] },
  { name: 'CBD', id: 'cbd', category: 'kannabinoidy', commonNames: ['Cannabidiol', 'Hemp'] },
  { name: 'Syntetyczne Kannabinoidy', id: 'syntetyczne-kannabinoidy', category: 'kannabinoidy', commonNames: ['Spice', 'K2'] },

  // Opioidy
  { name: 'Morfina', id: 'morfina', category: 'opioidy', commonNames: ['Morphine', 'MS Contin'] },
  { name: 'Kodeina', id: 'kodeina', category: 'opioidy', commonNames: ['Codeine', 'Lean'] },
  { name: 'Fentanyl', id: 'fentanyl', category: 'opioidy', commonNames: ['Fent', 'Sublimaze'] },

  // Empatogeny
  { name: 'MDMA', id: 'mdma', category: 'empatogeny', commonNames: ['Ecstasy', 'Molly', 'XTC'] },
  { name: 'MDA', id: 'mda', category: 'empatogeny', commonNames: ['Sally', 'Sass'] },
  { name: '6-APB', id: '6-apb', category: 'empatogeny', commonNames: ['Benzofury'] },

  // Nootropiki
  { name: 'Piracetam', id: 'piracetam', category: 'nootropiki', commonNames: ['Nootropil'] },
  { name: 'Modafinil', id: 'modafinil', category: 'nootropiki', commonNames: ['Provigil'] },
  { name: 'L-Teanina', id: 'l-teanina', category: 'nootropiki', commonNames: ['Theanine', 'L-Theanine'] },
]

export default function SubstancjePage() {
  const substances = substancesList.sort((a, b) =>
    a.name.localeCompare(b.name, 'pl')
  )

  const groupedSubstances = substances.reduce<Record<string, SubstanceItem[]>>((acc, substance) => {
    const firstLetter = substance.name[0].toUpperCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(substance)
    return acc
  }, {})

  const categories = Object.values(CATEGORIES) as CategoryInfo[]

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 sm:text-7xl">
            Wszystkie Substancje
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-neutral-600">
            Alfabetyczna lista wszystkich substancji psychoaktywnych w naszej
            bazie danych. Kliknij, aby dowiedzieć się więcej o efektach,
            dawkowaniu i bezpiecznym użytkowaniu.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-12">
          {Object.entries(groupedSubstances).map(([letter, subs]) => (
            <FadeIn key={letter}>
              <div>
                <h2 className="font-display text-4xl font-semibold text-neutral-950 border-b border-neutral-200 pb-2">
                  {letter}
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {subs.map((substance) => (
                    <Link
                      key={substance.id}
                      href={`/kategorie/${substance.category}/${substance.id}`}
                      className="group relative rounded-lg border border-neutral-200 bg-white p-4 hover:border-neutral-900 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-display text-lg font-semibold text-neutral-950 group-hover:text-neutral-700 transition">
                            {substance.name}
                          </h3>
                          {substance.commonNames && substance.commonNames.length > 0 && (
                            <p className="mt-1 text-sm text-neutral-600">
                              {substance.commonNames.slice(0, 3).join(', ')}
                            </p>
                          )}
                        </div>
                        <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800">
                          {categories.find(c => c.slug === substance.category)?.nazwa || substance.category}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </RootLayout>
  )
}

