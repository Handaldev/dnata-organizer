# Dinata Organizer — Website

Website premium untuk **Dinata Organizer** (CV Dinata Kreatif Group), dibangun dengan Next.js 14, TypeScript, Tailwind CSS, dan Framer Motion.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Setup environment variables
cp .env.local.example .env.local
# Edit .env.local dengan nilai yang sesuai

# 3. Tambahkan logo
# Logo sudah ada di /public/images/logo.png

# 4. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

---

## 📁 Struktur Proyek

```
dinata-organizer/
├── app/
│   ├── layout.tsx          # Root layout (metadata, fonts, analytics)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── thank-you/
│       ├── layout.tsx      # Thank you page layout
│       └── page.tsx        # Thank you page
│
├── components/
│   ├── Navbar.tsx          # Sticky navbar dengan mobile menu
│   ├── Footer.tsx          # Footer dengan kontak & social
│   ├── LeadForm.tsx        # Form konsultasi dengan validasi
│   └── WhatsAppFloat.tsx   # Floating WhatsApp button
│
├── sections/
│   ├── Hero.tsx            # Hero split layout
│   ├── Problem.tsx         # 3-column pain points
│   ├── IntroSolution.tsx   # Pengenalan layanan
│   ├── Process.tsx         # 3-step sticky scroll process
│   ├── Gallery.tsx         # Masonry gallery
│   ├── Testimonials.tsx    # Testimonial cards/slider
│   └── CTASection.tsx      # High-conversion CTA + form
│
├── lib/
│   ├── utils.ts            # Helper functions
│   ├── analytics.ts        # GA & Meta Pixel events
│   ├── googleSheets.ts     # Google Sheets integration
│   └── apps-script.js      # Google Apps Script code
│
└── public/
    ├── images/
    │   └── logo.png        # Logo Dinata Organizer
    ├── files/
    │   └── pricing-list.pdf  # ← Tambahkan file ini!
    ├── robots.txt
    └── sitemap.xml
```

---

## ⚙️ Setup Google Sheets Integration

1. Buat Google Sheet baru
2. Klik **Extensions > Apps Script**
3. Copy-paste seluruh isi file `lib/apps-script.js`
4. Klik **Deploy > New Deployment**
5. Pilih Type: **Web App**
6. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Klik **Deploy**, copy URL-nya
8. Paste URL ke `.env.local`:
   ```
   NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/...
   ```

---

## 📊 Setup Analytics

### Google Analytics 4
1. Buat property di [analytics.google.com](https://analytics.google.com)
2. Copy Measurement ID (format: `G-XXXXXXXXXX`)
3. Ganti di `app/layout.tsx` dan `.env.local`

### Meta Pixel
1. Buat pixel di [Meta Business Manager](https://business.facebook.com)
2. Copy Pixel ID
3. Ganti di `app/layout.tsx` dan `.env.local`

---

## 📄 Menambahkan Pricing List PDF

Letakkan file PDF pricing list di:
```
public/files/pricing-list.pdf
```

File ini akan otomatis diunduh setelah user submit form.

---

## 🖼️ Mengganti Gambar

Semua gambar di website menggunakan Unsplash placeholder. Untuk mengganti:

1. Simpan gambar di `/public/images/`
2. Ganti URL di setiap section:
   - `sections/Hero.tsx` → gambar hero
   - `sections/IntroSolution.tsx` → gambar solusi
   - `sections/Process.tsx` → gambar 3 proses
   - `sections/Gallery.tsx` → 6 gambar galeri

---

## 🎨 Kustomisasi Warna

Warna utama di `tailwind.config.ts`:
```
'dinata-green': '#1B3A2E'   ← Hijau forest (primary)
'dinata-gold':  '#C8A96E'   ← Emas (accent)
'dinata-cream': '#FAF8F4'   ← Krem (background)
'dinata-rose':  '#F5EDE8'   ← Rose (section background)
```

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

Tambahkan environment variables di Vercel Dashboard.

### Build Manual
```bash
npm run build
npm start
```

---

## 📱 Fitur

- ✅ Responsive (mobile-first)
- ✅ Sticky navbar dengan scroll behavior
- ✅ Returning user detection (localStorage)
- ✅ Form validasi + unique consultation ID
- ✅ Google Sheets integration
- ✅ GA + Meta Pixel tracking
- ✅ WhatsApp floating button
- ✅ Auto PDF download setelah form submit
- ✅ SEO optimized (metadata, sitemap, robots.txt)
- ✅ Smooth animations (Framer Motion)

---

## 📞 Kontak

- WhatsApp: [+62 821-2450-3329](https://wa.me/6282124503329)
- Email: dinataorganizer@gmail.com
- Instagram: [@dinata.organizer](https://www.instagram.com/dinata.organizer/)
