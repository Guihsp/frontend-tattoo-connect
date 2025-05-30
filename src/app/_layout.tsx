import { Stack, Tabs } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import { AuthProvider, useAuth } from '@/src/contexts/AuthContext';


export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Bold': require('@/src/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('@/src/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('@/src/assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('@/src/assets/fonts/Montserrat-Medium.ttf'),
  });

  if (fontError) {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#8E44AD' }}>Erro ao carregar fontes</Text>
        </View>
      </SafeAreaProvider>
    );
  }

  if (!fontsLoaded) {
    return (
      <SafeAreaProvider>
        <ActivityIndicator size="large" color="#8E44AD" />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Stack
          screenOptions={{
            headerShown: false, 
          }}
        />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
