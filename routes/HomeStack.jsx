import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import ReviewsScreen from '../screens/Review';
import Header from '../shared/Header';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={ ({ navigation }) => {
          return {headerTitle: () =>  <Header navigation={navigation} title='GameZone' /> }
        }}
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
