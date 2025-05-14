import { useState } from 'react';
import { useAuth } from '@/src/contexts/AuthContext';

export const useSignIn = () => {
    const { signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        if (!email || !password) {
            setError('Preencha todos os campos.');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('E-mail inválido.');
            return false;
        }
        return true;
    };

    const handleLogin = async () => {
        setError(null);
        if (!validate()) return;
        setLoading(true);
        try {
            await signIn(email, password);
        } catch (err: any) {
            setError('E-mail ou senha incorretos.');
        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        error,
        loading,
    };
};