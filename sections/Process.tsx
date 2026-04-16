'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Cerita Dulu, Baru Kita Rancang',
    desc: 'Di sesi pertama, kita tidak langsung bicara soal paket atau harga. Kita duduk bareng — kamu cerita visi pernikahannya seperti apa, budget yang tersedia, dan hal-hal kecil yang penting buat kamu. Dari sana baru kita rancang proposal yang benar-benar pas.',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=90',
    imageAlt: 'Sesi konsultasi wedding planner Dinata Organizer',
    points: [
      'Konsultasi gratis, tanpa komitmen',
      'Kamu yang tentukan arahnya',
      'Proposal custom dalam 3 hari kerja',
    ],
  },
  {
    number: '02',
    title: 'Kami Gerak, Kamu Tenang',
    desc: 'Setelah deal, tim kami langsung turun tangan. Riset vendor terbaik sesuai budget kamu, negosiasi harga, koordinasi jadwal — semua kami handle. Kamu tinggal approve via WhatsApp, sisanya biar kami yang pikirin.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90',
    imageAlt: 'Perencanaan detail pernikahan bersama tim Dinata Organizer',
    points: [
      'Vendor pilihan, sesuai budget',
      'Negosiasi harga terbaik untuk kamu',
      'Update progress tiap minggu via WA',
    ],
  },
  {
    number: '03',
    title: 'Hari H Berjalan Sempurna',
    desc: 'Tim kami standby dari pagi sampai selesai. Koordinasi vendor, troubleshooting, jaga timeline — semua beres di belakang layar tanpa kamu perlu tahu. Kamu fokus nikmatin momen paling spesial dalam hidupmu.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=90',
    imageAlt: 'Hari pernikahan yang sempurna bersama Dinata Organizer',
    points: [
      'Tim on-site full day',
      'Problem solving tanpa ganggu kamu',
      'Semua vendor terkoordinasi rapi',
    ],
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center py-28 sticky top-0 bg-[#FAF8F4]"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={index % 2 === 1 ? 'lg:order-2' : ''}
          >
            {/* Step number with label beside it */}
            <div className="flex items-center gap-4 mb-6">
              <p
                className="font-cormorant text-7xl lg:text-8xl font-bold text-[#C8A96E]/20 leading-none select-none"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                aria-hidden="true"
              >
                {step.number}
              </p>
              <p
                className="text-[#C8A96E] text-xs tracking-[0.2em] uppercase font-dm"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Kenapa Dinata?
              </p>
            </div>

            <h3
              className="font-cormorant text-3xl lg:text-4xl font-semibold text-[#1B3A2E] leading-tight mb-5"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              {step.title}
            </h3>

            <p
              className="text-[#5a5a5a] text-base font-dm leading-relaxed mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {step.desc}
            </p>

            {/* Points */}
            <ul className="space-y-3">
              {step.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm font-dm text-[#333]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <span className="w-5 h-5 rounded-full bg-[#1B3A2E] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className={index % 2 === 1 ? 'lg:order-1' : ''}
          >
            <div className="rounded-[2rem] overflow-hidden aspect-[4/3] relative shadow-2xl">
              <Image
                src={step.image}
                alt={step.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A2E]/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="proses" className="bg-[#FAF8F4]">
      {/* Section header */}
      <div
        ref={headerRef}
        className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-20 pt-28 pb-12 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#C8A96E] text-xs tracking-[0.3em] uppercase font-dm mb-4"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Prosesnya Simple
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-cormorant text-4xl lg:text-5xl font-semibold text-[#1B3A2E] leading-tight"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          3 Langkah Menuju{' '}
          <em className="font-cormorant italic text-[#C8A96E]" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>Pernikahan yang Kamu Impikan</em>
        </motion.h2>
      </div>

      {/* Sticky steps */}
      <div>
        {steps.map((step, i) => (
          <StepCard key={step.number} step={step} index={i} />
        ))}
      </div>
    </section>
  )
}
