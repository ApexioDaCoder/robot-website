'use client';

import styled from 'styled-components';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Image from 'next/image';
import { Balancer } from 'react-wrap-balancer';
import { Button } from '@nextui-org/react';

const Wrapper = styled(ParallaxBanner)`
  width: 100vw;
  padding: 30px;
  height: fit-content;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 20;
  position: relative;
`;

export const HeroContent = styled.div`
  z-index: 21;
`;

const Background = styled.div`
  background-color: #3159ed;
  background-image: url('https://cdn.discordapp.com/attachments/185046628732895232/204497752091000832/bg3.svg');
  background-size: 50%;
  width: 100%;
  height: 100%;
`;

export const FTCInfo = ({ height = 25, darkness = 0.3, ...etc }) => {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <Wrapper
        layers={[
          {
            speed: -30,
            children: <Background />,
          },
        ]}
        height={height}
        className="bleed"
        {...etc}
      >
        <Container darkness={darkness}>
          <HeroContent className="grid sm:grid-cols-3 sm:grid-rows-none grid-rows-3 grid-cols-none">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/FIRST_Horz_Reverse.svg"
                fill={true}
                className="!h-[auto] !w-[auto] !inline-block !relative"
              />
            </div>
            <Balancer className="text-center p-2">
              FIRST Tech Challenge (FTC) is a high school robotics competition
              where kids design, build, and program robots to compete in an
              alliance format against other teams.
            </Balancer>
            <div className="flex flex-col justify-center items-center">
              <Button
                onPress={() =>
                  window.open('https://www.firstinspires.org/', '_blank')
                }
                color="white"
                variant="bordered"
              >
                Learn more about FIRST
              </Button>
            </div>
          </HeroContent>
        </Container>
      </Wrapper>
    </ParallaxProvider>
  );
};
