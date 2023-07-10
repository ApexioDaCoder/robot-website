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
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    { rel: 'shortcut icon', type: 'image/png', url: '/favicon.png' },
  ],
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
          <FTCInfo />
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
