'use client'

import Image from 'next/image'

export default function YN500() {
  return (
    <section id="yn500" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Kasanızda Endüstriyel Güç için Enpos YN500 
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                YN500, modern işletmeler için tasarlanmış endüstriyel bir yeni nesil ödeme kaydedici cihazdır. DynCash ve DynSmart ile tam entegre çalışır.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Tam DynCash Entegrasyonu</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Hızlı ve Güvenli Ödemeler</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Kolay Kullanım ve Kurulum</span>
              </div>
               <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">E-Fatura, E-Arşiv Fatura, Fatura Gider Pusulası</span>
              </div>
               <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">200 Milyon Satır Ekü</span>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="animate-slide-in-left md:order-last">
            <div className="bg-gradient-to-bl from-primary to-blue-600 rounded-xl overflow-hidden shadow-2xl aspect-square flex items-center justify-center p-8">
              <Image
                src="/img/YN500.png"
                alt="YN500 Enpos Cihazı"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
