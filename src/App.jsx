import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import { ProductDetailModal, StoreTourModal, InfoModal } from './components/Modals';
import './App.css';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [infoModal, setInfoModal] = useState({ isOpen: false, title: '', subtitle: '', content: null });

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    setInfoModal({
      isOpen: true,
      title: 'Our Heritage in Feed Milling',
      subtitle: 'Serving Rawat, Rawalpindi & Punjab',
      content: (
        <div>
          <p style={{ marginBottom: '12px' }}>
            At <strong>Markaz Feed Mills</strong> (Markaz Feeds), we are dedicated to producing high-quality Poultry & Cattle Wanda feed. Located at Sagri Mor / Mankiala Rd, Rawat, Rawalpindi, we operate a complete Feed Mill with a Website & Dealer Portal.
          </p>
          <p style={{ marginBottom: '12px' }}>
            Our Desktop ERP system handles Poultry Feed Production, Bag Inventory & Recovery — enabling seamless operations for feed mill management, dealer tracking, and production reporting.
          </p>
          <p>
            Visit us at <strong>Sagri Mor / Mankiala Rd, Rawat</strong> or call <strong>+92 316 0000175</strong> for orders, dealer inquiries, and bulk feed requirements.
          </p>
        </div>
      )
    });
  };

  const handleOpenServices = () => {
    setInfoModal({
      isOpen: true,
      title: 'Markaz Feed Mills — Complete Services',
      subtitle: 'Feed Production, Dealer Portal & ERP Solutions',
      content: (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ color: '#243D2B', marginBottom: '4px' }}>⚡ Poultry Feed Production</h4>
            <p>
              Full-scale poultry feed production facility at Rawat, Rawalpindi. Producing high-quality Poultry & Cattle Wanda feed with consistent nutritional standards for farmers across Punjab.
            </p>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ color: '#243D2B', marginBottom: '4px' }}>🛡️ Dealer Portal & Distribution</h4>
            <p>
              Our online Dealer Portal enables authorized dealers to manage orders, check stock availability, and track deliveries. Call 0316-0000175 or 0333-6989290 to become a registered dealer.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#243D2B', marginBottom: '4px' }}>🌿 Bag Inventory & Recovery ERP</h4>
            <p>
              Desktop-based ERP system for complete Bag Inventory tracking, production recovery reporting, and feed mill operations management — built specifically for feed mills.
            </p>
          </div>
        </div>
      )
    });
  };

  return (
    <div className="markaz-app">
      {/* 1. Header matching reference */}
      <Header
        onSelectCategory={(catId) => setSelectedCategory(catId)}
        onScrollTo={scrollToSection}
      />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero
          onShopNow={() => scrollToSection('products')}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
        />

        {/* 3. Product Categories */}
        <Products
          onSelectCategory={(catId) => setSelectedCategory(catId)}
        />

        {/* 4. Why Choose Us Band */}
        <WhyChooseUs />

        {/* 5. About Section */}
        <AboutSection
          onLearnMore={handleLearnMore}
        />

        {/* 6. Services Section */}
        <ServicesSection
          onOpenServices={handleOpenServices}
        />

        {/* 7. Testimonials Section */}
        <TestimonialsSection />
      </main>

      {/* 8. Footer */}
      <Footer
        onScrollTo={scrollToSection}
      />

      {/* Interactive Modals */}
      <ProductDetailModal
        categoryId={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />

      <StoreTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
      />

      <InfoModal
        isOpen={infoModal.isOpen}
        title={infoModal.title}
        subtitle={infoModal.subtitle}
        content={infoModal.content}
        onClose={() => setInfoModal({ ...infoModal, isOpen: false })}
      />
    </div>
  );
}
