import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 min-h-[calc(100vh-104px)]">
      <h1 className="text-xl md:text-2xl">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to={`/`}>
        <button className="bg-black text-white px-6 py-1 text-2xl rounded-md">
          Return Home
        </button>
      </Link>
    </div>
  );
}
