import React, { useEffect, useState } from 'react';
import { getVanData } from '../VanData';
import { Link, useSearchParams, useLoaderData } from 'react-router-dom';
import { motion as m } from 'framer-motion';

export function loader() {
  return getVanData();
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');
  const van = useLoaderData();

  const displayedVans = typeFilter
    ? van.filter(van => van.type === typeFilter)
    : van;

  const updateSearchParams = (key, value) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (value === null) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, value);
    }
    setSearchParams(newSearchParams);
  };

  return (
    <>
      <div>
        <div className="flex gap-2 my-4 flex-wrap">
          <button
            onClick={() => updateSearchParams('type', 'simple')}
            className={`bg-[#FFEAD0] px-4 py-1 rounded-md ${
              typeFilter === 'simple' ? 'bg-black text-white' : null
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => updateSearchParams('type', 'rugged')}
            className={`bg-[#FFEAD0] px-4 py-1 rounded-md ${
              typeFilter === 'rugged' ? 'bg-black text-white' : null
            }`}
          >
            Rugged
          </button>
          <button
            onClick={() => updateSearchParams('type', 'luxury')}
            className={`bg-[#FFEAD0] px-4 py-1 rounded-md ${
              typeFilter === 'luxury' ? 'bg-black text-white' : null
            }`}
          >
            Luxury
          </button>
          {typeFilter && (
            <button
              onClick={() => updateSearchParams('type', null)}
              className="underline underline-offset-2 text-xs ml-auto sm:ml-6"
            >
              Clear filter
            </button>
          )}
        </div>
        <div className="grid grid-cols-1  gap-4 items-center mb-4 sm:grid-cols-2 md:grid-cols-3  ">
          {displayedVans?.map(van => (
            <div key={van.id}>
              <div>
                <Link
                  to={`${van.id}`}
                  state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter,
                  }}
                >
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
                  ${van.price}/ <br /> day
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
      </div>
    </>
  );
}
