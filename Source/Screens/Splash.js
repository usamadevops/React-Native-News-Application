import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {theme} from '../constants';
import styles from './Style';
const App_Icon = require('../assets/Icons/App_Icon.jpg');
const Splash = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Tab');
    }, 1000);
    return () => {
      timeout;
    };
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={App_Icon} style={{width: 200, height: 200}} />
        <Text style={[styles.appTitle]}>StrikeNews</Text>
      </View>
    </View>
  );
};

export default Splash;
