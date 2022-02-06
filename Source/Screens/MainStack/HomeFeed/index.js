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
import articles from '../../../assets/data';
const Home = () => {
  const [Articles, setArticles] = React.useState([])
  React.useEffect(() => {
    console.log('in effect');
    var config = {
      method: 'GET',
      url: `https://newsapi.org/v2/everything?q=Apple&from=2021-11-19&sortBy=popularity&apiKey=${API}`,
      headers: {

      }
    };
    let temparr = [];
    axios(config)
      .then(function (response) {
       temparr.push(response.data)
        setArticles(temparr);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
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
        {Articles.map((items,index) => {
          return (
            <View key={index}>
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

export default Home;
