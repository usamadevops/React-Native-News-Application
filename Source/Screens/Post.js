import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Bookmark} from '../assets/Icons';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
import styles from './Style';
const Image1 = require('../assets/images/IPhone.png');
const IMAGE_HEIGHT = 280;
const Post = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={Image1}
          style={{width: theme.constants.screenWidth, height: IMAGE_HEIGHT}}
        />
        <View>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Demi_Bold,
              fontSize: theme.sizes.h1,
            }}>
            Update Iphone 13 Rumor New design?
          </Text>
          <View style={styles.BottomContainer}>
            <Text style={styles.timeText}>34 Mins</Text>

            <Text style={styles.categoryText}>Freedom</Text>
          </View>
          <View>
            <Bookmark />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Post;
