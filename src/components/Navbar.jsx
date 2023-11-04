import React from 'react';
import logo from '../images/logog.png';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-[#FFF7ED] h-16 p-4">
      <div>
        <img width={150} src={logo} alt="" />
      </div>
      <nav>
        <ul className="flex gap-3 text-lg">
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
