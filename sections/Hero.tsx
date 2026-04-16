'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/utils'
import { trackWhatsAppClick } from '@/lib/analytics'

export default function Hero() {
  const handleWAClick = () => {
    trackWhatsAppClick('hero_section')
    window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF8F4]"
    >
      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[#1B3A2E]/5 rounded-l-[80px] hidden lg:block"
        aria-hidden="true"
      />

      {/* Gold accent line */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-[#C8A96E] to-transparent hidden lg:block"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[#C8A96E]/10 border border-[#C8A96E]/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] inline-block" />
              <span
                className="text-[#1B3A2E] text-xs font-dm font-medium tracking-widest uppercase"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Dipercaya 200+ Pasangan Bahagia
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-cormorant text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#1B3A2E] leading-[1.1] mb-6"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Satu{' '}
              <em className="italic text-[#C8A96E]">Planner</em>
              <br />
              Satu{' '}
              <em className="italic text-[#C8A96E]">Fokus</em>
              <br />
              Anda Tinggal{' '}
              <br className="hidden sm:block" />
              Hadir & Bahagia
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[#5a5a5a] text-lg leading-relaxed mb-8 max-w-lg font-dm"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Serahkan semua urusan persiapan kepada tim profesional kami. Anda
              fokus menikmati momen — kami yang handle semuanya dari A sampai Z.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-8 mb-10"
            >
              {[
                { num: '200+', label: 'Pernikahan Sukses' },
                { num: '7+', label: 'Tahun Pengalaman' },
                { num: '100%', label: 'On Budget' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="font-cormorant text-3xl font-semibold text-[#C8A96E]"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  >
                    {stat.num}
                  </p>
                  <p
                    className="text-[#888] text-xs font-dm mt-0.5"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#konsultasi"
                className="px-8 py-4 bg-[#1B3A2E] text-[#FAF8F4] font-dm font-semibold text-sm tracking-wide rounded-full transition-all duration-300 hover:bg-[#C8A96E] hover:text-[#1B3A2E] text-center"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Konsultasi Gratis Sekarang
              </a>
              <button
                onClick={handleWAClick}
                className="px-8 py-4 border-2 border-[#1B3A2E] text-[#1B3A2E] font-dm font-semibold text-sm tracking-wide rounded-full transition-all duration-300 hover:bg-[#1B3A2E] hover:text-[#FAF8F4] text-center flex items-center justify-center gap-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Chat WhatsApp
              </button>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Main image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=90"
                alt="Momen pernikahan indah diorganisir oleh Dinata Organizer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A2E]/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 max-w-[220px]"
            >
              <div className="w-10 h-10 rounded-full bg-[#C8A96E]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#C8A96E] text-lg">✦</span>
              </div>
              <div>
                <p
                  className="font-cormorant text-[#1B3A2E] font-semibold text-base leading-none"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                >
                  Kuota Terbatas
                </p>
                <p
                  className="text-[#888] text-xs font-dm mt-0.5"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Maksimal 4 event/bulan
                </p>
              </div>
            </motion.div>

            {/* Decorative dot grid */}
            <div
              className="absolute -top-6 -right-6 w-24 h-24 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(#1B3A2E 1px, transparent 1px)',
                backgroundSize: '8px 8px',
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#masalah"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#888] hover:text-[#1B3A2E] transition-colors"
        aria-label="Scroll ke bawah"
      >
        <span
          className="text-xs font-dm tracking-widest uppercase"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Scroll
        </span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
