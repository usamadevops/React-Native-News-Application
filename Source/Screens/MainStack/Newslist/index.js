import { SafeAreaView } from 'react-native'
import React from 'react';
import API from '../../../../ApiKey';
import { NewsList } from '../../../Components'
const NewsListScreen = ({ navigation, route }) => {
    const { datasearch } = route.params;
    React.useEffect(()=>{
        navigation.setOptions({title:'AI Advancements'})
      },[navigation]);
  return (
    <SafeAreaView style={{flex:1}}>
    <NewsList queryString={`https://newsapi.org/v2/everything?q=${datasearch}&sortBy=publishedAt&apiKey=${API}`} />
    </SafeAreaView>
  )
}

export default NewsListScreen