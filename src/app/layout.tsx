import { type Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

import '@/styles/tailwind.css'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className={`flex min-h-full flex-col ${ubuntu.className}`}>
        <svg className="hidden">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.5"
              numOctaves="5"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="1 0" />
            </feComponentTransfer>
            <feComponentTransfer>
              <feFuncR type="linear" slope="3" intercept="-0.5" />
              <feFuncG type="linear" slope="3" intercept="-0.5" />
              <feFuncB type="linear" slope="3" intercept="-0.5" />
            </feComponentTransfer>
          </filter>
        </svg>
        <div
          className="fixed inset-0 pointer-events-none z-[9999] opacity-5"
          style={{
            backgroundImage: 'url(https://i.imgur.com/awvRvM3.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="fixed inset-0 pointer-events-none z-[10000] opacity-80"
          style={{
            filter: 'url(#noise)',
            mixBlendMode: 'overlay',
          }}
        />
        {children}
      </body>
    </html>
  )
}
