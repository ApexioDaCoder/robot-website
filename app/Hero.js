'use client';

import styled from 'styled-components';
import { Title } from './Title';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { Balancer } from 'react-wrap-balancer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled(ParallaxBanner)`
  width: 100vw;
  height: 100vh;
  padding: 0;

  & div[data-testid='layer-0'] {
    z-index: 19;
  }

  body:after {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    z-index: -1; // hide images
    content: url('${(props) => props.url}');
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 20;
  position: relative;
`;

const Content = styled.div`
  z-index: 21;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ScrollArrow = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
`;

/*
/_next/image?url=%2Frobot-bg.png&w=640&q=75 640w, /_next/image?url=%2Frobot-bg.png&w=750&q=75 750w, /_next/image?url=%2Frobot-bg.png&w=828&q=75 828w, /_next/image?url=%2Frobot-bg.png&w=1080&q=75 1080w, /_next/image?url=%2Frobot-bg.png&w=1200&q=75 1200w, /_next/image?url=%2Frobot-bg.png&w=1920&q=75 1920w, /_next/image?url=%2Frobot-bg.png&w=2048&q=75 2048w, /_next/image?url=%2Frobot-bg.png&w=3840&q=75 3840w
*/

export const Hero = () => {
  const url = '/_next/image?url=%2Fteam.jpeg&w=1920&q=75';
  return (
    <ParallaxProvider scrollAxis="vertical">
      <Wrapper
        layers={[
          {
            image: url,
            speed: -30,
          },
        ]}
        url={url}
        className="bleed"
      >
        <Container>
          <Content>
            <Title delay={0.3}>21233</Title>
            <p className="text-lg font-bold fade-up" data-layer="3">
              <Balancer>
                We are a community team located in San Antonio, Texas whose goal
                is to create an advanced program to teach students CAD, coding,
                mechanics, and team management. Our team is comprised of
                students from 5 separate schools to cultivate diversity in
                ideas.
              </Balancer>
            </p>
          </Content>
          <ScrollArrow icon={faArrowDown} bounce />
        </Container>
      </Wrapper>
    </ParallaxProvider>
  );
};
