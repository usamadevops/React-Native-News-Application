import React from 'react';
import {View,SafeAreaView} from 'react-native';
import { NewsList } from '../../../Components';
import Header2 from '../../../Components/Header2';
import API from '../../../../ApiKey';
import Searchbar from '../../../Components/Searchbar';
import styles from '../../Style';

const Search = () => {
  const [searchtext, setSearchtext] = React.useState(null);
  const [search,setSearch]=React.useState(null);

function onClick(){
  setSearch(searchtext);
}
  return (
    <SafeAreaView style={styles.container}>
      <Header2 title="Search" />
      <Searchbar text={searchtext} onpress={setSearchtext} onClick={onClick}/>
      <View style={{ flex: 1 }}>       
          <NewsList queryString={`https://newsapi.org/v2/everything?q=${search}&apiKey=${API}`} insearch={true} /> 
      </View>
    </SafeAreaView>
  );
};

export default Search;
