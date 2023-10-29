
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "../components/partners/navbar/Navbar"
import Footer from '@/container/partners/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Framer',
  description: 'Cloned By Suraj Roy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
