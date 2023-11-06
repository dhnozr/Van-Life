import React, { useState } from 'react';
import { useEffect } from 'react';
import { getVanData } from '../VanData';
import { useParams, Link } from 'react-router-dom';
import { motion as m, spring } from 'framer-motion';

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
              delay: 0.6,
              stiffness: 30,
            }}
            className="md:w-full md:h-[600px] md:object-cover md:object-left-bottom "
            src={van?.imageUrl}
            alt=""
          />
        </div>
        <div className="my-4">
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
              delay: 0.7,
              type: 'spring',
            }}
            className={`${
              (van.type === 'simple' && 'bg-[#E17654]') ||
              (van.type === 'luxury' && 'bg-[#161616]') ||
              (van.type === 'rugged' && 'bg-[#115E59]')
            } text-[#FFEAD0] py-1 px-6 rounded-md md:py-2 md:px-8 `}
          >
            {van?.type}
          </m.button>
        </div>
        <m.div
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            stiffness: 40,
            type: 'spring',
            delay: 0.6,
          }}
          className="flex flex-col gap-4 mb-4"
        >
          <h2 className="text-xl font-bold">{van?.name}</h2>
          <p className="font-bold text-xl">
            {van?.price}
            <span className="font-thin">/day</span>
          </p>
          <p>{van?.description}</p>
        </m.div>
      </div>
    </>
  );
}