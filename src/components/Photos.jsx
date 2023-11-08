import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Photos() {
  const data = useOutletContext();
  return (
    <div className="text-2xl">
      <img className="w-24" src={data.imageUrl} alt="" />
    </div>
  );
}
