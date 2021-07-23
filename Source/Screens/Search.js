import React from 'react';
import {View, Text} from 'react-native';
import {HomeIcon, NotificationIcon} from '../assets/Icons';
import styles from './Style';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <HomeIcon color="#000" />
    </View>
  );
};

export default Search;
