import React from 'react';
import { View, ScrollView} from 'react-native';
import { SmallCard} from '../Components';
import {theme} from '../constants';
import API from '../../ApiKey';
import axios from 'axios';

const CategoryNewsList = ({ route }) => {
  const { category,Domainurl} = route.params;
  const [Articles, setArticles] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(false);
  const GetArticles=async()=>{
    setisLoading(true);
    var config = {
      method: 'GET',
      url: `https://newsapi.org/v2/everything?domains=${Domainurl}&apiKey=${API}`,
    };
    await axios(config)
      .then(function (response) {
        setArticles(response.data.articles);
        console.log('response',response.data.articles)
        setisLoading(false);
      })
      .catch(function (error) {
      console.log(error);
      });
  }
  React.useEffect(() => {
    const posts=GetArticles();
    return()=>{
posts;
    }
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.White,
      }}>
    
        <View
          style={{
            borderWidth: 0.4,
            marginHorizontal: 20,
            borderColor: theme.colors.LightGray,
          }}
        />
        {!isLoading && Articles?.map(items => {
          return (
            <View key={items.source.id}>
              <SmallCard
                title={items?.title}
                newsurl={items?.url}
                NewsChannel={items?.source.name}
                PostedTime={items?.publishedAt}
                image={items?.urlToImage}
              />
            </View>
          );
        })}
     
    </View>
  );
};

export default CategoryNewsList;
