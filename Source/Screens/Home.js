import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './Style';
import {Header, ImportantNewsCard, TopNewsCard, SmallCard} from '../Components';
import {theme} from '../constants';
// import axios from 'axios';
import articles from '../assets/data';
const Home = () => {
  // React.useEffect(() => {
  //   let dataget=() =>{
  //     var config = {
  //       method: 'GET',
  //       url: 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json',
  //       headers: {

  //       }
  //     };

  //     axios(config)
  //   .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  //   return () => {
  //     dataget();
  //   }
  // }, [])
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

export default Home;
