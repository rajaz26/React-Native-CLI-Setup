import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const appnavigation = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false, swipeEnabled:false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          
        />
       
      </Stack.Navigator>
  );
};

export default appnavigation;
