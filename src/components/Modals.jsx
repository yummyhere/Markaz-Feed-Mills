import React, { useEffect } from 'react';
import { X, CheckCircle2, Phone, MapPin, Play, Clock, Sparkles } from 'lucide-react';
import { CATEGORIES_DATA } from './Products';

// Product Details Modal
export function ProductDetailModal({ categoryId, onClose, onCallNow }) {
  const category = CATEGORIES_DATA.find((c) => c.id === categoryId) || CATEGORIES_DATA[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!categoryId) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        <div className="modal-header-image-wrap">
          <img src={category.image} alt={category.title} className="modal-header-img" />
          <div className="modal-header-badge">
            <category.BadgeIcon />
          </div>
        </div>

        <div className="modal-body">
          <span className="modal-tag">{category.tag}</span>
          <h2 className="modal-title font-serif">{category.title}</h2>
          <p className="modal-subtitle">{category.subtitle}</p>

          <p className="modal-desc">{category.description}</p>

          <div className="modal-specs-grid">
            <div className="modal-spec-item">
              <span className="modal-spec-label">Guaranteed Protein</span>
              <span className="modal-spec-value">{category.protein}</span>
            </div>
            <div className="modal-spec-item">
              <span className="modal-spec-label">Dietary Fiber</span>
              <span className="modal-spec-value">{category.fiber}</span>
            </div>
            <div className="modal-spec-item modal-spec-item--full">
              <span className="modal-spec-label">Standard Packaging</span>
              <span className="modal-spec-value">{category.packaging}</span>
            </div>
          </div>

          <div className="modal-benefits-box">
            <h4 className="modal-benefits-title">Key Nutritional Advantages</h4>
            <ul className="modal-benefits-list">
              {category.keyBenefits.map((benefit, i) => (
                <li key={i}>
                  <CheckCircle2 size={16} color="#243D2B" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-actions">
            <a href="tel:+923160000175" className="btn-primary modal-action-btn">
              <Phone size={16} fill="#F7F4EB" />
              <span>Call to Order (+92 316 0000175)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Store Tour Modal
export function StoreTourModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card modal-card--tour animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        <div className="modal-tour-body">
          <div className="modal-tour-video-sim">
            <img
              src="/images/about_feed_sacks.jpg"
              alt="Inside Markaz Feed Mills"
              className="modal-tour-preview-img"
            />
            <div className="modal-tour-video-overlay">
              <div className="modal-tour-play-badge">
                <Play size={28} fill="#FFFFFF" strokeWidth={0} />
              </div>
              <span className="modal-tour-badge-text">Interactive Virtual Walkthrough</span>
            </div>
          </div>

          <div className="modal-tour-details">
            <span className="modal-tag">Store Experience</span>
            <h2 className="modal-title font-serif">Welcome to Markaz Feed Mills</h2>
            <p className="modal-desc">
              Take a virtual tour of our Markaz Feed Mills facility in Rawat, Rawalpindi! From poultry feed production lines, cattle wanda blending, and bag inventory management to our dealer portal and recovery ERP — our team is proud to serve farmers across Rawalpindi & Punjab.
            </p>

            <div className="modal-tour-features">
              <div className="modal-tour-feat">
                <MapPin size={18} color="#243D2B" />
                <div>
                  <strong>Convenient Drive-Through Loading</strong>
                  <p>Pull right up to our loading dock — our staff loads every sack into your truck or trailer.</p>
                </div>
              </div>

              <div className="modal-tour-feat">
                <Clock size={18} color="#243D2B" />
                <div>
                  <strong>Open 6 Days a Week</strong>
                  <p>Monday – Saturday: 7:30 AM – 6:00 PM (Closed Sundays)</p>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <a
                href="https://yandex.com/maps/org/markaz_feed_mills/236439822999/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary modal-action-btn"
              >
                <MapPin size={16} />
                <span>Get Directions (Sagri Mor / Mankiala Rd, Rawat)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Learn More & Services Modal
export function InfoModal({ title, subtitle, content, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        <div className="modal-body" style={{ paddingTop: '32px' }}>
          <span className="modal-tag">Markaz Feed Mills</span>
          <h2 className="modal-title font-serif">{title}</h2>
          <p className="modal-subtitle">{subtitle}</p>

          <div className="modal-desc" style={{ marginTop: '16px', lineHeight: '1.7' }}>
            {content}
          </div>

          <div className="modal-actions" style={{ marginTop: '28px' }}>
            <a href="tel:+923160000175" className="btn-primary modal-action-btn">
              <Phone size={16} fill="#F7F4EB" />
              <span>Contact Us (+92 316 0000175)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
