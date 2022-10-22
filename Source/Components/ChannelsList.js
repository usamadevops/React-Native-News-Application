import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from '../../Source/Screens/Style';
import  ChannelCard from './ChannelCard';
import ChannelsData from '../Data/Channels.json';
const ChannelsList = ({searchtext}) => {
  return (
    <View style={styles.container}>
       <ScrollView horizontal={false}>
{
              ChannelsData?.map((items, index) => {
              if(items.name.toLowerCase().includes(searchtext?.toLowerCase())){
          return (
            <View key={index}>
              <ChannelCard
                key={items.id}
                name={items?.name}
                url={items?.url}
                description={items?.description}
                category={items?.category}
                country={items?.country}
                language={items?.language}
              />
            </View>
          );
              }
        })
     
}
       </ScrollView>
      </View>
  )
}

export default ChannelsList;