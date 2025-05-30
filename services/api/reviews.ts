import { api } from "./api";

export const createReview = async (tattooArtistId: string, rating: number, comment: string) => {
    const response = await api.post('/reviews', { tattooArtistId, rating, comment });
    return response.data;
}

export const getReviewsByArtist = async (id: string) => {
    const response = await api.get(`/reviews/tattoo-artists/${id}/reviews`);    
    return response.data;
}