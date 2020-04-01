import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import ReviewsScreen from '../screens/Review';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#777',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'nunito-bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'GameZone' }}
      />
      <Stack.Screen
        name="Review"
        component={ReviewsScreen}
        options={{ title: 'Review Details' }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
