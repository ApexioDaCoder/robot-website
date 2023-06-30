import Image from 'next/image';
import { Hero, HeroContent } from '../../components/Hero';
import { Title } from '@/components/Title';

export default function Projects() {
  return (
    <main className="text-center h-[100vh]">
      <Hero url="/robot.png">
        <HeroContent>
          <Title delay={0.3}>Projects</Title>
        </HeroContent>
      </Hero>
    </main>
  );
}
