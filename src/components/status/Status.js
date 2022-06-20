import React from 'react';
import './status-style.css';

export const Status = ({
  id,
  lineName,
  sensor1temp,
  sensor2temp,
  status,
  currentProduct,
  outputRate,
}) => {
  return (
    <div className='status'>
      <p>
        [{lineName}] {status}: {currentProduct} @ {outputRate} units per second
      </p>
      <p>Sensors: {sensor1temp}°C | {sensor2temp}°C</p>
    </div>
  );
};
