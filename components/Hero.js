'use client';

import styled from 'styled-components';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

const Wrapper = styled(ParallaxBanner)`
  width: 100vw;
  height: ${(props) => props.height}vh;
  padding: 0;

  & div[data-testid='layer-0'] > img {
    z-index: 19;
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

const PreloadContainer = styled.div`
  position: absolute;
  width: 100%;
  height: ${(props) => props.height}vh;
  z-index: 18;
  overflow: hidden;

  & > div {
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const PreloadImage = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(
    -50%,
    calc(-50% + ${(props) => (props.height == 100 ? 0 : 42.8571)}px)
  );
`;

export const Hero = ({ url, children, height = 75, ...etc }) => {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <Wrapper
        layers={[
          {
            speed: -30,
            children: <img src={url} />,
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
