import { api } from './api';

export const getUser = async () => {
    const response = await api.get('/users/me');
    return response.data;
}

export const updateUser = async (name: string, phone: string) => {
    const response = await api.put('/users/me', { name, phone });
    return response.data;
}

export const deleteUser = async () => {
    const response = await api.delete('/users/me');
    return response.data;
}