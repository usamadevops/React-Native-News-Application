import React from 'react';
import { View, Animated, Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main } from '../Screens';
import { theme } from '../constants';
import {
  Channels,
  HomeIcon,
  NotificationIcon,
  SearchIcon,
  StatsIcon,
} from '../assets/Icons';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export default function BottomTab() {
  const navigation = useNavigation();
  const taboffSetValue = React.useRef(new Animated.Value(0)).current;
  return (
    <Animated.View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: 10
          },
          tabBarActiveBackgroundColor: `${theme.colors.Blue}20`,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: theme.colors.White,
            height: Platform.OS === 'ios' ? 100 : 60,

          },
        }}>
        <Tab.Screen
          name="Home"
          component={Main.Homefeed}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <HomeIcon
                    color={focused ? theme.colors.Blue : theme.colors.LightGray}
                  />
                </View>
              );
            },

          }}
          listeners={({ navigation, route }) => ({
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
          component={Main.Search}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <SearchIcon
                    color={focused ? theme.colors.Blue : theme.colors.LightGray}
                  />
                </View>
              );
            },
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(taboffSetValue, {
                toValue: theme.constants.screenWidth / 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="Explore Channels"
          component={Main.Notification}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Channels
                    color={focused ? theme.colors.Blue : theme.colors.LightGray}
                  />
                </View>
              );
            },
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(taboffSetValue, {
                toValue: (theme.constants.screenWidth / 3) * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        {/* <Tab.Screen
          name="Stats"
          component={Main.Stats}
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
        /> */}
      </Tab.Navigator>
      <Animated.View
        style={{
          width: theme.constants.screenWidth / 3,
          height: 3,
          backgroundColor: theme.colors.Blue,
          position: 'absolute',
          bottom: Platform.OS === 'ios' ? 100 : 60,

          transform: [{ translateX: taboffSetValue }],
        }}
      />
    </Animated.View>
  );
}
