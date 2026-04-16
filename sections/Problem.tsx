'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const problems = [
  {
    icon: '💸',
    title: 'Budget Jebol Tanpa Sadar',
    desc: 'Sudah kalkulasi matang, tapi ternyata banyak biaya yang tidak kelihatan di awal. Tiba-tiba angkanya jauh dari rencana.',
  },
  {
    icon: '😓',
    title: 'Pusing Koordinasi Vendor',
    desc: 'Deal dengan venue, katering, dekorasi, fotografer — semua minta keputusan cepat, semua minta difollow up. Kapan waktunya nikmatin masa tunangan?',
  },
  {
    icon: '😰',
    title: 'Takut Hari H Berantakan',
    desc: 'Sudah bayar mahal, tapi tetap tidak bisa tidur tenang. Gimana kalau vendor tiba-tiba bermasalah? Gimana kalau timeline meleset?',
  },
  {
    icon: '😤',
    title: 'Vendor Rekomendasi Teman Mengecewakan',
    desc: 'Referensi dari circle terdekat tidak selalu cocok — dan kamu baru tahu kekecewaannya pas sudah terlanjur deal.',
  },
]

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="masalah"
      ref={ref}
      className="py-24 lg:py-32 bg-[#1B3A2E]"
    >
      <div className="max-w-6xl mx-auto px-6">
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
            <em className="italic text-[#C8A96E]">Menyerah Urus Sendiri?</em>
          </h2>
          <p
            className="mt-4 text-[#FAF8F4]/60 max-w-xl mx-auto text-base font-dm leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Banyak pasangan mulai dengan semangat "kita handle sendiri aja" —
            tapi 2 bulan kemudian burnout, sering ribut, dan hari H tetap was-was..
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
            >
              <div className="text-4xl mb-5">{item.icon}</div>
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
              className="text-[#C8A96E] text-sm font-dm italic"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
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
