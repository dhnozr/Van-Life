import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Pricing() {
  const data = useOutletContext();
  return (
    <div className="flex gap-2 items-center">
      <h4 className="font-bold">Pricing:</h4>
      <span>${data.price}</span>
    </div>
  );
}
