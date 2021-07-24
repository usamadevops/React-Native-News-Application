import React from 'react';
import {View, Text} from 'react-native';
import {Header2, HeaderText, Statscard, TopicsCard} from '../Components';

import styles from './Style';
const Stats = () => {
  return (
    <View style={styles.container}>
      <Header2 title="Summary Stats" />
      <HeaderText text="YOUR STATS" />
      <Statscard />
      <HeaderText text="FAVORITE TOPICS" />
      <TopicsCard TopicName="Technology" Followers={'1 Million'} />
      <TopicsCard TopicName="Technology" Followers={'1.5K'} />
      <TopicsCard TopicName="Technology" Followers={'200K'} />
    </View>
  );
};

export default Stats;
