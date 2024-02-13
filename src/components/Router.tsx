import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import VisiMisi from './pages/visi-misi';
import Team from './pages/team';
import NotFoundPgaes from './pages/notfoundpages';
import Program from './pages/program';
import Gallery from './pages/gallery';
import Schema from './pages/schema';
import Beasiswa from './pages/beasiswa';
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
          <Route path="/beasiswa" element={<Beasiswa />} />
          {/* <Route path="/registration" element={<Registration />} /> */}
          <Route path="/program" element={<Program />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/scheme" element={<Schema />} />
          <Route path="*" element={<NotFoundPgaes />} />
        </Routes>
        <SpeedInsights />
      </BrowserRouter>
    </>
  );
}

export default Router;
