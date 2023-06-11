import React from 'react'
import './LocationSelector.css';

export const locations = [{
  name: "Tel Aviv",
  latitude: 32.08,
  longitude: 34.78,
},{
  name: "Haifa",
  latitude: 32.82,
  longitude: 34.99,
},{
  name: "Eilat",
  latitude: 29.56,
  longitude: 34.95,
},
];

export default function LocationSelector(props) {
  const {onLocationChange} = props;
  return (
    <select onChange={e => onLocationChange(e.target.value)}>
      {locations.map((location, index) => <option value={index}>{location.name}</option>)}
    </select>
  )
}
