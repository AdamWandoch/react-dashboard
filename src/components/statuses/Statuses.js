import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Status } from '../status/Status';
import './statuses-style.css';

export const Statuses = () => {
  const [data, setData] = useState([]);
  const API_URL = 'http://localhost:5000/factory/v1/getstatus';

  useEffect(() => {
    const getStatuses = async () => {
      const response = await axios.get(API_URL);
      setData(response.data);
    };
    setInterval(() => {
      getStatuses();
    }, 1000);
  }, []);

  return (
    <>
      {data.map((status) => (
        <Status key={status.id} {...status} />
      ))}
    </>
  );
};
