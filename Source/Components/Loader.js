import React from 'react'
import { StyleSheet, View ,Image} from 'react-native'

const GifLoader = () => {
    return (
        <View style={styles.contaienr}>
           <Image source={require('../assets/SNLoader.gif')}/>
        </View>
    )
}

export default GifLoader

const styles = StyleSheet.create({
    contaienr: {
     
        backgroundColor:'#00000020'
      
    }
})
