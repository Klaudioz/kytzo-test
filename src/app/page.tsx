import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Team from '@/components/sections/Team';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Team />
      <FAQ />
      <CTA />
    </>
  );
}
