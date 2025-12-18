import Link from 'next/link'
import clsx from 'clsx'
import { Border } from '@/components/Border'
import { type Interaction, type InteractionSeverity } from '@/lib/substances'

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

// Refined color system matching the minimalist aesthetic
const SEVERITY_STYLES: Record<
  InteractionSeverity,
  {
    label: string
    bg: string
    hover: string
    accent: string
    text: string
    icon: React.ReactNode
    dotColor: string
  }
> = {
  'zagrożenie-życia': {
    label: 'Zagrożenie życia',
    bg: 'bg-red-50/50',
    hover: 'hover:bg-red-50',
    accent: 'bg-red-600',
    text: 'text-red-900',
    dotColor: 'bg-red-500',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    ),
  },
  niebezpieczna: {
    label: 'Niebezpieczna',
    bg: 'bg-orange-50/50',
    hover: 'hover:bg-orange-50',
    accent: 'bg-orange-500',
    text: 'text-orange-900',
    dotColor: 'bg-orange-500',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    ),
  },
  ostrożność: {
    label: 'Zachowaj ostrożność',
    bg: 'bg-yellow-50/50',
    hover: 'hover:bg-yellow-50',
    accent: 'bg-yellow-500',
    text: 'text-yellow-900',
    dotColor: 'bg-yellow-500',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m0 0v-3.75m0 3.75h.008v.008H12V15.75z"
      />
    ),
  },
  synergia: {
    label: 'Synergia',
    bg: 'bg-blue-50/50',
    hover: 'hover:bg-blue-50',
    accent: 'bg-blue-500',
    text: 'text-blue-900',
    dotColor: 'bg-blue-500',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
      />
    ),
  },
  bezpieczna: {
    label: 'Bezpieczna',
    bg: 'bg-green-50/50',
    hover: 'hover:bg-green-50',
    accent: 'bg-green-600',
    text: 'text-green-900',
    dotColor: 'bg-green-500',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
}

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

  // Check if we have any interactions
  const hasInteractions = SEVERITY_ORDER.some((p) => grouped[p]?.length > 0)
  if (!hasInteractions) return null

  return (
    <div className={clsx('my-16 space-y-6', className)}>
      {SEVERITY_ORDER.map((poziom) => {
        const items = grouped[poziom]
        if (!items?.length) return null

        const style = SEVERITY_STYLES[poziom]

        return (
          <div
            key={poziom}
            className="group/severity relative overflow-hidden rounded-4xl bg-white/50 transition-all duration-500 hover:bg-white"
          >
            {/* Subtle gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-neutral-50/50 via-transparent to-neutral-100/30 opacity-0 transition-opacity duration-500 group-hover/severity:opacity-100" />

            <Border position="left" className="pl-6">
              <div className="py-8 pr-6">
                {/* Section header */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="relative shrink-0">
                    <div className="relative flex h-9 w-9 items-center justify-center">
                      <div
                        className={clsx(
                          'absolute inset-0 rounded-xl opacity-0 transition-all duration-500 group-hover/severity:scale-110 group-hover/severity:opacity-100',
                          style.bg,
                        )}
                      />
                      <svg
                        className={clsx(
                          'relative z-10 h-5 w-5 transition-all duration-500',
                          style.text,
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        {style.icon}
                      </svg>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4
                      className={clsx(
                        'font-display text-lg font-semibold tracking-tight',
                        style.text,
                      )}
                    >
                      {style.label}
                    </h4>
                    <div className="mt-0.5 flex items-center gap-2">
                      <div
                        className={clsx(
                          'h-1 w-8 rounded-full transition-all duration-500 group-hover/severity:w-12',
                          style.accent,
                        )}
                      />
                      <span className="text-xs text-neutral-500">
                        {items.length} {items.length === 1 ? 'substancja' : 'substancje'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactions grid */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {items.map((interaction, idx) => (
                    <InteractionCard
                      key={idx}
                      interaction={interaction}
                      style={style}
                      delay={idx * 30}
                    />
                  ))}
                </div>
              </div>
            </Border>
          </div>
        )
      })}
    </div>
  )
}

function InteractionCard({
  interaction,
  style,
  delay,
}: {
  interaction: Interaction
  style: (typeof SEVERITY_STYLES)[InteractionSeverity]
  delay: number
}) {
  const isLinked = interaction.slug && interaction.kategoria

  return (
    <div
      className={clsx(
        'group/card relative overflow-hidden rounded-2xl bg-white/80 p-4 transition-all duration-300',
        style.hover,
        'ring-1 ring-neutral-900/5 hover:ring-neutral-900/10',
        isLinked && 'cursor-pointer',
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Subtle hover gradient */}
      <div
        className={clsx(
          'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100',
          style.bg,
        )}
      />

      <div className="relative">
        {/* Substance name */}
        <div className="mb-2 flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5">
            {/* Status dot */}
            <div className="mt-1.5 shrink-0">
              <div
                className={clsx(
                  'h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover/card:h-2 group-hover/card:w-2',
                  style.dotColor,
                )}
              />
            </div>

            {/* Name with optional link */}
            <h5 className="font-display text-base font-medium text-neutral-950 transition-colors duration-300">
              {isLinked ? (
                <Link
                  href={`/kategorie/${interaction.kategoria}/${interaction.slug}`}
                  className="group/link relative inline-flex items-center gap-1.5"
                >
                  <span className="relative">
                    {interaction.substancja}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-neutral-950 transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <svg
                    className="h-3.5 w-3.5 text-neutral-400 opacity-0 transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              ) : (
                interaction.substancja
              )}
            </h5>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover/card:text-neutral-700">
          {interaction.opis}
        </p>
      </div>
    </div>
  )
}
