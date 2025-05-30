import { Stack, Tabs } from 'expo-router';
import { useAuth } from '@/src/contexts/AuthContext';
import { Redirect } from 'expo-router';

export default function ClientLayout() {
    const { user } = useAuth();

    if (!user) {
        return <Redirect href="/(auth)/sign-in" />;
    }

    if (user.role !== 'CLIENT') {
        return <Redirect href="/(tattoo-artist)" />;
    }

    return <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}/>
}
