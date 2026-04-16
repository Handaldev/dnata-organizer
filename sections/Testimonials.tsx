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
      'Dinata Organizer benar-benar mengubah cara kami melihat proses pernikahan. Awalnya kami pikir akan sangat stres, tapi dengan Tim Dinata, setiap langkah terasa menyenangkan. Hari H kami — sempurna. Tidak ada satu hal pun yang salah.',
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
      'Yang paling kami hargai adalah kejujuran mereka soal anggaran. Tidak ada kejutan biaya di akhir. Planner kami, Mbak Dina, benar-benar mendengarkan apa yang kami mau dan mewujudkannya dengan indah. Highly recommended!',
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
      'Kami sempat ragu karena budget terbatas, tapi Dinata Organizer membantu kami mendapatkan pernikahan impian dalam budget yang ada. Kreativitas mereka luar biasa. Semua tamu bilang dekorasi kami paling cantik yang pernah mereka lihat.',
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
      'Dari pertama konsultasi sudah terasa berbeda. Mereka tidak langsung menawarkan paket, tapi benar-benar bertanya tentang kami. 6 bulan persiapan bersama mereka sangat smooth. Hari H kami menangis bahagia — semua sesuai impian.',
    rating: 5,
    initials: 'M&D',
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

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

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

        {/* Desktop: 2-col grid with featured */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {/* Large featured card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-1 bg-[#1B3A2E] rounded-3xl p-8 flex flex-col justify-between"
          >
            {/* Quote mark */}
            <div
              className="font-cormorant text-[#C8A96E]/40 text-8xl leading-none mb-4 -mt-4"
              aria-hidden="true"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              &ldquo;
            </div>
            <Stars count={testimonials[0].rating} />
            <p
              className="font-cormorant text-[#FAF8F4] text-xl font-medium leading-relaxed mt-4 mb-6 italic flex-1"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              {testimonials[0].quote}
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-cormorant font-semibold text-sm"
                style={{ backgroundColor: testimonials[0].color }}
              >
                {testimonials[0].initials}
              </div>
              <div>
                <p
                  className="text-[#FAF8F4] font-dm font-medium text-sm"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {testimonials[0].nama}
                </p>
                <p
                  className="text-[#FAF8F4]/50 font-dm text-xs"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {testimonials[0].lokasi} · {testimonials[0].tanggal}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right 3 cards stacked */}
          <div className="col-span-2 grid grid-cols-2 gap-6">
            {testimonials.slice(1).map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="bg-white border border-[#E8DDD5] rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <Stars count={t.rating} />
                  <p
                    className="font-cormorant text-[#1B3A2E] text-lg font-medium leading-relaxed mt-3 mb-4 italic"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-[#E8DDD5]">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-cormorant font-semibold text-xs"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="text-[#1B3A2E] font-dm font-medium text-sm"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {t.nama}
                    </p>
                    <p
                      className="text-[#888] font-dm text-xs"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {t.lokasi} · {t.tanggal}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Slider */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-[#E8DDD5] rounded-3xl p-7"
            >
              <Stars count={testimonials[active].rating} />
              <p
                className="font-cormorant text-[#1B3A2E] text-xl font-medium leading-relaxed mt-4 mb-6 italic"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-cormorant font-semibold text-sm"
                  style={{ backgroundColor: testimonials[active].color }}
                >
                  {testimonials[active].initials}
                </div>
                <div>
                  <p
                    className="text-[#1B3A2E] font-dm font-medium text-sm"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {testimonials[active].nama}
                  </p>
                  <p
                    className="text-[#888] font-dm text-xs"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {testimonials[active].lokasi} · {testimonials[active].tanggal}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#E0D8D0] flex items-center justify-center hover:bg-[#1B3A2E] hover:border-[#1B3A2E] hover:text-white transition-all text-[#1B3A2E]"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? 'w-6 h-2 bg-[#C8A96E]'
                      : 'w-2 h-2 bg-[#E0D8D0]'
                  }`}
                  aria-label={`Testimoni ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
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
