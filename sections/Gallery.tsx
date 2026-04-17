'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/testi_1.webp',
    alt: 'Dekorasi outdoor garden party wedding',
  },
  {
    src: '/images/testi_2.webp',
    alt: 'First dance romantic moment',
  },
  {
    src: '/images/testi_3.webp',
    alt: 'Table setting elegant reception',
  },
  {
    src: '/images/testi_4.webp',
    alt: 'Indoor ballroom decoration',
  },
  {
    src: '/images/testi_5.webp',
    alt: 'Flower arrangement detail',
  },
  {
    src: '/images/testi_6.webp',
    alt: 'Bride and groom portrait',
  },
  {
    src: '/images/testi_7.webp',
    alt: 'Wedding ceremony moment',
  },
  {
    src: '/images/testi_8.webp',
    alt: 'Wedding cake display',
  },
  {
    src: '/images/teti_9.webp',
    alt: 'Guest celebration moment',
  },
  {
    src: '/images/testi_10.webp',
    alt: 'Happy couple walking',
  },
  {
    src: '/images/hero_kanan.webp',
    alt: 'Happy couple walking',
  },
  {
    src: '/images/proses_1.webp',
    alt: 'Happy couple walking',
  },

]

// Lightbox Component
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof galleryImages
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 lg:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 lg:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative w-[90vw] h-[80vh] max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </motion.div>

      {/* Caption */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-white/80 text-sm font-dm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          {images[currentIndex].alt}
        </p>
        <p className="text-white/50 text-xs font-dm mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const goToPrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <section
        id="galeri"
        ref={ref}
        className="py-28 lg:py-36 bg-[#F5EDE8]"
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p
              className="text-[#C8A96E] text-xs tracking-[0.3em] uppercase font-dm mb-4"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Bukti Nyata
            </p>
            <h2
              className="font-cormorant text-4xl lg:text-5xl font-semibold text-[#1B3A2E] leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              200+ Pernikahan{' '}
              <em className="font-cormorant italic text-[#C8A96E]" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>yang Kami Wujudkan</em>
            </h2>
            <p
              className="mt-4 text-[#5a5a5a] max-w-xl mx-auto text-base font-dm leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Bukan janji kosong. Ini adalah hasil nyata dari pasangan-pasangan
              yang sudah mempercayakan hari spesial mereka kepada Dinata Organizer.
            </p>
          </motion.div>

          {/* 
            CSS Columns Masonry — tidak ada bolong karena:
            - Tinggi tiap item mengikuti aspect ratio foto aslinya (bukan fixed row height)
            - break-inside: avoid mencegah gambar terpotong antar kolom
            - Foto mengisi kolom dari atas ke bawah secara natural
          */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="[column-count:2] md:[column-count:3] lg:[column-count:4] [column-gap:12px]"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                onClick={() => openLightbox(i)}
                className="relative overflow-hidden rounded-xl group cursor-pointer mb-3 [break-inside:avoid]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#1B3A2E]/0 group-hover:bg-[#1B3A2E]/30 transition-all duration-500" />
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B3A2E" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </div>
                </div>
                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent">
                  <span className="text-white/90 text-xs truncate block" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA below gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://www.instagram.com/dinata.organizer/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1B3A2E] font-dm font-medium text-sm border border-[#1B3A2E] rounded-full px-6 py-3 hover:bg-[#1B3A2E] hover:text-white transition-all duration-300"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Lihat Portfolio Lengkap di Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={galleryImages}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goToPrev}
            onNext={goToNext}
          />
        )}
      </AnimatePresence>
    </>
  )
}