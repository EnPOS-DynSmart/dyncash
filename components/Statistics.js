'use client'

import { useState, useEffect } from 'react'

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ years: 0, stores: 0, receipts: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('statistics')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  // Animation effect
  useEffect(() => {
    if (!isVisible) return

    const targets = { years: 30, stores: 10000, receipts: 2000000 }
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      setCounts({
        years: Math.floor(30 * progress),
        stores: Math.floor(10000 * progress),
        receipts: Math.floor(2000000 * progress),
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [isVisible])

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M+'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K+'
    }
    return num.toString()
  }

  return (
    <section
      id="statistics"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-blue-600"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            DynCash'in Gücü
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            30 yıllık deneyim ile binlerce işletmenin güvenini kazandık. Günde 2 milyondan fazla fiş işlemi 
            ile ülkenin bir numaralı satış yazılımı tercihi.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Years */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center text-white hover:bg-opacity-20 transition">
            <div className="text-6xl font-bold mb-2">
              {counts.years}+
            </div>
            <h3 className="text-2xl font-semibold mb-2">Yıl Deneyim</h3>
            <p className="text-gray-100">
              İşletmelerin en güvendiği kasa sistemini 30 yıldır sunuyoruz
            </p>
          </div>

          {/* Active Stores */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center text-white hover:bg-opacity-20 transition">
            <div className="text-6xl font-bold mb-2">
              {formatNumber(counts.stores)}
            </div>
            <h3 className="text-2xl font-semibold mb-2">Aktif Kasa</h3>
            <p className="text-gray-100">
              Türkiye'nin her köşesinde DynCash kasaları işletmeleri güvenle yönetiyor
            </p>
          </div>

          {/* Daily Receipts */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center text-white hover:bg-opacity-20 transition">
            <div className="text-6xl font-bold mb-2">
              {formatNumber(counts.receipts)}
            </div>
            <h3 className="text-2xl font-semibold mb-2">Günlük Fiş</h3>
            <p className="text-gray-100">
              Her gün 2 milyondan fazla fiş işleminin güvenli şekilde yönetimiyle gururluyuz
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-white text-center">
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="font-semibold">100% Güvenlik</p>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="font-semibold">Mevzuatlara Uyumluluk</p>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="font-semibold">Yüksek Verimlilik</p>
          </div>
        </div>
      </div>
    </section>
  )
}
