import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './Style';
import {Header, ImportantNewsCard, TopNewsCard, SmallCard} from '../components';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView horizontal={false}>
        <ImportantNewsCard />
        <TopNewsCard />
        <SmallCard />
      </ScrollView>
    </View>
  );
};

export default Home;
