import { api } from './api';

interface CreateTattooMatchingPayload {
    parameterIds: any;
    latitude: number;
    longitude: number;

    priceOrder: 'asc' | 'desc';
    ratingOrder: 'asc' | 'desc';
    distanceOrder: 'asc' | 'desc';
}

export const getTattooMatching = async (payload: CreateTattooMatchingPayload) => {
    const params = {
        ...payload,
        parameterIds: payload.parameterIds.join(',')
    };
    console.log("Parâmetros enviados:", params);
    try {
        const response = await api.get('/tattoos/match', {params});
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar tatuadores:", error);
        throw error;
    }
}