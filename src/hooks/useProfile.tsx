import { useEffect, useState } from "react";
import { getTattooArtistProfile } from "@/src/services/api/tattoArtist";
import { useAuth } from "@/src/contexts/AuthContext";

export function useProfile(tattooArtistId?: string) {
    const { user } = useAuth();
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const id = tattooArtistId || user?.id;
            if (!id) return;
            setLoading(true);
            setError(null);
            try {
                const data = await getTattooArtistProfile(id);
                setProfile(data);
            } catch (e) {
                setError("Erro ao carregar perfil. Tente novamente mais tarde. ");
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [tattooArtistId, user?.id]);

    return { profile, loading, error };
}