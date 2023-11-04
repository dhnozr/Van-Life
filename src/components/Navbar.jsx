import React from 'react';
import logo from '../images/logog.png';
import './Navbar.css';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex justify-between">
      <div>
        <img width={150} src={logo} alt="" />
      </div>
      <nav>
        <ul>
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
