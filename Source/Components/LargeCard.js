import React from 'react';
import moment from 'moment';
import {View, Text, Image, Pressable, useWindowDimensions, ActivityIndicator} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { theme } from '../constants';

const LargeCard = ({NewsChannel, title, image, PostedTime,newsurl}) => {
  const{width}=useWindowDimensions();
  const navigation = useNavigation();


  return (
    <Pressable
    android_ripple={{borderless:false,color:'#c4c4c4',radius:320,}}
    style={{marginVertical:8,marginHorizontal:5,width:width.toString()-10,alignSelf:'center',backgroundColor:theme.colors.White,borderRadius:10,overflow:'hidden'}}
      onPress={() => {
        navigation.navigate('Post',{
          url:newsurl,
          title:title
        });
      }}>
      <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
        <View style={{flexDirection:'column',width: theme.constants.screenWidth-20,borderWidth:1,borderRadius:10,borderColor:'#c4c4c4'}}>
        <Image
            progressiveRenderingEnabled={true}
            loadingIndicatorSource={require('../assets/images/news-icon.png')}
            fadeDuration={100}
              source={image?{uri:image?.toString()}: require('../assets/images/news-icon.png')}
              style={{width: '100%', height: 200, borderTopLeftRadius: 10,borderTopRightRadius:10}}
            />
          <View style={{flex:1,marginTop:8,padding:16}}>
            <Text style={styles.headerText}>
              {title}
               { `...`}
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:16}}>
              <Text style={styles.timeText}>
                {moment(PostedTime).fromNow()}
              </Text>
              <Text style={styles.categoryText}>
                {NewsChannel }
              </Text>
            </View>
          </View>
          
        </View>
      </View>
    </Pressable>
  );
};

export default LargeCard;
