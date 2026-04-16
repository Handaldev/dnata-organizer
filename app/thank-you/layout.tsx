import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terima Kasih – Dinata Organizer',
  description:
    'Terima kasih telah menghubungi Dinata Organizer. Admin kami akan segera menghubungi Anda.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
