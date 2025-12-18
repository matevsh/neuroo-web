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
    <div className={clsx('my-8 overflow-x-auto', className)}>
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
                    {value && typeof value === 'string' && (
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
      {dosages[0]?.uwagi && (
        <p className="mt-3 text-sm text-neutral-500 italic">{dosages[0].uwagi}</p>
      )}
    </div>
  )
}
