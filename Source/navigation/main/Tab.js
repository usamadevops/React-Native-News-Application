import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Latest, World, Indonesia, Technology} from '../../Components/Headlines';
const Tabs = createMaterialTopTabNavigator();

function Tab() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 'auto'},
      }}>
      <Tabs.Screen name="Latest" component={Latest} />
      <Tabs.Screen name="World" component={World} />
      <Tabs.Screen name="Indonesia" component={Indonesia} />
      <Tabs.Screen name="Technology" component={Technology} />
    </Tabs.Navigator>
  );
}
export default Tab;
