import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Statistics from '../../components/Statistics';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-1 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight text-center">
                  Hakkımızda
                </h1>
                <div className="prose lg:prose-xl max-w-none text-gray-600 leading-relaxed">
                  <p>
                    Perakende sektörünün teknoloji ve otomasyon sistemlerinde 30 yıllık deneyimi, %100 Türk sermayesi ile yazılım, donanım ve servis alanlarında anahtar teslimi çözümler sunan EnPOS Bilişim, tüm sektörlere teknoloji çözümleri, satış otomasyon yazılımları geliştiren ve perakende sektörü için yeni nesil ödeme sistemleri ve yazar kasa üreten bir teknoloji şirketidir.
                  </p>
                  <p>
                    Güçlü AR-GE ekibi, kalite belgeleri ve nitelikli insan kaynağı ile EnPOS, perakende sektörünün ihtiyaç duyduğu teknoloji çözümlerini tek bir çatı altında sunmaktadır.
                  </p>
                  <h2 className="text-2xl font-bold mt-8 mb-4">Kalite Politikamız</h2>
                  <p>
                    EnPOS Bilişim, ISO 9001, ISO 22301, ISO 10002, ISO 27001 ve ISO 20000-1:2018 gibi uluslararası standartlara uygun olarak kalite, iş sürekliliği, bilgi güvenliği ve hizmet güvenliği politikalarını benimsemiştir. Amacımız, TSM ve B2B platformlarımız aracılığıyla Gelir İdaresi Başkanlığı'na (GİB) kesintisiz ve yüksek kalitede elektronik veri transferi hizmeti sunmaktır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Statistics />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;