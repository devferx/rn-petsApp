import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {Navigator} from './src/navigator/Navigator';

const App = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
