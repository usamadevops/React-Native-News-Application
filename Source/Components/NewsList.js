import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import styles from '../../Source/Screens/Style';
import SmallCard from './SmallCard';
import axios from 'axios';
import SmallCardSK from '../assets/Skeletons/SmallCardSK';
import { ReadDataSingleString } from '../Utils/AsyncStorage';
import LargeCard from './LargeCard';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const NewsList = ({ ListHeaderComponent,queryString }) => {
  const navigation = useNavigation();
  const focused = useIsFocused();
  const [articles, setArticles] = useState([]);
  const [layout, setLayout] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');


  
  useEffect(() => {
    let isCancelled = false;
  
    ReadDataSingleString('Layout').then((res) => {
      if (!isCancelled) {
        setLayout(res === 'true');
      }
    });
  
    return () => {
      isCancelled = true;
    };
  }, [focused]);
  
  useEffect(() => {
    let isCancelled = false;
    const getArticles = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(queryString);
        if (!isCancelled) {
          setArticles(response.data.articles);
          setIsLoading(false);
        }
      } catch (error) {
        if (!isCancelled) {
          setError(error);
          setIsLoading(false);
        }
      }
    };
    getArticles();
    return () => {
      isCancelled = true;
    };
  }, [queryString]);

  const renderItem = useCallback(({ item, index }) => {
    return (
      <View key={index}>
        {!layout ? (
          <LargeCard
            title={item?.description}
            newsurl={item?.url}
            NewsChannel={item?.source.name}
            PostedTime={item?.publishedAt}
            image={item?.urlToImage}
          />
        ) : (
          <SmallCard
            title={item?.title}
            newsurl={item?.url}
            NewsChannel={item?.source.name}
            PostedTime={item?.publishedAt}
            image={item?.urlToImage}
          />
        )}
      </View>
    );
  }, [layout]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.Maincontainer}>
          <View style={{ marginVertical: 16 }}>
            <SmallCardSK />
          </View>
          <View style={{ marginVertical: 16 }}>
            <SmallCardSK />
          </View>
          <View style={{ marginVertical: 16 }}>
            <SmallCardSK />
          </View>
        </View>
      ) : (
        <FlatList
          data={articles}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default NewsList;
