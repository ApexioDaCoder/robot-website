import Image from 'next/image';
import { Hero, HeroContent } from '@/components/Hero';
import { Title } from '@/components/Title';

export default function Projects() {
  return (
    <>
      <main className="text-center">
        <Hero url="/robot.png">
          <HeroContent>
            <Title delay={0.3}>22-23 Power Play</Title>
          </HeroContent>
        </Hero>
        <iframe
          className="aspect-video w-full my-6"
          src="https://www.youtube-nocookie.com/embed/0077olakp-g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </main>
    </>
  );
}
