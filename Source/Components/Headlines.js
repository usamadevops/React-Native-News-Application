import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import styles from '../Screens/Style';
import {ImportantNewsCard, TopNewsCard, SmallCard} from '../Components';
import {theme} from '../constants';
// import axios from 'axios';
import articles from '../assets/data';
const Latest = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.White,
      }}>
      <ScrollView horizontal={false}>
        <View
          style={{
            borderWidth: 0.4,
            marginHorizontal: 20,
            borderColor: theme.colors.LightGray,
          }}
        />
        {articles.map(items => {
          return (
            <View key={items.source.id}>
              <SmallCard
                title={items.title}
                NewsChannel={items.source.name}
                PostedTime={items.publishedAt}
                image={items.urlToImage.toString()}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const World = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.White,
      }}>
      <ScrollView horizontal={false}>
        <View
          style={{
            borderWidth: 0.4,
            marginHorizontal: 20,
            borderColor: theme.colors.LightGray,
          }}
        />
        {articles.map(items => {
          return (
            <View key={items.source.id}>
              <SmallCard
                title={items.title}
                NewsChannel={items.source.name}
                PostedTime={items.publishedAt}
                image={items.urlToImage.toString()}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const Technology = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.White,
      }}>
      <ScrollView horizontal={false}>
        <View
          style={{
            borderWidth: 0.4,
            marginHorizontal: 20,
            borderColor: theme.colors.LightGray,
          }}
        />
        {articles.map(items => {
          return (
            <View key={items.source.id}>
              <SmallCard
                title={items.title}
                NewsChannel={items.source.name}
                PostedTime={items.publishedAt}
                image={items.urlToImage.toString()}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const Toys = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.White,
      }}>
      <ScrollView horizontal={false}>
        <View
          style={{
            borderWidth: 0.4,
            marginHorizontal: 20,
            borderColor: theme.colors.LightGray,
          }}
        />
        {articles.map(items => {
          return (
            <View key={items.source.id}>
              <SmallCard
                title={items.title}
                NewsChannel={items.source.name}
                PostedTime={items.publishedAt}
                image={items.urlToImage.toString()}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const Fashion = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.White,
      }}>
      <ScrollView horizontal={false}>
        <View
          style={{
            borderWidth: 0.4,
            marginHorizontal: 20,
            borderColor: theme.colors.LightGray,
          }}
        />
        {articles.map(items => {
          return (
            <View key={items.source.id}>
              <SmallCard
                title={items.title}
                NewsChannel={items.source.name}
                PostedTime={items.publishedAt}
                image={items.urlToImage.toString()}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const Sports = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.White,
      }}>
      <ScrollView horizontal={false}>
        <View
          style={{
            borderWidth: 0.4,
            marginHorizontal: 20,
            borderColor: theme.colors.LightGray,
          }}
        />
        {articles.map(items => {
          return (
            <View key={items.source.id}>
              <SmallCard
                title={items.title}
                NewsChannel={items.source.name}
                PostedTime={items.publishedAt}
                image={items.urlToImage.toString()}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export {Latest, World, Sports, Technology, Toys, Fashion};
