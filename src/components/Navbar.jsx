import React from 'react';
import logo from '../images/logog.png';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <div>
        <img width={150} src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link>About</Link>
            <Link>Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
