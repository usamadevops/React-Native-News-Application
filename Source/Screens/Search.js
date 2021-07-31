import React from 'react';
import {View, Text, LogBox} from 'react-native';
import {HomeIcon, NotificationIcon} from '../assets/Icons';
import Header2 from '../Components/Header2';
import Headlines from '../Components/Headlines';
import Searchbar from '../Components/Searchbar';
import Tab from '../navigation/main/Tab';
import styles from './Style';

const Search = () => {
  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      <Header2 title="Headlines" />
      <Searchbar />
      <Tab />
    </View>
  );
};

export default Search;
