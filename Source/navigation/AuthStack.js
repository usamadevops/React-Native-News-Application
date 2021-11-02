import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Auth} from '../Screens';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={Auth.Signup} />
      <Stack.Screen name="Login" component={Auth.Login} />
      <Stack.Screen name="ForgetPassword" component={Auth.ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
