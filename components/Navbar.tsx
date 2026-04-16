'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Proses', href: '#proses' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Testimoni', href: '#testimoni' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#FAF8F4]/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="Dinata Organizer Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span
                className="font-cormorant text-[#1B3A2E] font-semibold text-lg leading-none"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                DINATA
              </span>
              <span
                className="block text-[#C8A96E] text-xs tracking-widest font-dm uppercase"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Organizer
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-dm font-medium tracking-wide transition-colors duration-200',
                  scrolled
                    ? 'text-[#1B3A2E] hover:text-[#C8A96E]'
                    : 'text-[#1B3A2E] hover:text-[#C8A96E]'
                )}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#konsultasi"
              className="relative overflow-hidden group px-6 py-2.5 bg-[#1B3A2E] text-[#FAF8F4] text-sm font-dm font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-[#C8A96E] hover:text-[#1B3A2E]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1B3A2E]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-0 z-40 bg-[#FAF8F4] pt-20 pb-8 px-6 shadow-lg md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#1B3A2E] text-lg font-cormorant font-medium border-b border-[#E8DDD5] pb-4"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#konsultasi"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 bg-[#1B3A2E] text-[#FAF8F4] text-sm font-dm font-medium tracking-wide rounded-full text-center"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Konsultasi Gratis
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}