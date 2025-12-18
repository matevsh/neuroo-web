import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { type MDXSubstance } from '@/lib/mdx'

interface RelatedSubstancesProps {
  substances: MDXSubstance[]
  className?: string
}

export function RelatedSubstances({
  substances,
  className,
}: RelatedSubstancesProps) {
  if (!substances || substances.length === 0) return null

  return (
    <div className={clsx('border-t border-neutral-200 bg-neutral-50', className)}>
      <Container>
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Powiazane substancje
          </h2>
        </FadeIn>

        <FadeInStagger className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {substances.map((substance) => (
            <FadeIn key={substance.slug}>
              <Link
                href={substance.href}
                className="group block rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="font-display text-lg font-semibold text-neutral-950 group-hover:text-neutral-600">
                  {substance.nazwa}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
                  {substance.opis}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
                  <span>Czas: {substance.czasDzialania.calkowity}</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}
