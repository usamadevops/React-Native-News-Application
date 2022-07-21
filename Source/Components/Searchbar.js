import React from 'react';
import {StyleSheet, Text,Keyboard , TextInput, View} from 'react-native';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
const Searchbar = ({ text, onpress }) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={text}
        onChangeText={onpress}
        onKeyPress={()=>Keyboard.dismiss()}
        placeholderTextColor={theme.colors.LightGray}
      />
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
  },
  input: {
    width: theme.constants.screenWidth - 40,
    paddingHorizontal:15,
    fontFamily: fontFamily.Bozon_Demi_Bold,
    fontSize: theme.fonts.h3.fontSize,
    color: theme.colors.Blue,
  },
});
