import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import 
  CategoryNewsList
 from '../Components/Headlines';
import { theme } from '../constants';
import { fontFamily } from '../constants/Fonts';
const Tabs = createMaterialTopTabNavigator();

function Tab({url}) {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: { width: 'auto' },
        tabBarAllowFontScaling: true,
        tabBarIndicatorStyle:{shadowColor:theme.colors.Blue,borderColor:theme.colors.Blue},
        tabBarBounces: true,
        tabBarActiveTintColor: theme.colors.Black,
        tabBarInactiveTintColor: theme.colors.MediumGray,
        tabBarPressColor: theme.colors.LightGray,
        tabBarLabelStyle:{fontFamily:fontFamily.BRFirma_Medium,letterSpacing:0.8}
      }}
      transitionStyle="curl"
    >
      <Tabs.Screen name="General" component={CategoryNewsList} initialParams={{category:"general",Domainurl:url}} />
      <Tabs.Screen name="Health" component={CategoryNewsList} initialParams={{category:"health",Domainurl:url}} />
      <Tabs.Screen name="Science" component={CategoryNewsList} initialParams={{category:"science",Domainurl:url}} />
      <Tabs.Screen name="Technology" component={CategoryNewsList}  initialParams={{category:"technology",Domainurl:url}}/>
      <Tabs.Screen name="Buisness" component={CategoryNewsList} initialParams={{ category: "business",Domainurl:url }} />
      <Tabs.Screen name="Entertainment" component={CategoryNewsList}  initialParams={{category:"entertainment",Domainurl:url}}/>
      <Tabs.Screen name="Sports" component={CategoryNewsList}  initialParams={{category:"sports",Domainurl:url}}/>
    </Tabs.Navigator>
  );
}
export default Tab;
