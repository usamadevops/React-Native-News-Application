import React from 'react';
import {View, Animated,Pressable,Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Main } from '../Screens';
import {theme} from '../../constants';
import {
  HomeIcon,
  NotificationIcon,
  SearchIcon,
  StatsIcon,
} from '../../assets/Icons';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export default function BottomTab() {
  const navigation = useNavigation();
  const taboffSetValue = React.useRef(new Animated.Value(0)).current;
  return (
    <Animated.View style={{flex: 1}} >
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
          tabBarShowLabel:false,
          tabBarActiveBackgroundColor: `${theme.colors.LightGray}50`,
          keyboardHidesTabBar: true,
         
          tabBarStyle:{
            backgroundColor: theme.colors.White,
            height: 60,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Main.Homefeed}
        
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
          component={Main.Search}
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
          component={Main.Notification}
          options={{
            tabBarBadge: 8,
            tabBarBadgeStyle: {
              backgroundColor: '#2CD483',
              color: theme.colors.White,
            },
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
        />
      </Tab.Navigator>
      <View  style={{position:"absolute",bottom:80,right:30,borderWidth:0.5,borderRadius:1000,width:44,height:44,alignItems:'center',justifyContent:'center',backgroundColor:theme.colors.Blue}}>
          <Pressable onPress={()=>navigation.push("NewsEditor")}>
 
 <Text style={{fontSize:28,color:theme.colors.White}}>+</Text>
        </Pressable>
        </View>
      <Animated.View
        style={{
          width: theme.constants.screenWidth / 4,
          height: 3,
          backgroundColor: theme.colors.Blue,
          position: 'absolute',
          bottom: 60,
         
          transform: [{translateX: taboffSetValue}],
        }}></Animated.View>
    </Animated.View>
  );
}
