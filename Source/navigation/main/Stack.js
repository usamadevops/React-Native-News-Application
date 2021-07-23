import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Home, Search, Stats, Notification, Post} from '../../Screens';
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Stats" component={Stats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
