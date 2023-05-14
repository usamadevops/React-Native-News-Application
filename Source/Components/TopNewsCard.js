import React, { memo } from 'react';
import moment from 'moment';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const TopNewsCard = ({ TopNews, inProfile }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Maincontainer}>
      <View
        style={{ alignSelf: 'flex-start', paddingLeft: 18, paddingVertical: 15 }}>
        <Text style={styles.titleText}>{!inProfile ? `What's happening in the World?` : '• Headlines'}</Text>
        <Text style={styles.subTitleText}>{!inProfile ? `Here's You can see` : `Scroll Right to see more«`} </Text>
      </View>
      <FlatList
        data={TopNews}
        horizontal={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        initialNumToRender={10} // Render 10 items initially
        maxToRenderPerBatch={5} // Render 5 more items per each render batch
        windowSize={5} 
        automaticallyAdjustsScrollIndicatorInsets
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable style={styles.CardContainer} key={index} onPress={() => {
            navigation.navigate('Post', {
              url: item?.url,
              title: item?.title
            });
          }}
            android_ripple={{ borderless: false, color: '#c4c4c4', radius: 240, }}
          >
            <View >
              {
                item.urlToImage === '' ? (
                  <Image
                    progressiveRenderingEnabled={true}
                    loadingIndicatorSource={require('../assets/images/news-icon.png')}
                    fadeDuration={100}
                    source={require('../assets/images/news-icon.png')}
                    style={{ width: '100%', height: 150, borderRadius: 10 }}
                  />
                ) : (
                  <FastImage
                    fallback={true}
                    style={{ width: '100%', height: 150, borderRadius: 10 }}
                    source={{
                      uri: item?.urlToImage,
                      priority: FastImage.priority.high,
                      cache: FastImage.cacheControl.immutable,                    }}
                  />
                )
              }
            </View>
            <View style={styles.TitleContainer}>
              <Text style={styles.headerText} textBreakStrategy="balanced">{item?.description?.slice(0, 125)}</Text>
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

export default memo(TopNewsCard);
