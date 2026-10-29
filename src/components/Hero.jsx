import React from 'react';
import { CowBadgeIcon, ChickenBadgeIcon, PigeonBadgeIcon } from './Icons';

const HERO_CARDS = [
  {
    id: 'poultry',
    Icon: ChickenBadgeIcon,
    label: 'POULTRY FEED',
    title: 'Do Murgi',
  },
  {
    id: 'livestock',
    Icon: CowBadgeIcon,
    label: 'CATTLE WANDA',
    title: 'Do Bail',
  },
  {
    id: 'pigeon',
    Icon: PigeonBadgeIcon,
    label: 'OTHER FEEDS',
    title: 'Do Kabutar',
  },
];

export default function Hero({ onShopNow, onSelectCategory }) {
  return (
    <section id="hero" className="hero-section">
      {/* Full-width background image */}
      <div className="hero__media-wrap">
        <img
          src="/images/hero_farm_animals.jpg"
          alt="Markaz Feed Mills - Poultry and Cattle Feed Mill, Rawat Rawalpindi"
          className="hero__img"
        />
        {/* Dark overlay for readability */}
        <div className="hero__dark-overlay" />
      </div>

      {/* Centered content */}
      <div className="hero__center-content">
        {/* Decorative lines + title */}
        <div className="hero__title-row animate-fade-in">
          <span className="hero__title-line-dec" />
          <h1 className="hero__main-title">Markaz Feed Mills</h1>
          <span className="hero__title-line-dec" />
        </div>

        <p className="hero__tagline">
          Poultry & Cattle Wanda Feed Mill &mdash; Rawat, Rawalpindi
        </p>
        <p className="hero__sub-tagline">
          Feed Mill Website & Dealer Portal + Bag Inventory & Recovery ERP
        </p>

        {/* 3 Product Category Cards */}
        <div className="hero__cards-row">
          {HERO_CARDS.map((card) => (
            <button
              key={card.id}
              className="hero__product-card"
              onClick={() => onSelectCategory && onSelectCategory(card.id)}
              aria-label={`View ${card.label}`}
            >
              <div className="hero__card-icon-wrap">
                <card.Icon />
              </div>
              <span className="hero__card-title">{card.title}</span>
              <span className="hero__card-label">{card.label}</span>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="hero__cta-btn"
          onClick={onShopNow}
          aria-label="Explore products and services"
        >
          Explore Our Products
        </button>
      </div>
    </section>
  );
}
