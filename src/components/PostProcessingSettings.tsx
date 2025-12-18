'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type PostProcessingSettings = {
  gradientEnabled: boolean
  grainEnabled: boolean
  setGradientEnabled: (enabled: boolean) => void
  setGrainEnabled: (enabled: boolean) => void
}

const PostProcessingContext = createContext<PostProcessingSettings | null>(null)

export function usePostProcessing() {
  const context = useContext(PostProcessingContext)
  if (!context) {
    throw new Error('usePostProcessing must be used within PostProcessingProvider')
  }
  return context
}

export function PostProcessingProvider({ children }: { children: React.ReactNode }) {
  const [gradientEnabled, setGradientEnabled] = useState(true)
  const [grainEnabled, setGrainEnabled] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Load settings from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const savedGradient = localStorage.getItem('gradientEnabled')
    const savedGrain = localStorage.getItem('grainEnabled')

    if (savedGradient !== null) {
      setGradientEnabled(savedGradient === 'true')
    }
    if (savedGrain !== null) {
      setGrainEnabled(savedGrain === 'true')
    }
  }, [])

  // Save settings to localStorage when they change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('gradientEnabled', String(gradientEnabled))
    }
  }, [gradientEnabled, mounted])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('grainEnabled', String(grainEnabled))
    }
  }, [grainEnabled, mounted])

  return (
    <PostProcessingContext.Provider
      value={{
        gradientEnabled,
        grainEnabled,
        setGradientEnabled,
        setGrainEnabled,
      }}
    >
      {children}
    </PostProcessingContext.Provider>
  )
}

export function PostProcessingEffects() {
  const { gradientEnabled, grainEnabled } = usePostProcessing()

  return (
    <>
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
      {gradientEnabled && (
        <div
          className="fixed inset-0 pointer-events-none z-[9999] opacity-5 transition-opacity duration-300"
          style={{
            backgroundImage: 'url(https://i.imgur.com/awvRvM3.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}
      {grainEnabled && (
        <div
          className="pointer-events-none fixed inset-0 z-[10000] opacity-50 transition-opacity duration-300"
          style={{
            filter: 'url(#noise)',
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </>
  )
}

export function PostProcessingSettingsPanel() {
  const { gradientEnabled, grainEnabled, setGradientEnabled, setGrainEnabled } =
    usePostProcessing()

  return (
    <div className="bg-neutral-950 px-6 py-8 sm:px-0">
      <div className="mx-auto max-w-md">
        <h3 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <span className="text-2xl">⚙️</span>
          Ustawienia efektów wizualnych
        </h3>
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer group">
            <span className="text-white text-base group-hover:text-neutral-300 transition">
              Gradient tła
            </span>
            <button
              type="button"
              onClick={() => setGradientEnabled(!gradientEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                gradientEnabled ? 'bg-emerald-600' : 'bg-neutral-700'
              }`}
              role="switch"
              aria-checked={gradientEnabled}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  gradientEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </label>
          <label className="flex items-center justify-between cursor-pointer group">
            <span className="text-white text-base group-hover:text-neutral-300 transition">
              Ziarno (grain)
            </span>
            <button
              type="button"
              onClick={() => setGrainEnabled(!grainEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                grainEnabled ? 'bg-emerald-600' : 'bg-neutral-700'
              }`}
              role="switch"
              aria-checked={grainEnabled}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  grainEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </label>
        </div>
        <p className="mt-6 text-sm text-neutral-400">
          Wyłączenie efektów może poprawić wydajność na słabszych urządzeniach.
        </p>
      </div>
    </div>
  )
}

export function PostProcessingSettingsInline() {
  const { gradientEnabled, grainEnabled, setGradientEnabled, setGrainEnabled } =
    usePostProcessing()

  return (
    <div className="space-y-4">
      <label className="flex items-center justify-between cursor-pointer group">
        <div>
          <span className="text-white text-base font-medium block group-hover:text-neutral-300 transition">
            Gradient tła
          </span>
          <span className="text-sm text-neutral-400 mt-0.5 block">
            Kolorowy gradient w tle strony
          </span>
        </div>
        <button
          type="button"
          onClick={() => setGradientEnabled(!gradientEnabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
            gradientEnabled ? 'bg-emerald-600' : 'bg-neutral-700'
          }`}
          role="switch"
          aria-checked={gradientEnabled}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              gradientEnabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </label>

      <label className="flex items-center justify-between cursor-pointer group">
        <div>
          <span className="text-white text-base font-medium block group-hover:text-neutral-300 transition">
            Ziarno (grain)
          </span>
          <span className="text-sm text-neutral-400 mt-0.5 block">
            Efekt szumu filmowego
          </span>
        </div>
        <button
          type="button"
          onClick={() => setGrainEnabled(!grainEnabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
            grainEnabled ? 'bg-emerald-600' : 'bg-neutral-700'
          }`}
          role="switch"
          aria-checked={grainEnabled}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              grainEnabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </label>

      <div className="pt-2 px-3 py-3 bg-neutral-800/50 rounded-lg">
        <p className="text-sm text-neutral-300">
          💡 Wyłączenie efektów może poprawić wydajność na słabszych urządzeniach.
        </p>
      </div>
    </div>
  )
}

export function PostProcessingSettingsButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { gradientEnabled, grainEnabled, setGradientEnabled, setGrainEnabled } =
    usePostProcessing()

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10"
        aria-label="Ustawienia efektów wizualnych"
        title="Ustawienia efektów wizualnych"
      >
        <svg
          className="h-6 w-6 fill-neutral-950 transition group-hover:fill-neutral-700"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100000]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[100001]"
            >
              <div className="bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 mx-4">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800">
                  <h3 className="font-display text-xl font-semibold text-white flex items-center gap-2">
                    <span className="text-2xl">⚙️</span>
                    Ustawienia efektów wizualnych
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition"
                    aria-label="Zamknij"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="px-6 py-6 space-y-5">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div>
                      <span className="text-white text-base font-medium block group-hover:text-neutral-300 transition">
                        Gradient tła
                      </span>
                      <span className="text-sm text-neutral-400 mt-0.5 block">
                        Kolorowy gradient w tle strony
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGradientEnabled(!gradientEnabled)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                        gradientEnabled ? 'bg-emerald-600' : 'bg-neutral-700'
                      }`}
                      role="switch"
                      aria-checked={gradientEnabled}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          gradientEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>

                  <label className="flex items-center justify-between cursor-pointer group">
                    <div>
                      <span className="text-white text-base font-medium block group-hover:text-neutral-300 transition">
                        Ziarno (grain)
                      </span>
                      <span className="text-sm text-neutral-400 mt-0.5 block">
                        Efekt szumu filmowego
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGrainEnabled(!grainEnabled)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                        grainEnabled ? 'bg-emerald-600' : 'bg-neutral-700'
                      }`}
                      role="switch"
                      aria-checked={grainEnabled}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          grainEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>

                  <div className="pt-2 px-3 py-3 bg-neutral-800/50 rounded-lg">
                    <p className="text-sm text-neutral-300">
                      💡 Wyłączenie efektów może poprawić wydajność na słabszych urządzeniach.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

