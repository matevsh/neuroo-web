import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { LegalStatusBadge } from './LegalStatusBadge'
import { type Substance, type CategoryInfo } from '@/lib/substances'

interface SubstanceHeaderProps {
  substance: Substance
  categoryInfo: CategoryInfo
  className?: string
}

export function SubstanceHeader({
  substance,
  categoryInfo,
  className,
}: SubstanceHeaderProps) {
  return (
    <Container className={className}>
      <FadeIn>
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
            <Link href="/kategorie" className="hover:text-neutral-700">
              Encyklopedia
            </Link>
            <span>/</span>
            <Link
              href={`/kategorie/${categoryInfo.slug}`}
              className="hover:text-neutral-700"
            >
              {categoryInfo.nazwa}
            </Link>
            <span>/</span>
            <span className="text-neutral-950">{substance.nazwa}</span>
          </nav>

          {/* Category badge */}
          <div className="mb-4 flex items-center gap-3">
            <span className="text-2xl">{categoryInfo.icon}</span>
            <span className="text-sm font-medium text-neutral-600">
              {categoryInfo.nazwa}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 sm:text-6xl">
            {substance.nazwa}
          </h1>

          {/* Alternative names */}
          {substance.nazwyAlternatywne.length > 0 && (
            <p className="mt-4 text-lg text-neutral-600">
              Inne nazwy: {substance.nazwyAlternatywne.join(', ')}
            </p>
          )}

          {/* Description */}
          <p className="mt-6 text-xl text-neutral-600">{substance.opis}</p>

          {/* Meta info */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <LegalStatusBadge status={substance.klasaPrawna} />

            {substance.grupaChemiczna && (
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700">
                {substance.grupaChemiczna}
              </span>
            )}

            {substance.wzorChemiczny && (
              <span className="font-mono text-sm text-neutral-500">
                {substance.wzorChemiczny}
              </span>
            )}

            <span className="text-sm text-neutral-400">
              Aktualizacja: {substance.dataAktualizacji}
            </span>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
