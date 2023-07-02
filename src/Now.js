import React from 'react'
import './Now.css';

export default function Now({temperature}) {
  return (
    <div className='now'>{temperature}°</div>
  )
}
