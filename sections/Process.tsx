'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Ceritakan Impian Anda',
    desc: 'Di sesi pertama, kami tidak langsung bicara soal harga. Yang kami ingin dengar adalah impian pernikahan Anda — tema apa yang diinginkan, venue seperti apa yang dibayangkan, dan budget yang tersedia. Dari sini kami mulai merancang proposal yang pas.',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=90',
    imageAlt: 'Sesi konsultasi wedding planner Dinata Organizer',
    points: [
      'Konsultasi gratis tanpa komitmen',
      'Dengarkan visi dan budget Anda',
      'Proposal custom dalam 3 hari kerja',
    ],
  },
  {
    number: '02',
    title: 'Kami Eksekusi, Anda Pantau',
    desc: 'Setelah deal, tim kami langsung bergerak. Riset vendor terbaik, negosiasi harga, koordinasi jadwal — semua kami yang handle. Anda tinggal approve via WhatsApp dan pantau progress lewat update rutin dari kami.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90',
    imageAlt: 'Perencanaan detail pernikahan bersama tim Dinata Organizer',
    points: [
      'Vendor pilihan sesuai budget',
      'Negosiasi harga terbaik untuk Anda',
      'Update progress mingguan via WA',
    ],
  },
  {
    number: '03',
    title: 'Hari H Berjalan Sempurna',
    desc: 'Di hari spesial Anda, tim kami standby dari pagi sampai selesai. Koordinasi vendor, troubleshooting masalah, memastikan timeline berjalan — semua di-handle tanpa Anda perlu tahu. Anda tinggal hadir dan nikmati momen.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=90',
    imageAlt: 'Hari pernikahan yang sempurna bersama Dinata Organizer',
    points: [
      'Tim on-site full day',
      'Koordinasi semua vendor',
      'Problem solving di belakang layar',
    ],
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center py-24 sticky top-0 bg-[#FAF8F4]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={index % 2 === 1 ? 'lg:order-2' : ''}
          >
            {/* Step number */}
            <p
              className="font-cormorant text-8xl font-bold text-[#C8A96E]/20 leading-none mb-4 select-none"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              aria-hidden="true"
            >
              {step.number}
            </p>

            <p
              className="text-[#C8A96E] text-xs tracking-[0.3em] uppercase font-dm mb-3"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Langkah {step.number}
            </p>

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
        className="max-w-6xl mx-auto px-6 pt-24 pb-12 text-center"
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
          <em className="italic text-[#C8A96E]">Pernikahan yang Kamu Impikan</em>
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
