import React from 'react';
import { getVanData } from '../VanData';

export default function Dashboard() {
  const van = getVanData().splice(0, 3);
  console.log(van);
  return (
    <>
      <div>
        <div className="flex flex-col gap-4 bg-[#FFEAD0] p-3">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <div className="flex justify-between text-[#4D4D4D] ">
            <p>
              Income last{' '}
              <span className="underline underline-offset-4 text-[#363636d0]">
                30 days
              </span>
            </p>
            <p>Details</p>
          </div>
          <h3 className="text-3xl font-extrabold">$2,260</h3>
        </div>
        <div className="flex justify-between bg-[#FFDDB2] py-8 px-3">
          <h2 className="font-bold text-lg">Review Score </h2>

          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
            >
              <path
                d="M9.30123 0.843597C9.64795 -0.117224 11.0068 -0.117225 11.3535 0.843596L13.0595 5.57118C13.2156 6.0036 13.6259 6.2918 14.0856 6.2918H19.3421C20.4264 6.2918 20.8467 7.70205 19.9393 8.29562L15.8905 10.9443C15.4675 11.221 15.29 11.7521 15.4615 12.2275L17.0532 16.6383C17.4087 17.6236 16.3064 18.495 15.4298 17.9215L10.9246 14.9743C10.5618 14.737 10.0929 14.737 9.73015 14.9743L5.22489 17.9215C4.34834 18.495 3.24599 17.6236 3.60154 16.6383L5.19321 12.2275C5.36479 11.7521 5.18728 11.221 4.76429 10.9443L0.715395 8.29562C-0.191962 7.70205 0.228344 6.2918 1.31261 6.2918H6.56909C7.0288 6.2918 7.43919 6.0036 7.59523 5.57118L9.30123 0.843597Z"
                fill="#FF8C38"
              />
            </svg>
            5.0<span>/5</span>
          </p>
          <p>Details</p>
        </div>
        {/* Listed Vans */}
        <div className="bg-[#FFF7ED]">
          <div className="flex items-center justify-between px-5 pt-3">
            <h2 className="font-bold text-lg">Your Listed Vans</h2>
            <p>Details</p>
          </div>
          <div className="bg-[#FFF7ED] p-4">
            {van.map(van => (
              <div className="bg-[#FFF7ED]" key={van.id}>
                <div className="grid mb-2 grid-cols-2 gap-5 p-4 bg-white w-full">
                  <div className="bg-white">
                    <img className="w-44" src={van.imageUrl} alt="" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <h2>{van.name}</h2>
                      <p>${van.price}/day</p>
                    </div>
                    <p>Edit</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
