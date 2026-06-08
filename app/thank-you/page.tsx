'use client'

import { useEffect, useState, useRef, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle2, Home, MessageCircle } from 'lucide-react'
import { getUserData, getWhatsAppLink } from '@/lib/utils'
import { trackWhatsAppClick } from '@/lib/analytics'
import { updateLeadStatus } from '@/lib/googleSheets'
import { pricingFileMap } from '@/components/LeadForm'

const pricingFileNames: Record<string, string> = {
  'Wedding Planner': 'Dinata-Pricing-Wedding-Planner.pdf',
  'WO on the Day': 'Dinata-Pricing-WO-on-the-Day.pdf',
  'All In Wedding': 'Dinata-Pricing-All-In-Wedding.pdf',
  'All In Pre Event': 'Dinata-Pricing-All-In-Pre-Event.pdf',
}

function ThankYouContent() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get('service') || ''
  const isCustom = !serviceParam

  const [userData, setUserData] = useState<{
    nama?: string
    idKonsultasi?: string
  } | null>(null)
  const downloadTriggered = useRef(false)

  useEffect(() => {
    const data = getUserData()
    setUserData(data)

    // Auto-trigger pricing PDF download — hanya kalau bukan Custom
    if (!isCustom && !downloadTriggered.current) {
      downloadTriggered.current = true
      const filePath = pricingFileMap[serviceParam]
      const fileName = pricingFileNames[serviceParam]
      if (filePath && fileName) {
        const link = document.createElement('a')
        link.href = filePath
        link.download = fileName
        link.click()
      }
    }
  }, [isCustom, serviceParam])

  const handleWAClick = async () => {
    trackWhatsAppClick('thank_you_page')
    if (userData?.idKonsultasi) {
      await updateLeadStatus(userData.idKonsultasi, 'Hot Lead')
    }
    const link = getWhatsAppLink(userData?.nama, userData?.idKonsultasi)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const fontDm = { fontFamily: 'DM Sans, sans-serif' }

  return (
    <div className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center px-6 py-16">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mb-12">
        <div className="relative w-12 h-12">
          <Image src="/images/logo.png" alt="Dinata Organizer" fill className="object-contain" />
        </div>
        <div>
          <p className="font-cormorant text-[#1B3A2E] font-semibold text-xl leading-none" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>DINATA</p>
          <p className="text-[#C8A96E] text-xs tracking-widest uppercase font-dm" style={fontDm}>Organizer</p>
        </div>
      </Link>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white rounded-3xl shadow-xl border border-[#E8DDD5] p-10 max-w-lg w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-[#1B3A2E]/5 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 size={40} className="text-[#1B3A2E]" />
        </motion.div>

        <h1 className="font-cormorant text-3xl font-semibold text-[#1B3A2E] mb-3" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
          Terima Kasih{userData?.nama ? `, ${userData.nama}` : ''}!
        </h1>

        <p className="text-[#5a5a5a] text-base font-dm leading-relaxed mb-4" style={fontDm}>
          Data kamu sudah kami terima. Admin kami akan menghubungi dalam{' '}
          <strong className="text-[#1B3A2E]">1×24 jam</strong>.
        </p>

        {/* Conditional: download notice atau custom notice */}
        {isCustom ? (
          <div className="bg-[#1B3A2E]/5 border border-[#1B3A2E]/10 rounded-2xl px-5 py-4 mb-6">
            <p className="text-[#1B3A2E] text-sm font-dm" style={fontDm}>
              ✨ Tim kami akan merancang paket khusus sesuai kebutuhan dan visi kamu.
            </p>
          </div>
        ) : (
          <div className="bg-[#C8A96E]/10 border border-[#C8A96E]/20 rounded-2xl px-5 py-4 mb-6">
            <p className="text-[#1B3A2E] text-sm font-dm" style={fontDm}>
              📄 Pricing List <strong>{serviceParam}</strong> sedang diunduh otomatis. Jika tidak terunduh,{' '}
              <a
                href={pricingFileMap[serviceParam]}
                download={pricingFileNames[serviceParam]}
                className="text-[#C8A96E] underline font-medium"
              >
                klik di sini
              </a>.
            </p>
          </div>
        )}

        {userData?.idKonsultasi && (
          <div className="mb-8">
            <p className="text-[#888] text-xs font-dm mb-1" style={fontDm}>ID Konsultasi Anda:</p>
            <code className="bg-[#1B3A2E]/5 text-[#1B3A2E] font-dm text-sm px-4 py-2 rounded-lg inline-block font-medium">
              {userData.idKonsultasi}
            </code>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <button
            onClick={handleWAClick}
            className="w-full py-4 bg-[#25D366] text-white font-dm font-semibold text-sm tracking-wide rounded-xl flex items-center justify-center gap-2 hover:bg-[#20b858] transition-colors"
            style={fontDm}
          >
            <MessageCircle size={18} />
            Chat WhatsApp untuk Respon Lebih Cepat
          </button>
          <Link
            href="/"
            className="w-full py-4 border-2 border-[#1B3A2E]/20 text-[#1B3A2E] font-dm font-medium text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-[#1B3A2E] hover:text-white transition-all duration-300"
            style={fontDm}
          >
            <Home size={16} />
            Kembali ke Beranda
          </Link>
        </div>
      </motion.div>

      <p className="mt-8 text-[#888] text-xs font-dm text-center" style={fontDm}>
        © {new Date().getFullYear()} CV Dinata Kreatif Group — Dipercaya lebih dari 200 pasangan
      </p>
    </div>
  )
}


export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F4]" />}>
      <ThankYouContent />
    </Suspense>
  )
}