import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {HomeScreen} from '../screens/HomeScreen';
import {MessagesScreen} from '../screens/MessagesScreen';
import {FavoritePetsScreen} from '../screens/FavoritePetsScreen';
import {ProfileScreen} from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'HomeScreen':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'MessagesScreen':
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
              break;
            case 'FavoritePetsScreen':
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case 'ProfileScreen':
              iconName = focused ? 'person-circle' : 'person-circle-outline';
              break;
          }
          return <Icon name={iconName} size={size} style={{color}} />;
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        options={{title: 'Inicio'}}
        component={HomeScreen}
      />
      <Tab.Screen
        name="MessagesScreen"
        options={{title: 'Mensajes'}}
        component={MessagesScreen}
      />
      <Tab.Screen
        name="FavoritePetsScreen"
        options={{title: 'Favoritos'}}
        component={FavoritePetsScreen}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{title: 'Cuenta'}}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
