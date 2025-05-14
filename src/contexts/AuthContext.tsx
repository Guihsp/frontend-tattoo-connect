import { createContext, useContext, useState, ReactNode } from 'react';
import { loginRequest } from '@/src/services/api/authService';
import { saveToken } from '@/src/utils/storage';
import { useRouter } from 'expo-router';
import { getUser } from '@/src/services/api/user';
import { User } from '@/src/types/User';

interface AuthContextData {
    signIn: (email: string, password: string) => Promise<void>;
    token: string | null;
    user: User | null;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    const signIn = async (email: string, password: string) => {
        try {
            const response = await loginRequest(email, password);
            const accessToken = response.access_token;
            setToken(accessToken);
            await saveToken(accessToken);

            const userData = await getUser();

            const mappedUser: User = {
                id: userData.id,
                email: userData.email,
                role: userData.type, 
                token: accessToken,
            };
            setUser(mappedUser);

            if (userData.type === 'CLIENT') {
                router.replace('/(client)');
            } else if (userData.type === 'TATTOO_ARTIST') {
                router.replace('/(tattoo-artist)');
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    const handleSignOut = async () => {
        setToken(null);
        setUser(null);
        await saveToken(null);
        router.replace('/(auth)/signin');
    }

    return (
        <AuthContext.Provider value={{ signIn, token, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);