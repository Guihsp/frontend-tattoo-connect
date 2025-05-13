import axios from 'axios';

export const api = axios.create({
    baseURL: "http://http://3.140.210.49/",
    headers: {
        'Content-Type': 'application/json',
    },
});