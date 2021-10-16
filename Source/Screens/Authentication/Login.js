import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {EyeClose, Tick} from '../../assets/Icons';
import {theme} from '../../constants';
import {fontFamily} from '../../constants/Fonts';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexWrap: 'nowrap',
          paddingTop: 40,
          width: theme.constants.screenWidth - 80,
          paddingBottom: 40 / 2.9,
        }}>
        <View>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Bold,
              fontSize: theme.sizes.h1,
            }}>
            Login Now
          </Text>
        </View>
        <View style={{flexWrap: 'nowrap', marginTop: 5}}>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Demi_Bold,
              fontSize: theme.sizes.subTitle,
              color: theme.colors.MediumGray,
              letterSpacing: 0.3,
            }}>
            To Track your Reading Progress😉
          </Text>
        </View>
      </View>
      <View
        style={{
          width: theme.constants.screenWidth - 80,
          borderWidth: 0.4,
          backgroundColor: '#E8E8E825',
          borderColor: theme.colors.MediumGray,
          borderRadius: 10,
          height: 55,
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={theme.colors.MediumGray}
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
          borderRadius: 10,
          height: 55,
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={theme.colors.MediumGray}
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
      <View
        style={{
          width: theme.constants.screenWidth - 80,

          paddingBottom: 40,
        }}>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Demi_Bold,
              fontSize: theme.sizes.header,
              color: theme.colors.LightGray,
            }}>
            Forgot your Password?
          </Text>
        </TouchableOpacity>
      </View>

      <Pressable
        android_ripple={{
          color: theme.colors.LightGray,
          borderless: false,
          radius: 200,
        }}
        onPress={() => navigation.navigate('Tab')}>
        <View
          style={{
            width: theme.constants.screenWidth - 80,
            borderWidth: 0.4,
            backgroundColor: '#96D3F2',
            borderColor: theme.colors.MediumGray,
            borderRadius: 10,
            height: 55,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Demi_Bold,
              fontSize: theme.sizes.header,
              color: theme.colors.Blue,
            }}>
            Login
          </Text>
        </View>
      </Pressable>
      <View
        style={{
          width: theme.constants.screenWidth - 80,
          justifyContent: 'center',
          paddingTop: 10,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontFamily: fontFamily.Bozon_Regular,
            fontSize: theme.sizes.base,
            color: theme.colors.DarkGray,
          }}>
          Don't have an account?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Bold,
              fontSize: theme.sizes.h3,
              color: theme.colors.Blue,
            }}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            marginVertical: 60,

            width: theme.constants.screenWidth - 200,
            borderWidth: 0.4,
            borderColor: theme.colors.LightGray,
          }}
        />
        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            marginVertical: 38,
            padding: 10,
            backgroundColor: theme.colors.White,
          }}>
          <Text
            style={{
              fontFamily: fontFamily.Bozon_Regular,
              fontSize: theme.sizes.base,
              color: theme.colors.Black,
            }}>
            or
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}>
        <Pressable
          android_ripple={{
            color: theme.colors.LightGray,
            borderless: false,
            radius: 200,
          }}>
          <View
            style={{
              width: theme.constants.screenWidth - 80,
              borderWidth: 1,

              borderColor: theme.colors.Blue,
              borderRadius: 10,
              height: 55,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: fontFamily.Bozon_Demi_Bold,
                fontSize: theme.sizes.header,
                color: theme.colors.Blue,
              }}>
              Login with Facebook
            </Text>
          </View>
        </Pressable>
        <Pressable
          android_ripple={{
            color: theme.colors.LightGray,
            borderless: false,
            radius: 200,
          }}>
          <View
            style={{
              width: theme.constants.screenWidth - 80,
              borderWidth: 1,
              marginVertical: 20,
              borderColor: theme.colors.Blue,
              borderRadius: 10,
              height: 55,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: fontFamily.Bozon_Demi_Bold,
                fontSize: theme.sizes.header,
                color: theme.colors.Blue,
              }}>
              Login with Google
            </Text>
          </View>
        </Pressable>
        <Pressable
          android_ripple={{
            color: theme.colors.LightGray,
            borderless: false,
            radius: 200,
          }}>
          <View
            style={{
              width: theme.constants.screenWidth - 80,
              borderWidth: 1,

              borderColor: theme.colors.Blue,
              borderRadius: 10,
              height: 55,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: fontFamily.Bozon_Demi_Bold,
                fontSize: theme.sizes.header,
                color: theme.colors.Blue,
              }}>
              Continue as a Guest
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: theme.colors.White,
  },
});
