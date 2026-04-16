'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, Home, MessageCircle } from 'lucide-react'
import { getUserData, getWhatsAppLink } from '@/lib/utils'
import { trackWhatsAppClick } from '@/lib/analytics'
import { updateLeadStatus } from '@/lib/googleSheets'

export default function ThankYouPage() {
  const [userData, setUserData] = useState<{
    nama?: string
    idKonsultasi?: string
  } | null>(null)
  const downloadTriggered = useRef(false)

  useEffect(() => {
    const data = getUserData()
    setUserData(data)

    // Auto-trigger PDF download (pricing list)
    if (!downloadTriggered.current) {
      downloadTriggered.current = true
      // Simulate pricing list PDF download
      // Replace /files/pricing-list.pdf with your actual file
      const link = document.createElement('a')
      link.href = '/files/pricing-list.pdf'
      link.download = 'Dinata-Organizer-Pricing-List.pdf'
      link.click()
    }
  }, [])

  const handleWAClick = async () => {
    trackWhatsAppClick('thank_you_page')
    if (userData?.idKonsultasi) {
      await updateLeadStatus(userData.idKonsultasi, 'Hot Lead')
    }
    const link = getWhatsAppLink(userData?.nama, userData?.idKonsultasi)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center px-6 py-16">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mb-12">
        <div className="relative w-12 h-12">
          <Image
            src="/images/logo.png"
            alt="Dinata Organizer"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <p
            className="font-cormorant text-[#1B3A2E] font-semibold text-xl leading-none"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            DINATA
          </p>
          <p
            className="text-[#C8A96E] text-xs tracking-widest uppercase font-dm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Organizer
          </p>
        </div>
      </Link>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white rounded-3xl shadow-xl border border-[#E8DDD5] p-10 max-w-lg w-full text-center"
      >
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-[#1B3A2E]/5 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 size={40} className="text-[#1B3A2E]" />
        </motion.div>

        {/* Heading */}
        <h1
          className="font-cormorant text-3xl font-semibold text-[#1B3A2E] mb-3"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          Terima Kasih
          {userData?.nama ? `, ${userData.nama}` : ''}!
        </h1>

        {/* Message */}
        <p
          className="text-[#5a5a5a] text-base font-dm leading-relaxed mb-4"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Data Anda sudah kami terima dengan baik. Admin kami akan menghubungi
          Anda dalam{' '}
          <strong className="text-[#1B3A2E]">1×24 jam</strong>.
        </p>

        {/* Download notice */}
        <div className="bg-[#C8A96E]/10 border border-[#C8A96E]/20 rounded-2xl px-5 py-4 mb-6">
          <p
            className="text-[#1B3A2E] text-sm font-dm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            📄 Pricing List kami sedang diunduh otomatis. Jika tidak terunduh,{' '}
            <a href="/files/pricing-list.pdf" download className="text-[#C8A96E] underline font-medium">
              klik di sini
            </a>
            .
          </p>
        </div>

        {/* ID Konsultasi */}
        {userData?.idKonsultasi && (
          <div className="mb-8">
            <p
              className="text-[#888] text-xs font-dm mb-1"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              ID Konsultasi Anda:
            </p>
            <code className="bg-[#1B3A2E]/5 text-[#1B3A2E] font-dm text-sm px-4 py-2 rounded-lg inline-block font-medium">
              {userData.idKonsultasi}
            </code>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleWAClick}
            className="w-full py-4 bg-[#25D366] text-white font-dm font-semibold text-sm tracking-wide rounded-xl flex items-center justify-center gap-2 hover:bg-[#20b858] transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <MessageCircle size={18} />
            Chat WhatsApp untuk Respon Lebih Cepat
          </button>
          <Link
            href="/"
            className="w-full py-4 border-2 border-[#1B3A2E]/20 text-[#1B3A2E] font-dm font-medium text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-[#1B3A2E] hover:text-white transition-all duration-300"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <Home size={16} />
            Kembali ke Beranda
          </Link>
        </div>
      </motion.div>

      {/* Trust line */}
      <p
        className="mt-8 text-[#888] text-xs font-dm text-center"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        © {new Date().getFullYear()} CV Dinata Kreatif Group — Dipercaya lebih dari 200 pasangan
      </p>
    </div>
  )
}
