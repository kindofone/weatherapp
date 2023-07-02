import React from 'react'
import './Day.css';

export default function Day(props) {
  const {date, temperature} = props;
  const factor = 180 * Math.e^(-0.1*temperature);
  // console.log(factor);
  const rowBgColorValue = `hsl(${factor}, 50%, 50%)`;
  return (
    <div className='day-row' style={{backgroundColor: rowBgColorValue}}>
      <div>{date}</div>
      <div>{temperature}°</div>
    </div>
  )
}
