import { StyleSheet, Text, View ,Linking,Pressable} from 'react-native'
import React from 'react'
import { theme } from '../../constants';
import { Header2 } from '../../Components';
import OrgLogo from '../../assets/Icons/OrgLogo';
import { SafeAreaView } from 'react-native-safe-area-context';

const Getintotouch = () => {
    function openMap() {
        const url = Platform.select({
            ios: `maps:0,0?q=Taxila, Rawalpindi, Punjab, Pakistan`,
            android: `geo:0,0?q=Taxila, Rawalpindi, Punjab, Pakistan`,
        })
        Linking.openURL(url);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.White, alignItems: 'center' }}>
            <Header2 title="Get in Touch" backButton={true}/>
            <View style={{ width: 334, height: 180, marginTop: 24, alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 0, height: 3 }, shadowColor: theme.colors.Blue, shadowRadius: 5, shadowOpacity: 0.2, backgroundColor: theme.colors.White, borderRadius: 20, elevation: 2 }}>
                <OrgLogo />
            </View>
            <View style={{ margin: 20, width: '100%' }}>
                <Pressable onPress={() => openMap()} style={{ padding: 20, width: '100%', borderRadius: 10 }} android_ripple={{ borderless: false, radius: 300, color: '#c4c4c4' }}>
                    <Text style={{ fontSize: 16, fontWeight: '400', fontStyle: 'normal', textAlign: 'center', color: '#3E7FFF', marginBottom: 16 }} textBreakStrategy="highQuality">📍 Wah Cantt , Pakistan</Text>
                </Pressable>
                <Pressable onPress={() => Linking.openURL(`tel:00923219520029`)} style={{ padding: 20, width: '100%', borderRadius: 10 }} android_ripple={{ borderless: false, radius: 300, color: '#c4c4c4' }}>
                    <Text style={{ fontSize: 16, fontWeight: '400', fontStyle: 'normal', textAlign: 'center', color: '#3E7FFF', marginBottom: 16 }} textBreakStrategy="highQuality">🤙 00923219520029</Text>
                </Pressable>
                <Pressable onPress={() => Linking.openURL(`whatsapp://send?phone=+923219520029`)} style={{ padding: 20, width: '100%', borderRadius: 10 }} android_ripple={{ borderless: false, radius: 300, color: '#c4c4c4' }} >
                    <Text style={{ fontSize: 16, fontWeight: '400', fontStyle: 'normal', textAlign: 'center', color: '#3E7FFF', marginBottom: 16 }} textBreakStrategy="highQuality"> 📞 Call us On Whatsapp</Text>
                </Pressable>
                <Pressable onPress={() => Linking.openURL('mailto:ghareebdevelopers@gmail.com')} style={{ padding: 20, width: '100%', borderRadius: 10 }} android_ripple={{ borderless: false, radius: 300, color: '#c4c4c4' }} >
                    <Text style={{ fontSize: 16, fontWeight: '400', fontStyle: 'normal', textAlign: 'center', color: '#3E7FFF', marginBottom: 16 }} textBreakStrategy="highQuality">📨 ghareebdevelopers@gmail.com</Text>
                </Pressable>

            </View>
        </SafeAreaView>
    )
}

export default Getintotouch

