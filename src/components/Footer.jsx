import React from 'react';
import { MapPin, Phone, Clock, ChevronUp } from 'lucide-react';
import { BrandLogoSilhouette, BotanicalBranch } from './Icons';

export default function Footer({ onScrollTo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const googleMapsUrl = "https://yandex.com/maps/org/markaz_feed_mills/236439822999/";

  return (
    <footer id="footer" className="footer">
      <div className="container footer__container">
        {/* Main Footer Row */}
        <div className="footer__main">
          {/* Column 1: Brand & Logo */}
          <div className="footer__brand-col">
            <div className="footer__brand-head">
              <div className="footer__logo-wrap">
                <BrandLogoSilhouette className="footer__logo-svg" color="#F7F4EB" />
              </div>
              <div className="footer__brand-text">
                <span className="footer__brand-name">Markaz Feed Mills</span>
                <span className="footer__brand-tagline">Poultry & Cattle Wanda Feed Mill</span>
              </div>
            </div>
          </div>

          {/* Column 2: Contact & Operating Hours */}
          <div className="footer__info-col">
            <ul className="footer__info-list">
              <li>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__info-link"
                >
                  <MapPin size={16} className="footer__info-icon" />
                  <span>Sagri Mor / Mankiala Rd, Rawat, Rawalpindi, Punjab</span>
                </a>
              </li>
              <li>
                <a href="tel:+923160000175" className="footer__info-link">
                  <Phone size={16} className="footer__info-icon" />
                  <span>+92 316 0000175</span>
                </a>
              </li>
              <li className="footer__info-hours">
                <Clock size={16} className="footer__info-icon" />
                <span>Mon – Sat: 7:30 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="footer__nav-col">
            <nav className="footer__nav" aria-label="Footer Navigation">
              <a href="#hero" onClick={(e) => { e.preventDefault(); onScrollTo('hero'); }}>
                Home
              </a>
              <a href="#products" onClick={(e) => { e.preventDefault(); onScrollTo('products'); }}>
                Products
              </a>
              <a href="#services" onClick={(e) => { e.preventDefault(); onScrollTo('services'); }}>
                Services
              </a>
              <a href="#about" onClick={(e) => { e.preventDefault(); onScrollTo('about'); }}>
                About Us
              </a>
              <a href="#footer" onClick={(e) => { e.preventDefault(); onScrollTo('footer'); }}>
                Contact
              </a>
            </nav>
          </div>

          {/* Column 4: Social Links */}
          <div className="footer__social-col">
            <div className="footer__social-links">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="Santos Feed Store on Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="Santos Feed Store on Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/923160000175"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="Chat with Markaz Feed Mills on WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Thin Divider Line */}
        <div className="footer__divider" />

        {/* Bottom Bar */}
        <div className="footer__bottom">
          {/* Subtle Botanical Leaf Motif on Bottom Left */}
          <div className="footer__botanical" aria-hidden="true">
            <BotanicalBranch className="footer__botanical-svg" color="#243D2B" />
          </div>

          <p className="footer__copyright">
            © 2026 Markaz Feed Mills. All Rights Reserved.
          </p>

          {/* Circular Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="footer__back-to-top"
            aria-label="Back to top of page"
            title="Scroll to top"
          >
            <ChevronUp size={18} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </footer>
  );
}
