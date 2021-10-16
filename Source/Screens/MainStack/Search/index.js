import React from 'react';
import {View, LogBox} from 'react-native';
// import {HomeIcon, NotificationIcon} from '../assets/Icons';
import Header2 from '../../../Components/Header2';
import Searchbar from '../../../Components/Searchbar';
import Tab from '../../../navigation/Tab';
import styles from '../../Style';

const Search = () => {
  return (
    <View style={styles.container}>
      <Header2 title="Headlines" />
      <Searchbar />
      <View style={{flex: 1}}>
        <Tab />
      </View>
    </View>
  );
};

export default Search;
