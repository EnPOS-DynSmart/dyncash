'use client'

export default function DynSmartIntegration() {
  const features = [
    {
      title: 'Bulut Tabanlı Yönetim',
      description: 'Tüm kasalarınızı tek platformdan yönetin',
      icon: '☁️',
    },
    {
      title: 'Kapsamlı Raporlar',
      description: 'Gerçek zamanlı satış ve finansal raporlar',
      icon: '📊',
    },
    {
      title: 'Stok Takibi',
      description: 'Otomatik stok yönetimi ve uyarıları',
      icon: '📦',
    },
    {
      title: 'Müşteri Yönetimi',
      description: 'Müşteri verileri ve alışkanlık analizi',
      icon: '👥',
    },
    {
      title: 'Finansal Kontrol',
      description: 'Detaylı gider ve gelir takibi',
      icon: '💼',
    },
    {
      title: '24/7 Destek',
      description: 'Her zaman yanınızda teknik destek ekibi',
      icon: '🆘',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Perakende için ERP DynSmart Entegrasyonu 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DynCash ile DynSmart (ERP) sistemini entegre edin. Bulut tabanlı kasa yönetimi ile tüm 
            işletme verilerinizi merkezde kontrol edin. Raporlama, takip ve analizleri gerçek zamanlı 
            olarak yapın.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-8 hover:shadow-lg transition transform hover:scale-105 hover:bg-white text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integration Flow */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white divide-opacity-20">
            {/* DynCash (ERP) */}
            <div className="p-8 text-white text-center">
              <div className="text-5xl mb-4">🖥️</div>
              <h3 className="text-2xl font-bold mb-2">DynCash</h3>
              <p className="text-gray-100">Kasa Yönetimi</p>
            </div>
            
            {/* Integration Arrow */}
            <div className="hidden md:flex items-center justify-center">
             
                            <div className="text-6xl mb-4">🔄</div>

            </div>

            {/* DynSmart */}
            <div className="p-8 text-white text-center">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold mb-2">DynSmart Bulut ERP</h3>
              <p className="text-gray-100">İşletme Yönetimi</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="space-y-6 animate-fade-in-up flex flex-col items-center">
            <h3 className="text-2xl font-bold text-primary">Neden DynSmart?</h3>
            <ul className="space-y-3">
              {[
                'Tek platform üzerinden tüm işletme yönetimi',
                'Otomatik veri senkronizasyonu',
                'Gerçek zamanlı raporlama ve analiz',
                'Kolay Kullanım, Her Yerden Erişim',
                'İş verimliliğini %40 artırın',
              ].map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center animate-slide-in-right">
            <div className="text-center text-white">
              <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <p className="text-2xl font-bold">DynSmartIntegration Demo</p>
              <p className="text-sm mt-2 opacity-80">Bulut yönetim arayüzü</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
