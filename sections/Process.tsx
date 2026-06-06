'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Play } from 'lucide-react'

const videoConfig = {
  videoId: 'Y31bZD0H8wA',
}

const steps = [
  {
    number: '01',
    title: 'Cerita Dulu, Baru Kita Rancang',
    desc: 'Di sesi pertama, kita tidak langsung bicara soal paket atau harga. Kita duduk bareng — kamu cerita visi pernikahannya seperti apa, budget yang tersedia, dan hal-hal kecil yang penting buat kamu. Dari sana baru kita rancang proposal yang benar-benar pas.',
    points: ['Konsultasi gratis, tanpa komitmen', 'Kamu yang tentukan arahnya', 'Proposal custom dalam 3 hari kerja'],
  },
  {
    number: '02',
    title: 'Kami Gerak, Kamu Tenang',
    desc: 'Setelah deal, tim kami langsung turun tangan. Riset vendor terbaik sesuai budget dan konsep kamu, negosiasi harga, koordinasi jadwal — semua kami handle. Kamu tinggal approve via WhatsApp, sisanya biar kami yang pikirin.',
    points: ['Vendor pilihan, sesuai budget', 'Negosiasi harga terbaik untuk kamu', 'To-do-list Vendor bulanan'],
  },
  {
    number: '03',
    title: 'Hari H Berjalan Sempurna',
    desc: 'Tim kami standby dari pagi sampai selesai. Koordinasi vendor, troubleshooting, jaga timeline — semua beres di belakang layar tanpa kamu perlu tahu. Kamu fokus nikmatin momen paling spesial dalam hidupmu.',
    points: ['Tim on-site full day', 'Problem solving tanpa ganggu kamu', 'Semua vendor terkoordinasi rapi'],
  },
]

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-2xl bg-black">
      {!isPlaying ? (
        <div className="relative w-full h-full cursor-pointer group" onClick={() => setIsPlaying(true)}>
          <img
            src={`https://img.youtube.com/vi/${videoConfig.videoId}/maxresdefault.jpg`}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
            <button className="w-16 h-16 rounded-full bg-[#C8A96E] flex items-center justify-center group-hover:scale-110 transition-transform duration-300" aria-label="Play video">
              <Play size={32} className="text-white fill-white ml-1" />
            </button>
          </div>
        </div>
      ) : (
        <iframe
          key="process-video-playing"
          width="100%" height="100%"
          src={`https://www.youtube.com/embed/${videoConfig.videoId}?autoplay=1&mute=0&rel=0&playsinline=1`}
          title="Dinata Organizer Process Video"
          frameBorder="0"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen className="w-full h-full"
        />
      )}
    </div>
  )
}

// Each step gets its own component so hooks are called at top level
function StepCard({ step, index, scrollYProgress }: { step: typeof steps[0]; index: number; scrollYProgress: MotionValue<number> }) {
  const n = steps.length
  // Each step occupies 1/n of the scroll range
  // Active center at (index + 0.5) / n
  const center = (index + 0.5) / n
  const opacity = useTransform(scrollYProgress, [center - 0.4 / n, center, center + 0.4 / n], [0, 1, 0])
  const y = useTransform(scrollYProgress, [center - 0.5 / n, center, center + 0.5 / n], [60, 0, -60])

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center px-2 pointer-events-none">
      <div className="flex items-center gap-4 mb-6">
        <p className="font-cormorant text-7xl lg:text-8xl font-bold text-[#C8A96E]/20 leading-none select-none" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }} aria-hidden="true">{step.number}</p>
        <p className="text-[#C8A96E] text-xs tracking-[0.2em] uppercase font-dm" style={{ fontFamily: 'DM Sans, sans-serif' }}>Kenapa Dinata?</p>
      </div>
      <h3 className="font-cormorant text-3xl lg:text-4xl font-semibold text-[#1B3A2E] leading-tight mb-6" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>{step.title}</h3>
      <p className="text-[#5a5a5a] text-base font-dm leading-relaxed mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>{step.desc}</p>
      <ul className="space-y-3">
        {step.points.map((point) => (
          <li key={point} className="flex items-center gap-3 text-sm font-dm text-[#333]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <span className="w-5 h-5 rounded-full bg-[#1B3A2E] flex items-center justify-center flex-shrink-0">
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function DesktopProcess() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef} style={{ height: `${steps.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-20 h-full grid lg:grid-cols-2 gap-8 lg:gap-12 py-10">
          {/* Left — video fills full height */}
          <div className="flex items-center" style={{ maxHeight: "calc(100vh - 5rem)" }}>
            <div className="w-full" style={{ aspectRatio: "9/16", maxHeight: "calc(100vh - 5rem)" }}>
              <VideoPlayer />
            </div>
          </div>
          {/* Right — steps fade in/out driven by scroll */}
          <div className="relative h-full">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <section id="proses" className="bg-[#FAF8F4]">
      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-20 pt-28 pb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-[#C8A96E] text-xs tracking-[0.3em] uppercase font-dm mb-4"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Prosesnya Simple
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
          className="font-cormorant text-4xl lg:text-5xl font-semibold text-[#1B3A2E] leading-tight"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          3 Langkah Menuju{' '}
          <em className="font-cormorant italic text-[#C8A96E]" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>Pernikahan yang Kamu Impikan</em>
        </motion.h2>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopProcess />
      </div>

      {/* Mobile — stacked */}
      <div className="lg:hidden max-w-[1440px] mx-auto px-8 pb-20">
        <div className="mb-10">
          <div className="rounded-[2rem] overflow-hidden aspect-[9/16] relative shadow-2xl bg-black w-full max-w-xs mx-auto">
            <VideoPlayer />
          </div>
        </div>
        <div className="space-y-16">
          {steps.map((step) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-4 mb-6">
                <p className="font-cormorant text-7xl font-bold text-[#C8A96E]/20 leading-none select-none" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }} aria-hidden="true">{step.number}</p>
                <p className="text-[#C8A96E] text-xs tracking-[0.2em] uppercase font-dm" style={{ fontFamily: 'DM Sans, sans-serif' }}>Kenapa Dinata?</p>
              </div>
              <h3 className="font-cormorant text-3xl font-semibold text-[#1B3A2E] leading-tight mb-4" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>{step.title}</h3>
              <p className="text-[#5a5a5a] text-base font-dm leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>{step.desc}</p>
              <ul className="space-y-3">
                {step.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-dm text-[#333]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    <span className="w-5 h-5 rounded-full bg-[#1B3A2E] flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}