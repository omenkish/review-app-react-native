import React from 'react';
import { Button, Text, View } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Home({ navigation: { navigate }}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigate('Review')}
      />
    </View>
  );
};
