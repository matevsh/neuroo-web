import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { RootLayout } from '@/components/RootLayout'
import { SubstanceHeader, RelatedSubstances, WarningBanner } from '@/components/substances'
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

        <Container className="mt-16 sm:mt-24">
          <FadeIn>
            <WarningBanner variant="danger">
              Ta strona ma charakter wylacznie edukacyjny i informacyjny. Uzywanie
              substancji kontrolowanych jest nielegalne i moze byc niebezpieczne dla
              zdrowia. Informacje przedstawione tutaj nie stanowia porady medycznej
              ani zachety do uzywania jakichkolwiek substancji.
            </WarningBanner>

            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
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
