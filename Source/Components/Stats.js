import React from 'react';
import {View, Text} from 'react-native';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';

const Statscard = () => {
  return (
    <View
      style={{
        width: theme.constants.screenWidth - 40,
        marginHorizontal: 20,
        padding: 10,
        borderWidth: 0.5,
        borderColor: theme.colors.LightGray,
        borderRadius: 10,
        marginVertical: 25,
      }}>
      <View style={{paddingVertical: 10}}>
        <Text
          style={{
            fontFamily: fontFamily.Bozon_Demi_Bold,
            fontSize: 17,
            color: theme.colors.Black,
          }}>
          Today Daily
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          marginTop: 10,
          borderColor: theme.colors.LightGray,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginVertical: 30,
        }}>
        <View style={{}}>
          <Text style={{fontFamily: fontFamily.Bozon_Bold, fontSize: 35}}>
            23
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Regular,
              fontSize: 17,
              color: theme.colors.MediumGray,
            }}>
            Reads
          </Text>
        </View>
        <View>
          <Text style={{fontFamily: fontFamily.Bozon_Bold, fontSize: 35}}>
            05
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Regular,
              fontSize: 17,
              color: theme.colors.MediumGray,
            }}>
            Favorite
          </Text>
        </View>
        <View>
          <Text style={{fontFamily: fontFamily.Bozon_Bold, fontSize: 35}}>
            12
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Regular,
              fontSize: 17,
              color: theme.colors.MediumGray,
            }}>
            Saved
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Statscard;
