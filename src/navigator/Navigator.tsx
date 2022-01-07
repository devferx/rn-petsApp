import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppContext} from '../context/AppContext';

import {WelcomeScreen} from '../screens/WelcomeScreen';
import {BottomTabNavigator} from './BottomTabNavigator';
import {PetScreen} from '../screens/PetScreen';
import {ChatScreen} from '../screens/ChatScreen';

import {Pet} from '../interfaces/pet';

export type RootStackScreenParamsList = {
  WelcomeScreen: undefined;
  AppScreen: undefined;
  PetScreen: Pet;
  ChatScreen: undefined;
};

const Stack = createStackNavigator<RootStackScreenParamsList>();

export const Navigator = () => {
  const {showWelcomeSlides} = useContext(AppContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {showWelcomeSlides && (
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      )}
      <Stack.Screen name="AppScreen" component={BottomTabNavigator} />
      <Stack.Screen name="PetScreen" component={PetScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};
