import axios from 'axios';

import { AppError } from '~/ultils/AppError';

const api = axios.create({
  baseURL: 'http://192.168.0.0:3333',
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    //verificando se o backend tem essa menssagem de erro pronta
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(new AppError(error));
    }
  }
);

export { api };
