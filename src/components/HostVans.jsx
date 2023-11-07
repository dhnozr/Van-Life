import React from 'react';
import { getVanData } from '../VanData';

export default function HostVans() {
  const van = getVanData().splice(0, 3);
  return (
    <>
      <div className="bg-[#FFF7ED]">
        <div className="flex items-center justify-between sm:max-w-xl sm:m-auto px-5 pt-3">
          <h2 className="font-bold text-lg">Your Listed Vans</h2>
          <p>Details</p>
        </div>
        <div className="bg-[#FFF7ED] p-4">
          {van.map(van => (
            <div className="bg-[#FFF7ED]" key={van.id}>
              <div className="grid mb-2 grid-cols-2 gap-5 p-4 sm:grid-cols-1 sm:max-w-lg sm:m-auto sm:mb-5  bg-white w-full">
                <div className="bg-white">
                  <img className="w-44" src={van.imageUrl} alt="" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <h2>{van.name}</h2>
                    <p>${van.price}/day</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
