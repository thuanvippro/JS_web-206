import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:3003',
  headers: {
    'Content-Type': 'application/json',
  },
});
export const axiosClient1 = axios.create({
  baseURL: 'http://localhost:3002',
  headers: {
    'Content-Type': 'application/json',
  },
});