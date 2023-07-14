'use client';

import styled from 'styled-components';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Image from 'next/image';
import MuxPlayer from '@mux/mux-player-react';
import { useEffect, useRef } from 'react';

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

  mux-player {
    --controls: none;
    --media-object-fit: cover;

    position: absolute;
    inset: 0;
    z-index: 0;
  }

  mux-player::part(gesture-layer) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, ${(props) => props.darkness});
  z-index: 20;
  position: relative;
`;

export const VideoHeroContent = styled.div`
  z-index: 21;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Video = () => {
  useEffect(() => {
    const video = document.querySelector('#hero-player');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(video);
            const attempt = () =>
              video.play().catch(function (error) {
                setTimeout(attempt, 1000);
              });
            setTimeout(attempt, 200);
          }
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);
    return () => observer.unobserve(video);
  }, []);
  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId="PYDTWKqmn02G100vaQHRdmwlBFvweH3gmVzyGQC02pzX8s"
      loop
      muted
      autoplay
      id="hero-player"
    />
  );
};

export const VideoHero = ({
  children,
  height = 60,
  darkness = 0.3,
  ...etc
}) => {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <Wrapper
        layers={[
          {
            speed: -30,
            children: <Video />,
          },
        ]}
        height={height}
        className="bleed"
        {...etc}
      >
        <Container darkness={darkness}>{children}</Container>
      </Wrapper>
    </ParallaxProvider>
  );
};
