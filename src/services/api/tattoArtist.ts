import { api } from "./api";

export const updateTattooArtist = async (bio: string) => {
    const response = await api.put('/tattoo-artists/profile', { bio });
    return response.data;
}