// TabNavigator.js

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Profile/Profile';
import Exercise from './Pages/Exercise/Exercise';
import ExerciseDetail from './Pages/ExerciseDetail/ExerciseDetail'
import { createStackNavigator } from '@react-navigation/stack';
import FirebaseCheck from './FirebaseCheck';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const ExerciseNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ExercisePage" component={Exercise} />
      <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
        headerShown:false,
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Exercise') {
            iconName = focused ? 'barbell' : 'barbell-outline';
          }
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: '#041e43',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Exercise" component={ExerciseNavigator} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
