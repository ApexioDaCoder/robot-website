import Image from 'next/image';
import { Hero, HeroContent } from '@/components/Hero';
import { SubTitle } from '@/components/SubTitle';
import { useFadeUp } from '@/lib/useFadeUp';

export default function Sponsors() {
  return (
    <main className="text-center min-h-[100vh]">
      <Hero url="/sponsors-bg.jpeg" height={100}>
        <HeroContent>
          <div className="flex flex-wrap flex-col gap-10 sm:gap-0 sm:flex-row w-[90vw] sm:w-[70vw] justify-between">
            <div className="sm:w-[50%] text-left">
              <SubTitle>Sponsors</SubTitle>
              <p className="text-lg sm:pr-4" {...useFadeUp}>
                Tech Syndicate is a new team whose goal is to expand its
                horizons and make an advanced robotics program which is
                accessible to all people. We have had great assistance making
                our name known and teaching students with our sponsors.
              </p>
            </div>
            <div className="sm:w-[50%] sm:pl-4 relative text-center">
              <Image
                src="/SA_Current.png"
                fill
                className="!h-[auto] !w-[100%] !relative inline"
                alt="SA Current"
                {...useFadeUp}
              />
              <Image
                src="/solidworks.png"
                fill
                className="!h-[auto] !w-[100%] !relative inline"
                alt="Solidworks"
                {...useFadeUp}
              />
              <Image
                src="/fabworks-logo.svg"
                fill
                className="!h-[auto] !w-[100%] !relative inline"
                alt="Fabworks"
                {...useFadeUp}
              />
            </div>
          </div>
        </HeroContent>
      </Hero>
    </main>
  );
}
