import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans_SC, Noto_Serif_SC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSans = Noto_Sans_SC({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans"
});

const notoSerif = Noto_Serif_SC({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: '金倍福 - 专注板材行业25年 | 欧松板 多层板 漆感板供应商',
  description: '金倍福板材供应链，25年专注板材行业，为建筑、家居、工业制造等领域提供优质木材。主营欧松板、多层板、漆感板等全品类板材。',
  keywords: '板材供应商,欧松板,多层板,漆感板,木材批发,建筑板材,家具板材',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSans.variable} ${notoSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
