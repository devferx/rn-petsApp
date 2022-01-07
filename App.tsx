import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {Navigator} from './src/navigator/Navigator';
import {AppProvider} from './src/context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer theme={DefaultTheme}>
        <Navigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
