import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from './styles';
import {mock} from '../constants';
const TopNewsCard = () => {
  return (
    <View style={styles.Maincontainer}>
      <View
        style={{alignSelf: 'flex-start', paddingLeft: 18, paddingVertical: 15}}>
        <Text style={styles.titleText}>News for You</Text>
        <Text style={styles.subTitleText}>Top 5 News of the day</Text>
      </View>

      <FlatList
        data={mock.TopNews}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View style={styles.CardContainer}>
            <View style={styles.ImageContainer}>
              <Image
                source={item.image}
                style={{width: '100%', height: 150, borderRadius: 10}}
              />
            </View>
            <View style={styles.TitleContainer}>
              <Text style={styles.headerText}>{item.title}</Text>
            </View>
            <View style={styles.BottomContainer}>
              <Text style={styles.timeText}>{item.postedTime}</Text>
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TopNewsCard;
