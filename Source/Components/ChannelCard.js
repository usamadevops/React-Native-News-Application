import React from 'react';
import {Text, View, FlatList, Image, Pressable} from 'react-native';
import styles from './styles';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
import {BackButton} from '../assets/Icons';
import {useNavigation} from '@react-navigation/native';
const ChannelCard = ({ name, description, category, country, language, url }) => {

  const navigation = useNavigation();
  return (
    <Pressable android_ripple={{ color: '#FFFAFB', borderless: false, radius: theme.constants.screenWidth  }} onPress={() => navigation.navigate('TopicProfile', {
      channelName: name,
      channelDesc: description,
      channelCategory: category,
      channelCountry: country,
      channelLang: language,
      channelUrl:url
    })} style={{
      width: theme.constants.screenWidth,
      backgroundColor: theme.colors.White,
     
      borderRadius: 10,
      marginVertical:10,
 
    }}>
      <View >
        <View style={styles.SmallCardContainer}>
        
          <View style={{ flex: 3,flexDirection:'row' }}>
               
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: fontFamily.Bozon_Demi_Bold,
                  fontSize: theme.fonts.header.fontSize,
                  lineHeight: 22,
                  letterSpacing: 0.5,
                  color: theme.colors.Blue,
                }}>
                {name}
              </Text>
              <View style={{flexDirection:'row',marginTop:8}}>
              <Text
                style={{
                  fontFamily: fontFamily.Bozon_Demi_Bold,
                  fontSize: theme.fonts.subTitle.fontSize,
                  lineHeight: 22,
                  letterSpacing: 0.34,
                  color: theme.colors.MediumGray,
                }}>
                 {language.toUpperCase()}
                </Text>
               
                <Text style={{
                  fontFamily: fontFamily.Bozon_Demi_Bold,
                  fontSize: theme.fonts.caption.fontSize,
                  lineHeight: 22,
                  letterSpacing: 0.34,
                  color: theme.colors.MediumGray,
                }}>
                  {'   '}
                  ▪
                  {'   '}
                </Text>
                <Text
                style={{
                  fontFamily: fontFamily.Bozon_Demi_Bold,
                  fontSize: theme.fonts.subTitle.fontSize,
                  lineHeight: 22,
                  letterSpacing: 0.34,
                  color: theme.colors.MediumGray,
                }}>
              {country.toUpperCase()}
              </Text>
              </View>
              
            </View>
          </View>
          <Pressable
            android_ripple={{color: '#c4c4c4', borderless: true, radius: 20}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 15,
            paddingVertical:5,
                borderRadius:20,
                transform: [{rotate: '180deg'},{scale:0.7}],
              }}>
              <BackButton color={theme.colors.Blue} />
            </View>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default ChannelCard;
