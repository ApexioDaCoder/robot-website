'use client';

import styled from 'styled-components';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Image from 'next/image';

const Wrapper = styled(ParallaxBanner)`
  width: 100vw;
  height: ${(props) => props.height}vh;
  padding: 0;

  & div[data-testid='layer-0'] > img {
    z-index: 19;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  body:after {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    z-index: -1;
    content: url('${(props) => props.url}');
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 20;
  position: relative;
`;

export const HeroContent = styled.div`
  z-index: 21;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Hero = ({ url, children, height = 75, ...etc }) => {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <Wrapper
        layers={[
          {
            speed: -30,
            children: <Image src={url} fill={true} />,
          },
        ]}
        url={url}
        height={height}
        className="bleed"
        {...etc}
      >
        <Container>{children}</Container>
      </Wrapper>
    </ParallaxProvider>
  );
};
