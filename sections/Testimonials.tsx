'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    nama: 'Andini & Reza',
    lokasi: 'Jakarta Selatan',
    tanggal: 'Oktober 2024',
    quote:
      'Awalnya kami mau handle sendiri, tapi setelah 2 bulan stress luar biasa, akhirnya pakai Dinata. Best decision! Semuanya jadi smooth dan kami bisa fokus kerja.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    id: 2,
    nama: 'Siti & Budi',
    lokasi: 'Tangerang',
    tanggal: 'Agustus 2024',
    quote:
      'Budget kami 50jt dan mereka berhasil kasih pernikahan yang kelihatan 100jt. Nego vendor nya jago banget!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    id: 3,
    nama: 'Putri & Fajar',
    lokasi: 'Bekasi',
    tanggal: 'Juni 2024',
    quote:
      'Takut vendor kabur atau kualitas jelek? Sama Dinata gak perlu khawatir. Mereka punya network vendor trusted dan semua di-supervise.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: 4,
    nama: 'Maya & Dimas',
    lokasi: 'Depok',
    tanggal: 'April 2024',
    quote:
      'Yang bikin beda: mereka tanya dulu maunya kita apa, baru kasih proposal. Bukan langsung sodor paket kayak WO lain.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
  },
  {
    id: 5,
    nama: 'Rina & Andi',
    lokasi: 'Bogor',
    tanggal: 'Maret 2024',
    quote:
      'Hari H ada masalah AC venue mati. Tim Dinata handle tanpa kita tahu - begitu sadar, AC sudah nyala lagi. Lega banget!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
  },
  {
    id: 6,
    nama: 'Dewi & Arif',
    lokasi: 'Jakarta Timur',
    tanggal: 'Februari 2024',
    quote:
      'Mama mertua request ini itu, tim Dinata yang handle komunikasinya. Kami gak perlu ribet sama drama keluarga.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&q=80',
  },
  {
    id: 7,
    nama: 'Lina & Hendra',
    lokasi: 'Cibubur',
    tanggal: 'Januari 2024',
    quote:
      'Update progress tiap minggu via WA. Gak perlu nanya-nanya, mereka proaktif kasih info. Profesional banget!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80',
  },
  {
    id: 8,
    nama: 'Fitri & Bayu',
    lokasi: 'BSD',
    tanggal: 'Desember 2023',
    quote:
      'Dari jam 6 pagi sampe jam 11 malam, tim Dinata standby terus. Kami tinggal senyum dan foto-foto.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
  },
  {
    id: 9,
    nama: 'Nadia & Rizky',
    lokasi: 'Serpong',
    tanggal: 'November 2023',
    quote:
      'Konsultasi pertama gratis dan gak ada pressure untuk langsung deal. Baru setelah yakin, baru kami lanjut.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80',
  },
  {
    id: 10,
    nama: 'Citra & Wahyu',
    lokasi: 'Jakarta Barat',
    tanggal: 'Oktober 2023',
    quote:
      'Sudah recommend ke 3 teman dan semuanya puas. Dinata memang the real deal untuk WO Jabodetabek!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#C8A96E" className="text-[#C8A96E]" />
      ))}
    </div>
  )
}

// Google Rating Badge Component
function GoogleRatingBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-white border border-[#E8DDD5] rounded-full px-5 py-2.5 shadow-sm">
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
      <div className="flex items-center gap-2">
        <span className="font-cormorant text-xl font-bold text-[#1B3A2E]" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>4.9</span>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} fill="#FBBC05" className="text-[#FBBC05]" />
          ))}
        </div>
        <span className="text-[#888] text-xs font-dm" style={{ fontFamily: 'DM Sans, sans-serif' }}>Google Reviews</span>
      </div>
    </div>
  )
}

// Split testimonials into slides of 5 for desktop
const desktopSlides = [testimonials.slice(0, 5), testimonials.slice(5, 10)]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [desktopActive, setDesktopActive] = useState(0)
  const [mobileActive, setMobileActive] = useState(0)

  const prevDesktop = () => setDesktopActive((a) => (a === 0 ? desktopSlides.length - 1 : a - 1))
  const nextDesktop = () => setDesktopActive((a) => (a === desktopSlides.length - 1 ? 0 : a + 1))

  const prevMobile = () => setMobileActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const nextMobile = () => setMobileActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  return (
    <section
      id="testimoni"
      ref={ref}
      className="py-28 lg:py-36 bg-[#FAF8F4]"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <p
            className="text-[#C8A96E] text-xs tracking-[0.3em] uppercase font-dm mb-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Kata Mereka
          </p>
          <h2
            className="font-cormorant text-4xl lg:text-5xl font-semibold text-[#1B3A2E] leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Bukan Janji,{' '}
            <em className="font-cormorant italic text-[#C8A96E]" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>Ini Hasil Nyatanya</em>
          </h2>
        </motion.div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <GoogleRatingBadge />
        </motion.div>

        {/* Desktop: 5 cards per slide */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={desktopActive}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-5 gap-5"
            >
              {desktopSlides[desktopActive].map((t) => (
                <div
                  key={t.id}
                  className="bg-white border border-[#E8DDD5] rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <Stars count={t.rating} />
                    <p
                      className="font-cormorant text-[#1B3A2E] text-sm font-medium leading-relaxed mt-3 mb-4 italic line-clamp-4"
                      style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#E8DDD5]">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full overflow-hidden relative flex-shrink-0">
                        <Image
                          src={t.photo}
                          alt={t.nama}
                          fill
                          className="object-cover"
                          sizes="36px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-[#1B3A2E] font-dm font-medium text-xs truncate"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {t.nama}
                        </p>
                        <p
                          className="text-[#888] font-dm text-[10px] truncate"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {t.lokasi}
                        </p>
                      </div>
                    </div>
                    <p
                      className="text-[#C8A96E] font-dm text-[10px] mt-2"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {t.tanggal}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Desktop Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevDesktop}
              className="w-10 h-10 rounded-full border border-[#E0D8D0] flex items-center justify-center hover:bg-[#1B3A2E] hover:border-[#1B3A2E] hover:text-white transition-all text-[#1B3A2E]"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {desktopSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setDesktopActive(i)}
                  className={`transition-all duration-300 rounded-full ${i === desktopActive
                    ? 'w-6 h-2 bg-[#C8A96E]'
                    : 'w-2 h-2 bg-[#E0D8D0]'
                    }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextDesktop}
              className="w-10 h-10 rounded-full border border-[#E0D8D0] flex items-center justify-center hover:bg-[#1B3A2E] hover:border-[#1B3A2E] hover:text-white transition-all text-[#1B3A2E]"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Mobile: 1 card per slide */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileActive}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-[#E8DDD5] rounded-3xl p-7"
            >
              <Stars count={testimonials[mobileActive].rating} />
              <p
                className="font-cormorant text-[#1B3A2E] text-xl font-medium leading-relaxed mt-4 mb-6 italic"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                &ldquo;{testimonials[mobileActive].quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src={testimonials[mobileActive].photo}
                    alt={testimonials[mobileActive].nama}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p
                    className="text-[#1B3A2E] font-dm font-medium text-sm"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {testimonials[mobileActive].nama}
                  </p>
                  <p
                    className="text-[#888] font-dm text-xs"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {testimonials[mobileActive].lokasi}
                  </p>
                  <p
                    className="text-[#C8A96E] font-dm text-xs mt-1"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {testimonials[mobileActive].tanggal}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevMobile}
              className="w-10 h-10 rounded-full border border-[#E0D8D0] flex items-center justify-center hover:bg-[#1B3A2E] hover:border-[#1B3A2E] hover:text-white transition-all text-[#1B3A2E]"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5 flex-wrap justify-center max-w-[200px]">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileActive(i)}
                  className={`transition-all duration-300 rounded-full ${i === mobileActive
                    ? 'w-4 h-2 bg-[#C8A96E]'
                    : 'w-2 h-2 bg-[#E0D8D0]'
                    }`}
                  aria-label={`Testimoni ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextMobile}
              className="w-10 h-10 rounded-full border border-[#E0D8D0] flex items-center justify-center hover:bg-[#1B3A2E] hover:border-[#1B3A2E] hover:text-white transition-all text-[#1B3A2E]"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
