import {axiosInstance} from './utils/setAxiosHeader';

// import Config from "react-native-config";
const a = 'http://192.168.100.21:5000';
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getService = url => {
  return axiosInstance.get(url);
};

export const postService = (url, data) => {
  return axiosInstance.post(a + url, JSON.stringify(data), axiosConfig);
};

export const putService = (url, data, id) => {
  return axiosInstance.put(a + url + id, data);
};

export const deleteService = (url, id, action) => {
  if (id) {
    return axiosInstance.delete(a + url + action + id);
  } else {
    return axiosInstance.delete(a + url + action);
  }
};

export const getServiceById = (action, id) => {
  return axiosInstance.get(a + action + id);
};
