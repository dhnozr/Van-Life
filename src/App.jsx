import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Layout from './Layout';
import Home from './pages/Home';
import Vans from './pages/Vans';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
