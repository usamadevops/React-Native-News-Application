import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {Header2, HeaderText, Statscard, TopicsCard} from '../../../Components';
import {Topics} from '../../../constants/mock';
import styles from '../../Style';
const Stats = () => {
  return (
    <View style={styles.container}>
      <Header2 title="Summary Stats" />
      <ScrollView>
        <HeaderText text="YOUR STATS" />
        <Statscard />
        <HeaderText text="FAVORITE TOPICS" />
        <View style={{marginVertical: 10}}>
          {Topics.map(item => (
            <TopicsCard
              key={item.id}
              letter={item.name.charAt(0)}
              TopicName={item.name}
              Followers={item.Followers}
            />
          ))}
        </View>
        <HeaderText text="SAVED NEWS" />
      </ScrollView>
    </View>
  );
};

export default Stats;
