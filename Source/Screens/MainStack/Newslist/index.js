import { SafeAreaView } from 'react-native'
import React from 'react';
import API from '../../../../ApiKey';
import { NewsList } from '../../../Components'
const NewsListScreen = ({ navigation, route }) => {
    const { datasearch } = route.params;
    React.useEffect(()=>{
        navigation.setOptions({title:'Latest MonkeyPox News'})
      },[navigation]);
  return (
    <SafeAreaView style={{flex:1}}>
    <NewsList queryString={`https://newsapi.org/v2/everything?q=${datasearch}&apiKey=${API}`} />
    </SafeAreaView>
  )
}

export default NewsListScreen