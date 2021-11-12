import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {WelcomeScreen} from '../screens/WelcomeScreen';
import {BottomTabNavigator} from './BottomTabNavigator';
import {PetScreen} from '../screens/PetScreen';

export type RootStackScreenParamsList = {
  WelcomeScreen: undefined;
  AppScreen: undefined;
  // TODO: Define pet type
  PetScreen: undefined;
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
      <Stack.Screen name="PetScreen" component={PetScreen} />
    </Stack.Navigator>
  );
};
