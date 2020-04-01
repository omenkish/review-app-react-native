import 'react-native-gesture-handler';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/HomeStack';

const getFonts = () => Font.loadAsync({
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );
  }

  return (
    <AppLoading 
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={console.warn}
    />
  );
}
