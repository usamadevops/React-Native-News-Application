import React from 'react';
import {View, Text, FlatList, Image, Animated, ActivityIndicator} from 'react-native';
import styles from './styles';

const TopNewsCard = ({TopNews}) => {
  const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

  return (
    <View style={styles.Maincontainer}>
      <View
        style={{alignSelf: 'flex-start', paddingLeft: 18, paddingVertical: 15}}>
        <Text style={styles.titleText}>News for You</Text>
        <Text style={styles.subTitleText}>Top 5 News of the day</Text>
      </View>

      <AnimatedFlatlist
        data={TopNews}
        horizontal={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        bounces={true}
        keyExtractor={item => item.title}
        renderItem={({item, index}) => (
          <View style={styles.CardContainer} key={index}>
            <View >
              <Image
                onLoadStart={() => {
                  return (
                  <ActivityIndicator size={'small'}/>
                )}}
                source={{uri:item?.urlToImage.toString()}}
                style={{width: '100%', height: 150, borderRadius: 10}}
              />
            </View>
            <View style={styles.TitleContainer}>
              <Text style={styles.headerText} textBreakStrategy="balanced">{item?.description?.slice(0,125)}</Text>
            </View>
            <View style={styles.BottomContainer}>
              <Text style={styles.timeText}>{item?.publishedAt?.slice(0, 10)}</Text>
              <Text style={styles.categoryText}>{item.source.name}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TopNewsCard;
