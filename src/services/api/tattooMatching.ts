import { api } from './api';

interface CreateTattooMatchingPayload {
    parametersIds: string[];
    latitude: number;
    longitude: number;
    maxDistance: number;
    priceOrder: 'asc' | 'desc';
    ratingOrder: 'asc' | 'desc';
    distanceOrder: 'asc' | 'desc';
}

export const getTattooMatching = async (payload: CreateTattooMatchingPayload) => {
    const response = await api.get('/tattoo-matching', {
        params: {
            parametersIds: payload.parametersIds,
            latitude: payload.latitude,
            longitude: payload.longitude,
            maxDistance: payload.maxDistance,
            priceOrder: payload.priceOrder,
            ratingOrder: payload.ratingOrder,
            distanceOrder: payload.distanceOrder
        }
    });
    return response.data;
}