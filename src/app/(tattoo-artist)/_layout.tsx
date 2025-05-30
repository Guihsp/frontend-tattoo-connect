import { Stack, Tabs } from 'expo-router';
import { useAuth } from '@/src/contexts/AuthContext';
import { Redirect } from 'expo-router';

export default function TattooArtistLayout() {
    const { user } = useAuth();

    if (!user) {
        return <Redirect href="/(auth)/sign-in" />;
    }

    if (user.role !== 'TATTOO_ARTIST') {
        return <Redirect href="/(client)" />;
    }

    return <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }} />
}
