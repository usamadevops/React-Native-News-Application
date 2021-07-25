import React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
import PropTypes from 'prop-types';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  while (true) {
    var colorpattern = '#';
    for (var i = 0; i < 6; i++) {
      colorpattern += letters[Math.floor(Math.random() * 12)];
    }
    return colorpattern;
  }
}

const TopicsCard = ({letter, TopicName, Followers}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: getRandomColor(),
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Bold,
              fontSize: 25,
              color: theme.colors.White,
            }}>
            {letter}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Demi_Bold,
              fontSize: 16,
              color: theme.colors.Black,
            }}>
            {TopicName}
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Demi_Bold,
              fontSize: 14,
              color: theme.colors.MediumGray,
            }}>
            {Followers + ' Followers'}
          </Text>
        </View>
      </View>
      <View>
        <Pressable
          android_ripple={{
            color: theme.colors.Red,
            borderless: false,
            radius: 45,
          }}
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: theme.colors.Blue,
            borderRadius: 5,
          }}
          onPress={() => alert('followed')}>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Demi_Bold,
              fontSize: 15,
              color: theme.colors.White,
            }}>
            Follow
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
TopicsCard.propTypes = {
  TopicName: PropTypes.string,
  Followers: PropTypes.string,
};
export default TopicsCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    width: theme.constants.screenWidth - 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    width: theme.constants.screenWidth - 165,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
