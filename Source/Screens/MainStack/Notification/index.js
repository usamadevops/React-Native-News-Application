import React from 'react';
import {SafeAreaView} from 'react-native';
import {ChannelsList, Header2, Searchbar} from '../../../Components';
import styles from '../../Style';
const Notification = () => {
  const [searchtext, setSearchtext] = React.useState('')

  return (
    <SafeAreaView style={[styles.container,{ alignItems: 'center',}]}>
      <Header2 title="Browse Channels" />
      <Searchbar text={searchtext} onpress={setSearchtext} placeholder={'Search Channels'}/>  
      <ChannelsList searchtext={searchtext}/>
    </SafeAreaView>
  );
};

export default Notification;
