import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Main} from '../Screens';
import BottomTab from './Bottom';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={BottomTab} />
      <Stack.Screen name="Post" component={Main.Post}  options={{headerShown:true,headerBackTitle:'Go Back'}}/>
      <Stack.Screen name="Settings" component={Main.Settings} />
      <Stack.Screen name="TopicProfile" component={Main.Profile} />
      <Stack.Screen name="Newslist" component={Main.Newslist} options={{headerShown:true,headerBackTitle:'Go Back'}}/>
    </Stack.Navigator>
  );
};

export default MainStack;
