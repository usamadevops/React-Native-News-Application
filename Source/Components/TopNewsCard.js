import React from 'react';
import moment from 'moment';
import {View, Text, FlatList, Image, Animated, ActivityIndicator, Pressable} from 'react-native';
import styles from './styles';
import { theme } from '../constants';
import { useNavigation } from '@react-navigation/native';

const TopNewsCard = ({TopNews,inProfile}) => {
  console.log(TopNews);
  const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);
const navigation =useNavigation();
  return (
    <View style={styles.Maincontainer}>
     
          <View
          style={{alignSelf: 'flex-start', paddingLeft: 18, paddingVertical: 15}}>
          <Text style={styles.titleText}>{!inProfile?`What's happening in the World?`:'• Headlines'}</Text>
          <Text style={styles.subTitleText}>{!inProfile?`Here's You can see`:`Scroll Right to see more«`} </Text>
        </View>
       
      
     
      <AnimatedFlatlist
        data={TopNews}
        horizontal={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        bounces={true}
        pagingEnabled
        automaticallyAdjustsScrollIndicatorInsets
        legacyImplementation={false}
        keyExtractor={item => item.title}
        renderItem={({item, index}) => (
          <Pressable style={styles.CardContainer} key={index} onPress={()=>{
            navigation.navigate('Post',{
              url:item?.url,
              title:item?.title
            });
          }}
          android_ripple={{borderless:false,color:'#c4c4c4',radius:240,}}
          >
            <View >
              <Image
                          progressiveRenderingEnabled={true}
              loadingIndicatorSource={require('../assets/images/news-icon.png')}
              fadeDuration={100}
                  source={item?.urlToImage!==null?{uri:item?.urlToImage.toString()}: require('../assets/images/news-icon.png')}
                style={{width: '100%', height: 150, borderRadius: 10}}
              />
            </View>
            <View style={styles.TitleContainer}>
              <Text style={styles.headerText} textBreakStrategy="balanced">{item?.description?.slice(0,125)}</Text>
            </View>
            <View style={styles.BottomContainer}>
              <Text style={styles.timeText}>{moment(item?.publishedAt).fromNow()}</Text>
              <Text style={styles.categoryText}>{item.source.name}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default TopNewsCard;
