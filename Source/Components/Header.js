import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
const App_Icon = require('../assets/Icons/App_Icon.jpg');
const Header = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <View>
          <Image source={App_Icon} />
          <Text>Strike</Text>
          <Text>News</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
