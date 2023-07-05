'use client';

import Image from 'next/image';
import { Hero, HeroContent } from '../../components/Hero';
import { Title } from '@/components/Title';
import { useFadeUp } from '@/lib/useFadeUp';
import { Section } from '@/components/Section';
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import { SubTitle } from '@/components/SubTitle';

const MemberCard = ({ member }) => {
  return (
    <Card className="max-w-[200px]" {...useFadeUp()}>
      <CardBody className="p-0 max-h-[200px] max-w-[200px]">
        <Image
          width={200}
          height={200}
          className="rounded-xl h-[200px] object-cover"
          src={`/profile/${member.name.toLowerCase()}.jpeg`}
          alt="Member picture"
        />
      </CardBody>
      <CardFooter className="text-sm flex-col">
        <b>
          {member.name}
          {member.nickname && ` (${member.nickname})`}
        </b>
        <p className="text-default-500 text-center">
          {member.position.toUpperCase()}
        </p>
      </CardFooter>
    </Card>
  );
};

export default function OurTeam() {
  return (
    <main className="text-center min-h-[100vh]">
      <Hero url="/first-comp-photo.jpeg">
        <HeroContent>
          <Title delay={0.3}>Our Team</Title>
        </HeroContent>
      </Hero>
      <Section>
        <p className="mb-4 italic" {...useFadeUp()}>
          <b className="font-black">Mission statement:</b> Our goal is to
          introduce the STEM program to families outside of school so they may
          become the leaders of the next generation of robotics.
        </p>
        <p className="mb-4" {...useFadeUp()}>
          We are a community team located in San Antonio, Texas whose goal is to
          create an advanced program to teach students CAD, coding, mechanics,
          and team management.
        </p>
      </Section>
      <SubTitle>Team Values</SubTitle>
      <Section className="flex flex-col sm:flex-row flex-wrap !text-center sm:justify-between justify-center">
        <p>HARDWORK</p>
        <p>DETERMINATION</p>
        <p>INDEPENDENCE</p>
        <p>CREATIVITY</p>
      </Section>
      <SubTitle>Team Members</SubTitle>
      <Section className="flex flex-row gap-10 flex-wrap justify-center">
        {[
          {
            name: 'Karim',
            position: 'captain / design',
          },
          { name: 'Adrian', position: 'co-captain / programming' },
          { name: 'Shahrukh', position: 'mechanical' },
          { name: 'Alejandro', position: 'mechanical', nickname: 'Merk' },
          { name: 'Aryan', position: 'design / mechanical' },
          {
            name: 'Joel',
            position: 'game expert - pro human player',
            nickname: 'Jelly',
          },
          {
            name: 'John Paul',
            position: 'design /  media',
            nickname: 'JP',
          },
          { name: 'Sean', position: 'mechanical' },
        ].map((member, i) => (
          <MemberCard key={i} member={member} />
        ))}
      </Section>
    </main>
  );
}
