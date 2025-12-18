import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { CATEGORIES, type CategoryInfo } from '@/lib/substances'
import { SubstanceSearch } from '@/components/SubstanceSearch'

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

        <SubstanceSearch substances={substances} categories={categories} />
      </Container>
    </RootLayout>
  )
}

