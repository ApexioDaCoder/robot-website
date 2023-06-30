'use client';

import { useEffect, useRef, useState } from 'react';

export const useFadeUp = ({ layer = 1, threshold = 1 } = {}) => {
  const ref = useRef();
  const [style, setStyle] = useState({
    transition: 'ease-out',
    animation: `0.7s ease ${0.3 * (layer - 1)}s 1 normal both paused fadeUp`,
  });
  const props = { ref, style };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStyle({
              transition: 'ease-out',
              animation: `0.7s ease ${
                0.3 * (layer - 1)
              }s 1 normal both running fadeUp`,
            });
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.unobserve(ref.current);
  }, []);
  return props;
};
