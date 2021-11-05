import React from 'react'
import { StyleSheet, View ,Image} from 'react-native'

const GifLoader = () => {
    return (
        <View style={styles.contaienr}>
           <Image source={require('../assets/SNLoader.gif')} style={{width:400,height:400}}/>
        </View>
    )
}

export default GifLoader;

const styles = StyleSheet.create({
    contaienr: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        top: 0,
        flex: 1,
        justifyContent:'center',
       alignItems:'center',
        zIndex:1000,
        backgroundColor:'#00000060'
      
    }
})
