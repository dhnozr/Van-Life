import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
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
        <img width={150} src="/logog.png" alt="" />
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
        className={`fixed right-0 top-0 bottom-0 left-1/3 py-28 px-20 z-20 bg-navbar-bg text-white  ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }  backdrop-blur-sm transition-all duration-500 md:translate-x-0  md:static md:bg-transparent md:py-0 md:px-0`}
      >
        <ul
          className={`flex flex-col gap-8 text-2xl md:flex-row md:text-lg  md:text-black`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'underline underline-offset-2 font-bold' : null
              }
              to={`host`}
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'underline underline-offset-2 font-bold' : null
              }
              to={`/`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'underline underline-offset-2 font-bold' : null
              }
              to={`about`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'underline underline-offset-2 font-bold' : null
              }
              to={`vans`}
            >
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'underline underline-offset-2 font-bold' : null
              }
              to={`login`}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
