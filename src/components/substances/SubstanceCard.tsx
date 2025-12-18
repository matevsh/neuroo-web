import Link from 'next/link'
import clsx from 'clsx'
import { FadeIn } from '@/components/FadeIn'
import { LegalStatusBadge } from './LegalStatusBadge'
import { type Substance } from '@/lib/substances'

interface SubstanceCardProps {
  substance: Substance
  href: string
  className?: string
}

export function SubstanceCard({ substance, href, className }: SubstanceCardProps) {
  return (
    <FadeIn className={className}>
      <Link
        href={href}
        className="group block rounded-2xl bg-neutral-50 p-6 transition hover:bg-neutral-100"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              {substance.nazwa}
            </h3>
            {substance.nazwyAlternatywne.length > 0 && (
              <p className="mt-1 text-sm text-neutral-500">
                {substance.nazwyAlternatywne.slice(0, 3).join(', ')}
              </p>
            )}
          </div>
          <LegalStatusBadge status={substance.klasaPrawna} />
        </div>

        <p className="mt-4 line-clamp-2 text-sm text-neutral-600">
          {substance.opis}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {substance.efektyGlowne.slice(0, 3).map((efekt) => (
            <span
              key={efekt}
              className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-700"
            >
              {efekt}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4 text-sm text-neutral-500">
          <span>Czas: {substance.czasDzialania.calkowity}</span>
          {substance.grupaChemiczna && (
            <span className="border-l border-neutral-300 pl-4">
              {substance.grupaChemiczna}
            </span>
          )}
        </div>
      </Link>
    </FadeIn>
  )
}
