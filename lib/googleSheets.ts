// Google Apps Script Web App URL
// Replace with your deployed Apps Script URL
const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || ''

export interface LeadData {
  nama: string
  noHp: string
  tanggalAcara?: string
  kota: string
  idKonsultasi: string
  status: 'Prospek' | 'Hot Lead'
  timestamp?: string
}

export async function submitLeadToSheet(data: LeadData): Promise<boolean> {
  if (!APPS_SCRIPT_URL) {
    console.warn('Google Apps Script URL not configured. Data not saved to sheet.')
    return false
  }

  try {
    const payload: LeadData = {
      ...data,
      timestamp: new Date().toISOString(),
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    return response.ok
  } catch (error) {
    console.error('Failed to submit lead to Google Sheet:', error)
    return false
  }
}

export async function updateLeadStatus(
  idKonsultasi: string,
  status: 'Hot Lead'
): Promise<boolean> {
  if (!APPS_SCRIPT_URL) return false

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idKonsultasi, status, action: 'update_status' }),
    })
    return response.ok
  } catch {
    return false
  }
}
