import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shreshth Verma',
  "og:title": 'Shreshth Verma',
  description: 'I\'m Shreshth Verma: A Full Stack Developer, a perpetual student, an entrepreneur, and an amateur poet',
  "og:description": 'I\'m Shreshth Verma: A Full Stack Developer, a perpetual student, an entrepreneur, and an amateur poet',
  "og:url":"https://www.shreshthverma.me",
  "keywords":"Shreshth, Verma, Shreshth Verma, shreshthverma.me, Personal Site, personal, site",
  "og:image":"/favicon.ico"
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       {/* <link rel="icon" href="/favicon.ico" /> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
