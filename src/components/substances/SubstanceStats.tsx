import clsx from 'clsx'
import { type Substance } from '@/lib/substances'

interface SubstanceStatsProps {
  substance: Substance
  className?: string
}

export function SubstanceStats({ substance, className }: SubstanceStatsProps) {
  const stats = [
    {
      label: 'Czas dzialania',
      value: substance.czasDzialania.calkowity,
    },
    {
      label: 'Poczatek efektow',
      value: substance.czasDzialania.poczatek,
    },
    {
      label: 'Szczyt',
      value: substance.czasDzialania.szczyt,
    },
    substance.grupaChemiczna && {
      label: 'Grupa chemiczna',
      value: substance.grupaChemiczna,
    },
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <div
      className={clsx(
        'my-10 grid grid-cols-2 gap-6 border-y border-neutral-200 py-8 md:grid-cols-4',
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-sm text-neutral-500">{stat.label}</p>
          <p className="mt-1 font-display text-2xl font-semibold break-all hyphens-manual text-neutral-950">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  )
}
