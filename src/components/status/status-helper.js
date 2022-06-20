import axios from 'axios';
import { API_SAVE_URL } from '../../helpers/api_urls';

export const start = async (id, lineName, sensor1temp, sensor2temp) => {
  const state = {
    id: id,
    lineName: lineName,
    sensor1temp: sensor1temp,
    sensor2temp: sensor2temp,
    status: 'producing',
    currentProduct: 'Bracket WSH',
    outputRate: 22,
  };
  const response = await axios.post(API_SAVE_URL, state);
};

export const stop = async (id, lineName, sensor1temp, sensor2temp) => {
  const state = {
    id: id,
    lineName: lineName,
    sensor1temp: sensor1temp,
    sensor2temp: sensor2temp,
    status: 'idling',
    currentProduct: 'none',
    outputRate: 0,
  };
  const response = await axios.post(API_SAVE_URL, state);
};
