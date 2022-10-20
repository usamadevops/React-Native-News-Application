import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { NewsList, Category } from '../../../Components';
import Header2 from '../../../Components/Header2';
import API from '../../../../ApiKey';
import Searchbar from '../../../Components/Searchbar';

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
import { ScrollView } from 'react-native-gesture-handler';

const Search = () => {
  const [selectedCategory, setselectedCategory] = React.useState('business')
  const [searchtext, setSearchtext] = React.useState(null);
  const [search, setSearch] = React.useState(null);

  function onClick() {
    setSearch(searchtext);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header2 title="Search any News" />
      <Searchbar text={searchtext} onpress={setSearchtext} onClick={onClick} />
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ height: 33, paddingLeft: 24, marginTop: 8, flexDirection: 'row' }}>
          {Categories.map((cat, index) => {
            return (
              <View style={{ marginRight: 8 }}>
                <Category name={cat} key={index} selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
              </View>
            )
          })}
        </ScrollView>
      </View>
      <View style={{ flex: 1 }}>
        <NewsList queryString={`https://newsapi.org/v2/everything?q=${search}&sortBy=relevancy&apiKey=${API}`} insearch={true} />
      </View>
    </SafeAreaView>
  );
};

export default Search;
