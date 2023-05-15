import {View, StyleSheet, Dimensions,Text} from 'react-native';
import React from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
import {fontFamily} from '../constants/Fonts';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
const Filterpopup = ({translateY}) => {
  const context = useSharedValue(0);
 
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(e => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT / 1.4);
     
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 1.3) {
        translateY.value = withSpring(0, {damping: 50});
      } else {
        translateY.value = withSpring(-SCREEN_HEIGHT / 1.4, {damping: 50});
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheet, rBottomSheetStyle]}>
        <View style={styles.line} />
        <View style={{flex:1,alignItems:'center',justifyContent:'center',marginBottom:400}}>
          <Text style={{fontSize:24,fontFamily:fontFamily.BRFirma_Bold}}>
           Filters Coming Soon😎
          </Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default Filterpopup;

const styles = StyleSheet.create({
  bottomSheet: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f5f5f5',
    position: 'absolute',
    bottom: -SCREEN_HEIGHT,
    elevation: 20,
    zIndex: 10000,
    shadowOpacity: 0.8,
    shadowColor: '#00000040',
    shadowOffset: {
      width: 5,
      height: -5,
    },
    borderRadius: 20,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});
