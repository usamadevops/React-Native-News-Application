import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from '../../Source/Screens/Style';
import SmallCard from './SmallCard';
import API from '../../ApiKey';
import axios from 'axios';
import SmallCardSK from '../assets/Skeletons/SmallCardSK'
import { useNavigation } from '@react-navigation/native';
const NewsList = ({ queryString }) => {
  const navigation=useNavigation();
  const [Articles, setArticles] = React.useState([]);
  const [isLoading2, setisLoading2] = React.useState(false);
  const [error, seterror] = React.useState('');
  const GetArticles = async () => {
    setisLoading2(true);
    var config = {
      method: 'GET',
      url: queryString
    };
    await axios(config)
      .then(function (response) {
        setArticles(response.data.articles);
        setisLoading2(false);
      })
      .catch(function (error) {
        seterror(error);
        console.log('err', error);
        setisLoading2(false);
      });
  }
  React.useEffect(() => {
    GetArticles();
  }, [queryString])

//   var offset = 10;

//   const onScroll = (event)=>{
//     var currentOffset = event.nativeEvent.contentOffset.y;
//         var direction = currentOffset > offset ? 'down' : 'up';
//     offset = currentOffset;
//     //console.log(direction);
//     if(direction == 'down'){
//       console.log("Direction is: " + direction);
// navigation.setOptions({ tabBarStyle: { display: 'none' } }) 
//    }
//     if(direction == 'up'){
//       console.log("Direction is: " + direction);
//       navigation.setOptions({ tabBarStyle: { display: 'flex' } }) 
//     }
//   }
  return (
    <View style={styles.container}>
      <ScrollView horizontal={false} scrollToOverflowEnabled={true} bounces={true} >
        {
          isLoading2 ? (
            <View style={styles.Maincontainer}>
              <View style={{ marginVertical: 16 }}>
                <SmallCardSK />
              </View>
              <View style={{ marginVertical: 16 }}>
                <SmallCardSK />
              </View>
              <View style={{ marginVertical: 16 }}>
                <SmallCardSK />
              </View>
            </View>
          ) : (
            Articles?.map((items, index) => {
              return (
                <View key={index}>
                  <SmallCard
                    title={items?.title}
                    newsurl={items?.url}
                    NewsChannel={items?.source.name}
                    PostedTime={items?.publishedAt}
                    image={items?.urlToImage}
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

export default NewsList