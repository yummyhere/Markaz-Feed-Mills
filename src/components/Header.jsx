import React, { useState, useEffect } from 'react';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { BrandLogoSilhouette } from './Icons';

export default function Header({ onSelectCategory, onScrollTo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    onScrollTo(sectionId);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__container">
        {/* Brand Logo & Tagline */}
        <a href="#home" className="header__brand" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          <div className="header__logo-icon">
            <BrandLogoSilhouette className="brand-logo-svg" color="#243D2B" />
          </div>
          <div className="header__brand-text">
            <span className="header__brand-name">Markaz Feed Mills</span>
            <span className="header__brand-tagline">Poultry & Cattle Wanda Feed Mill</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main Navigation">
          <ul className="header__menu">
            <li className="header__menu-item">
              <a
                href="#hero"
                className="header__link header__link--active"
                onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
              >
                Home
              </a>
            </li>

            {/* Products Dropdown */}
            <li 
              className="header__menu-item header__dropdown-parent"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                className="header__link header__dropdown-toggle"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                aria-expanded={productsDropdownOpen}
              >
                Products
                <ChevronDown className="header__chevron" size={14} />
              </button>

              {productsDropdownOpen && (
                <div className="header__dropdown-menu">
                  <button onClick={() => { onSelectCategory('livestock'); handleNavClick('products'); }}>
                    🐮 Livestock Feed
                  </button>
                  <button onClick={() => { onSelectCategory('poultry'); handleNavClick('products'); }}>
                    🐔 Poultry Feed
                  </button>
                  <button onClick={() => { onSelectCategory('pigeon'); handleNavClick('products'); }}>
                    🕊️ Pigeon Feed
                  </button>
                  <button onClick={() => { onSelectCategory('goat'); handleNavClick('products'); }}>
                    🐐 Goat Feed
                  </button>
                  <button onClick={() => { onSelectCategory('other'); handleNavClick('products'); }}>
                    🌾 Other Feeds & Grains
                  </button>
                </div>
              )}
            </li>

            {/* Services Dropdown */}
            <li 
              className="header__menu-item header__dropdown-parent"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="header__link header__dropdown-toggle"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
              >
                Services
                <ChevronDown className="header__chevron" size={14} />
              </button>

              {servicesDropdownOpen && (
                <div className="header__dropdown-menu">
                  <button onClick={() => handleNavClick('services')}>
                    ⚡ Fast & Reliable Delivery
                  </button>
                  <button onClick={() => handleNavClick('services')}>
                    🛡️ Expert Agricultural Guidance
                  </button>
                  <button onClick={() => handleNavClick('services')}>
                    🌿 Quality Nutritional Assurance
                  </button>
                </div>
              )}
            </li>

            <li className="header__menu-item">
              <a
                href="#about"
                className="header__link"
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
              >
                About Us
              </a>
            </li>

            <li className="header__menu-item">
              <a
                href="#footer"
                className="header__link"
                onClick={(e) => { e.preventDefault(); handleNavClick('footer'); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Action: Call Now */}
        <div className="header__actions">
          <a
            href="tel:+923160000175"
            className="btn-call-now"
            title="Call Markaz Feed Mills: +92 316 0000175"
          >
            <Phone size={15} strokeWidth={2.4} fill="#F7F4EB" />
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="header__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="header__mobile-drawer">
          <ul className="header__mobile-menu">
            <li>
              <button onClick={() => handleNavClick('hero')} className="header__mobile-link">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('products')} className="header__mobile-link">
                Products
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} className="header__mobile-link">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('about')} className="header__mobile-link">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('footer')} className="header__mobile-link">
                Contact
              </button>
            </li>
          </ul>
          <div className="header__mobile-cta">
            <a href="tel:+923160000175" className="btn-call-now btn-call-now--full">
              <Phone size={16} fill="#F7F4EB" />
              <span>Call Now (+92 316 0000175)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
