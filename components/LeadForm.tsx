'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Loader2, CheckCircle2 } from 'lucide-react'
import { generateConsultationId, saveUserData } from '@/lib/utils'
import { submitLeadToSheet } from '@/lib/googleSheets'
import { trackFormSubmit } from '@/lib/analytics'
import { useRouter } from 'next/navigation'

const kotaOptions = [
  { value: '', label: 'Pilih Kota / Wilayah' },
  { value: 'Jabodetabek', label: 'Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)' },
  { value: 'Bogor', label: 'Bogor' },
  { value: 'Depok', label: 'Depok' },
  { value: 'Tangerang', label: 'Tangerang' },
  { value: 'Bekasi', label: 'Bekasi' },
  { value: 'Aceh', label: 'Aceh' },
]

interface FormData {
  nama: string
  noHp: string
  tanggalAcara: string
  kota: string
}

interface FormErrors {
  nama?: string
  noHp?: string
  kota?: string
}

export default function LeadForm() {
  const router = useRouter()
  const [form, setForm] = useState<FormData>({
    nama: '',
    noHp: '',
    tanggalAcara: '',
    kota: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.nama.trim()) newErrors.nama = 'Nama lengkap wajib diisi'
    if (!form.noHp.trim()) {
      newErrors.noHp = 'Nomor HP wajib diisi'
    } else if (!/^[0-9+\-\s]{8,15}$/.test(form.noHp)) {
      newErrors.noHp = 'Format nomor HP tidak valid'
    }
    if (!form.kota) newErrors.kota = 'Kota / Wilayah wajib dipilih'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    const idKonsultasi = generateConsultationId()

    try {
      // Save to localStorage
      saveUserData(form.nama, idKonsultasi)

      // Submit to Google Sheet
      await submitLeadToSheet({
        nama: form.nama,
        noHp: form.noHp,
        tanggalAcara: form.tanggalAcara,
        kota: form.kota,
        idKonsultasi,
        status: 'Prospek',
      })

      // Track analytics
      trackFormSubmit({ nama: form.nama, kota: form.kota, idKonsultasi })

      // Redirect to thank you page
      router.push('/thank-you')
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

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Nama */}
      <div>
        <label
          htmlFor="nama"
          className="block text-sm font-dm font-medium text-[#1B3A2E] mb-1.5"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Nama Lengkap <span className="text-red-400">*</span>
        </label>
        <input
          id="nama"
          name="nama"
          type="text"
          value={form.nama}
          onChange={handleChange}
          placeholder="Contoh: Siti & Budi"
          className={`w-full px-4 py-3 rounded-xl border bg-white text-[#1a1a1a] placeholder-gray-400 text-sm font-dm transition-all outline-none focus:ring-2 focus:ring-[#C8A96E]/40 focus:border-[#C8A96E] ${errors.nama ? 'border-red-400' : 'border-[#E0D8D0]'
            }`}
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        />
        {errors.nama && (
          <p className="mt-1 text-xs text-red-500 font-dm">{errors.nama}</p>
        )}
      </div>

      {/* No HP */}
      <div>
        <label
          htmlFor="noHp"
          className="block text-sm font-dm font-medium text-[#1B3A2E] mb-1.5"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Nomor WhatsApp <span className="text-red-400">*</span>
        </label>
        <input
          id="noHp"
          name="noHp"
          type="tel"
          value={form.noHp}
          onChange={handleChange}
          placeholder="08xxxxxxxxxx"
          className={`w-full px-4 py-3 rounded-xl border bg-white text-[#1a1a1a] placeholder-gray-400 text-sm font-dm transition-all outline-none focus:ring-2 focus:ring-[#C8A96E]/40 focus:border-[#C8A96E] ${errors.noHp ? 'border-red-400' : 'border-[#E0D8D0]'
            }`}
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        />
        {errors.noHp && (
          <p className="mt-1 text-xs text-red-500 font-dm">{errors.noHp}</p>
        )}
      </div>

      {/* Tanggal Acara */}
      <div>
        <label
          htmlFor="tanggalAcara"
          className="block text-sm font-dm font-medium text-[#1B3A2E] mb-1.5"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Tanggal Acara{' '}
          <span className="text-gray-400 font-normal text-xs">(opsional)</span>
        </label>
        <input
          id="tanggalAcara"
          name="tanggalAcara"
          type="date"
          value={form.tanggalAcara}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          className="w-full px-4 py-3 rounded-xl border border-[#E0D8D0] bg-white text-[#1a1a1a] text-sm font-dm transition-all outline-none focus:ring-2 focus:ring-[#C8A96E]/40 focus:border-[#C8A96E]"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        />
      </div>

      {/* Kota */}
      <div>
        <label
          htmlFor="kota"
          className="block text-sm font-dm font-medium text-[#1B3A2E] mb-1.5"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Kota / Wilayah <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <select
            id="kota"
            name="kota"
            value={form.kota}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm font-dm transition-all outline-none focus:ring-2 focus:ring-[#C8A96E]/40 focus:border-[#C8A96E] appearance-none pr-10 ${form.kota ? 'text-[#1a1a1a]' : 'text-gray-400'
              } ${errors.kota ? 'border-red-400' : 'border-[#E0D8D0]'}`}
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {kotaOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
        {errors.kota && (
          <p className="mt-1 text-xs text-red-500 font-dm">{errors.kota}</p>
        )}
      </div>

      {/* Note */}
      <p
        className="text-xs text-gray-500 font-dm leading-relaxed pt-1"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        🔒 Data kamu aman. Hanya digunakan untuk keperluan konsultasi.
      </p>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: loading ? 1 : 1.01 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
        className="w-full py-4 bg-[#1B3A2E] text-[#FAF8F4] font-dm font-semibold text-sm tracking-wide rounded-xl transition-all duration-300 hover:bg-[#C8A96E] hover:text-[#1B3A2E] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Memproses...
          </>
        ) : (
          <>
            <CheckCircle2 size={18} />
            Download Pricing List & Konsultasi Sekarang
          </>
        )}
      </motion.button>
    </form>
  )
}
