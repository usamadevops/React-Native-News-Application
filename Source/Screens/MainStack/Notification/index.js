import React from 'react';
import {View} from 'react-native';
import {ChannelsList, Header2} from '../../../Components';
import styles from '../../Style';
const Notification = () => {
  console.log('chaneels')
  return (
    <View style={styles.container}>
      <Header2 title="Browse Channels" />
      <ChannelsList />
    </View>
  );
};

export default Notification;
