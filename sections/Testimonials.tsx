'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play } from 'lucide-react'

const videoRows = [
  {
    id: 1,
    number: '01',
    title: 'Video Best Wedding',
    description:
      'Highlight pernikahan terbaik yang pernah kami tangani — setiap momen diabadikan dengan sinematografi penuh perasaan.',
    videoId: 'V4Tw79VQiJc',
    source: 'YouTube',
  },
  {
    id: 2,
    number: '02',
    title: 'Kompilasi Wedding Expo',
    description:
      'Behind the scenes & momen seru dari berbagai wedding expo yang kami ikuti — lihat energi tim kami langsung.',
    videoId: 'YP22ag__avHE',
    source: 'YouTube',
  },
  {
    id: 3,
    number: '03',
    title: 'Kompilasi Testimoni Klien',
    description:
      'Langsung dari mulut klien kami — cerita nyata mereka tentang pengalaman bekerja sama dengan Dinata Organizer.',
    videoId: 'SuAbV6G8BXg',
    source: 'YouTube',
  },
]

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="rounded-2xl overflow-hidden border border-[#E8DDD5] relative bg-black w-full" style={{ aspectRatio: "9/16", maxHeight: "70vh" }}>
      {!playing ? (
        <div
          onClick={() => setPlaying(true)}
          className="relative w-full h-full cursor-pointer group"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={`${title} thumbnail`}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#C8A96E]/90 flex items-center justify-center group-hover:bg-[#C8A96E] group-hover:scale-105 transition-all duration-300">
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </div>
          </div>
        </div>
      ) : (
        <iframe
          key={`${videoId}-playing`}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&playsinline=1`}
          title={title}
          frameBorder="0"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      )}
    </div>
  )
}

function VideoRow({ row, index }: { row: typeof videoRows[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center ${index < videoRows.length - 1 ? 'pb-20 border-b border-[#E8DDD5] mb-20' : ''
        }`}
    >
      {/* Text side */}
      <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
        {/* Number */}
        <p
          className="font-cormorant text-8xl font-bold text-[#C8A96E]/15 leading-none select-none mb-2"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          aria-hidden="true"
        >
          {row.number}
        </p>

        {/* Title */}
        <h3
          className="font-cormorant text-3xl lg:text-4xl font-semibold text-[#1B3A2E] leading-tight mb-5 -mt-4"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          {row.title}
        </h3>

        {/* Description */}
        <p
          className="text-[#5a5a5a] text-base font-dm leading-relaxed mb-6"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {row.description}
        </p>

        {/* Source badge */}
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]" />
          <span
            className="text-[#9C7B5A] text-xs font-dm tracking-wide"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {row.source}
          </span>
        </div>
      </div>

      {/* Video side */}
      <div className={`max-w-xs mx-auto w-full lg:max-w-sm ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <VideoEmbed videoId={row.videoId} title={row.title} />
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="testimoni" className="py-28 lg:py-36 bg-[#FAF7F2]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p
            className="text-[#C8A96E] text-xs tracking-[0.3em] uppercase font-dm mb-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Bukti nyata dari klien kami
          </p>
          <h2
            className="font-cormorant text-4xl lg:text-6xl font-semibold text-[#1B3A2E] leading-tight mb-6"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Lihat{' '}
            <em
              className="font-cormorant italic text-[#C8A96E]"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Hasil Kerja
            </em>{' '}
            Kami Langsung
          </h2>
          <p
            className="text-[#5a5a5a] text-lg font-dm max-w-2xl mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Bukan sekadar janji — ini dokumentasi nyata dari pernikahan yang kami tangani.
          </p>
        </motion.div>

        {/* Video rows */}
        <div>
          {videoRows.map((row, index) => (
            <VideoRow key={row.id} row={row} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}