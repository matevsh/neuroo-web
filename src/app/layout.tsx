'use client'

import { Ubuntu } from 'next/font/google'

import '@/styles/tailwind.css'
import { PostProcessingProvider, PostProcessingEffects } from '@/components/PostProcessingSettings'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="h-full bg-neutral-950 text-base antialiased">
      <body className={`flex min-h-full flex-col ${ubuntu.className}`}>
        <PostProcessingProvider>
          <PostProcessingEffects />
          {children}
        </PostProcessingProvider>
      </body>
    </html>
  )
}
