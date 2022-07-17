import React from 'react';
import moment from 'moment';
import {View, Text, Image, Pressable, useWindowDimensions} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { theme } from '../constants';

const SmallCard = ({NewsChannel, title, image, PostedTime,newsurl}) => {
  const{width,height}=useWindowDimensions();
  const navigation = useNavigation();
  const SlashIndex = title.indexOf('-');

  return (
    <Pressable
    style={{elevation:3,marginVertical:5,marginHorizontal:5,width:width.toString()-10,alignSelf:'center',backgroundColor:theme.colors.White,borderRadius:10,}}
      onPress={() => {
        navigation.navigate('Post',{
          url:newsurl,
          title:title.slice(0,SlashIndex)
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
              source={image!==null?{uri:image.toString()}: require('../assets/images/news-icon.png')}
              style={{width: 85, height: 85, borderRadius: 10}}
              // onError={({nativeEvent})=>alert(nativeEvent.error)}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default SmallCard;
