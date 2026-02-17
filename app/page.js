'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CompanyCarousel from '@/components/CompanyCarousel'
import Statistics from '@/components/Statistics'
import EftposOkcIntegration from '@/components/EftposOkcIntegration'
import DynSmartIntegration from '@/components/DynSmartIntegration'
import Pricing from '@/components/Pricing'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import YN500 from '@/components/YN500'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CompanyCarousel />
      <Statistics />
      <YN500 />
      <EftposOkcIntegration />
      <DynSmartIntegration />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  )
}
