import React from 'react';
import moment from 'moment';
import {View, Text, FlatList, Image, Animated, ActivityIndicator} from 'react-native';
import styles from './styles';
import { theme } from '../constants';

const TopNewsCard = ({TopNews}) => {
  const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

  return (
    <View style={styles.Maincontainer}>
      <View
        style={{alignSelf: 'flex-start', paddingLeft: 18, paddingVertical: 15}}>
        <Text style={styles.titleText}>What's happening in the World?</Text>
        <Text style={styles.subTitleText}>Here's You can see </Text>
      </View>

      <AnimatedFlatlist
        data={TopNews}
        horizontal={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        bounces={true}
        automaticallyAdjustsScrollIndicatorInsets
        legacyImplementation={false}
        keyExtractor={item => item.title}
        renderItem={({item, index}) => (
          <View style={styles.CardContainer} key={index}>
            <View >
              <Image
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
          </View>
        )}
      />
    </View>
  );
};

export default TopNewsCard;
