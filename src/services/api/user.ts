import { api } from './api';

export const getUser = async () => {
    const response = await api.get('/users/me');
    console.log('User data:', response.data);
    return response.data;
}