import 'react-native-gesture-handler';
import React from 'react';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {Latest, World, Indonesia, Technology} from '../../Components/Headlines';
import {theme} from '../../constants';
import {fontFamily} from '../../constants/Fonts';
import {LogBox} from 'react-native';

export default Tab = () => {
  return (
    <ScrollableTabView
      style={{marginTop: 20}}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
      tabBarInactiveTextColor={theme.colors.DarkGray}
      tabBarTextStyle={{
        fontFamily: fontFamily.Bozon_Demi_Bold,
        fontSize: theme.sizes.body,
        letterSpacing: 0.5,
      }}
      locked={false}
      tabBarActiveTextColor={theme.colors.Blue}
      tabBarUnderlineStyle={{
        backgroundColor: theme.colors.Blue,
        borderRadius: 40,
        borderWidth: 0.5,
      }}>
      <Latest tabLabel="Latests" tabname="Latests" key={1} />
      <Technology tabLabel="World" tabname="World" key={2} />
      <Indonesia tabLabel="Technology" tabname="Tech" key={3} />
      <World tabLabel="Japan" tabname="Japan" key={4} />
    </ScrollableTabView>
  );
};
