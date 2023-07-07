'use client';

import styled from 'styled-components';
import { CascadeText } from './CascadeText';
import { useFadeUp } from '@/lib/useFadeUp';
import { InstagramIcon } from '@/icons/InstagramIcon';
import { YouTubeIcon } from '@/icons/YouTubeIcon';

const Wrapper = styled.footer`
  width: 100vw;
  padding: 0;
  margin: 0;
  margin-top: 3rem;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );

  & .copyright {
    display: inline;
    grid-column-start: 1;
    position: relative;
  }

  & .copyright > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & a {
    display: inline;
    width: fit-content;
  }

  & a:hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: 768px) {
    & .copyright {
      grid-column-start: 1;
      grid-column-end: span 2;
    }
  }
`;

const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 54rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2em;
  text-align: center;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 4em;
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <CascadeText className="text-xl mb-4">Location</CascadeText>
          <a href="https://goo.gl/maps/a2CdD25NWbroWBNh6">
            91 Bighorn Canyon, San Antonio, TX, 78258
          </a>
        </div>
        <div>
          <CascadeText className="text-xl mb-4">Contact</CascadeText>
          <a href="mailto:techsyndicate0519@outlook.com">
            techsyndicate0519@outlook.com
          </a>
          <a href="tel:+12102842594">(210)-284-2594</a>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <a
              href="https://www.instagram.com/techsyndicate_21233/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.youtube.com/@techsyndicate21233"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © {new Date().getFullYear()} - Tech Syndicate #21233</p>
        </div>
      </Container>
    </Wrapper>
  );
};
