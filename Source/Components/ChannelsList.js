import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from '../../Source/Screens/Style';
import  ChannelCard from './ChannelCard';
import API from '../../ApiKey';
import axios from 'axios';
import SmallCardSK from '../assets/Skeletons/SmallCardSK'

const ChannelsList = () => {
 
  const [Channels, setChannels] = React.useState([]);
  const [isLoading2, setisLoading2] = React.useState(false);
  const [error, seterror] = React.useState('');
  const GetChannels=async()=>{
    setisLoading2(true);
    var config = {
      method: 'GET',
      url: `https://newsapi.org/v2/top-headlines/sources?apiKey=${API}`,
    };
    await axios(config)
        .then(function (response) {
            console.log('soruces',response);
        setChannels(response.data.sources);
        setisLoading2(false);
      })
      .catch(function (error) {
        seterror(error);
        setisLoading2(false);
      });
  }
  React.useEffect(() => {
   GetChannels();
  }, []);
  return (
    <View style={styles.container}>
       <ScrollView horizontal={false}>
          {
            isLoading2?(
    <View style={styles.Maincontainer}>
      <View style={{marginVertical:16}}>
      <SmallCardSK/>
      </View>
      <View style={{marginVertical:16}}>
      <SmallCardSK/>
      </View>
      <View style={{marginVertical:16}}>
      <SmallCardSK/>
      </View>
    </View>
            ):(
        Channels?.map((items, index) => {
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
        })
      )
}
       </ScrollView>
      </View>
  )
}

export default ChannelsList;