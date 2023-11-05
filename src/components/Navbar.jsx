import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

export default function Navbar() {
  const [isOpen, toggle] = useState(false);

  const first = useSpring({
    transform: isOpen
      ? 'translate(5px, 32px) rotate(-45deg)'
      : 'translate(2px, 7px) rotate(0deg)',
  });
  const second = useSpring({
    transform: isOpen
      ? 'translate(10px, 4px) rotate(45deg)'
      : 'translate(2px, 19px) rotate(0deg)',
  });
  const third = useSpring({
    transform: isOpen
      ? 'translate(5px, 32px) rotate(-45deg)'
      : 'translate(2px, 31px) rotate(0deg)',
  });

  const location = useLocation();

  useEffect(() => {
    toggle(false);
  }, [location]);

  return (
    <header className="flex justify-between items-center bg-[#FFF7ED] h-16 p-4">
      <div>
        <img width={150} src={`logog.png`} alt="" />
      </div>

      <div className={`z-40 md:hidden`} style={{}}>
        <svg
          onClick={() => toggle(!isOpen)}
          width="44"
          height="32"
          viewBox="0 0 44 44"
          fill="#000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <animated.rect width="40" height="4" rx="2" style={first} />
          <animated.rect width="40" height="4" rx="2" style={second} />
          <animated.rect width="40" height="4" rx="2" style={third} />
        </svg>
      </div>

      <nav
        className={`fixed right-0 top-0 bottom-0 left-1/3 py-28 px-20 z-20 bg-navbar-bg text-white translate-x-full ${
          isOpen && 'translate-x-0'
        }  backdrop-blur-sm transition-transform duration-500 md:translate-x-0  md:static md:bg-transparent md:py-0 md:px-0`}
      >
        <ul
          className={`flex flex-col gap-8 text-2xl md:flex-row md:text-xl md:text-black`}
        >
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
      {/*  <div className="md:hidden">
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
      </div> */}
    </header>
  );
}
