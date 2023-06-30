'use client';

import styled from 'styled-components';
import { Balancer } from 'react-wrap-balancer';
import { useFadeUp } from '@/lib/useFadeUp';

const Wrapper = styled.blockquote`
  padding: 3rem 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-style: italic;
  font-size: 1.5rem;
  font-family: var(--merriweather-font);
  position: relative;
  text-align: center;

  & div {
    margin-top: 1.63rem;
    margin-bottom: 1.63rem;
  }

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  &:before,
  &:after {
    position: absolute;
    font-weight: 700;
    color: white;
    height: 0;
    padding-top: 0.2em;
    line-height: 0;
    width: 63%;
    left: 50%;
    --g8: #000;
    --g6: #25252b;
    text-shadow: 1px 1px var(--g8), -1px -1px var(--g8), 1px -1px var(--g8),
      -1px 1px var(--g8), 2px 2px var(--g8), -2px -2px var(--g8),
      2px -2px var(--g8), -2px 2px var(--g8), 3px 3px var(--g8),
      -3px -3px var(--g8), 3px -3px var(--g8), -3px 3px var(--g8),
      4px 4px var(--g8), -4px -4px var(--g8), 4px -4px var(--g8),
      -4px 4px var(--g8), 5px 5px var(--g8), -5px -5px var(--g8),
      5px -5px var(--g8), -5px 5px var(--g8);
    transform: translateX(-50%);
    border-top: 2px solid #25252b;
  }

  &:before {
    top: 0;
    content: '“';
  }

  &:after {
    bottom: 0;
    content: '”';
  }
`;

export const Quote = () => {
  return (
    <Wrapper>
      <div {...useFadeUp()}>
        <Balancer as="p">
          If you set your goals ridiculously high and it&apos;s a failure, you
          will fail above everyone else&apos;s success.
        </Balancer>
        <p>-James Cameron</p>
      </div>
    </Wrapper>
  );
};
