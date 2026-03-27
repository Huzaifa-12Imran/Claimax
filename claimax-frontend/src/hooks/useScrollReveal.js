import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and `isVisible` boolean.
 * `isVisible` becomes true once the element enters the viewport.
 *
 * @param {{ threshold?: number, rootMargin?: string }} options
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px' } = {}) {
  const ref       = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
