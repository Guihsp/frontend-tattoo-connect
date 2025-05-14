import { Stack } from 'expo-router';
import { useAuth } from '@/src/contexts/AuthContext';
import { Redirect } from 'expo-router';

export default function ClientLayout() {
    const { user } = useAuth();

    if (!user) {
        return <Redirect href="/(auth)/signin" />;
    }

    if (user.role !== 'CLIENT') {
        return <Redirect href="/(tattoo-artist)" />;
    }

    return <Stack screenOptions={{ headerShown: false }} />;
}
