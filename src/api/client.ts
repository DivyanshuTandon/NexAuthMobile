import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://firstrn-backend.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
