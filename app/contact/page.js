'use client';

import Image from 'next/image';
import { Hero, HeroContent } from '@/components/Hero';
import { SubTitle } from '@/components/SubTitle';
import { useFadeUp } from '@/lib/useFadeUp';
import styled from 'styled-components';
import { Form } from './Form';

const LeftSide = styled.div`
  & a {
    color: #d9d9d9;
    transition: all 0.25s ease;
    display: block;
  }

  & a:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export default function Contact() {
  return (
    <main className="text-center min-h-[100vh]">
      <Hero url="/contact-us.png" height={100} darkness={0}>
        <HeroContent>
          <div className="flex flex-wrap flex-col gap-10 sm:gap-0 sm:flex-row w-[90vw] sm:w-[70vw] justify-between">
            <LeftSide className="sm:w-[50%] text-left sm:pr-4">
              <SubTitle>Contact Us</SubTitle>
              <p className="text-lg mb-2" {...useFadeUp()}>
                If you have any questions about our team, resources or have any
                other concerns, send let us know. <br /> Feel free to send us an
                email :)
              </p>
              <a
                className="text-lg"
                href="mailto:techsyndicate0519@outlook.com"
                {...useFadeUp()}
              >
                techsyndicate0519@outlook.com
              </a>
              <a className="text-lg" href="tel:+12102842594" {...useFadeUp()}>
                (210)-284-2594
              </a>
            </LeftSide>
            <div className="sm:w-[50%] sm:pl-4 relative text-center">
              <Form />
            </div>
          </div>
        </HeroContent>
      </Hero>
    </main>
  );
}
