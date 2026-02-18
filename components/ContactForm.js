'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    authorizedPersonName: '', // New field
    authorizedPersonPhone: '', // New field
    dailyReceipts: 500,
    branches: '1',
    accountingSoftware: '',
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const accountingSoftwareOptions = [
    { value: '', label: 'Seçiniz...' },
    { value: 'muhasebe-1', label: 'DynMaster' },
    { value: 'muhasebe-2', label: 'Mikro' },
    { value: 'muhasebe-3', label: 'Logo' },
    { value: 'muhasebe-4', label: 'Diğer' },
    { value: 'muhasebe-5', label: 'Kullanmıyor' },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSliderChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      dailyReceipts: parseInt(e.target.value),
    }))
  }

  const formatReceipts = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const specificError = errorData.error || 'No specific error details.';
        throw new Error(`${errorData.message} Details: ${specificError}`);
      }

      // İsteğe bağlı: API'den gelen başarı mesajını loglayabilirsiniz
      const successData = await response.json();
      console.log(successData.message);

      // E-posta içeriğini konsola yazdırmaya gerek yok, arka uç hallediyor
      // console.log('Form submitted:', formData)
      setSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          companyName: '',
          authorizedPersonName: '',
          authorizedPersonPhone: '',
          dailyReceipts: 500, // Başlangıç değerine sıfırlayın
          branches: '1',
          accountingSoftware: '',
        })
      }, 3000)
    } catch (err) {
      setError(err.message);
      console.error('Form submission error:', err);
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">Başarıyla Gönderildi!</h3>
            <p className="text-green-700 mb-4">
              Sizinle en kısa sürede iletişime geçeceğiz. E-mail adresinize özet bilgi gönderilmiştir.
            </p>
            <p className="text-sm text-green-600">
              İletişim: info@enpos.com.tr | +90 216 348 27 10
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ücretsiz Demo İste
          </h2>
          <p className="text-xl text-gray-600">
            Aşağıdaki formu doldurarak DynCash'i işletmenize göre özelleştirelim.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          {/* Firma İsmi */}
          <div className="mb-8 animate-fade-in-up">
            <label htmlFor="companyName" className="block text-lg font-semibold text-primary mb-3">
              Firma İsmi <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Örn: ABC Süpermarket"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
            />
          </div>

          {/* Yetkili İsmi */}
          <div className="mb-8 animate-fade-in-up">
            <label htmlFor="authorizedPersonName" className="block text-lg font-semibold text-primary mb-3">
              Yetkili İsmi <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="authorizedPersonName"
              name="authorizedPersonName"
              value={formData.authorizedPersonName}
              onChange={handleChange}
              placeholder="Örn: Ayşe Yılmaz"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
            />
          </div>

          {/* Yetkili Telefon Numarası */}
          <div className="mb-8 animate-fade-in-up">
            <label htmlFor="authorizedPersonPhone" className="block text-lg font-semibold text-primary mb-3">
              Yetkili Telefon Numarası <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="authorizedPersonPhone"
              name="authorizedPersonPhone"
              value={formData.authorizedPersonPhone}
              onChange={handleChange}
              placeholder="Örn: +90 5xx xxx xx xx"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
            />
          </div>



          {/* Günlük Fiş Sayısı (Slider) */}
          <div className="mb-8 animate-fade-in-up">
            <label htmlFor="dailyReceipts" className="block text-lg font-semibold text-primary mb-3">
              Günlük Kesilen Ortalama Fiş Sayısı
            </label>
            <div className="space-y-4">
              <input
                type="range"
                id="dailyReceipts"
                name="dailyReceipts"
                min="10" 
                max="1500"
                value={formData.dailyReceipts}
                onChange={handleSliderChange}
                className="w-full h-3 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between items-center bg-secondary rounded-lg p-4">
                <span className="text-gray-600">Seçili Değer:</span>
                <span className="text-2xl font-bold text-primary">
                  {formatReceipts(formData.dailyReceipts)} fiş/gün
                </span>
              </div>
      
            </div>
          </div>

          {/* Şube Sayısı (Radio Buttons) */}
          <div className="mb-8 animate-fade-in-up">
            <label className="block text-lg font-semibold text-primary mb-4">
              Şube Sayısı <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {['1', '2', '3+'].map((option) => (
                <label key={option} className="flex items-center p-4 border-2 border-gray-300 rounded-lg hover:border-primary hover:bg-secondary transition cursor-pointer">
                  <input
                    type="radio"
                    name="branches"
                    value={option}
                    checked={formData.branches === option}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary cursor-pointer"
                  />
                  <span className="ml-3 text-gray-700 font-medium">{option} {option === '3+' ? 've üzeri' : 'şube'}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Muhasebe Yazılımı (Dropdown) */}
          <div className="mb-8 animate-fade-in-up">
            <label htmlFor="accountingSoftware" className="block text-lg font-semibold text-primary mb-3">
              Kullanılan Ön Muhasebe Programı
            </label>
            <select
              id="accountingSoftware"
              name="accountingSoftware"
              value={formData.accountingSoftware}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition bg-white"
            >
              {accountingSoftwareOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary text-white font-bold text-lg rounded-lg hover:bg-primary shadow-lg transition transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Gönderiliyor...' : 'Demo İste'}
          </button>

          <p className="text-center text-gray-500 text-sm mt-6">
            Formunuz info@enpos.com.tr adresine otomatik olarak gönderilecektir.
          </p>
        </form>
      </div>
    </section>
  )
}
