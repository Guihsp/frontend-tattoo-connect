import { useState, useEffect } from 'react';
import { createStudio, getStudio, updateStudio } from '@/services/api/studio';
import * as Location from 'expo-location';
import { router } from 'expo-router';

export const useStudio = (tattooArtistId?: string) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [studioId, setStudioId] = useState<string | null>(null);

    useEffect(() => {
        if (!tattooArtistId) return;
        (async () => {
            try {
                setLoading(true);
                const studio = await getStudio(tattooArtistId);
                if (studio) {
                    setStudioId(studio.id);
                    setName(studio.name || '');
                    setAddress(studio.address || '');
                    setPhone(studio.phone || '');
                    setLatitude(studio.latitude?.toString() || '');
                    setLongitude(studio.longitude?.toString() || '');
                }
            } catch (err) {} finally {
                setLoading(false);
            }
        })();
    }, [tattooArtistId]);

    const validate = () => {
        if (!name || !address || !phone) {
            setError('Preencha todos os campos.');
            return false;
        }
        return true;
    };

    const handleSaveStudio = async () => {
        setError(null);
        if (!validate()) return;
        setLoading(true);
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permissão de localização negada.');
                setLoading(false);
                return;
            }

            const results = await Location.geocodeAsync(address);
            if (!results.length) {
                setError('Endereço não encontrado.');
                setLoading(false);
                return;
            }
            const { latitude, longitude } = results[0];

            if (studioId) {
                await updateStudio(studioId, {
                    name,
                    address,
                    latitude,
                    longitude,
                    phone,
                });
            } else {
                await createStudio({
                    name,
                    address,
                    latitude,
                    longitude,
                    phone,
                });
            }
            setLatitude(latitude.toString());
            setLongitude(longitude.toString());

            alert('Estúdio salvo com sucesso!');
        } catch (err: any) {
            setError('Erro ao salvar estúdio. Tente novamente.');
            console.error('Error saving studio:', err);
        } finally {
            setLoading(false);
        }
    };

    return {
        name,
        setName,
        address,
        setAddress,
        latitude,
        setLatitude,
        longitude,
        setLongitude,
        phone,
        setPhone,
        handleSaveStudio,
        error,
        loading,
        studioId,
    };
};