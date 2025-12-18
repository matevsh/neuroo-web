import clsx from 'clsx'
import { type HarmReductionInfo } from '@/lib/substances'
import { Border } from '@/components/Border'

interface HarmReductionBoxProps {
  harm?: HarmReductionInfo
  title?: string
  children?: React.ReactNode
  className?: string
}

export function HarmReductionBox({
  harm,
  title,
  children,
  className,
}: HarmReductionBoxProps) {
  return (
    <Border
      position="left"
      className={clsx(
        'my-10 rounded-r-2xl bg-amber-50 p-6 pl-8',
        className,
      )}
    >
      <div className="mb-4 flex items-center gap-2">
        <svg
          className="h-5 w-5 text-amber-600"
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
        <h3 className="font-display text-lg font-semibold text-neutral-950">
          {title || 'Harm Reduction'}
        </h3>
      </div>

      {children ? (
        <div className="text-sm text-neutral-700">{children}</div>
      ) : (
        harm && (
          <div className="space-y-6">
            {harm.zasadyOgolne.length > 0 && (
              <Section title="Zasady ogolne" items={harm.zasadyOgolne} />
            )}

            {harm.setISetting.length > 0 && (
              <Section title="Set i Setting" items={harm.setISetting} />
            )}

            {harm.przeciwwskazania.length > 0 && (
              <Section
                title="Przeciwwskazania"
                items={harm.przeciwwskazania}
                variant="danger"
              />
            )}

            {harm.znakiOstrzegawcze.length > 0 && (
              <Section
                title="Znaki ostrzegawcze"
                items={harm.znakiOstrzegawcze}
                variant="warning"
              />
            )}

            {harm.pierwszaPomoc && harm.pierwszaPomoc.length > 0 && (
              <Section
                title="Pierwsza pomoc"
                items={harm.pierwszaPomoc}
                variant="info"
              />
            )}
          </div>
        )
      )}
    </Border>
  )
}

function Section({
  title,
  items,
  variant = 'default',
}: {
  title: string
  items: string[]
  variant?: 'default' | 'danger' | 'warning' | 'info'
}) {
  return (
    <div>
      <h4
        className={clsx(
          'mb-2 text-sm font-semibold',
          variant === 'danger' && 'text-red-800',
          variant === 'warning' && 'text-orange-800',
          variant === 'info' && 'text-blue-800',
          variant === 'default' && 'text-neutral-800',
        )}
      >
        {title}
      </h4>
      <ul
        className={clsx(
          'list-inside list-disc space-y-1 text-sm',
          variant === 'danger' && 'text-red-700',
          variant === 'warning' && 'text-orange-700',
          variant === 'info' && 'text-blue-700',
          variant === 'default' && 'text-neutral-700',
        )}
      >
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
