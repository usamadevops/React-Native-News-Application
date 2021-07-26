import React from 'react';
import {Pressable, StyleSheet, Text, View, Switch} from 'react-native';
import {Header2} from '../Components';
import {theme} from '../constants';
import {fontFamily} from '../constants/Fonts';
const Settings = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.Container}>
      <Header2 title="Settings" backButton={true} />
      <View style={styles.HeaderView}>
        <Text style={styles.HeaderText}>ACCOUNT</Text>
      </View>
      <Pressable
        style={styles.buttonView}
        android_ripple={{
          color: theme.colors.LightGray,
          borderless: false,
          radius: 300,
        }}>
        <View>
          <Text style={styles.BtnTitle}>Create a free SN Account </Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.buttonView}
        android_ripple={{
          color: theme.colors.LightGray,
          borderless: false,
          radius: 300,
        }}>
        <View>
          <Text style={styles.BtnTitle}>Login to your SN Account </Text>
        </View>
      </Pressable>
      <View style={styles.HeaderView}>
        <Text style={styles.HeaderText}>NOTIFICATIONS</Text>
      </View>
      <View style={styles.NotificationsSwitchView}>
        <View>
          <Text style={styles.BtnTitle}>Coronavirus</Text>
          <Text style={styles.switchCaption}>
            Latest updates on Global Pandemic.
          </Text>
        </View>
        <View>
          <Switch
            trackColor={{false: '#C0C0C0', true: '#00B4D8'}}
            thumbColor={isEnabled ? '#0077B6' : '#0077B6'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.NotificationsSwitchView}>
        <View>
          <Text style={styles.BtnTitle}>Latest News</Text>
          <Text style={styles.switchCaption}>
            Get the Latest News from all over the World.
          </Text>
        </View>
        <View>
          <Switch
            trackColor={{false: '#C0C0C0', true: '#00B4D8'}}
            thumbColor={isEnabled ? '#0077B6' : '#0077B6'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.HeaderView}>
        <Text style={styles.HeaderText}>PRIVACY</Text>
      </View>
      <View style={styles.NotificationsSwitchView}>
        <View>
          <Text style={styles.BtnTitle}>Follow Anonomously</Text>
          <Text style={styles.switchCaption}>
            Do not let others know of your activities
          </Text>
        </View>
        <View>
          <Switch
            trackColor={{false: '#C0C0C0', true: '#00B4D8'}}
            thumbColor={isEnabled ? '#0077B6' : '#0077B6'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.NotificationsSwitchView}>
        <View>
          <Text style={styles.BtnTitle}>Hide your Profile from others</Text>
          <Text style={styles.switchCaption}>Hide your Identity</Text>
        </View>
        <View>
          <Switch
            trackColor={{false: '#C0C0C0', true: '#00B4D8'}}
            thumbColor={isEnabled ? '#0077B6' : '#0077B6'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.HeaderView}>
        <Text style={styles.HeaderText}>GENERAL</Text>
      </View>
      <Pressable
        style={styles.buttonView}
        android_ripple={{
          color: theme.colors.LightGray,
          borderless: false,
          radius: 300,
        }}>
        <View>
          <Text style={styles.BtnTitle}>Terms of Service</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.buttonView}
        android_ripple={{
          color: theme.colors.LightGray,
          borderless: false,
          radius: 300,
        }}>
        <View>
          <Text style={styles.BtnTitle}>Send Feedback</Text>
        </View>
      </Pressable>
      <View style={{position: 'absolute', alignSelf: 'center', bottom: 20}}>
        <Text style={styles.VersionText}>VERSION 1.0</Text>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: theme.constants.screenWidth,
    backgroundColor: theme.colors.White,
  },
  HeaderView: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  VersionText: {
    fontFamily: fontFamily.Bozon_Bold,
    fontSize: theme.fonts.header.fontSize,
    color: theme.colors.Black,
    letterSpacing: 0.5,
  },
  HeaderText: {
    fontFamily: fontFamily.Bozon_Bold,
    fontSize: theme.fonts.subTitle.fontSize,
    color: theme.colors.MediumGray,
    letterSpacing: 0.5,
  },
  buttonView: {
    width: theme.constants.screenWidth,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  BtnTitle: {
    fontFamily: fontFamily.BRFirma_Medium,
    fontSize: theme.fonts.header.fontSize,
    color: theme.colors.Black,
    letterSpacing: 0.5,
  },
  switchCaption: {
    fontFamily: fontFamily.Bozon_Demi_Bold,
    fontSize: theme.fonts.body.fontSize,
    color: theme.colors.DarkGray,
    letterSpacing: 0.9,
    lineHeight: 25,
  },
  NotificationsSwitchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
