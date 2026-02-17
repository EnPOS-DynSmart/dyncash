'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CompanyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const companies = [
    { name: 'Paşabahçe', logo: '/img/pasabahce.png' },
    { name: 'Özkuruşlar', logo: '/img/ozkuruslar.png' },
    { name: 'Mr. DIY', logo: '/img/mr-diy.png' },
    { name: 'İtimat', logo: '/img/itimat.png' },
    { name: 'Grosper', logo: '/img/grosper.png' },
    { name: 'Fenercell', logo: '/img/fenercell.png' },
    { name: 'Aytemiz', logo: '/img/aytemiz.png' },
    { name: 'Seyhanlar', logo: '/img/seyhanlar.png' },
  ]

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [autoplay, companies.length])

  const getVisibleCompanies = () => {
    const visible = 3
    const result = []
    for (let i = 0; i < visible; i++) {
      result.push(companies[(currentIndex + i) % companies.length])
    }
    return result
  }

  return (
    <section
      id="companies"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Referanslarımız
          </h2>
          <p className="text-gray-600 text-lg">
            Türkiye'nin her yerinden binlerce işletme DynCash'e güveniyor
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Visible Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {getVisibleCompanies().map((company, index) => (
              <div
                key={index}
                className="bg-secondary rounded-lg p-8 text-center hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="relative h-32 mb-4">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logosu`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {company.name}
                </h3>
                <p className="text-gray-600 mt-2">Aktif Kullanıcı</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                setAutoplay(false)
                setCurrentIndex((prev) => (prev - 1 + companies.length) % companies.length)
              }}
              className="p-2 bg-primary text-white rounded-full hover:bg-primary shadow-lg transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => {
                setAutoplay(false)
                setCurrentIndex((prev) => (prev + 1) % companies.length)
              }}
              className="p-2 bg-primary text-white rounded-full hover:bg-primary shadow-lg transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
