import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Main,NewsEditor} from '../Screens';
import BottomTab from './Bottom';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={BottomTab} />
        <Stack.Screen name="Post" component={Main.Post} />
        <Stack.Screen name="Settings" component={Main.Settings} />
        <Stack.Screen name="TopicProfile" component={Main.Profile} />
        <Stack.Screen name="NewsEditor" component={NewsEditor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
