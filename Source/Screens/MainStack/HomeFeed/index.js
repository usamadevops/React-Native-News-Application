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
import HeadlinesSK from '../../../assets/Skeletons/HeadlinesSk'
import SmallCardSK from '../../../assets/Skeletons/SmallCardSK'

const Home = () => {
  const [Articles, setArticles] = React.useState([]);
  const [TopNews, setTopNews] = React.useState([]);
  const [isLoading1, setisLoading1] = React.useState(false);
  const [isLoading2, setisLoading2] = React.useState(false);
  const [error, seterror] = React.useState('')
  const GetTopNews=async()=>{
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
  const GetArticles=async()=>{
    setisLoading2(true);
    var config = {
      method: 'GET',
      url: `https://newsapi.org/v2/everything?q=World&apiKey=${API}`,
    };
    await axios(config)
      .then(function (response) {
        setArticles(response.data.articles);
        setisLoading2(false);
      })
      .catch(function (error) {
        seterror(error);
        setisLoading2(false);
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
      {
        isLoading1?(
<View style={styles.Maincontainer}>
  <HeadlinesSK/>
</View>
        ):(
          <TopNewsCard TopNews={TopNews} />
        )
        }
        <View
          style={{
            borderWidth: 0.4,
            marginHorizontal: 24,
            marginVertical:16,
            borderColor: theme.colors.LightGray,
          }}
        />
         
          {
            isLoading2?(
    <View style={styles.Maincontainer}>
      <View style={{marginVertical:16}}>
      <SmallCardSK/>
      </View>
      <View style={{marginVertical:16}}>
      <SmallCardSK/>
      </View>
      <View style={{marginVertical:16}}>
      <SmallCardSK/>
      </View>
    </View>
            ):(
        Articles?.map((items, index) => {
          return (
            <View key={index}>
              <SmallCard
                title={items.title}
                newsurl={items.url}
                NewsChannel={items?.source.name}
                PostedTime={items?.publishedAt}
                image={items?.urlToImage.toString()}
              />
            </View>
          );
        })
      )
}
      </ScrollView>
    </View>
  );
};

export default Home;
