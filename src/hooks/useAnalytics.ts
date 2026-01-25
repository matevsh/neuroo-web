'use client'

import { useCallback } from 'react'

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}

interface EventParams {
  action: string
  category?: string
  label?: string
  value?: number
  [key: string]: any
}

export function useAnalytics() {
  const trackEvent = useCallback(({ action, category, label, value, ...additionalParams }: EventParams) => {
    if (typeof window === 'undefined' || !window.gtag || process.env.NODE_ENV !== 'production') {
      return
    }

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...additionalParams,
    })
  }, [])

  const trackPageView = useCallback((url: string) => {
    if (typeof window === 'undefined' || !window.gtag || process.env.NODE_ENV !== 'production') {
      return
    }

    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    if (measurementId) {
      window.gtag('config', measurementId, {
        page_path: url,
      })
    }
  }, [])

  return {
    trackEvent,
    trackPageView,
  }
}
