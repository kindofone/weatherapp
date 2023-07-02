import React from 'react'
import './LocationSelector.css';
import { useLoaderData, useNavigate } from 'react-router-dom';

export const locations = [{
  id: "tel-aviv",
  name: "Tel Aviv",
  latitude: 32.08,
  longitude: 34.78,
},{
  id: "haifa",
  name: "Haifa",
  latitude: 32.82,
  longitude: 34.99,
},{
  id: "eilat",
  name: "Eilat",
  latitude: 29.56,
  longitude: 34.95,
},
];

export function getCity(id) {
  return locations.find(l => l.id === id);
}

export default function LocationSelector() {
  const navigate = useNavigate();
  const cityId = useLoaderData();
  return (
    <select value={cityId} onChange={e => navigate(`/city/${e.target.value}`)}>
      {locations.map((location) => {
        return (
          <option 
            key={location.name} 
            value={location.id}>
            {location.name}
          </option>
        );
      })}
    </select>
  )
}
