'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    icon: '✦',
    title: 'Full Handle dari A-Z',
    desc: 'Kami urus semua — dari riset vendor, negosiasi harga, sampai koordinasi hari H. Anda tinggal approve.',
  },
  {
    icon: '✦',
    title: 'Satu PIC Dedicated',
    desc: 'Satu personal planner yang benar-benar paham kebutuhan Anda dan bisa dihubungi kapan saja.',
  },
  {
    icon: '✦',
    title: 'Budget 100% Transparan',
    desc: 'Tidak ada biaya tersembunyi. Setiap rupiah yang keluar tercatat dan bisa Anda pantau real-time.',
  },
]

export default function IntroSolution() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="layanan"
      ref={ref}
      className="py-24 lg:py-36 bg-[#F5EDE8] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p
            className="text-[#C8A96E] text-xs tracking-[0.3em] uppercase font-dm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Solusi untuk Anda
          </p>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <h2
            className="font-cormorant text-4xl lg:text-6xl font-semibold text-[#1B3A2E] leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Dinata,{' '}
            <em className="italic text-[#C8A96E]">Bukan Sekedar Wedding Organizer</em>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-[#1B3A2E]/80 text-lg leading-relaxed max-w-2xl mx-auto mb-20 font-dm"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Dinata Organizer adalah partner pernikahan yang akan handle semua
          kerumitan untuk Anda. Dari konsep sampai eksekusi, kami pastikan
          setiap detail sempurna — sesuai visi Anda, sesuai budget Anda.
        </motion.p>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden aspect-[3/4] relative shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=90"
                alt="Wedding planner personal Dinata Organizer bekerja dengan pasangan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A2E]/20 to-transparent" />
            </div>

            {/* Award badge */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#C8A96E] rounded-full flex flex-col items-center justify-center shadow-lg">
              <span
                className="font-cormorant text-white font-bold text-lg leading-none"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                200+
              </span>
              <span
                className="text-white/80 text-[9px] font-dm text-center leading-tight"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Klien
                <br />
                Bahagia
              </span>
            </div>
          </motion.div>

          {/* Pillars */}
          <div className="space-y-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.13 }}
                className="flex gap-5 items-start group"
              >
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-[#C8A96E]/15 flex items-center justify-center text-[#C8A96E] font-cormorant text-xl group-hover:bg-[#C8A96E] group-hover:text-white transition-all duration-300">
                  {p.icon}
                </div>
                <div>
                  <h3
                    className="font-cormorant text-xl font-semibold text-[#1B3A2E] mb-1"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[#1B3A2E]/70 text-sm font-dm leading-relaxed"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="pt-4"
            >
              <a
                href="#proses"
                className="inline-flex items-center gap-2 text-[#1B3A2E] font-dm font-medium text-sm border-b border-[#C8A96E] pb-0.5 hover:text-[#C8A96E] transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Lihat Proses Kami
                <span className="text-[#C8A96E]">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
