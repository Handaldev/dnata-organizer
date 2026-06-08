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

export const WHATSAPP_NUMBER = '6282124503329'

// Pesan dari Hero / Floating WA button — belum isi form
export function getHeroWhatsAppLink(): string {
  const message = encodeURIComponent(
    'Halo Dinata Organizer,\n' +
    'Saya tertarik untuk mengetahui lebih lanjut mengenai layanan wedding organizer dari Dinata.\n' +
    'Boleh minta informasinya?\n' +
    '\n' +
    'Sumber: Website - Tombol Konsultasi'
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

// Pesan dari Thank You page — setelah isi form, ada ID konsultasi
export function getThankYouWhatsAppLink(nama: string, idKonsultasi: string, jenisService?: string): string {
  const message = encodeURIComponent(
    'Halo Dinata Organizer,\n' +
    `Saya ${nama} baru saja mengisi form konsultasi di website.\n` +
    `ID Konsultasi saya: ${idKonsultasi}\n` +
    (jenisService ? `Kategori Service: ${jenisService}\n` : '') +
    '\n' +
    'Saya ingin melanjutkan diskusi lebih lanjut.\n' +
    'Sumber: Website - Setelah Isi Form'
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

// Legacy — dipakai kalau ada tempat lain yg masih pakai getWhatsAppLink
export function getWhatsAppLink(nama?: string, idKonsultasi?: string): string {
  if (nama && idKonsultasi) {
    return getThankYouWhatsAppLink(nama, idKonsultasi)
  }
  return getHeroWhatsAppLink()
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