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
            }}>
            Articles for you
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Bold,
              fontSize: theme.fonts.body.fontSize,
              color: theme.colors.Black,
            }}>
            See all
          </Text>
        </View>
      </View>
      <SmallCard />
      <SmallCard />
      <SmallCard />
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
            }}>
            Today
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Bold,
              fontSize: theme.fonts.body.fontSize,
              color: theme.colors.Black,
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
