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
              DynCash ile işletmenizin kasa yönetimini modernize edin. 30 yıllık deneyim, 15.000+ aktif kasa, 
              her gün 4.5 milyondan fazla fiş işlemi. Donanımdan bağımsız, bulut tabanlı çözüm.
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
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
              <iframe
                className="absolute top-1/2 left-1/2 w-[103.5%] h-[103%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                src="https://www.youtube.com/embed/_UbIEStIgqU?autoplay=1&mute=1&loop=1&playlist=_UbIEStIgqU&controls=0&showinfo=0&modestbranding=1&playsinline=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
            <div className="text-4xl font-bold text-primary mb-2">15.000+</div>
            <p className="text-gray-600">Aktif Kasa</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.5M+</div>
            <p className="text-gray-600">Günlük Fiş</p>
          </div>
        </div>
      </div>
    </section>
  )
}
