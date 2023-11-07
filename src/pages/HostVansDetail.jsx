import React from 'react';
import { useEffect, useState } from 'react';
import { getVanData } from '../VanData';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { motion as m, spring } from 'framer-motion';

export default function HostVansDetail() {
  const [van, setVan] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const selectedVan = getVanData().find(van => van.id === id);

    if (selectedVan) {
      setVan(selectedVan);
    }
  }, [id]);
  return (
    <>
      <div>
        <NavLink to={`..`} relative="path">
          <span className="block my-4 underline underline-offset-4">
            Back to all Vans
          </span>
        </NavLink>
        <div className="md:flex items-center gap-4 mb-[59px]">
          <div>
            <m.img
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: 'spring',
                delay: 0.3,
                stiffness: 30,
              }}
              className="md:w-full   md:object-contain "
              src={van?.imageUrl}
              alt=""
            />
          </div>
          <div className="my-4 md:mx-4">
            <nav>
              <ul className="flex gap-6 mb-4">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'underline underline-offset-2' : null
                    }
                    end
                    to={`.`}
                  >
                    Details
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'underline underline-offset-2' : null
                    }
                    to={`pricing`}
                  >
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'underline underline-offset-2' : null
                    }
                    to={`photos`}
                  >
                    Photos
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Outlet context={van} />
          </div>
        </div>
      </div>
    </>
  );
}
