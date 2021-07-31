import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {theme} from '../constants';
import styles from './styles';
import {BackButton, DotsIcon, SearchIcon} from '../assets/Icons';
import {fontFamily} from '../constants/Fonts';
import {useNavigation} from '@react-navigation/native';
const Header2 = ({title, backButton, icon}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
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
              borderless: true,
              radius: 25,
            }}
            onPress={() => alert('dots clicked')}>
            {icon === 'search' ? (
              <SearchIcon color={theme.colors.DarkGray} />
            ) : (
              <DotsIcon color="#000" />
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header2;
