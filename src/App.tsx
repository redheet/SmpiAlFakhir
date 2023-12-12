import { SpeedInsights } from "@vercel/speed-insights/react";
import Cta from "./components/layout/cta";
import HeroSection from "./components/layout/hero-section";
import NavMenu from "./components/layout/nav-menu";

function App() {
  return (
    <>
      <SpeedInsights/>
      <NavMenu />
      <HeroSection />
      <Cta />
    </>
  );
}

export default App;
