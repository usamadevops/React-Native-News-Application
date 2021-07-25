import React from 'react';
import {View, Text, Image} from 'react-native';
import {theme} from '../constants';
import styles from './Style';
const Image1 = require('../assets/images/IPhone.png');
const Post = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={Image1}
          style={{width: theme.constants.screenWidth, height: 280}}
        />
        <Text>Update Iphone 13 Rumor New design?</Text>
        <View style={styles.BottomContainer}>
          <Text style={styles.timeText}>34 Mins</Text>

          <Text style={styles.categoryText}>Freedom</Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default Post;
