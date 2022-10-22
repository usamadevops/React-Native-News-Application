import React from 'react';
import moment from 'moment';
import {View, Text, Image, Pressable, useWindowDimensions, ActivityIndicator} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { theme } from '../constants';

const SmallCard = ({NewsChannel, title, image, PostedTime,newsurl}) => {
  const{width}=useWindowDimensions();
  const navigation = useNavigation();


  return (
    <Pressable
    style={{elevation:3,marginVertical:5,marginHorizontal:5,width:width.toString()-10,alignSelf:'center',backgroundColor:theme.colors.White,borderRadius:10,}}
      onPress={() => {
        navigation.navigate('Post',{
          url:newsurl,
          title:title
        });
      }}>
      <View style={styles.Maincontainer}>
        <View style={styles.SmallCardContainer}>
          <View style={styles.CardLeftContainer}>
            <Text style={styles.headerText}>
              {title}
               { `...`}
            </Text>
            <View style={styles.BottomContainer}>
              <Text style={styles.timeText}>
                {moment(PostedTime).fromNow()}
              </Text>
              <Text style={styles.categoryText}>
                {NewsChannel }
              </Text>
            </View>
          </View>
          <View style={styles.CardRightContainer}>
            <Image
            progressiveRenderingEnabled={true}
            loadingIndicatorSource={require('../assets/images/news-icon.png')}
            fadeDuration={100}
              source={image?{uri:image?.toString()}: require('../assets/images/news-icon.png')}
              style={{width: 85, height: 85, borderRadius: 10}}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default SmallCard;
