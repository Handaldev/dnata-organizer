'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play } from 'lucide-react'

// Videos configuration - easy to customize
const videos = [
  {
    id: 1,
    label: 'Best Wedding',
    title: 'Best Wedding Highlights',
    description: 'Highlight pernikahan terbaik yang pernah kami tangani — full cinematic.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
  },
  {
    id: 2,
    label: 'Wedding Expo',
    title: 'Kompilasi Wedding Expo',
    description: 'Behind the scenes & momen seru dari berbagai wedding expo yang kami ikuti.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
  },
  {
    id: 3,
    label: 'Testimoni',
    title: 'Kompilasi Testimoni Klien',
    description: 'Langsung dari mulut klien kami — cerita mereka setelah hari H berlalu.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
  },
]

// Main player component
function MainPlayer({ video, playing, onPlay }: { video: typeof videos[0]; playing: boolean; onPlay: () => void }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-[#E8DDD5] aspect-[9/16] relative bg-neutral-900">
      {playing ? (
        <iframe
          key={`${video.videoId}-playing`}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=0&rel=0&playsinline=1`}
          title={video.title}
          frameBorder="0"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      ) : (
        <div onClick={onPlay} className="relative w-full h-full cursor-pointer group">
          <img
            src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
            alt={video.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#C8A96E]/90 flex items-center justify-center group-hover:bg-[#C8A96E] transition-colors">
              <Play className="w-6 h-6 text-white ml-1 fill-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Thumbnail card component
function ThumbnailCard({
  video,
  isActive,
  onClick,
}: {
  video: typeof videos[0]
  isActive: boolean
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl overflow-hidden cursor-pointer transition-all aspect-[9/16] relative bg-neutral-900 ${
        isActive ? 'border-2 border-[#C8A96E]' : 'border border-[#E8DDD5] opacity-50 hover:opacity-75'
      }`}
    >
      <img
        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
        alt={video.label}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-[#C8A96E]/85 flex items-center justify-center">
          <Play className="w-3 h-3 text-white ml-0.5 fill-white" />
        </div>
      </div>
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <span className="text-[10px] text-white/80 bg-black/40 px-2 py-0.5 rounded">{video.label}</span>
      </div>
    </div>
  )
}

// Mobile pill tab component
function PillTab({
  video,
  isActive,
  onClick,
}: {
  video: typeof videos[0]
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-dm transition-all ${
        isActive
          ? 'bg-[#C8A96E] text-white'
          : 'border border-[#C8A96E] text-[#C8A96E] bg-transparent hover:bg-[#C8A96E]/10'
      }`}
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      {video.label}
    </button>
  )
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: '-100px' })

  const handleSwitch = (index: number) => {
    setActiveIndex(index)
    setPlaying(false)
  }

  const activeVideo = videos[activeIndex]

  return (
    <section id="testimoni" className="py-28 lg:py-36 bg-[#FAF7F2]">
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

        {/* Content - Desktop: 2 column grid, Mobile: Single column with tabs */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 24 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Mobile pill tabs */}
          <div className="md:hidden mb-6 flex gap-2 overflow-x-auto pb-2">
            {videos.map((video, idx) => (
              <PillTab
                key={video.id}
                video={video}
                isActive={idx === activeIndex}
                onClick={() => handleSwitch(idx)}
              />
            ))}
          </div>

          {/* Main layout grid */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
            {/* Left column - Thumbnails (desktop only) */}
            <div className="hidden md:flex flex-col gap-4">
              {videos.map((video, idx) => (
                <ThumbnailCard
                  key={video.id}
                  video={video}
                  isActive={idx === activeIndex}
                  onClick={() => handleSwitch(idx)}
                />
              ))}
            </div>

            {/* Right column - Main player & info */}
            <div>
              <MainPlayer video={activeVideo} playing={playing} onPlay={() => setPlaying(true)} />

              {/* Title & Description */}
              <div className="mt-6">
                <h3
                  className="font-cormorant text-xl lg:text-2xl font-semibold text-[#1B3A2E] italic mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                >
                  {activeVideo.title}
                </h3>
                <p
                  className="text-sm text-[#888] font-dm leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {activeVideo.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
