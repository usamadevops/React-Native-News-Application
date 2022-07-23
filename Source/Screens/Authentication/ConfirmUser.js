import React from 'react';
import {
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import styles from './Styles';
import {connect, shallowEqual, useSelector} from 'react-redux';
import {confirmUser} from '../../redux/Modules/auth/action.auth'
import {theme} from '../../constants';
import {
  errorSelector,
  isLoadingSelector,
} from '../../redux/Modules/auth/selector.auth';

import GifLoader from '../../Components/Loader';

const ConfirmUser = ({confirmUserFunc, route}) => {
  const {Email} = route.params;
  const Error = useSelector(errorSelector, shallowEqual);
  const Loader = useSelector(isLoadingSelector, shallowEqual);
  const [code, setCode] = React.useState('');
  const [error, setError] = React.useState('');
  const [errorExist, setErrorExist] = React.useState(false);
  const RegularExp = '^[0-9]*$';

  function validateCode(res) {
    if (code.match(RegularExp)) {
      setCode(res);
      setErrorExist(false);
      if (error != '') {
        setError('');
      }
    } else {
      setCode('');
      setErrorExist(true);
      setError('Code Contain only Numbers 0-9');
    }
  }

  async function ConfirmAccount() {
    if (code.length === 6 && code.match(RegularExp)) {
      setErrorExist(false);
      if (error != '') {
        setError('');
      }
    
      const payload = {
        username: Email,
        Code: code,
      };
      console.log(payload);
      confirmUserFunc(payload);
    } else {
      setErrorExist(true);
      setError('Code Contain only Numbers 0-9');
    }
  }

  return (
    <View style={styles.container}>
      {Loader.isLoading && <GifLoader />}
      <View
        style={{
          backgroundColor: theme.colors.Blue,
          width: 70,
          height: 70,
          position: 'absolute',
          borderRadius: 1000,
          opacity: 0.5,
          left: -20,
          top: -15,
        }}
      />
      <View
        style={{
          backgroundColor: theme.colors.Red,
          width: 70,
          height: 70,
          position: 'absolute',
          borderRadius: 40,
          opacity: 0.5,
          right: -20,
          bottom: -15,
        }}
      />
      <View style={styles.InnerContainer}>
        <View>
          <Text style={styles.headerText}>Confirmation</Text>
        </View>
        <View style={{flexWrap: 'nowrap', marginTop: 5}}>
          <Text style={styles.subHeaderText}>
            Open your Email to view the Code😉
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'column', marginVertical: 20}}>
        <View style={styles.inputOuterContainer}>
          <TextInput
            placeholder="6 Digit Code"
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            placeholderTextColor={theme.colors.MediumGray}
            style={[
              styles.inputInnerContainer,
              {
                backgroundColor: errorExist ? `${theme.colors.Red}30` : null,
                borderColor: errorExist
                  ? theme.colors.Red
                  : theme.colors.MediumGray,
              },
            ]}
            maxLength={6}
            value={code}
            onChangeText={res => validateCode(res)}
          />
        </View>
        <View style={{marginTop: 5}}>
          {errorExist ? (
            <Text style={styles.ErrorText}>📛 {error}</Text>
          ) : (
            <></>
          )}
        </View>
      </View>
      <Pressable
        android_ripple={{
          color: theme.colors.LightGray,
          borderless: false,
          radius: 200,
        }}
        onPress={() => ConfirmAccount()}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Verify</Text>
        </View>
      </Pressable>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    confirmUserFunc: event => dispatch(confirmUser(event)),
  };
};

export default connect(null, mapDispatchToProps)(ConfirmUser);
