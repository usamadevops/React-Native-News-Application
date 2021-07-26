import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {EyeClose, Tick} from '../assets/Icons';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';

const Login = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: theme.constants.screenWidth - 80,
          borderWidth: 0.4,
          backgroundColor: '#E8E8E825',
          borderColor: theme.colors.MediumGray,
          borderRadius: 5,
          height: 55,
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={theme.colors.Blue}
          style={{
            padding: 10,
            fontFamily: fontFamily.Bozon_Demi_Bold,
            fontSize: theme.sizes.h2,
            borderRadius: 10,
            height: 55,
            width: theme.constants.screenWidth - 120,
            color: theme.colors.Blue,
          }}
        />
        <Tick />
      </View>
      <View
        style={{
          width: theme.constants.screenWidth - 80,
          borderWidth: 0.4,
          backgroundColor: '#E8E8E825',
          borderColor: theme.colors.MediumGray,
          borderRadius: 5,
          height: 55,
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={theme.colors.Blue}
          secureTextEntry={true}
          style={{
            padding: 10,
            fontFamily: fontFamily.Bozon_Demi_Bold,
            fontSize: theme.sizes.h2,
            borderRadius: 10,
            height: 55,
            width: theme.constants.screenWidth - 120,
            color: theme.colors.Blue,
          }}
        />
        <EyeClose />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.White,
  },
});
