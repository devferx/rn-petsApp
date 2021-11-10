import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {WelcomeScreen} from '../screens/WelcomeScreen';
import {BottomTabNavigator} from './BottomTabNavigator';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="AppScreen" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
