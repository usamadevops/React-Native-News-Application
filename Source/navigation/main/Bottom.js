import React from 'react';
import {Pressable, View, Text, Animated} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Search, Stats, Notification, Post} from '../../Screens';
import {theme} from '../../constants';
import {
  HomeIcon,
  NotificationIcon,
  SearchIcon,
  StatsIcon,
  DotsIcon,
} from '../../assets/Icons';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export default function BottomTab() {
  const taboffSetValue = React.useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          adaptive: true,

          style: {
            backgroundColor: theme.colors.White,
            position: 'absolute',

            height: 60,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <HomeIcon
                    color={focused ? theme.colors.Blue : theme.colors.LightGray}
                  />
                </View>
              );
            },
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(taboffSetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <SearchIcon
                    color={focused ? theme.colors.Blue : theme.colors.LightGray}
                  />
                </View>
              );
            },
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(taboffSetValue, {
                toValue: theme.constants.screenWidth / 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="Notifications"
          component={Notification}
          options={{
            tabBarIcon: ({focused, size, color}) => {
              return (
                <View>
                  <NotificationIcon
                    color={focused ? theme.colors.Blue : theme.colors.LightGray}
                  />
                </View>
              );
            },
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(taboffSetValue, {
                toValue: (theme.constants.screenWidth / 4) * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            tabBarIcon: ({focused, size, color}) => {
              return (
                <View>
                  <StatsIcon
                    color={focused ? theme.colors.Blue : theme.colors.LightGray}
                  />
                </View>
              );
            },
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(taboffSetValue, {
                toValue: (theme.constants.screenWidth / 4) * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: theme.constants.screenWidth / 4,
          height: 2,
          backgroundColor: theme.colors.Blue,
          position: 'absolute',
          bottom: 60,
          borderRadius: 10,

          transform: [{translateX: taboffSetValue}],
        }}></Animated.View>
    </NavigationContainer>
  );
}
