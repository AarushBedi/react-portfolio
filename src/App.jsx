import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import Home from './pages/Home';
import { Box } from '@chakra-ui/react';
import Mutuals from './pages/MutualsPage';
import MLProject from './pages/MLProjectPage';
import PersonalPortfolio from './pages/PersonalPortfolioPage';
import Biokind from './pages/BiokindPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <ScrollToTop />
      <Box position={'relative'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mutuals" element={<Mutuals />} />
          <Route path="/ML" element={<MLProject />}/>
          <Route path="/portfolio" element={<PersonalPortfolio />} />
          <Route path='/biokind' element={<Biokind />} />
        </Routes>
      </Box>
      </>
  );
}

export default App;
