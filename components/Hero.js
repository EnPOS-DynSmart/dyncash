'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Perakende Operasyonunun Kalbinde <br />
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                EnPOS Farkıyla
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              DynCash ile işletmenizin kasa yönetimini modernize edin. 30 yıllık deneyim, 10.000+ aktif kasa, 
              her gün 2 milyondan fazla fiş işlemi. Donanımdan bağımsız, bulut tabanlı çözüm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                Demo İste
              </Link>
              <Link href="#companies" className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition flex items-center justify-center">
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>

          {/* Right Content - Video/GIF Placeholder */}
          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <svg
                  className="w-20 h-20 mx-auto mb-4 opacity-80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                <p className="text-xl font-semibold">DynCash Demo</p>
                <p className="text-sm mt-2 opacity-80">Video veya GIF buraya gelecek</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">30+</div>
            <p className="text-gray-600">Yıl Deneyim</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10.000+</div>
            <p className="text-gray-600">Aktif Kasa</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2M+</div>
            <p className="text-gray-600">Günlük Fiş</p>
          </div>
        </div>
      </div>
    </section>
  )
}
