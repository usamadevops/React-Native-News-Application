import { View, Text } from 'react-native'
import React from 'react'
import { NewsList } from '../../../Components'
const NewsListScreen = ({ navigation, route }) => {
    const { datasearch } = route.params;
    React.useEffect(()=>{
        navigation.setOptions({title:'Latest MonkeyPox News'})
      },[navigation]);
  return (
    <View style={{flex:1}}>
    <NewsList queryString={datasearch} insearch={false}/>
    </View>
  )
}

export default NewsListScreen