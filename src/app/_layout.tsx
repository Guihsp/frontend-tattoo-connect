import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from '@/src/contexts/AuthContext';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('@/src/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('@/src/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('@/src/assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('@/src/assets/fonts/Montserrat-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
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
