import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { ActivityIndicator, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('@/assets/fonts/Montserrat-Regular.ttf'),
    bold: require('@/assets/fonts/Montserrat-Bold.ttf'),
    medium: require('@/assets/fonts/Montserrat-Medium.ttf'),
    semi: require('@/assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={'small'} color="#ff7f7d " />;
  }

  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar animated barStyle={'dark-content'} backgroundColor="#ffffff" />
    </SafeAreaProvider>
  );
}

export const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};
