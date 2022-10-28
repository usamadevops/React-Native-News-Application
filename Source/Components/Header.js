import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {theme} from '../constants';
import styles from './styles';
const App_Icon = require('../assets/Icons/App_Icon2.png');
import  Settings  from '../assets/Icons/Settings';
const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
      }}>
      <View style={styles.Header}>
        <Image
          source={App_Icon}
          style={{
            width: 30,
            height: 30,
          }}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <Text
            style={[
              theme.textStyles.largeText,
              {color: theme.colors.Blue, fontWeight: '600'},
            ]}>
            Strike
          </Text>
          <Text
            style={[theme.textStyles.largeText, {color: theme.colors.Blue}]}>
            News
          </Text>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('Settings')}>
           <Settings/>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header;
