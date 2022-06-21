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
  const [productField, setProductField] = useState(currentProduct);
  const [rate, setRate] = useState(outputRate);
  const warningTemp = 24;

  const handleStart = () => {
    setIsProducing(true);
    start(id, lineName, sensor1temp, sensor2temp, productField, rate);
  };

  const handleStop = () => {
    setIsProducing(false);
    setProductField('none');
    setRate(0);
    stop(id, lineName, sensor1temp, sensor2temp);
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
      <label htmlFor='product'>Product:&nbsp;</label>
      <select
        name='product'
        id='product'
        onChange={(e) => {
          setProductField(e.target.value);
        }}
      >
        <option value={currentProduct}>{currentProduct}</option>
        {products.map((product, index) => (
          <option key={index} value={product}>
            {product}
          </option>
        ))}
      </select>
      <label htmlFor='output-rate'>Output&nbsp;rate:</label>
      <input
        type='number'
        name='output-rate'
        id='output-rate'
        max={1000}
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <p className='sensor'>Sensor 1: {sensor1temp}°C</p>
      <p className='sensor'>Sensor 2: {sensor2temp}°C</p>
    </div>
  );
};

const Failure = ({ isFailure }) => {
  return (
    <p className='failure top-warning'>{isFailure ? 'failure' : 'high temp'}</p>
  );
};
