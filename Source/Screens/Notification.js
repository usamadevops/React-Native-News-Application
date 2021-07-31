import React from 'react';
import {View, Text} from 'react-native';
import {ChannelCard, Header2, SmallCard} from '../Components';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
import styles from './Style';
const Notification = () => {
  return (
    <View style={styles.container}>
      <Header2 title="Notifications" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 20,
        }}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Bold,
              fontSize: theme.fonts.subTitle.fontSize,
              color: theme.colors.MediumGray,
              letterSpacing: 0.5,
            }}>
            ARTICLES FOR YOU
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Bold,
              fontSize: theme.fonts.body.fontSize,
              color: theme.colors.Black,
              letterSpacing: 0.5,
            }}>
            See all
          </Text>
        </View>
      </View>
      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />
      <SmallCard navigationscreen="Post" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 20,
        }}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Bold,
              fontSize: theme.fonts.subTitle.fontSize,
              color: theme.colors.MediumGray,
              letterSpacing: 0.5,
            }}>
            TODAY
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Bold,
              fontSize: theme.fonts.body.fontSize,
              color: theme.colors.Black,
              letterSpacing: 0.5,
            }}>
            See all
          </Text>
        </View>
      </View>
      <ChannelCard />
    </View>
  );
};

export default Notification;
