import clsx from 'clsx'

interface WarningBannerProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'danger' | 'caution'
}

export function WarningBanner({
  children,
  className,
  variant = 'default',
}: WarningBannerProps) {
  return (
    <div
      className={clsx(
        'mb-10 rounded-2xl p-6',
        variant === 'danger' && 'bg-red-950 text-white',
        variant === 'caution' && 'bg-amber-100 text-amber-900',
        variant === 'default' && 'bg-neutral-900 text-white',
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <svg
          className={clsx(
            'h-6 w-6 flex-shrink-0',
            variant === 'danger' && 'text-red-400',
            variant === 'caution' && 'text-amber-600',
            variant === 'default' && 'text-neutral-400',
          )}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
