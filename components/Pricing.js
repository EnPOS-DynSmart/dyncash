'use client'

export default function Pricing() {
  const plans = [
    {
      name: 'DynCash',
      price: '999',
      period: '/ay',
      description: 'Temel kasa yönetimi',
      features: [
        'Sınırsız fiş işlemi',
        'EFTPOS entegrasyonu',
        'Temel raporlar',
        'E-fiş desteği',
        'Telefon desteği',
        'Günlük yedekleme',
      ],
      notIncluded: [
        'Bulut yönetim paneli',
        'Stok takibi',
        'Müşteri yönetimi',
      ],
      highlighted: false,
    },
    {
      name: 'DynCash + DynSmart Mini',
      price: '1.499',
      period: '/ay',
      description: 'Orta ölçekli işletmeler için',
      features: [
        'Sınırsız fiş işlemi',
        'EFTPOS entegrasyonu',
        'Kapsamlı raporlar',
        'E-fiş desteği',
        'Bulut yönetim paneli',
        'Temel stok takibi',
        'Müşteri yönetimi',
        'Email & Telefon desteği',
        '1 şube'
      ],
      notIncluded: [
        'Gelişmiş finansal analiz',
        'CRM sistemi',
      ],
      highlighted: true,
    },
    {
      name: 'DynCash + DynSmart Normal',
      price: 'Özel',
      period: '/ay',
      description: 'Büyük işletmeler için',
      features: [
        'Sınırsız fiş işlemi',
        'EFTPOS entegrasyonu',
        'Kapsamlı raporlar',
        'E-fiş desteği',
        'Bulut yönetim paneli',
        'Gelişmiş stok takibi',
        'Müşteri yönetimi (CRM)',
        'Finansal analiz araçları',
        'Unlimited şubeler',
        'Öncelikli 24/7 destek',
        'Özel entegrasyonlar',
      ],
      notIncluded: [],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Basit ve Şeffaf Fiyatlandırma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İşletmenizin ihtiyacına uygun paketi seçin. Her paket 30 günlük ücretsiz deneme ile gelir.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105 ${
                plan.highlighted
                  ? 'bg-primary text-white ring-2 ring-blue-400 scale-105'
                  : 'bg-white text-gray-900'
              }`}
            >
              {/* Ribbon for popular */}
              {plan.highlighted && (
                <div className="bg-blue-400 text-white text-center py-2 text-sm font-bold">
                  ⭐ EN POPULER
                </div>
              )}

              {/* Content */}
              <div className="p-8 flex flex-col h-full">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? 'text-gray-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                      {plan.price}
                    </span>
                    <span className={`ml-2 ${plan.highlighted ? 'text-gray-100' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold mb-8 transition ${
                    plan.highlighted
                      ? 'bg-white text-primary hover:bg-gray-100'
                      : 'bg-primary text-white hover:bg-primary shadow-lg'
                  }`}
                >
                  Hemen Başla
                </button>

                {/* Features */}
                <div className="space-y-4 mb-8 flex-grow">
                  <h4 className={`font-semibold mb-4 ${plan.highlighted ? 'text-gray-100' : 'text-gray-800'}`}>
                    Dahil Olanlar:
                  </h4>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-white' : 'text-green-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}

                  {/* Not Included */}
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className={`font-semibold mt-6 mb-4 ${plan.highlighted ? 'text-gray-100' : 'text-gray-800'}`}>
                        Dahil Olmayan:
                      </h4>
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <svg
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-gray-300' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm opacity-70">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  )
}
