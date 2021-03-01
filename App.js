import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native'
import { useFonts, Comfortaa_300Light, Comfortaa_500Medium, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa'
import { Roboto_400Regular, Roboto_300Light, } from '@expo-google-fonts/roboto'
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';

export default function App() {

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_500Medium,
    Comfortaa_700Bold,
    Roboto_400Regular,
    Roboto_300Light
  })

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
