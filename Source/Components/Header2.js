import React from 'react';
import {View, Text, Pressable, Button} from 'react-native';
import {theme} from '../constants';
import styles from './styles';
import {BackButton, DotsIcon, SearchIcon} from '../assets/Icons';
import {fontFamily} from '../constants/Fonts';
import {Filter} from '../assets/Icons';
import {useNavigation} from '@react-navigation/native';
const Header2 = ({title, backButton, icon,onPress,language}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
      }}>
      <View style={styles.Header}>
        {backButton === true ? (
          <Pressable
            style={{marginRight: 10}}
            onPress={() => navigation.goBack()}>
            <BackButton color="#000" />
          </Pressable>
        ) : null}

        <View style={{flex: 1}}>
          <Text
            style={{
              color: theme.colors.Black,
              fontFamily: fontFamily.Bozon_Bold,
              fontSize: theme.fonts.h1.fontSize,
            }}>
            {title}
          </Text>
        </View>
        <View>
          <Pressable
            hitSlop={25}
            android_ripple={{
              color: theme.colors.LightGray,
              borderless: false,
              radius: 50,
            }}
            onPress={onPress}>
            {icon === 'search' ? (
              <SearchIcon color={theme.colors.DarkGray} />
            ) : icon ==='Logout' ?(
                <Text style={{
                  borderWidth: 1,
                  padding:8,
                color: theme.colors.Red,
                fontFamily: fontFamily.Bozon_Demi_Bold,
                fontSize: theme.fonts.body.fontSize,
              }}>Logout</Text>
            ):icon==='lang'?(
            <Text style={{
                  borderWidth: 1,
                  padding:8,
                color: theme.colors.Red,
                fontFamily: fontFamily.Bozon_Demi_Bold,
                fontSize: theme.fonts.body.fontSize,
              }}>{language}</Text>
            ):icon==='filter'?(
              <Filter/>
            ):(
              <></>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header2;
