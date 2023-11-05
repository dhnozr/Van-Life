import React from 'react';

export default function About() {
  return (
    <>
      <div>
        <div>
          <img
            className="w-full object-cover h-[400px]"
            src="image55.jpg"
            alt=""
          />
        </div>
        <div className="text-[#161616] grid gap-4 my-4">
          <h1 className="text-4xl font-bold">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="my-5 bg-[#FFCC8D] p-8">
          <h2 className="text-2xl font-bold mb-6">
            Your destination is waiting. <br /> Your van is ready.
          </h2>
          <button className="bg-black py-3 px-10 text-white rounded-xl">
            Explore our vans
          </button>
        </div>
      </div>
    </>
  );
}
