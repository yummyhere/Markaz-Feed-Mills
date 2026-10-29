import React from 'react';
import { ShieldCheck, Truck, Headphones } from 'lucide-react';
import { FarmerHatIcon, BotanicalBranch } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function WhyChooseUs() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal();
  const { ref: featRef, isVisible: featVisible } = useScrollReveal({ rootMargin: '0px 0px -30px 0px' });

  const features = [
    {
      icon: <ShieldCheck size={26} strokeWidth={1.8} color="#F7F4EB" />,
      title: 'Premium Quality Feeds',
      description: 'Lab-tested nutrition'
    },
    {
      icon: <FarmerHatIcon className="w-7 h-7" color="#F7F4EB" />,
      title: 'Trusted by Farmers',
      description: 'Generations of care'
    },
    {
      icon: <Truck size={26} strokeWidth={1.8} color="#F7F4EB" />,
      title: 'Fast & Reliable Service',
      description: 'Prompt bulk delivery'
    },
    {
      icon: <Headphones size={26} strokeWidth={1.8} color="#F7F4EB" />,
      title: 'Expert Support',
      description: 'Ration consultation'
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="why-choose__banner">
          {/* Left Title with Gold Accent Underline */}
          <div
            ref={headRef}
            className={`why-choose__left reveal reveal--fade-left ${headVisible ? 'is-visible' : ''}`}
          >
            <h2 className="why-choose__heading">
              Why Choose <br />
              Markaz Feed Mills?
            </h2>
            <div className="why-choose__underline" />
          </div>

          {/* Vertical Main Divider */}
          <div className="why-choose__main-divider" />

          {/* Right: 4 Features with Thin Dividers */}
          <div
            ref={featRef}
            className={`why-choose__features reveal reveal--fade-right ${featVisible ? 'is-visible' : ''}`}
          >
            {features.map((feature, idx) => (
              <React.Fragment key={idx}>
                <div className="why-choose__item">
                  <div className="why-choose__icon-wrap">
                    {feature.icon}
                  </div>
                  <span className="why-choose__item-title">{feature.title}</span>
                </div>
                {idx < features.length - 1 && (
                  <div className="why-choose__item-divider" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Far Right Botanical Art Accent */}
          <div className="why-choose__botanical" aria-hidden="true">
            <BotanicalBranch className="why-choose__botanical-svg" color="#A8B395" />
          </div>
        </div>
      </div>
    </section>
  );
}
