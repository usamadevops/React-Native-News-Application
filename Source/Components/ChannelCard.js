import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import styles from './styles';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
import {DotsIcon} from '../assets/Icons';
const ChannelCard = () => {
  return (
    <View
      style={{
        width: theme.constants.screenWidth,
      }}>
      <View style={styles.SmallCardContainer}>
        <View style={{flex: 1}}>
          <Image
            source={require('../assets/images/TopNews/card1.png')}
            style={{width: 60, height: 60, borderRadius: 10}}
          />
        </View>
        <View style={{flex: 3}}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: fontFamily.Bozon_Demi_Bold,
                fontSize: theme.fonts.body.fontSize,
                lineHeight: 22,
                letterSpacing: 0.34,
                color: theme.colors.Black,
              }}>
              CNN Posts new news
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.Bozon_Demi_Bold,
                fontSize: theme.fonts.body.fontSize,
                lineHeight: 22,
                letterSpacing: 0.34,
                color: theme.colors.MediumGray,
              }}>
              From subscribe
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{rotate: '90deg'}],
          }}>
          <DotsIcon color={theme.colors.LightGray} />
        </View>
      </View>
    </View>
  );
};

export default ChannelCard;
