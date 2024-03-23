import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Error from './pages/Error';

  //différentes routes et chemin des differentes pages du site
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Accommodation/:id' element={<Accommodation />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
