import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
import {sizes} from '../constants/theme';
const right = require('../assets/Icons/right.png');
const ImportantNewsCard = () => {
  return (
    <TouchableWithoutFeedback
      style={{width: theme.constants.screenWidth}}
      onPress={() => console.log('Pressed')}>
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
          borderColor: theme.colors.LightGray,
        }}>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Demi_Bold,
              fontSize: sizes.base,
              color: theme.colors.DarkGray,
              lineHeight: 24,
              letterSpacing: 0.35,
            }}>
            <Text
              style={{
                color: theme.colors.Red,
              }}>
              Covid-19 News:
            </Text>
            The Latest coverage About Covid-19
          </Text>
        </View>
        <View>
          <Image source={right} style={{width: 26, height: 26}} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImportantNewsCard;