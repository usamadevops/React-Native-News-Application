import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from '../../Style';
import {
  Header,
  ImportantNewsCard,
  TopNewsCard,
  SmallCard,
} from '../../../Components';
import {theme} from '../../../constants';
import API from '../../../../ApiKey';
import axios from 'axios';

const Home = () => {
  const [Articles, setArticles] = React.useState([]);
  const [TopNews, setTopNews] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(false);
  const GetTopNews=async()=>{
    setisLoading(true);
    var config = {
      method: 'GET',
      url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`,
    };
    await axios(config)
      .then(function (response) {
        setTopNews(response.data.articles);
        console.log(response.data.articles)
        setisLoading(false);
      })
      .catch(function (error) {
      console.log(error);
      });
  }
  const GetArticles=async()=>{
    setisLoading(true);
    var config = {
      method: 'GET',
      url: `https://newsapi.org/v2/everything?q=Pak&apiKey=${API}`,
    };
    await axios(config)
      .then(function (response) {
        setArticles(response.data.articles);
        console.log(response.data.articles)
        setisLoading(false);
      })
      .catch(function (error) {
      console.log(error);
      });
  }
  React.useEffect(() => {
    const posts=GetArticles();
    const TopNews=GetTopNews();
    return()=>{
posts;
TopNews;
    }
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView horizontal={false}>
        <ImportantNewsCard />
        <TopNewsCard TopNews={TopNews}/>
        <View
          style={{
            borderWidth: 0.4,
            marginHorizontal: 24,
            marginVertical:16,
            borderColor: theme.colors.LightGray,
          }}
        />
        {!isLoading && Articles?.map((items, index) => {
          return (
            <View key={index}>
              <SmallCard
                title={items.title}
                newsurl={items.url}
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

export default Home;
