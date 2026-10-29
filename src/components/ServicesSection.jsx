import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Leaf } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ServicesSection({ onOpenServices }) {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });
  const { ref: card2Ref, isVisible: card2Visible } = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });
  const { ref: card3Ref, isVisible: card3Visible } = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });

  const servicesList = [
    {
      ref: card1Ref,
      isVisible: card1Visible,
      delay: 'reveal--delay-2',
      icon: <Zap size={22} className="service-col__icon" fill="#243D2B" strokeWidth={1.5} />,
      title: 'Feed Production',
      desc: 'High-quality Poultry & Cattle Wanda feed.'
    },
    {
      ref: card2Ref,
      isVisible: card2Visible,
      delay: 'reveal--delay-3',
      icon: <ShieldCheck size={22} className="service-col__icon" fill="#243D2B" strokeWidth={1.5} color="#F7F4EB" />,
      title: 'Dealer Portal',
      desc: 'Online portal for authorized dealers.'
    },
    {
      ref: card3Ref,
      isVisible: card3Visible,
      delay: 'reveal--delay-4',
      icon: <Leaf size={22} className="service-col__icon" fill="#243D2B" strokeWidth={1.5} color="#243D2B" />,
      title: 'Bag Inventory ERP',
      desc: 'Desktop ERP for production & recovery.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services__panel">
          {/* Left Column: Heading and Action */}
          <div
            ref={headingRef}
            className={`services__intro-col reveal reveal--fade-left ${headingVisible ? 'is-visible' : ''}`}
          >
            <span className="services__eyebrow">OUR SERVICES</span>
            <h2 className="services__heading">More Than Just Feed</h2>
            <p className="services__desc">
              Complete feed mill solutions — production, dealer management & ERP.
            </p>
            <button
              onClick={onOpenServices}
              className="services__btn-view"
              aria-label="View all feed store services"
            >
              <span className="services__btn-icon-circle">
                <ArrowRight size={13} strokeWidth={2.4} />
              </span>
              <span>View All Services</span>
            </button>
          </div>

          {/* 3 Service Columns with Vertical Dividers */}
          <div className="services__columns-grid">
            {servicesList.map((srv, idx) => (
              <div
                key={idx}
                ref={srv.ref}
                className={`service-col reveal reveal--flip ${srv.delay} ${srv.isVisible ? 'is-visible' : ''}`}
              >
                <div className="service-col__icon-box">
                  {srv.icon}
                </div>
                <h3 className="service-col__title">{srv.title}</h3>
                <p className="service-col__text">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
