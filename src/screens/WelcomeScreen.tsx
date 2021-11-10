import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const WelcomeScreen = () => {
  return (
    <View>
      <Text>Hello World!</Text>
      <Icon name="logo-react" color="rgb(100,200,255)" size={30} />
    </View>
  );
};
