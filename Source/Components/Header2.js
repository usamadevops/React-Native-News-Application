import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {theme} from '../constants';
import styles from './styles';
import {DotsIcon} from '../assets/Icons';
import {fontFamily} from '../constants/Fonts';
const Header2 = ({title}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
      }}>
      <View style={styles.Header}>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: theme.colors.Black,
              fontFamily: fontFamily.Bozon_Bold,
              fontSize: theme.fonts.h1.fontSize,
            }}>
            {title}
          </Text>
        </View>
        <View>
          <Pressable
            hitSlop={25}
            android_ripple={{
              color: theme.colors.LightGray,
              borderless: true,
              radius: 25,
            }}
            onPress={() => alert('dots clicked')}>
            <DotsIcon color="#000" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header2;
