import clsx from 'clsx'
import { type Substance } from '@/lib/substances'
import { LegalStatusBadge } from './LegalStatusBadge'

interface SubstanceInfoBoxProps {
  substance: Substance
  className?: string
}

export function SubstanceInfoBox({
  substance,
  className,
}: SubstanceInfoBoxProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6',
        className,
      )}
    >
      {/* Nazwa systematyczna */}
      {substance.nazwaSystematyczna && (
        <div className="mb-6">
          <h3 className="font-display text-lg font-semibold text-neutral-950">
            {substance.nazwa}
          </h3>
          <p className="mt-1 text-sm text-neutral-600">
            {substance.nazwaSystematyczna}
          </p>
        </div>
      )}

      {/* Informacje podstawowe */}
      <div className="space-y-4 border-t border-neutral-200 pt-6">
        {/* Wzór chemiczny */}
        {substance.wzorChemiczny && (
          <div>
            <dt className="text-sm font-medium text-neutral-500">
              Wzór chemiczny
            </dt>
            <dd className="mt-1 font-mono text-sm text-neutral-950">
              {substance.wzorChemiczny}
            </dd>
          </div>
        )}

        {/* Grupa chemiczna */}
        {substance.grupaChemiczna && (
          <div>
            <dt className="text-sm font-medium text-neutral-500">
              Grupa chemiczna
            </dt>
            <dd className="mt-1 text-sm text-neutral-950">
              {substance.grupaChemiczna}
            </dd>
          </div>
        )}

        {/* Status prawny */}
        <div>
          <dt className="text-sm font-medium text-neutral-500">
            Status prawny (PL)
          </dt>
          <dd className="mt-1">
            <LegalStatusBadge status={substance.klasaPrawna} />
          </dd>
        </div>
      </div>

      {/* Czas działania */}
      {substance.czasDzialania && (
        <div className="mt-6 space-y-3 border-t border-neutral-200 pt-6">
          <h4 className="text-sm font-semibold text-neutral-950">
            Czas działania
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">Początek</span>
              <span className="font-medium text-neutral-950">
                {substance.czasDzialania.poczatek}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">Szczyt</span>
              <span className="font-medium text-neutral-950">
                {substance.czasDzialania.szczyt}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">Całkowity czas</span>
              <span className="font-medium text-neutral-950">
                {substance.czasDzialania.calkowity}
              </span>
            </div>
            {substance.czasDzialania.popierwsze && (
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Popierwsze</span>
                <span className="font-medium text-neutral-950">
                  {substance.czasDzialania.popierwsze}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tolerancja */}
      {substance.tolerancja && (
        <div className="mt-6 space-y-3 border-t border-neutral-200 pt-6">
          <h4 className="text-sm font-semibold text-neutral-950">Tolerancja</h4>
          <div className="space-y-2">
            {substance.tolerancja.pelna && (
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Pełna</span>
                <span className="font-medium text-neutral-950">
                  {substance.tolerancja.pelna}
                </span>
              </div>
            )}
            {substance.tolerancja.polowa && (
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Połowa</span>
                <span className="font-medium text-neutral-950">
                  {substance.tolerancja.polowa}
                </span>
              </div>
            )}
            {substance.tolerancja.zero && (
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Zero</span>
                <span className="font-medium text-neutral-950">
                  {substance.tolerancja.zero}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Efekty główne */}
      {substance.efektyGlowne && substance.efektyGlowne.length > 0 && (
        <div className="mt-6 space-y-3 border-t border-neutral-200 pt-6">
          <h4 className="text-sm font-semibold text-neutral-950">
            Główne efekty
          </h4>
          <ul className="space-y-1.5 text-sm text-neutral-600">
            {substance.efektyGlowne.slice(0, 5).map((efekt, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-400" />
                <span>{efekt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Data aktualizacji */}
      {substance.dataAktualizacji && (
        <div className="mt-6 border-t border-neutral-200 pt-4 text-xs text-neutral-400">
          Ostatnia aktualizacja: {substance.dataAktualizacji}
        </div>
      )}
    </div>
  )
}

