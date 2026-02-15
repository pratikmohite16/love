import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Living At Altitude',
  description: 'Some people were never meant to live at sea level.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
