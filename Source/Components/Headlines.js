import React from 'react';
import {StyleSheet, Text, Animated, Flatlist, SafeAreaView} from 'react-native';
import {theme} from '../constants';
import Button from './Button';
import SmallCard from './SmallCard';
const Headlines = () => {
  return <Latest />;
};

const Latest = () => {
  return (
    <SafeAreaView>
      <SmallCard />
      <SmallCard />
      <Button />
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </SafeAreaView>
  );
};
const World = () => {
  return (
    <SafeAreaView>
      <SmallCard />
      <SmallCard />

      <SmallCard />
      <SmallCard />
      <SmallCard />
    </SafeAreaView>
  );
};
const Technology = () => {
  return (
    <SafeAreaView>
      <SmallCard />
      <SmallCard />
      <Button />
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </SafeAreaView>
  );
};
const Indonesia = () => {
  return (
    <SafeAreaView>
      <SmallCard />
      <SmallCard />
      <Button />
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </SafeAreaView>
  );
};
export default Headlines;

const styles = StyleSheet.create({});
