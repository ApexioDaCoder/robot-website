'use client';

import styled from 'styled-components';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

const Wrapper = styled(ParallaxBanner)`
  width: 100vw;
  height: ${(props) => props.height}vh;
  padding: 0;

  & div[data-testid='layer-0'] {
    z-index: 19;
  }

  /*
  body:after {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    z-index: -1;
    content: url('${(props) => props.url}');
  }
  */
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
      <PreloadContainer className="bleed" height={height}>
        <PreloadImage src={url} height={height} />
        <div />
      </PreloadContainer>
      <Wrapper
        layers={[
          {
            image: url,
            speed: -30,
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
