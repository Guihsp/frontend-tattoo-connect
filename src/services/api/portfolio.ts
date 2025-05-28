import { api } from "./api";

export const submitImageForPortfolio = async (fileUri: string, description: string) => {
    const formData = new FormData();
    formData.append("description", description);

    formData.append("file", {
        uri: fileUri,
        name: "portfolio.jpg",
        type: "image/jpeg" 
    } as any);

    const response = await api.post('/portfolio', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};

export const getPortfolio = async (id: string) => {
    const response = await api.get(`/portfolio/tattoo-artists/${id}/portfolio`);
    return response.data;
}

export const deletePortfolioImage = async (id: string) => {
    const response = await api.delete(`/portfolio/${id}`);
    return response.data;
}
