import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const SmallCard = ({ NewsChannel,title,image,PostedTime}) => {
  const navigation = useNavigation();
  const SlashIndex = title.indexOf('-');


  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Post');
      }}>
      <View style={styles.Maincontainer}>
        <View style={styles.SmallCardContainer}>
          <View style={styles.CardLeftContainer}>
            <Text style={styles.headerText}>
              {title.slice(0,SlashIndex)}
            </Text>

            <View style={styles.BottomContainer}>
              <Text style={styles.timeText}>{PostedTime.slice(5, 10)}</Text>

              <Text style={styles.categoryText}>{NewsChannel}</Text>
            </View>
          </View>

          <View style={styles.CardRightContainer}>
            <Image
              source={image!==null?{uri:image}:require('../assets/images/news-icon.png')}
              
              style={{width: 85, height: 85, borderRadius: 10}}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default SmallCard;
