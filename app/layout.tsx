import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eden - Software Dev',
  description: 'Eden Pearson - Full-stack Software Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/EP.png" />
      </head>
      <body className="">{children}</body>
    </html>
  )
}
