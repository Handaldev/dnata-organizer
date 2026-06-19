'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Wallet, Users, AlertTriangle, UserX, ChevronDown } from 'lucide-react'

const problems = [
  {
    icon: <Wallet className="w-7 h-7" />,
    iconSm: <Wallet className="w-5 h-5" />,
    title: 'Budget Jebol Tanpa Sadar',
    desc: 'Sudah kalkulasi matang, tapi ternyata banyak biaya yang tidak kelihatan di awal. Tiba-tiba angkanya jauh dari rencana.',
  },
  {
    icon: <Users className="w-7 h-7" />,
    iconSm: <Users className="w-5 h-5" />,
    title: 'Pusing Koordinasi Vendor',
    desc: 'Deal dengan venue, katering, dekorasi, fotografer — semua minta keputusan cepat, semua minta difollow up. Kapan waktunya nikmatin masa tunangan?',
  },
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    iconSm: <AlertTriangle className="w-5 h-5" />,
    title: 'Takut Hari H Berantakan',
    desc: 'Sudah bayar mahal, tapi tetap tidak bisa tidur tenang. Gimana kalau vendor tiba-tiba bermasalah? Gimana kalau timeline meleset?',
  },
  {
    icon: <UserX className="w-7 h-7" />,
    iconSm: <UserX className="w-5 h-5" />,
    title: 'Vendor Rekomendasi Mengecewakan',
    desc: 'Referensi dari circle terdekat tidak selalu cocok — dan kamu baru tahu kekecewaannya pas sudah terlanjur deal.',
  },
]

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="masalah"
      ref={ref}
      className="py-28 lg:py-36 bg-[#1B3A2E]"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#C8A96E] text-xs tracking-[0.3em] uppercase font-dm mb-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Familiar dengan masalah ini?
          </p>
          <h2
            className="font-cormorant text-4xl lg:text-5xl font-semibold text-[#FAF8F4] leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Kenapa Banyak Pasangan Akhirnya {' '}
            <em className="font-cormorant italic text-[#C8A96E]" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>Menyerah Urus Sendiri?</em>
          </h2>
          <p
            className="mt-4 text-[#FAF8F4]/60 max-w-xl mx-auto text-base font-dm leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Banyak pasangan mulai dengan semangat &ldquo;kita handle sendiri aja&rdquo; —
            tapi 2 bulan kemudian burnout, sering ribut, dan hari H tetap was-was..
          </p>
        </motion.div>

        {/* Desktop: Cards (lg+) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 lg:gap-8">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#C8A96E]/10 flex items-center justify-center text-[#C8A96E] group-hover:bg-[#C8A96E] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3
                className="font-cormorant text-xl font-semibold text-[#FAF8F4] mb-3 group-hover:text-[#C8A96E] transition-colors"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#FAF8F4]/60 text-sm font-dm leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Accordion (< lg) */}
        <div className="lg:hidden space-y-3">
          {problems.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? 'bg-white/10 border-[#C8A96E]/40'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className={`w-9 h-9 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-[#C8A96E] text-white' : 'bg-[#C8A96E]/10 text-[#C8A96E]'
                  }`}>
                    {item.iconSm}
                  </div>
                  <span
                    className={`flex-1 font-cormorant text-lg font-semibold transition-colors duration-300 ${
                      isOpen ? 'text-[#C8A96E]' : 'text-[#FAF8F4]'
                    }`}
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  >
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C8A96E] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
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
                        className="px-5 pb-5 text-[#FAF8F4]/60 text-sm font-dm leading-relaxed border-t border-white/10 pt-3"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Transition line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#C8A96E]/50" />
            <span
              className="text-[#C8A96E] text-sm font-cormorant italic"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Tenang, ada cara yang lebih mudah
            </span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#C8A96E]/50" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}