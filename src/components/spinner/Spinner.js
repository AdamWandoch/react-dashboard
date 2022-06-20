import React from 'react';
import spinner from '../../img/spinner.svg';
import './spinner-style.css';

export const Spinner = () => {
  return (
    <div className='spinner-wrapper'>
      <img src={spinner} className='spinner' alt='Loading animation' />
    </div>
  );
};
