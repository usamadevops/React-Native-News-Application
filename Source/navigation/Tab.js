import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {
  Latest,
  World,
  Toys,
  Fashion,
  Sports,
  Technology,
} from '../Components/Headlines';
const Tabs = createMaterialTopTabNavigator();

function Tab() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 'auto'},
      }}
      transitionStyle="curl">
      <Tabs.Screen name="Latest" component={Latest} />
      <Tabs.Screen name="World" component={World} />
      <Tabs.Screen name="Toys" component={Toys} />
      <Tabs.Screen name="Technology" component={Technology} />
      <Tabs.Screen name="Fashion" component={Fashion} />
      <Tabs.Screen name="Sports" component={Sports} />
    </Tabs.Navigator>
  );
}
export default Tab;
