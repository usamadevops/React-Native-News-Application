import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {EyeClose, Tick} from '../../assets/Icons';
import {theme} from '../../constants';
import {fontFamily} from '../../constants/Fonts';
import styles from './Styles';
const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: theme.colors.Blue, width: 70, height: 70, position: 'absolute', borderRadius: 40, opacity: 0.5, left: -20, top: -15 }} />
      <View style={{backgroundColor:theme.colors.Red,width:70,height:70,position:'absolute',borderRadius:40,opacity:0.5,right:-20,bottom:-15}}/>
      <View
        style={styles.InnerContainer}>
        <View>
          <Text
            style={styles.headerText}>
            Login Now
          </Text>
        </View>
        <View style={{flexWrap: 'nowrap', marginTop: 5}}>
          <Text
            style={styles.subHeaderText}>
            Where were you Gone?😉
          </Text>
        </View>
      </View>
      <View
        style={styles.inputOuterContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={theme.colors.MediumGray}
          style={styles.inputInnerContainer}
        />
        <Tick />
      </View>
      <View
        style={styles.inputOuterContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={theme.colors.MediumGray}
          secureTextEntry={true}
          style={styles.inputInnerContainer}
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
            style={styles.semiText}>
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
        onPress={() => console.log('SignUp')}>
        <View
          style={styles.buttonContainer}>
          <Text
            style={styles.buttonText}>
          Let's Get you Back
          </Text>
        </View>
      </Pressable>
      <View
        style={styles.hintTextContainer}>
        <Text
          style={styles.hintText}>
         Are You new to this?
        </Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Signup')}>
          <Text
            style={styles.hintTextAction}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
  
      
    </View>
  );
};

export default Login;

