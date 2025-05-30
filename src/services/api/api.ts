import axios from 'axios';
import { getToken } from '@/src/utils/storage';

export const api = axios.create({
    baseURL: "https://f64f-2804-7f0-2f-66e-e0ca-2323-d827-6177.ngrok-free.app/",
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    async (config) => {
        const token = await getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);  