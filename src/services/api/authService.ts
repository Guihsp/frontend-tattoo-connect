import { api } from './api';

export const loginRequest = async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    console.log('Login response:', response.data);
    return response.data;
}

export const registerRequest = async (name: string, email: string, password: string, phone: string, type: string) => {
    const response = await api.post('/auth/register', { name, email, password, phone, type });
    return response.data;
}