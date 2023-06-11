import React from 'react'
import './Day.css';

export default function Day(props) {
  const {date, temperature} = props;
  return (
    <div className='day'>
      <div>{date}</div>
      <div>{temperature}</div>
    </div>
  )
}
