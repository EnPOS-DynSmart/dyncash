'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Özellikler', href: '#' },
      { label: 'Fiyatlandırma', href: '#' },
      { label: 'Güvenlik', href: '#' },
    ],
    company: [
      { label: 'Hakkımızda', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Kariyer', href: '#' },
    ],
    support: [
      { label: 'Yardım Merkezi', href: '#' },
      { label: 'Canlı Sohbet', href: '#' },
      { label: 'İletişim', href: '#' },
    ],
    legal: [
      { label: 'Gizlilik', href: '#' },
      { label: 'Şartlar', href: '#' },
      { label: 'Çerezler', href: '#' },
    ],
  }

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">DynCash</h3>
            <p className="text-gray-300 text-sm mb-4">
              Kasa yönetiminin geleceği burada. Modern, güvenli, hızlı.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.21h-2.42V9.25h2.42V7.54c0-2.39 1.46-3.7 3.6-3.7 1.02 0 1.9.08 2.15.11v2.49h-1.48c-1.16 0-1.39.55-1.39 1.35v1.76h2.77l-.36 2.54h-2.41V20" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Ürün</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Şirket</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Destek</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Yasal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 py-8">
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-2">📞 Telefon</h4>
              <a href="tel:+905551234567" className="text-gray-300 hover:text-white transition text-sm">
                +90 555 123 45 67
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📧 Email</h4>
              <a href="mailto:info@enpos.com.tr" className="text-gray-300 hover:text-white transition text-sm">
                info@enpos.com.tr
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📍 Adres</h4>
              <p className="text-gray-300 text-sm">
                İstanbul, Türkiye
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white border-opacity-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; {currentYear} DynCash. Tüm hakları saklıdır.</p>
          <p>Made with ❤️ for businesses</p>
        </div>
      </div>
    </footer>
  )
}
