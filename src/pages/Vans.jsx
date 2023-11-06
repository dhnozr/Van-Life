import React, { useEffect, useState } from 'react';
import { getVanData } from '../VanData';

export default function Vans() {
  const [van, setVan] = useState(getVanData());
  console.log(van);

  return (
    <>
      <div className="grid grid-cols-1  gap-4 items-center mb-4 sm:grid-cols-2 md:grid-cols-3  ">
        {van.map(van => (
          <div key={van.id}>
            <div>
              <img
                className="max-h-96 w-full object-cover"
                src={van.imageUrl}
                alt=""
              />
            </div>
            <div className="flex mt-3 justify-between">
              <h3>{van.name}</h3>
              <p>
                {van.price}/ <br /> day
              </p>
            </div>
            <button
              className={`${
                (van.type === 'simple' && 'bg-[#E17654]') ||
                (van.type === 'luxury' && 'bg-[#161616]') ||
                (van.type === 'rugged' && 'bg-[#115E59]')
              } text-[#FFEAD0] py-1 px-6 rounded-md md:py-2 md:px-8 `}
            >
              {van.type}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
