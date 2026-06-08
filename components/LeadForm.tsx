'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Loader2, CheckCircle2, Download } from 'lucide-react'
import { generateConsultationId, saveUserData } from '@/lib/utils'
import { submitLeadToSheet } from '@/lib/googleSheets'
import { trackFormSubmit } from '@/lib/analytics'
import { useRouter } from 'next/navigation'

export const serviceOptions = [
  { value: '', label: 'Pilih Jenis Service' },
  { value: 'Wedding Planner', label: 'Wedding Planner Package' },
  { value: 'WO on the Day', label: 'WO on the Day Package' },
  { value: 'All In Wedding', label: 'All In Package – Wedding' },
  { value: 'All In Pre Event', label: 'All In Package – Pre Event' },
  { value: 'Custom', label: 'Custom Package' },
]

// Map service → pricing list file di /public/files/
export const pricingFileMap: Record<string, string> = {
  'Wedding Planner': '/files/pricing-wedding-planner.pdf',
  'WO on the Day':   '/files/pricing-wo-on-the-day.pdf',
  'All In Wedding':  '/files/pricing-all-in-wedding.pdf',
  'All In Pre Event':'/files/pricing-all-in-pre-event.pdf',
}

const kotaOptions = [
  { value: '', label: 'Pilih Kota / Wilayah' },
  { value: 'Jabodetabek', label: 'Jabodetabek' },
  { value: 'Banten', label: 'Banten' },
  { value: 'Bandung', label: 'Bandung' },
  { value: 'Lainnya', label: 'Lainnya' },
]

interface FormData {
  nama: string
  noHp: string
  jenisService: string
  tanggalAcara: string
  lokasiAcara: string
  jumlahPax: string
  kota: string
}

interface FormErrors {
  nama?: string
  noHp?: string
  jenisService?: string
  tanggalAcara?: string
  lokasiAcara?: string
  jumlahPax?: string
  kota?: string
}

export default function LeadForm() {
  const router = useRouter()
  const [form, setForm] = useState<FormData>({
    nama: '',
    noHp: '',
    jenisService: '',
    tanggalAcara: '',
    lokasiAcara: '',
    jumlahPax: '',
    kota: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)

  const isCustom = form.jenisService === 'Custom'

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!form.nama.trim()) e.nama = 'Nama calon pengantin wajib diisi'
    if (!form.noHp.trim()) {
      e.noHp = 'Nomor WhatsApp wajib diisi'
    } else if (!/^[0-9+\-\s]{8,15}$/.test(form.noHp)) {
      e.noHp = 'Format nomor tidak valid'
    }
    if (!form.jenisService) e.jenisService = 'Jenis service wajib dipilih'
    if (!form.tanggalAcara) e.tanggalAcara = 'Tanggal acara wajib diisi'
    if (!form.lokasiAcara.trim()) e.lokasiAcara = 'Lokasi acara wajib diisi'
    if (!form.jumlahPax.trim()) {
      e.jumlahPax = 'Jumlah pax wajib diisi'
    } else if (isNaN(Number(form.jumlahPax)) || Number(form.jumlahPax) <= 0) {
      e.jumlahPax = 'Masukkan angka yang valid'
    }
    if (!form.kota) e.kota = 'Kota wajib dipilih'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return

    setLoading(true)
    const idKonsultasi = generateConsultationId()

    try {
      saveUserData(form.nama, idKonsultasi)

      await submitLeadToSheet({
        nama: form.nama,
        noHp: form.noHp,
        jenisService: form.jenisService,
        tanggalAcara: form.tanggalAcara,
        lokasiAcara: form.lokasiAcara,
        jumlahPax: form.jumlahPax,
        kota: form.kota,
        idKonsultasi,
        status: 'Prospek',
      })

      trackFormSubmit({ nama: form.nama, kota: form.kota, idKonsultasi })

      // Pass service info to thank-you page via query param for conditional download
      const query = isCustom ? '' : `?service=${encodeURIComponent(form.jenisService)}`
      router.push(`/thank-you${query}`)
    } catch (err) {
      console.error('Form submission error:', err)
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const inputClass = (err?: string) =>
    `w-full px-4 py-3 rounded-xl border bg-white text-[#1a1a1a] placeholder-gray-400 text-sm font-dm transition-all outline-none focus:ring-2 focus:ring-[#C8A96E]/40 focus:border-[#C8A96E] ${err ? 'border-red-400' : 'border-[#E0D8D0]'}`

  const labelClass = 'block text-sm font-dm font-medium text-[#1B3A2E] mb-1.5'
  const fontDm = { fontFamily: 'DM Sans, sans-serif' }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">

      {/* Nama Calon Pengantin */}
      <div>
        <label htmlFor="nama" className={labelClass} style={fontDm}>
          Nama Calon Pengantin <span className="text-red-400">*</span>
        </label>
        <input id="nama" name="nama" type="text" value={form.nama} onChange={handleChange}
          placeholder="Contoh: Siti & Budi"
          className={inputClass(errors.nama)} style={fontDm} />
        {errors.nama && <p className="mt-1 text-xs text-red-500">{errors.nama}</p>}
      </div>

      {/* Nomor WhatsApp */}
      <div>
        <label htmlFor="noHp" className={labelClass} style={fontDm}>
          Nomor WhatsApp <span className="text-red-400">*</span>
        </label>
        <input id="noHp" name="noHp" type="tel" value={form.noHp} onChange={handleChange}
          placeholder="08xxxxxxxxxx"
          className={inputClass(errors.noHp)} style={fontDm} />
        {errors.noHp && <p className="mt-1 text-xs text-red-500">{errors.noHp}</p>}
      </div>

      {/* Jenis Service */}
      <div>
        <label htmlFor="jenisService" className={labelClass} style={fontDm}>
          Jenis Service <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <select id="jenisService" name="jenisService" value={form.jenisService} onChange={handleChange}
            className={`${inputClass(errors.jenisService)} appearance-none pr-10 ${form.jenisService ? 'text-[#1a1a1a]' : 'text-gray-400'}`}
            style={fontDm}>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        {errors.jenisService && <p className="mt-1 text-xs text-red-500">{errors.jenisService}</p>}
        {/* Info: Custom tidak dapat pricing list */}
        {isCustom && (
          <p className="mt-1.5 text-xs text-[#9C7B5A] font-dm" style={fontDm}>
            Custom Package tidak memiliki pricing list — tim kami akan langsung menghubungi kamu.
          </p>
        )}
      </div>

      {/* Tanggal Acara */}
      <div>
        <label htmlFor="tanggalAcara" className={labelClass} style={fontDm}>
          Tanggal Acara <span className="text-red-400">*</span>
        </label>
        <input id="tanggalAcara" name="tanggalAcara" type="date" value={form.tanggalAcara} onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          className={inputClass(errors.tanggalAcara)} style={fontDm} />
        {errors.tanggalAcara && <p className="mt-1 text-xs text-red-500">{errors.tanggalAcara}</p>}
      </div>

      {/* Lokasi Acara */}
      <div>
        <label htmlFor="lokasiAcara" className={labelClass} style={fontDm}>
          Lokasi Acara <span className="text-red-400">*</span>
        </label>
        <input id="lokasiAcara" name="lokasiAcara" type="text" value={form.lokasiAcara} onChange={handleChange}
          placeholder="Contoh: Gedung Balai Kartini, Jakarta"
          className={inputClass(errors.lokasiAcara)} style={fontDm} />
        {errors.lokasiAcara && <p className="mt-1 text-xs text-red-500">{errors.lokasiAcara}</p>}
      </div>

      {/* Jumlah Pax */}
      <div>
        <label htmlFor="jumlahPax" className={labelClass} style={fontDm}>
          Jumlah Pax (Tamu) <span className="text-red-400">*</span>
        </label>
        <input id="jumlahPax" name="jumlahPax" type="number" min="1" value={form.jumlahPax} onChange={handleChange}
          placeholder="Contoh: 300"
          className={inputClass(errors.jumlahPax)} style={fontDm} />
        {errors.jumlahPax && <p className="mt-1 text-xs text-red-500">{errors.jumlahPax}</p>}
      </div>

      {/* Kota */}
      <div>
        <label htmlFor="kota" className={labelClass} style={fontDm}>
          Kota <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <select id="kota" name="kota" value={form.kota} onChange={handleChange}
            className={`${inputClass(errors.kota)} appearance-none pr-10 ${form.kota ? 'text-[#1a1a1a]' : 'text-gray-400'}`}
            style={fontDm}>
            {kotaOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        {errors.kota && <p className="mt-1 text-xs text-red-500">{errors.kota}</p>}
      </div>

      <p className="text-xs text-gray-500 font-dm leading-relaxed pt-1" style={fontDm}>
        🔒 Data kamu aman. Hanya digunakan untuk keperluan konsultasi.
      </p>

      {/* Submit */}
      <motion.button
        type="submit" disabled={loading}
        whileHover={{ scale: loading ? 1 : 1.01 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
        className="w-full py-4 bg-[#1B3A2E] text-[#FAF8F4] font-dm font-semibold text-sm tracking-wide rounded-xl transition-all duration-300 hover:bg-[#C8A96E] hover:text-[#1B3A2E] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={fontDm}
      >
        {loading ? (
          <><Loader2 size={18} className="animate-spin" /> Memproses...</>
        ) : isCustom ? (
          <><CheckCircle2 size={18} /> Konsultasi Sekarang</>
        ) : (
          <><Download size={18} /> Download Pricing List & Konsultasi</>
        )}
      </motion.button>
    </form>
  )
}