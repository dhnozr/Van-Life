import { Underline } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function HostPage() {
  return (
    <>
      <nav className="bg-[#FFF7ED]">
        <ul className="flex items-center text-sm justify-between px-4 py-4  md:text-lg md:justify-normal md:gap-4 ">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'underline underline-offset-2 font-bold' : null
              }
              to={`.`}
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'underline underline-offset-2 font-bold' : null
              }
              to={`/host/income`}
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'underline underline-offset-2 font-bold' : null
              }
              to={`/host/vans`}
            >
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'underline underline-offset-2 font-bold' : null
              }
              to={`/host/reviews`}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
