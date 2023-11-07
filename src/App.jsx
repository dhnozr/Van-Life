import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Layout from './Layout';
import Home from './pages/Home';
import Vans from './pages/Vans';
import VanDetailPage from './pages/VanDetailPage';
import HostPage from './pages/HostPage';
import Dashboard from './components/Dashboard';
import Income from './components/Income';
import Reviews from './components/Reviews';
import HostVans from './components/HostVans';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetailPage />} />
          </Route>
          <Route path="host" element={<HostPage />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
