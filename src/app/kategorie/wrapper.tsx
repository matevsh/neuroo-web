import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { RootLayout } from '@/components/RootLayout'
import { SubstanceHeader, RelatedSubstances, SubstanceInfoBox } from '@/components/substances'
import { type Substance, CATEGORIES } from '@/lib/substances'
import { loadSubstances, type MDXSubstance } from '@/lib/mdx'

export default async function SubstanceWrapper({
  substance,
  children,
}: {
  substance: Substance
  children: React.ReactNode
}) {
  const categoryInfo = CATEGORIES[substance.kategoria]

  // Pobierz powiązane substancje
  let relatedSubstances: MDXSubstance[] = []
  if (substance.powiazane && substance.powiazane.length > 0) {
    const allSubstances = await loadSubstances()
    relatedSubstances = allSubstances.filter((s) =>
      substance.powiazane?.includes(s.slug),
    )
  }

  return (
    <RootLayout>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <SubstanceHeader substance={substance} categoryInfo={categoryInfo} />

        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-[1fr_380px]">
            {/* Main content */}
            <FadeIn>
              <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
            </FadeIn>

            {/* Sidebar info box */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <FadeIn>
                <SubstanceInfoBox substance={substance} />
              </FadeIn>
            </aside>
          </div>
        </div>
      </article>

      {relatedSubstances.length > 0 && (
        <RelatedSubstances
          substances={relatedSubstances}
          className="mt-24 py-24 sm:mt-32"
        />
      )}
    </RootLayout>
  )
}
