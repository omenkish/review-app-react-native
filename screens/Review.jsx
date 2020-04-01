import React from 'react';
import { Text, View } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Review() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Page</Text>
    </View>
  );
};
