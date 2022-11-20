import { StyleSheet, Text, View,Pressable,Linking } from 'react-native'
import React from 'react'
import OrgLogo from '../../assets/Icons/OrgLogo';
import { theme } from '../../constants';
import { Header2 } from '../../Components';
import { SafeAreaView } from 'react-native-safe-area-context';

const Aboutus = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: theme.colors.White }}>
                  <Header2 title="About Us" backButton={true}  />

            <View style={{ width: 334, height: 180, marginTop: 24, alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 0, height: 3 }, shadowColor: theme.colors.Blue, shadowRadius: 5, shadowOpacity: 0.2, backgroundColor: theme.colors.White, borderRadius: 20 }}>
                <OrgLogo />
            </View>
            <View style={{ margin: 28 }}>
                <Text style={{ fontSize: 14, fontWeight: '400', fontStyle: 'normal', lineHeight: 28, textAlign: 'left', color: theme.colors.Black }} textBreakStrategy="highQuality">
                    We are a Duo Developers from Pakistan working
                    on projects that can make an impact or bring a
                    change in our system by helping young minds and
                    encouraging them to learn skills that matter rather
                    than wasting time in their early stage of life.
                </Text>
                <Text style={{ fontSize: 14, fontWeight: '400', fontStyle: 'normal', lineHeight: 28, textAlign: 'left', color: theme.colors.Black }} textBreakStrategy="highQuality">
                    For any inquiry or Project that you would like to
                    have hire us for or would like to get a course that could help you become a better Developer. <Pressable onPress={() => navigation.navigate('Gettouch')} style={{ marginBottom: 2 }} hitSlop={25}><Text style={{ color: '#3E7FFF', }}>Contact Us here</Text></Pressable>
                </Text>
                <View style={{marginTop:15}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'normal', textAlign: 'left',  color: theme.colors.Black , marginBottom: 16 }}>App Privacy Policy</Text>
                    <Pressable onPress={() => Linking.openURL('https://www.freeprivacypolicy.com/live/802dc72f-dc16-4fc2-943f-e87f108fcab7')} style={{  width: '100%', borderRadius: 10 }} android_ripple={{ borderless: false, radius: 300, color: '#c4c4c4' }} >
                    <Text style={{ fontSize: 14, fontWeight: '400', fontStyle: 'normal', textAlign: 'left', color: '#3E7FFF', marginBottom: 16 }} textBreakStrategy="highQuality">https://www.privacypolicy.com/StrikeNews</Text>
                </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Aboutus

