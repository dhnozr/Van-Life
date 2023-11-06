import React, { useState } from 'react';
import { useEffect } from 'react';
import { getVanData } from '../VanData';
import { useParams, Link } from 'react-router-dom';

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
        <Link to={`..`} relative="path">
          <span className="block my-4 underline underline-offset-4">
            Back to all Vans
          </span>
        </Link>
        <div>
          <img
            className="md:w-full md:h-[600px] md:object-cover md:object-left-bottom "
            src={van?.imageUrl}
            alt=""
          />
        </div>
        <div className="my-4">
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
        <div className="flex flex-col gap-4 mb-4">
          <h2 className="text-xl font-bold">{van?.name}</h2>
          <p className="font-bold text-xl">
            {van?.price}
            <span className="font-thin">/day</span>
          </p>
          <p>{van?.description}</p>
        </div>
      </div>
    </>
  );
}
