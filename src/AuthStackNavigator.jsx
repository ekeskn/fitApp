import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Pages/WelcomePage/WelcomePage'; // Login ekranınızın dosya yolunu doğru şekilde değiştirin
import SignupPage from  './Pages/SignInScreen/SignInScreen'; // SignUp ekranınızın dosya yolunu doğru şekilde değiştirin
import TabNavigator from './TabNavigator';


const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Welcome" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignupPage} />
      <Stack.Screen name="MainPage" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
