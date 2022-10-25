import React from 'react';
import { View, SafeAreaView,Dimensions,ScrollView } from 'react-native';
import { NewsList, Category } from '../../../Components';
import Header2 from '../../../Components/Header2';
import API from '../../../../ApiKey';
import Searchbar from '../../../Components/Searchbar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Filterpopup} from '../../../Components';
import { useSharedValue, withSpring } from 'react-native-reanimated';
const { height: SCREEN_HEIGHT } = Dimensions.get('window');
let Categories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
]

import styles from '../../Style';

const Search = () => {
  const [selectedCategory, setselectedCategory] = React.useState('')
  const [searchtext, setSearchtext] = React.useState('');
  const translateY = useSharedValue(0);//Sheet height
  const OpenSheet=()=>{
      translateY.value=withSpring(-SCREEN_HEIGHT/1.4,{damping:50})
      console.log(translateY,SCREEN_HEIGHT);
  }
  const [search, setSearch] = React.useState(`https://newsapi.org/v2/everything?q=Inflation&sortBy=relevancy&apiKey=${API}`);
  function onClick() {
    if(searchtext!==''){  
 setSearch(`https://newsapi.org/v2/everything?q=${searchtext}&sortBy=relevancy&apiKey=${API}`)
    }  
}
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <SafeAreaView style={styles.container}>
      <Header2 title="Search any News" icon="filter" onPress={OpenSheet}/>
      <Searchbar text={searchtext} onpress={setSearchtext} onClick={onClick} />
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ height: 33, paddingLeft: 24, marginTop: 8, flexDirection: 'row' }}>
          {Categories.map((cat, index) => {
            return (
              <View style={{ marginRight: 8 }} key={index} >
                <Category name={cat} selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} setSearch={setSearch}/>
              </View>
            )
          })}
        </ScrollView>
      </View>
      <View style={{ flex: 1 }}>
        <NewsList queryString={search} insearch={true} />
      </View>
    </SafeAreaView>
    <Filterpopup translateY={translateY}  />
    </GestureHandlerRootView>
  );
};

export default Search;
