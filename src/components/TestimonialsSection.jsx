import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeDot, setActiveDot] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Best quality feed in the area. Great service!",
      name: "John D.",
      role: "Local Farmer",
      avatar: "/images/avatar_john.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "Fast and reliable. Highly recommended!",
      name: "Maria S.",
      role: "Poultry Owner",
      avatar: "/images/avatar_maria.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "Their feed really makes a difference in our livestock.",
      name: "Ahmed R.",
      role: "Animal Farmer",
      avatar: "/images/avatar_ahmed.jpg",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials__layout">
          {/* Left: Heading composition */}
          <div className="testimonials__header-col">
            <span className="testimonials__eyebrow">WHAT OUR CUSTOMERS SAY</span>
            <h2 className="testimonials__heading">
              Trusted by Farmers <br />
              Across Fresno
            </h2>
          </div>

          {/* Right: 3 Testimonial Cards */}
          <div className="testimonials__cards-col">
            <div className="testimonials__cards-grid">
              {testimonials.map((item) => (
                <article key={item.id} className="testimonial-card">
                  <p className="testimonial-card__quote">“{item.quote}”</p>
                  
                  <div className="testimonial-card__footer">
                    <div className="testimonial-card__author">
                      <img
                        src={item.avatar}
                        alt={`${item.name}, ${item.role}`}
                        className="testimonial-card__avatar"
                        loading="lazy"
                      />
                      <div className="testimonial-card__info">
                        <span className="testimonial-card__name">{item.name}</span>
                        <span className="testimonial-card__role">{item.role}</span>
                      </div>
                    </div>

                    <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} fill="#D6B46B" strokeWidth={0} />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="testimonials__pagination">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDot(idx)}
                  className={`testimonials__dot ${activeDot === idx ? 'testimonials__dot--active' : ''}`}
                  aria-label={`Slide to testimonial page ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
