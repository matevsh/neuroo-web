import clsx from 'clsx'
import {
  type LegalStatus,
  LEGAL_STATUS_COLORS,
  LEGAL_STATUS_LABELS,
} from '@/lib/substances'

interface LegalStatusBadgeProps {
  status: LegalStatus
  className?: string
}

export function LegalStatusBadge({ status, className }: LegalStatusBadgeProps) {
  const colors = LEGAL_STATUS_COLORS[status]
  const label = LEGAL_STATUS_LABELS[status]

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        colors.bg,
        colors.text,
        className,
      )}
    >
      {label}
    </span>
  )
}
