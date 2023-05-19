import React, { useCallback } from 'react';
import moment from 'moment';
import { View, Text, Image, Pressable, useWindowDimensions } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../constants';

const LargeCard = React.memo(({ NewsChannel, title, image, PostedTime, newsurl }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate('Post', {
      url: newsurl,
      title: title
    });
  }, [navigation, newsurl, title]);
  return (
    <Pressable
   
    style={{marginVertical:8,marginHorizontal:5,width:width.toString()-10,alignSelf:'center',backgroundColor:theme.colors.White,borderRadius:0,overflow:'hidden'}}
      onPress={handlePress}>
      <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
        <View style={{flexDirection:'column',width: theme.constants.screenWidth-20,borderRadius:20,borderColor:'#c4c4c4',borderWidth:1}}>
        <Image
            progressiveRenderingEnabled={true}
            loadingIndicatorSource={require('../assets/images/news-icon.png')}
            fadeDuration={100}
              source={image?{uri:image?.toString()}: require('../assets/images/news-icon.png')}
              style={{width: '100%', height: 300, borderTopLeftRadius: 20,borderTopRightRadius:20}}
            />
          <View style={{flex:1,marginTop:8,padding:16}}>
            <Text style={styles.headerText}>
              {title}
               <Text onPress={handlePress} style={{color:theme.colors.Blue}}>
               { ` ...ReadMore`}
               </Text>
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:16}}>
              <Text style={styles.timeText}>
                {moment(PostedTime).fromNow()}
              </Text>
              <Text style={styles.categoryText}>
                {NewsChannel }
              </Text>
            </View>
        
          </View>
          
        </View>
      </View>
    </Pressable>
  );
});

export default LargeCard;
