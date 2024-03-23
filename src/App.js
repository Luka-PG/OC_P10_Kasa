import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Errorpage from './components/Errorpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Accommodation/:id' element={<Accommodation />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
