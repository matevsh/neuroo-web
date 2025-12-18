import { type Metadata } from 'next'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
import { RootLayout } from '@/components/RootLayout'

const substanceGroups = [
  { name: 'Psychodeliki', slug: 'psychodeliki', icon: '🍄', description: 'LSD, psylocybina, DMT' },
  { name: 'Dysocjanty', slug: 'dysocjanty', icon: '🌀', description: 'Ketamina, DXM, PCP' },
  { name: 'Stymulanty', slug: 'stymulanty', icon: '⚡', description: 'Amfetamina, kokaina, kofeina' },
  { name: 'Depresanty', slug: 'depresanty', icon: '😴', description: 'Alkohol, benzodiazepiny, GHB' },
  { name: 'Kannabinoidy', slug: 'kannabinoidy', icon: '🌿', description: 'THC, CBD, syntetyki' },
  { name: 'Opioidy', slug: 'opioidy', icon: '💊', description: 'Morfina, fentanyl, kodeina' },
  { name: 'Empatogeny', slug: 'empatogeny', icon: '❤️', description: 'MDMA, MDA, 6-APB' },
  { name: 'Nootropiki', slug: 'nootropiki', icon: '🧠', description: 'Modafinil, piracetam, L-teanina' },
]

function SubstanceGroups() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Kategorie substancji psychoaktywnych
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {substanceGroups.map((group) => (
              <li key={group.name}>
                <FadeIn>
                  <Link
                    href={`/kategorie/${group.slug}`}
                    className="group relative flex flex-col items-center justify-center rounded-2xl bg-neutral-900 p-6 transition hover:bg-neutral-800"
                  >
                    <div className="text-5xl mb-3">{group.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{group.name}</h3>
                    <p className="text-xs text-neutral-400 text-center">{group.description}</p>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
        <FadeIn className="mt-10 flex justify-center">
          <Link
            href="/kategorie"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            Zobacz pelna encyklopedie
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </FadeIn>
      </Container>
    </div>
  )
}

const substanceReports = [
  {
    id: 'kokaina',
    name: 'Kokaina',
    icon: '❄️',
    category: 'Stymulant',
    date: '2024-12',
    summary: 'Silny stymulant układu nerwowego wydobywany z liści koki. Powoduje euforię, zwiększoną energię i pewność siebie.',
    riskLevel: 'Wysokie ryzyko',
    duration: '30-90 min',
    reports: 247
  },
  {
    id: 'benzydamina',
    name: 'Benzydamina',
    icon: '💊',
    category: 'Dysocjant/Deliriant',
    date: '2024-11',
    summary: 'Lek przeciwzapalny dostępny bez recepty, w wysokich dawkach wywołuje efekty halucynogenne i dysocjacyjne.',
    riskLevel: 'Średnie ryzyko',
    duration: '6-8 godzin',
    reports: 89
  },
  {
    id: 'bielun',
    name: 'Bieluń',
    icon: '🌿',
    category: 'Deliriant',
    date: '2024-10',
    summary: 'Roślina zawierająca toksyczne alkaloidy tropanowe. Wywołuje ciężkie delirium, halucynacje i może być śmiertelna.',
    riskLevel: 'Ekstremalnie niebezpieczne',
    duration: '8-24 godziny',
    reports: 34
  }
]

function SubstanceReports() {
  return (
    <>
      <SectionIntro
        title="Najnowsze raporty użytkowników"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Rzeczywiste doświadczenia osób, które używały różnych substancji psychoaktywnych.
          Dowiedz się o efektach, dawkowaniu i potencjalnych zagrożeniach.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {substanceReports.map((report) => (
            <FadeIn key={report.id} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <div className="flex items-start justify-between">
                  <div className="text-4xl">{report.icon}</div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                    report.riskLevel === 'Ekstremalnie niebezpieczne' 
                      ? 'bg-red-100 text-red-800' 
                      : report.riskLevel === 'Wysokie ryzyko'
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {report.riskLevel}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  <Link href={`/substancje/${report.id}`}>
                    <span className="absolute inset-0 rounded-3xl" />
                    {report.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm font-semibold text-neutral-600">
                  {report.category}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {report.summary}
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600">
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{report.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <span>{report.reports} raportów</span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
        <FadeIn className="mt-10 flex justify-center">
          <Link
            href="/raporty"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Zobacz wszystkie raporty
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </FadeIn>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-4xl">
          <h1 className="text-4xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Dowiedz się więcej o substancjach i bądź bezpieczny
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Rzetelne, neutralne informacje o substancjach psychoaktywnych — efekty, dawkowanie i bezpieczeństwo.
          </p>
        </FadeIn>
      </Container>

      <SubstanceGroups />

      <SubstanceReports />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
