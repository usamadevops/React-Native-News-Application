import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './Button';
import SmallCard from './SmallCard';
const Headlines = () => {
  return <Latest />;
};

const Latest = () => {
  return (
    <View>
      <SmallCard />
      <SmallCard />
      <Button />
    </View>
  );
};
export default Headlines;

const styles = StyleSheet.create({});
