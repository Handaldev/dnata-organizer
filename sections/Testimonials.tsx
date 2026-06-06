'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play } from 'lucide-react'

// Video rows configuration - easy to customize
const videoRows = [
  {
    id: 1,
    title: 'Video Best Wedding',
    description: 'Highlight pernikahan terbaik yang pernah kami tangani — full cinematic.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
    source: 'YouTube',
  },
  {
    id: 2,
    title: 'Kompilasi Wedding Expo',
    description: 'Behind the scenes & momen seru dari berbagai wedding expo yang kami ikuti.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
    source: 'YouTube',
  },
  {
    id: 3,
    title: 'Kompilasi Testimoni Klien',
    description: 'Langsung dari mulut klien kami — cerita mereka setelah hari H berlalu.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
    source: 'YouTube',
  },
]

// Video Row Component with thumbnail facade pattern
function VideoRow({ row, index }: { row: typeof videoRows[0]; index: number }) {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`${index < videoRows.length - 1 ? 'border-b border-[#E8DDD5] pb-16' : ''} ${index > 0 ? 'pt-16' : ''}`}
    >
      {/* Row header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center flex-shrink-0">
          <span
            className="font-cormorant font-bold text-[#7A5C3A]"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            {row.id}
          </span>
        </div>
        <div className="flex-1">
          <h3
            className="font-cormorant text-2xl lg:text-3xl font-semibold text-[#1B3A2E] mb-2"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            {row.title}
          </h3>
          <p
            className="text-[#5a5a5a] text-base font-dm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {row.description}
          </p>
        </div>
      </div>

      {/* Video embed with thumbnail facade */}
      <div className="mb-4 rounded-2xl overflow-hidden border border-[#E8DDD5]">
        <div className="aspect-video w-full relative bg-black">
          {!playing ? (
            <div
              onClick={() => setPlaying(true)}
              className="relative w-full h-full cursor-pointer group"
            >
              <img
                src={`https://img.youtube.com/vi/${row.videoId}/maxresdefault.jpg`}
                alt={`${row.title} thumbnail`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#C8A96E]/90 flex items-center justify-center group-hover:bg-[#C8A96E] transition-colors">
                  <Play className="w-6 h-6 text-white ml-1 fill-white" />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              key={`${row.videoId}-playing`}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${row.videoId}?autoplay=1&mute=0&rel=0&playsinline=1`}
              title={row.title}
              frameBorder="0"
              allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          )}
        </div>
      </div>

      {/* Source badge */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#C8A96E]" />
        <span
          className="text-[#888] text-xs font-dm"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {row.source}
        </span>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section
      id="testimoni"
      className="py-28 lg:py-36 bg-[#FAF7F2]"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
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
            </em>
            {' '}Kami Langsung
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-[#5a5a5a] text-lg font-dm max-w-3xl mx-auto mb-20"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Bukan sekadar janji — ini dokumentasi nyata dari pernikahan yang kami tangani.
        </motion.p>

        {/* Video rows */}
        <div className="space-y-0">
          {videoRows.map((row, index) => (
            <VideoRow key={row.id} row={row} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}