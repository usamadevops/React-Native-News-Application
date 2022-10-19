import React from 'react';
import {View, Text, Image,SafeAreaView} from 'react-native';
import {theme} from '../../../constants';
import {fontFamily} from '../../../constants/Fonts';
import {Header2, NewsList} from '../../../Components';
import {sizes} from '../../../constants/theme';
import API from '../../../../ApiKey';
import { ScrollView } from 'react-native-gesture-handler';
const TopicProfile = ({ route,navigation }) => {
  const {
    channelName,
    channelDesc,
    channelUrl,
    channelCategory,
    channelCountry,
    channelLang } = route.params;
    console.log(channelUrl.split('.').splice([1][2]))
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.White}}>
      <Header2 title={channelName} backButton={true} icon="lang" language={channelLang} />
      <ScrollView style={{flex:1}} stickyHeaderHiddenOnScroll={false} stickyHeaderIndices={[1]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', paddingRight: 15}}>
            <Image
              source={require('../../../assets/images/CNN.png')}
              style={{width: 50, height: 50, borderRadius: 5}}
            />
          </View>
          <View style={{flexDirection: 'column',flex:2}}>
            <Text
              style={{
                fontFamily: fontFamily.Bozon_Demi_Bold,
                fontSize: sizes.h2,
                
              }}>
              {channelName}
            </Text>

            <Text
              textBreakStrategy='balanced'
              style={{
                fontFamily: fontFamily.BRFirma_Medium,
                fontSize: sizes.base,
                color: theme.colors.DarkGray,
                lineHeight: 30,
              }}>
             {channelDesc}
            </Text>
          </View>
        </View>
        </View>
        <View>
        <Text
                style={{
                  fontFamily: fontFamily.Bozon_Demi_Bold,
                  fontSize: theme.fonts.h3.fontSize,
                  lineHeight: 22,
                  letterSpacing: 0.34,
              color: theme.colors.Black,
             paddingHorizontal: 16,
             paddingVertical: 16,
                  backgroundColor:theme.colors.White
                }}>
               All News Articles by {channelName}
                </Text>
        </View>
        <View style={{ flex:1, marginTop: 20 }}>
       <NewsList queryString={`https://newsapi.org/v2/everything?domains=${channelUrl.slice(7,50)}&apiKey=${API}`} />
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default TopicProfile;
