import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dinata Organizer – Wedding Planner & Event Organizer Profesional',
  description:
    'Dinata Organizer adalah Wedding and Event Organizer profesional dengan pengalaman 7 tahun dan lebih dari 200 klien. Layanan Personalized Wedding Planner untuk hari istimewa Anda.',
  keywords: [
    'wedding organizer',
    'wedding planner',
    'jasa WO',
    'wedding organizer jakarta',
    'wedding planner profesional',
    'Dinata Organizer',
    'CV Dinata Kreatif Group',
  ],
  openGraph: {
    title: 'Dinata Organizer – Wedding Planner & Event Organizer Profesional',
    description:
      'Layanan Personalized Wedding Planner dengan pengalaman 7 tahun dan lebih dari 200 klien.',
    url: 'https://dinataorganizer.com',
    siteName: 'Dinata Organizer',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinata Organizer – Wedding Planner Profesional',
    description:
      'Layanan Personalized Wedding Planner dengan pengalaman 7 tahun dan lebih dari 200 klien.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://dinataorganizer.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', { page_path: window.location.pathname });
            `,
          }}
        />
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
