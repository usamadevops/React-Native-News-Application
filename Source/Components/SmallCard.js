import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';

const SmallCard = props => {
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.SmallCardContainer}>
        <View style={styles.CardLeftContainer}>
          <Text style={styles.headerText}>
            Build react native Application with Zero Experience
          </Text>
          <View style={styles.BottomContainer}>
            <Text style={styles.timeText}>34 Mins</Text>

            <Text style={styles.categoryText}>Freedom</Text>
          </View>
        </View>
        <View style={styles.CardRightContainer}>
          <Image
            source={require('../assets/images/TopNews/card1.png')}
            style={{width: 85, height: 85, borderRadius: 10}}
          />
        </View>
      </View>
    </View>
  );
};

export default SmallCard;
