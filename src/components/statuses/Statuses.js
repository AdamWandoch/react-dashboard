import React from 'react';
import { useFetcher } from '../../helpers/useFetcher';
import './statuses-style.css';

export const Statuses = () => {

  // useFetcher to be implemented to get data from api
  const { data } = useFetcher();

  return <>Statuses</>;
};
