import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateConsultationId(): string {
  const prefix = 'DNT'
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `${prefix}-${timestamp}-${random}`
}

export function formatWhatsAppMessage(nama: string, idKonsultasi: string): string {
  return encodeURIComponent(
    `Halo Dinata Organizer! 👋\n\nSaya ${nama} dengan ID Konsultasi: *${idKonsultasi}*\n\nSaya ingin mengetahui lebih lanjut mengenai layanan Wedding Planner dari Dinata Organizer.\n\nTerima kasih! 🌸`
  )
}

export const WHATSAPP_NUMBER = '6282124503329'

export function getWhatsAppLink(nama?: string, idKonsultasi?: string): string {
  if (nama && idKonsultasi) {
    const message = formatWhatsAppMessage(nama, idKonsultasi)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  }
  const defaultMessage = encodeURIComponent(
    'Halo Dinata Organizer! 👋\n\nSaya ingin mengetahui lebih lanjut mengenai layanan Wedding Planner.\n\nTerima kasih! 🌸'
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMessage}`
}

export function getUserData(): { nama?: string; idKonsultasi?: string } | null {
  if (typeof window === 'undefined') return null
  try {
    const nama = localStorage.getItem('do_nama')
    const idKonsultasi = localStorage.getItem('do_id_konsultasi')
    if (nama && idKonsultasi) return { nama, idKonsultasi }
    return null
  } catch {
    return null
  }
}

export function saveUserData(nama: string, idKonsultasi: string): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem('do_nama', nama)
    localStorage.setItem('do_id_konsultasi', idKonsultasi)
  } catch {
    // silently fail
  }
}
