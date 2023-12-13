import { SpeedInsights } from '@vercel/speed-insights/react';
import Cta from '@/components/layout/cta';
import HeroSection from '@/components/layout/hero-section';
import NavMenu from '@/components/layout/nav-menu';
import Head from '../ui/Head';

function Home() {
  return (
    <>
      <Head title="Home" />
      <SpeedInsights />
      <NavMenu />
      <HeroSection />
      <Cta />
    </>
  );
}

export default Home;
