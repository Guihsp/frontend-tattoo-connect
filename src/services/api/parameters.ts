import { api } from './api';

export const getAllParameters = async () => {
    const response = await api.get('/parameters');
    return response.data;
}

export const createTattooArtistParameter = async (userId: string, parameterId: string, price: number) => {
    try {
        const response = await api.post(`/tattoo-artist-parameters/${userId}`, { parameterId, price });
        return response.data;
    } catch (error) {
        console.error("Error creating tattoo artist parameter:", error);
        throw error; 
    }
}

export const getAllTattooArtistParameters = async (userId: string) => {
    const response = await api.get(`/tattoo-artist-parameters/${userId}`);
    return response.data;
}   

export const updateTattooArtistParameter = async (id: string, parameterId: string, price: number, category: string, name: string) => {
   try {
       const response = await api.patch(`/tattoo-artist-parameters/${id}`, { parameterId, price, category, name });
        return response.data;
    } catch (error) {
        console.error("Error updating tattoo artist parameter:", error);
        throw error; 
    }
}

export const deleteTattooArtistParameter = async (id: string) => {
    try {
        const response = await api.delete(`/tattoo-artist-parameters/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting tattoo artist parameter:", error);
        throw error; 
    }
}