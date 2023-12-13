import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<About />} />
        </Routes>
        <SpeedInsights />
      </BrowserRouter>
    </>
  );
}

export default App;
