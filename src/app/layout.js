
import './globals.css'
import { Inter } from 'next/font/google'

import Footer from '@/components/footer';
const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head';
export const metadata = {
  title: 'Shreshth Verma',
  "og:title": 'Shreshth Verma',
  description: 'I\'m Shreshth Verma: A Full Stack Developer, a perpetual student, an entrepreneur, and an amateur poet',
  openGraph:{
    title:"Shreshth Verma",
    description:'I\'m Shreshth Verma: A Full Stack Developer, a perpetual student, an entrepreneur, and an amateur poet',
    url:"https://www.shreshthverma.me",
    "images":["/profile.jpeg"]
  },
  "keywords":"Shreshth, Verma, Shreshth Verma, shreshthverma.me, Personal Site, personal, site",

  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name='og:image' content='/profile.jpeg'></meta>
      </Head>
      <body className={inter.className}>{children}    <Footer />
  </body>

    </html>
  )
}
