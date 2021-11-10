import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {WelcomeScreen} from '../screens/WelcomeScreen';
import {BottomTabNavigator} from './BottomTabNavigator';

export type RootStackScreenParamsList = {
  WelcomeScreen: undefined;
  AppScreen: undefined;
};

const Stack = createStackNavigator<RootStackScreenParamsList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="AppScreen" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
