import React from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import styles from './Style';
import {Header, ImportantNewsCard, TopNewsCard, SmallCard} from '../Components';
import {theme} from '../constants';


const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView horizontal={false}>
        <ImportantNewsCard />
        <TopNewsCard />
        <View
          style={{
            borderWidth: 0.4,
            marginHorizontal: 20,
            borderColor: theme.colors.LightGray,
          }}
        />

        <SmallCard navigationscreen="Post" />
      </ScrollView>
   
    </View>
  );
};

export default Home;
