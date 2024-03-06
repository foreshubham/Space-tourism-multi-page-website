import React from 'react';
import Home from './Pages/Home';
import Destination from './Pages/Destination';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Corrected import

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}
