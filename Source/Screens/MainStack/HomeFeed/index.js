import React, { useRef } from 'react';
import { View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import styles from '../../Style';
import {
  Header,
  ImportantNewsCard,
  TopNewsCard,
} from '../../../Components';
import { theme } from '../../../constants';
import API from '../../../../ApiKey';
import axios from 'axios';
import HeadlinesSK from '../../../assets/Skeletons/HeadlinesSk'

import { NewsList } from '../../../Components';
const Home = () => {

  const [TopNews, setTopNews] = React.useState([]);
  const [isLoading1, setisLoading1] = React.useState(false);
const random='World';
  const [error, seterror] = React.useState('');

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
  }

  React.useEffect(() => {

    const TopNews = GetTopNews();
    return () => {
      TopNews;
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView horizontal={false}>
        <ImportantNewsCard />
        {
          isLoading1 ? (
            <View style={styles.Maincontainer}>
              <HeadlinesSK />
            </View>
          ) : (
            <TopNewsCard TopNews={TopNews} />
          )
        }
        <View
          style={{
            borderWidth: 0.4,
            marginHorizontal: 24,
            marginVertical: 16,
            borderColor: theme.colors.LightGray,
          }}
        />
        <NewsList queryString={`https://newsapi.org/v2/everything?q=${random}&sortBy=publishedAt&apiKey=${API}`}  />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
