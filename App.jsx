import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './src/AuthStackNavigator'; // AuthStackNavigator dosyanızın yolunu doğru şekilde değiştirin
import TabNavigator from './src/TabNavigator'; // TabNavigator dosyanızın yolunu doğru şekilde değiştirin
import Dashboard from './src/Pages/Dashboard/Dashboard';
import {AppProvider, AppContext} from './src/Context/AppContext';
import Tracking from './src/Components/Tacking/Tacking';

import auth from '@react-native-firebase/auth';

const App = () => {
  const auth = false;
  return (
    <AppProvider>
      <NavigationContainer>
        {auth ? <TabNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
