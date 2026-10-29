import React from 'react';
import { ArrowRight, MapPin, Phone, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutSection({ onLearnMore }) {
  const googleMapsUrl = "https://yandex.com/maps/org/markaz_feed_mills/236439822999/";

  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ rootMargin: '0px 0px -60px 0px' });
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal({ rootMargin: '0px 0px -60px 0px' });

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about__grid">
          {/* Left: Agricultural Still-life Photography */}
          <div className="about__media-col">
            <div
              ref={imgRef}
              className={`about__media-frame reveal reveal--fade-left ${imgVisible ? 'is-visible' : ''}`}
            >
              <img
                src="/images/about_feed_sacks.jpg"
                alt="Markaz Feed Mills - feed sacks and production equipment at Rawat Rawalpindi"
                className="about__img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Center: Editorial Story */}
          <div
            ref={contentRef}
            className={`about__content-col reveal reveal--fade-up ${contentVisible ? 'is-visible' : ''}`}
          >
            <span className="about__eyebrow">ABOUT MARKAZ FEED MILLS</span>
            <h2 className="about__heading">
              Quality Feed. <br />
              Healthy Tomorrow.
            </h2>
            <p className="about__description">
              Located at Sagri Mor / Mankiala Rd, Rawat, Rawalpindi, Markaz Feed Mills (Markaz Feeds) is your trusted Poultry & Cattle Wanda Feed Mill.
              We offer a Feed Mill Website & Dealer Portal plus Desktop Poultry Feed Production, Bag Inventory & Recovery ERP.
            </p>
            <div className="about__action">
              <button
                onClick={onLearnMore}
                className="btn-outline about__btn"
                aria-label="Learn more about Markaz Feed Mills"
              >
                <span>Learn More</span>
                <ArrowRight size={15} strokeWidth={2.2} />
              </button>
            </div>
          </div>

          {/* Right: Softly Tinted Information Panel */}
          <div
            ref={infoRef}
            className={`about__info-col reveal reveal--fade-right ${infoVisible ? 'is-visible' : ''}`}
          >
            <div className="about__info-card">
              {/* Address Row */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about__info-item"
                title="Open Markaz Feed Mills on Yandex Maps"
              >
                <div className="about__info-icon-badge">
                  <MapPin size={20} strokeWidth={2} />
                </div>
                <div className="about__info-details">
                  <span className="about__info-line">Sagri Mor / Mankiala Rd,</span>
                  <span className="about__info-line">Rawat, Rawalpindi Tehsil, Punjab</span>
                </div>
              </a>

              {/* Phone Row */}
              <a
                href="tel:+923160000175"
                className="about__info-item"
                title="Call +92 316 0000175"
              >
                <div className="about__info-icon-badge">
                  <Phone size={19} strokeWidth={2} fill="currentColor" />
                </div>
                <div className="about__info-details">
                  <span className="about__info-line about__info-phone">+92 316 0000175</span>
                  <span className="about__info-line" style={{fontSize:'0.75rem', opacity:0.75}}>Also: 0316-0000575 | 0333-6989290</span>
                </div>
              </a>

              {/* Rating Row */}
              <div className="about__info-item about__info-rating-row">
                <div className="about__info-icon-badge">
                  <Star size={19} strokeWidth={1} fill="currentColor" />
                </div>
                <div className="about__info-details">
                  <div className="about__rating-pill">
                    <span className="about__rating-num">4.3</span>
                    <Star size={13} fill="#D6B46B" strokeWidth={0} />
                    <span className="about__rating-count">(95 Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
