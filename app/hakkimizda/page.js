import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Statistics from '../../components/Statistics';
import AboutContent from '../../components/AboutContent';
import ServiceSecurityPolicy from '../../components/ServiceSecurityPolicy';

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
                <AboutContent />
              </div>
              <ServiceSecurityPolicy />
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