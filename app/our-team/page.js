import Image from 'next/image';
import { Hero, HeroContent } from '../../components/Hero';
import { Title } from '@/components/Title';

export default function OurTeam() {
  return (
    <main className="text-center h-[100vh]">
      <Hero url="/team.jpeg">
        <HeroContent>
          <Title delay={0.3}>Our Team</Title>
        </HeroContent>
      </Hero>
    </main>
  );
}
