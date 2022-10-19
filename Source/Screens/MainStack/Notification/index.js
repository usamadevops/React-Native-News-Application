import React from 'react';
import {SafeAreaView} from 'react-native';
import {ChannelsList, Header2} from '../../../Components';
import styles from '../../Style';
const Notification = () => {
  console.log('chaneels')
  return (
    <SafeAreaView style={styles.container}>
      <Header2 title="Browse Channels" />
      <ChannelsList />
    </SafeAreaView>
  );
};

export default Notification;
