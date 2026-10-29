import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import {
  CowBadgeIcon,
  ChickenBadgeIcon,
  PigeonBadgeIcon,
  GoatBadgeIcon,
  WheatBadgeIcon,
} from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const CATEGORIES_DATA = [
  {
    id: 'livestock',
    title: 'Livestock Feed',
    subtitle: 'Stronger • Healthier Livestock',
    image: '/images/cat_livestock.jpg',
    BadgeIcon: CowBadgeIcon,
    tag: 'Cattle & Dairy',
    description: 'Scientifically balanced nutrition formulated with high crude protein, rumen-protected vitamins, and chelated minerals to maximize herd vitality, lactation yields, and healthy weight gain.',
    protein: '16% - 20% Crude Protein',
    fiber: 'Max 12% Crude Fiber',
    packaging: '50 lb Woven Poly Bags & 1-Ton Bulk Totes',
    keyBenefits: ['Supports optimal rumen fermentation', 'Enhanced calcium & phosphorus ratio', 'All-natural non-medicated grains']
  },
  {
    id: 'poultry',
    title: 'Poultry Feed',
    subtitle: 'Better Growth & Higher Egg Yield',
    image: '/images/cat_poultry.jpg',
    BadgeIcon: ChickenBadgeIcon,
    tag: 'Layers & Broilers',
    description: 'Nutrient-dense layer crumbles and starter mash enriched with natural marigold extract for rich golden yolks, fortified with calcium for sturdy eggshells and rapid feather development.',
    protein: '18% Layer / 22% Chick Starter',
    fiber: 'Max 4.5% Crude Fiber',
    packaging: '50 lb Moisture-Resistant Bags',
    keyBenefits: ['Fortified with prebiotic digestive enzymes', 'High bio-available calcium for strong shells', 'Essential amino acids lysine & methionine']
  },
  {
    id: 'pigeon',
    title: 'Pigeon Feed',
    subtitle: 'Premium Nutrition for Champions',
    image: '/images/cat_pigeon.jpg',
    BadgeIcon: PigeonBadgeIcon,
    tag: 'Racing & Breeding',
    description: 'A champion mix of high-protein maple peas, Austrian winter peas, clean safflower, red milo, and whole yellow corn designed for peak aerodynamic endurance and swift recovery.',
    protein: '15.5% Balanced Protein',
    fiber: 'Max 5.0% Crude Fiber',
    packaging: '50 lb Double-Stitched Grain Sacks',
    keyBenefits: ['Triple-cleaned, dust-free seed grains', 'Optimal carbohydrate-to-fat balance for flight stamina', 'Omega-rich seeds for lustrous plumage']
  },
  {
    id: 'goat',
    title: 'Goat Feed',
    subtitle: 'Healthy Goats, Greater Productivity',
    image: '/images/cat_goat.jpg',
    BadgeIcon: GoatBadgeIcon,
    tag: 'Dairy & Meat Goats',
    description: 'Texturized sweet mix with cracked corn, rolled barley, and cane molasses supplemented with ammonium chloride to support urinary tract wellness in wethers and bucks.',
    protein: '16% Textured Pellets',
    fiber: 'Max 14% Crude Fiber',
    packaging: '50 lb Bags',
    keyBenefits: ['Ammonium chloride for urinary calculie prevention', 'High copper tailored for goats (no sheep toxicity risk)', 'Enhanced palatability with natural molasses']
  },
  {
    id: 'other',
    title: 'Other Feeds',
    subtitle: 'Quality Feeds for All Needs',
    image: '/images/cat_other_feeds.jpg',
    BadgeIcon: WheatBadgeIcon,
    tag: 'Grains & Custom Blends',
    description: 'Wholesale whole grains, rolled oats, alfalfa pellets, scratch grains, rabbit feed, swine grower pellets, and custom seasonal feed blends milled fresh weekly.',
    protein: 'Custom Formulations Available',
    fiber: 'Variable per grain specification',
    packaging: 'Custom Bagging & Bulk Hopper Delivery',
    keyBenefits: ['Freshest local California harvests', 'No chemical fillers or mold inhibitors', 'Custom mineral pack blending upon request']
  }
];

const DELAYS = ['reveal--delay-1','reveal--delay-2','reveal--delay-3','reveal--delay-4','reveal--delay-5'];

export default function Products({ onSelectCategory }) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  // Individual card refs
  const card0 = useScrollReveal({ rootMargin: '0px 0px -20px 0px' });
  const card1 = useScrollReveal({ rootMargin: '0px 0px -20px 0px' });
  const card2 = useScrollReveal({ rootMargin: '0px 0px -20px 0px' });
  const card3 = useScrollReveal({ rootMargin: '0px 0px -20px 0px' });
  const card4 = useScrollReveal({ rootMargin: '0px 0px -20px 0px' });
  const cardRefs = [card0, card1, card2, card3, card4];

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Centered Heading Composition */}
        <div
          ref={headerRef}
          className={`products__header reveal reveal--fade-up ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="products__eyebrow-wrap">
            <span className="products__eyebrow-line" />
            <span className="products__eyebrow-icon">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="4" fill="#D6B46B" />
                <path d="M8 2 C8 5 11 8 14 8 C11 8 8 11 8 14 C8 11 5 8 2 8 C5 8 8 5 8 2 Z" fill="#243D2B" opacity="0.6" />
              </svg>
            </span>
            <span className="products__eyebrow-text">OUR PRODUCTS</span>
            <span className="products__eyebrow-line" />
          </div>

          <h2 className="products__title">Feed for Every Need</h2>
          <p className="products__subtitle">
            High-quality feed for livestock, poultry and pigeons.
          </p>
        </div>

        {/* 5 Horizontal Image-Led Cards Grid */}
        <div className="products__grid">
          {CATEGORIES_DATA.map((cat, index) => {
            const { BadgeIcon } = cat;
            const { ref, isVisible } = cardRefs[index];
            return (
              <article
                key={cat.id}
                ref={ref}
                className={`category-card reveal reveal--scale ${DELAYS[index]} ${isVisible ? 'is-visible' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCategory(cat.id);
                  }
                }}
                aria-label={`View details for ${cat.title}`}
              >
                {/* Image Container */}
                <div className="category-card__media">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="category-card__img"
                    loading="lazy"
                  />
                  <div className="category-card__badge" aria-hidden="true">
                    <BadgeIcon />
                  </div>
                </div>

                {/* Card Body */}
                <div className="category-card__body">
                  <h3 className="category-card__title">{cat.title}</h3>
                  <p className="category-card__subtitle">{cat.subtitle}</p>

                  <div className="category-card__footer">
                    <button
                      className="category-card__arrow-btn"
                      aria-label={`Explore ${cat.title}`}
                      tabIndex={-1}
                    >
                      <ArrowRight size={14} strokeWidth={2.4} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
