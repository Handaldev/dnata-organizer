'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

// Package data
const packageTabs = [
  {
    id: 'wedding-planner',
    label: 'Wedding Planner',
    startPrice: '10,9 Jt',
    priceNote: 'Sudah termasuk WO on the Day',
    cards: [
      {
        id: 'intimate',
        name: 'Intimate Wedding Planner',
        category: 'Planner',
        description: 'Perencanaan penuh untuk pernikahan intim dengan sentuhan personal yang hangat.',
        image: '/images/package-intimate.webp',
      },
      {
        id: 'basic',
        name: 'Basic Wedding Planner',
        category: 'Planner',
        description: 'Perencanaan lengkap A–Z untuk hari spesialmu dengan koordinasi vendor terpercaya.',
        image: '/images/package-basic.webp',
      },
      {
        id: 'grand',
        name: 'Grand Wedding Planner',
        category: 'Planner',
        description: 'Untuk pernikahan besar dengan tamu ramai — semua terorganisir rapi dan megah.',
        image: '/images/package-grand.webp',
      },
      {
        id: 'praeevent',
        name: 'Pra Event Planner',
        category: 'Planner',
        description: 'Siraman, pengajian, engagement — direncanakan dengan detail yang sama seriusnya.',
        image: '/images/package-praevent.webp',
      },
    ],
  },
  {
    id: 'wo-on-day',
    label: 'WO on the Day',
    startPrice: '6,9 Jt',
    priceNote: 'Koordinasi penuh hari H',
    cards: [
      {
        id: 'wo-intimate',
        name: 'Intimate WO on the Day',
        category: 'WO on the Day',
        description: 'Koordinasi penuh hari H untuk pernikahan skala intim, tim standby dari pagi.',
        image: '/images/package-wo-intimate.webp',
      },
      {
        id: 'wo-basic',
        name: 'Basic WO on the Day',
        category: 'WO on the Day',
        description: 'Pengawasan & koordinasi semua vendor di hari H tanpa kamu perlu khawatir.',
        image: '/images/package-wo-basic.webp',
      },
      {
        id: 'wo-grand',
        name: 'Grand WO on the Day',
        category: 'WO on the Day',
        description: 'Tim lengkap untuk grand wedding — koordinasi skala besar berjalan mulus.',
        image: '/images/package-wo-grand.webp',
      },
      {
        id: 'wo-praevent',
        name: 'Pra Event WO on the Day',
        category: 'WO on the Day',
        description: 'Koordinasi penuh untuk siraman, pengajian, dan pra-event lainnya.',
        image: '/images/package-wo-praevent.webp',
      },
    ],
  },
  {
    id: 'all-in-wedding',
    label: 'All In – Wedding',
    startPrice: '69,9 Jt',
    priceNote: 'Sudah termasuk semua vendor',
    cards: [
      {
        id: 'allin-basic',
        name: 'Basic Wedding',
        category: 'All In',
        description: 'Paket lengkap pernikahan dengan vendor pilihan yang terjangkau namun berkualitas.',
        image: '/images/package-allin-basic.webp',
      },
      {
        id: 'allin-premium',
        name: 'Premium Wedding',
        category: 'All In',
        description: 'Vendor premium & dekorasi eksklusif — pengalaman pernikahan yang berkesan.',
        image: '/images/package-allin-premium.webp',
        featured: true,
        badge: 'Terpopuler',
      },
      {
        id: 'allin-elite',
        name: 'Elite Wedding',
        category: 'All In',
        description: 'Pengalaman mewah tanpa kompromi — semua vendor top, semua sudah termasuk.',
        image: '/images/package-allin-elite.webp',
      },
    ],
  },
  {
    id: 'all-in-preevent',
    label: 'All In – Pre Event',
    startPrice: '21,9 Jt',
    priceNote: 'Semua pre event termasuk',
    cards: [
      {
        id: 'allin-siraman',
        name: 'Siraman All In',
        category: 'Pre Event',
        description: 'Paket lengkap upacara siraman — dekorasi, katering, dokumentasi, semua kami urus.',
        image: '/images/package-siraman.webp',
      },
      {
        id: 'allin-pengajian',
        name: 'Pengajian All In',
        category: 'Pre Event',
        description: 'Pengajian khusyuk dan berkesan dengan semua kebutuhan sudah tersiapkan.',
        image: '/images/package-pengajian.webp',
      },
      {
        id: 'allin-engagement',
        name: 'Engagement All In',
        category: 'Pre Event',
        description: 'Momen lamaran yang tak terlupakan — dekorasi, dokumentasi, & catering lengkap.',
        image: '/images/package-engagement.webp',
      },
    ],
  },
  {
    id: 'custom',
    label: 'Custom',
    startPrice: null,
    priceNote: null,
    isCustom: true,
  },
]

// Package Card Component
function PackageCard({
  card,
  index,
}: {
  card: (typeof packageTabs[0]['cards'])[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl overflow-hidden group ${
        card.featured
          ? 'border-2 border-[#C8A96E] shadow-lg'
          : 'border border-[#E8DDD5]'
      }`}
    >
      {/* Image container */}
      <div className="relative aspect-video bg-gray-200 overflow-hidden">
        <Image
          src={card.image}
          alt={card.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {card.featured && (
          <div className="absolute top-3 right-3 bg-[#C8A96E] text-white px-3 py-1 rounded-full text-xs font-dm font-medium">
            {card.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 bg-white">
        <span
          className="inline-block text-[#C8A96E] text-xs font-dm font-medium tracking-wider uppercase mb-2"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {card.category}
        </span>
        <h4
          className="font-cormorant text-lg font-semibold text-[#1B3A2E] mb-2"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          {card.name}
        </h4>
        <p
          className="text-[#888] text-sm font-dm leading-relaxed"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {card.description}
        </p>
      </div>
    </motion.div>
  )
}

// Custom Package Component
function CustomPackage() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Halo, saya tertarik dengan custom package. Bisa diskusi lebih lanjut?')
    window.open(
      `https://wa.me/6282124503329?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center py-24 border-2 border-dashed border-[#E0D8D0] rounded-2xl"
    >
      <div className="text-center max-w-sm">
        <h4
          className="font-cormorant text-2xl font-semibold text-[#1B3A2E] mb-3"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          Custom Package
        </h4>
        <p
          className="text-[#888] text-sm font-dm leading-relaxed mb-6"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Punya kebutuhan unik atau budget spesifik? Mari kita diskusikan paket yang benar-benar sesuai dengan visi pernikahan kamu.
        </p>
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-dm font-medium text-sm px-6 py-3 rounded-full hover:bg-[#1ea853] transition-colors"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          <MessageCircle size={16} />
          Diskusi Custom Package
        </button>
      </div>
    </motion.div>
  )
}

// Tab Footer Component
function TabFooter({
  startPrice,
  priceNote,
  packageName,
}: {
  startPrice: string | null
  priceNote: string | null
  packageName: string
}) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Halo, saya tertarik dengan ${packageName}`)
    window.open(
      `https://wa.me/6282124503329?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <div className="mt-10 pt-6 border-t border-[#E8DDD5] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p
          className="font-cormorant text-2xl font-semibold text-[#1B3A2E]"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          Mulai dari {startPrice}
        </p>
        <p
          className="text-[#C8A96E] text-sm font-dm mt-1"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {priceNote}
        </p>
      </div>
      <button
        onClick={handleWhatsApp}
        className="inline-flex items-center gap-2 bg-[#25D366] text-white font-dm font-medium text-sm px-6 py-3 rounded-full hover:bg-[#1ea853] transition-colors whitespace-nowrap"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        <MessageCircle size={16} />
        Tanya via WhatsApp
      </button>
    </div>
  )
}

export default function Packages() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState('wedding-planner')

  const currentTab = packageTabs.find((tab) => tab.id === activeTab)!

  return (
    <section
      id="paket"
      ref={ref}
      className="py-28 lg:py-36 bg-[#F5EFE6]"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p
            className="text-[#C8A96E] text-xs tracking-[0.3em] uppercase font-dm mb-3"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Temukan paket yang tepat
          </p>
          <h2
            className="font-cormorant text-4xl lg:text-5xl font-semibold text-[#1B3A2E] leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Pilih{' '}
            <em className="font-cormorant italic text-[#C8A96E]" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
              Paket
            </em>{' '}
            Sesuai Kebutuhan Kamu
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[#5a5a5a] text-lg max-w-3xl mx-auto mb-12 font-dm"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Dari intimate wedding hingga grand celebration — kami punya paket yang pas untuk setiap cerita.
        </motion.p>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {packageTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-dm font-medium text-sm px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#9C7B5A] text-white'
                  : 'border-2 border-[#9C7B5A] text-[#1B3A2E] hover:bg-[#9C7B5A]/10'
              }`}
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        {currentTab.isCustom ? (
          <CustomPackage />
        ) : (
          <>
            <div
              className={`grid gap-6 mb-8 ${
                currentTab.cards.length === 3
                  ? 'grid-cols-1 lg:grid-cols-3'
                  : 'grid-cols-1 lg:grid-cols-2'
              }`}
            >
              {currentTab.cards.map((card, i) => (
                <PackageCard key={card.id} card={card} index={i} />
              ))}
            </div>

            {/* Footer */}
            <TabFooter
              startPrice={currentTab.startPrice}
              priceNote={currentTab.priceNote}
              packageName={currentTab.label}
            />
          </>
        )}
      </div>
    </section>
  )
}
