import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Terms from "../../screens/Terms"
import Guide from '../../screens/Guide';
import CameraVerificationScreen from '../../screens/CameraVerificationScreen'; // Assuming you have this

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    
    
      <Stack.Navigator 
        initialRouteName="Terms"
        screenOptions={{
          headerShown: false, // Hi
        }}
     >
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Guide" component={Guide} />
        <Stack.Screen name="CameraVerificationScreen" component={CameraVerificationScreen} />
      </Stack.Navigator>
    
  );
};

export default AppNavigator;