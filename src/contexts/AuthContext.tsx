import { useEffect } from 'react';
import { createContext, useContext, useState, ReactNode } from 'react';
import { loginRequest, registerRequest } from '@/src/services/api/auth';
import { saveToken, removeToken, getToken } from '@/src/utils/storage';
import { useRouter } from 'expo-router';
import { getUser } from '@/src/services/api/user';
import { User, UserRole } from '@/src/types/User';

interface AuthContextData {
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (name: string, email: string, password: string, phone: string, type: string) => Promise<void>;
    handleSignOut: () => Promise<void>;
    token: string | null;
    user: User | null;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

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

            if (userData.type === 'CLIENT') {
                router.replace('/(client)');
            } else if (userData.type === 'TATTOO_ARTIST') {
                router.replace('/(tattoo-artist)');
            }
        } catch (error) {
            throw new Error('E-mail ou senha incorretos.');
        }
    };

    const signUp = async (name: string, email: string, password: string, phone: string, type: string) => {
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

            if (userData.type === 'CLIENT') {
                router.replace('/(client)');
            } else if (userData.type === 'TATTOO_ARTIST') {
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