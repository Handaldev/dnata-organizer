'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=90',
    alt: 'Dekorasi pernikahan elegan karya Dinata Organizer',
    className: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1561781482-1b4a64b95c16?w=600&q=90',
    alt: 'Momen romantis pasangan pengantin',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=90',
    alt: 'Resepsi pernikahan berkelas',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=90',
    alt: 'Venue pernikahan yang cantik',
    className: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1503428593586-e225b39bde42?w=600&q=90',
    alt: 'Detail bunga dan dekorasi pernikahan',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=90',
    alt: 'Momen bahagia pernikahan',
    className: '',
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="galeri"
      ref={ref}
      className="py-24 lg:py-32 bg-[#F5EDE8]"
    >
      <div className="max-w-6xl mx-auto px-6">
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
            Portofolio Kami
          </p>
          <h2
            className="font-cormorant text-4xl lg:text-5xl font-semibold text-[#1B3A2E] leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Karya yang Bicara{' '}
            <em className="italic text-[#C8A96E]">Sendiri</em>
          </h2>
          <p
            className="mt-4 text-[#5a5a5a] max-w-xl mx-auto text-base font-dm leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Setiap foto adalah cerita nyata dari pasangan yang mempercayakan
            hari paling istimewa mereka kepada kami.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-4 gap-3 md:gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#1B3A2E]/0 group-hover:bg-[#1B3A2E]/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="text-white/90 text-xs font-dm truncate" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

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
            Lihat Lebih Banyak di Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
