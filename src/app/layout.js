
import './globals.css'
import { Inter } from 'next/font/google'

import Footer from '@/components/footer';
const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head';
export const metadata = {
  title: 'Shreshth Verma',
  "og:title": 'Shreshth Verma',
  description: 'I\'m Shreshth Verma: A Full Stack Developer, a perpetual student, an entrepreneur, and an amateur poet',
  "og:description": 'I\'m Shreshth Verma: A Full Stack Developer, a perpetual student, an entrepreneur, and an amateur poet',
  "og:url":"https://www.shreshthverma.me",
  "keywords":"Shreshth, Verma, Shreshth Verma, shreshthverma.me, Personal Site, personal, site",
  "og:image":"/profile.jpeg"
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>{children}    <Footer />
  </body>

    </html>
  )
}
