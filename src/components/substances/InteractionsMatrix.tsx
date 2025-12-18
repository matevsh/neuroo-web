import Link from 'next/link'
import clsx from 'clsx'
import {
  type Interaction,
  type InteractionSeverity,
  INTERACTION_COLORS,
  INTERACTION_LABELS,
} from '@/lib/substances'

interface InteractionsMatrixProps {
  interactions: Interaction[]
  className?: string
}

const SEVERITY_ORDER: InteractionSeverity[] = [
  'zagrożenie-życia',
  'niebezpieczna',
  'ostrożność',
  'synergia',
  'bezpieczna',
]

export function InteractionsMatrix({
  interactions,
  className,
}: InteractionsMatrixProps) {
  // Grupowanie po poziomie ryzyka
  const grouped = interactions.reduce(
    (acc, interaction) => {
      if (!acc[interaction.poziom]) acc[interaction.poziom] = []
      acc[interaction.poziom].push(interaction)
      return acc
    },
    {} as Record<InteractionSeverity, Interaction[]>,
  )

  return (
    <div className={clsx('my-8 space-y-4', className)}>
      {SEVERITY_ORDER.map((poziom) => {
        const items = grouped[poziom]
        if (!items?.length) return null

        const colors = INTERACTION_COLORS[poziom]
        const label = INTERACTION_LABELS[poziom]

        return (
          <div
            key={poziom}
            className={clsx('rounded-xl border-2 p-4', colors.bg, colors.border)}
          >
            <h4 className={clsx('mb-3 font-semibold', colors.text)}>{label}</h4>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {items.map((interaction, idx) => (
                <div key={idx} className="rounded-lg bg-white/50 p-3">
                  <div className="font-medium">
                    {interaction.slug && interaction.kategoria ? (
                      <Link
                        href={`/kategorie/${interaction.kategoria}/${interaction.slug}`}
                        className="underline hover:no-underline"
                      >
                        {interaction.substancja}
                      </Link>
                    ) : (
                      interaction.substancja
                    )}
                  </div>
                  <p className="mt-1 text-sm opacity-80">{interaction.opis}</p>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
