import axios from 'axios';
import Session from './Session';

const Uri = 'http://192.168.100.21:5000';
/**
 * setAuthToken sets the token in the headers of each call
 * @param {string} token taken from the amplify Aws
 * @returns {any} nothing, just set the value in the defaults
 */
export const axiosInstance = axios.create({
	baseURL: Uri,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	},
});

axiosInstance.interceptors.request.use(
	async (config) => {
		const session = await Session();
		if (session) {
			config.headers.common = { 'Authorization': `Bearer ${session}` };
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(res) => {
		return res;
	},
	async (err) => {
		const originalConfig = err.config;

		if (err.response) {
			// Access Token was expired
			if (err.response.status === 401 && !originalConfig._retry) {
				originalConfig._retry = true;

				try {
					const session = await Session();
					axiosInstance.defaults.headers.common = { 'Authorization': `Bearer ${session}` };

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
	}
);
