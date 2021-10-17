import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { connect, shallowEqual, useSelector } from 'react-redux';
import { EyeClose, EyeOpen, Tick } from '../../assets/Icons';
import { theme } from '../../constants';
import { fontFamily } from '../../constants/Fonts';
import styles from './Styles';
import { regularExp } from '../../Utils/regExp';

const Signup = ({ navigation }) => {
  const [NickName, setNickName] = useState({
    nickname: '',
    checknickNameInputChange: false
  });
  const [Email, setEmail] = useState({
    useremail: 'ualtaf234@gmail.com',
    checkEmailInputChange: false
  });
  const [Passward, setPassward] = useState({
    Password: '',
    secureTextEntry: true
  });

  const validateEmail = (email) => {
    const re = regularExp.email;
    re.test(email) === true ? setEmail({ ...Email, useremail: email, checkEmailInputChange: true })
      :
      setEmail({ ...Email, useremail: email, checkEmailInputChange: false });
  };
  const NickNameChange = (nicknameval) => {
    const re = regularExp.fullName;
    if (nicknameval.length > 5 && re.test(nicknameval)) {
      setNickName({ ...NickName, nickname: nicknameval, checknickNameInputChange: true });
    } else {
      setNickName({ ...NickName, nickname: '', checknickNameInputChange: false });
    }
  };
  function HandlePasswordChange(PasswordVal) {
    setPassward({ ...Passward, Password: PasswordVal });
  }
  const updateSecuretextEntry = () => {
    setPassward({ ...Passward, secureTextEntry: !Passward.secureTextEntry });
  };
  const secureIt = Passward.secureTextEntry ? true : false;
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: theme.colors.Blue, width: 70, height: 70, position: 'absolute', borderRadius: 40, opacity: 0.5, right: -20, top: -15 }} />
      <View style={{ backgroundColor: theme.colors.Red, width: 70, height: 70, position: 'absolute', borderRadius: 40, opacity: 0.5, left: -20, bottom: -15 }} />
      <View
        style={styles.InnerContainer}>
        <View>
          <Text
            style={styles.headerText}>
            Signup Now
          </Text>
        </View>
        <View style={{ flexWrap: 'nowrap', marginTop: 5 }}>
          <Text
            style={styles.subHeaderText}>
            To Track your Reading Progress😉
          </Text>
        </View>
      </View>
      <View
        style={styles.inputOuterContainer}>
        <TextInput
          placeholder="NickName"
          placeholderTextColor={theme.colors.MediumGray}
          style={styles.inputInnerContainer}
          value={NickName}
          onChangeText={(res) => NickNameChange(res)}
        />
        {
          NickName.checknickNameInputChange ?
            <Tick />
            :
            null
        }
      </View>
      <View
        style={styles.inputOuterContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={theme.colors.MediumGray}
          style={styles.inputInnerContainer}
          value={Email}
          onChangeText={(res) => validateEmail(res)}
        />
        {
          Email.checkEmailInputChange ?
            <Tick />
            :
            null
        }
      </View>
      <View
        style={styles.inputOuterContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={theme.colors.MediumGray}
          secureTextEntry={secureIt}
          style={styles.inputInnerContainer}
          value={Passward}
          onChangeText={(res) => HandlePasswordChange(res)}
        />
        <TouchableOpacity onPress={() => updateSecuretextEntry()} style={{ zIndex: 10, }} >
          {Passward.secureTextEntry == true ?
            <EyeOpen />
            :
            <EyeClose />
          }
        </TouchableOpacity>
      </View>

      <Pressable
        android_ripple={{
          color: theme.colors.LightGray,
          borderless: false,
          radius: 200,
        }}
        onPress={() => console.log('SignUp')}>
        <View
          style={styles.buttonContainer}>
          <Text
            style={styles.buttonText}>
            Register Now
          </Text>
        </View>
      </Pressable>
      <View
        style={styles.hintTextContainer}>
        <Text
          style={styles.hintText}>
          Already have an account?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Text
            style={styles.hintTextAction}>
            Login
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
            style={styles.otherOptionButtonContainer}>
            <Text
              style={styles.otherOptionButtonText}>
              Continue as a Guest
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;