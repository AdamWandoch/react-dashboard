import React, { useEffect, useState } from 'react';
import { start, stop } from './status-helper';
import { products } from '../../helpers/product-list';
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
  const [isProducing, setIsProducing] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const warningTemp = 24;

  const handleStart = () => {
    start(id, lineName, sensor1temp, sensor2temp);
    setIsProducing(true);
  };

  const handleStop = () => {
    stop(id, lineName, sensor1temp, sensor2temp);
    setIsProducing(false);
  };

  useEffect(() => {
    status === 'producing' ? setIsProducing(true) : setIsProducing(false);
    status === 'failure' ? setIsFailure(true) : setIsFailure(false);
  }, [status]);

  return (
    <div className={isProducing ? 'status' : 'status inactive'}>
      {(sensor1temp > warningTemp || sensor2temp > warningTemp) && (
        <Failure isFailure={isFailure} />
      )}
      <div className='buttons'>
        <button
          className='btn'
          onClick={() => {
            handleStart();
          }}
        >
          start
        </button>
        <button
          className='btn'
          onClick={() => {
            handleStop();
          }}
        >
          stop
        </button>
      </div>
      <span className='line-name'>{lineName}</span>
      <span className={isFailure ? 'status-span failure' : 'status-span'}>
        Status: {status.toUpperCase()}
      </span>
      {/* implement controlled dropdown for product selection */}
      <span>Product: {currentProduct}</span>
      {/* implement controlled input field for output rate */}
      <span>Output: {outputRate} units/s</span>
      <p>
        Sensors: {sensor1temp}°C | {sensor2temp}°C
      </p>
    </div>
  );
};

const Failure = ({ isFailure }) => {
  return (
    <p className='failure top-warning'>
      {isFailure ? 'failure' : 'high temp'}
    </p>
  );
};
