import React from 'react';
import {View, Text, Image, Pressable, Animated} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const SmallCard = ({navigationscreen}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(navigationscreen);
      }}>
      <SharedElement>
        <View style={styles.Maincontainer}>
          <View style={styles.SmallCardContainer}>
            <View style={styles.CardLeftContainer}>
              <SharedElement id={`item.${item.key}.header`}>
                <Text style={styles.headerText}>
                  Build react native Application with Zero Experience
                </Text>
              </SharedElement>
              <SharedElement id={`item.${item.key}.Bottom`}>
                <View style={styles.BottomContainer}>
                  <Text style={styles.timeText}>34 Mins</Text>

                  <Text style={styles.categoryText}>Freedom</Text>
                </View>
              </SharedElement>
            </View>

            <View style={styles.CardRightContainer}>
              <SharedElement id={`item.${item.key}.image`}>
                <Image
                  source={require('../assets/images/TopNews/card1.png')}
                  style={{width: 85, height: 85, borderRadius: 10}}
                />
              </SharedElement>
            </View>
          </View>
        </View>
      </SharedElement>
    </Pressable>
  );
};

export default SmallCard;
