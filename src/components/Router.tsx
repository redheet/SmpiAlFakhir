import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import VisiMisi from './pages/visi-misi';
import Team from './pages/team';
// import Registration from './pages/registration';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/team" element={<Team />} />
          {/* <Route path="/registration" element={<Registration />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
        <SpeedInsights />
      </BrowserRouter>
    </>
  );
}

export default Router;
