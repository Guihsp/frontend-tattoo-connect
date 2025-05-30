import { useState } from 'react';

import { useAuth } from '@/contexts/AuthContext';
import { isValidCPF } from '@/utils/cpfValidator';

export const useSignUp = () => {
    const { signUp, user } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [type, setType] = useState<'CLIENT' | 'TATTOO_ARTIST'>('CLIENT');
    // Additional fields for tattoo artist
    const [bio, setBio] = useState('');
    const [studioAddress, setStudioAddress] = useState('');
    const [studioName, setStudioName] = useState('');
    const [studioPhone, setStudioPhone] = useState('');

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const [showPremiumModal, setShowPremiumModal] = useState(false);

    const validate = () => {
        if (!name || !email || !password || !phone || !type || !cpf ||(type === 'TATTOO_ARTIST' && (!bio || !studioAddress || !studioName || !studioPhone))) {
            setError('Preencha todos os campos.');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('E-mail inválido.');
            return false;
        }
        const cpfLimpo = cpf.replace(/[^\d]/g, '');
        if (!isValidCPF(cpfLimpo)) {
            
            console.log('CPF inválido:', cpf);

            setError('CPF inválido.');
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
            await signUp(name, email, password, phone, type, cpf, bio, studioAddress, studioName, studioPhone);
            if (type === 'TATTOO_ARTIST') {
                setShowPremiumModal(true);
            }
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
        confirmPassword,
        setConfirmPassword,
        phone,
        setPhone,
        type,
        setType,
        cpf,
        setCpf,
        
        bio,
        setBio,
        studioAddress,
        setStudioAddress,
        studioName,
        setStudioName,
        studioPhone,
        setStudioPhone,
        handleRegister,
        error,
        loading,

        showPremiumModal,
        setShowPremiumModal,
    };
};