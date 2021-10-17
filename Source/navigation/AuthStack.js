import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Auth} from '../Screens';


const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signup" component={Auth.Signup} />
        <Stack.Screen name="Login" component={Auth.Login} />
        <Stack.Screen name="ForgetPassword" component={Auth.ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
