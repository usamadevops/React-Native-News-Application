import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {theme} from '../../../constants';
import {fontFamily} from '../../../constants/Fonts';
import {Header2} from '../../../Components';
import {sizes} from '../../../constants/theme';
import Tab from '../../../navigation/Tab';
const TopicProfile = () => {
  return (
    <View style={{flex: 1,backgroundColor:theme.colors.White}}>
      <Header2 title="CNN" backButton={true} icon="search" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', paddingRight: 15}}>
            <Image
              source={require('../../../assets/images/CNN.png')}
              style={{width: 74, height: 74, borderRadius: 5}}
            />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontFamily: fontFamily.Bozon_Demi_Bold,
                fontSize: sizes.h2,
                lineHeight: 35,
              }}>
              CNN
            </Text>

            <Text
              style={{
                fontFamily: fontFamily.Bozon_Bold,
                fontSize: sizes.base,
                color: theme.colors.DarkGray,
                lineHeight: 30,
              }}>
              3 Million Followers
            </Text>
          </View>
        </View>
        <Pressable
          android_ripple={{
            color: theme.colors.LightGray,
            borderless: false,
            radius: 45,
          }}
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderColor: theme.colors.Blue,
            borderRadius: 5,
            borderWidth: 0.5,
          }}
          onPress={() => alert('followed')}>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Demi_Bold,
              fontSize: 15,
              color: theme.colors.Black,
            }}>
            Follow
          </Text>
        </Pressable>
      </View>
      <View style={{flex: 1,marginTop:20}}>
        <Tab />
      </View>
    </View>
  );
};

export default TopicProfile;
