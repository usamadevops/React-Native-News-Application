import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Post, Settings, Login} from '../../Screens';
import BottomTab from './Bottom';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Tab" component={BottomTab} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
