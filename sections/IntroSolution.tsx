'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ImageCarousel } from '@/components/ImageCarousel'
import { ChevronDown, Shuffle, UserCheck, Wallet, NotebookPen, Network } from 'lucide-react'

// Intro Solution images - mudah diubah di sini
const introImages = [
  '/images/BTS_1.webp',
  '/images/BTS_3.webp',
  '/images/BTS_4.webp',
  '/images/BTS_5.webp',
  '/images/BTS_6.webp',
]

const pillars = [
  {
    icon: <Shuffle className="w-5 h-5 text-[#C8A96E]" />,
    title: 'Full Handle dari A-Z',
    desc: 'Dari riset vendor, negosiasi harga, sampai koordinasi hari H — semua kami yang urus. Kamu tinggal approve..',
  },
  {
    icon: <NotebookPen className="w-5 h-5 text-[#C8A96E]" />,
    title: 'Ingat Setiap Detail Kamu',
    desc: 'Dari preferensi warna, pantangan makanan tamu, sampai momen kecil yang pengen kamu abadikan — semua kami catat dan kami eksekusi tanpa kamu perlu ingatkan dua kali.',
  },
  {
    icon: <UserCheck className="w-5 h-5 text-[#C8A96E]" />,
    title: 'Satu PIC Dedicated',
    desc: 'Bukan berganti-ganti PIC. Satu orang yang benar-benar paham kebutuhan kamu dan bisa dihubungi kapan saja.',
  },
  {
    icon: <Network className="w-5 h-5 text-[#C8A96E]" />,
    title: 'Vendor Network Eksklusif',
    desc: '7 tahun di industri ini, kami punya akses ke vendor-vendor terbaik yang tidak semua orang tahu — dengan harga yang sudah kami negosiasikan khusus untuk klien kami.',
  },
  {
    icon: <Wallet className="w-5 h-5 text-[#C8A96E]" />,
    title: 'Budget 100% Transparan',
    desc: 'Tidak ada hidden cost. Setiap pengeluaran tercatat dan bisa kamu pantau real-time..',
  },
]

export default function IntroSolution() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="layanan"
      ref={ref}
      className="py-28 lg:py-36 bg-[#F5EDE8] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-20">
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
            Kenapa Dinata Berbeda
          </p>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-6"
        >
          <h2
            className="font-cormorant text-4xl lg:text-6xl font-semibold text-[#1B3A2E] leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Kami Bukan Sekedar WO
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-[#1B3A2E]/80 text-lg leading-relaxed max-w-4xl mx-auto mb-20 font-dm"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          WO biasa urus banyak klien sekaligus, kamu cuma satu dari sekian klien.
          Di Dinata, kamu dapat satu personal planner yang tahu nama tamu VIP kamu,
          preferensi detail kamu, bahkan lagu pertama yang mau diputar saat kamu masuk.
          Semua diingat. Semua dieksekusi.
        </motion.p>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden aspect-[3/4] relative shadow-xl">
              <ImageCarousel
                images={introImages}
                alt="Wedding planner personal Dinata Organizer bekerja dengan pasangan"
                autoSlideInterval={1500}
                className="w-full h-full"
                showControls={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A2E]/20 to-transparent pointer-events-none" />
            </div>

            {/* Award badge */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#C8A96E] rounded-full flex flex-col items-center justify-center shadow-lg">
              <span
                className="font-cormorant text-white font-bold text-lg leading-none"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                300+
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
          <div>
            {/* Desktop: list biasa (lg+) */}
            <div className="hidden lg:block space-y-8">
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
            </div>

            {/* Mobile: Accordion (< lg) */}
            <div className="lg:hidden space-y-3">
              {pillars.map((p, i) => {
                const isOpen = openIndex === i
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen
                      ? 'bg-[#C8A96E]/10 border-[#C8A96E]/40'
                      : 'bg-white/60 border-[#1B3A2E]/10'
                      }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className={`w-9 h-9 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#C8A96E] [&_svg]:text-white' : 'bg-[#C8A96E]/15'
                        }`}>
                        {p.icon}
                      </div>
                      <span
                        className={`flex-1 font-cormorant text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-[#1B3A2E]' : 'text-[#1B3A2E]'
                          }`}
                        style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                      >
                        {p.title}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#C8A96E] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p
                            className="px-5 pb-5 text-[#1B3A2E]/70 text-sm font-dm leading-relaxed border-t border-[#1B3A2E]/10 pt-3"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                          >
                            {p.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="pt-6"
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