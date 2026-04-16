// Google Analytics event tracking
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    fbq: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export function trackFormSubmit(data: {
  nama: string
  kota: string
  idKonsultasi: string
}) {
  if (typeof window === 'undefined') return

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'Lead',
      event_label: 'Form Submit',
      value: 1,
      custom_map: {
        id_konsultasi: data.idKonsultasi,
        kota: data.kota,
      },
    })
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Wedding Planner Consultation',
      content_category: 'Wedding',
    })
  }
}

export function trackWhatsAppClick(source: string) {
  if (typeof window === 'undefined') return

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'Hot Lead',
      event_label: source,
      value: 1,
    })
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'WhatsApp Click',
      content_category: source,
    })
  }
}

export function trackPageView(url: string) {
  if (typeof window === 'undefined') return

  if (window.gtag) {
    window.gtag('config', GA_TRACKING_ID, { page_path: url })
  }
}
