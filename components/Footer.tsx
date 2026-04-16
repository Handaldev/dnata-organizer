import Image from 'next/image'
import Link from 'next/link'

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dinata.organizer/reels/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61577602907443',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@dinata.organizer',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
      </svg>
    ),
  },
]

const navLinks = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Proses', href: '#proses' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Konsultasi', href: '#konsultasi' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0e2819] text-[#FAF8F4]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 bg-white rounded-lg overflow-hidden p-1">
                <Image
                  src="/images/logo.png"
                  alt="Dinata Organizer"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p
                  className="font-cormorant text-[#FAF8F4] font-semibold text-lg leading-none"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                >
                  DINATA
                </p>
                <p
                  className="text-[#C8A96E] text-xs tracking-widest uppercase font-dm"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Organizer
                </p>
              </div>
            </div>
            <p
              className="text-[#FAF8F4]/50 text-sm font-dm leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Wedding Organizer Jabodetabek dengan pendekatan personal. 200+ pernikahan sukses, on budget, tanpa drama.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-[#FAF8F4]/10 flex items-center justify-center text-[#FAF8F4]/60 hover:bg-[#C8A96E] hover:text-white transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links & Contact Side by Side */}
          <div className="grid grid-cols-2 gap-8">
            {/* Nav Links */}
            <div>
              <h4
                className="font-cormorant text-lg font-semibold text-[#FAF8F4] mb-5"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                Navigasi
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#FAF8F4]/50 text-sm font-dm hover:text-[#C8A96E] transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="font-cormorant text-lg font-semibold text-[#FAF8F4] mb-5"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                Hubungi Kami
              </h4>
              <div className="space-y-4">
                <a
                  href="https://wa.me/6282124503329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <span
                    className="text-[#FAF8F4]/50 text-sm font-dm group-hover:text-[#C8A96E] transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    +62 821-2450-3329
                  </span>
                </a>

                <a
                  href="mailto:dinataorganizer@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F4]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FAF8F4" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <span
                    className="text-[#FAF8F4]/50 text-sm font-dm group-hover:text-[#C8A96E] transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    dinataorganizer@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FAF8F4]/5">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-[#FAF8F4]/30 text-xs font-dm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            © {new Date().getFullYear()} CV Dinata Kreatif Group. All rights reserved.
          </p>
          <p
            className="text-[#FAF8F4]/30 text-xs font-dm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Wedding & Event Organizer Profesional
          </p>
        </div>
      </div>
    </footer>
  )
}
