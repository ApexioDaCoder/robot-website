'use client';

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

  & .char {
    display: inline-block;
    animation: ${slideIn} var(--d) cubic-bezier(0.4, 0.3, 0.1, 1) both;
    animation-delay: calc(var(--anim-delay) + calc(var(--char-index) * 15ms));
    clip-path: polygon(-40% -15%, 140% -15%, 140% 120%, -40% 120%);
  }
`;

export const CascadeText = ({ children, delay = 0, ...etc }) => {
  if (typeof children == 'string') {
    return (
      <CascadeWrapper style={{ ['--anim-delay']: delay + 's' }} {...etc}>
        {children.split('').map((char, i) => {
          return (
            <span
              key={i}
              className={/\s/.test(char) ? 'whitespace' : 'char'}
              style={{ ['--char-index']: i }}
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
