import React, { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Details() {
  const data = useOutletContext();
  console.log(data);
  return (
    <div>
      <div className="flex gap-2">
        <h4 className="font-bold">Name:</h4>
        <span>{data.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <h4 className="font-bold">Category:</h4>
        <span>{data.type}</span>
      </div>
      <div className="flex gap-2">
        <h4 className="font-bold">Description:</h4>
        <span>{data.description}</span>
      </div>
    </div>
  );
}
