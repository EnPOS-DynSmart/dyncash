'use client'

import Image from 'next/image'

export default function EftposOkcIntegration() {
  const eftposOkcDevices = [
    { name: 'Beko 300TR', image: '/img/Beko-300tr.webp', compatibility: '✓ Uyumlu' },
    { name: 'Beko X30TR', image: '/img/beko-x30tr.webp', compatibility: '✓ Uyumlu' },
    { name: 'Hugin T300', image: '/img/Hugin-t300.webp', compatibility: '✓ Uyumlu' },
    { name: 'Ingenico Move5000F', image: '/img/ingenico-move5000f.webp', compatibility: '✓ Uyumlu' },
    { name: 'Inpos M530', image: '/img/inpos-m530.webp', compatibility: '✓ Uyumlu' },
    { name: 'Pax A910SF', image: '/img/pax-a910sf.png', compatibility: '✓ Uyumlu' },
  ]

  return (
    <section id="eftpos" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            DynCash Artık Donanım Bağımsız
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DynCash, EFT-POS özellikli Yeni Nesil Ödeme Kaydedici Cihazlarla entegre çalışmaktadır.
            Mevcut cihazlarınızla uyumludur. Yeni yatırım yapmaya gerek yoktur.          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left - Image */}
          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl overflow-hidden shadow-2xl aspect-square flex items-center justify-center">
              <div className="text-center text-white">
                <svg
                  className="w-32 h-32 mx-auto mb-4 opacity-80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <p className="text-4xl font-bold">EFT-POS Özellikli YNÖKC Entegrasyonu</p>
                <p className="text-lg mt-2 opacity-80">Tüm cihazlarla uyumlu*</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* EFTPOS Grid */}
            <div className="grid grid-cols-2 gap-4">
              {eftposOkcDevices.map((device, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center text-center"
                >
                  <div className="h-24 w-full relative mb-2">
                    <Image
                      src={device.image}
                      alt={device.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="font-semibold text-primary">{device.name}</h3>
                  <p className="text-sm text-green-600 font-medium">{device.compatibility}</p>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
