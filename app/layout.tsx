import './globals.css'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Verify Your Visa | Ministry of Interior - Kuwait',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900">
        {/* HEADER */}
        <SiteHeader />

        {/* PAGE CONTENT */}
        <main className="min-h-[calc(100vh-220px)]">{children}</main>

        {/* FOOTER */}
        <SiteFooter />
      </body>
    </html>
  )
}
