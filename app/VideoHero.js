'use client';

import styled from 'styled-components';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Image from 'next/image';
import MuxPlayer from '@mux/mux-player-react';
import { useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const PlayIcon = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  transform: translate(-50%, -50%);
  font-size: 5px;
  padding: 10px;
  display: block;
  background-image: linear-gradient(#343335, #1a191b);
  box-shadow: 0 30px 25px rgba(0, 0, 0, 0.5), inset 0 2px 2px #525154;
  border-radius: 20px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

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

export const HeroContent = styled.div`
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
            setTimeout(
              () =>
                video
                  .play()
                  .then(function () {
                    // autoplay was successful!
                    console.log('autoplay success');
                  })
                  .catch(function (error) {
                    // do something if you want to handle or track this error
                    console.log('autoplay failed');
                    console.log(error);
                  }),
              200
            );
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
      playbackId="7AbD8C7zBvXVrT01NNikMdxhwSLzN00Xt6rXCrAotsMHE"
      loop
      muted
      autoplay
      id="hero-player"
    />
  );
};

export const VideoHero = ({
  children,
  height = 75,
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
        <Container darkness={darkness}>
          <HeroContent>Hello</HeroContent>
          <PlayIcon icon={faPlay} />
        </Container>
      </Wrapper>
    </ParallaxProvider>
  );
};
