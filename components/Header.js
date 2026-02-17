'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (id) => {
    if (pathname === '/') {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      }
    } else {
      router.push('/#' + id)
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed top-0 w-full bg-primary text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-secondary transition">
              <Image
                src="/img/logo.png"
                alt="DynCash Logo"
                width={150} // Adjust width as needed
                height={40} // Adjust height as needed
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-secondary transition"
            >
              Anasayfa
            </button>
            <button
              onClick={() => scrollToSection('companies')}
              className="text-white hover:text-secondary transition"
            >
              Referanslar
            </button>
            <Link
              href="/hakkimizda"
              className="text-white hover:text-secondary transition"
            >
              Hakkımızda
            </Link>
            <button
              onClick={() => scrollToSection('eftpos')}
              className="text-white hover:text-secondary transition"
            >
              Özellikler
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-secondary transition"
            >
              Fiyatlandırma
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-secondary transition"
            >
              İletişim
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-primary-dark transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-primary-dark rounded transition"
            >
              Anasayfa
            </button>
            <button
              onClick={() => scrollToSection('companies')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-primary-dark rounded transition"
            >
              Referanslar
            </button>
            <Link
              href="/hakkimizda"
              className="block w-full text-left px-4 py-2 text-white hover:bg-primary-dark rounded transition"
            >
              Hakkımızda
            </Link>
            <button
              onClick={() => scrollToSection('eftpos')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-primary-dark rounded transition"
            >
              Özellikler
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-primary-dark rounded transition"
            >
              Fiyatlandırma
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-primary-dark rounded transition"
            >
              İletişim
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
