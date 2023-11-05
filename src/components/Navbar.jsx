import React, { useEffect, useState } from 'react';
import logo from '../images/logog.png';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toogleNavbar = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="flex justify-between items-center bg-[#FFF7ED] h-16 p-4">
      <div>
        <img width={150} src={logo} alt="" />
      </div>
      <nav>
        <ul className="gap-3 text-lg hidden md:flex">
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`about`}>About</Link>
          </li>
          <li>
            <Link to={`vans`}>Vans</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile navbar */}
      <div className="md:hidden">
        <button onClick={toogleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        {isOpen && (
          <div className="absolute left-4 right-4 h-72">
            <ul className="bg-black text-white flex basis-full h-full flex-col items-center gap-4 justify-center text-2xl">
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`about`}>About</Link>
              </li>
              <li>
                <Link to={`vans`}>Vans</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
