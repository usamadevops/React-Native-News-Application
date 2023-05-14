import React from 'react';
import { View, SafeAreaView, Dimensions, FlatList } from 'react-native';
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
    console.log('sdfsd',translateY,SCREEN_HEIGHT);
      // translateY.value=withSpring(-SCREEN_HEIGHT/1.4,{damping:50})
  }
  const [search, setSearch] = React.useState(`https://newsapi.org/v2/everything?q=AI&sortBy=latest&apiKey=${API}`);
  function onClick() {
    if(searchtext!==''){  
 setSearch(`https://newsapi.org/v2/everything?q=${searchtext}&sortBy=latest&apiKey=${API}`)
    }  
}
const renderCategory = ({ item, index }) => (
  <View style={{ marginRight: 8 }} key={index}>
    <Category name={item} selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} setSearch={setSearch} />
  </View>
);

const ListHeaderComponent=()=>{
  return(
    <>
      <Searchbar text={searchtext} onpress={setSearchtext} onClick={onClick} />
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCategory}
          contentContainerStyle={{ height: 33, paddingLeft: 24, marginTop: 8 }}
        />
      </View>
    </>
  )
}

return (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={styles.container}>
    <Header2 title="Search any News" icon="filter" onPress={OpenSheet()} />
      <View style={{ flex: 1 }}>
        <NewsList queryString={search} insearch={true} ListHeaderComponent={ListHeaderComponent} />
      </View>
    </SafeAreaView>
    <Filterpopup translateY={translateY} />
  </GestureHandlerRootView>
);
};


export default Search;
