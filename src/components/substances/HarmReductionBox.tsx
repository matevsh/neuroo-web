import clsx from 'clsx'
import { type HarmReductionInfo } from '@/lib/substances'
import { Border } from '@/components/Border'

interface HarmReductionBoxProps {
  harm?: HarmReductionInfo
  title?: string
  children?: React.ReactNode
  className?: string
}

type SectionType = 'zasadyOgolne' | 'setISetting' | 'przeciwwskazania' | 'znakiOstrzegawcze' | 'pierwszaPomoc'

// Section configuration matching InteractionsMatrix style
const SECTION_STYLES: Record<
  SectionType,
  {
    label: string
    bg: string
    hover: string
    accent: string
    text: string
    icon: React.ReactNode
    emphasized: boolean
  }
> = {
  zasadyOgolne: {
    label: 'Zasady ogólne',
    bg: 'bg-green-50/50',
    hover: 'hover:bg-green-50',
    accent: 'bg-green-600',
    text: 'text-green-900',
    emphasized: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  setISetting: {
    label: 'Set i Setting',
    bg: 'bg-blue-50/50',
    hover: 'hover:bg-blue-50',
    accent: 'bg-blue-500',
    text: 'text-blue-900',
    emphasized: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    ),
  },
  przeciwwskazania: {
    label: 'Przeciwwskazania',
    bg: 'bg-red-50/50',
    hover: 'hover:bg-red-50',
    accent: 'bg-red-600',
    text: 'text-red-900',
    emphasized: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    ),
  },
  znakiOstrzegawcze: {
    label: 'Znaki ostrzegawcze',
    bg: 'bg-orange-50/50',
    hover: 'hover:bg-orange-50',
    accent: 'bg-orange-500',
    text: 'text-orange-900',
    emphasized: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    ),
  },
  pierwszaPomoc: {
    label: 'Pierwsza pomoc',
    bg: 'bg-violet-50/50',
    hover: 'hover:bg-violet-50',
    accent: 'bg-violet-500',
    text: 'text-violet-900',
    emphasized: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    ),
  },
}

const SECTION_ORDER: SectionType[] = [
  'zasadyOgolne',
  'setISetting',
  'przeciwwskazania',
  'znakiOstrzegawcze',
  'pierwszaPomoc',
]

export function HarmReductionBox({
  harm,
  title,
  children,
  className,
}: HarmReductionBoxProps) {
  // If custom children provided, use old single-box layout
  if (children) {
    return (
      <div
        className={clsx(
          'group/harm relative my-16 overflow-hidden rounded-4xl bg-neutral-50 transition-all duration-700 hover:bg-white',
          className,
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-500/2 via-transparent to-orange-500/3 opacity-0 transition-opacity duration-700 group-hover/harm:opacity-100" />
        <div className="absolute inset-0 -z-10 rounded-4xl bg-linear-to-br from-amber-200/20 via-orange-100/10 to-amber-200/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover/harm:opacity-100" />

        <Border position="left" className="pl-6">
          <div className="py-12 pr-6">
            <div className="mb-10 flex items-start gap-4">
              <div className="relative shrink-0">
                <div className="relative flex h-11 w-11 items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-amber-100/50 opacity-0 transition-all duration-500 group-hover/harm:scale-110 group-hover/harm:opacity-100" />
                  <svg
                    className="relative z-10 h-6 w-6 text-neutral-600 transition-all duration-500 group-hover/harm:scale-105 group-hover/harm:text-amber-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-3xl font-medium tracking-tight text-neutral-950">
                  {title || 'Redukcja Szkód'}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Kluczowe zasady bezpieczeństwa
                </p>
              </div>
            </div>
            <div className="text-base leading-relaxed text-neutral-700">
              {children}
            </div>
          </div>
        </Border>
      </div>
    )
  }

  // New grouped layout matching InteractionsMatrix
  if (!harm) return null

  return (
    <div className={clsx('my-16 space-y-6', className)}>
      {SECTION_ORDER.map((sectionKey) => {
        const items = harm[sectionKey]
        if (!items || items.length === 0) return null

        const style = SECTION_STYLES[sectionKey]

        return (
          <HarmReductionSection
            key={sectionKey}
            title={style.label}
            items={items}
            style={style}
          />
        )
      })}
    </div>
  )
}

function HarmReductionSection({
  title,
  items,
  style,
}: {
  title: string
  items: string[]
  style: (typeof SECTION_STYLES)[SectionType]
}) {
  return (
    <div className="group/section relative overflow-hidden rounded-4xl bg-white/50 transition-all duration-500 hover:bg-white">
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-neutral-50/50 via-transparent to-neutral-100/30 opacity-0 transition-opacity duration-500 group-hover/section:opacity-100" />

      <Border position="left" className="pl-6">
        <div className="py-8 pr-6">
          {/* Section header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="relative flex h-9 w-9 items-center justify-center">
                <div
                  className={clsx(
                    'absolute inset-0 rounded-xl opacity-0 transition-all duration-500 group-hover/section:scale-110 group-hover/section:opacity-100',
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
                {title}
              </h4>
              <div className="mt-0.5 flex items-center gap-2">
                <div
                  className={clsx(
                    'h-1 w-8 rounded-full transition-all duration-500 group-hover/section:w-12',
                    style.accent,
                  )}
                />
                <span className="text-xs text-neutral-500">
                  {items.length} {items.length === 1 ? 'punkt' : 'punktów'}
                </span>
              </div>
            </div>
          </div>

          {/* Items grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item, idx) => (
              <HarmReductionItem
                key={idx}
                item={item}
                style={style}
                delay={idx * 30}
              />
            ))}
          </div>
        </div>
      </Border>
    </div>
  )
}

function HarmReductionItem({
  item,
  style,
  delay,
}: {
  item: string
  style: (typeof SECTION_STYLES)[SectionType]
  delay: number
}) {
  return (
    <div
      className={clsx(
        'group/item relative overflow-hidden rounded-2xl bg-white/80 p-4 transition-all duration-300',
        style.hover,
        'ring-1 ring-neutral-900/5 hover:ring-neutral-900/10',
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Subtle hover gradient */}
      <div
        className={clsx(
          'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100',
          style.bg,
        )}
      />

      <div className="relative flex items-start gap-2.5">
        {/* Status dot */}
        <div className="mt-1.5 shrink-0">
          <div
            className={clsx(
              'h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover/item:h-2 group-hover/item:w-2',
              style.accent,
            )}
          />
        </div>

        {/* Item text */}
        <p className="text-sm leading-relaxed text-neutral-700 transition-colors duration-300 group-hover/item:text-neutral-900">
          {item}
        </p>

        {/* Emphasized indicator */}
        {style.emphasized && (
          <div className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover/item:opacity-100">
            <svg
              className={clsx('h-4 w-4', style.text)}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}


