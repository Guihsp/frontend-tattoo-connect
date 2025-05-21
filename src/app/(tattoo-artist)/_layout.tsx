import { Stack } from 'expo-router';
import { useAuth } from '@/src/contexts/AuthContext';
import { Redirect } from 'expo-router';

export default function TattooArtistLayout() {
    const { user } = useAuth();

    if (!user) {
        return <Redirect href="/(auth)/signIn" />;
    }

    if (user.role !== 'TATTOO_ARTIST') {
        return <Redirect href="/(client)" />;
    }

    return <Stack screenOptions={{ headerShown: false }} />;
}
