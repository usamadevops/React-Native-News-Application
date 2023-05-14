import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList} from 'react-native';
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
        return <TopNewsCard TopNews={TopNews} />;
      case 'NewsList':
        return <NewsList queryString={item.data} />;
      default:
        return null;
    }
  };
  
  useEffect(() => {
    let isCancelled = false;
  
    const GetTopNews = async () => {
      setisLoading1(true);
      var config = {
        method: 'GET',
        url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`,
      };
      await axios(config)
        .then(function (response) {
          if (!isCancelled) {
            setTopNews(response.data.articles);
            setisLoading1(false);
          }
        })
        .catch(function (error) {
          if (!isCancelled) {
            seterror(error);
            setisLoading1(false);
          }
        });
    };
  
    GetTopNews();
  
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={DATA}
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        keyExtractor={(item, index) => item.type + index}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Home;