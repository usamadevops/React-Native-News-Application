import React, { useEffect, useState,useCallback } from 'react';
import { SafeAreaView, FlatList, RefreshControl,Text,Button,View} from 'react-native';
import styles from '../../Style';
import {
  Header,
  ImportantNewsCard,
  TopNewsCard,
} from '../../../Components';
import API from '../../../../ApiKey';
import axios from 'axios';
import { NewsList } from '../../../Components';

const DATA = [
  { type: "ImportantNewsCard" },
  { type: "TopNewsCard" },
  { type: "NewsList", data: `https://newsapi.org/v2/everything?q=CryptoCurrency&pageSize=100&sortBy=popularity&apiKey=${API}` },
];


const Home = () => {
  const [TopNews, setTopNews] = useState([]);
  const [isLoading1, setisLoading1] = useState(false);
  const [error, seterror] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    GetTopNews().then(() => setRefreshing(false));
  }, []);
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


  if(error) {
    return (
      <SafeAreaView style={styles.container}>
        <Header/>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{marginBottom:10}}>Getting some error!</Text>
        <Button title='Refresh Page' onPress={()=>{GetTopNews()}}/>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={DATA}
        initialNumToRender={5}
        maxToRenderPerBatch={2}
        windowSize={5} 
        keyExtractor={(item, index) => item.type + index}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Home;