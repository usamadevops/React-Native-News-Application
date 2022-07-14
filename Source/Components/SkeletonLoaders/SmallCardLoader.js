import React,{useRef} from 'react';
import {View,Animated, Dimensions,StyleSheet, Easing} from 'react-native'
import { colors } from '../../constants/theme';
import  LinearGradient  from 'react-native-linear-gradient';
const {width,height}=Dimensions.get('window');


const SmallCardLoader=()=>{
    const AnimatedLG=Animated.createAnimatedComponent(LinearGradient)
    const animatedValue=useRef(new Animated.Value(0)).current;

      React.useEffect(() => {
     Animated.loop( Animated.timing(animatedValue,{
        toValue:1,
        duration:1000,
        easing:Easing.linear.inOut,
        useNativeDriver:true
      })).start();
      }, [])
      
      const translateX=animatedValue.interpolate({
        inputRange:[0,1],
        outputRange:[-width,width]
      });
    return(
        <View style={{
    backgroundColor:colors.LightGray,
    height:120,
    width:width.toString() -20,
    borderRadius:10,
    marginVertical:8
}}>
    <AnimatedLG 
    colors={["#0a0a0a","#b0b0b0","#b0b0b0","#a0a0a0"]}
    start={{x:0,y:0}}
    end={{x:1,y:0}}
    style={{...StyleSheet.absoluteFill,height:25,transform:[{
        translateX:translateX
    }]}}/>
    </View>
    );
}
export default SmallCardLoader;