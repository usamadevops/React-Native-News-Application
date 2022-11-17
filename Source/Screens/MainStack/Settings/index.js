import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {Header2} from '../../../Components';
import {theme} from '../../../constants';
import {fontFamily} from '../../../constants/Fonts';


const Settings = () => {

  return (
    <SafeAreaView style={styles.Container}>
    <ScrollView >
      <Header2 title="Settings" backButton={true}  />
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
        <View>
          <Image source={require('../../../assets/images/soon.png')}/>
        </View>
      </Pressable>
      <Pressable
disabled={true}
        style={styles.buttonView}
        android_ripple={{
          color: theme.colors.LightGray,
          borderless: false,
          radius: 300,
        }}>
        <View>
          <Text style={styles.BtnTitle}>Send Feedback</Text>
        </View>
        <View>
          <Image source={require('../../../assets/images/soon.png')}/>
        </View>
      </Pressable>
      <View
        style={{
          position: 'relative',
          alignSelf: 'center',
          marginTop: 60,
        }}>
        <Text style={styles.VersionText}>VERSION 1.0</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};



export default Settings


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
  overflowcontent: {
    width: theme.constants.screenWidth - 100,
    flexWrap: 'nowrap',
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
  justifyContent:'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection:"row"
  },
  BtnTitle: {
    fontFamily: fontFamily.Bozon_Regular,
    fontSize: theme.fonts.header.fontSize,
    color: theme.colors.Black,
    letterSpacing: 0.5,
  },
  switchCaption: {
    fontFamily: fontFamily.Bozon_Regular,
    fontSize: theme.fonts.body.fontSize,
    color: theme.colors.DarkGray,
    letterSpacing: 0.5,
    lineHeight: 25,
  },
  NotificationsSwitchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
