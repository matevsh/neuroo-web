import clsx from 'clsx'
import {
  type DosageInfo,
  type DoseLevel,
  DOSE_COLORS,
  DOSE_LABELS,
  ROUTE_LABELS,
} from '@/lib/substances'

const DOSE_KEYS: DoseLevel[] = ['prog', 'lekka', 'srednia', 'silna', 'bardzo-silna']

interface DosageTableProps {
  dosages: DosageInfo[]
  className?: string
}

export function DosageTable({ dosages, className }: DosageTableProps) {
  return (
    <div className={clsx('my-8', className)}>
      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="py-3 px-4 text-left font-semibold text-neutral-950">
                Droga podania
              </th>
              {DOSE_KEYS.map((level) => (
                <th
                  key={level}
                  className="py-3 px-4 text-center font-semibold text-neutral-950"
                >
                  {DOSE_LABELS[level]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dosages.map((dosage, idx) => (
              <tr key={idx} className="border-b border-neutral-100">
                <td className="py-3 px-4 font-medium text-neutral-700">
                  {ROUTE_LABELS[dosage.route]}
                </td>
                {DOSE_KEYS.map((level) => {
                  const value =
                    level === 'bardzo-silna'
                      ? dosage.bardzoSilna
                      : dosage[level as keyof DosageInfo]
                  const colors = DOSE_COLORS[level]

                  return (
                    <td key={level} className="py-3 px-4 text-center">
                      {value && (
                        <span
                          className={clsx(
                            'inline-block rounded-full px-3 py-1 text-xs font-medium',
                            colors.bg,
                            colors.text,
                          )}
                        >
                          {value}
                        </span>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-6">
        {dosages.map((dosage, idx) => (
          <div
            key={idx}
            className="border border-neutral-200 rounded-xl overflow-hidden"
          >
            <div className="bg-neutral-50 px-4 py-3 border-b border-neutral-200">
              <h3 className="font-semibold text-neutral-950">
                {ROUTE_LABELS[dosage.route]}
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {DOSE_KEYS.map((level) => {
                const value =
                  level === 'bardzo-silna'
                    ? dosage.bardzoSilna
                    : dosage[level as keyof DosageInfo]
                const colors = DOSE_COLORS[level]

                if (!value) return null

                return (
                  <div
                    key={level}
                    className="flex items-center justify-between py-2"
                  >
                    <span className="text-sm font-medium text-neutral-700">
                      {DOSE_LABELS[level]}
                    </span>
                    <span
                      className={clsx(
                        'inline-block rounded-full px-4 py-1.5 text-sm font-medium',
                        colors.bg,
                        colors.text,
                      )}
                    >
                      {value}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {dosages[0]?.uwagi && (
        <p className="mt-4 text-sm text-neutral-500 italic">{dosages[0].uwagi}</p>
      )}
    </div>
  )
}
