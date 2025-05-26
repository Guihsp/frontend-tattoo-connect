import { api } from "./api";

export const updateTattooArtist = async (bio: string) => {
    const response = await api.put('/tattoo-artists/profile', { bio });
    return response.data;
}

export const getTattooArtistProfile = async (id: string) => {
    const response = await api.get(`/tattoo-artists/${id}`);
    return response.data;
}

export const getTattooArtistContact = async (id: string) => {
    const response = await api.get(`/tattoo-artists/${id}/contact`);
    return response.data;
}

export const getTattooArtists = async (style: string, latitude: number, longitude: number, orderBy: string, page: number, limit: number) => {
    const response = await api.get('/tattoo-artists', {
        params: {
            style,
            latitude,
            longitude,
            orderBy,
            page,
            limit
        }
    });
    return response.data;
}