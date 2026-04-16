'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    nama: 'Andini & Reza',
    lokasi: 'Jakarta Selatan',
    tanggal: 'Oktober 2024',
    quote:
      'Dinata Organizer benar-benar mengubah cara kami melihat proses pernikahan. Awalnya kami pikir akan sangat stres, tapi dengan Tim Dinata, setiap langkah terasa menyenangkan.',
    rating: 5,
    initials: 'A&R',
    color: '#C8A96E',
  },
  {
    id: 2,
    nama: 'Siti & Budi',
    lokasi: 'Tangerang',
    tanggal: 'Agustus 2024',
    quote:
      'Yang paling kami hargai adalah kejujuran mereka soal anggaran. Tidak ada kejutan biaya di akhir. Highly recommended!',
    rating: 5,
    initials: 'S&B',
    color: '#1B3A2E',
  },
  {
    id: 3,
    nama: 'Putri & Fajar',
    lokasi: 'Bekasi',
    tanggal: 'Juni 2024',
    quote:
      'Kami sempat ragu karena budget terbatas, tapi Dinata Organizer membantu kami mendapatkan pernikahan impian dalam budget yang ada.',
    rating: 5,
    initials: 'P&F',
    color: '#8B6914',
  },
  {
    id: 4,
    nama: 'Maya & Dimas',
    lokasi: 'Depok',
    tanggal: 'April 2024',
    quote:
      'Dari pertama konsultasi sudah terasa berbeda. Mereka tidak langsung menawarkan paket, tapi benar-benar bertanya tentang kami.',
    rating: 5,
    initials: 'M&D',
    color: '#C8A96E',
  },
  {
    id: 5,
    nama: 'Rina & Andi',
    lokasi: 'Bogor',
    tanggal: 'Maret 2024',
    quote:
      'Tim Dinata sangat profesional dan detail. Semua vendor terkoordinasi dengan baik, kami tinggal hadir dan menikmati.',
    rating: 5,
    initials: 'R&A',
    color: '#1B3A2E',
  },
  {
    id: 6,
    nama: 'Dewi & Arif',
    lokasi: 'Jakarta Timur',
    tanggal: 'Februari 2024',
    quote:
      'Dekorasi yang mereka buat melebihi ekspektasi kami. Semua tamu kagum dengan konsep pernikahan kami.',
    rating: 5,
    initials: 'D&A',
    color: '#8B6914',
  },
  {
    id: 7,
    nama: 'Lina & Hendra',
    lokasi: 'Cibubur',
    tanggal: 'Januari 2024',
    quote:
      'Komunikasi yang sangat baik sepanjang proses. Setiap pertanyaan kami dijawab dengan cepat dan jelas.',
    rating: 5,
    initials: 'L&H',
    color: '#C8A96E',
  },
  {
    id: 8,
    nama: 'Fitri & Bayu',
    lokasi: 'BSD',
    tanggal: 'Desember 2023',
    quote:
      'Hari H berjalan lancar tanpa hambatan. Tim Dinata handle semuanya dengan sempurna dari pagi sampai malam.',
    rating: 5,
    initials: 'F&B',
    color: '#1B3A2E',
  },
  {
    id: 9,
    nama: 'Nadia & Rizky',
    lokasi: 'Serpong',
    tanggal: 'November 2023',
    quote:
      'Wedding planner yang benar-benar mendengarkan. Setiap detail kecil diperhatikan dengan seksama.',
    rating: 5,
    initials: 'N&R',
    color: '#8B6914',
  },
  {
    id: 10,
    nama: 'Citra & Wahyu',
    lokasi: 'Jakarta Barat',
    tanggal: 'Oktober 2023',
    quote:
      'Terima kasih Dinata Organizer sudah mewujudkan pernikahan impian kami. Best decision ever!',
    rating: 5,
    initials: 'C&W',
    color: '#C8A96E',
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
      className="py-24 lg:py-32 bg-[#FAF8F4]"
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
            Kata Mereka
          </p>
          <h2
            className="font-cormorant text-4xl lg:text-5xl font-semibold text-[#1B3A2E] leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            200+ Pasangan Telah{' '}
            <em className="italic text-[#C8A96E]">Mempercayai Kami</em>
          </h2>
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
              className="grid grid-cols-5 gap-4"
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
                  <div className="flex items-center gap-2 pt-3 border-t border-[#E8DDD5]">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-cormorant font-semibold text-xs flex-shrink-0"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.initials}
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
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Desktop Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
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
                  className={`transition-all duration-300 rounded-full ${
                    i === desktopActive
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
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-cormorant font-semibold text-sm"
                  style={{ backgroundColor: testimonials[mobileActive].color }}
                >
                  {testimonials[mobileActive].initials}
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
                    {testimonials[mobileActive].lokasi} · {testimonials[mobileActive].tanggal}
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
                  className={`transition-all duration-300 rounded-full ${
                    i === mobileActive
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
