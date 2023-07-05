'use client';

import Image from 'next/image';
import { Hero, HeroContent } from '../components/Hero';
import { Quote } from './Quote';
import { SeasonList } from './SeasonList';
import { About } from './About';
import styled from 'styled-components';
import { Balancer } from 'react-wrap-balancer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { TeamNumber } from './TeamNumber';
import { SubTitle } from '@/components/SubTitle';

const ScrollArrow = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
`;

export default function Home() {
  return (
    <main className="text-center">
      <Hero url="/team.jpeg" height={100}>
        <HeroContent>
          <TeamNumber delay={0.3}>21233</TeamNumber>
          <p className="text-lg font-bold fade-up" data-layer="3">
            <Balancer>
              We are a community team located in San Antonio, Texas whose goal
              is to create an advanced program to teach students CAD, coding,
              mechanics, and team management. Our team is comprised of students
              from 5 separate schools to cultivate diversity in ideas.
            </Balancer>
          </p>
        </HeroContent>
        <ScrollArrow icon={faArrowDown} bounce />
      </Hero>
      <Quote />
      <SeasonList />
      <About />
      <Hero url="/sponsors-bg.jpeg" height={50}>
        <HeroContent>
          <div>
            <SubTitle>Sponsors</SubTitle>
          </div>
          <div className="grid gap-4 grid-rows-3 sm:grid-rows-none sm:grid-cols-3">
            <div>
              <Image
                src="/SA_Current.png"
                fill
                className="!h-[auto] !w-[100%] !relative inline"
                alt="SA Current"
              />
            </div>
            <div>
              <Image
                src="/solidworks.png"
                fill
                className="!h-[auto] !w-[100%] !relative inline"
                alt="Solidworks"
              />
            </div>
            <div>
              <Image
                src="/fabworks-logo.svg"
                fill
                className="!h-[auto] !w-[100%] !relative inline"
                alt="Fabworks"
              />
            </div>
          </div>
        </HeroContent>
      </Hero>
    </main>
  );
}
