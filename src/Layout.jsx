import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
