import React from 'react';
import {StyleSheet, Text,Keyboard , TextInput,Pressable, View} from 'react-native';
import { SearchIcon } from '../assets/Icons';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
const Searchbar = ({ text, onpress,onClick,placeholder }) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder || 'Search '}
        value={text}
        onChangeText={(text)=>onpress(text)}
        // onKeyPress={()=>onClick()}
        placeholderTextColor={theme.colors.LightGray}
      />
       <Pressable
            hitSlop={25}
            android_ripple={{
              color:theme.colors.LightGray,
              borderless:true,
              radius:25
            }}
            onPress={onClick}>
              <SearchIcon color={theme.colors.Blue} />
           </Pressable>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    width: theme.constants.screenWidth - 40,
    alignItems: 'center',
    backgroundColor: '#E8E8E885',
    borderRadius: 10,
    justifyContent:"center",
    flexDirection:"row",
    width: theme.constants.screenWidth - 40,
  },
  input: {
    width: theme.constants.screenWidth - 100,
    paddingHorizontal:15,
    height:60,
    fontFamily: fontFamily.Bozon_Demi_Bold,
    fontSize: theme.fonts.h3.fontSize,
    color: theme.colors.Blue,
  },
});
