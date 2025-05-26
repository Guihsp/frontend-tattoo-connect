import { api } from "./api";

export const submitImageForPortfolio = async (file: string, description: string) => {
    const response = await api.post('/portfolio', { file, description });
    return response.data;
}

export const getPortfolio = async (id: string) => {
    const response = await api.get(`/portfolio/tattoo-artists/${id}/portfolio`);
    return response.data;
}

export const deletePortfolioImage = async (id: string) => {
    const response = await api.delete(`/portfolio/${id}`);
    return response.data;
}
