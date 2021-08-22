import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Post, Settings, Login, TopicProfile} from '../../Screens';
import BottomTab from './Bottom';
import NewsEditor from '../../Screens/NewsEditor'
import { theme } from '../../constants';
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,}}>
        <Stack.Screen name="Tab" component={BottomTab} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TopicProfile" component={TopicProfile} />
        <Stack.Screen name="NewsEditor" component={NewsEditor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
