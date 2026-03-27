import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to `target` using requestAnimationFrame.
 * Triggers only once when the ref element enters the viewport.
 *
 * @param {number} target   - The final numeric value
 * @param {number} duration - Animation duration in ms (default 2000)
 * @returns {{ ref, displayValue }}
 */
export function useCounterAnimation(target, duration = 2000) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref        = useRef(null);
  const started    = useRef(false);
  const rafId      = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now) => {
            const elapsed  = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(eased * target);
            if (progress < 1) rafId.current = requestAnimationFrame(tick);
          };

          rafId.current = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [target, duration]);

  return { ref, displayValue };
}
