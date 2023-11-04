import React from 'react';
import logo from '../images/logog.png';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-[#FFF7ED] h-16 p-4">
      <div>
        <Link to={`/`}>
          <img width={150} src={logo} alt="" />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-3 text-lg">
          <li>
            <Link to={`about`}>About</Link>
          </li>
          <li>
            <Link to={`vans`}>Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
