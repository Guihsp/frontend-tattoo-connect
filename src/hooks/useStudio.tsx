import { useState } from 'react';
import { createStudio } from '@/src/services/api/studio';
import * as Location from 'expo-location';
import { router } from 'expo-router';

export const useStudio = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        if (!name || !address || !phone) {
            setError('Preencha todos os campos.');
            return false;
        }
        return true;
    };

    const handleRegisterStudio = async () => {
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
            console.log('Geocode results:', results);
            if (!results.length) {
                setError('Endereço não encontrado.');
                setLoading(false);
                return;
            }
            const { latitude, longitude } = results[0];

            await createStudio({
                name,
                address,
                latitude,
                longitude,
                phone,
            });
            setLatitude(latitude.toString());
            setLongitude(longitude.toString());

            router.replace('/(tattoo-artist)/studioManagement')            
        } catch (err: any) {
            setError('Erro ao cadastrar estúdio. Tente novamente.');
            console.error('Error creating studio:', err);
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
        handleRegisterStudio,
        error,
        loading,
    };
};