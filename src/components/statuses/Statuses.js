import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Status } from '../status/Status';
import { API_GET_URL } from '../../helpers/api_urls';
import './statuses-style.css';
import { Spinner } from '../spinner/Spinner';

export const Statuses = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getStatuses = async () => {
      const response = await axios.get(API_GET_URL);
      setData(response.data);
      setIsLoading(false);
    };
    setInterval(() => {
      getStatuses();
    }, 1000);
  }, []);

  return (
    <div className='statuses-wrapper'>
      {isLoading && <Spinner />}
      {data.map((status) => (
        <Status key={status.id} {...status} />
      ))}
    </div>
  );
};
