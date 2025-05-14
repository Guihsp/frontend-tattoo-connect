import axios from 'axios';
import { getToken } from '@/src/utils/storage';

export const api = axios.create({
    baseURL: "https://tattooconnect.duckdns.org",
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    async (config) => {
        const token = await getToken();
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        }
        return config;
    },
    (error) => Promise.reject(error)
);