import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal - Intersection Observer based scroll animation hook
 * @param {Object} options
 * @param {number} options.threshold - 0 to 1, how much of element must be visible
 * @param {string} options.rootMargin - margin around root
 * @param {boolean} options.once - trigger only once (default true)
 */
export function useScrollReveal({
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

/**
 * useStaggeredReveal - for animating list items with staggered delays
 * Returns array of { ref, isVisible } for each item
 */
export function useStaggeredReveal(count, options = {}) {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children);
    const observers = [];

    children.forEach((child, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]));
            }, index * (options.staggerMs || 100));
            observer.unobserve(child);
          }
        },
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || '0px 0px -30px 0px',
        }
      );
      observer.observe(child);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [count, options.staggerMs, options.threshold, options.rootMargin]);

  return { containerRef, visibleItems };
}
