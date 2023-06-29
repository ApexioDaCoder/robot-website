import Image from 'next/image';
import { Hero } from './Hero';
import { Quote } from './Quote';

export default function Home() {
  return (
    <main className="text-center">
      <Hero />
      <Quote />
    </main>
  );
}
