'use client'

import { useState, useMemo } from 'react'
import { FadeIn } from '@/components/FadeIn'
import { CategoryGrid } from '@/components/substances'
import { type CategoryInfo } from '@/lib/substances'

interface CategorySearchProps {
  categories: CategoryInfo[]
}

export function CategorySearch({ categories }: CategorySearchProps) {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return categories
    }

    const query = searchQuery.toLowerCase().trim()
    return categories.filter((category) => {
      // Search in category name
      if (category.nazwa.toLowerCase().includes(query)) {
        return true
      }

      // Search in short description
      if (category.opis.toLowerCase().includes(query)) {
        return true
      }

      // Search in extended description
      return category.opisRozszerzony.toLowerCase().includes(query)
    })
  }, [searchQuery, categories])

  return (
    <>
      {/* Search Input */}
      <div className="mt-12">
        <FadeIn>
          <div className="relative">
            <input
              type="text"
              placeholder="Szukaj kategorii po nazwie lub opisie..."
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
                Znaleziono <strong className="font-semibold text-neutral-950">{filteredCategories.length}</strong>{' '}
                {filteredCategories.length === 1
                  ? 'kategorię'
                  : filteredCategories.length < 5
                  ? 'kategorie'
                  : 'kategorii'}
              </p>
            ) : (
              <p>
                Łącznie <strong className="font-semibold text-neutral-950">{categories.length}</strong>{' '}
                {categories.length === 1
                  ? 'kategoria'
                  : categories.length < 5
                  ? 'kategorie'
                  : 'kategorii'}
              </p>
            )}
          </div>
        </FadeIn>
      </div>

      {/* Results */}
      <div className="mt-10">
        {filteredCategories.length === 0 ? (
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
                Nie znaleziono kategorii
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                Spróbuj użyć innego zapytania wyszukiwania.
              </p>
            </div>
          </FadeIn>
        ) : (
          <CategoryGrid categories={filteredCategories} />
        )}
      </div>
    </>
  )
}

