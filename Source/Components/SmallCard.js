import React , { useCallback } from 'react';
import moment from 'moment';
import { View, Text, Image, Pressable, useWindowDimensions, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../constants';
import FastImage from 'react-native-fast-image'

const SmallCard = React.memo(({ NewsChannel, title, image, PostedTime, newsurl }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate('Post', {
      url: newsurl,
      title: title
    });
  }, [navigation, newsurl, title]);
  return (
    <Pressable
      style={{ elevation: 1, marginVertical: 5, marginHorizontal: 5, width: width.toString() - 10, alignSelf: 'center', backgroundColor: theme.colors.White, borderRadius: 10, overflow: 'hidden' }}
      onPress={handlePress}>
      <View style={styles.Maincontainer}>
        <View style={styles.SmallCardContainer}>
          <View style={styles.CardLeftContainer}>
            <Text style={styles.headerText}>
              {title}
              {`...`}
            </Text>
            <View style={styles.BottomContainer}>
              <Text style={styles.timeText}>
                {moment(PostedTime).fromNow()}
              </Text>
              <Text style={styles.categoryText}>
                {NewsChannel}
              </Text>
            </View>
          </View>
          <View style={styles.CardRightContainer}>
            {!image ? (
              <Image
                progressiveRenderingEnabled={true}
                loadingIndicatorSource={require('../assets/images/news-icon.png')}
                fadeDuration={100}
                source={require('../assets/images/news-icon.png')}
                style={{ width: 85, height: 85, borderRadius: 10 }}

              />
            ) : (
              <FastImage
                fallback={true}
                style={{ width: 85, height: 85, borderRadius: 10 }}
                source={{
                  uri: image?.toString(),
                  priority: FastImage.priority.normal,
                  cache: 'web'
                }}
              />
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );
});

export default SmallCard;
