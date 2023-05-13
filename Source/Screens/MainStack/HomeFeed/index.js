import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, Dimensions } from 'react-native';
import styles from '../../Style';
import {
  Header,
  ImportantNewsCard,
  TopNewsCard,
} from '../../../Components';
import { theme } from '../../../constants';
import API from '../../../../ApiKey';
import axios from 'axios';
import HeadlinesSK from '../../../assets/Skeletons/HeadlinesSk';
import { NewsList } from '../../../Components';

const DATA = [
  { type: "ImportantNewsCard" },
  { type: "TopNewsCard" },
  { type: "NewsList", data: `https://newsapi.org/v2/everything?q=CryptoCurrency&sortBy=publishedAt&apiKey=${API}` },
];


const Home = () => {
  const [TopNews, setTopNews] = useState([]);
  const [isLoading1, setisLoading1] = useState(false);
  const [error, seterror] = useState('');

  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'ImportantNewsCard':
        return <ImportantNewsCard />;
      case 'TopNewsCard':
        // Include your TopNewsCard logic here
        return <TopNewsCard TopNews={TopNews} />;
      case 'NewsList':
        return <NewsList queryString={item.data} />;
      default:
        return null;
    }
  };
  
  const GetTopNews = async () => {
    setisLoading1(true);
    var config = {
      method: 'GET',
      url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`,
    };
    await axios(config)
      .then(function (response) {
        setTopNews(response.data.articles);
        setisLoading1(false);
      })
      .catch(function (error) {
        seterror(error);
        setisLoading1(false);
      });
  };

  useEffect(() => {
    const TopNews = GetTopNews();
    return () => {
      TopNews.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => item.type + index}
        renderItem={renderItem}
        ListHeaderComponent={() => isLoading1 ? <HeadlinesSK /> : null}
      />
    </SafeAreaView>
  );
};

export default Home;