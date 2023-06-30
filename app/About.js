'use client';

import styled from 'styled-components';
import { SubTitle } from '@/components/SubTitle';
import { Image, Button } from '@nextui-org/react';
import { useFadeUp } from '@/lib/useFadeUp';
import { useRouter } from 'next/navigation';

const Wrapper = styled.div`
  --gap: 2em;
  padding: 3rem 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: left;
  display: grid;
  grid-template-columns: 100%;
  gap: var(--gap);

  @media only screen and (min-width: 768px) {
    grid-template-columns: calc(50% - calc(var(--gap) / 2)) calc(
        50% - calc(var(--gap) / 2)
      );
  }
`;

export const About = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <div>
        <SubTitle>Our Team</SubTitle>
        <p className="mb-4 italic" {...useFadeUp()}>
          <b className="font-black">Mission statement:</b> our goal is to
          introduce the STEM program to families outside of school so they may
          become the leaders of the next generation of Robotics. we do this by
          creating a stable and functional robotics team that promotes learning,
          diversity, determination, and success
        </p>
        <p {...useFadeUp()} className="mb-4">
          We are a community team located in San Antonio, Texas whose goal is to
          create an advanced program to teach students CAD, coding, mechanics,
          and team management. Our team is comprised of students from 5 separate
          schools to cultivate diversity in ideas.
        </p>
        <Button
          variant="bordered"
          onPress={() => router.push('/our-team')}
          {...useFadeUp()}
        >
          Learn More
        </Button>
      </div>
      <Image
        src="/team.jpeg"
        alt="Team Photo after THINK award"
        isBlurred
        {...useFadeUp({ threshold: 0.25 })}
      />
    </Wrapper>
  );
};
