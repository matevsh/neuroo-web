import Link from 'next/link'
import clsx from 'clsx'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { type CategoryInfo } from '@/lib/substances'

interface CategoryGridProps {
  categories: CategoryInfo[]
  className?: string
}

export function CategoryGrid({ categories, className }: CategoryGridProps) {
  return (
    <FadeInStagger
      className={clsx('grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4', className)}
    >
      {categories.map((category) => (
        <FadeIn key={category.slug}>
          <Link
            href={`/kategorie/${category.slug}`}
            className="group block rounded-2xl bg-neutral-50 p-6 transition hover:bg-neutral-100"
          >
            <span className="text-4xl">{category.icon}</span>
            <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
              {category.nazwa}
            </h3>
            <p className="mt-2 text-sm text-neutral-600">{category.opis}</p>
            <p className="mt-4 line-clamp-2 text-sm text-neutral-500">
              {category.opisRozszerzony}
            </p>
          </Link>
        </FadeIn>
      ))}
    </FadeInStagger>
  )
}
