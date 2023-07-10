'use client';

import { useEffect, useRef, useState } from 'react';

export const useFadeUp = ({
  layer = 1,
  threshold = 1,
  duration = 0.7,
} = {}) => {
  const ref = useRef();
  const [counter, setCounter] = useState(1);
  const [style, setStyle] = useState({
    animation: `${duration}s ease ${
      0.3 * (layer - 1)
    }s 1 normal both paused fadeUp`,
  });
  const props = { ref, style };
  useEffect(() => {
    const component = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStyle({
              animation: `${duration}s ease ${
                0.3 * (layer - 1)
              }s 1 normal both running fadeUp`,
            });
            setTimeout(
              () =>
                setStyle({
                  animation: 'nonw',
                }),
              duration * 1000
            );
            observer.unobserve(component);
          }
        }
      },
      { threshold }
    );
    if (component) {
      observer.observe(component);
    } else {
      setCounter(counter + 1);
    }
    return () => {
      if (component) {
        observer.unobserve(component);
      }
    };
  }, [layer, threshold, duration, counter, setCounter]);
  return props;
};
