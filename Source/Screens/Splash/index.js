import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import styles from './Styles';

import GifLoader from '../../Components/Loader';
const App_Icon = require('../../assets/Icons/App_Icon.jpg');
const Splash = ({navigation}) => {
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
        <View style={{marginTop: 60,}}>
         <GifLoader/>
        </View>
      </View>
    </View>
  );
};

export default Splash;
