import React, { useState } from 'react';
import { useEffect } from 'react';
import { getVanData } from '../VanData';
import { useParams } from 'react-router-dom';

export default function VanDetailPage() {
  const [van, setVan] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const selectedVan = getVanData().find(van => van.id === id);

    if (selectedVan) {
      setVan(selectedVan);
    }
  }, [id]);
  console.log(van);

  return (
    <>
      <div>
        <div>
          <img src={van?.imageUrl} alt="" />
        </div>
        <div>
          <button
            className={`${
              (van.type === 'simple' && 'bg-[#E17654]') ||
              (van.type === 'luxury' && 'bg-[#161616]') ||
              (van.type === 'rugged' && 'bg-[#115E59]')
            } text-[#FFEAD0] py-1 px-6 rounded-md md:py-2 md:px-8 `}
          >
            {van?.type}
          </button>
        </div>
        <div>
          <h2>{van?.name}</h2>
          <p>{van?.price}/day</p>
          <p>{van?.description}</p>
        </div>
      </div>
    </>
  );
}
