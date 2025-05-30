import { api } from "./api";

export const updateTattooArtist = async (bio: string, cpf: string) => {
    console.log('Updating tattoo artist bio:', bio + ', CPF:', cpf);
   try {
        const response = await api.put('/tattoo-artists/profile', { bio, cpf });
        return response.data;
    } catch (error) {
        console.error('Error updating tattoo artist bio:', error);
        throw error;
    }
}

export const getTattooArtistProfile = async (id: string) => {
    const response = await api.get(`/tattoo-artists/${id}`);
    return response.data;
}

export const getTattooArtistContact = async (id: string) => {
    const response = await api.get(`/tattoo-artists/${id}/contact`);
    return response.data;
}

export const uploadTattooArtistPhoto = async (formData: FormData) => {
    try {
        const response = await api.post('/tattoo-artists/upload-profile-image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading tattoo artist photo:', error);
        throw error;
    }
}