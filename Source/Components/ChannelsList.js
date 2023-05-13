import React from 'react';
import { FlatList } from 'react-native';
import styles from '../../Source/Screens/Style';
import  ChannelCard from './ChannelCard';
import ChannelsData from '../Data/Channels.json';

const ChannelsList = ({ searchtext }) => {
  const renderItem = ({ item, index }) => {
    if (item.name.toLowerCase().includes(searchtext?.toLowerCase())) {
      return (
        <ChannelCard
          key={item.id}
          source={item.id}
          name={item?.name}
          url={item?.url}
          description={item?.description}
          category={item?.category}
          logo={item?.logo}
          country={item?.country}
          language={item?.language}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <FlatList
      style={styles.container}
      data={ChannelsData}
      renderItem={renderItem}
      initialNumToRender={10} // Render 10 items initially
      maxToRenderPerBatch={5} // Render 5 more items per each render batch
      windowSize={10} // Determine the window size (in "pages")
    />
  );
}

export default ChannelsList;
