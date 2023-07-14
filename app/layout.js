import './globals.css';
import {
  Montserrat,
  Readex_Pro,
  Merriweather,
  Bebas_Neue,
} from 'next/font/google';
import { Cursor } from '@/components/Cursor';
import { Header } from '@/components/Header';
import localFont from 'next/font/local';
import { Providers } from './providers';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { FTCInfo } from '@/components/FTC-Info';
import { Toaster } from 'react-hot-toast';
import { Hero, HeroContent } from '@/components/Hero';
import { SubTitle } from '@/components/SubTitle';
import Image from 'next/image';

const paladins = localFont({
  src: './Paladins.woff2',
  display: 'swap',
  variable: '--paladins-font',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat-font',
});

const readexPro = Readex_Pro({
  subsets: ['latin'],
  variable: '--readex-pro-font',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: '400',
  variable: '--merriweather-font',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--bebas-neue-font',
});

export const metadata = {
  title: 'Tech Syndicate #21233',
  description:
    'We are a community team located in San Antonio, Texas whose goal is to create an advanced program to teach students CAD, coding, mechanics, and team management. Our team is comprised of students from 5 separate schools to cultivate diversity in ideas.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head></head>
      <body
        className={`${montserrat.variable} ${paladins.variable} ${readexPro.className} ${merriweather.variable} ${bebasNeue.variable} text-white`}
      >
        <Providers>
          <Toaster />
          <Header />
          {children}
          <Hero url="/sponsors-bg.jpeg" height={50} className="text-center">
            <HeroContent>
              <div>
                <SubTitle>Sponsors</SubTitle>
              </div>
              <div className="grid gap-4 grid-rows-3 sm:grid-rows-none sm:grid-cols-3">
                <div>
                  <Image
                    src="/SA_Current.png"
                    fill
                    className="!h-[auto] !w-[100%] !relative inline"
                    alt="SA Current"
                  />
                </div>
                <div>
                  <Image
                    src="/solidworks.png"
                    fill
                    className="!h-[auto] !w-[100%] !relative inline"
                    alt="Solidworks"
                  />
                </div>
                <div>
                  <Image
                    src="/fabworks-logo.svg"
                    fill
                    className="!h-[auto] !w-[100%] !relative inline"
                    alt="Fabworks"
                  />
                </div>
              </div>
            </HeroContent>
          </Hero>
          <FTCInfo />
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
