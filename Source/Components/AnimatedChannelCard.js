import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import ChannelCard from './ChannelCard';

const AnimatedChannelCard = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: translateY }] }}>
      <ChannelCard {...props} />
    </Animated.View>
  );
};

export default AnimatedChannelCard;
