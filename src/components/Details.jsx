import React, { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Details() {
  const data = useOutletContext();
  console.log(data);
  return (
    <div>
      <div className="flex gap-2">
        <h4>Name:</h4>
        <span>{data.name}</span>
      </div>
      <div className="flex gap-2">
        <h4>Description:</h4>
        <span>{data.description}</span>
      </div>
    </div>
  );
}
