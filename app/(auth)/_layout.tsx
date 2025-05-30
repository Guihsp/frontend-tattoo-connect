import { Stack, Redirect } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';

export default function AuthLayout() {
    const { user } = useAuth();
    if (user) {
        return <Redirect href={user.role === 'CLIENT' ? '/(client)' : '/(tattoo-artist)'} />;
    }

    return <Stack screenOptions={{ headerShown: false }} />;
}
