import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Post, Settings, Login, TopicProfile} from '../../Screens';
import BottomTab from './Bottom';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Tab" component={BottomTab} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TopicProfile" component={TopicProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
