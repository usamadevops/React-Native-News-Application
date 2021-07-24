import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
const Searchbar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
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
    textAlign: 'center',
    width: theme.constants.screenWidth,
    fontFamily: fontFamily.Bozon_Demi_Bold,
    fontSize: theme.fonts.h3.fontSize,
    color: theme.colors.Blue,
  },
});
