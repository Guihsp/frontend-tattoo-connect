import { useState } from 'react';
import { useAuth } from '@/src/contexts/AuthContext';
import { router } from 'expo-router';

export const useSignUp = () => {
    const { signUp } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [type, setType] = useState<'CLIENT' | 'TATTOO_ARTIST'>('CLIENT');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        if (!name || !email || !password || !phone || !type) {
            setError('Preencha todos os campos.');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('E-mail inválido.');
            return false;
        }
        if (password.length < 6) {
            setError('A senha deve ter pelo menos 6 caracteres.');
            return false;
        }
        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return false;
        }
        return true;
    };

    const handleRegister = async () => {
        setError(null);
        if (!validate()) return;
        setLoading(true);
        try {
            await signUp(name, email, password, phone, type);
        } catch (err: any) {
            setError('Erro ao cadastrar. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        phone,
        setPhone,
        type,
        setType,
        handleRegister,
        error,
        loading,
    };
};