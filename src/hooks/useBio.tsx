import { useState } from "react";
import { updateTattooArtist} from "@/src/services/api/tattoArtist";
import { router } from "expo-router";


export const useBioRegister = () => {
    const [bio, setBio] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const validate = () => {
        if (!bio) {
            setError("Preecha a sua bio.")
            return false;
        }
        if (bio.length > 255) {
            setError("A bio ter no máximo 2555 caracteres.");
            return false;
        }
        setError('');
        return true;
    }

    const handleBioRegister = async () => {
        if (!validate()) return;
        setLoading(true);
        try {
            const response = await updateTattooArtist(bio);
            router.replace('/(tattoo-artist)')
        } catch (error) {
            setLoading(false);
            setError("Erro ao atualizar a bio.");
            console.error("Error updating bio:", error);
        }
    }

    return {
        bio,
        setBio,
        error,
        loading,
        handleBioRegister,
    }
}