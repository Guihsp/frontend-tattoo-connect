import { useEffect } from 'react';
import { createContext, useContext, useState, ReactNode } from 'react';
import { loginRequest, registerRequest } from '@/services/api/auth';
import { saveToken, removeToken, getToken } from '@/utils/storage';
import { useRouter } from 'expo-router';
import { getUser } from '@/services/api/user';
import { User, UserRole } from '@/types/User';
import * as Location from 'expo-location';
import { updateTattooArtist } from '@/services/api/tattoArtist';
import { createStudio } from '@/services/api/studio';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface AuthContextData {
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (name: string, email: string, password: string, phone: string, type: string, cpf: string, bio: string, studioAddress: string, studioName: string, studioPhone: string) => Promise<void>;
    handleSignOut: () => Promise<void>;
    token: string | null;
    user: User | null;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    

    const router = useRouter();

    useEffect(() => {
        const loadUser = async () => {
            const storedToken = await getToken();
            console.log('Stored token:', storedToken);
            if (storedToken) {
                try {
                    const userData = await getUser();
                    console.log('User data:', userData);
                    setUser({
                        id: userData.id,
                        name: userData.name,
                        phone: userData.phone,
                        email: userData.email,
                        role: userData.type as UserRole,
                        token: storedToken,
                    });
                } catch (error) {
                    await removeToken();
                }
            }

            setIsLoading(false);
        };
        loadUser();
    }, []);

    const signIn = async (email: string, password: string) => {
        try {
            const response = await loginRequest(email, password);
            const accessToken = response.access_token;
            setToken(accessToken);
            await saveToken(accessToken);

            const userData = await getUser();

            const mappedUser: User = {
                id: userData.id,
                name: userData.name,
                phone: userData.phone,
                email: userData.email,
                role: userData.type, 
                token: accessToken,
            };
            setUser(mappedUser);
            console.log('User data after sign-up:', userData);

            if (userData.type === 'CLIENT') {
                router.replace('/(client)');
            } else if (userData.type === 'TATTOO_ARTIST') {
                // ...atualiza bio, cria estúdio...
                await AsyncStorage.setItem('showPremiumModal', 'true');
                router.replace('/(tattoo-artist)');
            }
        } catch (error) {
            throw new Error('E-mail ou senha incorretos.');
        }
    };

    const signUp = async (name: string, email: string, password: string, phone: string, type: string, cpf: string, bio: string, studioAddress: string, studioName: string, studioPhone: string) => {
        try {
            const response = await registerRequest(name, email, password, phone, type);
            const accessToken = response.access_token;
            setToken(accessToken);
            await saveToken(accessToken);

            const userData = await getUser();

            const mappedUser: User = {
                id: userData.id,
                name: userData.name,
                phone: userData.phone,
                email: userData.email,
                role: userData.type,
                token: accessToken,
            };
            setUser(mappedUser); 

            console.log('User data after sign-up:', userData);

            if (userData.type === 'CLIENT') {
                router.replace('/(client)');
            } else if (userData.type === 'TATTOO_ARTIST') {
                console.log("aqui")
                console.log('Bio:', bio);
                console.log('CPF:', cpf);
                await updateTattooArtist(bio, cpf);

                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setError('Permissão de localização negada.');
                    setLoading(false);
                    return;
                }
                const results = await Location.geocodeAsync(studioAddress);
                if (!results.length) {
                    setError('Endereço não encontrado.');
                    setLoading(false);
                    return;
                }
                const { latitude, longitude } = results[0];
                const studioData = {
                    name: studioName,
                    address: studioAddress,
                    latitude: latitude,
                    longitude: longitude,
                    phone: studioPhone,
                };
                await createStudio(studioData);
                await AsyncStorage.setItem('showPremiumModal', 'true');

                router.replace('/(tattoo-artist)');
            }
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    };

    const handleSignOut = async () => {
        router.replace('/(auth)/sign-in');
        setToken(null);
        setUser(null);
        await removeToken();
    }

    return (
        <AuthContext.Provider value={{ signIn, signUp , handleSignOut, token, user }}>
            {isLoading ? null : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);