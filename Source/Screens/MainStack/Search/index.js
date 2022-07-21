import React from 'react';
import {View,Text} from 'react-native';
import { NewsList } from '../../../Components';
// import {HomeIcon, NotificationIcon} from '../assets/Icons';
import Header2 from '../../../Components/Header2';
import Searchbar from '../../../Components/Searchbar';
// import Tab from '../../../navigation/Tab';
import styles from '../../Style';

const Search = () => {
  const [searchtext, setSearchtext] = React.useState(null);
  function onChange(text) {
    setSearchtext(text);
  }
  React.useEffect(() => {
    console.log(searchtext);

  },[searchtext])
  return (
    <View style={styles.container}>
      <Header2 title="Search" />
      <Searchbar text={searchtext} onpress={(text)=>onChange(text)}/>
      <View style={{ flex: 1 }}>{
        searchtext === null ? (
          <View style={{ flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>There is Nothing here Why don't you search something</Text>
          </View>
        ) : (
          <NewsList queryString={searchtext} insearch={true}/>
        )
      }
     
      </View>
    </View>
  );
};

export default Search;
