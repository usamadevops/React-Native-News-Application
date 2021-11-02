import axios from 'axios';
import Session from './Session';

const Uri = 'https://newsapi.org/v2/';
/**
 * setAuthToken sets the token in the headers of each call
 * @param {string} token taken from the amplify Aws
 * @returns {any} nothing, just set the value in the defaults
 */
export const axiosInstance = axios.create({
  baseURL: Uri,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    const APIKEY = '68b18ea87f8a45f5984bb9f135dcdf68';

    config.headers.common = {Authorization: ` ${APIKEY}`};

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    const originalConfig = err.config;

    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const session = await Session();
          axiosInstance.defaults.headers.common = {
            Authorization: `Bearer ${session}`,
          };

          return axiosInstance(originalConfig);
        } catch (_error) {
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data);
          }

          return Promise.reject(_error);
        }
      }

      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }

    return Promise.reject(err);
  },
);
