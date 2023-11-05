import React from 'react';
import heroBanner from '../images/image54.jpg';

export default function Home() {
  return (
    <>
      <div className="bg-hero-banner h-screen max-h-[calc(100vh-104px)] bg-no-repeat bg-center bg-cover">
        <div className="flex h-full flex-col items-center justify-center gap-10 text-white">
          <h1 className="text-4xl font-extrabold">
            You got the travel plans, we got the travel vans.
          </h1>
          <h2>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road tri
          </h2>
          <button className="bg-[#FF8C38] py-3 px-8  rounded-md">
            Find your van
          </button>
        </div>
      </div>
    </>
  );
}
