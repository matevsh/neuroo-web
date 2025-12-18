import clsx from 'clsx'
import { type TimelinePhase } from '@/lib/substances'

interface EffectsTimelineProps {
  phases: TimelinePhase[]
  className?: string
}

const PHASE_COLORS = [
  'bg-green-500',
  'bg-yellow-500',
  'bg-orange-500',
  'bg-red-500',
  'bg-purple-500',
]

export function EffectsTimeline({ phases, className }: EffectsTimelineProps) {
  if (!phases || phases.length === 0) return null

  return (
    <div className={clsx('my-8', className)}>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-200" />

        {/* Phases */}
        <div className="space-y-6">
          {phases.map((phase, idx) => (
            <div key={idx} className="relative pl-12">
              {/* Dot */}
              <div
                className={clsx(
                  'absolute left-2.5 top-1.5 h-3 w-3 rounded-full',
                  PHASE_COLORS[idx % PHASE_COLORS.length],
                )}
              />

              {/* Content */}
              <div className="rounded-lg bg-neutral-50 p-4">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h4 className="font-semibold text-neutral-950">{phase.nazwa}</h4>
                  <span className="text-sm text-neutral-500">
                    {phase.poczatek} - {phase.koniec}
                  </span>
                </div>
                {phase.opis && (
                  <p className="mt-2 text-sm text-neutral-600">{phase.opis}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
