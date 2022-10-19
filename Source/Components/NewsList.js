import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from '../../Source/Screens/Style';
import  SmallCard from './SmallCard';
import API from '../../ApiKey';
import axios from 'axios';
import SmallCardSK from '../assets/Skeletons/SmallCardSK'
const NewsList = ({ queryString }) => {
  const [Articles, setArticles] = React.useState([]);
  const [isLoading2, setisLoading2] = React.useState(false);
  const [error, seterror] = React.useState('');
  const GetArticles=async()=>{
    setisLoading2(true);
    var config = {
      method: 'GET',
      url:queryString
    };
    await axios(config)
      .then(function (response) {
        setArticles(response.data.articles);
        setisLoading2(false);
      })
      .catch(function (error) {
        seterror(error);
        console.log('err',error);
        setisLoading2(false);
      });
  }
  React.useEffect(() => {
GetArticles();
    },  [queryString])

 


  return (
    <View style={styles.container}>
       <ScrollView horizontal={false}>
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
                image={items?.urlToImage}
              />
            </View>
          );
        })
      )
}
       </ScrollView>
      </View>
  )
}

export default NewsList