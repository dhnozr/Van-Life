import React, { useEffect, useState } from 'react';
import { getVanData } from '../VanData';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';

export default function Vans() {
  const [van, setVan] = useState(getVanData());
  console.log(van);

  return (
    <>
      <div className="grid grid-cols-1  gap-4 items-center mb-4 sm:grid-cols-2 md:grid-cols-3  ">
        {van.map(van => (
          <div key={van.id}>
            <div>
              <Link to={`/vans/${van.id}`}>
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
                  className="max-h-96 w-full object-cover"
                  src={van.imageUrl}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex mt-3 justify-between">
              <h3>{van.name}</h3>
              <p>
                {van.price}/ <br /> day
              </p>
            </div>
            <m.button
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                x: 10,
                opacity: 1,
              }}
              transition={{
                stiffness: 30,
                delay: 0.5,
                type: 'spring',
              }}
              className={`${
                (van.type === 'simple' && 'bg-[#E17654]') ||
                (van.type === 'luxury' && 'bg-[#161616]') ||
                (van.type === 'rugged' && 'bg-[#115E59]')
              } text-[#FFEAD0] py-1 px-6 rounded-md md:py-2 md:px-8 `}
            >
              {van.type}
            </m.button>
          </div>
        ))}
      </div>
    </>
  );
}
