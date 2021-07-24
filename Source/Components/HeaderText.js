import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
const HeaderText = props => {
  return (
    <View style={{alignSelf: 'flex-start', marginHorizontal: 20}}>
      <Text
        style={{
          fontFamily: fontFamily.Bozon_Bold,
          fontSize: theme.fonts.subTitle.fontSize,
          lineHeight: 25,
          letterSpacing: 0.34,
          color: theme.colors.MediumGray,
        }}>
        {props.text}
      </Text>
    </View>
  );
};
export default HeaderText;
