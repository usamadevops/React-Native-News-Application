import { View, Text,StyleSheet ,Dimensions} from 'react-native'
import React from 'react';
import  {Gesture,GestureDetector } from 'react-native-gesture-handler';
const { height: SCREEN_HEIGHT } = Dimensions.get('window');
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
const Filterpopup = ({translateY}) => {
    const context = useSharedValue(0);
    const gesture = Gesture.Pan().onStart(() => {
        context.value = { y: translateY.value };
    }).onUpdate((e) => {
        translateY.value = e.translationY + context.value.y;
        translateY.value=Math.max (translateY.value,-SCREEN_HEIGHT/1.4);

    }).onEnd(()=>{
        if(translateY.value > -SCREEN_HEIGHT/1.3){
            translateY.value=withSpring(0,{damping:50});
        }
        else{
            translateY.value=translateY.value;
        }
    });

    const rBottomSheetStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }]
        }
    });


    
  return (
    <GestureDetector gesture={gesture} >

  <Animated.View style={[styles.bottomSheet, rBottomSheetStyle]}>
  <View style={styles.line} />
                
            </Animated.View>
    </GestureDetector>
  )
}

export default Filterpopup;

const styles=StyleSheet.create({
    bottomSheet: {
    
        height: '100%',
        width: '100%',
        backgroundColor: "#fff",
        position: 'absolute',
        top:SCREEN_HEIGHT,
        elevation:-20,
        shadowOpacity:0.8,
        shadowColor:'#00000040',
        shadowOffset:{
            width:5,
            height:-5,
        },
        borderRadius: 20,
        zIndex: 1000,
        
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: "center",
        marginVertical: 15,
        borderRadius: 2
    }
})