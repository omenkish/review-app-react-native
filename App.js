import 'react-native-gesture-handler';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Routes from './routes/Drawer';

const getFonts = () => Font.loadAsync({
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Routes />
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
