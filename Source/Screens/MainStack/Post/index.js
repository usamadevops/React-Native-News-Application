import {cos} from 'prelude-ls';
import React from 'react';

import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  Pressable,
  Screen,
} from 'react-native';
import {BackButton, Bookmark} from '../../../assets/Icons';
import {theme} from '../../../constants';
import {fontFamily} from '../../../constants/Fonts';

import styles from '../../Style';

const Image1 = require('../../../assets/images/TopNews/card1.png');


const Post = ({navigation,route}) => {

  const {url}=route.params;
  return (
   <View>
    <Text>{url}</Text>
   </View>
  );
};

export default Post;

const styles2 = StyleSheet.create({
  BottomContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  timeText: {
    fontFamily: fontFamily.Bozon_Demi_Bold,
    fontSize: theme.fonts.body.fontSize,
    lineHeight: 22,
    letterSpacing: 0.34,
    color: theme.colors.MediumGray,
  },
  categoryText: {
    fontFamily: fontFamily.Bozon_Demi_Bold,
    fontSize: theme.fonts.body.fontSize,
    lineHeight: 22,
    letterSpacing: 0.34,
    color: theme.colors.MediumGray,
    marginLeft: 30,
  },
});
