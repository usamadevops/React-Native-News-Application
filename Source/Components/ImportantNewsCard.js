import React from 'react';
import {View, Text, Image} from 'react-native';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
import {sizes} from '../constants/theme';
const right = require('../assets/Icons/right.png');
const ImportantNewsCard = () => {
  return (
    <View
      style={{
        height: 85,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderWidth: 0.6,
        marginHorizontal: 15,
        borderColor: theme.colors.DarkGray,
      }}>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text
          style={{
            fontFamily: fontFamily.Bozon_Demi_Bold,
            fontSize: sizes.base,
            color: theme.colors.DarkGray,
            lineHeight: 20,
            letterSpacing: 0.35,
          }}>
          <Text
            style={{
              color: theme.colors.Blue,
            }}>
            Covid News:
          </Text>
          The latest coverage about Covid-19
        </Text>
      </View>
      <View>
        <Image source={right} style={{width: 26, height: 26}} />
      </View>
    </View>
  );
};

export default ImportantNewsCard;
