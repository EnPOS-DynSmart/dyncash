import './globals.css'

export const metadata = {
  title: 'DynCash - Modern Satış Otomasyon Yazılımı',
  description: 'DynCash ile işletmenizin kasa yönetimini kolaylaştırın. 30 yıl deneyim, 10000+ aktif kasa.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-white text-primary" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
