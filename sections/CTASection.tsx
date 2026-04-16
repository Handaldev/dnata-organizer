'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import LeadForm from '@/components/LeadForm'
import { getUserData, getWhatsAppLink } from '@/lib/utils'
import { trackWhatsAppClick } from '@/lib/analytics'
import { updateLeadStatus } from '@/lib/googleSheets'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [returningUser, setReturningUser] = useState<{
    nama: string
    idKonsultasi: string
  } | null>(null)

  useEffect(() => {
    const userData = getUserData()
    if (userData?.nama && userData?.idKonsultasi) {
      setReturningUser({ nama: userData.nama, idKonsultasi: userData.idKonsultasi })
    }
  }, [])

  const handleWAClick = async () => {
    trackWhatsAppClick('cta_section')
    if (returningUser?.idKonsultasi) {
      await updateLeadStatus(returningUser.idKonsultasi, 'Hot Lead')
    }
    const link = getWhatsAppLink(returningUser?.nama, returningUser?.idKonsultasi)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="konsultasi"
      ref={ref}
      className="py-24 lg:py-32 bg-[#1B3A2E] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#C8A96E]/5 -translate-y-1/2 translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#C8A96E]/5 translate-y-1/2 -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-[#C8A96E]/20 border border-[#C8A96E]/30 rounded-full px-4 py-2 mb-6">
              <AlertCircle size={14} className="text-[#C8A96E]" />
              <span
                className="text-[#C8A96E] text-xs font-dm font-medium tracking-wide"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Slot Terbatas!
              </span>
            </div>

            <h2
              className="font-cormorant text-4xl lg:text-5xl font-semibold text-[#FAF8F4] leading-tight mb-6"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Cek Apakah{' '}
              <em className="italic text-[#C8A96E]">Tanggal Kamu</em>{' '}
              Masih Tersedia?
            </h2>

            <p
              className="text-[#FAF8F4]/70 text-base font-dm leading-relaxed mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Kami hanya handle 4 pernikahan per bulan — supaya setiap klien dapat yang terbaik dari kami. Beberapa tanggal bulan ini sudah terisi. Isi form sekarang untuk cek ketersediaan dan konsultasi{' '}
              <strong className="text-[#C8A96E]">GRATIS</strong>. Tim kami
              akan hubungi Anda dalam 1x24 jam untuk diskusi kebutuhan.
            </p>

            {/* Guarantees */}
            <div className="space-y-4 mb-10">
              {[
                'Konsultasi gratis, tanpa komitmen',
                'Pricing transparan, tidak ada hidden cost',
                'Personal planner dedicated khusus untuk kamu',
                'Garansi harga terbaik dari vendor',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C8A96E]/20 border border-[#C8A96E]/40 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="#C8A96E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-[#FAF8F4]/70 text-sm font-dm"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* WhatsApp secondary */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-[#FAF8F4]/10" />
              <span
                className="text-[#FAF8F4]/40 text-xs font-dm"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                atau
              </span>
              <div className="h-px flex-1 bg-[#FAF8F4]/10" />
            </div>

            <button
              onClick={handleWAClick}
              className="mt-4 w-full flex items-center justify-center gap-2 py-3.5 border border-[#FAF8F4]/20 text-[#FAF8F4]/80 text-sm font-dm font-medium rounded-xl hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all duration-300"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Langsung Chat WhatsApp
            </button>
          </motion.div>

          {/* Right — Form or Returning User */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="bg-[#FAF8F4] rounded-3xl p-8 shadow-2xl">
              {returningUser ? (
                /* Returning user view */
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#C8A96E]/15 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👋</span>
                  </div>
                  <h3
                    className="font-cormorant text-2xl font-semibold text-[#1B3A2E] mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  >
                    Selamat datang kembali,
                  </h3>
                  <p
                    className="font-cormorant text-3xl font-bold text-[#C8A96E] mb-4 italic"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  >
                    {returningUser.nama}!
                  </p>
                  <p
                    className="text-[#5a5a5a] text-sm font-dm mb-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    ID Konsultasi Anda:
                  </p>
                  <code className="bg-[#1B3A2E]/5 text-[#1B3A2E] font-dm text-sm px-4 py-2 rounded-lg block mb-6">
                    {returningUser.idKonsultasi}
                  </code>
                  <p
                    className="text-[#5a5a5a] text-sm font-dm leading-relaxed mb-6"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Data konsultasi Anda sudah tercatat. Tim kami sedang
                    memprosesnya. Ingin respon lebih cepat?
                  </p>
                  <button
                    onClick={handleWAClick}
                    className="w-full py-4 bg-[#25D366] text-white font-dm font-semibold text-sm tracking-wide rounded-xl flex items-center justify-center gap-2 hover:bg-[#20b858] transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Chat WhatsApp Sekarang
                  </button>
                </div>
              ) : (
                /* Form */
                <>
                  <div className="mb-6">
                    <h3
                      className="font-cormorant text-2xl font-semibold text-[#1B3A2E] mb-1"
                      style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                    >
                      Dapatkan Pricing List Paket lainnya + Konsultasi Gratis
                    </h3>
                    <p
                      className="text-[#888] text-sm font-dm"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Isi form ini dan kamu akan mendapatkan Pricing List Full Paket
                    </p>
                  </div>
                  <LeadForm />
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
