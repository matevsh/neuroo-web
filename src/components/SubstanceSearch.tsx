'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { type CategoryInfo } from '@/lib/substances'
import { FadeIn } from '@/components/FadeIn'

type SubstanceItem = {
  name: string
  id: string
  category: string
  commonNames: string[]
}

interface SubstanceSearchProps {
  substances: SubstanceItem[]
  categories: CategoryInfo[]
}

export function SubstanceSearch({ substances, categories }: SubstanceSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter substances based on search query
  const filteredSubstances = useMemo(() => {
    if (!searchQuery.trim()) {
      return substances
    }

    const query = searchQuery.toLowerCase().trim()
    return substances.filter((substance) => {
      // Search in substance name
      if (substance.name.toLowerCase().includes(query)) {
        return true
      }

      // Search in common names
      if (substance.commonNames.some(name => name.toLowerCase().includes(query))) {
        return true
      }

      // Search in category name
      const categoryInfo = categories.find(c => c.slug === substance.category)
      return categoryInfo?.nazwa.toLowerCase().includes(query) || false
    })
  }, [searchQuery, substances, categories])

  // Group filtered substances by first letter
  const groupedSubstances = useMemo(() => {
    return filteredSubstances.reduce<Record<string, SubstanceItem[]>>((acc, substance) => {
      const firstLetter = substance.name[0].toUpperCase()
      if (!acc[firstLetter]) {
        acc[firstLetter] = []
      }
      acc[firstLetter].push(substance)
      return acc
    }, {})
  }, [filteredSubstances])

  return (
    <>
      {/* Search Input */}
      <div className="mt-12">
        <FadeIn>
          <div className="relative">
            <input
              type="text"
              placeholder="Szukaj substancji po nazwie, kategorii lub potocznej nazwie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 pl-12 text-base text-neutral-950 placeholder-neutral-500 shadow-sm transition-all focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg
                className="h-5 w-5 text-neutral-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-400 hover:text-neutral-600 transition"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Search Results Count */}
          <div className="mt-3 text-sm text-neutral-600">
            {searchQuery ? (
              <p>
                Znaleziono <strong className="font-semibold text-neutral-950">{filteredSubstances.length}</strong>{' '}
                {filteredSubstances.length === 1
                  ? 'substancję'
                  : filteredSubstances.length < 5
                  ? 'substancje'
                  : 'substancji'}
              </p>
            ) : (
              <p>
                Łącznie <strong className="font-semibold text-neutral-950">{substances.length}</strong>{' '}
                {substances.length === 1
                  ? 'substancja'
                  : substances.length < 5
                  ? 'substancje'
                  : 'substancji'}
              </p>
            )}
          </div>
        </FadeIn>
      </div>

      {/* Results */}
      <div className="mt-16 space-y-12">
        {Object.keys(groupedSubstances).length === 0 ? (
          <FadeIn>
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-neutral-900">
                Nie znaleziono substancji
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                Spróbuj użyć innego zapytania wyszukiwania.
              </p>
            </div>
          </FadeIn>
        ) : (
          Object.entries(groupedSubstances).map(([letter, subs]) => (
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
          ))
        )}
      </div>
    </>
  )
}

