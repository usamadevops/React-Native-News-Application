import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
const Button = () => {
  return (
    <View style={{marginHorizontal: 20, borderRadius: 10}}>
      <Pressable
        focusable={Boolean}
        style={styles.container}
        android_ripple={{
          color: theme.colors.LightGray,
          borderless: false,
          radius: 200,
        }}>
        <Text style={styles.input}>Read More on Technology</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: theme.constants.screenWidth - 40,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E885',
    borderRadius: 10,
  },
  input: {
    fontFamily: fontFamily.Bozon_Bold,
    fontSize: theme.fonts.header.fontSize,
    color: theme.colors.Blue,
  },
});
