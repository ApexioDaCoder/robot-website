'use client';

import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transform: translateY(1.2em) rotate(0.01turn);
  }
`;

const CascadeWrapper = styled.div`
  --d: ${(props) =>
    props.duration ? props.duration : props.long ? 1.1 : 0.6}s;
  --anim-delay: 0;
  position: relative;
  overflow: visible;

  & .char {
    display: inline-block;
    animation: ${slideIn} var(--d) cubic-bezier(0.4, 0.3, 0.1, 1) both;
    animation-delay: calc(var(--anim-delay) + calc(var(--char-index) * 15ms));
    clip-path: polygon(-40% -15%, 140% -15%, 140% 120%, -40% 120%);
    animation-play-state: ${(props) => (props.onScreen ? 'running' : 'paused')};
    overflow: visible;
    position: relative;
  }

  & .char:before,
  & .char:after {
    content: attr(data-char);
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    transition: inherit;
    user-select: none;
  }
`;

export const CascadeText = ({ children, delay = 0, ...etc }) => {
  const [onScreen, setOnScreen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const component = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setOnScreen(true);
            observer.unobserve(component);
          }
        }
      },
      { threshold: 1 }
    );
    observer.observe(component);
    return () => observer.unobserve(component);
  }, []);

  if (typeof children == 'string') {
    return (
      <CascadeWrapper
        onScreen={onScreen}
        ref={ref}
        style={{ ['--anim-delay']: delay + 's' }}
        {...etc}
      >
        {children.split('').map((char, i) => {
          return (
            <span
              key={i}
              className={/\s/.test(char) ? 'whitespace' : 'char'}
              style={{ ['--char-index']: i }}
              data-char={char}
            >
              {char}
            </span>
          );
        })}
      </CascadeWrapper>
    );
  } else {
    return <div>{children}</div>;
  }
};
