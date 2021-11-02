import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import styles from './Styles';
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
        <View style={{marginTop:20}}>

        <ActivityIndicator color="#000" size={50} />
        </View>
      </View>
    </View>
  );
};

export default Splash;
