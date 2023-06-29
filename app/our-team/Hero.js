'use client';

import styled from 'styled-components';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { Balancer } from 'react-wrap-balancer';
import { Title } from './Title';

const Wrapper = styled(ParallaxBanner)`
  width: 100vw;
  height: 75vh;
  padding: 0;
  & div[data-testid='layer-0'] {
    z-index: 19;
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

/*
/_next/image?url=%2Frobot-bg.png&w=640&q=75 640w, /_next/image?url=%2Frobot-bg.png&w=750&q=75 750w, /_next/image?url=%2Frobot-bg.png&w=828&q=75 828w, /_next/image?url=%2Frobot-bg.png&w=1080&q=75 1080w, /_next/image?url=%2Frobot-bg.png&w=1200&q=75 1200w, /_next/image?url=%2Frobot-bg.png&w=1920&q=75 1920w, /_next/image?url=%2Frobot-bg.png&w=2048&q=75 2048w, /_next/image?url=%2Frobot-bg.png&w=3840&q=75 3840w
*/

export const Hero = () => {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <Wrapper
        layers={[
          {
            image:
              'https://images.squarespace-cdn.com/content/v1/6441d227b1128a41cb15d8fd/ec41b476-08a7-456f-bc45-46b08d4602f3/96BDFF90-7222-498B-ADAF-290C5DF7FE78.png', //'https://cdn.apexio.dev/TS-PowerPlay-Robot.png',
            speed: -30,
          },
        ]}
        className="bleed"
      >
        <Container>
          <Content>
            <Title delay={0.3}>Our Team</Title>
          </Content>
        </Container>
      </Wrapper>
    </ParallaxProvider>
  );
};
