import Image from 'next/image';
import { Hero, HeroContent } from '@/components/Hero';
import { SubTitle } from '@/components/SubTitle';

export default function Contact() {
  return (
    <main className="text-center min-h-[100vh]">
      <Hero url="/contact-us.png" height={100}>
        <HeroContent>
          <SubTitle delay={0.3}>Contact Us</SubTitle>
        </HeroContent>
      </Hero>
    </main>
  );
}
