import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from '../screens/About';
import Header from '../shared/Header';

const Stack = createStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={ ({ navigation }) => {
          return { headerTitle: () =>  <Header navigation={navigation} title=' About GameZone' /> }
        }}
      />
    </Stack.Navigator> 
  );
}

export default AboutStack;
