import { api } from './api';

export const getAllParameters = async () => {
    const response = await api.get('/parameters');
    return response.data;
}

export const createTattooArtistParameter = async (userId: string, parameterId: string, price: number) => {
    const response = await api.post(`/tattoo-artist-parameters/${userId}`, { parameterId, price });
    return response.data;
}

export const getAllTattooArtistParameters = async (userId: string) => {
    const response = await api.get(`/tattoo-artist-parameters/${userId}`);
    return response.data;
}

export const updateTattooArtistParameter = async (id: string, parameterId: string, price: number, category: string, name: string) => {
    const response = await api.put(`/tattoo-artist-parameters/${id}`, { parameterId, price, category, name });
    return response.data;
}

export const deleteTattooArtistParameter = async (id: string) => {
    const response = await api.delete(`/tattoo-artist-parameters/${id}`);
    return response.data;
}