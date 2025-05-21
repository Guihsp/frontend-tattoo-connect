import { api } from "./api";

export interface CreateStudioPayload {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    phone: string;
}

export const createStudio = async (payload: CreateStudioPayload) => {
    console.log('Payload:', payload);
    const response = await api.post('/studios', payload);
    return response.data;
};

export const getStudio = async (studioId: string) => {
    const response = await api.get(`/studios/tattoo-artists/${studioId}/studio`);
    return response.data;
}