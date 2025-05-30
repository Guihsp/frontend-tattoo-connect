import { useState, useEffect } from "react";
import { updateTattooArtist, getTattooArtistProfile } from "@/services/api/tattoArtist";
import { router } from "expo-router";
import { useAuth } from "@/contexts/AuthContext"; 
export const useBioRegister = () => {
    const [bio, setBio] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const fetchBio = async () => {
            if (!user?.id) return;
            setLoading(true);
            try {
                const profile = await getTattooArtistProfile(user.id);
                setBio(profile.bio || '');
            } catch (err) {
                setError("");
            } finally {
                setLoading(false);
            }
        };
        fetchBio();
    }, [user?.id]);

    const validate = () => {
        if (!bio) {
            setError("Preecha a sua bio.");
            return false;
        }
        if (bio.length > 255) {
            setError("A bio deve ter no máximo 255 caracteres.");
            return false;
        }
        setError('');
        return true;
    };

    const handleBioRegister = async () => {
        if (!validate()) return;
        setLoading(true);
        try {
            await updateTattooArtist(bio);
            router.push("/(tattoo-artist)");
        } catch (error) {
            setError("Erro ao atualizar a bio.");
            console.error("Error updating bio:", error);
        } finally {
            setLoading(false);
        }
    };

    return {
        bio,
        setBio,
        error,
        loading,
        handleBioRegister,
    };
};